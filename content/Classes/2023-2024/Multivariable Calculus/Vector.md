---
tags:
  - math
aliases:
  - Vectors
---
An element of a [[vector space]] that can be added and scaled
# Displacement Vector
Directed [[line]] segment (DLS)
Has a magnitude and direction
Declare two DLSs to be equivalent if they have the same increments in [[coordinate system]]
Therefore, **origin of vector does not matter**
Vector = An equivalence class of DLSs
In [[Cartesian coordinates]], $\vec v_{1}=\langle x_{1},y_{1} \rangle$ for [[R2]]
## Parallelogram Law
$$
\vec u+\vec v=\langle x_{1},y_{1} \rangle+\langle x_{2},y_{2} \rangle=\langle x_{1}+x_{2}, y_{1}+y_{2} \rangle
$$
Tip-to-tail addition
![[maxresdefault 1.jpg|400]]
([[R2]])
## Scaling
Multiply each component of vector by the amount multiplying vector by
$t\vec u=t\langle x,y \rangle = \langle tx,ty \rangle$
![[scalar-multiplication-of-a-vector-nigiara-3 1.gif|400]]
Think similar triangles ([[R2]])
## Magnitude
$\|\vec u\|=\|\langle x,y,z \rangle\|=\sqrt{x^{2}+y^{2}+z^{2}}$ ([[R3]])
# Difference Vector
The vector that goes from one point to another in a [[coordinate system]]
$\overrightarrow{PQ}$: vector from point P to point Q
$\overrightarrow{PQ}=\langle x_{2}-x_{1}, y_{2}-y_{1}, z_{2}-z_{1} \rangle$ ([[R3]])
$\overrightarrow{PQ}=\overrightarrow{0Q}-\overrightarrow{0P}$
## Magnitude
$\|\vec u\|=\|\langle x_{2}-x_{1},y_{2}-y_{1} \rangle\|=\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}$ ([[R2]])
# Properties
Commutative: $\vec u+\vec v = \vec v + \vec u$
Additive identity: $\vec u+ \vec 0 = \vec u$
Multiplicative identity: $1\vec u=\vec u$
Distributive: $t(\vec u+\vec v)=t\vec u+t\vec v$ or $(s+t)\vec u=s\vec u+t\vec u$
Associative multiplication: $(st)\vec u=s(t\vec u)=t(s\vec u)$
Associative addition: $(\vec u+\vec v)+\vec w = \vec u+(\vec v+\vec w)$
Additive inverse: $\vec u+(-\vec u)=\vec 0$
# Coordinate-Free Proofs
Proofs without coordinates (astounding I know) for geometry
This works because of the freedom to move vectors
If something is true regardless of [[Coordinate System|coordinates]], it should be able to be proven without [[Coordinate System|coordinates]]
Eg. ![[Pasted image 20230907212433.png|300]]
# Relationships
Parallel: $\vec v=t\vec u$
# Unit Vector
A vector with [[#magnitude]] 1
$\|\hat u\|=1$ *note: denoted by hat ( $\hat{\ }$ )*
**Depends on [[coordinate system]]/units**
Can be used to define non-unit vectors
In [[R2]]:
$\langle 0, 1 \rangle=\hat{\jmath}, \langle 1, 0 \rangle=\hat{\imath}$
$\vec u=\langle x, y \rangle=x\hat\imath+y\hat\jmath$
For [[R3]]: $\langle 0, 1, 0 \rangle=\hat\jmath, \langle 1, 0, 0 \rangle=\hat\imath, \langle 0, 0, 1 \rangle=\hat k$
## Normalize a vector
$$\frac{\vec x}{\|\vec x\|}=\hat u$$