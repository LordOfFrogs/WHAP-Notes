---
tags:
  - math/calc
teacher: Robert Winters
room:
---
[Course Site/Syllabus](http://math.rwinters.com/E21c/)
[Canvas Site](https://canvas.harvard.edu/courses/131149)
[Zoom](https://dcegather.canvas.harvard.edu/courses/131149)
## Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Ordinary Differential Equations]]
SORT due
```
## Upcoming Tests
```dataview
TABLE due
FROM "Tests"
WHERE course = [[Ordinary Differential Equations]] AND due >= date(today)
SORT due
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2023-2024/Ordinary Differential Equations"
WHERE file.name != "Ordinary Differential Equations"
GROUP BY file.folder
```
