---
tags:
  - math
  - math/linear-algebra
aliases:
  - Systems of Equations
  - System of Equations
  - Systems of Linear Equations
  - Linear System
  - Linear Systems
---
# Geometrically
Each equation represents some object in [[Rn]] where $n=$ number of variables
Can be parametrically defined by $\leq n-1$ parameters
Intersection of all equations is the solution
If [[rank]] is number of variables, single point solution
If [[rank]]$=k<n$, $n-k$ parameters determine solution
# [[Reduced Row-Echelon Form]]
Write system as
$$
\begin{align*}
\begin{Bmatrix}
a_{11}x_{1}+\cdots++a_{1n}x_{n}=b_{1} \\
\vdots \\
a_{m1}x_{1}+\cdots+a_{mn}x_{n}=b_{m}
\end{Bmatrix}\longrightarrow
\left[\begin{array}{ccc|c}
a_{11} & \cdots & a_{1n} & b_{1} \\
\vdots & \ddots & \vdots & \vdots \\
a_{m1} & \cdots & a_{mn} & b_{m}
\end{array}\right]
\end{align*}
$$
Then reduce to [[Reduced Row-Echelon Form|RREF]]:
1. Scale or interchange to produce leading 1 in upper left position
2. Use first row as pivot row, leaving unchanged but + or - multiples to other rows to produce 0s everywhere else in the column - "cleaning"
3. Scale or interchange to produce leading 1 in next row, shifted right (by 1+)
4. Use as pivot row to clean column
5. Repeat
6. Any all-zero rows should be at bottom
Then, interpret solution by parameterization
# [[Vector]] Form
Write as
$$
\begin{align*}
x_{1}\underbrace{\begin{bmatrix}
a_{11} \\
\vdots \\
a_{mn}
\end{bmatrix}}_{\vec{v}_{1}}+\cdots+x_{n}\underbrace{\begin{bmatrix}
a_{1n} \\
\vdots \\
a_{mn}
\end{bmatrix}}_{\vec{v}_{n}}=\underbrace{\begin{bmatrix}
b_{1} \\
\vdots \\
b_{m}
\end{bmatrix}}_{\vec{b}}
\end{align*}
$$
Producing [[basis]] where there is a solution if $\mathbf{b}\in\text{span}\{\vec{v}_{1},\cdots,\vec{v}_{n}\}$[^1]
# [[Matrix]] Form
Take [[#Vector Form|vector form]] and assemble [[Vector|vectors]]:
$$
\mathbf{A}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}=\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{bmatrix}
$$
So if
$$
\vec{x}=\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}
$$
product of [[matrix]] and [[Vector]] is
$$
\mathbf{A}\vec{x}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}\equiv x_{1}\vec{v}_{1}+\cdots+x_{n}\vec{v}_{n}
$$
Expressing system as
$$
\mathbf{A}\vec{x}=\vec{b}
$$
## With Functions
Say $T(\vec{x})=\mathbf{A}\vec{x}$
So, with input [[Vector]] $\vec{x}\in$ [[Rn]] and output $T(\vec{x})=\mathbf{A}\vec{x}=\vec{b}\in\mathbb{R}^{m}$, $L:\mathbb{R}^{n}\to\mathbb{R}^{m}$

[^1]: [[Span]]