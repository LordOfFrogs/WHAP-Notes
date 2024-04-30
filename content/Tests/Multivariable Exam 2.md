---
date: 2023-12-01
course: "[[Multivariable Calculus]]"
tags:
  - math/calc
---
- [[Partial Derivative]], [[Clairaut's Theorem]]
- [[Extreme Value Theorem]], [[Second Derivative Test]]
- [[Method of Lagrange Multipliers]]
- [[Integral#Double Integral]], [[Fubini Theorem]], and using [[Polar Coordinates]]
- [[Integral#Triple Integral]], [[Cartesian Coordinates]], [[Cylindrical Coordinates]], [[Spherical Coordinates]]
- [[Integral]] applications ([[Moment of Inertia]]), [[Centroid]]
- [[Change of Variables]] using [[Jacobian Matrix]]
- [[Integration Along A Curve]]
# 1)
$$
\begin{align*}
f(x,y)=xy^{2}+2x^{2}-2y^{2}-12x\\
\overrightarrow{\nabla f }=\langle y^{2}+4x-12, 2xy-4y \rangle =0\\
\implies 2xy=4y\implies x=2,y=0\\
\implies y^{2}-4=0\implies y=\pm2,\\
4x-12=0\implies x=3\\
\implies \text{Sationary points: }(3,0), (2,2),(2,-2)\\
\det(H_{f})=\begin{vmatrix}
4 & 2y \\
2y & 2x-4
\end{vmatrix}=8x-16-4y^{2}\\
(3,0)\implies \det(H_{f})=8\implies \fbox{$(3,0)$ is a local minimum}\\
(2,2)\implies \det(H_{f})=-24\implies \fbox{$(2,2)$ is a saddle point}\\
(2,-2)\implies \det(H_{f})=-24\implies \fbox{$(2,-2)$ is a saddle point}
\end{align*}
$$
# 2)
$$
\begin{align*}
f(x,y,z)=2x-4y+z\\
g(x,y,z)=3x^{2}+3y^{2}+z^{2}=69\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle 2,-4,1 \rangle =\lambda\langle 6x, 6y, 2z \rangle \\
\implies \begin{cases}
2=6\lambda x \\
-4=6\lambda y \\
1=2\lambda z \\
3x^{2}+3y^{2}+z^{2}=69
\end{cases}\\
\implies \lambda=\frac{1}{3}x=-\frac{2}{3}y=\frac{1}{2}z\\
\implies y=-2x,z=\frac{3}{2}x\\
\implies 3x^{2}+12x^{2}+\frac{9}{4}x^{2}=69\\
=\frac{69}{4}x^{2}=69\implies x=\pm2\\
\implies y=\mp4,z=\pm3\\
f\left( 2,-4,3 \right)=23\\
f\left( -2,4,-3 \right)=-23\\
\implies \fbox{Max: $23$ @ $(2,-4,3)$, Min: $-23$ @ $(-2,4,-3)$}
\end{align*}
$$
# 3)
$$
\begin{align*}
\iint_{D} \frac{xy+3y}{x^{2}+y^{2}}\, dA\\
D=\left\{  (r,\theta)|1\leq r\leq3, 0\leq\theta\leq \frac{\pi}{2}  \right\}\\
\implies \int_{0}^{\frac{\pi}{2}} \int_{1}^{3} \frac{r^{2}\sin\theta\cos\theta+3r\sin\theta}{r^{2}}\cdot r\, dr \, d\theta \\
=\int_{0}^{\frac{\pi}{2}} \int_{1}^{3} r\sin\theta\cos\theta+3\sin\theta\, dr \, d\theta\\
=\int_{0}^{\frac{\pi}{2}} 4\sin\theta\cos\theta+6\sin\theta\, d\theta\\
=-\int_{1}^{0} 4u+6\, du \\
=\boxed{ 8 }
\end{align*}
$$
# 4)
$$
\begin{align*}
z^{2}=4x^{2}+4y^{2},z=4\\
\sigma(x,y,z)=10-2z\\
x=r\cos\theta\\
y=r\sin\theta\\
z=z\\
\implies z^{2}=4r^{2}\\
\sigma(r,\theta,z)=10-2z\\
\int_{0}^{2\pi} \int_{0}^{4} \int_{0}^{\frac{z}{2}} (10-2z)r\, dr\, dz\, d\theta\\
=\frac{1}{8}\int_{0}^{2\pi} \int_{0}^{4} 10z^{2}-2z^{3}\, dz\, d\theta\\
=\int_{0}^{2\pi} 32\pi\, d\theta\\
=\boxed{ \frac{64}{3}\pi }
\end{align*}
$$
# 5)
$$
\begin{align*}
f(x,y)=2x+3y\\
x\geq0,y\geq0,4x^{2}+9y^{2}\leq36\\
x=3u,y=2v\\
dx\, dy=\left|\frac{ \partial (x,y) }{ \partial (u,v) }\right|\, du\, dv\\
=\begin{Vmatrix}
3 & 0 \\
0 & 2
\end{Vmatrix}\, du\, dv\\
=6\, du\, dv\\
f(u,v)=6u+6v,u^{2}+v^{2}\leq1\\
\text{Area}=\pi\left( \frac{2}{2} \right)\left( \frac{3}{2} \right)=\frac{3}{2}\pi\\
u=r\cos\theta\\
v=r\sin\theta\\
\implies du\, dv=r\, dr\, d\theta\implies dx\, dy=\, 6r\, dr\, d\theta\\
\implies \frac{24}{\pi}\int_{0}^{\frac{\pi}{2}} \int_{0}^{1} r^{2}(\cos\theta+\sin\theta)\, dr \, d\theta\\
=\frac{8}{\pi}\int_{0}^{\frac{\pi}{2}} \cos\theta+\sin\theta\, d\theta\\
=\boxed{ \frac{16}{\pi} }
\end{align*}
$$