---
tags:
  - math/linear-algebra
aliases:
  - Orthogonalization
  - Orthogonalize
---
Makes a [[Basis]] [[Orthonormal]]
Order dependent
# Process
1. Normalize $\vec{v}_{1}$ to $\vec{u}_{1}=\frac{\vec{v}_{1}}{\|\vec{v}_{1}\|}$, let $r_{11}=\|\vec{v}_{1}\|\implies \vec{v}_{1}=r_{11}\vec{u}_{1}$ and $V_{1}=\text{span}\{ \vec{v}_{1} \}=\text{span}\{ \vec{u}_{1} \}$

2. Find [[Orthogonal Projection|projection]] of second [[vector]] $\vec{v}_{2}$ onto $V_{1}$, then subtract from original to get [[Orthogonality|orthogonal]] [[vector]], then scale. $\text{proj}_{V_{1}}\vec{v}_{2}=(\vec{v}_{2}\cdot\vec{u}_{1})\vec{u}_{1}\implies \vec{u}_{2}=\frac{\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}}{\|\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}\|}$. $r_{22}=\|\vec{v}_{2}-\text{proj}_{V_{1}}\vec{v}_{2}\|\implies \vec{v}_{2}=(\vec{v}_{2}\cdot\vec{u}_{1})\vec{u}_{1}+r_{22}\vec{u}_{2}$. $V_{2}=\text{span}\{ \vec{v}_{1},\vec{v}_{2} \}=\text{span}\{ \vec{u}_{1},\vec{u}_{2} \}$

3. Find [[Orthogonal Projection|projection]] of third [[vector]] $\vec{v}_{3}$ onto $V_{2}$, then subtract from original to get [[Orthogonality|orthogonal]] [[vector]], then scale. $\text{proj}_{V_{2}}\vec{v}_{3}=(\vec{v}_{3}\cdot\vec{u}_{1})\vec{u}_{1}+(\vec{v}_{3}\cdot\vec{u}_{2})\vec{u}_{2}\implies \vec{u}_{3}=\frac{\vec{v}_{3}-\text{proj}_{V_{2}}\vec{v}_{3}}{\|\vec{v}_{3}-\text{proj}_{V_{2}}\vec{v}_{3}\|}$. $r_{33}=\|\vec{v}_{3}-\text{proj}_{V_{2}}\vec{v}_{3}\|\implies \vec{v}_{3}=(\vec{v}_{3}\cdot\vec{u}_{1})\vec{u}_{1}+(\vec{v}_{3}\cdot\vec{u}_{2})\vec{u}_{2}+r_{33}\vec{u}_{3}$. $V_{2}=\text{span}\{ \vec{v}_{1},\vec{v}_{2} \}=\text{span}\{ \vec{u}_{1},\vec{u}_{2} \}$

4. Continue for all other [[Vector|vectors]], ending with $\vec{u}_{k}=\frac{\vec{u}_{k}-\text{proj}_{V_{k-1}}\vec{v}_{k}}{\|\vec{v}_{k}-\text{proj}_{V_{k-1}}\vec{v}_{k}\|}$ and $r_{kk}=\|\vec{v}_{k}-\text{proj}_{V_{k-1}}\vec{v}_{k}\|$, $\vec{v}_{k}=(\vec{v}_{k}\cdot\vec{u}_{1})\vec{u}_{1}+\cdots+(\vec{v}_{k}\cdot\vec{u}_{k-1})\vec{u}_{k-1}+r_{kk}\vec{u}_{k}$, giving $V=\text{span}\{ \vec{v}_{1},\cdots,\vec{v}_{k} \}=\text{span}\{ \vec{u}_{1},\cdots,\vec{u}_{k} \}$
In summary, iteratively subtract [[vector]] by its [[Orthogonal Projection|projection]] onto previous, then normalize
# Parallelepipeds
For step 2, the area of the parallelogram defined by $\vec{v}_{1},\vec{v}_{2}$ is $r_{11}r_{22}$
Same for step 3: parallelepiped volume $=r_{11}r_{22}r_{33}$
Giving the formula:
For a $k$-[[Dimension|dimensional]] parallelepiped determined by the [[Vector|vectors]] $\{ \vec{v}_{1},\vec{v}_{2},\cdots,\vec{v}_{k} \}$, the $k$-volume is $r_{11}r_{22}\cdots r_{kk}$
# QR Factorization
Assembling equations from [[#Process]], 
$$
\left\{\begin{align*}
\vec{v}_{1}&=r_{11}\vec{u}_{1} \\
\vec{v}_{2}&=(\vec{v}_{2}\cdot\vec{u}_{1})\vec{u}_{1}+r_{22}\vec{u}_{2}\\
\vec{v}_{3}&=(\vec{v}_{3}\cdot\vec{u}_{1})\vec{u}_{1}+(\vec{v}_{3}\cdot\vec{u}_{2})\vec{u}_{2}+r_{33}\vec{u}_{3}\\
&\vdots\\
\vec{v}_{k}&=(\vec{v}_{k}\cdot\vec{u}_{1})\vec{u}_{1}+\cdots+(\vec{v}_{k}\cdot\vec{u}_{k-1})\vec{u}_{k-1}+r_{kk}\vec{u}_{k}
\end{align*}\right\}
$$
Which then forms product of matrices:
$$
\mathbf{A}=\underbrace{\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{v}_{1} & \cdots & \vec{v}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix}}_{n\times k}=\underbrace{\begin{bmatrix}
\uparrow &  & \uparrow \\
\vec{u}_{1} & \cdots & \vec{u}_{k} \\
\downarrow &  & \downarrow
\end{bmatrix}}_{n\times k}\underbrace{\begin{bmatrix}
r_{11} & \vec{v}_{2}\cdot\vec{u}_{1} & \cdots & \vec{v}_{k}\cdot\vec{u}_{1} \\
0 & r_{22} & \cdots & \vec{v}_{k}\cdot\vec{u}_{2} \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & r_{kk}
\end{bmatrix}}_{k\times k}=\mathbf{QR}
$$

^e3abb9

