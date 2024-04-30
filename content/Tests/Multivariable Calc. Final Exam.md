---
date: 2023-12-21
course: "[[Multivariable Calculus]]"
tags:
  - math/calc
---
[Practice Questions](http://math.rwinters.com/E21a/solutions/PracticeFinal-Fall2023.pdf)
# 1)
a: F ([[Triple Scalar Product]])
b: T ([[Green's Theorem]])
c: F ([[Curl]])
d: T ([[Flux]])
# 2)
$$
\begin{align*}
\vec{n}=\overrightarrow{PQ}\times\overrightarrow{PR}=\langle 1,-3,-3 \rangle\times\langle -2,2,-2 \rangle\\
=\langle 6+6,6+2,2-6 \rangle =\langle 3,2,-1 \rangle \\
\|\vec{n}\|=\sqrt{14}\to \vec{n}=\frac{\sqrt{14}}{14}\langle 3,2,-1 \rangle \\
\text{comp}_{\vec{n}} \overrightarrow{PS}=\frac{\sqrt{14}}{14}\langle 2,1,0 \rangle\cdot\langle 3,2,-1 \rangle \\
=\frac{\sqrt{14}}{14}(6+2)=\boxed{ \frac{4\sqrt{14}}{7} }
\end{align*}
$$
# 3)
## a)
$$
\begin{align*}
f(x,y,z)=3x^{2}+5y-7xz^{2}\\
\vec{v}=\frac{1}{3}\langle 1,2,-2 \rangle \\
\overrightarrow{\nabla f }(1,1,1)\cdot\vec{v}=\langle 6x-7z^{2},5,-14xz \rangle(1,1,1)\cdot\vec{v}\\
=\frac{1}{3}\langle -1,5,-14 \rangle\cdot\langle 1,2,-2 \rangle=\frac{1}{3}(-1+10+28)=\boxed{ \frac{37}{3} }
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{n}=\overrightarrow{\nabla f }(1,1,1)=\langle 6x-7z^{2},5,-14xz \rangle(1,1,1)\\
=\langle -1,5,-14 \rangle\implies -x+5y-14z=-10\implies \boxed{ x-5y+14z=10 }
\end{align*}
$$
# 4)
$$
\begin{align*}
g(x,y)=10x+25y=300\\
H(x,y)=x^{0.7}y^{1.4}\\
\overrightarrow{\nabla f }=\lambda \overrightarrow{\nabla g }\\
\implies \langle 0.7x^{-0.3}y^{1.4},1.4x^{0.7}y^{0.4} \rangle=\lambda\langle 10,25 \rangle \\
\implies \begin{cases}
0.7x^{-0.3}y^{1.4}=10\lambda \\
1.4x^{0.7}y^{0.4}=25\lambda \\
10x+25y=300
\end{cases}\\
\implies \frac{y}{2x}=\frac{2}{5}\\
\implies 10x+20x=300\implies \boxed{ x=10,y=8 }
\end{align*}
$$
# 5)
$$
\begin{align*}
\int_{C}y\, dx+x\, dy\\
\vec{r}=\langle t,t^{2} \rangle,1\leq t\leq2\\
\implies \int_{C}y\, dx+x\, dy=\int_{1}^{2} \langle y,x \rangle\cdot\langle 1,2t \rangle\, dt \\
=\int_{1}^{2} t^{2}+2t^{2}\, dt =\boxed{ 7 }
\end{align*}
$$
# 6)
$$
\begin{align*}
\int_{C} yz\, dx+xz\, dy+xy\, dz\\
\implies \overrightarrow{\nabla f }=\langle yz,xz,xy \rangle\implies f(x,y,z)=xyz\\
\implies \int_{C}\overrightarrow{\nabla f }\cdot d\vec{r}=f(4,2,1)-f(1,3,-2)\\
=\boxed{ 14 }
\end{align*}
$$
# 7)
$$
\begin{align*}
z=2x^{2}+2y^{2}\\
9\pi=\iiint_{G}\, dV=\int_{0}^{h} \int_{0}^{\sqrt{\frac{h}{2}}} \int_{0}^{2\pi} r\, d\theta\, dr\, dz\\
=\int_{0}^{h} \int_{0}^{\sqrt{\frac{z}{2}}} 2\pi r\, dr \, dz\\
=\int_{0}^{h} \frac{\pi z}{2}\, dz =\frac{1}{4}\pi h^{2}\implies h=\boxed{ 6 }
\end{align*}
$$
# 8)
## a)
$$
\begin{align*}
\vec{F}=\langle e^{x^{2}}+5y, 8x-\sin y \rangle\\
\oint_{C}\vec{F}\cdot d\vec{r}=\iint_{R}\text{curl }\vec{F}\, dA\\
=\int_{-1}^{2} \int_{\frac{2}{3}y+\frac{5}{3}}^{-\frac{1}{3}y+ \frac{11}{3}} 3\, dx \, dy=\int_{-1}^{2} 6-3y\, dy\\
=12-6+6+\frac{3}{2}=\boxed{ \frac{27}{2} }
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{F}=\langle 2y+4z,2x+z,x+2y \rangle\\
\oint_{C}\vec{F}\cdot d\vec{r}=\iint_{S}\text{curl }\vec{F}\, d\vec{S}\\
S=\{ (r,\theta)|0\leq r\leq 2,0\leq \theta\leq 2\pi,z=6-r\cos\theta-r\sin\theta \}\\
\vec{r}=\langle r\cos\theta,r\sin\theta,6-r\cos\theta-r\sin\theta \rangle\\
d\vec{S}=\langle \cos\theta,\sin\theta,-\cos\theta-\sin\theta \rangle\times\langle -r\sin\theta,r\cos\theta,r\sin\theta-r\cos\theta \rangle\, dr\, d\theta\\
=\langle r,r,r \rangle  \\
\implies \oint_{C}\vec{F}\cdot d\vec{r}=\int_{0}^{2\pi} \int_{0}^{2} \langle 1,3,0 \rangle\cdot\langle r,r,r \rangle \, dr\, d\theta \\
=\int_{0}^{2\pi} \int_{0}^{2} 4r\, dr \, d\theta\\
=\int_{0}^{2\pi} 8\, d\theta =\boxed{ 16\pi }
\end{align*}
$$
# 9)
## a)
$$
\begin{align*}
\vec{F}=\langle x,y,3z \rangle\\
\iint_{S}\vec{F}\cdot d\vec{S}\\
S=\{ (r,\theta)|0\leq r\leq 2,0\leq\theta\leq2\pi,z=4-r^{2} \}\\
d\vec{S}=\langle \cos\theta,\sin\theta,-2r \rangle\times\langle -r\sin\theta,r\cos\theta,0 \rangle\, dr\, d\theta\\
=\langle 2r^{2}\cos\theta, 2r^{2}\sin\theta, r \rangle\, dr\, d\theta\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}=\int_{0}^{2\pi} \int_{0}^{2} \langle r\cos\theta,r\sin\theta,12-3r^{2} \rangle\cdot\langle 2r^{2}\cos\theta,2r^{2}\sin\theta,r \rangle \, dr\, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{2} 2r^{3}+12r-3r^{3}\, dr \, d\theta \\
=\int_{0}^{2\pi} 24-4\, d\theta =\boxed{ 40\pi }
\end{align*}
$$
## b)
$$
\begin{align*}
\oiint_{B}\vec{F}\cdot d\vec{B}=\iiint_{E}\text{div}(\vec{F})\, dV\\
=\iint_{S}\vec{F}\cdot d\vec{S}+\iint_{D}\vec{F}\cdot d\vec{D}=\iiint_E \text{div}(\vec{F})\, dV\\
\iiint_{E}\text{div}(\vec{F})\, dV=\int_{0}^{2\pi} \int_{0}^{2} \int_{0}^{4-r^{2}} 5r\, dz\, dr\, d\theta \\
=\int_{0}^{2\pi} \int_{0}^{2} 20r-5r^{3}\, dr \, d\theta =\int_{0}^{2\pi} 40-20\, d\theta=40\pi\\
\vec{F}\cdot d\vec{D}=0\implies\iint_{D}\vec{F}\cdot d\vec{D}=0\\
\implies \iint_{S}\vec{F}\cdot d\vec{S}=\boxed{ 40\pi }
\end{align*}
$$