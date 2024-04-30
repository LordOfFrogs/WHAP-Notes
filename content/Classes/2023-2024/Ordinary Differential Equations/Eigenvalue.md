---
tags:
  - math/linear-algebra
  - math/calc
aliases:
  - Eigenvalues
  - Characteristic Value
  - Characteristic Values
---
For an [[eigenvector]] such that $\mathbf{A}\vec{x}=\lambda \vec{x}$, $\lambda$ is the eigenvalue
# Algebraic Multiplicity
Multiplicity as a root of the characteristic polynomial $\det(\lambda\mathbf{I}-\mathbf{A})=0$ [^1]
# Geometric Multiplicity
$$
\dim[\ker(\lambda\mathbf{I}-\mathbf{A})]
$$
[^2]
The number of [[Linear Independence|linearly independent]] [[Eigenvector|eigenvectors]] associated with the eigenvalue
The [[dimension]] of the corresponding [[eigenspace]]
# [[Similar|Similarity]]
If two [[Matrix|matrices]] are [[similar]], they have the same characteristic polynomial and therefore the same eigenvalues with the same [[#Algebraic Multiplicity|algebraic multiplicities]] and [[#Geometric Multiplicity|geometric multiplicities]]
## Proof
$$
\begin{align*}
p_{\mathbf{B}}(\lambda)=\det(\lambda\mathbf{I}-\mathbf{B})=\det(\lambda\mathbf{I}-\mathbf{S}^{-1}\mathbf{AS})=\det(\mathbf{S}^{-1}\lambda\mathbf{I}\mathbf{S}-\mathbf{S}^{-1}\mathbf{AS})\\
=\det[\mathbf{S}^{-1}(\lambda\mathbf{I}-\mathbf{A})\mathbf{S}]=\det(\mathbf{S}^{-1})\det(\lambda\mathbf{I}-\mathbf{A})\det\mathbf{S}=\det(\lambda\mathbf{I}-\mathbf{A})=p_\mathbf{A}(\lambda)
\end{align*}
$$
So, same algebraic multiplicities
$$
\begin{align*}
\lambda\mathbf{I}-\mathbf{B}=\lambda\mathbf{I}-\mathbf{S}^{-1}\mathbf{AS}=\mathbf{S}^{-1}\lambda\mathbf{I}\mathbf{S}-\mathbf{S}^{-1}\mathbf{AS}\\
\vec{v}\in\ker(\lambda\mathbf{I}-\mathbf{B})\implies(\lambda\mathbf{I}-\mathbf{B})\vec{v}=\vec{0}\\
\implies \mathbf{S}^{-1}(\lambda\mathbf{I}-\mathbf{A})\mathbf{S}\vec{v}=\vec{0}\implies(\lambda\mathbf{I}-\mathbf{A})\mathbf{S}\vec{v}=\vec{0}\implies\mathbf{S}\vec{v}\in\ker(\lambda\mathbf{I}-\mathbf{A})
\end{align*}
$$
Similar process in reverse to get $\vec{w}\in\ker(\lambda\mathbf{I}-\mathbf{A})\implies \mathbf{S}^{-1}\vec{w}\in\ker(\lambda\mathbf{I}-\mathbf{B})$
Because $\mathbf{S}$ [[Isomorphism|isomorphic]], the [[Subspace|subspaces]] must have same [[dimension]] and therefore [[#Geometric Multiplicity|geometric multiplicity]] is the same
# [[Trace]] and [[Determinant]], and Algebraic Invariants
For an $n\times n$ [[matrix]] $\mathbf{A}$ with eigenvalues $\{ \lambda_{1},\cdots,\lambda_{n} \}$ (including repeated)
$$
\text{tr}\,\mathbf{A}=\lambda_{1}+\cdots+\lambda_{n},\qquad \det\mathbf{A}=\lambda_{1}\cdots\lambda_{n}
$$
Even if not [[Diagonalization|diagonalizable]]
# Characteristic Polynomial
$$
p(\lambda)=\det(\mathbf{I}\lambda-\mathbf{A})=(-1)^{n}\lambda^{n}+(-1)^{n-1}(\text{tr}\,\mathbf{A})\lambda^{n-1}+\cdots+\det\mathbf{A}
$$
# Complex Eigenvalues
Implies that there is some part of the [[Linear Transformation]] with rotation-dilation
Occur in conjugate pairs

[^1]: [[Determinant]]
[^2]: [[Dimension]], [[Kernel]]