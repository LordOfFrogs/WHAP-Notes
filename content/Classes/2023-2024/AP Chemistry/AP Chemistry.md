---
tags: chem
teacher: Dr. Lewis
room: 224
---
## Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[AP Chemistry]]
SORT due
```
## Upcoming Tests
```dataview
TABLE due
FROM "Tests"
WHERE course = [[AP Chemistry]] AND due >= date(today)
SORT due
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2023-2024/AP Chemistry"
WHERE file.name != "AP Chemistry"
GROUP BY file.folder
```
