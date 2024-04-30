---
tags:
  - math/calc
---
[[Matrix]] of the [[Partial Derivative|partial derivatives]] of a function $f(x_{1},x_{2},\cdots,x_{n})$
$$
H_{f}=
\begin{bmatrix}
f_{x_{1}x_{1}} & f_{x_{1}x_{2}} & \cdots & f_{x_{1}x_{n}} \\
f_{x_{2}x_{1}} & f_{x_{2}x_{2}} & \cdots & f_{x_{2}x_{n}} \\
\vdots & \vdots & \ddots & \vdots \\
f_{x_{n}x_{1}} & f_{x_{n}x_{2}} & \cdots & f_{x_{n}x_{n}}
\end{bmatrix}
$$
For $f(x,y)$:
$$
H_{f}=
\begin{bmatrix}
f_{xx} & f_{xy} \\
f_{yx} & f_{yy}
\end{bmatrix}
$$
Also,
$$
H_{f}=J(\overrightarrow{\nabla f})^{T}
$$