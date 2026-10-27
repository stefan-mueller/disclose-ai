// Post-render step (see _quarto.yml). Quarto embeds a hidden, syntax-
// highlighted copy of every OJS cell's source in the page even with
// `echo: false`, about 430 KB on index.html. The cells run from a separate
// encoded copy, so the hidden one is never shown or used; removing it makes
// the page much smaller to download.
const hiddenSource =
  /(?:<div class="code-copy-outer-scaffold">)?<div class="sourceCode cell-code hidden"[^>]*><pre[\s\S]*?<\/pre><\/div>(?:<button title="Copy to Clipboard" class="code-copy-button"><i class="bi"><\/i><\/button><\/div>)?\n?/g;

const outputDir = Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR") ?? "docs";
const files = (Deno.env.get("QUARTO_PROJECT_OUTPUT_FILES") ?? "")
  .split("\n")
  .filter((file) => file.endsWith(".html"));

for (const file of files.length ? files : [`${outputDir}/index.html`]) {
  const html = await Deno.readTextFile(file);
  const stripped = html.replace(hiddenSource, "");
  if (stripped !== html) await Deno.writeTextFile(file, stripped);
}
