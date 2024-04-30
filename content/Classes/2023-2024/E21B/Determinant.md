---
tags:
  - math/linear-algebra
aliases:
  - Determinants
---
# Definition
## 1x1 [[Matrix]]
$$
\det[a]=a
$$
$1!=1$ terms
## 2x2 [[Matrix]]
$$
\det\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}=\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}=ad-bc
$$
$2!=2$ terms
## 3x3 [[Matrix]]
$$
\det\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}=\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}=a_{11}\begin{vmatrix}
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{vmatrix}-a_{12}\begin{vmatrix}
a_{21} & a_{23} \\
a_{31} & a_{33}
\end{vmatrix}+a_{13}\begin{vmatrix}
a_{21} & a_22 \\
a_{31} & a_{32}
\end{vmatrix}
$$
$3!=6$ terms when fully expanded
## $n\times n$ [[Matrix]]
$$
\det\mathbf{A}=\det\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{nn}
\end{bmatrix}=\sum_{\sigma\in P(n)}\text{sgn}(\sigma)a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n\sigma(n)}
$$
Where $P(n)$ denotes set of all permutations of the characters $12\cdots n$, $\sigma$ denoting an individual permutation, $\sigma(i)$ denoting where character $i$ is mapped under permutation, and $\text{sgn}(\sigma)=+1$ if $\sigma$ is even permutation and $-1$ if odd
$n!$ terms in the sum
### Laplace Expansion
For any row or column and entry $a_{ij}$ of that row or column, let $\mathbf{A}_{ij}$ be its minor obtained by deleting the corresponding row and column from the [[matrix]], then:
$$
\begin{align*}
\det\mathbf{A}=\sum_{j=1}^{n}(-1)^{i+j}a_{ij}\det\mathbf{A}_{ij}\\
\det\mathbf{A}=\sum_{i=1}^{n}(-1)^{i+j}a_{ij}\det\mathbf{A}_{ij}
\end{align*}
$$
# Properties
- If $\mathbf{A}$ is upper or lower triangular, $\det\mathbf{A}=\mathrm{Tr}\mathbf{A}$
- $\det\mathbf{A}^{\text{T}}=\det\mathbf{A}$ for $n\times n$
- $\det(\mathbf{AB})=(\det\mathbf{A})(\det\mathbf{B})$
- $\det(\mathbf{A}^{-1})=\frac{1}{\det\mathbf{A}}$
- If $\mathbf{A}$ and $\mathbf{B}$ are [[similar]], then $\det\mathbf{A}=\det\mathbf{B}$
## Multilinearity
The determinant is **not [[Linearity|linear]]**: $\det(t\mathbf{A})=t^{n}\det(\mathbf{A})$ for an $n\times n$ [[matrix]]
But it is [[Linearity|linear]] in a single row or column:
$$
\begin{align*}
\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{x}+\vec{y} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}=\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{x} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}+\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{y} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}\\
\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & r\vec{x} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}=r\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{x} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}\\
\det\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{x}+\vec{y} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{v}_{n} & \rightarrow
\end{bmatrix}=\det\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{x} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{v}_{n} & \rightarrow
\end{bmatrix}+\det\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{y} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{v}_{n} & \rightarrow
\end{bmatrix}\\
\det\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & r\vec{x} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{v}_{n} & \rightarrow
\end{bmatrix}=r\det\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{x} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{v}_{n} & \rightarrow
\end{bmatrix}
\end{align*}
$$
Explain [[#Laplace Expansion]]
## [[Elementary Row Operations]]
$$
\begin{align*}
\mathbf{A}\xrightarrow[\text{by }k]{\text{scale row}}\mathbf{B}\implies \det\mathbf{B}=k\det\mathbf{A}\\
\mathbf{A}\xrightarrow[\text{two rows}]{\text{interchange}}\mathbf{B}\implies \det\mathbf{B}=-\det\mathbf{A}\\
\mathbf{A}\xrightarrow[\text{one row to another}]{\text{add a multiple of}}\mathbf{B}\implies \det\mathbf{B}=\det\mathbf{A}
\end{align*}
$$
From interchanging, follows that if a [[matrix]] has two identical rows, $\det\mathbf{A}=0$
## [[Matrix#Invertibility|Invertibility]]
To get from $\mathbf{A}$ to $\text{rref}\mathbf{A}$, use $s$ row swaps, $r$ row scalings by factors $\frac{1}{k_{1}}, \frac{1}{k_{2}}, \cdots, \frac{1}{k_{r}}$, and some adding multiples of rows together
This would give
$$
\det[\text{rref}(\mathbf{A})]=(-1)^{s} \frac{1}{k_{1}} \frac{1}{k_{2}}\cdots \frac{1}{k_{r}}\det\mathbf{A}
$$
Giving
$$
\det\mathbf{A}=(-1)^{s}k_{1}k_{2}\cdots k_{r}\det(\text{rref}\mathbf{A})
$$
Only two possible values for $\det(\text{rref}\mathbf{A})$: 1 if it is invertible and $\text{rref}\mathbf{A}=\mathbf{I}_{n}$, or 0 if it is not invertible
So,
**An $n\times n$ [[matrix]] $\mathbf{A}$ is invertible if and only if $\det\mathbf{A}\neq0$**
# Geometry
Given [[Gram-Schmidt Orthogonalization]]:
![[Gram-Schmidt Orthogonalization#^e3abb9]]
Because the $k$-volume of the parallelepiped determined by $\{ \vec{v}_{1},\cdots,\vec{v}_{k} \}$ is the [[trace]] of $\mathbf{R}$ ($r_{11}r_{22}\cdots r_{kk}=\det\mathbf{R}$)
And $\mathbf{A}^{\text{T}}\mathbf{A}=(\mathbf{QR})^{\text{T}}\mathbf{QR}=\mathbf{R}^{\text{T}}\mathbf{Q}^{\text{T}}\mathbf{QR}=\mathbf{R}^{\text{T}}\mathbf{R}$, giving $\det(\mathbf{A}^{\text{T}}\mathbf{A})=\det(\mathbf{R}^{\text{T}}\mathbf{R})=(\det\mathbf{R})^{2}=(k\text{-volume})^{2}$
Therefore, $\boxed{ k\text{-volume}=\sqrt{\det(\mathbf{A}^{\text{T}}\mathbf{A})} }$
## $n\times n$
For an $n\times n$ [[matrix]], $n\text{-volume}=\sqrt{\det\mathbf{A}^{\text{T}}\mathbf{A}}=\sqrt{(\det\mathbf{A})^{2}}=|\det\mathbf{A}|$
Imagining unit cube determined by [[Standard Basis Vectors|Elementary Basis Vectors]], $\mathbf{A}$ maps the volume of 1 to $|\det\mathbf{A}|$, with $|\det\mathbf{A}|$ as the "volume expansion factor" of $\mathbf{A}$
## Orientation
A positive determinant means the [[Linear Transformation]] is orientation preserving and negative means that it is orientation reversing