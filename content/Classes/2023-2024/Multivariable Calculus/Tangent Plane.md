---
tags:
  - math/calc
---
For a function $$f(x,y)$$
Take both [[Partial Derivative]]s, and their [[Cross Product]] to find the normal [[vector]]
$$
\begin{align*}
\vec{n}=\langle1,0,f_{x}(x_{0},y_{0})\rangle\times\langle0,1,f_{y}(x_{0},y_{0})\rangle=\vec{v}_{x}(x_{0},y_{0})\times\vec{v}_{y}(x_{0},y_{0})\\
=\langle -f_{x}(x_{0},y_{0}),-f_{y}(x_{0},y_{0}),1\rangle
\end{align*}
$$
And the [[plane]] can be defined with this and a point (x,y)
$$
\begin{align*}
\vec{n}\cdot(\vec{x}-\vec{x}_{0})\\
-(x-x_{0})f_{x}(x_{0},y_{0})-(y-y_{0})f_{y}(x_{0},y_{0})+z-f(x_{0},y_{0})=0\\
L(x,y)=z=f(x_{0},y_{0})+f_{x}(x_{0},y_{0})(x-x_{0})+f_{y}(x_{0},y_{0})(y-y_{0})
\end{align*}
$$
