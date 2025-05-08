/**
 * conversation-table.js
 * This script generates two outputs for Obsidian:
 * 1. A live dataview table preview
 * 2. A Markdown-formatted table for README.md copy-paste
 */

module.exports = function (dv) {
  const pages = dv
    .pages('"conversation"')
    .where(
      (p) =>
        p.file.name !== "README" &&
        /^conversation\/[^/]+\.md$/.test(p.file.path)
    )
    .sort((p) => p.order ?? 0, "desc");

  dv.header(2, "Preview");

  const headers = ["標題", "概覽", "全文", "語場"];
  const rows = [];

  for (let p of pages) {
    const fname = p.file.name;
    const title = fname;
    const topicLink = `[概覽](/conversation/topic/${fname}.topic.md)`;
    const fullLink = `[全文](/conversation/${fname}.md)`;
    const tagLinks = (p.tags ?? [])
      .sort()
      .map((t) => `[${t}](/tags/${t}.md)`)
      .join(", ");
    rows.push([title, topicLink, fullLink, tagLinks]);
  }

  dv.table(headers, rows);

  dv.header(2, "Table");

  let out = "| 標題 | 概覽 | 全文 | 語場 | 時間 |\n";
  out += "|-------|------------|------|------|------|\n";

  for (let p of pages) {
    const fname = p.file.name;
    const display = fname;
    const topicLink = `[概覽](/conversation/topic/${fname}.topic.md)`;
    const fullLink = `[全文](/conversation/${fname}.md)`;
    const tags = (p.tags ?? [])
      .sort()
      .map((t) => `[${t}](/tags/${t}.md)`)
      .join(", ");
    const date = p.created ? p.created.toISODate() : "";
    out += `| ${display} | ${topicLink} | ${fullLink} | ${tags} | ${date} |\n`;
  }

  dv.paragraph("```markdown\n" + out + "```");
};
