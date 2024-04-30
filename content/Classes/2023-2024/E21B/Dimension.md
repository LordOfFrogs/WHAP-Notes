---
tags:
  - math/linear-algebra
aliases:
  - Dimensions
  - Dimensionality
---
Given two [[Basis|Bases]] for a [[Subspace]] $V$ of [[Rn]], the number of [[Vector|Vectors]] in both [[Basis|Bases]] must be the same, giving uniquely determined integer called the dimension
# Proof
For [[Subspace]] $V\subseteq\mathbb{R}^{n}$ with 2 [[Basis|Bases]] $\{ \vec{v}_{1},\cdots,\vec{v}_{p} \}$ and $\{ \vec{w}_{1},\cdots,\vec{w}_{q} \}$
Because $\vec{w}$ [[Basis]] [[Span|spans]] $V$, any [[vector]] of the first [[Basis]] can be expressed as a linear combination of $\vec{w}$'s:
$$
\begin{array}{c}
\vec{v}_{1}=c_{11}\vec{w}_{1}+\cdots+c_{1q}\vec{w}_{q}\\
\vdots\\
\vec{v}_{p}=c_{p1}\vec{w}_{1}+\cdots+c_{pq}\vec{w}_{q}
\end{array}
$$
Which can then be expressed as [[Matrix|Matrices]]:
$$
\underbrace{\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{w}_{1} & \cdots & \vec{w}_{q} \\
\downarrow &  & \downarrow
\end{bmatrix}}_{\mathbf{M}}\underbrace{\begin{bmatrix}
c_{11} & \cdots & c_{p1} \\
\vdots & \ddots & \vdots \\
c_{1q} & \cdots & c_{pq}
\end{bmatrix}}_{\mathbf{A}}=\underbrace{\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{p} \\
\downarrow &  & \downarrow
\end{bmatrix}}_{\mathbf{N}}
$$
Which then follows $\ker(\mathbf{A})\subseteq\ker(\mathbf{N})$[^1], but because $\mathbf{N}$'s columns form a [[Basis]], they are [[Linear Independence|Linearly Independent]], which means $\ker(\mathbf{N})=\{ \vec{0} \}$, which then implies $\ker(\mathbf{A})=\{ \vec{0} \}$
This also implies $\text{rank}(\mathbf{A})=p$, and [[Rank]] can never exceed the number of rows or columns, so $\text{rank}(\mathbf{A})=p\leq\min\{ p,q \}\implies p\leq q$

This argument can be made with the [[Basis|Bases]] swapped, giving $q\leq p$
Therefore $p=q$
[^1]: [[Kernel]]