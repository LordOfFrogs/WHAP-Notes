---
tags:
  - math/linear-algebra
aliases:
  - Elementary Basis Vectors
  - Standard Basis
---
$$
\vec{e}_{1}=\begin{bmatrix}
1 \\
0 \\
\vdots \\
0
\end{bmatrix},\vec{e}_{2}=\begin{bmatrix}
0 \\
1 \\
\vdots \\
0
\end{bmatrix},\dots,\vec{e}_{n}=\begin{bmatrix}
0 \\
0 \\
\vdots \\
1
\end{bmatrix}
$$
Represent unit [[Vector|vectors]] with one component 1 and all others 0
Used in [[R2]] as $\mathbf{i},\mathbf{j}$ or [[R3]] as $\mathbf{i},\mathbf{j},\mathbf{k}$
Form [[Basis]] for [[Rn]]
# Multiplication with [[Matrix|Matrices]]
$$
\mathbf{A}\vec{e}_{1}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}\begin{bmatrix}
1 \\
0 \\
\vdots \\
0
\end{bmatrix}=\vec{v}_{1}
$$
And same for other n, so columns of [[Matrix]] completely determine how corresponding [[Linear Transformation]] act on the [[basis]] vectors