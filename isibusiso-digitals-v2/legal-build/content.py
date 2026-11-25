# -*- coding: utf-8 -*-
"""Legal content for iSibusiso Digital Experiences.

One source feeds BOTH the website pages (src/data/legal.ts) and the PDFs
(public/legal/*.pdf), so the two can never disagree.

Block types:
  {"type": "p", "text": ...}
  {"type": "list", "items": [...]}
  {"type": "facts", "rows": [[label, value], ...]}
  {"type": "table", "head": [...], "rows": [[...], ...]}
"""

UPDATED = "14 November 2026"
VERSION = "1.1"

COMPANY = {
    "tradingName": "iSibusiso Digital Experiences",
    "email": "info@isibusiso-digital.co.za",
    "phone": "+27 60 305 1230",
    "address": "Palmridge, Alberton, 1458, South Africa",
    "developer": "Sibusiso Khanye",
}

EMAIL = COMPANY["email"]


def p(text):
    return {"type": "p", "text": text}


def ul(*items):
    return {"type": "list", "items": list(items)}


def facts(*rows):
    return {"type": "facts", "rows": [list(r) for r in rows]}


def table(head, rows):
    return {"type": "table", "head": head, "rows": rows}


def sec(id_, heading, *blocks, part=None):
    return {"id": id_, "heading": heading, "blocks": list(blocks), "part": part}


