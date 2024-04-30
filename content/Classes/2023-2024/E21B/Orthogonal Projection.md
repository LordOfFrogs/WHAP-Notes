---
tags:
  - math
  - math/geometry
aliases:
  - Projection
---
# Onto a [[Vector]]
![[Dot Product 2023-09-14 20.46.45.excalidraw|400]]
$\mathscr{l}$: scalar projection of v in the direction of u / component of v in u-direction
$$
\begin{align*}
\text{Comp}_{\vec{u}}\vec{v}=\mathscr{l}=\|\vec{v}\|\cos \theta=\frac{\vec{u}\cdot \vec{v}}{\|\vec{u}\|}=\vec{v}\cdot \hat{u}\\
\text{Proj}_{\vec{u}}\vec{v}=\left(\frac{\vec{u}}{\|\vec{u}\|}\right)\left( \vec{v}\cdot \frac{\vec{u}}{\|\vec{u}\|} \right)=\left(\frac{\vec{u}\cdot \vec{v}}{\|\vec{u}\|^{2}}\right)\vec{u}\\
\|\vec{u}\|=1 \implies \text{Proj}_\vec{u}\vec{v}=(\vec{v}\cdot\vec{u})\vec{u}
\end{align*}
$$
(using [[Dot Product]])
# Reflection
$$
\text{Ref}_{\vec{u}}\vec{x}=\vec{x}+2(\vec{p}-\vec{x})=2\vec{p}-\vec{x}=2\text{Proj}_{\vec{u}}\vec{x}-\vec{x}=2\mathbf{A}\vec{x}-\mathbf{I}\vec{x}=(2\mathbf{A}-\mathbf{I})\vec{x}
$$
Where $\vec{p}=\text{Proj}_{\vec{u}}\vec{x}$ and $\mathbf{I}$ is the [[Matrix#Identity|identity matrix]]
# Onto a [[Vector Space]]
Given [[Subspace]] $V\subseteq$ [[Rn]], the [[Orthogonality|orthogonal]] projection of a [[vector]] $\vec{x}$ onto $V$ is the unique [[vector]]
$$
\vec{x}-\text{Proj}_{V}\vec{x}\in V^{\perp}
$$[^1]
Suppose [[orthonormal]] [[basis]] $\mathcal{B}=\{ \vec{u}_{1},\cdots,\vec{u}_{k} \}$, then the [[coordinates]] are just the scalar projections in the direction of respective unit [[Vector|vectors]]
$$
\text{Proj}_{V}\vec{x}=(\vec{x}\cdot\vec{u}_{1})\vec{u}_{1}+(\vec{x}\cdot\vec{u}_{2})\vec{u}_{2}+\cdots+(\vec{x}\cdot\vec{u}_{k})\vec{u}_{k}
$$
## [[Matrix]]
$$
\begin{align*}
\text{Proj}_{V}\vec{x}=(\vec{x}\cdot\vec{u}_{1})\vec{u}_{1}+(\vec{x}\cdot\vec{u}_{2})\vec{u}_{2}+\cdots+(\vec{x}\cdot\vec{u}_{k})\vec{u}_{k}\\
=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{u}_{1} & \cdots & \vec{u}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix}\begin{bmatrix}
\leftarrow & \vec{u}_{1} & \rightarrow \\
 & \vdots & \\
\leftarrow & \vec{u}_{k} & \rightarrow
\end{bmatrix}\vec{x}=\mathbf{BB}^{\text{T}}\vec{x}
\end{align*}
$$
Where $\mathbf{B}$ is the $k\times n$ [[matrix]] with [[Orthonormal]] columns given by the [[orthonormal]] [[basis]]
### Reflection
$$
2\mathbf{BB}^{\text{T}}-\mathbf{I}
$$
## Special Case: [[Subspace]] is [[Rn]]
$$
\begin{align*}
\mathcal{B}=\{ \vec{u}_{1},\cdots,\vec{u}_{n} \}\\
\mathbf{B}=\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{u}_{1} & \cdots & \vec{u}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix}\\
\text{Proj}_{V}=\mathbf{BB}^{\text{T}}=\mathbf{I}\\
\implies \mathbf{B}^{-1}=\mathbf{B}^{\text{T}}
\end{align*}
$$
$\mathbf{B}$ called an [[Orthogonality|Orthogonal]] [[Matrix]]
## Without an [[Orthonormal]] [[Basis]]
For *any* [[basis]] of [[subspace]] $V$, and [[matrix]] $\mathbf{A}$ with columns as the [[basis]]
$$
\text{Proj}_{V}\vec{b}=\mathbf{A}\vec{x}^{*}=\mathbf{A}(\mathbf{A}^{\text{T}}\mathbf{A})^{-1}\mathbf{A}^{\text{T}}\vec{b}
$$

[^1]: [[Orthogonal Complement]]