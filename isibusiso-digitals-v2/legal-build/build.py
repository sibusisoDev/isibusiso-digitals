# -*- coding: utf-8 -*-
"""Generates src/data/legal.ts and public/legal/*.pdf from content.py.

Usage:  python3 build.py /path/to/project
"""
import json
import os
import sys
from xml.sax.saxutils import escape


from PIL import ImageChops
from PIL import Image as PILImage
from reportlab.platypus import Image, Spacer
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    BaseDocTemplate, Frame, Image, KeepTogether, PageBreak, PageTemplate,
    Paragraph, Spacer, Table, TableStyle,
)

import content as C

PROJECT = sys.argv[1] if len(sys.argv) > 1 else "."
PRIMARY = colors.HexColor("#6d28d9")
INK = colors.HexColor("#18181b")
GREY = colors.HexColor("#52525b")
LIGHT = colors.HexColor("#e4e4e7")
TINT = colors.HexColor("#f4f1fb")
LOGO = os.path.join(PROJECT, "public", "iS_Logo.png")


# ------------------------------------------------------------------ TS file
def write_ts():
    docs = []
    for d in C.DOCUMENTS:
        doc = {k: d[k] for k in ("slug", "title", "summary") if k in d}
        if d.get("intro"):
            doc["intro"] = d["intro"]
        doc["pdf"] = "/legal/" + d["pdf"]
        secs = []
        for s in d["sections"]:
            item = {"id": s["id"], "number": s["number"], "heading": s["heading"]}
            if s["part"]:
                item["part"] = {"title": s["part"]["title"], "intro": s["part"]["intro"]}
            item["blocks"] = s["blocks"]
            secs.append(item)
        doc["sections"] = secs
        docs.append(doc)

    header = '''// GENERATED FILE. Do not edit by hand.
// Source: legal-build/content.py. Edit the wording there, then run build.py
// (it rewrites this file AND the PDFs in public/legal so they always match).

export type LegalBlock =
    | { type: "p"; text: string }
    | { type: "list"; items: string[] }
    | { type: "facts"; rows: [string, string][] }
    | { type: "table"; head: string[]; rows: string[][] };

export type LegalSection = {
    id: string;
    number: string;
    heading: string;
    part?: { title: string; intro: string };
    blocks: LegalBlock[];
};

export type LegalDocument = {
    slug: "privacy" | "cookies" | "terms";
    title: string;
    summary: string;
    intro?: string;
    pdf: string;
    sections: LegalSection[];
};

'''
    body = (
        "export const legalUpdated = %s;\n" % json.dumps(C.UPDATED)
        + "export const legalVersion = %s;\n\n" % json.dumps(C.VERSION)
        + "export const company = %s;\n\n" % json.dumps(C.COMPANY, indent=4, ensure_ascii=False)
        + "export const legalDocuments: LegalDocument[] = %s;\n\n" % json.dumps(docs, indent=4, ensure_ascii=False)
        + "export const getLegalDocument = (slug: string) => legalDocuments.find((d) => d.slug === slug);\n"
    )
    out = os.path.join(PROJECT, "src", "data", "legal.ts")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8", newline="\n") as f:
        f.write(header + body)
    print("wrote", out)


