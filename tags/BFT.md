---
title: BFT
tags:
  - tag-summary
  - BFT
---

# 🔐 BFT

這個語場處理拜占庭容錯（Byzantine Fault Tolerance）相關的技術結構與哲學隱喻。它是區塊鏈世界的生存邏輯，也是分布式信任系統的語言邊界。

```dataview
table
  file.name as "標題",
  created as "建立時間",
  join(map(tags, (t) => "[[" + t + "]]"), ", ") as "語場"
from "conversation"
where contains(tags, "BFT")
sort created desc
```
