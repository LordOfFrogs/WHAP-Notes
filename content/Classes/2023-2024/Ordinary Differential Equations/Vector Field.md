---
tags:
  - math/calc
aliases:
  - Vector Fields
---
A vector field in [[Rn]] is an assignment of a [[vector]] to every point in [[Rn]] (with the possible exception of some singular points)
Can be viewed as function
$$
\vec{F}(x_{1},\cdots,x_{n})=\begin{bmatrix}
f_{1}(x_{1},\cdots,x_{n}) \\
\vdots \\
f_{n}(x_{1},\cdots,x_{n})
\end{bmatrix}
=\begin{bmatrix}
f_{1}(\vec{x}) \\
\vdots \\
f_{n}(\vec{x})
\end{bmatrix}
$$
For autonomous vector fields, where it is time invariant (similar to [[Autonomous ODE]])
A nonautonomous vector field looks like
$$
\vec{F}(x_{1},\cdots,x_{n},t)=\begin{bmatrix}
f_{1}(x_{1},\cdots,x_{n},t) \\
\vdots \\
f_{n}(x_{1},\cdots,x_{n},t)
\end{bmatrix}
$$
# Conservative Vector Field
Vector field $F$ is conservative if [[line integral]] $\displaystyle\int_{C}\vec{F}\cdot\, d\vec{r}$ is independent on path
Only depends on endpoints
## Equivalent Statements
For $\vec{F}=\langle P,Q \rangle$ on some simply connected region $D$ in [[R2]] where the component functions are differentiable, and same for [[R3]]
1. $\vec{F}$ is conservative
2. The [[Line Integral]] $\displaystyle\int_{C}\vec{F}\cdot d\vec{r}$ is independent of the path between two fixed points in the region
3. The circulation $\oint_{C} \vec{F}\cdot d\vec{r}=0$ around any closed path in region
4. $\vec{F}=\overrightarrow{\nabla V }$[^1] for some differentiable function $V$
6. $\text{curl}(\vec{F})=0$[^2]
$4\implies1$ by [[Line Integral#Fundamental Theorem of Line Integrals]]
$4\implies5$ by [[Clairaut's Theorem]]

[^1]: [[Gradient]]
[^2]: [[Curl]]