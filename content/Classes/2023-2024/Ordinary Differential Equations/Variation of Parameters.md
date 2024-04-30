---
tags:
  - math/calc
aliases:
  - VOP
---
Method of finding particular solution to [[linear ODE]]
Take [[Linear ODE#Homogeneous|homogeneous]] solutions and vary parameters
# For [[First Order ODE]]:
$$
\begin{align*}
\frac{dx}{dt}+p(t)x=q(t)
\end{align*}
$$
Apply [[Separable ODE|separation of variables]] to [[Linear ODE#Homogeneous|homogeneous]] solutions
$$
\begin{align*}
\frac{dx}{dt}+p(t)x_{h}(t)=0\\
x_{h}(t)=Ae^{-\int{p(t)\,dt}}=Ax_{1}(t)
\end{align*}
$$
Where $x_{1}(t)$ is the "basic solution"
Treat A as a variable, call it $v(t)$
$$
\begin{align*}
\frac{dx}{dt}=v(t) \frac{dx_{1}}{dt}+\frac{dv}{dt}x_{1}(t)\\
\text{Substitute: } v\dot{x}_{1}+\dot{v}x_{1}+pvx_{1}\\
=v(\dot{x}_{1}+px_{1})+\dot{v}x_{1}=q(t)\\
\implies \frac{dv}{dt}=\frac{q(t)}{x_{1}(t)}\\
\implies \fbox{$v(t)=\int{\frac{q(t)}{x_{1}(t)}\,dt}$}\\
\implies \fbox{$x_{p}(t)=x_{1}(t)\int{\frac{q(t)}{x_{1}(t)}\,dt}$}
\end{align*}
$$
# For [[Nth-Order ODE]]:
## 2nd Order
$$
\begin{align*}
\ddot{x}+p_{1}\dot{x}+p_{0}x=R(t)\\
x_{h}=v_{1}x_{1}+v_{2}x_{2}\\
x_{p}=v_{1}x_{1}+v_{2}x_{2}\\
\implies \dot{x}=v_{1}\dot{x}_{1}+\dot{v}_{1}x_{1}+v_{2}\dot{x}_{2}+\dot{v}_{2}x_{2}\\
\text{Assume } x_{1}\dot{v}_{1}+x_{2}\dot{v}_{2}=0\\
\implies \dot{x}=\dot{x}_{1}v_{1}+\dot{x}_{2}v_{2}\\
\implies \ddot{x}=\dot{x}_{1}\dot{v}_{1}+\dot{x}_{2}\dot{v}_{2}+\ddot{x}_{1}v_{1}+\ddot{x}_{2}v_{2}\\
\\\ddot{x}+p_{1}\dot{x}+p_{0}x\\
=\dot{x}_{1}\dot{v}_{1}+\dot{x}_{2}\dot{v}_{2}+\ddot{x}_{1}v_{1}+\ddot{x}_{2}v_{2}\\
+p_{1}(\dot{x}_{1}v_{1}+\dot{x}_{2}v_{2})\\
+p_{0}(v_{1}x_{1}+v_{2}x_{2})\\
=R(t)\\
=(\ddot{x}_{1}+p_{1}\dot{x}_{1}+p_{0}x_{1})v_{1}+(\ddot{x}_{2}+p_{1}\dot{x}_{2}+p_{0}x_{2})v_{2}+\dot{x}_{1}\dot{v}_{1}+\dot{x}_{2}+\dot{x}_{2}\dot{v}_{2}\\
T(x_{1}),T(x_{2})=0\\
\implies \ddot{x}+p_{1}\dot{x}+p_{0}x=\dot{x}_{1}\dot{v}_{1}+\dot{x}_{2}\dot{v}_{2}=R(t)\\
\implies\fbox{$\begin{bmatrix}
x_{1} & x_{2} \\
\dot{x}_{1} & \dot{x}_{2}
\end{bmatrix}
\begin{bmatrix}
\dot{v}_{1} \\
\dot{v}_{2}
\end{bmatrix}
=\begin{bmatrix}
0 \\
R
\end{bmatrix}$}\\
\text{Only gives solutions when }W(t)=\begin{vmatrix}x_{1} & x_{2} \\ \dot{x}_{1} & \dot{x}_{2}\end{vmatrix}\neq0\\
\implies \fbox{$\dot{v}_{1}=-\frac{x_{2}(t)R(t)}{W(t)},\dot{v}_{2}=\frac{x_{1}(t)R(t)}{W(t)}$}
\end{align*}
$$
Where $W(t)$ is the [[Wronskian Determinant]]
## Higher order
$$
\begin{align*}
x_{p}(t)=v_{1}x_{1}+v_{2}x_{2}+\cdots+v_{n}x_{n}\\
\begin{bmatrix}
x_{1} & x_{2} & \cdots & x_{n} \\
\dot{x}_{1} & \dot{x}_{2} & \cdots & \dot{x}_{n} \\
\ddot{x}_{1} & \ddot{x}_{2} & \cdots & \ddot{x}_{n} \\
\vdots & \vdots & \ddots & \vdots \\
x^{(n)}_{1} & x_{2}^{(n)} & \cdots & x_{n}^{(n)}
\end{bmatrix}
\begin{bmatrix}
\dot{v}_{1} \\
\dot{v}_{2} \\
\dot{v}_{3} \\
\vdots \\
\dot{v}_{n}
\end{bmatrix}
=\begin{bmatrix}0\\0\\0\\ \vdots\\ R\end{bmatrix}\\
\text{Where }W(t)\neq0
\end{align*}
$$