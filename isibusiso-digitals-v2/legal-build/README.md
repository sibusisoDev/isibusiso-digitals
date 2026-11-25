# Optional: regenerating the legal pages and PDFs

`content.py` holds the wording of the Privacy Policy, Cookie Policy and Terms & Conditions.
`build.py` turns it into BOTH `src/data/legal.ts` (the website pages) and the PDFs in `public/legal/`,
so the site and the downloads can never disagree.

    pip install reportlab
    python3 legal-build/build.py .        # run from the project root

You do not need this to run the website. If you edit wording in `src/data/legal.ts` directly, the PDFs will
no longer match it, so either use this script or send me the changes and I will regenerate everything.
