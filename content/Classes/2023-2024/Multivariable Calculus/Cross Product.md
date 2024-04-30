---
tags:
  - math
  - math/calc
  - math/geometry
  - math/linear-algebra
---
Only for [[Vector|Vectors]] in [[R3]]
![[Cross Product 2023-09-14 21.51.02.excalidraw]]
# Geometric Definition
1. $\vec{u}\times \vec{v}\perp \vec{u},\vec{v}$
2. $\|\vec{u}\times \vec{v}\|=\text{area of parallelogram determined by }\vec{u},\vec{v}$
3. Oriented by right-hand rule
$$
\vec{u}\times \vec{v}=\langle u_{2}v_{3}-u_{3}v_{2},u_{3}v_{1}-u_{1}v_{3},u_{1}v_{2}-u_{2}v_{1}\rangle
$$
Can be used to find plane from 3 points
# [[Determinant]] Definition
$$
\vec{u}\times \vec{v}=\left\langle\begin{vmatrix} u_{2}&u_{3}\\ v_{2}&v_{3}\end{vmatrix},-\begin{vmatrix} u_{1}&u_{3}\\ v_{1}&v_{3}\end{vmatrix},\begin{vmatrix} u_{1}&u_{2}\\ v_{1}&v_{2}\end{vmatrix}\right\rangle
$$
Or:
$$
\vec{u}\times \vec{v}=
\begin{vmatrix}
\vec{\imath} & \vec{\jmath} & \vec{k} \\
u_{1} & u_{2} & u_{3} \\
v_{1} & v_{2} & v_{3}
\end{vmatrix}
$$
# Algebraic Properties
1. $\vec{v}\times \vec{u}=-\vec{u}\times \vec{v}$
2. $\begin{cases}\vec{u}\times(\vec{v}+\vec{w})=\vec{u}\times \vec{v}+\vec{u}\times \vec{w} \\ (\vec{u}+\vec{v})\times \vec{w}=\vec{u}\times \vec{w}+\vec{v}\times \vec{w}\end{cases}$
3. $(t\vec{u})\times \vec{w}=t(\vec{u}\times \vec{v})=\vec{u}\times(t\vec{v})$
4. $\vec{u}\times\vec{0}=\vec{0}$
5. $\vec{u}\cdot(\vec{v}\times \vec{w})=(\vec{u}\times \vec{v})\cdot \vec{w}$ ([[triple scalar product]])
6. $\vec{u}\times(\vec{v}\times \vec{w})=(\vec{u}\cdot \vec{w})\vec{v}-(\vec{u}\cdot \vec{v})\vec{w}$ 
# Relation between 2 definitions
$$
\begin{align*}
\vec{u}\cdot(\vec{u}\times \vec{v})=(\vec{u}\times \vec{u})\cdot \vec{v}=0\checkmark \tag{property 1}\\
\vec{v}\cdot(\vec{u}\times \vec{v})=(\vec{v}\times \vec{v})\cdot \vec{u}=0\checkmark\\
A=\|\vec{u}\|\|\vec{v}\|\sin \theta \tag{property 2}\\
A^{2}=\|\vec{u}\|^{2}\|\vec{v}\|^{2}\sin^{2}\theta\\
=\|\vec{u}\|^{2}\|\vec{v}\|^{2}-(\|\vec{u}\|\|\vec{v}\|\cos\theta)^{2}\\
=\|\vec{u}\|^{2}\|\vec{v}\|^{2}-(\vec{u}\cdot \vec{v})^{2}\\
\|\vec{u}\times \vec{v}\|^{2}=(\vec{u}\times \vec{v})\cdot(\vec{u}\times \vec{v})=\vec{u}\cdot[\vec{v}\times(\vec{u}\times \vec{v})]\\
=\vec{u}\cdot[(\vec{v}\cdot \vec{v})\vec{u}-(\vec{v}\cdot \vec{u})\vec{v}]\\
=\|\vec{u}\|^{2}\|\vec{v}\|^{2}-(\vec{u}\cdot \vec{v})^{2}\\
\therefore \|\vec{u}\times \vec{v}\|^{2}=A^{2}\checkmark
\end{align*}
$$