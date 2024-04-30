---
tags:
  - math/linear-algebra
aliases:
  - Bases
---
For a [[subspace]] $V$ of [[Rn]], a collection of [[Vector|vectors]] $\{ \vec{v}_{1}, \vec{v}_{2},\dots,\vec{v}_{k} \}\in V$ is called a basis of $V$ if $\text{Span}\{ \vec{v}_{1}, \vec{v}_{2},\dots,\vec{v}_{k} \}=V$[^1] and $\{ \vec{v}_{1}, \vec{v}_{2},\dots,\vec{v}_{k} \}$ are [[Linear Independence|Linearly Independent]]

Minimal spanning set
There can be many different bases for a given [[subspace]]
# [[Linear Transformation]] in Alternate Basis
Typically, a [[matrix]] $\mathbf{A}$ of [[Linear Transformation]] $T:\mathbb{R}^{n}\to\mathbb{R}^{m}$ acts on [[Standard Basis Vectors]] $\mathcal{E}=\{ \vec{e}_{1},\cdots,\vec{e}_{n} \}$ where each column is the [[coordinates]] of each [[Standard Basis Vectors|standard basis vector]] relative to the standard basis.
$$
\mathbf{A}=\begin{bmatrix}
\uparrow &  & \uparrow \\
[\mathbf{A}\vec{e}_{1}]_{\mathcal{E}} & \cdots & [\mathbf{A}\vec{e}_{n}]_{\mathcal{E}} \\
\downarrow &  & \downarrow
\end{bmatrix}
$$
For alternate basis $\mathcal{B}=\{ \vec{v}_{1},\cdots,\vec{v}_{n} \}$:
$$
[T]_{\mathcal{B}}=\begin{bmatrix}
\uparrow &  & \uparrow \\
[T(\vec{v}_{1})]_{\mathcal{B}} & \cdots & [T(\vec{v}_{n})]_{\mathcal{B}} \\
\downarrow &  & \downarrow
\end{bmatrix}
$$
All of this can be related as
$$
\begin{array}{ccc}
\{ \mathbb{R}^{n},\mathcal{E} \} & \overset{\mathbf{A}}\longrightarrow & \{ \mathbb{R}^{n},\mathcal{E} \} \\
\mathbf{S}\uparrow\downarrow \mathbf{S}^{-1} &  & \mathbf{S}\uparrow\downarrow\mathbf{S}^{-1} \\
\{ \mathbb{R}^{n},\mathcal{B} \} & \overset{[\mathbf{A}]_{\mathcal{B}}}\longrightarrow & \{ \mathbb{R}^{n},\mathcal{B} \}
\end{array}
$$
$$
[\mathbf{A}]_{\mathcal{B}}=\mathbf{S}^{-1}\mathbf{AS},\quad \mathbf{A}=\mathbf{S}[\mathbf{A}]_{\mathcal{B}}\mathbf{S}^{-1}
$$

[^1]: [[Span]]