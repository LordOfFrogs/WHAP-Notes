---
tags: bio
teacher: Mrs. Diedricksen
room: 128
---
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Classes/2022-2023/L2 Biology/L2 Biology]]
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[L2 Biology]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST
FROM "Biology"
```
