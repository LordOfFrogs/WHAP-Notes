---
tags:
  - math
  - math/linear-algebra
  - math/geometry
aliases:
  - Dot Products
---
# [[Vector|Vectors]] in [[Rn]]
$$
\begin{align*}
\vec{u},\vec{v} \in \mathbb{R}^{n}\\
\vec{u}=\langle u_{1},u_{2},\cdots, u_{n} \rangle, \vec{v}=\langle v_{1},v_{2},\cdots, v_{n} \rangle\\
\vec{u}\cdot \vec{v}=u_{1}v_{1}+u_{2}v_{2}+\cdots+u_{n}v_{n}\in \mathbb{R}
\end{align*}
$$
$$
\begin{align*}
\vec{u}\cdot \vec{u}=u_{1}^{2}+u_{2}^{2}+\cdots+u_{n}^{2}=\|\vec{u}\|^{2}\\
\implies \|\vec{u}\|=\sqrt{\vec{u}\cdot \vec{u}}
\end{align*}
$$
## Algebraic Properties
$$
\begin{align*}
\vec{u},\vec{v},\vec{w}\in \mathbb{R}^{n}, s,t\in \mathbb{R}\\
\vec{v}\cdot \vec{u}=\vec{u}\cdot \vec{v} \tag{commutative}\\
\vec{u}\cdot(\vec{v}+\vec{w})=\vec{u}\cdot\vec{v}+\vec{u}\cdot\vec{w} \tag{distributive}\\
(t\vec{u})\cdot \vec{v}=t(\vec{u}\cdot \vec{v})=\vec{u}\cdot(t\vec{v}) \tag{associative}\\
\vec{u}\cdot \vec{u}=\|\vec{u}\|^{2}\geq0\ (=0,\vec{u}=\vec{0})
\end{align*}
$$
## Measuring Angles
Use law of cosines:
$c^{2}=a^{2}+b^{2}+2ab\cos C$
Vectorize:
$$
\begin{align*}
\|\vec{u}-\vec{v}\|^{2}=\|\vec{u}\|^{2}+\|\vec{v}\|^{2}-2\|\vec{u}\|\|\vec{v}\|\cos \theta\\
= (\vec{u}-\vec{v})\cdot(\vec{u}-\vec{v})\\
=\vec{u}\cdot \vec{u}-\vec{u}\cdot \vec{v}-\vec{v}\cdot \vec{u}+\vec{v}\cdot \vec{v}\\
=\|\vec{u}\|^{2}+\|\vec{v}\|^{2}-2\vec{u}\cdot \vec{v}\\
\implies \fbox{$\vec{u}\cdot \vec{v}=\|\vec{u}\|\|\vec{v}\|\cos \theta$}
\end{align*}
$$
Assuming [[Vector|vectors]] are non-zero:
$$
\begin{align*}
|\theta| < 90 \Longleftrightarrow \cos \theta>0 \Longleftrightarrow \vec{u}\cdot \vec{v}>0\\
|\theta|=90 \Longleftrightarrow \cos \theta = 0 \Longleftrightarrow \vec{u}\cdot \vec{v}=0\\
|\theta| > 90 \Longleftrightarrow \cos \theta<0 \Longleftrightarrow \vec{u}\cdot \vec{v}<0
\end{align*}
$$
## Defining Equations for [[Line|Lines]] and [[Plane|Planes]]
### [[Line|Lines]] $\in$ [[R2]]
Given point $(x_{0},y_{0})$ and normal [[vector]] ($\vec{n}=\langle A,B \rangle$):
$$
\begin{align*}
(x,y) \text{ on line} \Longleftrightarrow (\vec{x}-\vec{x}_{0})\perp \vec{n}\\
\Longleftrightarrow \vec{n}\cdot(\vec{x}-\vec{x}_{0})=0\\
\implies A(x-x_0)+B(y-y_0)=0\\
\implies Ax+By=Ax_0+By_0=C\\
\therefore Ax+By=C \implies \vec{n}=\langle A,B \rangle\\
\text{also, } y-y_{0}=-\frac{A}{B}(x-x_{0})
\end{align*}
$$
### [[Plane|Planes]] $\in$ [[R3]]
Given point $(x_{0},y_{0},z_{0})$ and normal [[vector]] $\vec{n}=\langle A,B,C \rangle$:
$$
\begin{align*}
(x,y,z) \text{ in plane}\Longleftrightarrow \vec{n}\perp(\vec{x}-\vec{x}_{0})\\
\Longleftrightarrow \vec{n}\cdot(\vec{x}-\vec{x}_{0})\\
\implies A(x-x_0)+B(y-y_0)+C(z-z_0)=0\\
\implies Ax+By+Cz=Ax_{0}+By_{0}+Cz_{0}=D
\end{align*}
$$
Alternatively, use [[cross product]]