# ---------------------------------------------------------------- PRIVACY
PRIVACY = {
    "slug": "privacy",
    "title": "Privacy Policy",
    "pdf": "privacy-policy.pdf",
    "summary": "How we collect, use, store and protect your personal information, and the rights you have under South Africa’s POPIA.",
    "sections": [
        sec(
            "who-we-are", "Who we are",
            p("This Privacy Policy explains how iSibusiso Digital Experiences (“we”, “us”, “our”) handles personal information when you visit our website or get in touch with us. Under the Protection of Personal Information Act 4 of 2013 (“POPIA”), we are the “responsible party”."),
            facts(
                ("Business", COMPANY["tradingName"]),
                ("Address", COMPANY["address"]),
                ("Email", EMAIL),
                ("Phone", COMPANY["phone"]),
                ("Developer", COMPANY["developer"] + " (contact us at the email address above)"),
            ),
        ),
        sec(
            "what-we-collect", "What personal information we collect",
            p("We only collect what we need. Depending on how you deal with us, this may include:"),
            ul(
                "Enquiry details: your name, email address, the type of project you have in mind and your message, when you complete our contact form.",
                "Communication details: your email address, phone number or WhatsApp details, and what you tell us when you contact us by those channels.",
                "Project and billing details: your business name, project content and brand material, and invoicing details, if you become a client.",
                "Website usage information: pages viewed, approximate location, device and browser type, and how you reached our site. We collect this only if you accept analytics cookies (see our Cookie Policy).",
                "Technical information: your IP address and basic request details, which our hosting and security systems process when you visit the site.",
            ),
            p("We do not ask for special personal information (such as health, religion or biometric details) or for information about children. Please do not send us any through the website."),
        ),
        sec(
            "why-we-use-it", "Why we use your information",
            ul(
                "To respond to your enquiry, prepare quotes and talk to you about your project.",
                "To deliver, invoice and support the services you ask us to provide.",
                "To keep our website secure, prevent abuse and fix technical problems.",
                "To understand how the website is used and improve it, if you have accepted analytics cookies.",
                "To meet legal obligations, such as tax and accounting record keeping.",
            ),
            p("Under POPIA we rely on one or more of these grounds: your consent; taking steps at your request before a contract, or performing a contract with you; complying with the law; and our legitimate interest in running and securing our business, where this does not unfairly affect your privacy."),
            p("We do not sell your personal information. We do not send marketing messages unless you have asked for them, or you are an existing client and have not opted out. You can opt out at any time."),
        ),
        sec(
            "who-we-share-with", "Who we share it with",
            p("We share personal information only where needed, and only with people and services that help us run the business (called “operators” under POPIA) and who must protect it:"),
            ul(
                "Email provider: enquiries sent through the contact form are emailed to us using Google’s Gmail service.",
                "Hosting and database providers: our website, and the system that stores enquiries, run on infrastructure provided by our hosting and database providers.",
                "Google Analytics: if you accept analytics cookies, usage information is processed by Google.",
                "Google Fonts: our pages load fonts from Google Fonts, which means your IP address is shared with Google when a page loads.",
                "Professional advisers and authorities: accountants, legal advisers, or government bodies, where the law requires it or where we need to protect our rights.",
            ),
        ),
        sec(
            "outside-south-africa", "Sending information outside South Africa",
            p("Some of the services above, such as Google’s, may process information in other countries. Where that happens, we only use providers that are bound by data protection laws, binding rules or contract terms offering protection substantially similar to POPIA, or we rely on your consent, as the Act allows."),
        ),
        sec(
            "how-long-we-keep-it", "How long we keep it",
            ul(
                "Enquiries that do not lead to a project: up to 12 months, then deleted.",
                "Client and billing records: while the engagement lasts, and afterwards for the period required by tax and accounting law, which is generally five years.",
                "Analytics data: for the retention period set in our Google Analytics account.",
            ),
            p("When we no longer need information, we delete it or remove anything that identifies you."),
        ),
        sec(
            "how-we-protect-it", "How we protect it",
            p("We take reasonable technical and organisational steps to protect personal information against loss, damage and unauthorised access, such as limiting access to enquiries to the people who need them. No online system is completely secure, so we cannot guarantee absolute security."),
            p("If a security compromise affects your personal information, we will notify the Information Regulator and the people affected, as POPIA requires."),
        ),
        sec(
            "your-rights", "Your rights",
            p("Under POPIA you may:"),
            ul(
                "ask whether we hold personal information about you and request a copy;",
                "ask us to correct or delete information that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading or unlawfully obtained;",
                "object, on reasonable grounds, to us processing your information;",
                "withdraw consent you gave us (this does not affect processing that already happened);",
                "opt out of direct marketing at any time; and",
                "complain to the Information Regulator.",
            ),
            p("To use any of these rights, email us at " + EMAIL + ". We may need to confirm your identity first, and we will reply within a reasonable time. You may also request access to records under the Promotion of Access to Information Act 2 of 2000 (“PAIA”) by contacting our Information Officer."),
        ),
        sec(
            "cookies", "Cookies",
            p("We use a very small number of cookies and similar technologies. Analytics cookies are only used with your consent. Our Cookie Policy explains what we use and how to change your choice."),
        ),
        sec(
            "other-websites", "Links to other websites",
            p("Our website links to services such as WhatsApp, LinkedIn and Facebook. They have their own privacy practices, and we are not responsible for them."),
        ),
        sec(
            "changes", "Changes to this policy",
            p("We may update this policy from time to time. The latest version is always on this page, with its date at the top."),
        ),
        sec(
            "complaints", "Complaints",
            p("If you are unhappy with how we have handled your personal information, please contact us first so we can try to put it right. You also have the right to complain to the Information Regulator (South Africa). How to lodge a complaint is explained on the Regulator’s website, inforegulator.org.za."),
        ),
    ],
}