# ------------------------------------------------------------------ PDFs
def styles():
    base = dict(fontName="Helvetica", textColor=INK, alignment=TA_LEFT)
    return {
        "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=INK, spaceAfter=4),
        "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=9, leading=13, textColor=GREY),
        "summary": ParagraphStyle("summary", fontName="Helvetica", fontSize=11, leading=16, textColor=GREY, spaceAfter=10),
        "part": ParagraphStyle("part", fontName="Helvetica-Bold", fontSize=15, leading=19, textColor=PRIMARY, spaceBefore=16, spaceAfter=2),
        "partintro": ParagraphStyle("partintro", fontName="Helvetica-Oblique", fontSize=9.5, leading=13, textColor=GREY, spaceAfter=6),
        "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=INK, spaceBefore=12, spaceAfter=4, keepWithNext=1),
        "body": ParagraphStyle("body", fontSize=9.8, leading=14.5, spaceAfter=6, **base),
        "bullet": ParagraphStyle("bullet", fontSize=9.8, leading=14.5, leftIndent=14, bulletIndent=2, spaceAfter=3, **base),
        "toc": ParagraphStyle("toc", fontName="Helvetica", fontSize=9, leading=13, textColor=GREY),
        "toch": ParagraphStyle("toch", fontName="Helvetica-Bold", fontSize=9, leading=13, textColor=INK, spaceBefore=6),
        "cell": ParagraphStyle("cell", fontName="Helvetica", fontSize=8.6, leading=11.5, textColor=INK),
        "cellh": ParagraphStyle("cellh", fontName="Helvetica-Bold", fontSize=8.6, leading=11.5, textColor=colors.white),
        "label": ParagraphStyle("label", fontName="Helvetica-Bold", fontSize=9.4, leading=13, textColor=INK),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.6, leading=12, textColor=GREY),
    }


class NumberedCanvas(canvas.Canvas):
    """Canvas that can print 'Page X of Y' in the footer."""

    def __init__(self, *args, footer_title="", **kwargs):
        super().__init__(*args, **kwargs)
        self._saved = []
        self.footer_title = footer_title

    def showPage(self):
        self._saved.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        total = len(self._saved)
        for state in self._saved:
            self.__dict__.update(state)
            self._footer(total)
            super().showPage()
        super().save()

    def _footer(self, total):
        self.setStrokeColor(LIGHT)
        self.setLineWidth(0.5)
        self.line(22 * mm, 16 * mm, A4[0] - 22 * mm, 16 * mm)
        self.setFont("Helvetica", 8)
        self.setFillColor(GREY)
        self.drawString(22 * mm, 11.5 * mm, "iSibusiso Digital Experiences  |  " + self.footer_title)
        self.drawRightString(A4[0] - 22 * mm, 11.5 * mm, "Page %d of %d" % (self._pageNumber, total))


def para(text, style):
    return Paragraph(escape(text), style)


def block_flowables(b, st):
    out = []
    if b["type"] == "p":
        out.append(para(b["text"], st["body"]))
    elif b["type"] == "list":
        for item in b["items"]:
            out.append(Paragraph(escape(item), st["bullet"], bulletText="\u2022"))
        out.append(Spacer(1, 3))
    elif b["type"] == "facts":
        rows = [[para(k, st["label"]), para(v, st["body"])] for k, v in b["rows"]]
        t = Table(rows, colWidths=[38 * mm, None])
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ]))
        out += [t, Spacer(1, 6)]
    elif b["type"] == "table":
        width = A4[0] - 44 * mm
        cols = [0.20, 0.18, 0.30, 0.18, 0.14]
        data = [[para(h, st["cellh"]) for h in b["head"]]]
        for r in b["rows"]:
            data.append([para(c, st["cell"]) for c in r])
        t = Table(data, colWidths=[width * c for c in cols], repeatRows=1)
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
            ("GRID", (0, 0), (-1, -1), 0.5, LIGHT),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, TINT]),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ]))
        out += [t, Spacer(1, 8)]
    return out


