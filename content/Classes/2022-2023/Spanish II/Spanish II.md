---
tags: spanish
teacher: Señora Phillips
room: 173
---
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Classes/2022-2023/SpanishII/Spanish II]]
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[Spanish II]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST
FROM "Spanish II"
```