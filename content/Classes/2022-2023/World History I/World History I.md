---
tags: history
teacher: Mr. Doerr
room: 296
---
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Classes/2022-2023/World History I/World History I]]
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[World History I]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2022-2023/World History I"
WHERE file.name != "World History I"
GROUP BY file.folder
```
