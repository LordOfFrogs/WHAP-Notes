---
tags:
  - math/calc
---
# Basic Chain Rule
$$
\frac{d}{dt}[f(x(t),y(t))]=\frac{ \partial f }{ \partial x } \frac{dx}{dt}+\frac{ \partial f }{ \partial y } \frac{dy}{dt}
$$
Generally:
$$
\frac{df}{dt}=\overrightarrow{\nabla f}\cdot \vec{v}
$$
For a [[Parameterized Curve]] along $f$ using [[Gradient]] and [[Velocity Vector]]
# General Chain Rule
$$
\mathbf{J}_{F\circ G}=\mathbf{J}_{F}\mathbf{J}_{G}
$$
([[Jacobian Matrix]])
Eg. for functions $F(x,y,z)=(u,v)$ and $G(s,t)=(x,y,z)$: $(s,t)\overset{G}\longrightarrow(x,y,z)\overset{F}\longrightarrow(u,v)$
$$
\begin{bmatrix}
\frac{ \partial u }{ \partial s } & \frac{ \partial u }{ \partial t } \\
\frac{ \partial v }{ \partial s } & \frac{ \partial v }{ \partial t }
\end{bmatrix}
=
\begin{bmatrix}
\frac{ \partial u }{ \partial x } & \frac{ \partial u }{ \partial y } & \frac{ \partial u }{ \partial z } \\
\frac{ \partial v }{ \partial x } & \frac{ \partial v }{ \partial y } & \frac{ \partial v }{ \partial z }
\end{bmatrix}
\begin{bmatrix}
\frac{ \partial x }{ \partial s } & \frac{ \partial x }{ \partial t } \\
\frac{ \partial y }{ \partial s } & \frac{ \partial y }{ \partial t } \\
\frac{ \partial z }{ \partial s } & \frac{ \partial z }{ \partial t }
\end{bmatrix}
$$