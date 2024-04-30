---
tags:
  - math/calc
  - math/linear-algebra
---
For showing that the [[span]] of [[Linear ODE#Homogeneous|homogeneous]] solutions to an [[Nth-Order ODE]] cover all possible solutions
$$
\begin{vmatrix}
f_{1}(t_{0}) & f_{2}(t_{0}) & \cdots & f_{n}(t) \\
f'_{1}(t_{0}) & f'_{2}(t_{0}) & \cdots & f'_{n}(t_{0}) \\
\vdots & \vdots & \cdots & \vdots \\
f_{1}^{(n-1)}(t_{0}) & f_{2}^{(n-1)}(t_{0}) & \cdots & f_{n}^{(n-1)}(t_{0})
\end{vmatrix}
=W(t)
$$
If it is never 0, the given [[Ordinary Differential Equation|ODE]] will yield unique solutions of the form $x(t)=x_{h}(t)+x_{p}(t)=c_{1}f_{1}(t)+c_{2}f_{2}(t)+\cdots+c_{n}f_{n}(t)+x_{p}(t)$
For any [[First Order ODE#Initial Value Problem (IVP)|IVP]] with conditions given up to $n-1$ order derivatives