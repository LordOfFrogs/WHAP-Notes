---
tags:
  - math/linear-algebra
due: 2024-03-30
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW8-2024.pdf)
# Problem 1
$$
\begin{align*}
\begin{vmatrix}
0 & 1 & k \\
3 & 2k & 5 \\
9 & 7 & 5
\end{vmatrix}=-\begin{vmatrix}
3 & 5 \\
9 & 5
\end{vmatrix}+k\begin{vmatrix}
3 & 2k \\
9 & 7
\end{vmatrix}\\
=-15+45+21k-18k^{2}=-18k^{2}+21k+30=0\\
\implies k=\frac{-21\pm\sqrt{21^{2}+4\cdot30\cdot18}}{-36}=\frac{21\mp51}{36}\\
=-\frac{5}{6},2\\
\implies\boxed{ \text{Invertible}\Longleftrightarrow k\neq-\frac{5}{6}\text{ or }2 }
\end{align*}
$$
# Problem 2
$$
\begin{align*}
|\mathbf{A}-\lambda\mathbf{I}|=\begin{vmatrix}
4-\lambda & 2 \\
2 & 7-\lambda
\end{vmatrix}\\
=28-11\lambda+\lambda^{2}-4\\
=\lambda^{2}-11\lambda+24\\
\implies \boxed{ \lambda=3,8 }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
|\mathbf{A}-\lambda\mathbf{I}|=\begin{vmatrix}
4-\lambda & 2 & 0 \\
4 & 6-\lambda & 0 \\
5 & 2 & 3-\lambda
\end{vmatrix}\\
=(3-\lambda)\begin{vmatrix}
4-\lambda & 2 \\
4 & 6-\lambda
\end{vmatrix}=(3-\lambda)(4-\lambda)(6-\lambda)-8(3-\lambda)\\
=72-12\lambda-18\lambda+3\lambda^{2}-24\lambda+4\lambda^{2}+6\lambda^{2}-\lambda^{3}-24+8\lambda\\
=48-46\lambda+13\lambda^{2}-\lambda^{3}\\
\implies \boxed{ \lambda=2,3,8 }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\begin{vmatrix}
4 & 5 & 0 & 0 \\
3 & 6 & 0 & 0 \\
2 & 7 & 1 & 4 \\
1 & 8 & 2 & 3
\end{vmatrix}=4\begin{vmatrix}
6 & 0 & 0 \\
7 & 1 & 4 \\
8 & 2 & 3
\end{vmatrix}-5\begin{vmatrix}
3 & 0 & 0 \\
2 & 1 & 4 \\
1 & 2 & 3
\end{vmatrix}\\
=4\cdot6\begin{vmatrix}
1 & 4 \\
2 & 3
\end{vmatrix}-5\cdot3\begin{vmatrix}
1 & 4 \\
2 & 3
\end{vmatrix}=24(3-8)-15(3-8)\\
=\boxed{ -45 } 
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}\\
\det(k\mathbf{A})=ka\begin{vmatrix}
ke & kf \\
kh & ki
\end{vmatrix}-kb\begin{vmatrix}
kd & kf \\
kg & ki
\end{vmatrix}+kc\begin{vmatrix}
kd & ke \\
kg & kh
\end{vmatrix}\\
=k^{3}\det(\mathbf{A})\\
\boxed{ \det(k\mathbf{A})=k^{n}\det\mathbf{A} }
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\begin{vmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & 4 & 4 \\
1 & -1 & 2 & -2 \\
1 & -1 & 8 & -8
\end{vmatrix}=\begin{vmatrix}
1 & 1 & 1 & 1 \\
0 & 0 & 3 & 3 \\
0 & -2 & 1 & -3 \\
0 & -2 & 7 & -9
\end{vmatrix}\\
=\begin{vmatrix}
1 & 1 & 1 & 1 \\
0 & -2 & 1 & -3 \\
0 & -2 & 7 & -9 \\
0 & 0 & 3 & 3
\end{vmatrix}=-2\begin{vmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & -\frac{1}{2} & \frac{3}{2} \\
0 & -2 & 7 & -9 \\
0 & 0 & 3 & 3
\end{vmatrix}\\
=-2\begin{vmatrix}
1 & 0 & \frac{3}{2} & -\frac{1}{2} \\
0 & 1 & -\frac{1}{2} & \frac{3}{2} \\
0 & 0 & 6 & -6 \\
0 & 0 & 3 & 3
\end{vmatrix}=-12\begin{vmatrix}
1 & 0 & \frac{3}{2} & -\frac{1}{2} \\
0 & 1 & -\frac{1}{2} & \frac{3}{2} \\
0 & 0 & 1 & -1 \\
0 & 0 & 3 & 3
\end{vmatrix}\\
=-12\begin{vmatrix}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 1 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 6
\end{vmatrix}=-72\begin{vmatrix}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 1 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 1
\end{vmatrix}\\
=-72\det\mathbf{I}_{4}=\boxed{ -72 }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
T(f)=2f+3f'\\
f(x)=ax^{2}+bx+c\\
T(f)(x)=2ax^{2}+2bx+2c+6ax+3b\\
=2ax^{2}+(2b+6a)x+3b+2c\\
\mathbf{A}=\begin{bmatrix}
2 & 0 & 0 \\
6 & 2 & 0 \\
0 & 3 & 2
\end{bmatrix}\\
\det\mathbf{A}=\begin{vmatrix}
2 & 0 & 0 \\
6 & 2 & 0 \\
0 & 3 & 2
\end{vmatrix}=2\begin{vmatrix}
2 & 0 \\
3 & 2
\end{vmatrix}=\boxed{ 8 }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
(T(f))(t)=f(3t-2)\\
f(x)=x^{2}\implies T(f)(t)=(3t-2)^{2}=9t^{2}-12t+4\\
f(x)=x\implies T(f)(t)=3t-2\\
f(x)=1\implies T(f)(t)=1\\
\implies \mathbf{A}=\begin{bmatrix}
9 & 0 & 0 \\
-12 & 3 & 0 \\
4 & -2 & 1
\end{bmatrix}\\
\det\mathbf{A}=\begin{vmatrix}
9 & 0 & 0 \\
-12 & 3 & 0 \\
4 & -2 & 1
\end{vmatrix}=9\begin{vmatrix}
3 & 0 \\
-2 & 1
\end{vmatrix}=\boxed{ 27 }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\mathbf{M}=\begin{bmatrix}
a & b \\
0 & c
\end{bmatrix}\\
T(\mathbf{M})=\begin{bmatrix}
2 & 3 \\
0 & 4
\end{bmatrix}\mathbf{M}=\begin{bmatrix}
2 & 3 \\
0 & 4
\end{bmatrix}\begin{bmatrix}
a & b \\
0 & c
\end{bmatrix}\\
=\begin{bmatrix}
2a & 2b+3c \\
0 & 4c
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
2 & 0 & 0 \\
0 & 2 & 3 \\
0 & 0 & 4
\end{bmatrix}\\
\det\mathbf{A}=\boxed{ 16 }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
T(\mathbf{M})=\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\mathbf{M}+\mathbf{M}\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\\
\mathbf{M}=\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}\implies T(\mathbf{M})=\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}+\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\\
=\begin{bmatrix}
1 & 0 \\
2 & 0
\end{bmatrix}+\begin{bmatrix}
1 & 2 \\
0 & 0
\end{bmatrix}=\begin{bmatrix}
2 & 2 \\
2 & 0
\end{bmatrix}=2\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}+2\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}\\
\mathbf{M}=\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}\implies T(\mathbf{M})=\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}+\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\\
=\begin{bmatrix}
2 & 1 \\
3 & 2
\end{bmatrix}+\begin{bmatrix}
2 & 3 \\
1 & 2
\end{bmatrix}=\begin{bmatrix}
4 & 4 \\
4 & 4
\end{bmatrix}=4\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}+4\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}+4\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix}\\
\mathbf{M}=\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix}\implies T(\mathbf{M})=\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix}+\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\\
=\begin{bmatrix}
0 & 2 \\
0 & 3
\end{bmatrix}+\begin{bmatrix}
0 & 0 \\
2 & 3
\end{bmatrix}=\begin{bmatrix}
0 & 2 \\
2 & 6
\end{bmatrix}=2\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}+6\begin{bmatrix}
0 & 0 \\
0 & 1
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
2 & 4 & 0 \\
2 & 4 & 2 \\
0 & 4 & 6
\end{bmatrix}\\
\det\mathbf{A}=2\begin{vmatrix}
4 & 2 \\
4 & 6
\end{vmatrix}-4\begin{vmatrix}
2 & 2 \\
0 & 6
\end{vmatrix}=32-48=\boxed{ -16 }
\end{align*}
$$
# Problem 11
## a)
$$
\begin{align*}
\text{rref}[\mathbf{A}|\mathbf{AB}]=[\mathbf{I}|\mathbf{M}]\\
[\mathbf{A}|\mathbf{AB}]\begin{bmatrix}
\mathbf{B} \\
-\mathbf{I}
\end{bmatrix}=\mathbf{A}\mathbf{B}-\mathbf{A}\mathbf{B}=\mathbf{0}\\
\implies [\mathbf{I}|\mathbf{M}]\begin{bmatrix}
\mathbf{B} \\
-\mathbf{I}
\end{bmatrix}=\mathbf{0}=\mathbf{B}-\mathbf{M}\\
\implies \mathbf{B}=\mathbf{M}\\
\implies \boxed{ \text{rref}[\mathbf{A}|\mathbf{AB}]=[\mathbf{I}_{n}|\mathbf{B}] }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{B}=\mathbf{A}^{-1}\implies [\mathbf{A}|\mathbf{AB}]=[\mathbf{A}|\mathbf{I}]\\
\implies \text{rref}[\mathbf{A}|\mathbf{AB}]=\text{rref}[\mathbf{A}|\mathbf{AB}]=[\mathbf{I}|\mathbf{B}]=[\mathbf{I}|\mathbf{A}^{-1}]\\
\implies \boxed{ \text{rref}[\mathbf{A}|\mathbf{I}]=[\mathbf{I}|\mathbf{A}^{-1}] }
\end{align*}
$$
# Problem 12
$$
\begin{align*}
\mathbf{A}^{\text{T}}=\mathbf{A}^{-1}\\
\det\mathbf{A}^{\text{T}}=\det\mathbf{A},\det\mathbf{A}^{-1}=\frac{1}{\det\mathbf{A}}\\
\implies \det\mathbf{A}=\frac{1}{\det\mathbf{A}}\implies \boxed{ \det\mathbf{A}=\pm1 }
\end{align*}
$$
# Problem 13
![[E21B Homework 8 2024-03-28 10.27.41.excalidraw|400]]
$$
\begin{align*}
\vec{u}=\begin{bmatrix}
12 \\
-2
\end{bmatrix},\vec{v}=\begin{bmatrix}
2 \\
-13
\end{bmatrix}\\
\vec{x}=\begin{bmatrix}
2 \\
9
\end{bmatrix},\vec{y}=\begin{bmatrix}
-8 \\
-2
\end{bmatrix}\\
\frac{1}{2}\begin{Vmatrix}
\uparrow & \uparrow \\
\vec{u} & \vec{v} \\
\downarrow & \downarrow
\end{Vmatrix}=\frac{1}{2}\begin{Vmatrix}
12 & 2 \\
-2 & -13
\end{Vmatrix}=\frac{1}{2}|-156+4|=76\\
\frac{1}{2}\begin{Vmatrix}
\uparrow & \uparrow \\
\vec{x} & \vec{y} \\
\downarrow & \downarrow
\end{Vmatrix}=\frac{1}{2}\begin{Vmatrix}
2 & -8 \\
9 & -2
\end{Vmatrix}=\frac{1}{2}|-4+72|=34\\
\text{Area}=\frac{1}{2}\begin{Vmatrix}
\uparrow & \uparrow \\
\vec{u} & \vec{v} \\
\downarrow & \downarrow
\end{Vmatrix}+\frac{1}{2}\begin{Vmatrix}
\uparrow & \uparrow \\
\vec{x} & \vec{y} \\
\downarrow & \downarrow
\end{Vmatrix}=76+34\\
=\boxed{ 110 }
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\vec{v}_{1}=\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}\\
\vec{u}_{1}=\frac{1}{2}\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix}\implies \vec{v}_{2}-\text{proj}_{\vec{u}_{1}}\vec{v}_{2}=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}-\frac{1}{4}\left( \begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}\cdot\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix} \right) \begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix}\\
=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}-\frac{5}{2}\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix}=\frac{1}{2}\begin{bmatrix}
-3 \\
-1 \\
1 \\
3
\end{bmatrix}\implies \vec{u}_{2}=\frac{1}{2\sqrt{5}}\begin{bmatrix}
-3 \\
-1 \\
1 \\
3
\end{bmatrix}\\
\implies \mathcal{B}=\left\{ \frac{1}{2}\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix}, \frac{1}{2\sqrt{5}}\begin{bmatrix}
-3 \\
-1 \\
1 \\
3
\end{bmatrix} \right\} \implies [\vec{v}_{1}]_{\mathcal{B}}=\begin{bmatrix}
2 \\
0
\end{bmatrix},[\vec{v}_{2}]_{\mathcal{B}}=\begin{bmatrix}
5 \\
\sqrt{5}
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
2 & 5 \\
0 & \sqrt{5}
\end{bmatrix}\\
\text{Area}=\det\mathbf{A}=\begin{vmatrix}
2 & 5 \\
0 & \sqrt{5}
\end{vmatrix}=\boxed{ 2\sqrt{5} }
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix},\vec{v}_{3}=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}\\
\implies \vec{u}_{1}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}\\
\implies \vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix}-\left( \begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix}\cdot\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix} \right)\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}=\begin{bmatrix}
0 \\
1 \\
1 \\
1
\end{bmatrix}\implies \vec{u}_{1}=\frac{1}{\sqrt{3}}\begin{bmatrix}
0 \\
1 \\
1 \\
1
\end{bmatrix}\\
\vec{v}_{3}-\text{proj}_{V_{2}}\vec{v}_{3}=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}-\left( \begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}\cdot\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix} \right) \begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}-\frac{1}{3}\left( \begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}\cdot\begin{bmatrix}
0 \\
1 \\
1 \\
1
\end{bmatrix} \right) \begin{bmatrix}
0 \\
1 \\
1 \\
1
\end{bmatrix}\\
=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}-\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}-\begin{bmatrix}
0 \\
3 \\
3 \\
3
\end{bmatrix}=\begin{bmatrix}
0 \\
-1 \\
0 \\
1
\end{bmatrix}\implies \vec{u}_{3}=\frac{1}{\sqrt{2}}\begin{bmatrix}
0 \\
-1 \\
0 \\
1
\end{bmatrix}\\
\mathcal{B}=\left\{ \begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}, \frac{1}{\sqrt{3}}\begin{bmatrix}
0 \\
1 \\
1 \\
1
\end{bmatrix}, \frac{1}{\sqrt{2}}\begin{bmatrix}
0 \\
-1 \\
0 \\
1
\end{bmatrix} \right\}\\
\implies [\vec{v}_{1}]_{\mathcal{B}}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix},[\vec{v}_{2}]_{\mathcal{B}}=\begin{bmatrix}
1 \\
\sqrt{3} \\
0
\end{bmatrix},[\vec{v}_{3}]_{\mathcal{B}}=\begin{bmatrix}
1 \\
3\sqrt{3} \\
\sqrt{2}
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
1 & 1 & 1 \\
0 & \sqrt{3} & 3\sqrt{3} \\
0 & 0 & \sqrt{2}
\end{bmatrix}\\
\text{Volume}=\det\mathbf{A}=\boxed{ \sqrt{6} }
\end{align*}
$$
# Problem 16
## a)
![[E21B Homework 8 2024-03-28 20.43.44.excalidraw|400]]
$\text{Area}=\pi pq$
## b)
$$
\det\mathbf{A}=ab
$$
because the unit square is transformed into a $a\times b$ rectangle
## c)
![[E21B Homework 8 2024-03-28 20.51.33.excalidraw|400]]
# Problem 17
$$
\begin{align*}
\mathbf{A}\vec{x}=\vec{b}\\
\mathbf{A}=\begin{bmatrix}
2 & 3 & 0 \\
0 & 4 & 5 \\
6 & 0 & 7
\end{bmatrix},\vec{b}=\begin{bmatrix}
8 \\
3 \\
-1
\end{bmatrix}\\
\det\mathbf{A}=2\begin{vmatrix}
4 & 5 \\
0 & 7
\end{vmatrix}-3\begin{vmatrix}
0 & 5 \\
6 & 6
\end{vmatrix}=2\cdot28+3\cdot30=146\\
x_{k}=\frac{\det\mathbf{A}_{k}}{\det\mathbf{A}}\\
\mathbf{A}_{1}=\begin{bmatrix}
8 & 3 & 0 \\
3 & 4 & 5 \\
-1 & 0 & 7
\end{bmatrix}\implies \det\mathbf{A}_{1}=8\begin{vmatrix}
4 & 5 \\
0 & 7
\end{vmatrix}-3\begin{vmatrix}
3 & 5 \\
-1 & 7
\end{vmatrix}=8\cdot28-3\cdot26=146\\
\implies x_{1}=\frac{146}{146}=1\\
\mathbf{A}_{2}=\begin{bmatrix}
2 & 8 & 0 \\
0 & 3 & 5 \\
6 & -1 & 7
\end{bmatrix}\implies \det\mathbf{A}_{2}=2\begin{vmatrix}
3 & 5 \\
-1 & 7
\end{vmatrix}-8\begin{vmatrix}
0 & 5 \\
6 & 7
\end{vmatrix}=2\cdot26+8\cdot30=292\\
\implies x_{2}=\frac{292}{146}=2\\
\mathbf{A}_{3}=\begin{bmatrix}
2 & 3 & 8 \\
0 & 4 & 3 \\
6 & 0 & -1
\end{bmatrix}\implies\det\mathbf{A}_{3}=2\begin{vmatrix}
4 & 3 \\
0 & -1
\end{vmatrix}+6\begin{vmatrix}
3 & 8 \\
4 & 3
\end{vmatrix}=-8-6\cdot23=-146\\
\implies x_{3}=-\frac{146}{146}=-1\\
\implies \boxed{ \begin{Bmatrix}
x=1 \\
y=2 \\
z=-1
\end{Bmatrix} }
\end{align*}
$$
# Problem 18
![[E21B Homework 8 2024-03-28 21.12.18.excalidraw|400]]
$$
\begin{align*}
\vec{u}=\begin{bmatrix}
1 \\
0
\end{bmatrix},\vec{v}=\begin{bmatrix}
\frac{1}{2} \\
\frac{\sqrt{3}}{2}
\end{bmatrix},\mathcal{B}=\{\vec{u},\vec{v}\}\\
\text{Area}_{1,1,1}=\pi\left( \frac{\sqrt{3}}{6} \right)^{2}=\frac{\pi}{12}\\
\mathbf{A}\vec{u}=\begin{bmatrix}
4 \\
0
\end{bmatrix}=\begin{bmatrix}
4 \\
0
\end{bmatrix}_\mathcal{B},\mathbf{A}\vec{v}=\begin{bmatrix}
0 \\
3
\end{bmatrix}=\begin{bmatrix}
-\sqrt{3} \\
2\sqrt{3}
\end{bmatrix}_\mathcal{B}\\
\implies [\mathbf{A}]_\mathcal{B}=\begin{bmatrix}
4 & -\sqrt{3} \\
0 & 2\sqrt{3}
\end{bmatrix}\\
\det\mathbf{A}=\det[\mathbf{A}]_{\mathcal{B}}=8\sqrt{3}\\
\implies \text{Area}_{3,4,5}=8\sqrt{3}\cdot\text{Area}_{1,1,1}=\boxed{ \frac{2}{3}\pi\sqrt{3} }
\end{align*}
$$
