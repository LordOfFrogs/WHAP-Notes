---
tags:
  - math/calc
due: 2023-12-02
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW11-2023.pdf)
# Problem 1
$$
\begin{align*}
\iint_{R}(4x+8y)\, dA\\
R=\text{Parallelogram }(-1,3),(1,-3),(3,-1),(1,5)
\end{align*}
$$
![[Multivariable Homework 11 2023-11-26 22.19.47.excalidraw]]
$$
\begin{align*}
x=2v-u\\
y=3u+2v\\
\implies dx\,dy=\left|\frac{ \partial (x,y) }{ \partial (u,v) } \right|du\,dv\\
=\begin{Vmatrix}
\frac{ \partial x }{ \partial u } & \frac{ \partial x }{ \partial v }  \\
\frac{ \partial y }{ \partial u }  & \frac{ \partial y }{ \partial v } 
\end{Vmatrix}du\, dv\\
=\begin{Vmatrix}
-1 & 2 \\
3 & 2
\end{Vmatrix}du\,dv\\
=8\, du\, dv\\
\implies \int_{-1}^{1} \int_{0}^{1} 8[4(2v-u)+8(3u+2v)]\, du \, dv\\
=32\int_{-1}^{1} \int_{0}^{1} 5u+6v\, dv \, du\\
=32\int_{-1}^{1} 5u+3\, du\\
=32(6)\\
\implies \boxed{ \iint_{R}4x+8y\,dA= 192}
\end{align*}
$$
# Problem 2
![[Multivariable Homework 11 2023-11-27 09.32.06.excalidraw]]
$$
\begin{align*}
\iint_{R}x^{2}\, dA\\
R=\{ (x,y)|9x^{2}+4y^{2}\leq36 \}\\
x=2v\\
y=3u\\
R\{ (u,v)|u^{2}+v^{2}\leq1 \}\\
dx\, dy=\left|\frac{ \partial (x,y) }{ \partial (u,v) }\right|du\, dv\\
=\begin{Vmatrix}
0 & 2 \\
3 & 0
\end{Vmatrix}du\, dv=6\, du\, dv\\
u=r\sin\theta\\
v=r\cos\theta\\
R=\{ r\in[0,1],\theta\in[0,2\pi] \}\\
du\, dv=r\, dr\,d\theta\implies dx\, dy=6r\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{1} 6r(2(r\cos\theta))^{2}\, dr \, d\theta \\
=24\int_{0}^{2\pi} \int_{0}^{1} r^{3}\cos^{2}\theta \, dr \, d\theta\\
=6\int_{0}^{2\pi} \cos^{2}\theta \, d\theta \\
\cos^{2}x=\frac{1}{2}\cos(2x)+\frac{1}{2}\\
\implies 3\int_{0}^{2\pi} \cos2\theta\, d\theta +6\pi\\
\implies \boxed{ \iint_{R}x^{2}\, dA=6\pi }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\iint_{R}y^{2}\, dA\\
xy=1,xy=2,xy^{2}=1,xy^{2}=2\\
u=xy\\
v=xy^{2}\\
dx\, dy=\left| \frac{ \partial (u,v) }{ \partial (x,y) }  \right|^{-1}\, du\, dv\\
=\begin{Vmatrix}
y & x \\
y^{2} & 2xy
\end{Vmatrix}^{-1}\, du\, dv\\
=(2xy^{2}-xy^{2})^{-1}\, du\, dv\\
=\frac{1}{v}\, du\, dv\\
\implies R=\{ (u,v)|1\leq u\leq2,1\leq v\leq2 \}\\
\int_{1}^{2} \int_{1}^{2} \frac{v}{u^{2}}\, du \, dv\\
=\int_{1}^{2} \frac{v}{2}\, dv =1-\frac{1}{4}\\
\implies \boxed{ \iint_{R}y^{2}\, dA=\frac{3}{4} }
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
\iiint_{E}dV\
E=\left\{  (x,y,z)\left| \frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}\leq1 \right.  \right\}\
x=au, y=bv, z=cw\
\implies dx\, dy\, dz=\left| \frac{ \partial (x,y,z) }{ \partial (u,v,w) }  \right|\, du\, dv\, dw\
=\begin{Vmatrix}
a & 0 & 0 \
0 & b & 0 \
0 & 0 & c
\end{Vmatrix}\, du\, dv\, dw\
=abc\, du\, dv\, dw\
u=\rho\cos\theta\sin\phi\
v=\rho\sin\theta\sin\phi\
w=\rho\cos\phi\
\implies du\, dv\, dw=\rho^{2}\sin \phi\, d\rho\, d\phi\, d\theta\
\implies dx\, dy\, dz=abc\rho^{2}\sin\phi\, d\rho\, d\phi\, d\theta\
\implies \int_{0}^{2\pi} \int_{0}^{\pi} \int_{0}^{1} abc\rho^{2}\sin\phi\, d\rho \, d\phi \, d\theta \
=\frac{abc}{3}\int_{0}^{2\pi} \int_{0}^{\pi} \sin\phi\, d\phi \, d\theta \
=\frac{2}{3}abc\int_{0}^{2\pi} \, d\theta \
\implies \boxed{ \iiint_{E}dV=\frac{4}{3}\pi abc }
\end{align*}
$$
## b)
$$
\frac{4}{3}\pi(6378)^{2}(6356)=344739982272\pi\approx1.083\cdot10^{12}
$$
# Problem 5
![[Multivariable Homework 11 2023-11-27 16.24.24.excalidraw]]
$$
\begin{align*}
\iint_{R}\cos\left( \frac{y-x}{y+x} \right)\, dA\
u=y-x,v=y+x\
\implies dy\, dx=\left| \frac{ \partial (u,v) }{ \partial (x,y) }  \right|^{-1}\, du\, dv\
=\begin{Vmatrix}
-1 & 1 \
1 & 1
\end{Vmatrix}^{-1}\, du\, dv\
=2\, du\, dv\
\int_{\frac{1}{2}}^{1} \int_{-v}^{v} 2\cos\left( \frac{u}{v} \right)\, du \, dv\
=2\int_{\frac{1}{2}}^{1} \sin1-\sin(-1)\, dv \
=\frac{4\sin1}{2}\
\implies \boxed{ \iint_{R}\cos\left( \frac{y-x}{y+x} \right)\, dA = 2\sin(1)\approx 1.683 }
\end{align*}
$$
# Problem 6
$$
\vec{F}(x,y)=\frac{y\mathbf{i}-x\mathbf{j}}{\sqrt{x^{2}+y^{2}}}=\left\langle  \frac{y}{\sqrt{x^{2}+y^{2}}}, -\frac{x}{\sqrt{x^{2}+y^{2}}}  \right\rangle 
$$
![[Pasted image 20231128104610.png|500]]
# Problem 7
$$
\begin{align*}
f(x,y)=x^{2}-y\
\overrightarrow{\nabla f }=\langle 2x,-1 \rangle 
\end{align*}
$$
![[Pasted image 20231128104754.png|500]]
# Problem 8
$$
\begin{align*}
\int_{C} xy\, ds \
C:\vec{r}(t)=\langle t^{2},2t \rangle,0\leq t\leq1\
\|\vec{v}(t)\|=\|\langle 2t,2 \rangle\|=\sqrt{(2t)^{2}+2^{2}}=2\sqrt{t+1}\
\implies \int_{t=0}^{t=1} f(\vec{r}(t))\|\vec{v}(t)\|\, dt =\int_{0}^{1} 2(t^{2})(2t)\sqrt{t+1}\, dt \
=4\int_{0}^{1} t^{3}\sqrt{t+1}\, dt\
=4\int_{1}^{2} (u-1)^{3}\sqrt{u}\, du =4\int_{1}^{2} u^{\frac{7}{2}}-3u^{\frac{5}{2}}+3u^{\frac{3}{2}}-\sqrt{u}\, du\
=4\left( \frac{2}{9}u^{\frac{9}{2}}-\frac{6}{7}u^{\frac{7}{2}}+\frac{6}{5}u^{\frac{5}{2}}-\frac{2}{3}u^{\frac{3}{2}} \right)_{1}^{2}\
=4\sqrt{2}\left( \frac{32}{9}-\frac{48}{7}+\frac{24}{5}-\frac{4}{3} \right)-4\left( \frac{2}{9}-\frac{6}{7}+\frac{6}{5}-\frac{2}{3} \right)\
=4\left( \frac{52}{315}\sqrt{2}+\frac{32}{315}\right)\\
=\boxed{ \frac{16}{315}(13\sqrt{2}+8) }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\int_{C} xy\, dx+(x-y)\, dy\\
C=C_{1}\cup C_{2}\\
C_{1}\langle t,0 \rangle,\ t\in[0,2]\implies \vec{v}=\langle 1,0 \rangle \\
\implies dx=dt,dy=0\\
C_{2}\langle t,2t-4 \rangle,\ t\in[2,3]\implies \vec{v}=\langle 1,2 \rangle \\
\implies dx=dt,dy=2\, dt\\
\vec{F}=\langle xy,x-y \rangle=\langle 0,t \rangle_{C_{1}},\langle 2t^{2}-4t,4-t \rangle_{C_{2}}\\
\implies \int_{C} xy\, dx+(x-y)\, dy\\
=\int_{0}^{2} \langle 0,t \rangle\cdot\langle 1,0 \rangle \, dt +\int_{2}^{3} \langle 2t^{2}-4t,4-t \rangle\cdot\langle 1,2 \rangle\, dt\\
=\int_{2}^{3} 2t^{2}-6t+8\, dt =\frac{2}{3}t^{3}-3t^{2}+8t\biggr|_{2}^{3}\\
=18-27+24-\frac{16}{3}+12-16=\boxed{ \frac{17}{3} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\int_{C} xyz^{2}\, ds \\
C:\begin{Bmatrix}
x=2t-1 \\
y=t+5 \\
z=4t
\end{Bmatrix},t\in[0,1]\\
\implies \|\vec{v}\|=\|\langle 2,1,4 \rangle \|=\sqrt{21}\\
f(\vec{r}(t))=(2t-1)(t+5)(4t)^{2}\\
=16t^{2}(2t^{2}+9t-5)=16t^{4}+72t^{3}-40t^{2}\\
\implies \int_{C} xyz^{2}\, ds=\sqrt{21}\int_{0}^{1} 16t^{4}+72t^{3}-40t^{2}\, dt\\
=16\sqrt{21}\left( \frac{2}{5}t^{5}+\frac{9}{4}t^{4}-\frac{5}{3}t^{3} \right)_{t=0}^{t=1}\\
=16\sqrt{21}\left( \frac{24}{60}+\frac{135}{60}-\frac{100}{60} \right)=\boxed{ \frac{236}{15}\sqrt{21} }
\end{align*}
$$
# Problem 11
$$
\begin{align*}
\int_{C} (x+yz)\, dx +2x\, dy+xyz\, dz\\
C=C_{1}\cup C_{2}\\
C_{1}=(1,0,1)\to(2,3,1)=\begin{Bmatrix}
x=t+1 \\
y=3t \\
z=1
\end{Bmatrix},t\in[0,1]\\
\implies \vec{v}=\langle 1,3,0 \rangle=\sqrt{10} \\
C_{2}=(2,3,1)\to(2,5,2)=\begin{Bmatrix}
x=2 \\
y=2t+1 \\
z=2-t
\end{Bmatrix},t\in[1,2]\\
\implies \vec{v}=\langle 0,2,-1 \rangle=\sqrt{5} \\
\implies \int_{0}^{1} \langle 4t+1,2t+2,3t^{2}+3t \rangle\cdot\langle 1,3,0 \rangle  \, dt\\
+\int_{1}^{2} \langle -2t^{2}+3t+4,4,-4t^{2}+6t+4 \rangle\cdot\langle 0,2,-1 \rangle\, dt\\
=\int_{0}^{1} 10t+7\, dt+\int_{1}^{2} 4t^{2}-6t+4\, dt\\
=12+\frac{32}{3}-12+8-\frac{4}{3}+3-4\\
=\boxed{ \frac{49}{3} }  
\end{align*}
$$
# Problem 12
$$
\begin{align*}
\int_{C}\vec{F}\cdot d\vec{r}\\
\vec{F}(x,y,z)=\langle x+y, y-z, z^{2} \rangle\\
\vec{r}(t)=\langle t^{2}, t^{3}, t^{2} \rangle,t\in[0,1]\\
\implies \vec{F}(\vec{r}(t))=\langle t^{2}+t^{3}, t^{3}-t^{2}, t^{4} \rangle \\
\vec{v}(t)=\langle 2t,3t^{2},2t \rangle \\
\implies \int_{C} \vec{F}\cdot d\vec{r}=\int_{0}^{1} \vec{F}(\vec{r}(t))\cdot\vec{v}(t)\, dt\\
=\int_{0}^{1} \langle t^{2}+t^{3},t^{3}-t^{2}, t^{4} \rangle\cdot\langle 2t,3t^{2},2t \rangle\, dt\\
=\int_{0}^{1} 2t^{3}+2t^{4}+3t^{5}-3t^{4}+2t^{5}\, dt\\
=\int_{0}^{1} 5t^{5}-t^{4}+2t^{3}\, dt \\
=\frac{5}{6}-\frac{1}{5}+\frac{1}{2}=\boxed{ \frac{17}{15} }
\end{align*}
$$
# Problem 13
![[Pasted image 20231130100645.png|500]]
[[Line Integral]] should be **zero**
$$
\begin{align*}
\vec{F}(x,y)=\left\langle  \frac{x}{\sqrt{x^{2}+y^{2}}}, \frac{y}{\sqrt{x^{2}+y^{2}}}  \right\rangle\\
C=\{ (x,y)\in[-1,1]\times[1,2]|y=1+x^{2} \}\\
\vec{r}(t)=\langle t,1+t^{2} \rangle, t\in[-1,1]\\
\implies \vec{v}(t)=\langle 1,2t \rangle\\
\vec{F}(\vec{r}(t))=\left\langle  \frac{t}{\sqrt{t^{4}+3t^{2}+1}}, \frac{1+t^{2}}{\sqrt{t^{4}+3t^{2}+1}}  \right\rangle\\
\int_{-1}^{1} \left\langle  \frac{t}{\sqrt{t^{4}+3t^{2}+1}}, \frac{1+t^{2}}{\sqrt{t^{4}+3t^{2}+1}}  \right\rangle\cdot\langle 1,2t \rangle\, dt\\
=\int_{-1}^{1} \frac{2t^{3}+3t}{\sqrt{t^{4}+3t^{2}+1}}\, dt\\
=\int_{5}^{5} \frac{1}{2\sqrt{u}}\, du\\
=\boxed{ 0 }\checkmark
\end{align*}
$$
# Problem 14
$$
\begin{align*}
R=\left\{  (r,\theta)|0\leq r\leq a, 0\leq\theta\leq \frac{\pi}{2}  \right\}\\
\sigma(x,y)=kxy\\
\implies \sigma(r,\theta)=k(r\cos\theta)(r\sin\theta)=kr^{2}\sin\theta\cos\theta\\
\text{Mass}=\int_{0}^{\frac{\pi}{2}} \int_{0}^{a} kr^{3}\sin\theta\cos\theta\, dr\, d\theta \\
=\frac{ka^{4}}{4}\int_{0}^{\frac{\pi}{2}} \sin\theta\cos\theta\, d\theta\\
=\frac{ka^{4}}{4}\int_{0}^{1} u\, du =\fbox{Mass: $\frac{1}{8}ka^{4}$}\\
\bar{x}_{cm}=\frac{8}{ka^{4}}\int_{0}^{\frac{\pi}{2}} \int_{0}^{a} kr^{4}\sin\theta\cos^{2}\theta\, dr \, d\theta \\
=\frac{8}{5}a\int_{0}^{\frac{\pi}{2}} \sin\theta\cos^{2}\theta\, d\theta\\
=-\frac{8}{5}a\int_{1}^{0} u^{2}\, du =\frac{8}{15}a\\
\bar{y}_{cm}=\frac{8}{ka^{4}}\int_{0}^{\frac{\pi}{2}} \int_{0}^{a} kr^{4}\sin^{2}\theta\cos\theta\, dr \, d\theta \\
=\frac{8}{5}a\int_{0}^{\frac{\pi}{2}} \sin^{2}\theta\cos\theta\, d\theta\\
=\frac{8}{5}a\int_{0}^{1} u^{2}\, du =\frac{8}{15}a\\
\implies \fbox{Center of Mass: $\left( \frac{8}{15}a, \frac{8}{15}a \right)$}
\end{align*}
$$