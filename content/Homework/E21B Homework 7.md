---
tags:
  - math/linear-algebra
due: 2024-03-23
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW7-2024.pdf)
# Problem 1
$$
\begin{align*}
\left\{ \begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix},\begin{bmatrix}
3 \\
6 \\
7 \\
-2
\end{bmatrix} \right\}\\
\|\vec{v}_{1}\|=\sqrt{5^{2}+4^{2}+2^{2}+2^{2}}=7=r_{11}\\
\vec{u}_{1}=\frac{1}{7}\begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix}\implies V_{1}=\text{span}\left\{ \begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix} \right\} \\
\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}=\begin{bmatrix}
3 \\
6 \\
7 \\
-2
\end{bmatrix}-\frac{1}{49}\left(\begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix}\cdot\begin{bmatrix}
3 \\
6 \\
7 \\
-2
\end{bmatrix}\right)\begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix}=\begin{bmatrix}
3 \\
6 \\
7 \\
-2
\end{bmatrix}-\begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix}=\begin{bmatrix}
-2 \\
2 \\
5 \\
-4
\end{bmatrix}\\
r_{22}=\|\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}\|=\sqrt{4+4+25+16}=7\\
\implies \vec{u}_{2}=\frac{1}{7}\begin{bmatrix}
-2 \\
2 \\
5 \\
-4
\end{bmatrix}\implies \boxed{ V_{2}=\text{span}\left\{ \begin{bmatrix}
5 \\
4 \\
2 \\
2
\end{bmatrix},\begin{bmatrix}
-2 \\
2 \\
5 \\
-4
\end{bmatrix} \right\} }\\
\boxed{ \mathbf{A} = \begin{bmatrix}
5 & 3 \\
4 & 6 \\
2 & 7 \\
2 & -2
\end{bmatrix}=\left( \frac{1}{7}\begin{bmatrix}
5 & -2 \\
4 & 2 \\
2 & 5 \\
2 & -4
\end{bmatrix} \right)\begin{bmatrix}
7 & 7 \\
0 & 7
\end{bmatrix}=\mathbf{QR} }
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\left\{ \begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix},\begin{bmatrix}
0 \\
7 \\
2 \\
7
\end{bmatrix},\begin{bmatrix}
1 \\
8 \\
1 \\
6
\end{bmatrix} \right\}\\
r_{11}=\|\vec{v}_{1}\|=10\implies \vec{u}_{1}=\frac{1}{10}\begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix}\implies V_{1}=\text{span}\begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix}\\
\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}=\begin{bmatrix}
0 \\
7 \\
2 \\
7
\end{bmatrix}-\frac{1}{100}\left( \begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix}\cdot\begin{bmatrix}
0 \\
7 \\
2 \\
7
\end{bmatrix} \right) \begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix}=\begin{bmatrix}
-1 \\
0 \\
1 \\
0
\end{bmatrix}\\
\implies r_{22}=\sqrt{2},\vec{u}_{2}=\frac{1}{\sqrt{2}}\begin{bmatrix}
-1 \\
0 \\
1 \\
0
\end{bmatrix},V_{2}=\text{span}\left\{ \begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix},\begin{bmatrix}
-1 \\
0 \\
1 \\
0
\end{bmatrix} \right\} \\
\vec{v}_{3}-\text{proj}_{V_{2}}\vec{v}_{3}=\begin{bmatrix}
1 \\
8 \\
1 \\
6
\end{bmatrix}-\frac{1}{100}\left( \begin{bmatrix}
1 \\
8 \\
1 \\
6
\end{bmatrix}\cdot\begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix} \right)\begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix}-\frac{1}{2}\left( \begin{bmatrix}
1 \\
8 \\
1 \\
6
\end{bmatrix}\cdot\begin{bmatrix}
-1 \\
0 \\
1 \\
0
\end{bmatrix} \right) \begin{bmatrix}
-1 \\
0 \\
1 \\
0
\end{bmatrix}\\
=\begin{bmatrix}
1 \\
8 \\
1 \\
6
\end{bmatrix}-\begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix}=\begin{bmatrix}
0 \\
1 \\
0 \\
-1
\end{bmatrix}\implies r_{33}=\sqrt{2},\vec{u}_{3}=\frac{1}{\sqrt{2}}\begin{bmatrix}
0 \\
1 \\
0 \\
-1
\end{bmatrix}\implies \boxed{ V_{3}=\text{span}\left\{ \begin{bmatrix}
1 \\
7 \\
1 \\
7
\end{bmatrix},\begin{bmatrix}
-1 \\
0 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
0 \\
1 \\
0 \\
-1
\end{bmatrix} \right\}  }\\
\implies \boxed{ \begin{bmatrix}
1 & 0 & 1 \\
7 & 7 & 8 \\
1 & 2 & 1 \\
7 & 7 & 6
\end{bmatrix}=\begin{bmatrix}
\frac{1}{10} & -\frac{1}{\sqrt{2}} & 0 \\
\frac{7}{10} & 0 & \frac{1}{\sqrt{2}} \\
\frac{1}{10} & \frac{1}{\sqrt{2}} & 0 \\
\frac{7}{10} & 0 & -\frac{1}{\sqrt{2}}
\end{bmatrix}\begin{bmatrix}
10 & 10 & 10 \\
0 & \sqrt{2} & 0 \\
0 & 0 & \sqrt{2}
\end{bmatrix}=\mathbf{QR} }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 3 & 4
\end{bmatrix}\\
RREF\to\begin{bmatrix}
1 & 0 & -1 & -2 \\
0 & 1 & 2 & 3
\end{bmatrix}\\
t=v_{3},s=v_{4}\implies\vec{v}\in\ker\mathbf{A}=\begin{bmatrix}
t+2s \\
-2t-3s \\
t \\
s
\end{bmatrix}=\begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix}t+\begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix}s\\
\implies \ker\mathbf{A}=\text{span}\left\{ \begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix} \right\} \\
\vec{u}_{1}=\frac{1}{\sqrt{6}}\begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix}\implies V_{1}=\text{span}\left\{ \begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix} \right\} \\
\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}=\begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix}-\frac{1}{6}\left( \begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix}\cdot\begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix} \right) \begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix}=\begin{bmatrix}
2 \\
-3 \\
0 \\
1
\end{bmatrix}-\frac{4}{3}\begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix}\\
=\begin{bmatrix}
\frac{2}{3} \\
-\frac{1}{3} \\
-\frac{4}{3} \\
1
\end{bmatrix}=\frac{1}{3}\begin{bmatrix}
2 \\
-1 \\
-4 \\
3
\end{bmatrix}\implies \vec{u}_{2}=\frac{1}{\sqrt{30}}\begin{bmatrix}
2 \\
-1 \\
-4 \\
3
\end{bmatrix}\implies\boxed{ \ker\mathbf{A}=\text{span}\left\{ \frac{1}{\sqrt{6}}\begin{bmatrix}
1 \\
-2 \\
1 \\
0
\end{bmatrix}, \frac{1}{\sqrt{30}}\begin{bmatrix}
2 \\
-1 \\
-4 \\
3
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 4
## a)
No, for example:
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 \\
0
\end{bmatrix}\implies\mathbf{A}^{\text{T}}=\begin{bmatrix}
1 & 0
\end{bmatrix}\\
\mathbf{A}^{\text{T}}\mathbf{A}=\begin{bmatrix}
1 & 0
\end{bmatrix}\begin{bmatrix}
1 \\
0
\end{bmatrix}=[1]=\mathbf{I}_{1}\\
\mathbf{AA}^{\text{T}}=\begin{bmatrix}
1 \\
0
\end{bmatrix}\begin{bmatrix}
1 & 0
\end{bmatrix}=\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}\neq \mathbf{I}_{2}
\end{align*}
$$
## b)
Yes, because if $\mathbf{A}^{\text{T}}\mathbf{A}=\mathbf{I}_{n}$, then $\mathbf{A}^{-1}=\mathbf{A}^{\text{T}}$, and $\mathbf{AA}^{-1}=\mathbf{A}^{-1}\mathbf{A}=\mathbf{I}_{n}$, so $\mathbf{AA}^{\text{T}}=\mathbf{A}^{\text{T}}\mathbf{A}=\mathbf{I}_{n}$
# Problem 5
$$
\begin{align*}
W=\text{span}\left\{ \begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix},\begin{bmatrix}
1 \\
9 \\
-5 \\
3
\end{bmatrix} \right\} \\
r_{11}=2,V_{1}=\text{span}\left\{ \begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix} \right\} \\
\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}=\begin{bmatrix}
1 \\
9 \\
-5 \\
3
\end{bmatrix}-\frac{1}{4}\left( \begin{bmatrix}
1 \\
9 \\
-5 \\
3
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
\end{bmatrix}=\begin{bmatrix}
-1 \\
7 \\
-7 \\
1
\end{bmatrix}\\
\implies r_{22}=10,V_{2}=\text{span}\left\{ \begin{bmatrix}
1 \\
1 \\
1 \\
1
\end{bmatrix},\begin{bmatrix}
-1 \\
7 \\
-7 \\
1
\end{bmatrix} \right\} \\
\implies \mathbf{B}=\begin{bmatrix}
5 & -1 \\
5 & 7 \\
5 & -7 \\
5 & 1
\end{bmatrix}\implies \mathbf{B}^{\text{T}}=\begin{bmatrix}
5 & 5 & 5 & 5 \\
-1 & 7 & -7 & 1
\end{bmatrix}\\
\text{proj}_{W}\vec{x}=\mathbf{A}\vec{x}\implies \mathbf{A}=\mathbf{BB}^{\text{T}}\\
=\begin{bmatrix}
5 & -1 \\
5 & 7 \\
5 & -7 \\
5 & 1
\end{bmatrix}\begin{bmatrix}
5 & 5 & 5 & 5 \\
-1 & 7 & -7 & 1
\end{bmatrix}=\boxed{ \begin{bmatrix}
26 & 18 & 32 & 24 \\
18 & 74 & -24 & 32 \\
32 & -24 & 74 & 18 \\
24 & 32 & 18 & 26
\end{bmatrix} }
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\dim(\text{im}\,\mathbf{A})+\dim(\ker\mathbf{A}^{\text{T}})=\dim(\text{im}\,\mathbf{A})+\dim((\text{im}\,\mathbf{A})^{\perp})=\dim(\text{codomain}\,\mathbf{A})=\boxed{ n }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\mathbf{A}=\mathbf{Q}\mathbf{R}\implies \mathbf{A}^{\text{T}}\mathbf{A}=(\mathbf{QR})^{\text{T}}\mathbf{QR}=\mathbf{R}^{\text{T}}\mathbf{Q}^{\text{T}}\mathbf{QR}\\
\mathbf{Q}\text{ orthonormal}\implies \mathbf{Q}^{\text{T}}\mathbf{Q}=\mathbf{I}\\
\implies \boxed{ \mathbf{A}^{\text{T}}\mathbf{A}=\mathbf{R}^{\text{T}}\mathbf{R} }
\end{align*}
$$
# Problem 8
Yes, because for $\mathbf{A}=\mathbf{QR}$, $\mathbf{R}$ is upper-triangular, and $\mathbf{A}^{\text{T}}=(\mathbf{QR})^{\text{T}}=\mathbf{R}^{\text{T}}\mathbf{Q}^{\text{T}}$, where $\mathbf{R}^{\text{T}}$ would be lower-triangular and $\mathbf{Q}^{\text{T}}$ would still be [[Orthogonal Transformation|orthogonal]] because $\mathbf{Q}^{\text{T}}\mathbf{Q}=\mathbf{I}_{n}$
# Problem 9
$$
\begin{align*}
\mathbf{A}=\mathbf{QR}\implies \mathbf{A}(\mathbf{A}^{\text{T}}\mathbf{A})^{-1}\mathbf{A}^{\text{T}}\\
=\mathbf{QR}((\mathbf{QR})^{\text{T}}\mathbf{QR})^{-1}(\mathbf{QR})^{\text{T}}\\
=\mathbf{QR}(\mathbf{R}^{\text{T}}\mathbf{R})^{-1}\mathbf{R}^{\text{T}}\mathbf{Q}^{\text{T}}\\
=\mathbf{QRR}^{-1}(\mathbf{R}^{\text{T}})^{-1}\mathbf{R}^{\text{T}}\mathbf{Q}^{\text{T}}\\
=\mathbf{Q}\mathbf{I}^{2}\mathbf{Q}^{\text{T}}\\
\implies \boxed{ \mathbf{A}(\mathbf{A}^{\text{T}}\mathbf{A})^{-1}\mathbf{A}^{\text{T}}=\mathbf{QQ}^{\text{T}} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\text{im}\,\mathbf{A}\supseteq\text{im}\,(\mathbf{AA}^{\text{T}})\\
\vec{x}\in\ker\mathbf{A}\implies \mathbf{A}\vec{x}=\vec{0}\implies \mathbf{A}^{\text{T}}\mathbf{A}\vec{x}=\vec{0}\\
\implies \vec{x}\in\ker(\mathbf{A}^{\text{T}}\mathbf{A})\implies \ker\mathbf{A}\subseteq\ker(\mathbf{A}^{\text{T}}\mathbf{A})\\
\vec{x}\in\ker\mathbf{A}^{\text{T}}\mathbf{A}\implies \mathbf{A}^{\text{T}}\mathbf{A}\vec{x}=\vec{0}\implies \vec{x}^{\text{T}}\mathbf{A}^{\text{T}}\mathbf{A}\vec{x}=\vec{0}\\
\implies (\mathbf{A}\vec{x})^{\text{T}}(\mathbf{A}\vec{x})=\vec{0}\implies \vec{x}\in\ker\mathbf{A}\implies \ker(\mathbf{A}^{\text{T}}\mathbf{A})\subseteq\ker\mathbf{A} \\
\implies \ker\mathbf{A}=\ker\mathbf{A}^{\text{T}}\mathbf{A}\implies \text{rank}\,\mathbf{A}=\text{rank}\,\mathbf{A}^{\text{T}}\mathbf{A}=\text{rank}\,\mathbf{AA}^{\text{T}}\\
\boxed{ \text{Images are subspaces and dimension equal}\implies \text{im}\,\mathbf{A}=\text{im}\,(\mathbf{AA}^{\text{T}}) }
\end{align*}
$$

# Problem 11
$$
\begin{align*}
\mathbf{A}=\mathbf{A}^{\text{T}}\\
\text{im}\,\mathbf{A}=(\ker\mathbf{A}^{\text{T}})^{\perp}=(\ker\mathbf{A})^{\perp}\\
\implies\boxed{ \text{im}\,\mathbf{A}\text{ and }\ker\mathbf{A}\text{ are orthogonal complements} }
\end{align*}
$$
# Problem 12
## a)
$$
\begin{align*}
\mathbf{A}\vec{x}=\vec{b}\\
\vec{x}=\vec{x}_{h}+\vec{x}_{0},\vec{x}_{h}\in\ker\mathbf{A},\vec{x}_{0}\in(\ker\mathbf{A})^{\perp}\\
\text{Let }\vec{x}_{h}=\vec{0}\in\ker\mathbf{A}\implies \boxed{ \vec{x}=\vec{x}_{0}\in(\ker\mathbf{A})^{\perp} }
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{x}_{0},\vec{x}_{1}\text{ are both solutions}\in(\ker\mathbf{A})^{\perp}\\
\implies \mathbf{A}\vec{x}_{1}-\mathbf{A}\vec{x}_{0}=\vec{b}-\vec{b}=\vec{0}\\
\implies \mathbf{A}(\vec{x}_{1}-\vec{x}_{0})=\vec{0}\implies \vec{x}_{1}-\vec{x}_{0}\in\ker\mathbf{A},\\
\text{but linear combinations stay in the subspace},\\
\text{so the only way }\vec{x}_{1}-\vec{x}_{0}\in\ker\mathbf{A}, \\
\vec{x}_{1}-\vec{x}_{0}=\vec{0}\implies\vec{x}_{1}=\vec{x}_{0} \text{ and they cannot be unique}\\
\implies \boxed{ \text{Only 1 unique solution in }(\ker\mathbf{A})^{\perp}  }
\end{align*}
$$
## c)
$$
\begin{align*}
\mathbf{A}\vec{x}_{1}=\vec{b}\implies\vec{x}_{1}=\vec{x}_{h}+\vec{x}_{0}\\
\vec{x}_{1}\neq\vec{x}_{0}\implies \vec{x}_{h}\neq\vec{0}\implies \boxed{ \|\vec{x}_{0}\|<\|\vec{x}_{1}\| }
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
3 & 2 \\
5 & 3 \\
4 & 5
\end{bmatrix},\vec{b}=\begin{bmatrix}
5 \\
9 \\
2
\end{bmatrix}\\
\mathbf{A}^{\text{T}}\mathbf{A}\vec{x}^{*}=\mathbf{A}^{\text{T}}\vec{b}\\
\implies \begin{bmatrix}
3 & 5 & 4 \\
2 & 3 & 5
\end{bmatrix}\begin{bmatrix}
3 & 2 \\
5 & 3 \\
4 & 5
\end{bmatrix}\vec{x}^{*}=\begin{bmatrix}
3 & 5 & 4 \\
2 & 3 & 5
\end{bmatrix}\begin{bmatrix}
5 \\
9 \\
2
\end{bmatrix}\\
\implies \begin{bmatrix}
50 & 41 \\
41 & 38
\end{bmatrix}\vec{x}^{*}=\begin{bmatrix}
68 \\
47
\end{bmatrix}\\
\implies \vec{x}^{*}=\frac{1}{219}\begin{bmatrix}
38 & -41 \\
-41 & 50
\end{bmatrix}\begin{bmatrix}
68 \\
47
\end{bmatrix}\\
=\frac{1}{219}\begin{bmatrix}
657 \\
-438
\end{bmatrix}\\
\implies \boxed{ \vec{x}^{*}=\begin{bmatrix}
3 \\
-2
\end{bmatrix} }\\
\|\vec{b}-\mathbf{A}\vec{x}^{*}\|=\left\| \begin{bmatrix}
5 \\
9 \\
2
\end{bmatrix}-\begin{bmatrix}
3 & 2 \\
5 & 3 \\
4 & 5
\end{bmatrix}\begin{bmatrix}
3 \\
-2
\end{bmatrix} \right\| =\left\| \begin{bmatrix}
5 \\
9 \\
2
\end{bmatrix}-\begin{bmatrix}
5 \\
9 \\
2
\end{bmatrix} \right\|=\boxed{ 0 }
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix},\vec{b}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
\mathbf{A}^{\text{T}}\mathbf{A}\vec{x}^{*}=\mathbf{A}^{\text{T}}\vec{b}\\
\implies \begin{bmatrix}
1 & 4 & 7 \\
2 & 5 & 8 \\
3 & 6 & 9
\end{bmatrix}\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}\vec{x}^{*}=\begin{bmatrix}
1 & 4 & 7 \\
2 & 5 & 8 \\
3 & 6 & 9
\end{bmatrix}\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
\implies \begin{bmatrix}
66 & 78 & 90 \\
78 & 93 & 108 \\
90 & 108 & 126
\end{bmatrix}\vec{x}^{*}=\begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}\\
\left[\begin{array}{ccc|c}
66 & 78 & 90 & 1 \\
78 & 93 & 108 & 2 \\
90 & 108 & 126 & 3
\end{array}\right]RREF\to\left[\begin{array}{ccc|c}
1 & 0 & -1 & -\frac{7}{6} \\
0 & 1 & 2 & 1 \\
0 & 0 & 0 & 0
\end{array}\right]\\
x^{*}_{3}=t\implies\vec{x}^{*}=\begin{bmatrix}
t-\frac{7}{6} \\
1-2t \\
t
\end{bmatrix}\implies\boxed{ \vec{x}^{*}= \begin{bmatrix}
-\frac{7}{6} \\
-2 \\
0
\end{bmatrix}+\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}t }
\end{align*}
$$
# Problem 15
$$
\begin{align*}
ax^{2}+bx+c\\
c=27\\
a+b+c=0\\
4a+2b+c=0\\
9a+3b+c=0\\
\implies \begin{bmatrix}
1 & 1 & 1 \\
4 & 2 & 1 \\
9 & 3 & 1 \\
0 & 0 & 1
\end{bmatrix}\vec{c}=\begin{bmatrix}
0 \\
0 \\
0 \\
27
\end{bmatrix}\\
\implies \begin{bmatrix}
1 & 4 & 9 & 0 \\
1 & 2 & 3 & 0 \\
1 & 1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
1 & 1 & 1 \\
4 & 2 & 1 \\
9 & 3 & 1 \\
0 & 0 & 1
\end{bmatrix}\vec{c}=\begin{bmatrix}
1 & 4 & 9 & 0 \\
1 & 2 & 3 & 0 \\
1 & 1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
0 \\
0 \\
0 \\
27
\end{bmatrix}\\
\implies \begin{bmatrix}
98 & 36 & 14 \\
36 & 14 & 6 \\
14 & 6 & 4
\end{bmatrix}\vec{c}=\begin{bmatrix}
0 \\
0 \\
27
\end{bmatrix}\\
RREF\implies \vec{c}=\begin{bmatrix}
\frac{27}{4} \\
-\frac{567}{20} \\
\frac{513}{20}
\end{bmatrix}\\
\implies \boxed{ \frac{27}{4}x^{2}-\frac{567}{20}x+\frac{513}{20} }
\end{align*}
$$
![[E21B Homework 7 2024-03-22 14.15.10.excalidraw]]
# Problem 16
## a)
$$
\begin{align*}
\begin{array}{c|c}
a & D & \ln a & \ln D \\
\hline 0.387 & 0.241 & -0.949 & -1.423 \\
1.000 & 1.000 & 0 & 0 \\
5.203 & 11.86 & 1.649 & 2.473 \\
19.19 & 84.04 & 2.954 & 4.431 \\
39.53 & 248.6 & 3.677 & 5.516
\end{array}\\
-1.423=c+n(-0.949)\\
c=0\\
2.473=c+n(1.649)\\
4.431=c+n(2.954)\\
5.516=c+n(3.677)\\
\implies \begin{bmatrix}
1 & -0.949 \\
1 & 0 \\
1 & 1.649 \\
1 & 2.954 \\
1 & 3.677
\end{bmatrix}\begin{bmatrix}
c \\
n
\end{bmatrix}=\begin{bmatrix}
-1.423 \\
0 \\
2.473 \\
4.431 \\
5.516
\end{bmatrix}\\
\implies\begin{bmatrix}
1 & 1 & 1 & 1 & 1 \\
-0.949 & 0 & 1.649 & 2.954 & 3.677
\end{bmatrix}\begin{bmatrix}
1 & -0.949 \\
1 & 0 \\
1 & 1.649 \\
1 & 2.954 \\
1 & 3.677
\end{bmatrix}\begin{bmatrix}
c \\
n
\end{bmatrix}\\
=\begin{bmatrix}
1 & 1 & 1 & 1 & 1 \\
-0.949 & 0 & 1.649 & 2.954 & 3.677
\end{bmatrix}\begin{bmatrix}
-1.423 \\
0 \\
2.473 \\
4.431 \\
5.516
\end{bmatrix}\\
\implies \begin{bmatrix}
5 & 7.311 \\
7.311 & 25.87
\end{bmatrix}\begin{bmatrix}
c \\
n
\end{bmatrix}=\begin{bmatrix}
11.00 \\
38.80
\end{bmatrix}\\
\implies \begin{bmatrix}
c \\
n
\end{bmatrix}=\frac{1}{75.90}\begin{bmatrix}
25.87 & -7.311 \\
-7.311 & 5
\end{bmatrix}\begin{bmatrix}
11.00 \\
38.80
\end{bmatrix}\\
=\frac{1}{75.90}\begin{bmatrix}
0.903 \\
113.6
\end{bmatrix}\\
\implies \boxed{ c=0.012,n=1.496 }
\end{align*}
$$
## b)
$$
\begin{align*}
D=e^{c+n\ln a}=e^{c}a^{n}\\
=e^{0.012}a^{1.496}=\boxed{ 1.012a^{1.496} }
\end{align*}
$$
## c)
$$
\begin{align*}
D^{2}\propto a^{3}\implies D\propto a^{1.5}\approx a^{1.496}
\end{align*}
$$
The equation matches with [[Kepler's 3rd Law]]:
$$
D^{2}=a^{3}
$$
for planets orbiting our sun, which matches with how $k\approx1$
# Problem 17
## a)
$$
\begin{align*}
2.73=c_{0}\\
3.26=c_{0}+10c_{1}\\
3.70=c_{0}+20c_{1}\\
3.90=c_{0}+30c_{1}\\
\implies \begin{bmatrix}
1 & 0 \\
1 & 10 \\
1 & 20 \\
1 & 30
\end{bmatrix}\vec{c}=\begin{bmatrix}
2.73 \\
3.26 \\
3.7 \\
3.9
\end{bmatrix}\\
\implies \begin{bmatrix}
1 & 1 & 1 & 1 \\
0 & 10 & 20 & 30
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
1 & 10 \\
1 & 20 \\
1 & 30
\end{bmatrix}\vec{c}=\begin{bmatrix}
1 & 1 & 1 & 1 \\
0 & 10 & 20 & 30
\end{bmatrix}\begin{bmatrix}
2.73 \\
3.26 \\
3.7 \\
3.9
\end{bmatrix}\\
\implies \begin{bmatrix}
4 & 60 \\
60 & 1400
\end{bmatrix}\vec{c}=\begin{bmatrix}
13.59 \\
223.6
\end{bmatrix}\\
\implies \vec{c}=\frac{1}{2000}\begin{bmatrix}
1400 & -60 \\
-60 & 4
\end{bmatrix}\begin{bmatrix}
13.59 \\
223.6
\end{bmatrix}\\
=\frac{1}{2000}\begin{bmatrix}
5610 \\
79
\end{bmatrix}\\
\implies c_{0}=2.805,c_{1}=0.0395\\
\implies \boxed{ D=638.3\cdot10^{0.0395t} }
\end{align*}
$$
## b)
$$
D=638.3\cdot10^{0.0395\cdot40}=24267\text{ billion dollars}
$$