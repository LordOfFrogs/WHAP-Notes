---
tags:
  - math/calc
due: 2023-12-09
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW12-2023.pdf)
# Problem 1
$$
\begin{align*}
\vec{F}(x,y)=\langle 3x^{2}-2y^{2},4xy+3 \rangle \\
\frac{ \partial }{ \partial y }(3x^{2}-2y^{2})=-4y\\
\frac{ \partial }{ \partial x }(4xy+3)=4y\neq -4y\\
\fbox{Not conservative}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\vec{F}(x,y)=\langle xy\cos xy+\sin xy, x^{2}\cos xy\rangle\\
\frac{ \partial }{ \partial y }(xy\cos xy+\sin xy)=x\cos xy\\
\frac{ \partial }{ \partial x }(\sin xy)=x\cos xy\checkmark\\
\frac{ \partial f }{ \partial x }=xy\cos xy+\sin xy\\
\implies f(x,y)=x\sin xy+a(y)\\
\frac{ \partial f }{ \partial y } = x^{2}\cos xy\\
\implies f(x,y)=x\sin xy+b(x)\\
\implies \fbox{Conservative, $f(x,y)=x\sin xy$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\vec{F}(x,y)=\langle x^{2},y^{2} \rangle\\
\implies f(x,y)=\frac{x^{3}}{3}+\frac{y^{3}}{3}\\
\implies \int_{C}\vec{F}\cdot d\vec{r}=f(2,8)-f(-1,2)\\
=\frac{8}{3}+\frac{512}{3}+\frac{1}{3}-\frac{8}{3}=\frac{513}{3}\\
=\boxed{ 171 }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\vec{F}(x,y,z)=\langle 2xz+y^{2}, 2xy, x^{2}+3z^{2} \rangle \\
\frac{ \partial f }{ \partial x } =2xz+y^{2}\implies f(x,y,z)=x^{2}z+xy^{2}+a(y,z)\\
\frac{ \partial f }{ \partial y } =2xy\implies f(x,y,z)=xy^{2}+b(x,z)\\
\frac{ \partial f }{ \partial z } =x^{2}+3z^{2}\implies f(x,y,z)=x^{2}z+z^{3}+c(x,y)\\
\implies f(x,y,z)=x^{2}z+xy^{2}+z^{3}\\
C_{start}=(0,1,-1),C_{end}=(1,2,1)\\
\implies \int_{C} \vec{F}\cdot d\vec{r}=f(1,2,1)-f(0,1,-1)\\
=(1+4+1)-(-1)\\
=\boxed{ 7 }
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\int_{C}(1-ye^{-x})\, dx+e^{-x}\, dy\\
C:(0,1)\to(1,2)\\
\implies \vec{F}(x,y)=\langle 1-ye^{-x}, e^{-x} \rangle \\
\frac{ \partial f }{ \partial x } =1-ye^{-x}\implies f(x,y)=x+ye^{-x}+a(y)\\
\frac{ \partial f }{ \partial y } =e^{-x}\implies f(x,y)=ye^{-x}+b(x)\\
\implies f(x,y)=x+ye^{-x}\\
\implies \fbox{ $\vec{F}=\overrightarrow{\nabla f }\implies\vec{F}$ is conservative$\implies$ integral is independent of path }\\
\implies \int_{C}\vec{F}\cdot d\vec{r}=f(1,2)-f(0,1)\\
=1+\frac{2}{e}-1=\boxed{ \frac{2}{e} }
\end{align*}
$$
# Problem 6
## a)
$$
\begin{align*}
\oint_{C}x\, dx+y\, dy\\
C:(0,1)\to(0,0)\to(1,0)\overset{ y=1-x^{2} }{ \longrightarrow }(0,1)\\
\vec{F}(x,y)=\langle x,y \rangle \\
\frac{ \partial f }{ \partial x } =x\implies f(x,y)=\frac{x^{2}}{2}+a(y)\\
\frac{ \partial f }{ \partial y } =y\implies f(x,y)=\frac{y^{2}}{2}+b(x)\\
\implies f(x,y)=\frac{x^{2}}{2}+\frac{y^{2}}{2}\\
\implies \oint_{C}\vec{F}\cdot d\vec{r}=f(0,1)-f(0,1)=\boxed{ 0 }
\end{align*}
$$
## b)
$$
\begin{align*}
\oint_{C}x\, dx+y\, dy=\oint_{C} \vec{F}\cdot d\vec{r}=\iint_{D}\text{2D-curl}(\vec{F})\, dA\\
D=\{ (x,y)|0\leq x\leq 1,0\leq y\leq 1-x^{2} \}\\
\implies \int_{0}^{1} \int_{0}^{1-x^{2}} \frac{ \partial }{ \partial x }(y)+\frac{ \partial }{ \partial y }(x)\, dy \, dx \\
=\int_{0}^{1} \int_{0}^{1-x^{2}} 0\, dy \, dx =\boxed{ 0 }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\oint_{C}\cos y\, dx+x^{2}\sin y\, dy\\
\vec{F}(x,y)=\langle \cos y, x^{2}\sin y \rangle\\
D=(x,y)\in[0,5]\times[0,2],C=\partial D\\
\oint_{C}\vec{F}\cdot d\vec{r}=\iint_{D}\text{2D-curl}(\vec{F})\, dA\\
=\int_{0}^{5} \int_{0}^{2} \frac{ \partial }{ \partial x }(x^{2}\sin y)-\frac{ \partial }{ \partial y }(\cos y)\, dy \, dx\\
=\int_{0}^{5} \int_{0}^{2} 2x\sin y+\sin y\, dy \, dx \\
=-\cos2\int_{0}^{5} 2x+1\, dx \\
=\boxed{ -30\cos(2) }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\oint_{C}\sin y\, dx+x\cos y\, dy\\
\vec{F}(x,y)=\langle \sin y, x\cos y \rangle \\
D=\{ (x,y)|x^{2}+xy+y^{2}\leq1 \}\\
\vec{u}=\langle 1,-1 \rangle, \vec{v}=\left\langle  \frac{\sqrt{3}}{3}, \frac{\sqrt{3}}{3}  \right\rangle\\
\oint_{C}\vec{F}\cdot d\vec{r}=\iint_{D}\text{2D-curl}(\vec{F})\, dA\\
=\iint_{D}\frac{ \partial }{ \partial x }(x\cos y)-\frac{ \partial }{ \partial y }(\sin y)\, dA\\
=\iint_{D}0\, dA=\boxed{ 0 }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\oint_{C}\vec{F}\cdot d\vec{r}\\
\vec{F}(x,y)=\langle y^{2}\cos x, x^{2}+2y\sin x \rangle\\
C=(0,0)\to(2,6)\to(2,0)\to(0,0)\\
D=\{ (x,y)|0\leq x\leq2,0\leq y\leq 3x \}\\
\implies \oint_{C}\vec{F}\cdot d\vec{r}=\iint_{D}\text{2D-curl}(\vec{F})\, dA\\
=\int_{0}^{2} \int_{0}^{3x} \frac{ \partial }{ \partial x }(x^{2}+2y\sin x)-\frac{ \partial }{ \partial y }(y^{2}\cos x)\, dy \, dx\\
=\int_{0}^{2} \int_{0}^{3} 2x\, dy \, dx \\
=\int_{0}^{2} 6x\, dx \\
=\boxed{ 12 }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
D=\{ (x,y)|-2\leq x\leq2,0\leq y\leq \sqrt{4-x^{2}} \}\\
\vec{F}(x,y)=\langle x,x^{3}+3xy^{2} \rangle \\
\oint_{\partial D}\vec{F}\cdot d\vec{r}=\iint_{D}\text{2D-curl}(\vec{F})\, dA\\
x=r\cos\theta,y=r\sin\theta\\
\implies D=\{ (r,\theta)|r\leq2,0\leq\theta\leq\pi \}\\
dx\, dy=r\, dr\, d\theta\\
=\int_{0}^{\pi} \int_{0}^{2} \left( \frac{ \partial }{ \partial x }(x^{3}+3xy^{2})-\frac{ \partial }{ \partial y }(x) \right)r\, dr\, d\theta \\
=\int_{0}^{\pi} \int_{0}^{2} (3x^{2}+3y^{2})r\, dr\, d\theta \\
=\int_{0}^{\pi} \int_{0}^{2} 3r^{3}\, dr \, d\theta\\
=\int_{0}^{\pi} 12\, d\theta =\boxed{ 12\pi }
\end{align*}
$$
# Problem 11
$$
\begin{align*}
\bar{x}=\frac{1}{A}\iint_{D}x\, dA\\
\bar{x}=\frac{1}{2A}\oint_{C}x^{2}\, dy\\
=\frac{1}{2A}\oint_{C}\langle 0,x^{2} \rangle\cdot d\vec{r}\\
=\frac{1}{2A}\iint_{D}\text{2D-flow}(\langle 0,x^{2} \rangle )\, dA\\
=\frac{1}{2A}\iint_{D}\frac{ \partial }{ \partial x }(x^{2})\, dA\\
=\boxed{ \frac{1}{A}\iint_{D}x\, dA\checkmark }\\
\bar{y}=\frac{1}{A}\iint_{D}y\, dA\\
\bar{y}=-\frac{1}{2A}\oint_{C}y^{2}\, dx\\
=-\frac{1}{2A}\oint_{C}\langle y^{2},0 \rangle\cdot d\vec{r}\\
=-\frac{1}{2A}\iint_{D}\text{2D-flow}(\langle y^{2}, 0 \rangle )\, dA\\
=\frac{1}{2A}\iint_{D}\frac{ \partial }{ \partial y }(y^{2})\, dA\\
=\boxed{ \frac{1}{A}\iint_{D}y\, dA\checkmark }\\
\end{align*}
$$
# Problem 12
$$
\begin{align*}
C=(0,0)\to(a,0)\to(a,b)\to(0,0)\\
=C_{1}+C_{2}+C_{3}\\
C_{1}=\vec{r}_{1},t\in[0,1]=\langle at,0 \rangle\\
C_{2}=\vec{r}_{2},t\in[0,1]=\langle a,bt \rangle\\
C_{3}=\vec{r}_{3},t\in[0,1]=\langle a-at,b-bt \rangle\\
\bar{x}=\frac{1}{2A}\oint_{C}x^{2}\, dy\\
=\frac{1}{ab}\int_{0}^{1}\langle 0,(at)^{2} \rangle\cdot \langle a,0 \rangle+\langle 0,a^{2} \rangle\cdot \langle 0,b \rangle+\langle 0,(a-at)^{2} \rangle\cdot\langle -a,-b \rangle   \, dt\\
=\frac{1}{ab}\int_{0}^{1} ba^{2}-b(a-at)^{2}\, dt\\
=a\int_{0}^{1} 2t-t^{2}\, dt\\
=\frac{2}{3}a\\
\bar{y}=-\frac{1}{2A}\oint_{C}y^{2}\, dx\\
=-\frac{1}{ab}\int_{0}^{1}\langle 0,0 \rangle\cdot \langle a,0 \rangle+\langle b^{2}t^{2},0 \rangle\cdot \langle 0,b \rangle+\langle (b-bt)^{2},0 \rangle\cdot\langle -a,-b \rangle   \, dt\\
=\frac{1}{ab}\int_{0}^{1} a(b-bt)^{2}\, dt\\
=b\int_{0}^{1} 2t-t^{2}\, dt\\
=\frac{2}{3}b\\
\implies \boxed{ (\bar{x},\bar{y})=\left( \frac{2}{3}a, \frac{2}{3}b \right) }
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\vec{F}(x,y,z)=\langle x^{2}yz, xy^{2}z, xyz^{2} \rangle\\
\text{curl}(\vec{F})=\left\langle  \frac{ \partial R }{ \partial y } -\frac{ \partial Q }{ \partial z } , \frac{ \partial P }{ \partial z } -\frac{ \partial R }{ \partial x } , \frac{ \partial Q }{ \partial x } -\frac{ \partial P }{ \partial y } \right\rangle\\
=\boxed{ \langle xz^{2}-xy^{2},x^{2}y-yz^{2},y^{2}z-x^{2}z \rangle  }\\
\text{div}(\vec{F})=\frac{ \partial P }{ \partial x }+\frac{ \partial Q }{ \partial y }+\frac{ \partial R }{ \partial z }\\
=\boxed{ 6xyz  }
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\vec{F}(x,y,z)=\langle xyz^{2}, x^{2}yz^{2}, x^{2}y^{2}z \rangle \\
\frac{ \partial P }{ \partial y } =xz^{2}\\
\frac{ \partial Q }{ \partial x } =2xyz^{2}\neq\frac{ \partial P }{ \partial y } \\
\therefore \fbox{Not conservative}
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\vec{F}(x,y,z)=\langle y\cos xy,x\cos xy,-\sin z \rangle\\
\frac{ \partial P }{ \partial y } =\cos xy-xy\sin xy=\frac{ \partial Q }{ \partial x } \checkmark\\
\frac{ \partial Q }{ \partial z } =0=\frac{ \partial R }{ \partial y } \\
\frac{ \partial P }{ \partial z } =0=\frac{ \partial R }{ \partial x } \\
\implies \fbox{Conservative}\\
\implies \vec{F}=\overrightarrow{\nabla f }\\
\implies \boxed{ f(x,y,z)=\sin xy+\cos z }
\end{align*}
$$
# Problem 16
$$
\text{div}\vec{E}=0,\ \text{div}\vec{H}=0,\ \text{curl}\vec{E}=-\frac{1}{c}\frac{ \partial \vec{H} }{ \partial t },\ \text{curl}\vec{H}=\frac{1}{c}\frac{ \partial \vec{E} }{ \partial t }
$$
## a)
$$
\begin{align*}
\nabla\times(\nabla\times\vec{E})=-\frac{1}{c^{2}}\frac{ \partial^{2} \vec{E} }{ \partial t^{2} } \\
=-\frac{1}{c}\frac{ \partial }{ \partial t }\left( \frac{1}{c}\frac{ \partial \vec{E} }{ \partial t }  \right)\\
=-\frac{1}{c}\frac{ \partial }{ \partial t }(\text{curl}(\vec{H}))\\
=-\frac{1}{c}\left\langle  \frac{ \partial^{2} R }{ \partial y \partial t }-\frac{ \partial^{2} Q }{ \partial z \partial t },\frac{ \partial^{2} P }{ \partial z \partial t }-\frac{ \partial^{2} R }{ \partial x \partial t },\frac{ \partial^{2} Q }{ \partial x \partial t }-\frac{ \partial^{2} P }{ \partial y \partial t } \right\rangle\\
=\text{curl}\left( -\frac{1}{c}\frac{ \partial \vec{H} }{ \partial t }  \right)\\
=\nabla\times(\nabla\times\vec{E})\checkmark
\end{align*}
$$
## b)
$$
\begin{align*}
\nabla\times(\nabla\times\vec{H})=-\frac{1}{c^{2}}\frac{ \partial^{2} \vec{H} }{ \partial t^{2} } \\
=\frac{1}{c}\frac{ \partial }{ \partial t }\left( -\frac{1}{c}\frac{ \partial \vec{H} }{ \partial t }  \right)\\
=\frac{1}{c}\frac{ \partial }{ \partial t }(\text{curl}(\vec{E}))\\
=\frac{1}{c}\left\langle  \frac{ \partial^{2} R }{ \partial y \partial t }-\frac{ \partial^{2} Q }{ \partial z \partial t },\frac{ \partial^{2} P }{ \partial z \partial t }-\frac{ \partial^{2} R }{ \partial x \partial t },\frac{ \partial^{2} Q }{ \partial x \partial t }-\frac{ \partial^{2} P }{ \partial y \partial t } \right\rangle\\
=\text{curl}\left( \frac{1}{c}\frac{ \partial \vec{E} }{ \partial t }  \right)\\
=\nabla\times(\nabla\times\vec{H})\checkmark
\end{align*}
$$
## c)
$$
\begin{align*}
\nabla^{2}\vec{E}=\text{grad}(\text{div}(\vec{E}))-\text{curl}(\text{curl}(\vec{E}))\\
=-\nabla\times(\nabla\times\vec{E})=-\left( -\frac{1}{c^{2}}\frac{ \partial^{2} \vec{E} }{ \partial t^{2} }  \right)\\
=\frac{1}{c^{2}}\frac{ \partial^{2} \vec{E} }{ \partial t^{2} } \checkmark
\end{align*}
$$
## d)
$$
\begin{align*}
\nabla^{2}\vec{H}=\text{grad}(\text{div}(\vec{H}))-\text{curl}(\text{curl}(\vec{H}))\\
=-\nabla\times(\nabla\times\vec{H})=-\left( -\frac{1}{c^{2}}\frac{ \partial^{2} \vec{H} }{ \partial t^{2} }  \right)\\
=\frac{1}{c^{2}}\frac{ \partial^{2} \vec{H} }{ \partial t^{2} } \checkmark
\end{align*}
$$
# [[Multivariable Homework 12 Extra Credit]]