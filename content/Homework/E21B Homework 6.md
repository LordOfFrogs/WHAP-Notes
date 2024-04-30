---
tags:
  - math/linear-algebra
due: 2024-03-09
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW6-2024.pdf)
# Problem 1
$$
\begin{align*}
\|\vec{v}+\vec{w}\|^{2}=(\vec{v}+\vec{w})\cdot(\vec{v}+\vec{w})\\
=\vec{v}\cdot\vec{v}+2\vec{w}\cdot\vec{v}+\vec{w}\cdot\vec{w}\\
=\|\vec{v}\|^{2}+2(\vec{v}\cdot\vec{w})+\|\vec{w}\|^{2}\\
|\vec{v}\cdot\vec{w}|\leq\|\vec{v}\|\|\vec{w}\|\\
\implies \|\vec{v}\|^{2}+2(\vec{v}\cdot\vec{w})+\|\vec{w}\|^{2}\leq\|\vec{v}\|^{2}+2\|\vec{v}\|\|\vec{w}\|+\|\vec{w}\|^{2}\\
=(\|\vec{v}\|+\|\vec{w}\|)^{2}\\
\implies \|\vec{v}+\vec{w}\|^{2}\leq(\|\vec{v}\|+\|\vec{w}\|)^{2}\implies \boxed{ \|\vec{v}+\vec{w}\|\leq\|\vec{v}\|+\|\vec{w}\| }
\end{align*}
$$
![[E21B Homework 6 2024-03-06 08.54.19.excalidraw|250]]
# Problem 2
$$
\begin{align*}
\vec{v}=\begin{bmatrix}
1 \\
2 \\
3 \\
4
\end{bmatrix}\\
\vec{u}\perp\vec{v}\implies \vec{u}\cdot\vec{v}=0\\
\implies u_{1}+2u_{2}+3u_{3}+4u_{4}=0\\
\vec{u}_{1}=\begin{bmatrix}
1 \\
1 \\
-1 \\
0
\end{bmatrix},\vec{u}_{2}=\begin{bmatrix}
2 \\
1 \\
0 \\
-1
\end{bmatrix},\vec{u}_{3}=\begin{bmatrix}
1 \\
0 \\
1 \\
-1
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
1 \\
-1 \\
0
\end{bmatrix},\begin{bmatrix}
2 \\
1 \\
0 \\
-1
\end{bmatrix},\begin{bmatrix}
1 \\
0 \\
1 \\
-1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\vec{u}_{4}\cdot(\vec{u}_{1},\vec{u}_{2},\vec{u}_{3})=0\\
\implies \begin{bmatrix}
\leftarrow & \vec{u}_{1} & \rightarrow \\
\leftarrow & \vec{u}_{2} & \rightarrow \\
\leftarrow & \vec{u}_{3} & \rightarrow
\end{bmatrix}\vec{u}=\vec{0}\\
\implies \left[\begin{array}{cccc|c}
1 & 1 & 1 & 1 & 0 \\
1 & 1 & -1 & -1 & 0 \\
1 & -1 & 1 & -1 & 0
\end{array}\right]\\
RREF\longrightarrow\left[\begin{array}{cccc|c}
1 & 0 & 0 & -1 & 0 \\
0 & 1 & 0 & 1 & 0 \\
0 & 0 & 1 & 1 & 0
\end{array}\right]\\
\boxed{ \vec{u}_{4}=\begin{bmatrix}
\frac{1}{2} \\
-\frac{1}{2} \\
-\frac{1}{2} \\
\frac{1}{2}
\end{bmatrix} }\\
\fbox{ 2 vectors, because $-\vec{u}_{4}$ also works, but any other would not be a unit vector }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 5 \\
2 & 6 \\
3 & 7 \\
4 & 8
\end{bmatrix}\implies \mathbf{A}^{\text{T}}=\begin{bmatrix}
1 & 2 & 3 & 4 \\
5 & 6 & 7 & 8
\end{bmatrix}\\
W^{\perp}=\ker(\mathbf{A}^{\text{T}})=\vec{v}\in\mathbb{R}^{4}:\mathbf{A}^{\text{T}}\vec{v}=\vec{0}\\
\implies v_{1}+2v_{2}+3v_{3}+4v_{4}=0,\\
5v_{1}+6v_{2}+7v_{3}+8v_{4}=0\\
v_{4}=0,v_{3}=1\implies\vec{v}_{1}=\begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix},\\
v_{3}=0,v_{1}=2\implies\vec{v}_{2}=\begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 5
## a)
$$
\begin{align*}
\vec{x}=\left( 1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16},\cdots \right)\\
\sum x_{i}^{2}=1+\frac{1}{4}+\frac{1}{16}+\frac{1}{64}+\cdots\\
=1+\frac{1}{4}+\left( \frac{1}{4} \right)^{2}+\left( \frac{1}{4} \right)^{3}+\cdots\\
=\frac{1}{1-\frac{1}{4}}=\frac{4}{3}\implies \boxed{ \vec{x}\in l_{2} }\\
\|\vec{x}\|=\sqrt{\frac{4}{3}}=\boxed{ \frac{2}{3}\sqrt{3} }
\end{align*}
$$
## b)
$$
\begin{align*}
(1,0,0,\cdots)\cdot\left( 1, \frac{1}{2}, \frac{1}{4},\cdots \right)=\|(1,0,0,\cdots)\|\left\|\left( 1, \frac{1}{2}, \frac{1}{4},\cdots \right)\right\|\cos \theta\\
=1\\
\implies \theta=\cos^{-1}\left( \frac{1}{1\cdot \frac{2}{3}\sqrt{3}} \right)=\cos^{-1}\left( \frac{\sqrt{3}}{2} \right)=\boxed{ 30\degree\text{ or } \frac{\pi}{6} }
\end{align*}
$$
## c)
$$
\begin{align*}
\boxed{ (x_{1},x_{2},\cdots)=\left( 1, \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{3}}, \cdots \right) }\\
\lim_{ n \to \infty }x_{n}=\lim_{ n \to \infty } \frac{1}{\sqrt{n}}=0\\
\sum x_{n}^{2}=\sum \frac{1}{n}\text{ does not converge}\\
\implies \boxed{ \vec{x}\notin l_{2} }
\end{align*}
$$
## d)
$$
\begin{align*}
\text{Proj}_{L}(1,0,0,\cdots)=\left( \frac{(1,0,\cdots )\cdot\vec{x}}{\|\vec{x}\|^{2}} \right)\vec{x}\\
=\frac{1}{\frac{4}{3}}\vec{x}=\frac{3}{4}\left( 1, \frac{1}{2}, \frac{1}{4}, \cdots \right)\\
=\boxed{ \left( \frac{3}{4}, \frac{3}{8}, \frac{3}{16}, \frac{3}{32},\cdots \right) }
\end{align*}
$$
# Problem 6
$$
\begin{align*}\\
\mathcal{B}=\left\{ \frac{1}{7}\begin{bmatrix}
2 \\
3 \\
6
\end{bmatrix}, \frac{1}{7}\begin{bmatrix}
3 \\
-6 \\
2
\end{bmatrix} \right\}\\
\mathbf{B}=\frac{1}{7}\begin{bmatrix}
2 & 3 \\
3 & -6 \\
6 & 2
\end{bmatrix},\mathbf{B}^{\text{T}}=\frac{1}{7}\begin{bmatrix}
2 & 3 & 6 \\
3 & -6 & 2
\end{bmatrix}\\
\text{Proj}_{V}\begin{bmatrix}
49 \\
49 \\
49
\end{bmatrix}=\mathbf{BB}^{\text{T}}\begin{bmatrix}
49 \\
49 \\
49
\end{bmatrix}\\
=\frac{1}{49}\begin{bmatrix}
2 & 3 \\
3 & -6 \\
6 & 2
\end{bmatrix}\begin{bmatrix}
2 & 3 & 6 \\
3 & -6 & 2
\end{bmatrix}\begin{bmatrix}
49 \\
49 \\
49
\end{bmatrix}\\
=\begin{bmatrix}
2 & 3 \\
3 & -6 \\
6 & 2
\end{bmatrix}\begin{bmatrix}
11 \\
-1
\end{bmatrix}=\boxed{ \begin{bmatrix}
19 \\
39 \\
64
\end{bmatrix} }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\mathbf{B}=\frac{1}{4}\begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & -1 \\
1 & -1 & -1 \\
1 & -1 & 1
\end{bmatrix},\mathbf{B}^{\text{T}}=\frac{1}{4}\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & -1 & 1
\end{bmatrix}\\
\text{Proj}_{V}\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}=\mathbf{BB}^{\text{T}}\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}\\
=\frac{1}{16}\begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & -1 \\
1 & -1 & -1 \\
1 & -1 & 1
\end{bmatrix}\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & -1 & 1
\end{bmatrix}\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}\\
=\frac{1}{16}\begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & -1 \\
1 & -1 & -1 \\
1 & -1 & 1
\end{bmatrix}\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}\\
=\boxed{ \frac{1}{16}\begin{bmatrix}
3 \\
1 \\
-1 \\
1
\end{bmatrix}=\begin{bmatrix}
\frac{3}{16} \\
\frac{1}{16} \\
-\frac{1}{16} \\
\frac{1}{16}
\end{bmatrix} }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 1 \\
1 & 2 \\
1 & 3
\end{bmatrix},\mathbf{A}^{\text{T}}=\begin{bmatrix}
1 & 1 & 1 \\
1 & 2 & 3
\end{bmatrix}\\
\text{ker}(\mathbf{A}^{\text{T}})=\vec{v}\in\mathbb{R}^{3}:\mathbf{A}^{\text{T}}\vec{v}=\vec{0}\\
RREF\to\begin{bmatrix}
1 & 0 & -1 \\
0 & 1 & 2
\end{bmatrix},t=v_{3}\implies \vec{v}=\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}t\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix} \right\} }
\end{align*}
$$
![[E21B Homework 6 2024-03-07 10.38.46.excalidraw|300]]
# Problem 9
$$
\begin{align*}
V^{\perp}=W\implies W^{\perp}=V\\
(\mathbf{A}^{\text{T}})^{\text{T}}=\mathbf{A}\\
(\ker \mathbf{A})^{\perp}=\text{im}(\mathbf{A}^{\text{T}})\\
\implies \ker \mathbf{A}=(\text{im}(\mathbf{A}^{\text{T}}))^{\perp}\\
\implies \ker((\mathbf{A}^{\text{T}})^{\text{T}})=(\text{im}(\mathbf{A}^{\text{T}}))^{\perp}\\
\boxed{ \checkmark\text{ Yes, it is necessarily true} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
V=\left\{ \vec{v}\in\mathbb{R}^{4}:\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 5 & 4
\end{bmatrix}\vec{v}=\vec{0} \right\} \\
\implies V=\ker\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 5 & 4
\end{bmatrix}=\ker \mathbf{A}\\
\implies V^{\perp}=(\ker \mathbf{A})^{\perp}=\text{im}(\mathbf{A}^{\text{T}})\\
\mathbf{A}^{\text{T}}=\begin{bmatrix}
1 & 1 \\
1 & 2 \\
1 & 5 \\
1 & 4
\end{bmatrix},\text{im}(\mathbf{A}^{\text{T}})=\text{span}\boxed{ \left\{ \begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix},\begin{bmatrix}
1 \\
2 \\
5 \\
4
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 11
$$
\begin{align*}\\
\mathbf{A}\in\mathbb{R}^{n\times m}\implies \mathbf{A}^{\text{T}}\in\mathbb{R}^{m\times n} \\
\text{rank}(\mathbf{A})=\dim(\text{im}\,\mathbf{A})=n-\dim((\text{im}\,\mathbf{A})^{\perp})\\
=n-\dim(\ker\mathbf{A}^{\text{T}})=n-\text{nullity}\,\mathbf{A}^{\text{T}}\\
\text{rank}(\mathbf{A}^{\text{T}})+\text{nullity}(\mathbf{A}^{\text{T}})=n\\
\implies\boxed{  \text{rank}(\mathbf{A})=\text{rank}(\mathbf{A}^{\text{T}}) }
\end{align*}
$$
# Problem 12
$$
\mathbf{A}=\begin{bmatrix}
1 & 2 & 3 \\
-1 & 1 & 0 \\
1 & 3 & 4
\end{bmatrix}
$$
## a)
$$
\begin{align*}
\text{im}(\mathbf{A})=\text{span}\left\{ \begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix},\begin{bmatrix}
2 \\
1 \\
3
\end{bmatrix},\begin{bmatrix}
3 \\
0 \\
4
\end{bmatrix} \right\} \\
\begin{bmatrix}
3 \\
0 \\
4
\end{bmatrix}=\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix}+\begin{bmatrix}
2 \\
1 \\
3
\end{bmatrix}\\
\implies \boxed{ \left\{ \begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix},\begin{bmatrix}
2 \\
1 \\
3
\end{bmatrix} \right\}  }
\end{align*}
$$
## b)
$$
\begin{align*}
\text{ker}(\mathbf{A})=\{ \vec{v}\in\mathbb{R}^{3}:\mathbf{A}\vec{v}=\vec{0} \}\\
RREF\to\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
0 & 0 & 0
\end{bmatrix}\\
v_{3}=t\implies \vec{v}=\begin{bmatrix}
-1 \\
-1 \\
1
\end{bmatrix}t\\
\implies \boxed{ \ker\mathbf{A}=\text{span}\left\{ \begin{bmatrix}
-1 \\
-1 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
## c)
$$
\begin{align*}
\text{im}\,\mathbf{A}^{\text{T}}=(\ker\mathbf{A})^{\perp}\\
=\vec{v}\in\mathbb{R}^{3}:\vec{v}\cdot\begin{bmatrix}
-1 \\
-1 \\
1
\end{bmatrix}=0\\
v_{1}+v_{2}=v_{3}\\
v_{3}=t,v_{2}=s\implies\vec{v}=\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}t+\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}s\\
\implies \boxed{ \text{im}\,\mathbf{A}^{\text{T}}=\text{span}\left\{ \begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix},\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix} \right\}  }
\end{align*}
$$
## d)
$$
\begin{align*}
\ker\mathbf{A}^{\text{T}}=(\text{im}\,\mathbf{A})^{\perp}\\
=\vec{v}\in\mathbb{R}^{3}:\vec{v}\cdot\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix}=0,\vec{v}\cdot\begin{bmatrix}
2 \\
1 \\
3
\end{bmatrix}=0\\
\begin{bmatrix}
1 & -1 & 1 \\
2 & 1 & 3
\end{bmatrix}\overset{RREF}{\longrightarrow}\begin{bmatrix}
1 & 0 & \frac{4}{3} \\
0 & 1 & \frac{1}{3}
\end{bmatrix}\\
v_{3}=3t\implies \vec{v}=\begin{bmatrix}
-4 \\
-1 \\
3
\end{bmatrix}t\\
\implies \boxed{ \ker\mathbf{A}^{\text{T}}=\text{span}\left\{ \begin{bmatrix}
4 \\
1 \\
-3
\end{bmatrix} \right\}  }
\end{align*}
$$