def acceptance_page(st):
    f = [PageBreak()]
    f.append(para("Acceptance of service terms", st["title"]))
    f.append(para(
        "Optional signature page. Complete this page if you want a signed copy of the agreement for a project. "
        "Signing confirms that you have read and accept Part B of these Terms & Conditions and the quote or proposal "
        "referred to below.", st["summary"]))

    def box(title, rows):
        data = [[para(title, st["part"]), ""]]
        for label in rows:
            data.append([para(label, st["label"]), ""])
        t = Table(data, colWidths=[48 * mm, None], rowHeights=[10 * mm] + [11 * mm] * len(rows))
        t.setStyle(TableStyle([
            ("SPAN", (0, 0), (1, 0)),
            ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ("LINEBELOW", (1, 1), (1, -1), 0.6, GREY),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ]))
        return t

    f.append(box("The client", [
        "Full name", "Company or trading name", "Registration number (if any)",
        "Quote or project reference", "Signature", "Date",
    ]))
    f.append(Spacer(1, 10 * mm))
    f.append(box("iSibusiso Digital Experiences", [
        "Name", "Signature", "Date",
    ]))
    f.append(Spacer(1, 6 * mm))
    f.append(para("Issued by iSibusiso Digital Experiences, " + C.COMPANY["address"] + ", " + C.EMAIL + ".", st["small"]))
    return f


def build_pdf(d):
    st = styles()
    out_dir = os.path.join(PROJECT, "public", "legal")
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, d["pdf"])

    doc = BaseDocTemplate(
        path, pagesize=A4,
        leftMargin=22 * mm, rightMargin=22 * mm, topMargin=20 * mm, bottomMargin=24 * mm,
        title=d["title"] + " | iSibusiso Digital Experiences",
        author="iSibusiso Digital Experiences",
        subject=d["summary"],
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame])])


    story = []

    if os.path.exists(LOGO):
        story.append(get_document_logo(LOGO))
        story.append(Spacer(1, 8 * mm))

    story.append(para(d["title"], st["title"]))

    story.append(
        para(
            "Last updated: %s   |   Version %s" % (C.UPDATED, C.VERSION),
            st["meta"]
        )
    )

    story.append(Spacer(1, 6))

    story.append(para(d["summary"], st["summary"]))

    if d.get("intro"):
        story.append(para(d["intro"], st["body"]))

    # contents
    story.append(para("Contents", st["toch"]))
    last_part = None
    for s in d["sections"]:
        if s["part"] and s["part"] is not last_part:
            last_part = s["part"]
            story.append(para(s["part"]["title"], st["toch"]))
        story.append(para("%s  %s" % (s["number"], s["heading"]), st["toc"]))
    story.append(Spacer(1, 4))

    for s in d["sections"]:
        head = []
        if s["part"]:
            head += [
                para(s["part"]["title"], st["part"]),
                para(s["part"]["intro"], st["partintro"]),
            ]
        head.append(para("%s  %s" % (s["number"], s["heading"]), st["h2"]))
        flows = []
        for b in s["blocks"]:
            flows += block_flowables(b, st)
        # keep the heading (and any part title) together with the first piece of text
        story.append(KeepTogether(head + flows[:1]))
        story += flows[1:]

    if d.get("acceptanceForm"):
        story += acceptance_page(st)

    title = d["title"]
    doc.build(story, canvasmaker=lambda *a, **k: NumberedCanvas(*a, footer_title=title, **k))
    print("wrote", path)

def get_document_logo(path):
    # Open the original logo
    img = PILImage.open(path).convert("RGB")

    # Crop unnecessary white space
    background = PILImage.new("RGB", img.size, (255, 255, 255))
    difference = ImageChops.difference(img, background)
    bbox = difference.point(lambda p: 255 if p > 15 else 0).getbbox()

    if bbox:
        img = img.crop(bbox)

    # Save the cropped logo
    cropped_path = path.replace(".png", "_cropped.png")
    img.save(cropped_path)

    # Get the cropped dimensions
    logo_width, logo_height = img.size

    # Maximum dimensions for the PDF
    max_width = 160 * mm
    max_height = 25 * mm

    # Preserve the original aspect ratio
    scale = min(
        max_width / logo_width,
        max_height / logo_height
    )

    return Image(
        cropped_path,
        width=logo_width * scale,
        height=logo_height * scale,
        hAlign="LEFT"
    )

if __name__ == "__main__":
    write_ts()
    for d in C.DOCUMENTS:
        build_pdf(d)
