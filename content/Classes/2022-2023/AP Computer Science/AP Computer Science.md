---
tags: comp-sci
teacher: Mrs. Blake
room: 223
---
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Classes/2022-2023/AP Computer Science/AP Computer Science]]
SORT due
```
## Upcoming Tests
```dataview
TABLE due
FROM "Tests"
WHERE course = [[AP Computer Science]] AND due >= date(today)
SORT due
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2022-2023/AP Computer Science"
WHERE file.name != "AP Computer Science"
GROUP BY file.folder
```
