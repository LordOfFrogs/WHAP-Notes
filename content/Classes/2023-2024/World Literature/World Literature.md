---
tags:
  - english
teacher: Ms. Ross
room: 280
---
## Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[World Literature]]
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[World Literature]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST rows.file.link
FROM "<% file.folder(true) %>"
WHERE file.name != "<% file.title %>"
GROUP BY file.folder
```
