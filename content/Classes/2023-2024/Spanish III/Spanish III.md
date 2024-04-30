---
tags:
  - spanish
teacher: Señora Phillips
room: 173
---
## Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Spanish III]]
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[Spanish III]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST rows.file.link
FROM "<% file.folder(true) %>"
WHERE file.name != "<% file.title %>"
GROUP BY file.folder
```
