---
tags:
  - math/calc
---
Suppose $(x_{0},y_{0})$ is a stationary point of $f(x,y)$ and the function is at least twice differentiable, then
1. If $\det(H_{f}(x_{0},y_{0}))>0$, then $(x_{0},y_{0})$ is either a local max or min
	1. If $f_{xx}(x_{0},y_{0})>0$, then local min
	2. If $f_{xx}(x_{0},y_{0})<0$, then local max
2. If $\det(H_{f}(x_{0},y_{0}))<0$, then [[saddle]] point
3. If $\det(H_{f}(x_{0},y_{0}))=0$, then inconclusive
Where $H_{f}$ is the [[Hessian Matrix]]
# Derivation
## Quadratic Approximation
$$
f(x,y)\cong Q(x,y)=A+B(x-x_{0})+C(y-y_{0})+D(x-x_{0})^{2}+E(x-x_{0})(y-y_{0})+F(y-y_{0})^{2}
$$
Require that:
$$
\begin{align*}
Q(x_{0},y_{0})=f(x_{0},y_{0})\\
\overrightarrow{\nabla G }(x_{0},y_{0})=\overrightarrow{\nabla f }(x_{0},y_{0})\\
H_{Q}(x_{0},y_{0})=H_{f}(x_{0},y_{0})
\end{align*}
$$
Where $H_{Q}$ and $H_{f}$ is [[Hessian Matrix]]
$$
\begin{align*}
\implies Q(x_{0},y_{0})=A=f(x_{0},y_{0}),\\
Q_{x}(x_{0},y_{0})=B=f_{x}(x_{0},y_{0}),\\
Q_{y}(x_{0},y_{0})=C=f_{y}(x_{0},y_{0})\\
H_{Q}(x_{0},y_{0})=\begin{bmatrix}2D & E\\ E & 2F\end{bmatrix}\\
=H_{f}(x_{0},y_{0})=\begin{bmatrix}f_{xx} & f_{xy} \\ f_{yx} & f_{yy}\end{bmatrix}(x_{0},y_{0})\\
\implies D=\frac{1}{2}f_{xx}(x_{0},y_{0}),\\
E=f_{xy}(x_{0},y_{0}),\\
F=\frac{1}{2}f_{yy}(x_{0},y_{0})
\end{align*}
$$
So, quadratic approximation is:
$$
\begin{align*}
f(x,y)\cong Q(x,y)=f(x_{0},y_{0})+f_{x}(x_{0},y_{0})(x-x_{0})+f_{y}(x_{0},y_{0})(y-y_{0})\\
+\frac{1}{2}f_{xx}(x_{0},y_{0})(x-x_{0})^{2}+f_{xy}(x_{0},y_{0})(x-x_{0})(y-y_{0})+\frac{1}{2}f_{yy}(x_{0},y_{0})(y-y_{0})^{2}
\end{align*}
$$
## Test
If $(x_{0},y_{0})$ is a stationary point, $f_{x}=0,f_{y}=0$ and tangent plane will be horizontal ($z=f(x_{0},y_{0})$)
Approximating quadratic will be:
$$
z=f(x_{0},y_{0})+\frac{1}{2}f_{xx}(x_{0},y_{0})(x-x_{0})^{2}+f_{xy}(x_{0},y_{0})(x-x_{0})(y-y_{0})+\frac{1}{2}f_{yy}(x_{0},y_{0})(y-y_{0})^{2}
$$
For local max or min, graph and tangent plane will have only single intersection point, but [[saddle]] point the intersection will consist of curves
Substitute approximation for function for points near $(x_{0},y_{0})$:
$$
\begin{align*}
z=f(x_{0},y_{0})=f(x_{0},y_{0})+\frac{1}{2}f_{xx}(x_{0},y_{0})(x-x_{0})^{2}\\
+f_{xy}(x_{0},y_{0})(x-x_{0})(y-y_{0})+\frac{1}{2}f_{yy}(x_{0},y_{0})(y-y_{0})^{2}\\
\implies \frac{1}{2}f_{xx}(x_{0},y_{0})(x-x_{0})^{2}+f_{xy}(x_{0},y_{0})(x-x_{0})(y-y_{0})+\frac{1}{2}f_{yy}(x_{0},y_{0})(y-y_{0})^{2}=0\\
h=x-x_{0},k=y-y_{0}\\
\implies \frac{1}{2}f_{xx}h^{2}+f_{xy}hk+\frac{1}{2}f_{yy}k^{2}=0\\
\implies k=\frac{-f_{xy}h\pm\sqrt{f_{xy}^{2}h^{2}-f_{xx}f_{yy}h^{2}}}{f_{yy}}=\frac{-f_{xy}h\pm|h|\sqrt{f_{xy}^{2}-f_{xx}f_{yy}}}{f_{yy}}
\end{align*}
$$
Discriminant $f_{xy}^{2}-f_{xx}f_{yy}$ determines if there are other solutions than $h=k=0$
Positive means additional solutions ([[saddle]] point)
Negative means no additional solutions
If zero, can't draw conclusions
Work with negative of discriminant so that
$$
\det(H_{f})=\det\begin{bmatrix}f_{xx} & f_{xy} \\ f_{yx} & f_{yy}\end{bmatrix}=f_{xx}f_{yy}-f_{xy}^{2}
$$
Put observations together and use concavity to determine min vs max