# ---------------------------------------------------------------- COOKIES
COOKIES = {
    "slug": "cookies",
    "title": "Cookie Policy",
    "pdf": "cookie-policy.pdf",
    "summary": "The few cookies we use, what they do, and how you can accept, decline or change your choice at any time.",
    "sections": [
        sec(
            "what-are-cookies", "What are cookies?",
            p("Cookies are small text files that a website stores in your browser. Similar technologies, such as your browser’s local storage, can do the same job. In this policy we call all of them “cookies”."),
        ),
        sec(
            "how-we-use-cookies", "How we use cookies",
            p("We keep it simple: one item that remembers your choice, and analytics only if you say yes. We do not use advertising or tracking cookies, and we do not sell cookie data."),
            table(
                ["Name", "Set by", "Purpose", "How long", "Type"],
                [
                    ["cookie-consent", "This website (browser local storage)", "Remembers whether you accepted or declined analytics cookies.", "Until you clear your browser data or change your choice", "Strictly necessary"],
                    ["_ga", "Google Analytics", "Tells visitors apart so we can count how many people use the site.", "Up to 2 years", "Analytics, only if you accept"],
                    ["_ga_ followed by our measurement ID", "Google Analytics", "Keeps track of your visit (session) details.", "Up to 2 years", "Analytics, only if you accept"],
                ],
            ),
            p("The exact names and lifetimes of Google’s cookies are set by Google and may change."),
        ),
        sec(
            "analytics-cookies", "Analytics cookies",
            p("If you click Accept, we load Google Analytics, a service from Google. It sets the cookies above and collects information such as the pages you view, how long you stay, your device and browser type, and your approximate location. We use this to see which pages are useful and to improve the site. We do not use it to identify you personally."),
            p("If you click Decline, or do not choose, Google Analytics is not loaded and no analytics cookies are set. Google may process analytics information in countries outside South Africa (see our Privacy Policy)."),
        ),
        sec(
            "third-party-content", "Fonts and other third-party content",
            p("Our pages load fonts from Google Fonts. This does not set cookies, but it does mean your browser connects to Google’s servers, and your IP address is shared with Google, when a page loads. Links to WhatsApp, LinkedIn and Facebook take you to their sites, which have their own cookies and policies."),
        ),
        sec(
            "changing-your-choice", "Changing your choice",
            p("You can change your mind at any time:"),
            ul(
                "Use the “Cookie settings” link in the footer of this website to reopen the choice and pick again.",
                "Delete cookies and site data in your browser settings.",
                "Install Google’s Analytics opt-out browser add-on, available at tools.google.com/dlpage/gaoptout.",
                "Set your browser to block or warn you about cookies. Some websites may not work as expected if you do.",
            ),
            p("If you decline or withdraw your consent, we stop analytics from that point on and remove the analytics cookies we can reach from this website."),
        ),
        sec(
            "more-information", "More information",
            p("Our Privacy Policy explains how we handle personal information in general. For questions about cookies, email " + EMAIL + "."),
        ),
        sec(
            "changes", "Changes to this policy",
            p("We may update this policy if we change the cookies we use. The latest version is always on this page, with its date at the top."),
        ),
    ],
}

# ---------------------------------------------------------------- TERMS
PART_A = {
    "title": "Part A: Website terms",
    "intro": "These terms apply to everyone who visits this website.",
}
PART_B = {
    "title": "Part B: Service terms",
    "intro": "These terms apply to our work for clients once a quote has been accepted.",
}

PART_C = {
    "title": "Changes and contact",
    "intro": "This applies to the whole document.",
}

