---
tags:
  - math/linear-algebra
aliases:
  - Complement
  - Complementary
---
For [[subspace]] $V\subseteq$ [[Rn]], the [[Orthogonality|orthogonal]] complement is
$$
V^{\perp}=\{ \vec{x}\in\mathbb{R}^{n}:\vec{x}\cdot\vec{v}=0\ \forall\ \vec{v}\in V \}
$$
# Finding
Suppose $V=\text{span}\{ \vec{v}_{1},\cdots,\vec{v}_{k} \}$[^1] (ideally [[Basis]]). Use [[matrix]]:
$$
\begin{align*}
\mathbf{A}^{(n\times k)}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix}\\
V=\text{im}\, \mathbf{A},\text{rank}\, \mathbf{A}=\dim V\\
\vec{x}\in V^{\perp}\Leftrightarrow \begin{Bmatrix}
\vec{v}_{1}\cdot \vec{x}=0 \\
\vdots \\
\vec{v}_{k}\cdot\vec{x}=0
\end{Bmatrix}\Leftrightarrow\begin{bmatrix}
\leftarrow & \vec{v}_{1} & \rightarrow \\
 & \vdots &  \\
\leftarrow & \vec{v}_{k} & \rightarrow
\end{bmatrix}\vec{x}=\vec{0}\Leftrightarrow \mathbf{A}^{\text{T}}\vec{x}=\vec{0}\Leftrightarrow\vec{x}\in\ker \mathbf{A}^{\text{T}}
\end{align*}
$$[^2]
Which gives,
$$
(\text{im}\, \mathbf{A})^{\perp}=\ker(\mathbf{A}^{\text{T}})
$$[^3]
[^1]: [[Span]]
[^2]: [[Image]], [[Kernel]], [[Dimension]], [[Transpose]]