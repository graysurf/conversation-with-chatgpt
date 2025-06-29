/**
 * tags-table.js
 * This script generates two outputs for Obsidian:
 * 1. A live dataview table preview
 * 2. A Markdown-formatted table for {{tag}}.md copy-paste
 */

module.exports = function (dv) {
  const tagMap = new Map();

  for (let page of dv.pages('"conversation"')) {
    if (page.file.name === "README") continue;
    const tags = page.tags ?? page.file.tags;
    if (!tags) continue;

    for (let tag of tags) {
      if (!tagMap.has(tag)) tagMap.set(tag, new Set());
      tagMap.get(tag).add(page.file.name);
    }
  }

  const sortedTags = Array.from(tagMap.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  dv.paragraph(`# Table\n\n`);
  let output = `| Tag | 說明 | 篇數 |\n|-----|-------|-------|\n`;

  for (let [tag, fileSet] of sortedTags) {
    const cleanTag = tag.replace(/^#/, "");
    const tagLink = tag.startsWith("#") ? tag : `#${tag}`;
    const descLink = `[${cleanTag}](/tags/${cleanTag}.md)`;
    output += `| ${tagLink} | ${descLink} | ${fileSet.size} |\n`;
  }

  dv.paragraph("```md\n" + output + "```");

  const tagsArray = [
    "# 🧠 AI",
    "# 🔐 BFT",
    "# 🤖 LLM",
    "# 🧃 PTT",
    "# 📺 動漫",
    "# 📚 哲學",
    "# 💰 投資",
    "# 🗳 政治",
    "# 🔄 敏捷",
    "# 🧪 教育",
    "# 📖 文學",
    "# 🧬 科技",
    "# 🧑‍💼 管理",
    "# 🧭 自我探索",
    "# 🌀 語場",
    "# 😂 語場幽默",
    "# 🛠 軟體開發",
    "# 🎭 社會劇場",
  ];

  for (let rawTag of tagsArray) {
    const cleanTag = rawTag.split(" ").pop().trim(); // "AI"
    const header = rawTag; // "# 🧠 AI"
    const rows = dv
      .pages('"conversation"')
      .where((p) => p.tags && p.tags.includes(cleanTag))
      .sort((p) => p.created, "desc");
    dv.paragraph(`# ${header}\n\n`);
    let output = `| 標題 | 語場 | 時間 |\n|------|------------|--------|\n`;

    for (let page of rows) {
      const title = `[${page.file.name}](/conversation/${page.file.name}.md)`;
      const date = page.created ? page.created.toISODate() : "";
      const tags = page.tags
        ? page.tags.sort().map((t) => `[${t}](/tags/${t}.md)`).join(", ")
        : "";
      output += `| ${title} | ${tags} | ${date} |\n`;
    }

    dv.paragraph("```md\n" + output + "```");
  }
};
