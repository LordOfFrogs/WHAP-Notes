---
tags:
  - math/linear-algebra
aliases:
  - Quadratic Forms
---
A homogeneous polynomial of degree 2
A polynomial function $q(\vec{x})$ where $q(t\vec{x})=t^{2}\vec{x}$
Can be expressed as $\vec{x}^{\text{T}}\mathbf{A}\vec{x}$ where $\mathbf{A}$ is a symmetric $n\times n$ [[matrix]]
# Categorization
For [[Eigenvalue|eigenvalues]] of $\mathbf{A}$:
- Positive definite if all [[Eigenvalue|eigenvalues]] are strictly positive
- Negative definite if all [[Eigenvalue|eigenvalues]] are strictly negative
- Positive semi-definite if all [[Eigenvalue|eigenvalues]] are greater than or equal to 0
- Negative semi-definite if all [[Eigenvalue|eigenvalues]] are less than or equal to 0
- Indefinite if [[Eigenvalue|eigenvalues]] are of mixed signs
## Examples in [[R3]]
- Definite: [[paraboloid]]
- Semi-definite: parabola (constant along one direction)
- Indefinite: [[saddle]]