---
tags:
  - math/calc
due: 2023-09-14
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW1-2023.pdf)
# Problem 1
a. 5, b. 3, c. 7
d. 12, e. $\sqrt{34}$, f. $\sqrt{58}$
# Problem 2
Distance between $(1,2,3) = \sqrt{1^{2}+2^{2}+3^{2}}=\sqrt{14}$
$$
(x-1)^2+(y-2)^2+(z-3)^2=14
$$
# Problem 3
$$
\begin{align*}
x^2+y^2+z^2+8x-6y+2z+17=0\\
(x^2+8x+16)+(y^2-6y+9)+(z^2+2z+1)=9\\
(x+4)^2+(y-3)^2+(z+1)^2=9
\end{align*}
$$
Center: $(-4,3,-1)$
Radius: 3
# Problem 4
$$
\begin{align*}
3x^2+3y^2+3z^2=10+6y+12z\\
x^2+y^2-2y+z^2-4z=\frac{10}{3}\\
(x^2)+(y^2-2y+1)+(z^2-4z+4)=\frac{25}{3}\\
x^2+(y-1)^2+(z+2)^2=\frac{25}{3}
\end{align*}
$$
Center: $(0,1,-2)$
Radius: $\frac{5}{\sqrt{3}}$ or $\frac{5\sqrt{3}}{3}$
# Problem 5
21. Plane
22. Plane
23. Region to the -y direction of a plane y=8
24. Region to the positive x direction a plane x=-3
25. Region between and including the planes z=0 and z=6
26. Two parallel planes
27. Circle
28. Cylinder
29. Ball (solid sphere)
30. Diagonal plane
31. Solid cylinder
32. Everything but a ball
# Problem 6
$$
\begin{align*}
(x+1)^2+(y-5)^2+(z-3)^2=2((x-6)^2+(y-2)^2+(z+2)^2)\\
x^2+2x+1+y^2-10y+25+z^2-6z+9=2x^2-24x+72+2y^2-8y+8+2z^2+8z+8\\
-53=x^2-26x+y^2+2y+z^2+14z\\
(x^2-26x+169)+(y^2+2y+1)+(z^2+14z+49)=166\\
(x-13)^2+(y+1)^2+(z+7)^2=166
\end{align*}
$$
Center: (13,-1,-7)
Radius: $\sqrt{166}$
# Problem 7
$$
\begin{align*}
\|\langle -2,4,2 \rangle\|=\sqrt{(-2)^2+4^2+2^2}=\sqrt{24}=2\sqrt{6}\\
\frac{\sqrt{6}}{2}\langle -2,4,2 \rangle = \fbox{$\langle -\sqrt{6}, 2\sqrt{6}, \sqrt{6} \rangle$}
\end{align*}
$$
# Problem 8
[[Polar Coordinates]] → [[Cartesian Coordinates]]
$$
\begin{align*}
\vec w = \langle 50,-45\degree\rangle \rightarrow \langle 25\sqrt{2},-25\sqrt{2}\rangle\\
\vec v_{air}=\langle 250, 30\degree\rangle \rightarrow \langle 125\sqrt{3},125\rangle\\
\vec w+\vec v_{air}=\fbox{$\vec t=\langle 25\sqrt{2}+125\sqrt{3},125-25\sqrt{2}\rangle \approx \langle 252, 90\rangle$}\\
\|\vec t\|=\sqrt{(25\sqrt{2}+125\sqrt{3})^{2}+(125-25\sqrt{2})^{2}} \approx \fbox{Ground speed: $267\text{ km/h}$}
\end{align*}
$$
# Problem 9
![[Multivariable Problem Set 1 2023-09-08 22.54.38.excalidraw]]
$$
\begin{align*}
\vec a=\langle x,y,z\rangle\\
\cos\alpha=\frac{x}{\|\vec a\|},\cos\beta=\frac{y}{\|\vec a\|},\cos\gamma=\frac{z}{\|\vec a\|}\\
\cos^{2}\alpha+\cos^{2}\beta+\cos^{2}\gamma=\frac{x^{2}+y^{2}+z^{2}}{\|\vec a\|^{2}}\\
=\frac{x^{2}+y^{2}+z^{2}}{(\sqrt{x^{2}+y^{2}+z^{2}})^{2}}=1 \tag*{$\tiny\square$}
\end{align*}
$$
# Problem 10
The [[line]] joining the midpoints of two sides of a triangle is parallel to the third side and half its length
![[Multivariable Problem Set 1 2023-09-09 12.13.40.excalidraw|300]]
$$
\begin{align*}
\text{Line joining midpoints: }\vec m=\vec u+\vec v\\
\text{Third side of triangle: }\vec s=2\vec u+2\vec v=2(\vec u+\vec v)\\
\vec s=2\vec m \therefore \vec s \parallel \vec m
\end{align*}
$$
# Problem
![[Multivariable Problem Set 1 2023-09-09 12.23.22.excalidraw|300]]
$$
\begin{align*}
2(\vec a+\vec b)=-2(\vec d+\vec c)\implies \vec a+\vec b=-(\vec d+\vec c) \therefore (\vec a+\vec b) \parallel (\vec d+\vec c)\\
2(\vec a+\vec d)=-2(\vec b+\vec c)\implies \vec a+\vec d=-(\vec b+\vec c) \therefore (\vec a+\vec d) \parallel (\vec b+\vec c)\\
\therefore \text{The quadrilateral formed from joining the midpoints of the}\\
\text{sides of a quadrilateral is a parallelogram}
\end{align*}
$$
# Problem 12
![[Multivariable Problem Set 1 2023-09-09 12.50.03.excalidraw|300]]
$$
\begin{align*}
2(\vec{g}-\vec{e})=2\vec{a},2(\vec{f}-\vec{d})=2\vec{a} \\
\therefore (\vec{g}-\vec{e}) \parallel (\vec{f}-\vec{d}) \land (\vec{g}-\vec{e}) = (\vec{f}-\vec{d}) \therefore \text{parallelogram}\\
\implies \vec{e}=\vec{d}, \vec{g}=\vec{f} \implies \fbox{$\vec{f}=\frac{1}{3}(2\vec{g}+\vec{f}),\vec{d}=\frac{1}{3}(2\vec{e}+\vec{d})$}
\end{align*}
$$