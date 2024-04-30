---
tags:
  - math/linear-algebra
---
Suppose a [[System of Linear Equations|linear system]] is represented as $\mathbf{A}\vec{x}=\vec{b}$, where $\mathbf{A}$ is an $n\times n$ [[matrix]] with [[rank]] $n$. Let $\mathbf{A}_{k}$ be the $n\times n$ [[matrix]] with the $k\text{th}$ column replaced with the [[vector]] $\vec{b}$
If the solution to the [[System of Linear Equations|system]] is:
$$
\vec{x}=\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix},x_{k}=\frac{\det\mathbf{A}_{k}}{\det\mathbf{A}}\forall k
$$
# Proof
$$
\begin{align*}
\det\mathbf{A}_{k}=\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{b} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}=\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \mathbf{A}\vec{x} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}\\
=\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & (x_{1}\vec{v}_{1}+\cdots+x_{n}\vec{v}_{n}) & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}
\end{align*}
$$
All [[Determinant|determinants]] other would result in identical columns, and, because $\mathbf{A}$ is square, the [[Transpose]]'s [[Determinant]] is the same as $\mathbf{A}$'s and identical rows mean [[determinant]] is 0, this simplifies to
$$
x_{k}\det\begin{bmatrix}
\uparrow &  & \uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow &  & \downarrow
\end{bmatrix}
$$
# Finding [[Matrix#Inverse|Inverse]]
First calculate $\det\mathbf{A}$ If $\det\mathbf{A}=0$, stop, not invertible. For each entry $a_{ij}$, let $\mathbf{A}_{ij}$ be its minor. Define the cofactors as $\text{cof}(a_{ij})=(-1)^{i+j}\det\mathbf{A}_{ij}$. 
Assembling these into a [[matrix]], get $\text{cof}(\mathbf{A})$, which then is [[Transpose|transposed]] to the adjoint matrix $\text{adj}(\mathbf{A})=[\text{cof}(\mathbf{A})]^{\text{T}}$
$$
\mathbf{A}^{-1}=\frac{\text{adj}\,\mathbf{A}}{\det\mathbf{A}}
$$