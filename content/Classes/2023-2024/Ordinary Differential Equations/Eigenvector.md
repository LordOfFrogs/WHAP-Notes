---
tags:
  - math/linear-algebra
  - math/calc
aliases:
  - Eigenvectors
  - Characteristic Vector
  - Characteristic Vectors
---
Given $n\times n$ [[matrix]] $\mathbf{A}$, a [[vector]] $\vec{x}$ such that $\mathbf{A}\vec{x}=\lambda \vec{x}$ is called an eigenvector or characteristic [[vector]] of $\mathbf{A}$, where corresponding scalar $\lambda$ is called its characteristic value or [[eigenvalue]]

Any scalar multiple of an eigenvector or linear combination of eigenvectors is also an eigenvector (closure of [[eigenspace]])
Eigenvectors corresponding to distinct [[Eigenvalue|eigenvalues]] are [[Linear Independence|linearly independent]]
# Finding Eigenvector
Write equation as
$$
\mathbf{A}\vec{x}=\lambda\mathbf{I}\vec{x}
$$
Rearrange to be
$$
(\lambda\mathbf{I}-\mathbf{A})\vec{x}=\vec{0}
$$
Which means that $\vec{x}$ must be in the [[kernel]] of [[matrix]] $\lambda\mathbf{I}-\mathbf{A}$
0 [[vector]] solves, so need different solution
Nontrivial solutions if [[matrix]] is not invertible, so
$$
p_\mathbf{A}(\lambda)=\det(\lambda\mathbf{I}-\mathbf{A})=0
$$
Where $p_\mathbf{A}(\lambda)$ is called the **characteristic polynomial**
Roots of the polynomial are [[Eigenvalue|eigenvalues]]
# Generalized Eigenvectors
When algebraic multiplicity $k$ of [[eigenvalue]] $\lambda$ of $\mathbf{A}$ is greater than 1, it is usually not possible to find $k$ [[Linear Independence|linearly independent]] corresponding eigenvectors
Meaning, geometric multiplicity (# of independent eigenvectors) is less than algebraic multiplicity
## Multiplicity 2
For [[Eigenvalue]] $\lambda$ of algebraic multiplicity 2 such that $\mathbf{A}\vec{v}_{1}=\lambda\vec{v}_{1}$, can find second [[Vector]] $\vec{v}_{2}$ where
$$
\mathbf{A}\vec{v}_{2}=\vec{v}_{1}+\lambda\vec{v}_{2}
$$
Because
$$
\begin{align*}
(\lambda\mathbf{I}-\mathbf{A})\vec{v}_{1}=\vec{0},(\lambda\mathbf{I}-\mathbf{A})\vec{v}_{2}=-\vec{v}_{1}\\
\implies (\lambda\mathbf{I}-\mathbf{A})^{2}\vec{v}_{2}=-(\lambda\mathbf{I}-\mathbf{A})\vec{v}_{1}=\vec{0}\\
\therefore \vec{v}_{1}\in\ker(\lambda\mathbf{I}-\mathbf{A})\implies \vec{v}_{2}\in\ker(\lambda\mathbf{I}-\mathbf{A})^{2}
\end{align*}
$$
## Multiplicity 3
Same as [[#Multiplicity 2]], but also
$$
\begin{align*}
\vec{v}_{3}\in\ker(\lambda\mathbf{I}-\mathbf{A})^{3},\mathbf{A}\vec{v}_{3}=\vec{v}_{2}+\lambda\vec{v}_{3}
\end{align*}
$$
## Generalization
Process will always yield $k$ [[Linear Independence|linearly independent]] [[Vector|vectors]] corresponding to [[eigenvalue]] $\lambda$, with first few being actual eigenvectors
If the [[Eigenvalue|Eigenvalues]] are all real, forms [[basis]] $\mathcal{B}=\{ \vec{v}_{1},\cdots,\vec{v}_{n} \}$
Creating change-of-[[basis]] [[matrix]] and applying, gives [[Jordan Canonical Form]]