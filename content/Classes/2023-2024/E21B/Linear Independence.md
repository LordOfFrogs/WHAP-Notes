---
tags:
  - math/linear-algebra
aliases:
  - Linearly Independent
---
A set of [[Vector|vectors]] $\{ \vec{v}_{1}, \vec{v}_{2},\dots,\vec{v}_{k} \}\in$ [[Rn]] is linearly independent if given any linear combination of the form $c_{1}\vec{v}_{1}+\cdots+c_{n}\vec{v}_{n}=\vec{0}\implies c_{1}=\cdots=0$
There is no nontrivial way to combine these [[Vector|vectors]] to yield the zero [[vector]]
Impossible to solve or any [[vector]] in terms of others
No redundancy
# Test
Write
$$
\mathbf{A}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix},\vec{c}=\begin{bmatrix}
c_{1} \\
\vdots \\
c_{k}
\end{bmatrix}
$$
Linearly independent if and only if $\text{ker}(\mathbf{A})=\{ \vec{0} \}$