---
tags:
  - math/linear-algebra
---
If a [[matrix]] $\mathbf{A}$ is [[Diagonalization|diagonalizable]], $[\mathbf{A}]_{\mathcal{B}}=\mathbf{S}^{-1}\mathbf{AS}=\mathbf{D}$
Therefore $\mathbf{A}=\mathbf{SDS}^{-1}$ and
$$
\mathbf{A}^{t}=(\mathbf{SDS}^{-1})(\mathbf{SDS}^{-1})\cdots(\mathbf{SDS}^{-1})=\mathbf{SD}^{t}\mathbf{S}^{-1}
$$
And
$$
\mathbf{D}=\begin{bmatrix}
\lambda_{1} &  & 0 \\
 & \ddots &  \\
0 &  & \lambda_{n}
\end{bmatrix}\implies \mathbf{D}^{t}=\begin{bmatrix}
\lambda_{1}^{t} &  & 0 \\
 & \ddots &  \\
0 &  & \lambda_{n}^{t}
\end{bmatrix}
$$
