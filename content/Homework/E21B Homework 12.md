---
tags:
  - math/linear-algebra
due: 2024-04-27
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW12-2024.pdf)
# Problem 1
$$
\begin{align*}
L:\mathbb{R}^{m}\to\mathbb{R}^{n},L(\vec{v})=\mathbf{A}\vec{v}\\
\mathbf{A}^{\text{T}}\mathbf{A}\ (m\times m)\text{ is orthogonally diagonalizable}\implies \{ \vec{v}_{1},\cdots,\vec{v}_{m} \}\\
\implies \mathbf{A}^{\text{T}}\mathbf{A}\vec{v}_{i}=\lambda_{i}\vec{v}_{i}\\
\mathbf{A}\vec{v}_{i}\cdot\mathbf{A}\vec{v}_{j}=(\mathbf{A}\vec{v}_{i})^{\text{T}}(\mathbf{A}\vec{v}_{j})=\vec{v}_{i}^{\text{T}}\mathbf{A}^{\text{T}}\mathbf{A}\vec{v}_{j}=\vec{v}_{i}^{\text{T}}\lambda_{i}\vec{v}_{j}=\lambda_{i}(\vec{v}_{i}^{\text{T}}\vec{v}_{j})=\lambda_{i}(\vec{v}_{i}\cdot\vec{v}_{j})\\
i\neq j\implies \vec{v}_{i}\cdot\vec{v}_{j}=0\implies (\mathbf{A}\vec{v}_{i})\cdot(\mathbf{A}\vec{v}_{j})=0\implies \boxed{ \{ \mathbf{A}\vec{v}_{1},\cdots,\mathbf{A}\vec{v}_{m} \}\text{ is orthogonal} }
\end{align*}
$$
# Problem 2
$$
\begin{align*}
T(\vec{v}_{i})=\mathbf{A}\vec{v}_{i}\\
\text{Let }\{ \vec{v}_{1},\cdots,\vec{v}_{m} \}\text{ be an orthonormal basis of }\mathbf{A}^{\text{T}}\mathbf{A}\in\mathbb{R}^{m}\\
\text{ (possible because Spectral Theorem)}\\
\implies \{ \mathbf{A}\vec{v}_{1},\cdots,\mathbf{A}\vec{v}_{m} \}\text{ is orthogonal}\\
\implies \left\{  \frac{\mathbf{A}\vec{v}_{1}}{\|\mathbf{A}\vec{v}_{1}\|},\cdots, \frac{\mathbf{A}\vec{v}_{m}}{\|\mathbf{A}\vec{v}_{m}\|}  \right\}=\{ \vec{w}_{1},\cdots,\vec{w}_{m} \}\text{ is orthonormal}\\
T(\vec{v}_{i})=\mathbf{A}\vec{v}_{i}=\|\mathbf{A}\vec{v}_{i}\|\vec{w}_{i}=c_{i}\vec{w}_{i}\checkmark
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\mathrm{im}\,\mathbf{A}=(\ker\mathbf{A}^{\text{T}})^{\perp}=(\ker\mathbf{A})^{\perp}\\
\implies \forall\vec{w}\in\ker\mathbf{A},\vec{v}\in\text{im}\,\mathbf{A}\perp\vec{w}\in\ker\mathbf{A}
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\mathbf{A}^{2}=\mathbf{A},\mathbf{A}^{\text{T}}=\mathbf{A}\\
\implies \mathbf{A}=\mathbf{AA}^{\text{T}}\\
\implies \boxed{ \mathbf{A}\text{ is an orthogonal projection} }
\end{align*}
$$
# Problem 5
$$
\begin{align*}
q(x,y)=6x^{2}+4xy+3y^{2}\\
=\vec{x}^{\text{T}}\mathbf{A}\vec{x}=\begin{bmatrix}
x & y
\end{bmatrix}\begin{bmatrix}
a & b \\
b & c
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}=\begin{bmatrix}
x & y
\end{bmatrix}\begin{bmatrix}
ax+by \\
bx+cy
\end{bmatrix}\\
=ax^{2}+bxy+bxy+cy^{2}=ax^{2}+2bxy+cy^{2}\\
\implies a=6,b=2,c=3\\
\implies \mathbf{A}=\begin{bmatrix}
6 & 2 \\
2 & 3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-6 & -2 \\
-2 & \lambda-3
\end{vmatrix}=\lambda^{2}-9\lambda+14\\
\implies \lambda_{1}=2,\lambda_{2}=7\\
\implies \fbox{ Positive definite }
\end{align*}
$$
# Problem 6
$$
\begin{align*}
q(x,y)=2x^{2}+6xy+4y^{2}\\
\implies a=2,b=3,c=4\\
\implies \mathbf{A}=\begin{bmatrix}
2 & 3 \\
3 & 4
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-2 & -3 \\
-3 & \lambda-4
\end{vmatrix}=\lambda^{2}-6\lambda-1\\
\implies \lambda=3\pm\sqrt{10}\implies \lambda_{1}>0,\lambda_{2}<0\\
\implies \fbox{ Indefinite }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\mathbf{A}=\mathbf{SDS}^{\text{T}}\text{ where }\mathbf{S}\text{'s columns form an orthonormal basis and }\\
\mathbf{D}=\begin{bmatrix}
\lambda_{1} & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & \lambda_{n}
\end{bmatrix}\\
\implies \mathbf{A}^{2}=(\mathbf{SDS}^{\text{T}})(\mathbf{SDS}^{\text{T}})=\mathbf{SD}(\mathbf{S}^{\text{T}}\mathbf{S})\mathbf{DS}^{\text{T}}\\
=\mathbf{SD}^{2}\mathbf{S}^{\text{T}}\\
\implies \text{Eigenvalues are all 0 or positive}\\
\implies \fbox{$\mathbf{A}^{2}$ is positive definite or positive semi-definite}\\
\fbox{$\mathbf{A}^{2}$ is positive definite when no eigenvalues of $\mathbf{A}$ are 0, aka. when $\mathbf{A}$ is invertible}
\end{align*}
$$
# Problem 8
## a)
$$
\begin{align*}
\mathbf{A}^{2}=\mathbf{A}(-\mathbf{A}^{\text{T}})=-\mathbf{AA}^{\text{T}}\implies \fbox{$\mathbf{A}^{2}$ is symmetric}
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{x}^{\text{T}}\mathbf{A}^{2}\vec{x}=\vec{x}^{\text{T}}(-\mathbf{AA}^{\text{T}})\vec{x}=-\vec{x}^{\text{T}}\mathbf{AA}^{\text{T}}\vec{x}=-(\mathbf{A}^{\text{T}}\vec{x})\cdot(\mathbf{A}^{\text{T}}\vec{x})=-\|\mathbf{A}\vec{x}\|^{2}\\
\implies \forall\vec{x},\vec{x}^{\text{T}}\mathbf{A}^{2}\vec{x}\leq0\implies \boxed{ \text{Negative semi-definite} }\\
\implies \boxed{ \text{Eigenvalues }\leq0\text{ and real} }
\end{align*}
$$
## c)
$$
\begin{align*}
\det(\mathbf{A}^{2}-\mathbf{I}\lambda)=0\implies \det((\mathbf{A}-\mathbf{I}\sqrt{\lambda})(\mathbf{A}+\mathbf{I}\sqrt{ \lambda }))=0\\
\implies \det(\mathbf{A}-\mathbf{I}\sqrt{ \lambda })\det(\mathbf{A}+\mathbf{I}\sqrt{ \lambda })=0\\
\implies \text{Either }\sqrt{\lambda}\text{ or }-\sqrt{\lambda}\text{ is an eigenvalue}\\
\lambda\leq0\implies \pm\sqrt{\lambda}=0\text{ or }\pm\sqrt{\lambda}\text{ is purely imaginary}\\
\implies \fbox{ Complex eigenvalues purely imaginary and come in pairs }\\
\det(\mathbf{A})=\det(-\mathbf{A}^{\text{T}})=(-1)^{n}\det(\mathbf{A}^{\text{T}})=(-1)^{n}\det\mathbf{A}\\
\implies \mathbf{D}\text{ is real}\Longleftrightarrow \mathbf{D}=0\implies \mathbf{A}=0\\
\implies \fbox{ Only the zero matrix is diagonalizable over $\mathbb{R}$ }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\mathbf{A}=\mathbf{SDS}^{-1},\mathbf{D}=\begin{bmatrix}
\lambda_{1} & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & \lambda_{n}
\end{bmatrix}\\
\mathbf{A}^{-1}=(\mathbf{SDS}^{-1})^{-1}=\mathbf{SD}^{-1}\mathbf{S}^{-1},\mathbf{D}^{-1}=\begin{bmatrix}
\frac{1}{\lambda_{1}} & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & \frac{1}{\lambda_{n}}
\end{bmatrix}\\
\implies \text{Eigenvalues of }\mathbf{A}^{-1}\text{ are reciprocals of those of }\mathbf{A}\\
\implies \fbox{ The definiteness is the same }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
q(x,y)=xy=1\\
\vec{x}^{\text{T}}\mathbf{A}\vec{x}=\begin{bmatrix}
x & y
\end{bmatrix}\begin{bmatrix}
0 & \frac{1}{2} \\
\frac{1}{2} & 0
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda & -\frac{1}{2} \\
-\frac{1}{2} & \lambda
\end{vmatrix}=\lambda^{2}-\frac{1}{4}=0\\
\implies \lambda_{1}=\frac{1}{2},\lambda_{2}=-\frac{1}{2}\\
\implies \mathbf{D}=\begin{bmatrix}
\frac{1}{2} & 0 \\
0 & -\frac{1}{2}
\end{bmatrix}\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
-1
\end{bmatrix}\\
\vec{y}^{\text{T}}\mathbf{D}\vec{y}=1\implies \begin{bmatrix}
u & v
\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & 0 \\
0 & -\frac{1}{2}
\end{bmatrix}\begin{bmatrix}
u \\
v
\end{bmatrix}=1\\
\implies \boxed{ \frac{1}{2}u^{2}-\frac{1}{2}v^{2}=1 }
\end{align*}
$$
![[E21B Homework 12 2024-04-25 20.44.15.excalidraw]]
# Problem 11
$$
\begin{align*}
q(x,y)=9x^{2}-4xy+6y^{2}=1\\
\vec{x}^{\text{T}}\mathbf{A}\vec{x}=\begin{bmatrix}
x & y
\end{bmatrix}\begin{bmatrix}
9 & -2 \\
-2 & 6
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-9 & 2 \\
2 & \lambda-6
\end{vmatrix}=\lambda^{2}-15\lambda+50\\
\implies \lambda_{1}=5,\lambda_{2}=10\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
2
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
2 \\
-1
\end{bmatrix}\\
\vec{y}^{\text{T}}\mathbf{D}\vec{y}=\begin{bmatrix}
u & v
\end{bmatrix}\begin{bmatrix}
5 & 0 \\
0 & 10
\end{bmatrix}\begin{bmatrix}
u \\
v
\end{bmatrix}\\
=\boxed{ 5u^{2}+10v^{2}=1 }
\end{align*}
$$![[E21B Homework 12 2024-04-25 20.56.48.excalidraw]]
# Problem 12
$$
\begin{align*}
q(x,y)=x^{2}+4xy+4y^{2}=1\\
\vec{x}^{\text{T}}\mathbf{A}\vec{x}=\begin{bmatrix}
x & y
\end{bmatrix}\begin{bmatrix}
1 & 2 \\
2 & 4
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{bmatrix}
\lambda-1 & -2 \\
-2 & \lambda-4
\end{bmatrix}=\lambda^{2}-5\lambda=0\\
\implies \lambda_{1}=0,\lambda_{2}=5\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
-1
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
2
\end{bmatrix}\\
\vec{y}^{\text{T}}\mathbf{D}\vec{y}=\begin{bmatrix}
u & v
\end{bmatrix}\begin{bmatrix}
0 & 0 \\
0 & 5
\end{bmatrix}\begin{bmatrix}
u \\
v
\end{bmatrix}=5v^{2}=1
\end{align*}
$$
![[E21B Homework 12 2024-04-25 21.09.24.excalidraw]]
# Problem 13
$$
\begin{align*}
-x^{2}+y^{2}-z^{2}+10xz=1\\
=\vec{x}^{\text{T}}\mathbf{A}\vec{x}=\begin{bmatrix}
x & y & z
\end{bmatrix}\begin{bmatrix}
-1 & 0 & 5 \\
0 & 1 & 0 \\
5 & 0 & -1
\end{bmatrix}\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda+1 & 0 & -5 \\
0 & \lambda-1 & 0 \\
-5 & 0 & \lambda+1
\end{vmatrix}\\
=(\lambda+1)\begin{vmatrix}
\lambda-1 & 0 \\
0 & \lambda+1
\end{vmatrix}-5\begin{vmatrix}
0 & \lambda-1 \\
-5 & 0
\end{vmatrix}\\
=(\lambda+1)^{2}(\lambda-1)-25\lambda+25=\lambda^{3}+\lambda^{2}-26\lambda+24=0\\
\begin{array}{c|cccc}
1 & 1 & 1 & -26 & 24 \\
 &  & 1 & 2 & -24 \\
\hline & 1 & 2 & -24 & 0
\end{array}\\
\implies \lambda_{1}=1,\lambda_{2}=4,\lambda_{3}=-6\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}\\
\lambda_{3}\implies \vec{v}_{3}=\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix}\\
\vec{y}^{\text{T}}\mathbf{D}\vec{y}=\begin{bmatrix}
u & v & w
\end{bmatrix}\begin{bmatrix}
1 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & -6
\end{bmatrix}\begin{bmatrix}
u \\
v \\
w
\end{bmatrix}=u^{2}+4v^{2}-6w^{2}=1\\
u,w=0\implies v=\pm \frac{1}{2}\\
\implies \vec{x}=\pm \frac{1}{2}\cdot \frac{1}{\sqrt{2}}\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}=\boxed{ \left( \frac{\sqrt{2}}{4},0, \frac{\sqrt{2}}{4} \right),\left( -\frac{\sqrt{2}}{4},0, -\frac{\sqrt{2}}{4} \right) }
\end{align*}
$$
# Problem 14
## a)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 2 & 0 \\
0 & 1 & 1
\end{bmatrix}\\
\mathbf{A}^{\text{T}}\mathbf{A}=\begin{bmatrix}
1 & 0 \\
2 & 1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
1 & 2 & 0 \\
0 & 1 & 1
\end{bmatrix}=\begin{bmatrix}
1 & 2 & 0 \\
2 & 5 & 1 \\
0 & 1 & 1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A}^{\text{T}}\mathbf{A})=\begin{vmatrix}
\lambda-1 & -2 & 0 \\
-2 & \lambda-5 & -1 \\
0 & -1 & \lambda-1
\end{vmatrix}\\
=(\lambda-1)\begin{vmatrix}
\lambda-5 & -1 \\
-1 & \lambda-1
\end{vmatrix}+2\begin{vmatrix}
-2 & -1 \\
0 & \lambda-1
\end{vmatrix}=(\lambda-1)^{2}(\lambda-5)-\lambda+1-4\lambda+4\\
=\lambda^{3}-7\lambda^{2}+6\lambda=0\\
\implies \lambda_{1}=0,\lambda_{2}=1,\lambda_{3}=6\\
\lambda_{1}\implies\vec{v}_{1}=\begin{bmatrix}
2 \\
-1 \\
1
\end{bmatrix},\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
-1 \\
0 \\
2
\end{bmatrix},\lambda_{3}\implies\vec{v}_{3}=\begin{bmatrix}
2 \\
5 \\
1
\end{bmatrix}\\
\implies \vec{u}_{1}=\frac{1}{\sqrt{6}}\begin{bmatrix}
2 \\
-1 \\
1
\end{bmatrix}\\
\implies \vec{v}_{2}\cdot\vec{u}_{1}=0\implies \vec{u}_{2}=\frac{1}{\sqrt{5}}\begin{bmatrix}
-1 \\
0 \\
2
\end{bmatrix}\\
\vec{v}_{3}\cdot\vec{u}_{1},\vec{u}_{2}=0\implies \vec{u}_{3}=\frac{1}{\sqrt{30}}\begin{bmatrix}
2 \\
5 \\
1
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \frac{1}{\sqrt{6}}\begin{bmatrix}
2 \\
-1 \\
1
\end{bmatrix}, \frac{1}{\sqrt{5}}\begin{bmatrix}
-1 \\
0 \\
2
\end{bmatrix}, \frac{1}{\sqrt{30}}\begin{bmatrix}
2 \\
5 \\
1
\end{bmatrix} \right\} }\\
\mathbf{A}\vec{u}_{1}=\begin{bmatrix}
0 \\
0
\end{bmatrix},\mathbf{A}\vec{u}_{2}=\frac{1}{\sqrt{5}}\begin{bmatrix}
-1 \\
2
\end{bmatrix},\mathbf{A}\vec{u}_{3}=\frac{1}{\sqrt{30}}\begin{bmatrix}
12 \\
6
\end{bmatrix}\\
\implies \vec{w}_{1}=\frac{1}{\sqrt{5}}\begin{bmatrix}
-1 \\
2
\end{bmatrix},\vec{w}_{2}=\frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
1
\end{bmatrix}\\
\implies \boxed{ \mathcal{C}=\left\{ \frac{1}{\sqrt{5}}\begin{bmatrix}
-1 \\
2
\end{bmatrix}, \frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}=\mathbf{Q\Sigma P}^{\text{T}}\\
\mathbf{Q}=\begin{bmatrix}
\frac{2\sqrt{5}}{5} & -\frac{\sqrt{5}}{5} \\
\frac{\sqrt{5}}{5} & \frac{2\sqrt{5}}{5}
\end{bmatrix},\mathbf{\Sigma}=\begin{bmatrix}
\sqrt{6} & 0 & 0 \\
0 & 1 & 0
\end{bmatrix},\\
\mathbf{P}=\begin{bmatrix}
\frac{\sqrt{30}}{15} & -\frac{\sqrt{5}}{5} & \frac{\sqrt{6}}{3} \\
\frac{\sqrt{30}}{6} & 0 & -\frac{\sqrt{6}}{6} \\
\frac{\sqrt{30}}{30} & \frac{2\sqrt{5}}{5} & \frac{\sqrt{6}}{6}
\end{bmatrix}\implies \mathbf{P}^{\text{T}}=\begin{bmatrix}
\frac{\sqrt{30}}{15} & \frac{\sqrt{30}}{6} & \frac{\sqrt{30}}{30} \\
-\frac{\sqrt{5}}{5} & 0 & \frac{2\sqrt{5}}{5} \\
\frac{\sqrt{6}}{3} & -\frac{\sqrt{6}}{6} & \frac{\sqrt{6}}{6}
\end{bmatrix}\\
\implies \boxed{ \mathbf{A}=\begin{bmatrix}
\frac{2\sqrt{5}}{5} & -\frac{\sqrt{5}}{5} \\
\frac{\sqrt{5}}{5} & \frac{2\sqrt{5}}{5}
\end{bmatrix}\begin{bmatrix}
\sqrt{6} & 0 & 0 \\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
\frac{\sqrt{30}}{15} & \frac{\sqrt{30}}{6} & \frac{\sqrt{30}}{30} \\
-\frac{\sqrt{5}}{5} & 0 & \frac{2\sqrt{5}}{5} \\
\frac{\sqrt{6}}{3} & -\frac{\sqrt{6}}{6} & \frac{\sqrt{6}}{6}
\end{bmatrix} }
\end{align*}
$$
## c)
$$
\begin{align*}
\mathbf{A}^{\text{T}}=(\mathbf{Q\Sigma P}^{\text{T}})^{\text{T}}=\mathbf{P\Sigma}^{\text{T}}\mathbf{Q}^{\text{T}}\\
=\boxed{ \begin{bmatrix}
\frac{\sqrt{30}}{15} & -\frac{\sqrt{5}}{5} & \frac{\sqrt{6}}{3} \\
\frac{\sqrt{30}}{6} & 0 & -\frac{\sqrt{6}}{6} \\
\frac{\sqrt{30}}{30} & \frac{2\sqrt{5}}{5} & \frac{\sqrt{6}}{6}
\end{bmatrix}\begin{bmatrix}
\sqrt{6} & 0 \\
0 & 1 \\
0 & 0
\end{bmatrix}\begin{bmatrix}
\frac{2\sqrt{5}}{5} & \frac{\sqrt{5}}{5} \\
-\frac{\sqrt{5}}{5} & \frac{2\sqrt{5}}{5}
\end{bmatrix} }
\end{align*}
$$