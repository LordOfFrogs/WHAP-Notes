---
tags:
  - math/linear-algebra
---
# Real
A real $n\times n$ [[matrix]] $\mathbf{A}$ is [[Diagonalization#Orthogonal Diagonalization|orthogonally diagonalizable]] if and only if $\mathbf{A}$ is symmetric
Shows that the [[matrix]] for [[Orthogonal Projection|projection]] and [[Orthogonal Projection#Reflection|reflection]] is [[Diagonalization#Orthogonal Diagonalization|orthogonally diagonalizable]]
## Proof
### Forward
The change-of-[[basis]] [[matrix]] $\mathbf{S}$ is [[Orthogonal Transformation|orthogonal]], so $\mathbf{S}^{-1}=\mathbf{S}^{\text{T}}$
Since $\mathbf{S}^{-1}\mathbf{AS}=\mathbf{S}^{\text{T}}\mathbf{AS}=\mathbf{D}$, $\mathbf{A}=\mathbf{SDS}^{\text{T}}$, so $\mathbf{A}^{\text{T}}=(\mathbf{SDS}^{\text{T}})^{\text{T}}=\mathbf{SD}^{\text{T}}\mathbf{S}^{\text{T}}=\mathbf{SDS}^{\text{T}}=\mathbf{A}$, so $\mathbf{A}$ is symmetric
## Backward
### a) If $\mathbf{A}$ is symmetric, then all [[Eigenvalue|eigenvalues]] must be real
Suppose [[eigenvalue]] $\lambda=a+ib$ with [[eigenvector]] $\vec{v}=\vec{x}+i\vec{y}$
Therefore also $\bar{\lambda}=a-ib,\hat{\vec{v}}=\vec{x}-i\vec{y}$
$$
(\mathbf{A}\vec{v})\cdot \hat{\vec{v}}=(\lambda\vec{v})\cdot\hat{\vec{v}}=\lambda(\vec{x}+i\vec{y})\cdot(\vec{x}-i\vec{y})=\lambda(\|\vec{x}\|^{2}+\|\vec{y}\|^{2})
$$
But
$$
\begin{align*}
(\mathbf{A}\vec{v})\cdot\hat{\vec{v}}=\hat{\vec{v}}^{\text{T}}\mathbf{A}\vec{v}=(\hat{\vec{v}}^{\text{T}}\mathbf{A}\vec{v})^{\text{T}}=\vec{v}^{\text{T}}\mathbf{A}^{\text{T}}\hat{\vec{v}}=\vec{v}^{\text{T}}\mathbf{A}\hat{\vec{v}}=(\mathbf{A}\hat{\vec{v}})\cdot\vec{v}=(\bar{\lambda}\hat{\vec{v}})\cdot\vec{v}=\bar{\lambda}(\|\vec{x}\|^{2}+\|\vec{y}\|^{2})\\
\implies (\lambda-\hat{\lambda})(\|\vec{x}\|^{2}+\|\vec{y}\|^{2})=0\implies \bar{\lambda}=\lambda
\end{align*}
$$
So $\lambda$ must be real
### b) Distinct [[Eigenvalue|Eigenvalues]]
$$
\begin{align*}
(\mathbf{A}\vec{v}_{1})\cdot\vec{v}_{2}=\vec{v}_{2}^{\text{T}}\mathbf{A}\vec{v}_{1}=(\lambda_{1}\vec{v}_{1})\cdot\vec{v}_{2}=\lambda_{1}(\vec{v}_{1}\cdot\vec{v}_{2})\\
=(\vec{v}_{2}^{\text{T}}\mathbf{A}\vec{v}_{1})^{\text{T}}=\vec{v}_{1}^{\text{T}}\mathbf{A}^{\text{T}}\vec{v}_{2}=\vec{v}_{1}^{\text{T}}\mathbf{A}\vec{v}_{2}=\mathbf{A}\vec{v}_{2}\cdot\vec{v}_{1}=\lambda_{2}\vec{v}_{2}\cdot\vec{v}_{1}=\lambda_{2}(\vec{v}_{1}\cdot\vec{v}_{2})\\
\implies (\lambda_{1}-\lambda_{2})(\vec{v}_{1}\cdot\vec{v}_{2})=0\implies \vec{v}_{1}\cdot\vec{v}_{2}=0
\end{align*}
$$
So the [[Eigenvector|eigenvectors]] are [[Orthogonality|orthogonal]], which can then be normalized to get [[orthonormal]] [[Eigenvector|eigenvectors]]
### c) Repeated [[Eigenvalue|Eigenvalues]]
See [these notes](http://math.rwinters.com/linearalgebra/Lecture11.pdf)