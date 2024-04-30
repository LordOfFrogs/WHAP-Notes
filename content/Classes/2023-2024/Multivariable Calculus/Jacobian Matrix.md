---
tags:
  - math/calc
---
An array of [[Partial Derivative]]s of the output variables with respect to the input variables, where outputs are listed from top to bottom and inputs from left to right
For function $f(x_{1},x_{2},\cdots,x_{n})=(y_{1},y_{2},\cdots,y_{m})$ with n inputs and m outputs:
$$
\mathbf{J}_{f}=
\begin{bmatrix}
\frac{ \partial y_{1} }{ \partial x_{1} } & \frac{ \partial y_{1} }{ \partial x_{2} } & \cdots & \frac{ \partial y_{1} }{ \partial x_{n} } \\
\frac{ \partial y_{2} }{ \partial x_{2} } & \frac{ \partial y_{2} }{ \partial x_{2} } & \cdots & \frac{ \partial y_{2} }{ \partial x_{n} } \\
\vdots & \vdots & \ddots & \vdots \\
\frac{ \partial y_{m} }{ \partial x_{1} } & \frac{ \partial y_{m} }{ \partial x_{2} } & \cdots & \frac{ \partial y_{m} }{ \partial x_{n} }
\end{bmatrix}
$$
Rows are like [[Gradient]] [[Vector]]s, aka. covariant [[Vector|vectors]]
Columns are like [[Velocity Vector]]s, aka. contravariant [[Vector|vectors]]