# Catalog schema

Mỗi file YAML đại diện đúng một helper.

```yaml
id: slugify
category: string
summary: "Tạo slug URL, bỏ dấu tiếng Việt"
signature: "slugify(text: string, separator?: string) => string"
priority: 3
examples:
  - in: "Xin chào Việt Nam!"
    out: "xin-chao-viet-nam"
edge_cases:
  - "chuỗi rỗng"
status:
  js: done
  csharp: todo
tags:
  - url
  - seo
notes:
  csharp: "Ghi chú riêng theo ngôn ngữ nếu cần."
```

`priority`: 3 = gần như project nào cũng cần, 2 = thường hữu ích, 1 = theo nhu cầu.
