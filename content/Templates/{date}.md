---
tag: Daily
---
# Homework
```dataview
TABLE course, due, status
FROM "Homework" 
WHERE ( due >= date({{date}}) OR status != "Complete" ) AND time.ctime <= date({{date}})
SORT due
```
# Upcoming Tests
```dataview
TABLE course, date
FROM "Tests" 
WHERE date >= date({{date}}) and file.ctime < date({{date}})+dur(1 day)
SORT date
```
# To-Do
- [ ] 

```gEvent
date: {{date}}
type: day
navigation: true
```