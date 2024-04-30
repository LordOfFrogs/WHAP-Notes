---
tags:
  - math/calc
due: 2023-12-16
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW13-2023.pdf)
# Problem 1
$$
\begin{align*}
S:2x-5y+z=10\\
\implies f(x,y)=10-2x+5y\\
R=\left\{  (x,y)|0\leq x\leq4,0\leq y\leq6-\frac{3}{2}x  \right\}\\
dS=\sqrt{1+f_{x}^{2}+f_{y}^{2}}\, dx\, dy=\sqrt{30}\, dx\, dy\\
\implies \iint_{S}dS=\int_{0}^{4} \int_{0}^{6-\frac{3}{2}x} \sqrt{30}\, dy \, dx \\
=\int_{0}^{4} 6\sqrt{30}-\frac{3}{2}\sqrt{30}x\, dx\\
=24\sqrt{30}-12\sqrt{30}=\boxed{ 12\sqrt{30} }
\end{align*}
$$
# Problem 2
$$
\begin{align*}
z=f(x,y)=1+3x+2y^{2}\\
R=\{ (x,y)|0\leq y\leq 1,0\leq x\leq 2y \}\\
dS=\sqrt{1+f_{x}^{2}+f_{y}^{2}}\, dx\, dy\\
=\sqrt{10+16y^{2}}\, dx\, dy\\
\implies \iint_{S}dS=\int_{0}^{1} \int_{0}^{2y} \sqrt{10+16y^{2}}\, dx\, dy\\
=\int_{0}^{1} 2y\sqrt{10+16y^{2}}\, dy\\
=\frac{1}{24}(10+16y^{2})^{\frac{3}{2}}\biggr|_{0}^{1}=\boxed{ \frac{13}{12}\sqrt{26}-\frac{5}{12}\sqrt{10} }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\vec{r}=\begin{bmatrix}
x=b\cos\theta+a\cos\alpha\cos\theta \\
y=b\sin\theta+a\cos\alpha\sin\theta \\
z=a\sin\alpha
\end{bmatrix}\\
dS=\left\|\frac{ \partial \vec{r} }{ \partial \alpha }\times\frac{ \partial \vec{r} }{ \partial \theta } \right\|d\alpha\, d\theta\\
=\left\|\begin{bmatrix}
-a\sin\alpha\cos\theta \\
-a\sin\alpha\sin\theta \\
a\cos\alpha \\
\end{bmatrix}\times\begin{bmatrix}
-b\sin\theta-a\cos\alpha\sin\theta \\
b\cos\theta+a\cos\alpha\cos\theta \\
0 \\
\end{bmatrix}\right\|\, d\alpha\, d\theta\\
=\begin{Vmatrix}
-ab\cos\alpha\cos\theta-a^{2}\cos^{2}\alpha\cos\theta \\
-ab\cos\alpha\sin\theta-a^{2}\cos^{2}\alpha\sin\theta \\
-ab\sin\alpha\cos^{2}\theta-a^{2}\sin\alpha\cos\alpha\cos^{2}\theta-ab\sin\alpha\sin^{2}\theta-a^{2}\sin\alpha\cos\alpha\sin^{2}\theta
\end{Vmatrix}\, d\alpha\, d\theta\\
=\sqrt{(a\cos\alpha\cos\theta(b+a\cos\alpha))^{2}+(a\cos\alpha\sin\theta(b+a\cos\alpha))^{2}+(a\sin\alpha(b+a\cos\alpha))^{2}}\, d\alpha\, d\theta\\
=(b+a\cos\alpha)\sqrt{a^{2}\cos^{2}\alpha\cos^{2}\theta+a^{2}\cos^{2}\alpha\sin^{2}\theta+a^{2}\sin^{2}\alpha}\, d\alpha\, d\theta\\
=ab+a^{2}\cos\alpha\, d\alpha\, d\theta\\
\implies \iint_{S}dS=\int_{0}^{2\pi} \int_{0}^{2\pi} ab+a^{2}\cos\alpha\, d\alpha \, d\theta\\
=\int_{0}^{2\pi} 2\pi ab\, d\theta =\boxed{ 4\pi^{2}ab }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
f(x,y)=\sqrt{1-x^{2}}\\
R=\{ (x,y)|0\leq x\leq1,-x\leq y\leq x \}\\
dS=\sqrt{1+f_{x}^{2}+f_{y}^{2}}\, dx\, dy\\
=\sqrt{1+\frac{x^{2}}{1-x^{2}}}\, dx\, dy=\frac{1}{\sqrt{1-x^{2}}}\, dx\, dy\\
\implies \iint_{S}dS=\int_{0}^{1} \int_{-x}^{x} \frac{1}{\sqrt{1-x^{2}}}\, dy \, dx \\
=\int_{0}^{1} \frac{2x}{\sqrt{1-x^{2}}}\, dx \\
=-2\sqrt{1-x^{2}}\biggr|_{0}^{1}=2\\
\implies \fbox{Surface area $=16$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\iint_{S}xy\, dS\\
S:f(x,y)=2-2x-y\\
R=\{ (x,y)|0\leq x\leq 1,0\leq y\leq 2-2x \}\\
dS=\sqrt{6}\, dx\, dy\\
\implies \iint_{S}xy\, dS=\int_{0}^{1} \int_{0}^{2-2x} xy\sqrt{6}\, dy\, dx \\
=\int_{0}^{1} 2x(1-x)^{2}\sqrt{6}\, dx \\
=\sqrt{6}\int_{0}^{1} 2x-4x^{2}+2x^{3}\, dx \\
=\sqrt{6}\left( 1-\frac{4}{3}+\frac{1}{2} \right)=\boxed{ \frac{\sqrt{6}}{6} }
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\iint_{S}y^{2}\, dS\\
S=\{ (x,y,z)|x^{2}+y^{2}+z^{2}=4,x^{2}+y^{2}\leq 1,z\geq0 \}\\
\vec{r}(\theta, r)=\langle r\cos\theta,r\sin\theta,\sqrt{ 4-r^{2} } \rangle\\
\implies S=\{ (r,\theta)|0\leq\theta\leq2\pi,0\leq r\leq1 \}\\
dS=\left\| \frac{ \partial \vec{r} }{ \partial r }\times\frac{ \partial \vec{r} }{ \partial \theta }  \right\|\, dr\, d\theta\\
=\begin{Vmatrix}
\begin{bmatrix}
\cos\theta \\
\sin\theta \\
-\frac{r}{\sqrt{4-r^{2}}}
\end{bmatrix}\times\begin{bmatrix}
-r\sin\theta \\
r\cos\theta \\
0
\end{bmatrix}
\end{Vmatrix}\, dr\, d\theta\\
=\begin{Vmatrix}
\frac{r^{2}\cos\theta}{\sqrt{4-r^{2}}} \\
\frac{r^{2}\sin\theta}{\sqrt{4-r^{2}}} \\
r\cos^{2}\theta+r\sin^{2}\theta
\end{Vmatrix}\, dr\, d\theta\\
=\sqrt{\frac{r^{4}}{4-r^{2}}+r^{2}}\, dr\, d\theta=\frac{2r}{\sqrt{4-r^{2}}}\, dr\, d\theta\\
\implies \iint_{S}y^{2}\, dS=\int_{0}^{2\pi} \int_{0}^{1} \frac{2r^{3}\sin^{2}\theta}{\sqrt{4-r^{2}}}\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{4}^{3} \frac{(u-4)\sin^{2}\theta}{\sqrt{ u }}\, du \, d\theta \\
=\int_{0}^{2\pi} \left( 2\sqrt{3}-8\sqrt{3}-\frac{16}{3}+16 \right)\sin^{2}\theta \, d\theta \\
=\frac{1}{2}\left( \frac{32}{3}-6\sqrt{3} \right)(\theta-\sin\theta\cos\theta)\biggr|_{0}^{2\pi}\\
=\boxed{ \frac{32}{3}\pi-6\pi\sqrt{3} }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\iint_{S}\vec{F}\cdot d\vec{S}\\
\vec{F}=\langle x, y, z^{4} \rangle\\
z=\sqrt{x^{2}+y^{2}}\leq1\\
\vec{r}=\langle r\cos\theta,r\sin\theta,r \rangle\\
S=\{ (r,\theta)|0\leq r\leq 1,0\leq\theta\leq2\pi \}\\
d\vec{S}=\left( \frac{ \partial \vec{r} }{ \partial \theta } \times\frac{ \partial \vec{r} }{ \partial r }  \right)\, dr\, d\theta\\
=\langle -r\sin\theta,r\cos\theta,0 \rangle\times\langle \cos\theta,\sin\theta,1 \rangle\, dr\, d\theta\\
=\langle r\cos\theta,r\sin\theta,-r \rangle\, dr\, d\theta\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}=\int_{0}^{2\pi} \int_{0}^{1} \langle r\cos\theta, r\sin\theta, r^{4} \rangle\cdot\langle r\cos\theta, r\sin\theta, -r \rangle \, dr \, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{1} r^{2}-r^{5}\, dr \, d\theta\\
=\int_{0}^{2\pi} \frac{1}{6}\, d\theta =\boxed{ \frac{\pi}{3} }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\iint_{S}\vec{F}\cdot d\vec{S}\\
\vec{F}=\langle xz,x,y \rangle\\
S=\{ (x,y,z)|x^{2}+y^{2}+z^{2}=25,y\geq0 \} \\
B=\{ (x,y,z)|x^{2}+y^{2}+z^{2}\leq25,y\geq0 \} \\
=\left\{  (\rho,\phi,\theta)|0\leq\rho\leq5,0\leq\phi\leq\pi,0\leq\theta\leq\pi \right\}\\
D=\{ (x,y,z)|x^{2}+z^{2}=25,y=0 \}\\
\partial B=S\cup D\\
\oiint_{S\cup D=\partial B}\vec{F}\cdot d\vec{S}=\iint_{S}\vec{F}\cdot d\vec{S}+\iint_{D}\vec{F}\cdot d\vec{S}=\iiint_{B}\text{div}\vec{F}\\
=\int_{0}^{\pi} \int_{0}^{\pi} \int_{0}^{5} z\rho^{2}\sin\phi\, d\rho\, d\phi\, d\theta\\
=\int_{0}^{\pi} \int_{0}^{\pi} \int_{0}^{5} \rho^{3}\cos\phi\sin\phi\, d\rho \, d\phi \, d\theta\\
=\int_{0}^{\pi} \int_{0}^{\pi} \frac{625}{4}\cos\phi\sin\phi\, d\phi \, d\theta\\
=0\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}=-\iint_{D}\vec{F}\cdot d\vec{S}\\
\vec{r}=\langle r\cos\theta,0,r\sin\theta \rangle \\
D=\{ (r,\theta)|0\leq r\leq2,0\leq\theta\leq2\pi \}\\
d\vec{S}=\left( \frac{ \partial \vec{r} }{ \partial r }\times\frac{ \partial \vec{r} }{ \partial \theta }  \right)\, dr\, d\theta\\
=\langle \cos\theta,0,\sin\theta \rangle\times\langle -r\sin\theta,0,r\cos\theta \rangle\, dr\, d\theta\\
=\langle 0,-r^{2},0 \rangle\, dr\, d\theta\\
\implies \iint_{D}\vec{F}\cdot d\vec{S}=\int_{0}^{2\pi} \int_{0}^{2} \langle r^{2}\cos\theta\sin\theta,r\cos\theta,0 \rangle\cdot\langle 0,-r^{2},0 \rangle \, dr \, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} -r^{3}\cos\theta\, dr\, d\theta\\
=\int_{0}^{2\pi} -4\cos\theta\, d\theta\\
=0\\
\implies \boxed{ \iint_{S}\vec{F}\cdot d\vec{S}=0 }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\oiint_{S}\vec{F}\cdot d\vec{S}\\
\vec{F}=\langle y,z-y,x \rangle\\
\oiint_{S}\vec{F}\cdot d\vec{S}=\iiint_{B}\text{div}(\vec{F})\, dV\\
B=\{ (x,y,z)|0\leq x\leq 1,0\leq y\leq 1-x,0\leq z\leq 1-x-y \}\\
\implies \iiint_{B}\text{div}\vec{F}\, dV=\int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} -1\, dz\, dy\, dx\\
=\int_{0}^{1} \int_{0}^{1-x} x+y-1\, dy\, dx\\
=\int_{0}^{1} (x-1)(1-x)+\frac{(1-x)^{2}}{2}\, dx \\
=\frac{1}{2}\int_{0}^{1} -1+2x-x^{2}\, dx \\
=\boxed{ -\frac{1}{6} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\iint_{S}\sigma\, dS\\
S=\{ (r,\theta)|1\leq r\leq4,0\leq\theta\leq2\pi \}\\
\sigma=10-r\\
\vec{r}=\langle r\cos\theta,r\sin\theta,r \rangle\\
dS=\left\| \frac{ \partial \vec{r} }{ \partial r }\times\frac{ \partial \vec{r} }{ \partial \theta }  \right\|\, dr\, d\theta\\
=\|\langle \cos\theta,\sin\theta,1 \rangle\times\langle -r\sin\theta,r\cos\theta,0 \rangle \|\, dr\, d\theta\\
=\|\langle -r\cos\theta,-r\sin\theta,r \rangle\|\, dr\, d\theta\\
=r\, dr\, d\theta\\
\implies \iint_{S}\sigma dS=\int_{0}^{2\pi} \int_{1}^{4} (10-r)r\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{1}^{4} 10r-r^{2}\, dr\, d\theta\\
=\int_{0}^{2\pi} 80-\frac{64}{3}-5+\frac{1}{3}\, d\theta \\
=\int_{0}^{2\pi} 54\, d\theta=\boxed{ 108\pi }
\end{align*}
$$
# Problem 11
$$
\begin{align*}
\bar{z}=\frac{1}{Area(S)}\iint_{S}z\, dS=\frac{1}{2a^{2}\pi}\iint_{S}z\, dS\\
x^{2}+y^{2}+z^{2}=a^{2},z\geq0\\
\vec{r}=\langle a\cos\theta\sin\phi,a\sin\theta\sin\phi,a \cos\phi \rangle\\
S=\left\{  (\phi,\theta)|0\leq\phi\leq \frac{\pi}{2},0\leq\theta\leq2\pi  \right\}\\
dS=\left\| \frac{ \partial \vec{r} }{ \partial \theta }\times\frac{ \partial \vec{r} }{ \partial \phi }  \right\|\, d\phi\, d\theta\\
=\|\langle -a\sin\theta\sin\phi,a\cos\theta\sin\phi,0 \rangle\times\langle a\cos\theta\cos\phi,a\sin\theta\cos\phi,-a\sin\phi \rangle \|\, d\phi\, d\theta\\
=\|\langle -a^{2}\cos\theta\sin^{2}\phi,-a^{2}\sin\theta\sin^{2}\phi,-a^{2}\sin\phi\cos\phi \rangle \|\, d\phi\, d\theta\\
=a^{2}\sin\phi\, d\phi\, d\theta\\
\implies \iint_{S}z\, dS=\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} a^{3}\cos\phi\sin\phi\, d\phi\, d\theta\\
=\int_{0}^{2\pi} \frac{a^{3}}{2}\, d\theta=a^{3}\pi\\
\implies \boxed{ \bar{z}=\frac{a}{2} }
\end{align*}
$$
# Problem 12
$$
\begin{align*}
\frac{1}{Area(S)=4a^{2}\pi}\iint_{S}\text{distance from (a,0,0)}\, dS\\
S=\{ (\phi,\theta)|0\leq\phi\leq\pi,0\leq\theta\leq2\pi \}\\
\vec{r}=\langle a\cos\theta\sin\phi, a\sin\theta\sin\phi,a\cos\phi \rangle \\
\text{distance from }(a,0,0)=\sqrt{a^{2}\cos^{2}\theta\sin^{2}\phi+a^{2}\sin^{2}\theta\sin^{2}\phi+(a\cos\phi-a)^{2}}\\
=a\sqrt{\sin^{2}\phi+\cos^{2}\phi-2\cos\phi+1}=a\sqrt{2-2\cos\phi}\\
dS=\left\|\frac{ \partial \vec{r} }{ \partial \phi }\times\frac{ \partial \vec{r} }{ \partial \theta }\right\|\, d\phi\, d\theta\\
=a^{2}\sin\phi\, d\phi\, d\theta\\
\implies \iint_{S}a\sqrt{2-2\cos\phi}\, dS=\int_{0}^{2\pi} \int_{0}^{\pi} a^{3}\sin\phi\sqrt{2-2\cos\phi}\, d\phi \, d\theta\\
=\int_{0}^{2\pi} \frac{8a^{3}}{3}\, d\theta=\frac{16}{3}a^{3}\pi\\
\implies \fbox{Average distance to point $=\frac{4a}{3}$}\checkmark
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\vec{F}=\langle x^{2},xy,z \rangle\\
E=\{ (x,y,z)|0\leq z\leq4-x^{2}-y^{2} \}\\
S=\{ (z,\theta)|0\leq\theta\leq2\pi, 0\leq z\leq 4 \}\\
\vec{r}=\langle \cos\theta\sqrt{4-z},\sin\theta\sqrt{4-z},z \rangle\\
d\vec{S}=\left( \frac{ \partial \vec{r} }{ \partial z }\times\frac{ \partial \vec{r} }{ \partial \theta } \right)\, dz\, d\theta\\
=\langle -\sin\theta\sqrt{4-z},\cos\theta\sqrt{4-z},0 \rangle\times\left\langle  -\frac{\cos\theta}{2\sqrt{4-z}},-\frac{\sin\theta}{2\sqrt{4-z}}, 1  \right\rangle\, dz\, d\theta\\
=\left\langle  \cos\theta\sqrt{4-z},\sin\theta\sqrt{4-z}, \frac{1}{2}  \right\rangle\, dz\, d\theta\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}\\
=\int_{0}^{2\pi} \int_{0}^{4} \langle \cos^{2}\theta(4-z), \cos\theta\sin\theta(4-z),z \rangle\cdot\left\langle  \cos\theta\sqrt{4-z},\sin\theta\sqrt{4-z}, \frac{1}{2}  \right\rangle \, dz\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{4} \cos^{3}\theta(4-z)^{\frac{3}{2}}+\cos\theta\sin^{2}\theta(4-z)^{\frac{3}{2}}+\frac{z}{2}\, dz \, d\theta\\
=\int_{0}^{2\pi} 4-\frac{64}{5}\cos\theta\, d\theta=8\pi\\
D=\{ (r,\theta)|0\leq\theta\leq2\pi,0\leq r\leq 2 \}\\
\vec{r}=\langle r\cos\theta,r\sin\theta,0 \rangle\\
\vec{F}(x,y,0)=\vec{0}\implies\iint_{D}\vec{F}\cdot d\vec{S}=0\\
\partial E=S\cup D\implies \oiint_{\partial E}\vec{F}\cdot d\vec{S}=8\pi\\
\iiint_{E}\text{div}\vec{F}\, dV=\int_{0}^{2\pi} \int_{0}^{2} \int_{0}^{4-r^{2}} (3x+1)r\, dz\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} \int_{0}^{4-r^{2}} 3r^{2}\cos\theta+r\, dz\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} 12r^{2}\cos\theta+4r-3r^{4}\cos\theta-r^{3}\, dr \, d\theta\\
=\int_{0}^{2\pi} 32\cos\theta+8-\frac{96}{5}\cos\theta-4\, d\theta \\
=8\pi\\
\implies \boxed{ \oiint_{\partial E}\vec{F}\cdot d\vec{S}=\iiint_{E}\text{div}\vec{F}\, dV=8\pi \checkmark}
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\vec{F}=\langle x^{2},-y,z \rangle \\
E=\{ (x,r,\theta)|0\leq x\leq2,0\leq r\leq 3,0\leq\theta\leq2\pi \}\\
S=\{ (x,r,\theta)|0\leq x\leq 2,r=3,0\leq\theta\leq2\pi \}\\
\iint_S \vec{F}\cdot d\vec{S}=\int_{0}^{2\pi} \int_{0}^{2} \langle x^{2},-3\cos\theta,3\sin\theta \rangle\cdot\langle 0,\cos\theta,\sin\theta \rangle\, dx\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} 3\sin^{2}\theta-3\cos^{2}\theta\, dx\, d\theta\\
=\int_{0}^{2\pi} -6\cos2\theta\, d\theta=0\\
D_{1}=\{ (x,r,\theta)|x=0,0\leq r\leq 2,0\leq\theta\leq2\pi \}\\
\vec{F}(0,y,z)=\vec{0}\implies\iint_{D_{1}}\vec{F}\cdot d\vec{S}=0\\
D_{2}=\{ (x,r,\theta)|x=2,0\leq r\leq 2, 0\leq\theta\leq2\pi \}\\
\iint_{D_{2}}\vec{F}\cdot d\vec{S}=\int_{0}^{2\pi} \int_{0}^{2} \langle 4, -r\cos\theta,r\sin\theta \rangle\times\langle 1,0,0 \rangle\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} 4\, dr\, d\theta=16\pi\\
\partial E=S\cup D_{1}\cup D_{2}\implies \oiint_{\partial E}\vec{F}\cdot d\vec{S}=16\pi\\
\iiint_{E}\text{div}\vec{F}\, dV=\int_{0}^{2\pi} \int_{0}^{2} \int_{0}^{2} 2xr\, dx\, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} 4r\, dr\, d\theta\\
=\int_{0}^{2\pi} 8\, d\theta =16\pi\\
\implies \boxed{ \oiint_{\partial E}\vec{F}\cdot d\vec{S}=\iiint_{E}\text{div}\vec{F}\, dV=16\pi \checkmark }
\end{align*}
$$
# Problem 15
## a)
![[Multivariable Homework 13 2023-12-15 10.30.23.excalidraw]]
## b)
$$
\vec{R}(s,t)=\left\langle  sx(t), sy(t),h-hs \right\rangle
$$
## c)
$$
\vec{R}(s,t)=\langle sr\cos t, sr\sin t, h-hs \rangle
$$
## d)
$$
\begin{align*}
\iint_{S}dS\\
S=S_{1}\cup S_{2}\\
S_{1}=\{ (s,t)|0\leq t\leq2\pi,0\leq s\leq1 \}\\
dS_{1}=\left\| \frac{ \partial \vec{R} }{ \partial s }\times\frac{ \partial \vec{R} }{ \partial t } \right\|\, ds\, dt\\
=\|\langle r\cos t,r\sin t, -h \rangle\times\langle -sr\sin t,sr\cos t,0 \rangle\|\, ds\, dt\\
=\|\langle srh\cos t,srh\sin t,sr^{2} \rangle \|\, ds\, dt\\
=\sqrt{s^{2}r^{2}h^{2}+s^{2}r^{4}}\, ds\, dt=sr\sqrt{h^{2}+r^{2}}\, ds\, dt\\
\implies \iint_{S_{1}}dS=\int_{0}^{2\pi} \int_{0}^{1} sr\sqrt{h^{2}+r^{2}}\, ds\, dt\\
=\int_{0}^{2\pi} \frac{r}{2}\sqrt{h^{2}+r^{2}}\, dt=\boxed{ r\pi\sqrt{h^{2}+r^{2}} }\\
\iint_{S_{2}}dS=\pi r^{2}\\
\implies \fbox{Surface Area (including base) $=\pi r\sqrt{h^{2}+r^{2}}+\pi r^{2}$}
\end{align*}
$$
## e)
$$
\begin{align*}
\vec{F}=\langle x,y,z \rangle\\
\iint_{S}\vec{F}\cdot d\vec{S}\\
d\vec{S}=\langle srh\cos t,srh\sin t,sr^{2} \rangle\, ds\, dt\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}=\int_{0}^{2\pi} \int_{0}^{1} \langle sr\cos t,sr\sin t,h-hs \rangle\cdot\langle srh\cos t,srh\sin t,sr^{2} \rangle  \, ds\, dt\\
=\int_{0}^{2\pi} \int_{0}^{1} sr^{2}h\, ds\, dt\\
=\int_{0}^{2\pi} \frac{1}{2}r^{2}h\, dt=\boxed{ \pi r^{2}h }
\end{align*}
$$
## f)
$$
\begin{align*}
\oiint_{S\cup C}\vec{F}\cdot d\vec{S}=\iint_{S}\vec{F}\cdot d\vec{S}+\iint_{C}\vec{F}\cdot d\vec{S}=\iiint_{B}\text{div}\vec{F}\, dV\\
\iint_{C}\vec{F}\cdot d\vec{S}=\iint_{C}\langle x,y,0 \rangle\cdot\langle 0,0,-1 \rangle\, dS=0\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}=\iiint_{B}\text{div}\vec{F}\, dV\\
B:\vec{R}(s,t,\rho)=\langle s\rho\cos t,s\rho\sin t,h-hs \rangle\\
dV=\left\|\frac{ \partial (x,y,z) }{ \partial (s,t,\rho) } \right\|\, ds\, dt\, d\rho\\
=\begin{Vmatrix}
\rho\cos t & -s\rho\sin t & s\cos t \\
\rho\sin t & s\rho\cos t & s\sin t \\
-h & 0 & 0
\end{Vmatrix}\, ds\, dt\, d\rho\\
=s^{2}h\rho\sin^{2} t+s^{2}h\rho\cos^{2} t\, ds\, dt\, d\rho=s^{2}h\rho\, ds\, dt\, d\rho\\
\implies \iiint_{B}\text{div}\vec{F}\, dV=\int_{0}^{2\pi} \int_{0}^{1} \int_{0}^{r} 3s^{2}h\rho\, d\rho\, ds\, dt \\
=\int_{0}^{2\pi} \int_{0}^{1} \frac{3}{2}s^{2}r^{2}h\, ds\, dt\\
=\int_{0}^{2\pi} \frac{1}{2}r^{2}h\, dt = \boxed{ \pi r^{2}h }\checkmark
\end{align*}
$$