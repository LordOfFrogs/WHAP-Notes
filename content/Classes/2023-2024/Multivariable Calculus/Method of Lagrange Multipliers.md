---
tags:
  - math/calc
---
For a function $f(x_{1},x_{2},\cdots,x_{n})$ subject to constraint $g(x_{1},x_{2},\cdots,x_{n})=c$,
$$
\begin{Bmatrix}
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g } \\
g(x_{1},x_{2}\cdots,x_{n})=c
\end{Bmatrix}
$$
Where $\lambda$ is known as the Lagrange Multiplier
# Derivation
## Scenario A for [[R2]]
Find extrema of function $f(x,y)$ subject to constraint $g(x,y)=c$
Imagine moving along constraint as approach maximum value and then head toward lower values, glance off a level set tangentially
[[Gradient]] $\overrightarrow{\nabla f }$ when nonzero is [[Orthogonality|perpendicular]] to level sets
The constraint is level set of g, so $\overrightarrow{\nabla g }$ must be [[Orthogonality|perpendicular]] to the constraint curve, so, when maximum occurs, $\overrightarrow{\nabla f }\parallel\overrightarrow{\nabla g }$
Therefore, $\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }$ where $\lambda$ is the Lagrange Multiplier
Gives 2 equations $f_{x}=\lambda g_{x},f_{y}=\lambda g_{y}$
## Scenario B for [[R3]]
Find extrema of $f(x,y,z)$ subject to constraint $g(x,y,z)=c$
Imagine moving along constraint surface, glance off level surface of f tangentially
[[Gradient]] [[Orthogonality|perpendicular]] to level surfaces
Constraint is level set of g, so $\overrightarrow{\nabla g }$ is [[Orthogonality|perpendicular]] to constraint surface
Therefore, [[Gradient|gradients]] are parallel and the same situation arises where $\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }$
Gives 3 equations to solve as as a system
## [[Chain Rule]]
Can also be proven using [[chain rule]]
[[Parameterized Curve]] $t\to(x(t),y(t))\to f(x(t),y(t))$
[[Chain Rule]] gives
$$
\frac{df}{dt}=\frac{ \partial f }{ \partial x } \frac{dx}{dt}+\frac{ \partial f }{ \partial y } \frac{dy}{dt}=\overrightarrow{\nabla f }\cdot\vec{v}=0
$$
at any stationary point
Since [[Velocity Vector]] is tangent to constraint curve, $\overrightarrow{\nabla f }$ [[Orthogonality|perpendicular]] to constraint and therefore parallel to $\overrightarrow{\nabla g }$
(Same for [[R3]])
# Multiple Constraints
$$
\begin{Bmatrix}
\overrightarrow{\nabla f }=\lambda_{1}\overrightarrow{\nabla g_{1} }+\cdots+\lambda_{m}\overrightarrow{\nabla g_{m} } \\
g_{1}(x_{1},\cdots,x_{n})=c_{1} \\
\vdots \\
g_{m}(x_{1},\cdots,x_{n})=c_{m}
\end{Bmatrix}
$$
Which gives a system of $n+m$ equations with variables $\{x_{1},\cdots,x_{n},\lambda_{1},\cdots,\lambda_{m}\}$