---
tags:
  - math/linear-algebra
aliases:
  - Coordinate
---
Can be thought of as functions that assign numbers to points

More formally,
For [[subspace]] $V\subseteq$ [[Rn]] with [[basis]] $\mathcal{B}=\{ \vec{v}_{1},\cdots,\vec{v}_{k} \}$, then any [[vector]] $\vec{x}\in V$ can be uniquely expressed as 
$$\vec{x}=c_{1}\vec{v}_{1}+\cdots+c_{k}\vec{v}_{k}$$
for scalars $\{ c_{1},\cdots,c_{k} \}$, called the coordinates of $\vec{x}$ relative to [[basis]] $\mathcal{B}$
# Change of [[Basis]]
For special case when $V=$ [[Rn]], the change of [[basis]] [[matrix]] $\mathbf{S}$ $n\times n$
$$
\mathbf{S}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}
$$
Which is [[Matrix#Invertibility|invertible]]
So,
$$
\vec{x}=\mathbf{S}[\vec{x}]_{\mathcal{B}},\quad[\vec{x}]_{\mathcal{B}}=\mathbf{S}^{-1}\vec{x}
$$
