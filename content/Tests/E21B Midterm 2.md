---
date: 2024-04-21
course: "[[E21B]]"
tags:
  - math/linear-algebra
---
# 1)
## a)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
-3 & -2 & 2 \\
0 & -3 & -4 \\
0 & 0 & -3
\end{bmatrix}
\end{align*}
$$
Invertible, so TRUE
## b)
TRUE
## c)
FALSE, $\det(k\mathbf{A})=k^{n}\mathbf{A}$
## d)
TRUE
## e)
FALSE, can have repeated if algebraic and geometric multiplicities are the same
## f)
TRUE
## g)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
-3 & -4 \\
9 & 9
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda+3 & 4 \\
-9 & \lambda-9
\end{vmatrix}\\
=\lambda^{2}-6\lambda+9=0\\
\implies \lambda_{1}=3\\
\implies \begin{bmatrix}
6 & 4 \\
-9 & -6
\end{bmatrix}\vec{v}=\vec{0}\implies \vec{v}=\begin{bmatrix}
2 \\
-3
\end{bmatrix}
\end{align*}
$$
FALSE
# 2)
## a)
$$
\begin{align*}
\vec{u}_{1}=\frac{1}{3}\begin{bmatrix}
-2 \\
0 \\
2 \\
1
\end{bmatrix},\vec{u}_{2}=\frac{1}{3}\begin{bmatrix}
0 \\
2 \\
-1 \\
2
\end{bmatrix},\mathcal{B}=\{ \vec{u}_{1},\vec{u}_{2} \}\\
[\vec{v}_{1}]_{\mathcal{B}}=\begin{bmatrix}
6 \\
0
\end{bmatrix},[\vec{v}_{2}]_{\mathcal{B}}=\begin{bmatrix}
-3 \\
6
\end{bmatrix}\\
\mathbf{A}=\begin{bmatrix}
6 & -3 \\
0 & 6
\end{bmatrix}\implies area=\det\mathbf{B}=\boxed{ 36 }
\end{align*}
$$
## b)
Already done
## c)
$$
\begin{align*}
\mathbf{BB}^{\text{T}}=\frac{1}{9}\begin{bmatrix}
-2 & 0 \\
0 & 2 \\
2 & -1 \\
1 & 2
\end{bmatrix}\begin{bmatrix}
-2 & 0 & 2 & 1 \\
0 & 2 & -1 & 2
\end{bmatrix}=\boxed{ \frac{1}{9}\begin{bmatrix}
4 & 0 & -4 & -2 \\
0 & 4 & -2 & 4 \\
-4 & -2 & 5 & 0 \\
-2 & 4 & 0 & 5
\end{bmatrix} }
\end{align*}
$$
# 3)
## a)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
-3 & -2 & 2 \\
0 & -3 & -4 \\
0 & 0 & -3
\end{bmatrix}
\end{align*}
$$
## b)
$$
-27
$$
## c)
$$
\begin{align*}
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda+3 & 2 & -2 \\
0 & \lambda+3 & 4 \\
0 & 0 & \lambda+3
\end{vmatrix}\\
=(\lambda+3)^{3}=0\\
\implies \lambda=-3\\
AM=3\\
\implies \vec{v}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}
\end{align*}
$$
Not diagonalizable
# 4)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
2 & 3 \\
-1 & 1 \\
2 & 1
\end{bmatrix},\vec{b}=\begin{bmatrix}
2 \\
5 \\
1
\end{bmatrix}\\
\mathbf{A}^{\text{T}}\mathbf{A}\vec{x}^{*}=\mathbf{A}^{\text{T}}\vec{b}\\
\implies \begin{bmatrix}
2 & -1 & 2 \\
3 & 1 & 1
\end{bmatrix}\begin{bmatrix}
2 & 3 \\
-1 & 1 \\
2 & 1
\end{bmatrix}\vec{x}^{*}=\begin{bmatrix}
2 & -1 & 2 \\
3 & 1 & 1
\end{bmatrix}\begin{bmatrix}
2 \\
5 \\
1
\end{bmatrix}\\
\implies \begin{bmatrix}
9 & 7 \\
7 & 11
\end{bmatrix}\vec{x}^{*}=\begin{bmatrix}
1 \\
12
\end{bmatrix}\\
\implies \vec{x}^{*}=\frac{1}{50}\begin{bmatrix}
11 & -7 \\
-7 & 9
\end{bmatrix}\begin{bmatrix}
1 \\
12
\end{bmatrix}=\boxed{ \frac{1}{50}\begin{bmatrix}
-73 \\
101
\end{bmatrix} }
\end{align*}
$$
# 5)
## a)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
11 & -9 \\
6 & -4
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-11 & 9 \\
-6 & \lambda+4
\end{vmatrix}=\lambda^{2}-7\lambda+10=0\\
\implies \boxed{ \lambda_{1}=2,\lambda_{2}=5 }\\
\lambda_{1}\implies \begin{bmatrix}
-9 & 9 \\
-6 & 6
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
1 \\
1
\end{bmatrix} }\\
\lambda_{2}\implies \begin{bmatrix}
-6 & 9 \\
-6 & 9
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \boxed{ \vec{v}_{2}=\begin{bmatrix}
3 \\
2
\end{bmatrix} }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}^{t}\vec{x}_{0}=\begin{bmatrix}
1 & 3 \\
1 & 2
\end{bmatrix}\begin{bmatrix}
2^{t} & 0 \\
0 & 5^{t}
\end{bmatrix}\begin{bmatrix}
-2 & 3 \\
1 & -1
\end{bmatrix}\begin{bmatrix}
4 \\
5
\end{bmatrix}\\
=\begin{bmatrix}
1 & 3 \\
1 & 2
\end{bmatrix}\begin{bmatrix}
-2\cdot2^{t} & 3\cdot2^{t} \\
5^{t} & -5^{t}
\end{bmatrix}\begin{bmatrix}
4 \\
5
\end{bmatrix}\\
=\begin{bmatrix}
3\cdot5^{t}-2\cdot2^{t} & 3\cdot2^{t}-3\cdot5^{t} \\
2\cdot5^{t}-2\cdot2^{t} & 3\cdot2^{t}-2\cdot5^{t}
\end{bmatrix}\begin{bmatrix}
4 \\
5
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
7\cdot2^{t}-3\cdot5^{t} \\
7\cdot2^{t}-2\cdot5^{t}
\end{bmatrix} }
\end{align*}
$$
# 6)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
17 & -20 \\
10 & -11
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-17 & 20 \\
-10 & \lambda+11
\end{vmatrix}=\lambda^{2}-6\lambda+13=0\\
\implies \lambda=3+2i,\bar{\lambda}=3-2i\\
r=\sqrt{3^{2}+2^{2}}=\sqrt{13},\\
\theta=\sin ^{-1}\left( \frac{2}{\sqrt{13}} \right)=\cos ^{-1}\left( \frac{3}{\sqrt{13}} \right)\\
\implies \boxed{ \begin{bmatrix}
3 & -2 \\
2 & 3
\end{bmatrix} }
\end{align*}
$$