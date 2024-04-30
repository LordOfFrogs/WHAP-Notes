---
tags:
  - math/linear-algebra
aliases:
  - Jordan Normal Form
---
For an $n\times n$ [[matrix]] with real [[Eigenvalue|eigenvalues]]:
Arranging from smallest to largest algebraic multiplicity, each block (called a **Jordan Block**) for an [[eigenvalue]] $\lambda_{k}$ is a square [[matrix]] with $AM(\lambda_{k})$ rows and columns, with $AM(\lambda_{k})-GM(\lambda_{k})$ 1s along the super-diagonal starting from the bottom right
# Example
For a 10x10 [[matrix]] with nonrepeating [[Eigenvalue|eigenvalues]] $\lambda_{1},\lambda_{2},\lambda_{3}$; $\lambda_{4}$ with AM 3, GM 1; and $\lambda_{5}$ with AM 4 and GM 2, then
$$
\mathbf{B}=\left[\begin{array}{c:c:c:ccc:cccc}
\lambda_{1} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hdashline 0 & \lambda_{2} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hdashline 0 & 0 & \lambda_{3} & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hdashline 0 & 0 & 0 & \lambda_{4} & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & \lambda_{4} & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & \lambda_{4} & 0 & 0 & 0 & 0 \\
\hdashline 0 & 0 & 0 & 0 & 0 & 0 & \lambda_{5} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & \lambda_{5} & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & \lambda_{5} & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & \lambda_{5}
\end{array}\right]
$$
# Powers for 2x2
$$
\mathbf{B}^{t}=\begin{bmatrix}
\lambda^{t} & t\lambda^{t-1} \\
0 & \lambda^{t}
\end{bmatrix}
$$ 