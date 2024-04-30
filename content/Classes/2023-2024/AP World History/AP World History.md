---
tags:
  - history
teacher: Mr. Woolley
room: 283
---
## Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[AP World History]]
SORT due
```
## Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[AP World History]] AND date >= date(today)
SORT date
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2023-2024/AP World History"
WHERE file.name != "Untitled"
GROUP BY file.folder
```
# Undated Files
```dataview
TABLE start-date as "Start Date", end-date as "End Date"
FROM #history AND "Classes"
WHERE !start-date
```