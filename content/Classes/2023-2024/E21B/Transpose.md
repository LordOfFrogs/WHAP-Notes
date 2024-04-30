---
tags:
  - math/linear-algebra
aliases:
  - Transposes
  - Transposed
  - Transposition
  - Transposing
---
$$
\mathbf{A}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix}\implies\mathbf{A}^{\text{T}}=\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots &  \\
\leftarrow & \vec{v}_{k} & \rightarrow
\end{bmatrix}
$$
# Properties
- $(\mathbf{AB})^{\text{T}}=\mathbf{B}^{\text{T}}\mathbf{A}^{\text{T}}$
- $(\mathbf{A}+\mathbf{B})^{\text{T}}=\mathbf{A}^{\text{T}}+\mathbf{B}^{\text{T}}$
- $\mathbf{A}$ [[Matrix#Invertibility|invertible]]$\implies \mathbf{A}^{\text{T}}$ also [[Matrix#Invertibility|invertible]] and $(\mathbf{A}^{\text{T}})^{-1}=(\mathbf{A}^{-1})^{\text{T}}$
- Preserves [[Rank]]