TERMS = {
    "slug": "terms",
    "title": "Terms & Conditions",
    "pdf": "terms-and-conditions.pdf",
    "summary": "The terms for using this website (Part A) and the service agreement that applies to projects we do for clients (Part B).",
    "acceptanceForm": True,
    "intro": "These Terms & Conditions have two parts. Part A applies to everyone who visits this website. Part B applies to our work for clients once a quote has been accepted. If an accepted quote or proposal conflicts with Part B, the quote or proposal applies.",
    "sections": [
        # ---- Part A
        sec(
            "a-about", "About these terms",
            p("By using this website you agree to Part A. If you do not agree, please do not use the website. In these terms, “we”, “us” and “our” mean iSibusiso Digital Experiences, " + COMPANY["address"] + " (" + EMAIL + ")."),
            part=PART_A,
        ),
        sec(
            "a-using", "Using the website",
            p("You may use the website for lawful purposes only. You must not:"),
            ul(
                "try to disrupt, hack or probe the website for weaknesses;",
                "send malicious code, spam or false information through our forms;",
                "use automated tools in a way that overloads the website; or",
                "use the website to break any law or the rights of others.",
            ),
        ),
        sec(
            "a-ip", "Our content and intellectual property",
            p("The website’s design, text, logos, graphics and code belong to us or are used with permission, and are protected by law. You may view the site, link to it, and print pages for personal or internal business use. You may not copy, republish or sell our content without our written permission. Work that we show for clients remains theirs."),
        ),
        sec(
            "a-information", "Information on this website",
            p("We try to keep the website accurate and up to date, but it is provided for general information. Prices shown, including “from” prices, are a guide and not an offer. A binding price is only set by a written quote that we issue and you accept. Nothing on this website is legal, financial or tax advice."),
        ),
        sec(
            "a-enquiries", "Enquiries",
            p("Submitting the contact form, or emailing or messaging us, does not create a contract. It asks us to get in touch with you. How we handle your information is explained in our Privacy Policy."),
        ),
        sec(
            "a-links", "Links and third-party services",
            p("The website may link to other websites and services. We do not control them and are not responsible for their content or practices."),
        ),
        sec(
            "a-availability", "Availability and liability for the website",
            p("We aim to keep the website available, but we do not promise that it will always be uninterrupted or free of errors. To the extent the law allows, we are not liable for loss arising from your use of, or inability to use, the website. Nothing in these terms limits any rights you have under the Consumer Protection Act 68 of 2008, where it applies."),
        ),
        # ---- Part B
        sec(
            "b-when", "When these terms apply",
            p("Part B applies when you ask us to do work (a “project”) and accept our written quote or proposal. The accepted quote, together with Part B, is the agreement between you (“the client”) and us. You accept a quote by signing it, by confirming in writing (email or WhatsApp counts), or by paying the deposit."),
            part=PART_B,
        ),
        sec(
            "b-quotes", "Quotes and scope",
            p("Our quote or proposal sets out the services to be provided, the agreed deliverables, the price, the estimated timeline and the number of revision rounds included. Each engagement is based on the scope agreed in the accepted quote or proposal. Services may be provided as a once-off project or, where expressly agreed by both parties, as an ongoing arrangement. Any work outside the agreed scope is treated as a change request. We will communicate any additional costs and timeline changes in writing before proceeding, and work will only continue once you have approved the changes. A quote is valid for 30 days unless otherwise stated."),
        ),
        sec(
            "b-client", "What we need from you",
            ul(
                "Supply content (text, images, logos and brand material) in the agreed formats and on time.",
                "Give feedback and approvals within 5 business days, so the timeline can hold.",
                "Make sure you have the right to use everything you give us, and that it does not infringe anyone’s rights or break the law.",
                "Give us access to the accounts we need for the project, such as your domain and hosting.",
                "Nominate one person who can make decisions on your behalf.",
            ),
            p("If you delay, our dates move to match. If a project is on hold for more than 30 days because we are waiting for you, we may reschedule it and invoice the work completed so far."),
        ),
        sec(
            "b-fees", "Fees and payment",
            ul(
                "Our fees are in South African rand (ZAR). VAT is added where we are registered for VAT and it applies.",
                "Unless the quote says otherwise, a 50% deposit is payable before work starts, and the balance is payable before the website or application goes live.",
                "Invoices are payable within 7 days of the invoice date, by electronic funds transfer.",
                "Third-party costs, such as domains, hosting, software licences, stock images and payment-gateway fees, are not included unless the quote says so.",
                "If an invoice is overdue, we may pause work or hold back the launch until it is paid, and we may charge interest on the overdue amount at the rate the law allows.",
                "The deposit secures your place in our schedule and pays for work already begun, so it is not refundable once work has started, except as set out under cancellation below or where the law requires.",
                "Any recurring, monthly or subscription-based fees apply only where they are expressly included in an accepted quote, proposal or separate written agreement. No recurring payment obligation is created merely by purchasing a once-off service."
            ),
        ),
        sec(
            "b-timelines", "Timelines",
            p("Dates in a quote are good-faith estimates. They depend on you supplying content and feedback on time. We are not responsible for delays caused by you or by third parties."),
        ),
        sec(
            "b-revisions", "Revisions and acceptance",
            p("Your quote includes the revision rounds it states. When we deliver, you have 7 days to test the work and tell us in writing about anything that does not match the agreed scope. We will fix those items. If you do not report anything within 7 days, or you start using the work live, it is treated as accepted."),
        ),
        sec(
            "b-ownership", "Ownership of the work",
            ul(
                "Once we have received full payment, you own the custom design, code and content created specifically for your project.",
                "We retain ownership of any tools, templates, libraries, reusable code and development methods that we owned or developed independently of your project. Where these materials are incorporated into your delivered project, you may use them as part of that project.",
                "Open-source and third-party components stay under their own licences.",
                "You keep ownership of your own content, logos and brand, and you allow us to use them to do the work.",
                "Until we have been paid in full, we keep all rights in the work and may withhold files and access.",
                "We may request your permission to display the completed project, including screenshots or a description of the work, in our portfolio, website or marketing materials. We will not publish confidential information, private data or materials that you have asked us to keep confidential.",
            ),
        ),
        sec(
            "b-accounts", "Domains, hosting and accounts",
            p("Wherever possible, domains, hosting and similar accounts should be registered in your name so that you stay in control. If we buy them for you, we will tell you, and we will hand them over on request once you have paid. We are not responsible for outages, price changes or the terms of third-party providers."),
        ),
        sec(
            "b-warranty", "What we promise, and what we cannot",
            p("We will carry out the services with reasonable skill and care and in line with the agreed scope. For 30 days after launch we will fix defects in what we delivered at no extra charge. This does not cover new features, problems caused by changes made by others, or outages of third-party services."),
            p("We cannot guarantee particular results, such as search engine rankings, website traffic, enquiries or sales, because these depend on factors outside our control. Apart from the promises in this agreement, and to the extent the law allows, we give no other warranties."),
            p("For services involving search engine optimisation, search visibility or website performance improvements, we provide the specific setup, recommendations and implementation work described in the accepted quote or proposal."),
            p("Our SEO-related services may include on-page SEO improvements, SEO-friendly website development, basic search visibility configuration and general website optimisation. These services do not automatically include comprehensive technical SEO audits, advanced performance engineering, backlink building, ongoing search engine optimisation campaigns or continuous monitoring unless expressly included in the agreed scope."),
            p("Search engines independently determine how and when websites are crawled, indexed and ranked. We therefore cannot guarantee search engine rankings, indexing, website traffic, enquiries, conversions or sales."),
            p("Website performance can also depend on hosting providers, third-party scripts, integrations, network conditions, devices and other factors outside our control. We do not guarantee a particular PageSpeed Insights score, Core Web Vitals result or loading time."),
            p("Any additional SEO, performance or optimisation work outside the agreed scope will be quoted separately and requires your approval before we proceed."),
        ),
        sec(
            "b-support", "Support and maintenance",
            p("Our services are generally provided on a once-off, project-based basis, unless otherwise agreed in writing."),
            p("Ongoing support, website maintenance, updates, hosting management, SEO monitoring or other recurring services are not automatically included in a project or once-off service."),
            p("Where a client requires ongoing assistance, we may agree to provide these services under a separate written quote, proposal or service agreement. Any such arrangement will specify the services included, frequency of work, applicable fees, payment terms and duration of the engagement."),
            p("A recurring or retainer-based arrangement only becomes applicable once both parties have expressly agreed to its terms in writing. No ongoing service or recurring payment obligation will arise without that agreement."),
        ),
        sec(
            "b-confidentiality", "Confidentiality",
            p("Each of us will keep the other’s non-public business information confidential and use it only for the project. We may share it with advisers and service providers who are bound to keep it confidential, or where the law requires it. This duty continues after the project ends."),
        ),
        sec(
            "b-personal-info", "Personal information",
            p("Each of us will comply with POPIA for the personal information we handle in the project. If we handle personal information of your customers or users on your behalf (for example, by building a website that collects it), we act as your operator: we will use it only for the project, keep it confidential and secure, and tell you if we become aware of a security compromise. We can sign a separate operator agreement if you need one."),
            p("You are responsible for your own privacy policy and for having a lawful basis to collect information through your website. How we handle your own information is set out in our Privacy Policy."),
        ),
        sec(
            "b-liability", "Limitation of liability",
            p("To the extent the law allows, we are not liable for indirect or consequential loss, or for loss of profit, revenue, data, goodwill or business opportunity. Our total liability under or in connection with a project is limited to the fees you have paid us for that project."),
            p("Nothing in this agreement limits liability that cannot be limited by law, or any rights you have under the Consumer Protection Act 68 of 2008, where it applies."),
        ),
        sec(
            "b-cancellation", "Cancellation and termination",
            ul(
                "You may cancel a project at any time by written notice. You then pay for the work done up to the date of cancellation, plus any third-party costs we have already incurred for you. Your deposit counts towards this amount.",
                "We may pause or end a project, by written notice, if you do not pay, do not give us the information or approvals we need after reasonable reminders, or you act abusively or unlawfully. You still pay for work done.",
                "After termination, we hand over completed work that you have paid for in full.",
                "If the law gives you a cooling-off or cancellation right (for example, for certain electronic transactions with consumers), we will honour it. If you ask us to start work during a cooling-off period, you pay for the work done in that time as far as the law allows.",
                "Where an ongoing or retainer-based arrangement has been agreed in writing, the cancellation notice period, payment obligations and termination conditions will be those specified in the relevant agreement. If the separate agreement does not specify these matters, the parties must agree on the applicable arrangements in writing before the ongoing service begins."
            ),
        ),
        sec(
            "b-force-majeure", "Events outside our control",
            p("Neither of us is liable for failing to meet an obligation because of events beyond our reasonable control, such as prolonged power or internet outages, natural disasters, strikes, or failures of third-party platforms. The affected party will tell the other promptly and resume as soon as it can."),
        ),
        sec(
            "b-disputes", "Disputes and governing law",
            p("We prefer to solve problems directly. If there is a dispute, please write to us, and we will both try in good faith to resolve it within 14 days. If it is not resolved, either of us may use mediation or take the matter to a competent South African court. South African law governs these terms."),
        ),
        sec(
            "b-general", "General",
            ul(
                "This agreement is the whole agreement about the project and replaces earlier discussions.",
                "Changes must be in writing and agreed by both of us.",
                "If a part of this agreement cannot be enforced, the rest still applies.",
                "If we do not enforce a right straight away, we have not given it up.",
                "You may not transfer the agreement to someone else without our consent.",
                "Notices may be sent by email to the addresses in the quote or on this page.",
                "Electronic communications and acceptance are valid, in line with the Electronic Communications and Transactions Act 25 of 2002.",
            ),
        ),
        sec(
            "changes", "Changes to these terms",
            p("We may update these terms. A project that has already been accepted continues under the version in force when it was accepted. The latest version is always on this page, with its date at the top."),
            part=PART_C,
        ),
        sec(
            "contact", "Contact us",
            facts(
                ("Business", COMPANY["tradingName"]),
                ("Email", EMAIL),
                ("Phone", COMPANY["phone"]),
                ("Address", COMPANY["address"]),
            ),
        ),
    ],
}

DOCUMENTS = [PRIVACY, COOKIES, TERMS]


def number_sections(doc):
    """Add display numbers: 1., 2. ... or A1., B1. when the document has parts."""
    has_parts = any(s["part"] for s in doc["sections"])
    if not has_parts:
        for i, s in enumerate(doc["sections"], 1):
            s["number"] = f"{i}."
        return
    letter, n = "A", 0
    for s in doc["sections"]:
        if s["part"]:
            letter = {id(PART_A): "A", id(PART_B): "B", id(PART_C): "C"}[id(s["part"])]
            n = 0
        n += 1
        s["number"] = f"{letter}{n}."


for d in DOCUMENTS:
    number_sections(d)
