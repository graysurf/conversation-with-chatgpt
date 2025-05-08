```dataviewjs
const code = await app.vault.adapter.read("obsidian/dataview/conversation-table.js");
const render = eval(code);
render(dv);
```
