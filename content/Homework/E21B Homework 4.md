---
tags:
  - math/linear-algebra
due: 2024-02-24
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW4-2024.pdf)
# Problem 1
![[E21B Homework 4 2024-02-21 16.09.09.excalidraw]]
# Problem 2
$$
\begin{align*}
\begin{bmatrix}
1 & 1 & 1 \\
1 & 2 & 5 \\
1 & 3 & 7
\end{bmatrix}\\
RREF\to\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}\\
\implies\boxed{  \text{Basis is }\mathbb{R}^{3} }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\vec{v}_{1},\vec{v}_{3},\cdots,\vec{v}_{m}\in\mathbb{R}^{n} \text{ linearly dependent}\\
\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{m} \\
\downarrow &  & \downarrow
\end{bmatrix}=\mathbf{A}\\
\implies \ker\mathbf{A}\neq\{ \vec{0} \}\\
\implies \exists \vec{x}\in\mathbb{R}^{n},\mathbf{A}\vec{x}=\vec{0}\\
T(\vec{x})=\mathbf{B}\vec{x}\\
\implies T(\mathbf{A}\vec{x})=\mathbf{B}(\mathbf{A}\vec{x})=\vec{0}\\
\implies \mathbf{A}\vec{x}\in\ker\mathbf{B}\implies \ker\mathbf{B}\neq0\\
\implies \fbox{ $T(\vec{v}_{1}),T(\vec{v}_{2}),\cdots,T(\vec{v}_{m})$ necessarily linearly dependent }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\ker\mathbf{A}=\{ \vec{0} \},\ker\mathbf{B}=\{ \vec{0} \}\\
\implies \forall \vec{v}\in\mathbb{R}^{p}\neq\vec{0},\mathbf{A}\vec{v}\neq\vec{0},\\
\forall \vec{u}\in\mathbb{R}^{m}\neq\vec{0},\mathbf{B}\vec{u}\neq\vec{0}\\
\implies \mathbf{AB}\vec{u}=\mathbf{A}(\mathbf{B}\vec{u})\\
\mathbf{B}\vec{u}\neq\vec{0}\implies\mathbf{A}(\mathbf{B}\vec{u})\neq\vec{0}\quad\forall\vec{u}\in\mathbb{R}^{m}\neq0\\
\implies \ker(\mathbf{AB})=\{ \vec{0} \}\\
\therefore \fbox{ The columns of \textbf{AB} are linearly dependent }
\end{align*}
$$
# Problem 5
$$
\begin{align*}
3x_{1}+4x_{2}+5x_{3}=0\\
\vec{x}\in\text{span}\left\{ \begin{bmatrix}
5 \\
0 \\
-3
\end{bmatrix}, \begin{bmatrix}
4 \\
-3 \\
0
\end{bmatrix}\right\}=\ker\mathbf{A}\\
\implies 5\vec{v}_{1}-3\vec{v}_{3}=\vec{0},\\
4\vec{v}_{1}-3\vec{v}_{2}=\vec{0}\\
\begin{bmatrix}
5 & 0 & -3 \\
4 & -3 & 0
\end{bmatrix}\overset{RREF}\longrightarrow\begin{bmatrix}
1 & 0 & -\frac{3}{5} \\
0 & 1 & -\frac{4}{5}
\end{bmatrix}\\
\vec{v}_{3}=\begin{bmatrix}
5 \\
5
\end{bmatrix}\implies \vec{v}_{1}=\begin{bmatrix}
3 \\
3
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
4 \\
4
\end{bmatrix}\\
\implies \boxed{ \mathbf{A}=\begin{bmatrix}
3 & 4 & 5 \\
3 & 4 & 5
\end{bmatrix} }\\
\text{span}\left\{ \begin{bmatrix}
5 \\
0 \\
-3
\end{bmatrix}, \begin{bmatrix}
4 \\
-3 \\
0
\end{bmatrix}\right\}=\text{im }\mathbf{B}\implies \boxed{ \mathbf{B}=\begin{bmatrix}
5 & 4 \\
0 & -3 \\
-3 & 0
\end{bmatrix} }
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
4 & 8 & 1 & 1 & 5 \\
3 & 5 & 1 & 2 & 5 \\
2 & 4 & 1 & 9 & 10 \\
1 & 2 & 3 & 2 & 0
\end{bmatrix}\\
\begin{array}{c}
R_{4} \\
R_{1}-4R_{4} \\
R_{2}-3R_{4} \\
R_{3}-2R_{4}
\end{array}\begin{bmatrix}
1 & 2 & 3 & 2 & 0 \\
0 & 0 & -11 & -7 & 5 \\
0 & -1 & -8 & -4 & 5 \\
0 & 0 & -5 & 5 & 10
\end{bmatrix}\\
\begin{array}{c}
R_{1}+2R_{3} \\
-R_{3} \\
-\frac{R_{4}}{5} \\
R_{2}
\end{array}\begin{bmatrix}
1 & 0 & -13 & -6 & 10 \\
0 & 1 & 2 & 4 & -5 \\
0 & 0 & 1 & -1 & -2 \\
0 & 0 & -11 & -7 & 5
\end{bmatrix}\\
\begin{array}{c}
R_{1}+13R_{3} \\
R_{2}-2R_{3} \\
R_{3} \\
R_{4}+11R_{3}
\end{array}\begin{bmatrix}
1 & 0 & 0 & -19 & -16 \\
0 & 1 & 0 & 6 & -1 \\
0 & 0 & 1 & -1 & -2 \\
0 & 0 & 0 & -18 & -17
\end{bmatrix}\\
\begin{array}{c}
R_{1}-\frac{19}{18}R_{4} \\
R_{2}+\frac{R_{4}}{3} \\
R_{3}-\frac{R_{4}}{18} \\
-\frac{R_{4}}{18}
\end{array}\begin{bmatrix}
1 & 0 & 0 & 0 & \frac{35}{18} \\
0 & 1 & 0 & 0 & -\frac{1}{3} \\
0 & 0 & 1 & 0 & -\frac{19}{18} \\
0 & 0 & 0 & 1 & \frac{17}{18}
\end{bmatrix}\\
\implies \boxed{ \ker\mathbf{A}=\text{span}\left\{ \begin{bmatrix}
35 \\
-6 \\
-19 \\
17 \\
-18
\end{bmatrix} \right\}  }\\
\boxed{ \text{im }\mathbf{A}=\text{span}\left\{ \begin{bmatrix}
4 \\
3 \\
2 \\
1
\end{bmatrix},\begin{bmatrix}
8 \\
5 \\
4 \\
2
\end{bmatrix},\begin{bmatrix}
1 \\
1 \\
1 \\
3
\end{bmatrix},\begin{bmatrix}
1 \\
2 \\
9 \\
2
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
2x_{1}-x_{2}+2x_{3}+4x_{4}=0\\
\text{Subspace defined by 3 vectors (affine)}\\
\{ (x_{3},x_{4})=0, (x_{2},x_{4})=0,(x_{2},x_{3})=0 \}\\
\boxed{ \left\{ \begin{bmatrix}
1 \\
2 \\
0 \\
0
\end{bmatrix},\begin{bmatrix}
1 \\
0 \\
-1 \\
0
\end{bmatrix},\begin{bmatrix}
2 \\
0 \\
0 \\
-1
\end{bmatrix} \right\} }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
v_{1}-v_{3}+v_{4}=0\\
v_{2}+2v_{3}+3v_{4}=0\\
(\text{2 degrees of freedom})\\
v_{4}=0,v_{3}=1\implies v_{1}=1,v_{2}=-2\\
v_{3}=0,v_{4}=1\implies v_{1}=-1,v_{2}=-3\\
\boxed{ \left\{ \begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
-1 \\
-3 \\
0 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\text{rank}(\mathbf{A})+\text{nullity}(\mathbf{A})=\dim(\text{im}(\mathbf{A}))+\dim(\ker(\mathbf{A}))=\dim(\text{domain}(\mathbf{A}))=3\\
\implies \text{rank}\neq\text{nullity}\implies \dim(\text{im}\mathbf{A})\neq\dim(\ker\mathbf{A})\\
\implies \boxed{ \text{im }\mathbf{A}\neq\ker\mathbf{A} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\vec{v}_{1}\neq c\vec{v}_{2}\implies V=\text{span}\{ \vec{v}_{1},\vec{v}_{2} \}=\mathbb{R}^{2}\\
\vec{x}\in\mathbb{R}^{2}\implies\vec{x}\in V\\
c_{1}\vec{v}_{1}+c_{2}\vec{v}_{2}=\vec{x}\\
\left[\begin{array}{cc|c}
1 & 5 & -4 \\
2 & 6 & 4
\end{array}\right]\overset{R_{1}}{\underset{-\frac{1}{4}(R_{2}-2R_{1})}{\longrightarrow}}\left[\begin{array}{cc|c}
1 & 5 & -4 \\
0 & 1 & -3
\end{array}\right]\\
\implies c_{1}=11,c_{2}=-3\\
\implies \boxed{ [x]_{\mathcal{B}}=\begin{bmatrix}
11 \\
-3
\end{bmatrix} }
\end{align*}
$$
# Problem 11
$\vec{x}\notin V=\text{span}\{ \vec{v}_{1},\vec{v}_{2} \}$ because for some linear combination of $\vec{v}_{1},\vec{v}_{2}$ to yield $\vec{x}$, you would need $4\vec{v}_{2}$ for the z coordinate and $3\vec{v}_{1}$ for the y coordinate, which makes the x coordinate $11\neq2$
# Problem 12
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 1 \\
2 & 3
\end{bmatrix}\\
\mathcal{B}=\left\{ \begin{bmatrix}
1 \\
2
\end{bmatrix},\begin{bmatrix}
1 \\
1
\end{bmatrix} \right\}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 1 \\
2 & 1
\end{bmatrix}\implies \mathbf{S}^{-1}=\begin{bmatrix}
-1 & 1 \\
2 & -1
\end{bmatrix}\\
\mathbf{B}=[\mathbf{A}]_{\mathcal{B}}=\mathbf{S}^{-1}\mathbf{AS}=\begin{bmatrix}
-1 & 1 \\
2 & -1
\end{bmatrix}\begin{bmatrix}
0 & 1 \\
2 & 3
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
2 & 1
\end{bmatrix}\\
=\begin{bmatrix}
-1 & 1 \\
2 & -1
\end{bmatrix}\begin{bmatrix}
2 & 1 \\
8 & 5
\end{bmatrix}\\
\implies\boxed{ \mathbf{B}=\begin{bmatrix}
6 & 4 \\
-4 & -3
\end{bmatrix} }
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
5 & -4 & -2 \\
-4 & 5 & -2 \\
-2 & -2 & 8
\end{bmatrix},\mathbf{S}=\begin{bmatrix}
2 & 1 & 0 \\
2 & -1 & 1 \\
1 & 0 & -2
\end{bmatrix}\\
\underset{ (\text{calculated}) }{ \implies }\mathbf{S}^{-1}=\frac{1}{9}\begin{bmatrix}
2 & 2 & 1 \\
5 & -4 & -2 \\
1 & 1 & -4
\end{bmatrix}\\
\mathbf{B}=[\mathbf{A}]_{\mathcal{B}}=\mathbf{S}^{-1}\mathbf{AS}\\
=\frac{1}{9}\begin{bmatrix}
2 & 2 & 1 \\
5 & -4 & -2 \\
1 & 1 & -4
\end{bmatrix}\begin{bmatrix}
5 & -4 & -2 \\
-4 & 5 & -2 \\
-2 & -2 & 8
\end{bmatrix}\begin{bmatrix}
2 & 1 & 0 \\
2 & -1 & 1 \\
1 & 0 & -2
\end{bmatrix}\\
=\frac{1}{9}\begin{bmatrix}
2 & 2 & 1 \\
5 & -4 & -2 \\
1 & 1 & -4
\end{bmatrix}\begin{bmatrix}
0 & 9 & 0 \\
0 & -9 & 9 \\
0 & 0 & -18
\end{bmatrix}\\
=\begin{bmatrix}
2 & 2 & 1 \\
5 & -4 & -2 \\
1 & 1 & -4
\end{bmatrix}\begin{bmatrix}
0 & 1 & 0 \\
0 & -1 & 1 \\
0 & 0 & -2
\end{bmatrix}\\
\implies\boxed{ \mathbf{B}=\begin{bmatrix}
0 & 0 & 0 \\
0 & 9 & 0 \\
0 & 0 & 9
\end{bmatrix} }
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\mathbf{B}=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{bmatrix}\\
c_{1},c_{2}\text{ define coordinates in plane}\\
c_{3} \text{ is distance along normal vector}\\
\text{Two vectors in plane:}\begin{bmatrix}
0 \\
1 \\
1
\end{bmatrix},\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix}\\
\text{Normal vector: }\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
0 \\
1 \\
1
\end{bmatrix},\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\mathcal{B}=\left\{ \begin{bmatrix}
8 \\
4 \\
-1
\end{bmatrix},\begin{bmatrix}
5 \\
2 \\
-1
\end{bmatrix} \right\}, [\vec{x}]_{\mathcal{B}}=\begin{bmatrix}
2 \\
-1
\end{bmatrix}\\
\implies \vec{x}=2\begin{bmatrix}
8 \\
4 \\
-1
\end{bmatrix}-\begin{bmatrix}
5 \\
2 \\
-1
\end{bmatrix}\\
\implies \boxed{ \vec{x}=\begin{bmatrix}
11 \\
6 \\
-1
\end{bmatrix} }
\end{align*}
$$
# Problem 16
$$
\begin{align*}
v_{1}+2v_{2}+v_{3}=0,\\
u_{1}+2u_{2}+u_{3}=0\\
2v_{1}-u_{1}=1\\
2v_{2}-u_{2}=-1\\
2v_{3}-u_{3}=1\\
\left[\begin{array}{cccccc|c}
1 & 2 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 2 & 1 & 0 \\
2 & 0 & 0 & -1 & 0 & 0 & 1 \\
0 & 2 & 0 & 0 & -1 & 0 & -1 \\
0 & 0 & 2 & 0 & 0 & -1 & 1
\end{array}\right]\\
RREF\to\left[\begin{array}{cccccc|c}
1 & 0 & 0 & 0 & 1 & \frac{1}{2} & \frac{1}{2} \\
0 & 1 & 0 & 0 & -\frac{1}{2} & 0 & -\frac{1}{2} \\
0 & 0 & 1 & 0 & 0 & -\frac{1}{2} & \frac{1}{2} \\
0 & 0 & 0 & 1 & 2 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{array}\right]\\
u_{2}=1,u_{3}=-3\\
\implies \vec{u}=\begin{bmatrix}
1 \\
1 \\
-3
\end{bmatrix}\implies \vec{v}=\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix},\begin{bmatrix}
1 \\
1 \\
-3
\end{bmatrix} \right\} }
\end{align*}
$$
# Problem 17
## a)
$$
\begin{align*}
[\overrightarrow{OP}]_{\mathcal{B}}=\begin{bmatrix}
2 \\
1
\end{bmatrix}\\
[\overrightarrow{OQ}]_{\mathcal{B}}=\begin{bmatrix}
1 \\
2
\end{bmatrix}
\end{align*}
$$
## b)
![[E21B Homework 4 2024-02-24 18.28.31.excalidraw|300]]
Center of a tile
## c)
Vertex because a point is a center only if the coordinates added together mod 3 is 2, and 17+13 mod 3 is 0, so S must be a vertex
# Problem 18
$$
\begin{align*}
3u_{1}+5v_{1}=1\\
3u_{2}+5v_{2}=2\\
2u_{1}+3v_{1}=3\\
2u_{2}+3v_{2}=4\\
\left[\begin{array}{cccc|c}
3 & 0 & 5 & 0 & 1 \\
0 & 3 & 0 & 5 & 2 \\
2 & 0 & 3 & 0 & 3 \\
0 & 2 & 0 & 3 & 4
\end{array}\right]\\
RREF\to\left[\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 12 \\
0 & 1 & 0 & 0 & 14 \\
0 & 0 & 1 & 0 & -7 \\
0 & 0 & 0 & 1 & -8
\end{array}\right]\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
12 \\
14
\end{bmatrix},\begin{bmatrix}
-7 \\
-8
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 19
## a)
$$
\begin{align*}
c_{1}\mathbf{A}^{2}\vec{v}+c_{2}\mathbf{A}\vec{v}+c_{3}\vec{v}=\vec{0}\\
\implies c_{1}\mathbf{A}^{4}\vec{v}+c_{2}\mathbf{A}^{3}\vec{v}+c_{3}\mathbf{A}^{2}\vec{v}=\vec{0}\\
=c_{3}\mathbf{A}^{2}\vec{v}\\
\implies c_{3}=0\\
c_{1}\mathbf{A}^{3}\vec{v}+c_{2}\mathbf{A}^{2}\vec{v}=\vec{0}\implies c_{2}=0\\
\implies c_{1}=0\\
\implies\text{linearly independent}\\
\implies \boxed{ \text{span}\{ \mathbf{A}^{2}\vec{v},\mathbf{A}\vec{v},\vec{v} \}=\mathbb{R}^{3} }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathcal{B}=\{ \mathbf{A}^{2}\vec{v},\mathbf{A}\vec{v},\vec{v} \}\\
[\mathbf{A}(\mathbf{A}^{2}\vec{v})]_{\mathcal{B}}=[\mathbf{A}^{3}\vec{v}]_{\mathcal{B}}=\vec{0}\\
[\mathbf{A}(\mathbf{A}\vec{v})]_{\mathcal{B}}=[\mathbf{A}^{2}\vec{v}]_{\mathcal{B}}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
[\mathbf{A}(\vec{v})]_{\mathcal{B}}=[\mathbf{A}\vec{v}]_{\mathcal{B}}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\\
\implies \boxed{ [\mathbf{A}]_{\mathcal{B}} = \begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{bmatrix} }
\end{align*}
$$