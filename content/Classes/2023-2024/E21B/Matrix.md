---
tags:
  - math/linear-algebra
aliases:
  - Matrices
---
Essentially an array of numbers, can be thought of as a combination of column [[Vector|vectors]], represents a [[Linear Transformation]]
# [[Linearity]]
An $m\times n$ matrix forms a [[Linear Transformation]] from $\mathbb{R}^{n}\to\mathbb{R}^{m}$ when multiplied with [[vector]]
Simply distributive law:
$$\mathbf{A}(c_{1}\vec{x}_{1}+c_{2}\vec{x}_{2})=c_{1}\mathbf{A}(\vec{x}_{1})+c_{2}\mathbf{A}(\vec{x}_{2})$$
## Proof
Let columns of $\mathbf{A}$ be $\vec{v}_{1},\cdots,\vec{v}_{2}$, $\vec{x},\vec{y}\in\mathbb{R}^{n}$, and $\alpha,\beta\in\mathbb{R}$. Then,
$$
\alpha\vec{x}+\beta\vec{y}=\begin{bmatrix}
\alpha x_{1}+\beta y_{1} \\
\vdots \\
\alpha x_{n}+\beta y_{1}
\end{bmatrix}
$$
$$
\begin{align*}
T(\alpha\vec{x}+\beta\vec{y})=\mathbf{A}(\alpha\vec{x}+\beta\vec{y})=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}\begin{bmatrix}
\alpha x_{1}+\beta y_{1} \\
\vdots \\
\alpha x_{n}+\beta y_{1}
\end{bmatrix}\\
=(\alpha x_{1}+\beta y_{1})\vec{v}_{1}+\cdots+(\alpha x_{n}+\beta y_{n})\vec{v}_{2}=\alpha(x_{1}\vec{v}_{1}+\cdots+x_{n}\vec{v}_{n})+\beta(y_{1}\vec{v}_{1}+\cdots y_{n}\vec{v}_{n})\\
=\alpha\mathbf{A}\vec{x}+\beta\mathbf{A}\vec{y}=\alpha T(\vec{x})+\beta T(\vec{y})
\end{align*}
$$
# Common Matrices
## Identity
Identity function $Id:\mathbb{R}^{n}\to\mathbb{R}^{n}$ is $Id(\vec{x})=\vec{x}$ with corresponding matrix
$$
\mathbf{I}_{n}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{e}_{1} & \cdots & \vec{e}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}=\begin{bmatrix}
1 & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & 1
\end{bmatrix}
$$
With all zeroes except on main diagonal
## Dilation
Transformation of form $T(\vec{x})=r\vec{x}$ for scalar $r$
$$
\mathbf{A}=\begin{bmatrix}
\uparrow &  & \uparrow \\
r\vec{e}_{1} & \cdots & r\vec{e}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}=\begin{bmatrix}
r & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & r
\end{bmatrix}
$$
## Rotation in [[R2]]
Rotates [[vector]] in [[R2]] counterclockwise through angle $\theta$
$$
\mathbf{R}_{\theta}=\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$
## Rotation-Dilation in [[R2]]
$$
\mathbf{A}=\begin{bmatrix}
r\cos\theta & -r\sin\theta \\
r\sin\theta & r\cos\theta
\end{bmatrix}
$$
With $a=r\cos\theta,b=r\sin\theta$, any matrix of form $\begin{bmatrix}a & -b \\ b & a\end{bmatrix}$ will represent rotation-dilation with scaling $r=\sqrt{a^{2}+b^{2}}$ and angle $\tan\theta=\frac{b}{a}$
# Operations
## Addition and Scalar Multiplication
Component-wise, like [[Vector|vectors]]
### Properties
- $(k\mathbf{A})\vec{x}=k(\mathbf{A}\vec{x})$
- $(\mathbf{A}+\mathbf{B})\vec{x}=\mathbf{A}\vec{x}+\mathbf{B}\vec{x}$
## Product
Defined as the composition of [[Linear Transformation|linear transformations]]
Only works for when number of columns of $\mathbf{A}$ matches rows of $\mathbf{B}$
$$
(\mathbf{A}\mathbf{B})_{ij}=(i\text{th row of }\mathbf{A})\cdot(j\text{th column of }\mathbf{B})
$$
$$
\begin{align*}
\mathbf{A}\mathbf{B}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\mathbf{AB}(\vec{e}_{1}) & \cdots & \mathbf{AB}(\vec{e}_{p}) \\
\downarrow &  & \downarrow
\end{bmatrix}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\mathbf{A}(\mathbf{B}\vec{e}_{1}) & \cdots & \mathbf{A}(\mathbf{B}\vec{e}_{p}) \\
\downarrow &  & \downarrow
\end{bmatrix}\\
\mathbf{B}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{p} \\
\downarrow &  & \downarrow
\end{bmatrix}\implies \mathbf{AB}=\mathbf{A}\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{p} \\
\downarrow &  & \downarrow
\end{bmatrix}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\mathbf{A}\vec{v}_{1} & \cdots & \mathbf{A}\vec{v}_{p} \\
\downarrow &  & \downarrow
\end{bmatrix}
\end{align*}
$$
### Properties
Where defined:
- **Not commutative**: $\mathbf{AB}\neq\mathbf{BA}$
- Associative: $(\mathbf{AB})\mathbf{C}=\mathbf{A}(\mathbf{BC})$
- [[#Identity]] is the multiplicative identity: ($\mathbf{A}$ is $m\times n$) $\mathbf{I}_{m}\mathbf{A}=\mathbf{A},\mathbf{AI}_{n}=\mathbf{A}$
- Distributive:
	- $\mathbf{A}(\mathbf{C}+\mathbf{D})=\mathbf{AC}+\mathbf{AD}$
	- $(\mathbf{A}+\mathbf{B})\mathbf{C}=\mathbf{AC}+\mathbf{BC}$
- $(k\mathbf{A})\mathbf{C}=k(\mathbf{AC})$
# Inverse
Can be found by constructing $\text{rref}[\mathbf{A}|\mathbf{I}_{n}]=[\mathbf{I}_{n}|\mathbf{A}^{-1}]$ for a square matrix
Matrix multiplied by inverse gives [[#Identity]]: $\mathbf{A}^{-1}\mathbf{A}=\mathbf{I}$, $\mathbf{AA}^{-1}=\mathbf{I}$
$(\mathbf{AB})^{-1}=\mathbf{B}^{-1}\mathbf{A}^{-1}$
## 2x2
$$
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\implies \mathbf{A}^{-1}=\frac{1}{\det(\mathbf{A})}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}=\frac{1}{ad-bc}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$
## Invertibility
An $n\times n$ matrix is invertible if:
- The [[System of Linear Equations|system]] $\mathbf{A}\vec{x}=\vec{b}$ has a unique solution $\vec{x}$ for all $\vec{b}\in$ [[Rn]]
- $\text{rref}(\mathbf{A})=\mathbf{I}_{n}$ ([[Reduced Row-Echelon Form|RREF]] is [[#Identity]])
- $\text{rank}(\mathbf{A})=n$ (full [[Rank]])
- $\text{im}(\mathbf{A})=$ [[Rn]] ([[Image]])
- $\text{ker}(\mathbf{A})=\{ \vec{0} \}$ ([[Kernel]] is zero [[Subspace]])
- $\det(\mathbf{A})\neq0$
- The columns of $\mathbf{A}$ are [[Linear Independence|Linearly Independent]]
- The columns of $\mathbf{A}$ [[Span]] [[Rn]]
- The columns of $\mathbf{A}$ form a [[Basis]] for [[Rn]]
- 0 is not an [[eigenvalue]]