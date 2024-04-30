---
tags:
  - math/calc
aliases:
  - Partial Derivatives
  - Partial Differentiation
---
For [[R3]]
$$
\begin{align*}
\frac{ \partial  }{ \partial x }[f(x,y)]=\lim_{ \Delta x \to 0 }\left( \frac{f(x+\Delta x,y)-f(x,y)}{\Delta x} \right)=\frac{ \partial f }{ \partial x }=f_{x}\\
\frac{ \partial  }{ \partial y }[f(x,y)]=\lim_{ \Delta y \to 0 }\left( \frac{f(x,y+\Delta y)-f(x,y)}{\Delta y} \right)=\frac{ \partial f }{ \partial y }=f_{y}
\end{align*}
$$
For [[Rn]]
$$
\frac{ \partial }{ \partial x_{a} }[f(x_{1},x_{2},\cdots,x_{n})]=\lim_{ \Delta x_{a} \to 0 }\left( \frac{f(x_{1},\cdots,x_{a}+\Delta x_{a},\cdots,x_{n})-f(x_{1},x_{2},\cdots,x_{n})}{\Delta x_{a}} \right)=\frac{ \partial f }{ \partial x_{a} }=f_{x_{a}}
$$
# Non-independent variables and internal constraints
Eg. $w=f(x,y,z)=x^{2}+y^{2}-2xz,y+z^{2}=12$
Ignoring constraint:
$$
\begin{Bmatrix}
w_{x}=\frac{ \partial w }{ \partial x }=&2x-2z \\
w_{y}=\frac{ \partial w }{ \partial y }=&2y& \\
w_{z}=\frac{ \partial w }{ \partial z }=&-2x
\end{Bmatrix}
$$
But, after applying constraint, get different values for [[Partial Derivative]]s, notate as:
$$
\begin{align*}
\left( \frac{ \partial w }{ \partial x }  \right)_{y,z},\left( \frac{ \partial w }{ \partial y }  \right)_{x,z},\left( \frac{ \partial w }{ \partial z }  \right)_{x,y}\\
\left( \frac{ \partial w }{ \partial x }  \right)_{z},\left( \frac{ \partial w }{ \partial z }  \right)_{x}
\end{align*}
$$
Can use [[Chain Rule]] to relate the different [[Partial Derivative|partial derivatives]]
OR, using differentials:
$$
\begin{align*}
dw(x,y,z)=w(x,y,z)_{x}dx+w(x,y,z)_{y}dy+w(x,y,z)_{z}dz\\
dw(x,z)=w(x,z)_{x}dx+w(x,z)_{z}dz\\
dy+2zdz=0\implies dy=-2zdz\\
\implies dw=(2x-2z)dx+(-4yz-2x)dz=w(x,z)_{x}dx+w(x,z)_{z}dz\\
\implies w(x,z)_{x}=2x-2z,w(x,z)_{z}=-2x-4yz
\end{align*}
$$
# Higher Orders
For $f(x,y)$:
$f_{xx}=\frac{ \partial }{ \partial x }\left( \frac{ \partial f }{ \partial x } \right)=\frac{ \partial^{2} f }{ \partial x^{2} }$ - "rate of change of x-slopes with respect to x" - concavity of cross-sectional curve
$f_{xy}=\frac{ \partial }{ \partial y }\left( \frac{ \partial f }{ \partial x } \right)=\frac{ \partial^{2} f }{ \partial y \partial x }$ - "rate of change of x-slopes with respect to y"
$f_{yx}=\frac{ \partial }{ \partial x }\left( \frac{ \partial f }{ \partial y } \right)=\frac{ \partial^{2} f }{ \partial x\partial y }$ - "rate of change of y-slopes with respect to x"
$f_{yy}=\frac{ \partial }{ \partial y }\left( \frac{ \partial f }{ \partial y } \right)=\frac{ \partial^{2} f }{ \partial y^{2} }$ - "rate of change of y-slopes with respect to y" - concavity of cross-sectional curve
Can organize into [[Hessian Matrix]]
By [[Clairaut's Theorem]], $f_{xy}=f_{yz}$
Can continue 2nd order pattern to higher 