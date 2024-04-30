---
tags:
  - math/calc
teacher: Robert Winters
room: 101
location: Harvard Hall
---
[Course Site](http://math.rwinters.com/E21a/)
[Canvas Site](https://canvas.harvard.edu/courses/131148)
[Zoom](https://dcegather.canvas.harvard.edu/courses/131148)
## Homework
```dataview
TABLE due, status
FROM "Homework"
WHERE course = [[Multivariable Calculus]]
SORT due
```
## Upcoming Tests
```dataview
TABLE due
FROM "Tests"
WHERE course = [[Multivariable Calculus]] AND due >= date(today)
SORT due
```
## Notes
```dataview
LIST rows.file.link
FROM "Classes/2023-2024/Multivariable Calculus"
WHERE file.name != "Multivariable Calculus"
GROUP BY file.folder
```
[[Coordinate system|Coordinate systems]] $\rightarrow$ differential calc $\rightarrow$ [[integral]] calc $\rightarrow$ [[Vector Field|Vector Fields]]