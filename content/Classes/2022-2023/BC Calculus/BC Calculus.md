---
tags: math/calc
teacher: Mrs. Knoblock
room: 136
---
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Classes/2022-2023/BC Calculus]]
SORT due
```
## Upcoming Tests
```dataview
TABLE due
FROM "Tests"
WHERE course = [[BC Calculus]] AND due >= date(today)
SORT due
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2022-2023/BC Calculus"
WHERE file.name != "BC Calculus"
GROUP BY file.folder
```
