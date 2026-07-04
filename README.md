# AI Disclosure for University Assignments

Live site: <https://stefan-mueller.github.io/ai-disclosure>

A simplified, coursework-adapted version of the [GAIDeT Declaration Generator](https://panbibliotekar.github.io/gaidet-declaration/), built with Quarto and Observable JS instead of plain HTML and Python.

## What changed from the original tool

- Dropped the ethics review and market/patent categories, which were built for research publishing rather than coursework.
- Simplified sub-item labels into plain language.
- Narrowed data management to collection and visualisation only.
- Added an audiovisual and interactive category to cover AI-generated visuals, narration and editing.
- Added a mandatory one-sentence description field for every ticked task, so a checkbox alone is never the full disclosure.
- Added an optional field to log the exact prompt(s) used per task, for extra transparency.
- Added a per-tool version/model field (e.g. GPT-5.5, Claude Sonnet 5), since capability varies significantly across versions of the same tool.
- Added a copy-to-clipboard and download-as-file option for the generated declaration.
- Every generated declaration now closes with a fixed responsibility statement (final responsibility lies with the authors, AI tools are not listed as authors) and a "Declaration submitted by: ..." line, filled in from a "Your name" field on the form.
- Removed the OWL ontology generation step (`generate_ontology.py` and `gaidet.owl` in the original repository), since stable term identifiers are not needed for a teaching declaration.

## Running locally

Install Quarto from <https://quarto.org/docs/get-started/>, then from the project folder run:

```
quarto preview
```

This opens the form in your browser and rebuilds automatically as you edit.

## Editing the taxonomy

The categories and tasks live in `taxonomy.json`. Add, remove or reword items there; the form updates automatically, no changes to `index.qmd` are needed.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, under Pages, set the source to the `gh-pages` branch (this is created automatically by the included GitHub Action).
3. Every push to `main` will render the site with Quarto and publish it to `gh-pages` via `.github/workflows/publish.yml`.

Alternatively, run `quarto publish gh-pages` from your machine to publish manually without the Action.
