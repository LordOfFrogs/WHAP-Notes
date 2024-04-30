---
tags:
  - math/linear-algebra
aliases:
  - Diagonalize
  - Diagonalizable
  - Diagonalized
---
If it is possible to find a [[basis]] for [[Rn]] consisting of [[Eigenvector|eigenvectors]] (an [[eigenbasis]]) of an $n\times n$ [[matrix]] $\mathbf{A}$, $\mathbf{A}$ is diagonalizable (not always possible!)
$$
\mathcal{B}=\{\vec{v}_{1},\cdots,\vec{v}_{n}\}\implies\mathbf{S}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix}\implies [\mathbf{A}]_{\mathcal{B}}=\mathbf{S}^{-1}\mathbf{AS}=\mathbf{D}
$$
Where $\mathbf{D}$ is a diagonal [[matrix]] of
$$
\mathbf{D}=\begin{bmatrix}
\lambda_{1} & & 0 \\
 & \ddots &  \\
0 &  & \lambda_{n}
\end{bmatrix}
$$
# Orthogonal Diagonalization
A $n\times n$ [[matrix]] $\mathbf{A}$ is called orthogonally diagonalizable if there exists an [[orthonormal]] [[eigenbasis]]