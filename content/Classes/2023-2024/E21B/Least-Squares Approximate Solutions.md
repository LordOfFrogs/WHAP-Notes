---
tags:
  - math/linear-algebra
aliases:
  - Least-Squares Approximate Solution
  - Least-Squares Solution
---
Used to solve inconsistent [[system of linear equations]]
Seek $\vec{x}^{*}$ such that $\mathbf{A}\vec{x}^{*}$ is as close to [[subspace]] $\text{im}\,\mathbf{A}=V$ as possible
$$
\begin{align*}
\mathbf{A}\vec{x}^{*}=\text{proj}_{V}\vec{b}\\
\implies \vec{b}-\mathbf{A}\vec{x}^{*}\in(\text{im}\,\mathbf{A})^{\perp}=V^{\perp}\\
\implies \vec{b}-\mathbf{A}\vec{x}^{*}\in\ker \mathbf{A}^{\text{T}}\\
\implies \mathbf{A}^{\text{T}}(\vec{b}-\mathbf{A}\vec{x}^{*})=\vec{0}\\
\implies \boxed{ \mathbf{A}^{\text{T}}\mathbf{A}\vec{x}^{*}=\mathbf{A}^{\text{T}}\vec{b} }
\end{align*}
$$
Known as the normal equation(s)
Alternatively, multiply both sides of original [[System of Linear Equations|system]] by [[transpose]]:
$$
\mathbf{A}^{\text{T}}\mathbf{A}\vec{x}=\mathbf{A}^{\text{T}}\vec{b}
$$
Which will always be consistent
If $\ker(\mathbf{A}^{\text{T}}\mathbf{A})=\ker\mathbf{A}=\{ \vec{0} \},\mathbf{A}^{\text{T}}\mathbf{A}$ is invertible and there is a unique least-squares solution $\vec{x}^{*}=(\mathbf{A}^{\text{T}}\mathbf{A})^{-1}\mathbf{A}^{\text{T}}\vec{b}$