---
tags:
  - english
teacher: Ms. VanLeuvan
room: 182
aliases:
  - English
---
```dataview
TABLE due, status
FROM "Homework"
WHERE course = "[[Humanities]]" OR course = [[Humanities]] OR course = "[[Classes/2022-2023/Humanities/Humanities]]"
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[Classes/2022-2023/Humanities/Humanities]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST
FROM "English"
```
