---
tags:
  - math/stats
  - math/calc
---
For a set of ordered pairs $\{x_{i},y_{i}\}_{i=1}^{i=N}$
A line of best fit $\hat{y}_{i}=mx_{i}+b$
Finding distance between them:
$$
\hat{y}_{i}-y_{i}=mx_{i}+b-y_{i}
$$
That should be minimized for all points
# Derivation
Minimize:
$$
F(m,b)=\sum_{i=1}^{N}(mx_{i}+b-y_{i})^{2}
$$
Solved by finding stationary points of $F(m,b)$, where $\frac{ \partial F }{ \partial m }=0,\frac{ \partial F }{ \partial b }=0$
$$
\begin{align*}
\frac{ \partial F }{ \partial m } =\sum_{i=1}^{N}2(mx_{i}+b-y_{i})(x_{i})\\
=2\sum_{i=1}^{N}(mx_{i}^{2}+bx_{i}-x_{i}y_{i})\\
=2\left( m\sum_{i=1}^{N}x_{i}^{2}+b\sum_{i=1}^{N}x_{i}-\sum_{i=1}^{N}x_{i}y_{i} \right)=0\\
\frac{ \partial F }{ \partial b } =\sum_{i=1}^{N}2(mx_{i}+b-y_{i})(1)\\
=2\sum_{i=1}^{N}(mx_{i}+b-y_{i})\\
=2\left( m\sum_{i=1}^{N}x_{i}+Nb-\sum_{i=1}^{N}y_{i} \right)=0\\
\implies \begin{bmatrix}
\displaystyle\sum_{i=1}^{N}x_{i}^{2} & \displaystyle\sum_{i=1}^{N}x_{i} \\
\displaystyle\sum_{i=1}^{N}x_{i} & N
\end{bmatrix}
\begin{bmatrix} m \\ b \end{bmatrix}
=\begin{bmatrix}
\displaystyle\sum_{i=1}^{N}x_{i}y_{i} \\
\displaystyle\sum_{i=1}^{N}y_{i}
\end{bmatrix}
\end{align*}
$$
Generally, for higher order polynomials of order n $p_{n}(x)=c_{0}+c_{1}x+c_{2}x^{2}+\cdots+c_{n}x^{n}$:
$$
\begin{bmatrix}
\displaystyle\sum_{i=1}^{N}x_{i}^{2n} & \cdots & \displaystyle\sum_{i=1}^{N}x_{i}^{n+1} & \displaystyle\sum_{i=1}^{N}x_{i}^{n} \\
\displaystyle\sum_{i=1}^{N}x_{i}^{2n-1} & \cdots & \displaystyle\sum_{i=1}^{N}x_{i}^{n} & \displaystyle\sum_{i=1}^{N}x_{i}^{n-1} \\
\vdots & \ddots & \vdots & \vdots \\
\displaystyle\sum_{i=1}^{N}x_{i}^{n} & \cdots & \displaystyle\sum_{i=1}^{N}x_{i} & N
\end{bmatrix}
\begin{bmatrix}
c_{n} \\
c_{n-1} \\
\vdots \\
c_{0}
\end{bmatrix}
=
\begin{bmatrix}
\displaystyle\sum_{i=1}^{N}x_{i}^{n}y_{i} \\
\displaystyle\sum_{i=1}^{N}x_{i}^{n-1}y_{i} \\
\vdots \\
\displaystyle\sum_{i=1}^{N}x_{i}y_{i} \\
\displaystyle\sum_{i=1}^{N}y_{i}
\end{bmatrix}
$$