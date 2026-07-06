# AI Disclosure for University Assignments

Live site: <https://disclose-ai.app>

A simplified, coursework-adapted version of the [GAIDeT Declaration Generator](https://panbibliotekar.github.io/gaidet-declaration/), built with Quarto and Observable JS instead of plain HTML and Python.

## What changed from the original tool

- Dropped the ethics review and market/patent categories, which were built for research publishing rather than coursework.
- Simplified sub-item labels into plain language.
- Narrowed data management to collection and visualisation only.
- Added an audiovisual and interactive category to cover AI-generated visuals, narration and editing.
- Added a mandatory short description field for every ticked task, so a checkbox alone is never the full disclosure.
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

## Forking and reusing this tool

This project is [MIT-licensed](https://opensource.org/license/mit), so you're free to fork it for your own institution, module, or purpose. To adapt it:

1. **Fork the repository** on GitHub.
2. **Rebrand it**: update `title`, `description`, `site-url`, and the `page-footer` text in `_quarto.yml`, and the intro/byline paragraphs at the top of `index.qmd`.
3. **Change the checklist**: edit `taxonomy.json` to add, remove, or reword categories and tasks. The form rebuilds from this file automatically, no JavaScript changes needed.
4. **Adjust the tool list**: still in `taxonomy.json`, edit `aiToolGroups` (the tools offered in the autocomplete) and `commonVersions` (the suggested default model/version shown as placeholder text for each tool). In `index.qmd`, the `noVersionTools` set lists tools that don't need a version field at all (e.g. Grammarly) — add or remove tool names there if your list changes.
5. **Restyle it**: colours and spacing are centralised as CSS custom properties at the top of `styles.css` (`--gaidet-accent`, `--gaidet-border`, etc.); change those instead of hunting through individual rules.
6. **Re-point deployment**: update the `site-url` in `_quarto.yml` and follow the deployment steps below (Netlify) or adapt them for GitHub Pages, using your own fork and hosting account.

No other files need to change for a typical rebrand — the interactive form, autocomplete, and declaration generator in `index.qmd` are all driven by `taxonomy.json` and don't hardcode any institution-specific content.

## Deploying to Netlify

The repository stays on GitHub; Netlify builds and hosts the rendered site.

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project → GitHub**, authorize access, and select this repository (branch `main`).
3. Netlify auto-detects the build settings from `netlify.toml`: it downloads Quarto, runs `quarto render`, and publishes the `docs` folder (matching `output-dir: docs` in `_quarto.yml`).
4. Every push to `main` triggers a new build and deploy automatically; no GitHub Action is needed.

To publish manually without Netlify's CI, run `quarto render` locally and deploy the resulting `docs` folder with the Netlify CLI (`netlify deploy --prod --dir=docs`).
