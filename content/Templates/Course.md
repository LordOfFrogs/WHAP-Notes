---
tags: 
teacher: 
room:
---
# Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[<% tp.file.path(true) %>]]
SORT due
```
# Upcoming Tests
```dataview
TABLE date
FROM "Tests"
WHERE course = [[<% tp.file.path(true) %>]] AND date >= date(today)
SORT date
```
# Notes
```dataview
LIST rows.file.link
FROM "<% tp.file.folder(true) %>"
WHERE file.name != "<% tp.file.title %>"
GROUP BY file.folder
```
