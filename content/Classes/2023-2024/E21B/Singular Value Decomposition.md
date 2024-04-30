---
tags:
  - math/linear-algebra
aliases:
  - Singular Value
  - Singular Values
  - SVD
---
Given an $m\times n$ [[matrix]] $\mathbf{A}$, its possible to find an [[orthonormal]] [[basis]] $\mathcal{B}=\{ \vec{u}_{1},\cdots,\vec{u}_{n} \}$ for the domain ([[Rn]]) as well as an [[orthonormal]] [[basis]] $\mathcal{C}=\{ \vec{w}_{1},\cdots,\vec{w}_{m} \}$ for the codomain ($\mathbb{R}^{m}$) such that the [[Image|images]] $\{ \mathbf{A}\vec{u}_{1},\cdots,\mathbf{A}\vec{u}_{n} \}$ are [[Orthogonality|orthogonal]] (some may be $\vec{0}$) and are scalar multiples of $\{ \vec{w}_{1},\cdots,\vec{w}_{m} \}$
The scalars $\|\mathbf{A}\vec{u}_{i}\|=\sigma_{i}=\sqrt{\lambda_{i}}$ are called the singular values of $\mathbf{A}$
$$
\mathbf{A}=\mathbf{Q\Sigma P}^{\text{T}}
$$
Where
$$
\mathbf{P}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{u}_{1} & \cdots & \vec{u}_{n} \\
\downarrow &  & \downarrow
\end{bmatrix},\mathbf{Q}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{w}_{1} & \cdots & \vec{w}_{m} \\
\downarrow &  & \downarrow
\end{bmatrix},\mathbf{\Sigma}=\begin{bmatrix}
\sigma_{1} & \cdots \\
\vdots & \ddots & \vdots \\
 & \cdots & \sigma_{n}
\end{bmatrix}
$$
$$
\begin{array}{ccc}
\{ \mathbb{R}^{n},\mathcal{E}_{n} \} & \overset{\mathbf{A}}\longrightarrow & \{ \mathbb{R}^{m},\mathcal{E}_{m} \} \\
\mathbf{P}\uparrow &  & \mathbf{Q}\uparrow \\
\{ \mathbb{R}^{n},\mathcal{B} \} & \overset{\mathbf{\Sigma}}\longrightarrow & \{ \mathbb{R}^{m},\mathcal{C} \}
\end{array}
$$
Both $\mathbf{P}$ and $\mathbf{Q}$ are rotation [[Matrix|matrices]]
$\mathcal{B}$ is found by finding the [[orthonormal]] [[eigenbasis]] of $\mathbf{A}^{\text{T}}\mathbf{A}$, along with the [[Eigenvalue|eigenvalues]]
$\mathcal{C}$ is found by arranging $\{ \mathbf{A}\vec{u}_{1},\cdots,\mathbf{A}\vec{u}_{n}\}$ with $\vec{0}$s at the end, with the [[rank]] of $\mathbf{A}$ as $k$, giving $\{ \mathbf{A}\vec{u}_{1},\cdots,\mathbf{A}\vec{u}_{k} \}=\{ \sigma_{1}\vec{w}_{1},\cdots,\sigma_{k}\vec{w}_{k} \}$, which then normalizes to $\{ \vec{w}_{1}, \cdots,\vec{w}_{k} \}$, then completed by finding [[orthonormal]] [[basis]] for [[Orthogonal Complement|complement]] of the [[image]] of $\mathbf{A}$