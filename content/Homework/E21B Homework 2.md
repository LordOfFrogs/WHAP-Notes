---
tags:
  - math/linear-algebra
due: 2024-02-10
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW2-2024.pdf)
# Problem 1
$$
\begin{align*}
\vec{y}=\begin{bmatrix}
1 & 7 \\
3 & 20
\end{bmatrix}\vec{x}\\
\left[\begin{array}{cc|cc}
1 & 0 & 1 & 7 \\
0 & 1 & 3 & 20
\end{array}\right]\\
\overset{R_{1}}{\underset{R_{2}-3R_{1}}{\longrightarrow}}\left[\begin{array}{cc|cc}
1 & 0 & 1 & 7 \\
-3 & 1 & 0 & -1
\end{array}\right]\\
\overset{R_{1}+7R_{2}}{\underset{-R_{2}}{\longrightarrow}}\left[\begin{array}{cc|cc}
-20 & 7 & 1 & 0 \\
3 & -1 & 0 & 1
\end{array}\right]\\
\implies \begin{bmatrix}
-20 & 7 \\
3 & -1
\end{bmatrix}\vec{y}=\vec{x}\\
\implies \boxed{ \begin{cases}
x_{1}=-20y_{1}+7y_{2} \\
x_{2}=3y_{1}-y_{2}
\end{cases} }
\end{align*}
$$
# Problem 2
24 - rotate 90 deg CCW
25 - Scale 2x
26 - Flip over y=x
27 - Mirror over y axis
28 - Scale 2x in y axis
29 - Rotate 180 deg
30 - Flatten along x axis so only on y axis
![[E21B Homework 2 2024-02-05 10.41.20.excalidraw]]
# Problem 3
$$
\begin{align*}
T(\vec{x})=\vec{v}\times\vec{x}\\
T(a\vec{x}+b\vec{y})=\vec{v}\times(a\vec{x}+b\vec{y})\\
=\begin{bmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{bmatrix}\times\begin{bmatrix}
ax_{1}+by_{1} \\
ax_{2}+by_{2} \\
ax_{3}+by_{3}
\end{bmatrix}=\begin{bmatrix}
v_{2}(ax_{3}+by_{3})-v_{3}(ax_{2}+by_{2}) \\
v_{3}(ax_{1}+by_{1})-v_{1}(ax_{3}+by_{3}) \\
v_{1}(ax_{2}+by_{2})-v_{2}(ax_{1}+by_{1})
\end{bmatrix}\\
=\begin{bmatrix}
a(v_{2}x_{3}-v_{3}x_{2})+b(v_{2}y_{3}-v_{3}y_{2}) \\
a(v_{3}x_{1}-v_{1}x_{3})+b(v_{3}y_{1}-v_{1}y_{3}) \\
a(v_{1}x_{2}-v_{2}x_{1})+b(v_{1}y_{2}-v_{2}y_{1})
\end{bmatrix}=a\begin{bmatrix}
v_{2}x_{3}-v_{3}x_{2} \\
v_{3}x_{1}-v_{1}x_{3} \\
v_{1}x_{2}-v_{2}x_{1}
\end{bmatrix}+b\begin{bmatrix}
v_{2}y_{3}-v_{3}y_{2} \\
v_{3}y_{1}-v_{1}y_{3} \\
v_{1}y_{2}-v_{2}y_{1}
\end{bmatrix}\\
=a(\vec{v}\times\vec{x})+b(\vec{v}\times\vec{y})=a[T(\vec{x})]+b[T(\vec{y})]\\
\implies \fbox{ Yes, $T(\vec{x})$ is linear }\\
\boxed{ T(\vec{x})=\begin{bmatrix}
0 & -v_{3} & v_{2} \\
v_{3} & 0 & -v_{1} \\
-v_{2} & v_{1} & 0
\end{bmatrix}\vec{x} }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\vec{v}=\begin{bmatrix}
2 \\
1 \\
2
\end{bmatrix},\vec{u}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} \\
\hat{v}=\frac{1}{3}\begin{bmatrix}
2 \\
1 \\
2
\end{bmatrix}\\
\text{proj}_{\hat{v}}\vec{u}=(\vec{u}\cdot\hat{v})\hat{v}=\left( \frac{2}{3}+\frac{1}{3}+\frac{2}{3} \right) \frac{1}{3}\begin{bmatrix}
2 \\
1 \\
2
\end{bmatrix}\\
=\boxed{ \frac{5}{9}\begin{bmatrix}
2 \\
1 \\
2
\end{bmatrix}=\begin{bmatrix}
\frac{10}{9} \\
\frac{5}{9} \\
\frac{10}{9}
\end{bmatrix} }
\end{align*}
$$
# Problem 5
$$
\vec{r}=2\vec{p}-\vec{u}=\begin{bmatrix}
\frac{20}{9} \\
\frac{10}{9} \\
\frac{20}{9}
\end{bmatrix}-\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}
=\boxed{ \begin{bmatrix}
\frac{11}{9} \\
\frac{1}{9} \\
\frac{11}{9}
\end{bmatrix} }
$$
# Problem 6
$$
\begin{align*}
T(\vec{x})=\mathbf{A}\vec{x}=\text{Proj}_\vec{v}\vec{x}=\left( \frac{\vec{v}\cdot\vec{x}}{\|\vec{v}\|^{2}} \right)\vec{v}\\
=\frac{1}{\|\vec{v}\|^{2}}\begin{bmatrix}
(v_{1}x_{1}+v_{2}x_{2})v_{1} \\
(v_{1}x_{1}+v_{2}x_{2})v_{2}
\end{bmatrix}=\frac{1}{25}\begin{bmatrix}
16x_{1}+12x_{2} \\
12x_{1}+9x_{2}
\end{bmatrix}\\
\implies \boxed{ \mathbf{A}=\frac{1}{25}\begin{bmatrix}
16 & 12 \\
12 & 9
\end{bmatrix}=\begin{bmatrix}
\frac{16}{25} & \frac{12}{25} \\
\frac{12}{25} & \frac{9}{25}
\end{bmatrix} }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\text{Ref}_\vec{v}\vec{x}=2\vec{p}-\vec{x}=2\mathbf{A}\vec{x}-\vec{x}=(2\mathbf{A}-\mathbf{I})\vec{x}\\
\implies 2\mathbf{A}-\mathbf{I}=\frac{1}{25}\begin{bmatrix}
32-25 & 12-25 \\
24-25 & 18-25
\end{bmatrix}\\
=\boxed{ \frac{1}{25}\begin{bmatrix}
7 & -13 \\
-1 & -7
\end{bmatrix}=\begin{bmatrix}
\frac{7}{25} & -\frac{13}{25} \\
-\frac{1}{25} & -\frac{7}{25}
\end{bmatrix} }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
T(\vec{x})=\begin{bmatrix}
x_{1} \\
x_{2} \\
0
\end{bmatrix}=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix}\vec{x}\\
\boxed{ \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix} }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
T(\vec{x})=\begin{bmatrix}
x_{1} \\
-x_{2} \\
x_{3}
\end{bmatrix}=\begin{bmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 1
\end{bmatrix}\vec{x}\\
\boxed{ \begin{bmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 1
\end{bmatrix} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\to\begin{bmatrix}
\cos\theta \\
0 \\
0
\end{bmatrix}\\
\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}\to\begin{bmatrix}
0 \\
0 \\
\sin\theta
\end{bmatrix}\\
\implies \boxed{ \begin{bmatrix}
\cos\theta & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & \sin\theta
\end{bmatrix} }
\end{align*}
$$
# Problem 11
$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0
\end{bmatrix}
$$
# Problem 12
$\mathbf{B}$ is the [[orthogonal projection]] because it is the only one where all three [[basis]] vectors are along the same line
$\mathbf{A}$ is the reflection because the [[Orthogonal Projection#Reflection|reflection]] [[matrix]] is twice the [[Orthogonal Projection|projection]] minus the identity, which matches with $\mathbf{B}$
# Problem 13
$$
\begin{align*}
\det\begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix}=(1)(1)-(1)(1)=0\\
\implies \fbox{ Not invertible }
\end{align*}
$$

# Problem 14
$$
\begin{align*}
\begin{vmatrix}
1 & 2 & 1 \\
1 & 3 & 2 \\
1 & 0 & 1
\end{vmatrix}=\begin{vmatrix}
2 & 1 \\
3 & 2
\end{vmatrix}+\begin{vmatrix}
1 & 2 \\
1 & 3
\end{vmatrix}\\
=(2)(2)-(3)(1)+(1)(3)-(2)(1)=2\neq0\\
\implies \fbox{ Invertible }\\
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 2 & 1 \\
0 & 1 & 0 & 1 & 3 & 2 \\
0 & 0 & 1 & 1 & 0 & 1
\end{array}\right]\\
R_{2},R_{3}-R_{1}\to\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 2 & 1 \\
-1 & 1 & 0 & 0 & 1 & 1 \\
-1 & 0 & 1 & 0 & -2 & 0
\end{array}\right]\\
R_{3}+2R_{2},R_{1}-2R_{2}\to\left[\begin{array}{ccc|ccc}
3 & 0 & 0 & 1 & 0 & -1 \\
-1 & 1 & 0 & 0 & 1 & 1 \\
1 & 2 & 1 & 0 & 0 & 2
\end{array}\right]\\
\frac{R_{3}}{2}\to R_{1}+R_{3},R_{2}-R_{3}\to\left[\begin{array}{ccc|ccc}
\frac{7}{2} & 1 & \frac{1}{2} & 1 & 0 & 0 \\
-\frac{3}{2} & 0 & -\frac{1}{2} & 0 & 1 & 0 \\
\frac{1}{2} & 1 & \frac{1}{2} & 0 & 0 & 1
\end{array}\right]\\
\implies \boxed{ \begin{bmatrix}
\frac{7}{2} & 1 & \frac{1}{2} \\
-\frac{3}{2} & 0 & -\frac{1}{2} \\
\frac{1}{2} & 1 & \frac{1}{2}
\end{bmatrix} }
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\begin{vmatrix}
1 & 2 & 3 \\
0 & 1 & 2 \\
0 & 0 & 1
\end{vmatrix}=\begin{vmatrix}
1 & 2 \\
0 & 1
\end{vmatrix}=(1)(1)-(2)(0)=1\neq0\\
\implies \fbox{ Invertible }\\
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 2 & 3 \\
0 & 1 & 0 & 0 & 1 & 2 \\
0 & 0 & 1 & 0 & 0 & 1
\end{array}\right]\\
R_{1}-2R_{2}\to\left[\begin{array}{ccc|ccc}
1 & -2 & 0 & 1 & 0 & -1 \\
0 & 1 & 0 & 0 & 1 & 2 \\
0 & 0 & 1 & 0 & 0 & 1
\end{array}\right]\\
R_{2}-2R_{3},R_{1}+R_{3}\to\left[\begin{array}{ccc|ccc}
1 & -2 & 1 & 1 & 0 & 0 \\
0 & 1 & -2 & 0 & 1 & 0 \\
0 & 0 & 1 & 0 & 0 & 1
\end{array}\right]\\
\implies \boxed{\begin{bmatrix}
1 & -2 & 1 \\
0 & 1 & -2 \\
0 & 0 & 1
\end{bmatrix} }
\end{align*}
$$
# Problem 16
$$
\begin{align*}
\begin{vmatrix}
1 & 3 & 3 \\
1 & 4 & 8 \\
2 & 7 & 12
\end{vmatrix}=\begin{vmatrix}
4 & 8 \\
7 & 12
\end{vmatrix}-\begin{vmatrix}
3 & 3 \\
7 & 12
\end{vmatrix}+2\begin{vmatrix}
3 & 3 \\
4 & 8
\end{vmatrix}\\
=48-56-36+21+48-24=1\neq0\\
\implies \fbox{ Invertible }\\
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 3 & 3 \\
0 & 1 & 0 & 1 & 4 & 8 \\
0 & 0 & 1 & 2 & 7 & 12
\end{array}\right]\\
R_{2}-R_{1},R_{3}-2R_{1}\to\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 3 & 3 \\
-1 & 1 & 0 & 0 & 1 & 5 \\
-2 & 0 & 1 & 0 & 1 & 6
\end{array}\right]\\
R_{3}-R_{2},R_{1}-3R_{2}\to\left[\begin{array}{ccc|ccc}
4 & -3 & 0 & 1 & 0 & -12 \\
-1 & 1 & 0 & 0 & 1 & 5 \\
-1 & -1 & 1 & 0 & 0 & 1
\end{array}\right]\\
R_{2}-5R_{3},R_{1}+12R_{3}\to\left[\begin{array}{ccc|ccc}
-8 & -15 & 12 & 1 & 0 & 0 \\
4 & 6 & -5 & 0 & 1 & 0 \\
-1 & -1 & 1 & 0 & 0 & 1
\end{array}\right]\\
\implies \boxed{ \begin{Bmatrix}
x_{1}=-8y_{1}-15y_{2}+12y_{3} \\
x_{2}=4y_{1}+6y_{2}-5y_{3} \\
x_{3}=-y_{1}-y_{2}+y_{3}
\end{Bmatrix} }
\end{align*}
$$
# Problem 17
$$
\begin{align*}
(\mathbf{A}-\lambda\mathbf{I})\vec{x}=0\\
\begin{bmatrix}
1-\lambda & 10 \\
-3 & 12-\lambda
\end{bmatrix}\vec{x}=0\\
\implies\begin{vmatrix}
1-\lambda & 10 \\
-3 & 12-\lambda
\end{vmatrix}=0\\
\implies 12-13\lambda+\lambda^{2}+30=0\\
\lambda=\frac{13\pm\sqrt{169-168}}{2}\\
\implies \boxed{ \lambda_{1}=6,\lambda_{2}=7 }\\
\lambda_{1}\implies\begin{bmatrix}
-5 & 10 \\
-3 & 6
\end{bmatrix}\vec{x}=0\implies \boxed{ \vec{x}_{1}=\begin{bmatrix}
2 \\
1
\end{bmatrix} }\\
\lambda_{2}\implies\begin{bmatrix}
-6 & 10 \\
-3 & 5
\end{bmatrix}\vec{x}=0\implies \boxed{ \vec{x}_{2}=\begin{bmatrix}
5 \\
3
\end{bmatrix} }
\end{align*}
$$