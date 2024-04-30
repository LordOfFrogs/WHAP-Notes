---
tags:
  - math/linear-algebra
aliases:
  - Orthogonal Matrix
  - Orthogonal Matrices
---
A [[linear transformation]] $T:$[[Rn]]$\to$[[Rn]] is called an [[Orthogonality|orthogonal]] transformation if it preserves norms.
[[Matrix]] is called an orthogonal matrix
Geometrically, all rotations and reflections
# Properties
- $\ker(T)=\{ \vec{0} \}$
- Must be [[Matrix#Invertibility|invertible]]
- Preserves [[Dot Product|dot products]]
- Preserves angles
# [[Matrix]]
Must have [[Orthonormal]] columns
Therefore
$$
\mathbf{A}^{\text{T}}\mathbf{A}=\begin{bmatrix}
\leftarrow & \vec{u}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{u}_{n} & \rightarrow
\end{bmatrix}\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{u}_{1} & \cdots & \vec{u}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}=\mathbf{I}_{n}
$$
Therefore, the [[Transpose]] is the [[Matrix#Inverse|inverse]] $\mathbf{A}^{\text{T}}=\mathbf{A}^{-1}$