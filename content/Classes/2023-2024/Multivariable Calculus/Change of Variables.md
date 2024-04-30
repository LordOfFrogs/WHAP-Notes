---
tags:
  - math/calc
---
For [[Integral|Integrals]]
1. Change integrand
2. Change "measure"
3. Change [[Integral]] limits
# [[Integral#Double Integral]]
For
$$
\iint_{D}f(x,y)\,dA=\iint_{D}f(x,y)\,dx\,dy
$$
Transform $(x,y)\longrightarrow(u,v)$
$$
\begin{Bmatrix}
x=x(u,v) \\
y=y(u,v)
\end{Bmatrix}
,\ F(u,v)=(x(u,v),y(u,v))
$$
And new region $D'$
Starting at point varying $u$ only traces out curve in $D$ with "[[Velocity Vector]]" $\displaystyle\frac{ \partial F }{ \partial u }$
Small $\Delta u$ leads to "displacement" $\displaystyle\left[ \frac{ \partial F }{ \partial u }\Delta u \right]$
Same for $v$ - $\displaystyle\left[ \frac{ \partial F }{ \partial v }\Delta v \right]$
Determine small parallelogram in $D$ with one-to-one correspondence with rectangle in $D'$ with side lengths $\Delta u$, $\Delta v$
Relate area $\Delta u\Delta v$ of rectangle in $D'$ to area of parallelogram as
$$
\Delta A\cong \left|\det\left[ \frac{ \partial F }{ \partial u } \Delta u, \frac{ \partial F }{ \partial v } \Delta v \right]\right|=\left|\det\begin{bmatrix}\frac{ \partial x }{ \partial u }  & \frac{ \partial x }{ \partial v }  \\
\frac{ \partial y }{ \partial u }  & \frac{ \partial y }{ \partial v } \end{bmatrix}\right|\Delta u\Delta v
$$
$$
\frac{ \partial (x,y) }{ \partial (u,v) }=\det
\begin{bmatrix}
\frac{ \partial x }{ \partial u } & \frac{ \partial x }{ \partial v }  \\
\frac{ \partial y }{ \partial u } & \frac{ \partial y }{ \partial v }
\end{bmatrix}
$$
Jacobian [[determinant]] - just the [[determinant]] of [[Jacobian Matrix]]
So,
$$
\Delta A\cong \left| \frac{ \partial (x,y) }{ \partial (u,v) }  \right|\Delta u\Delta v
$$
Limit to get
$$
dx\, dy\cong \left| \frac{ \partial (x,y) }{ \partial (u,v) }  \right|\, du\, dv
$$
So,
$$
\iint_{D} f(x,y)\, dx\, dy=\iint_{D'}f(x(u,v),y(u,v)) \left| \frac{ \partial (x,y) }{ \partial (u,v) }  \right|\, du\, dv
$$
Also follows that
$$
\left| \frac{ \partial (x,y) }{ \partial (u,v) } \right|=\left| \frac{ \partial (u,v) }{ \partial (x,y) }  \right|^{-1}
$$
# [[Integral#Triple Integral]]
Same as [[Integral#Double Integral]], just with 3 variables
$$
\iiint_{B}f(x,y,z)\, dx\, dy\, dz=\iiint_{B'}f(x(u,v,w),y(u,v,w),z(u,v,w))\left| \frac{ \partial (x,y,z) }{ \partial (u,v,w) } \right|\, du\, dv\, dw
$$