---
tags:
  - math/calc
due: 2023-10-21
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW6-2023.pdf)
# Problem 1
$$
\begin{align*}
\sin(xyz)=x+2y+3z\\
\frac{ \partial z }{ \partial x }(\sin(xyz)=x+2y+3z)\\
\implies\cos(xyz)\left( yz+xy\frac{ \partial z }{ \partial x }  \right)=1+3\frac{ \partial z }{ \partial x } \\
\implies \frac{ \partial z }{ \partial x } (xy\cos(xyz)-3)=1-yz\cos(xyz)\\
\implies \fbox{$\frac{ \partial z }{ \partial x } =\frac{1-yz\cos(xyz)}{xy\cos(xyz)-3}$}\\
\frac{ \partial z }{ \partial y } (\sin(xyz)=x+2y+3z)\\
\implies \cos(xyz)\left( xz+xy\frac{ \partial z }{ \partial y } \right)=2+3\frac{ \partial z }{ \partial y } \\
\implies\fbox{$\frac{ \partial z }{ \partial y } =\frac{2-xz\cos(xyz)}{xy\cos (xyz)-3}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
v=\frac{xy}{x-y}\\
v_{x}=\frac{y(x-y)-xy}{(x-y)^{2}}=-\frac{y^{2}}{(x-y)^{2}}\\
v_{y}=\frac{x(x-y)+xy}{(x-y)^{2}}=\frac{x^{2}}{(x-y)^{2}}\\
\fbox{$v_{xx}=\frac{2y^{2}}{(x-y)^{3}}$}\\
\fbox{$v_{yy}=\frac{2x^{2}}{(x-y)^{3}}$}\\
v_{xy}=v_{yx}=\frac{2x(x-y)^{2}-2x^{2}(x-y)}{(x-y)^{4}}\\
=\frac{2x(x-y)-2x^{2}}{(x-y)^{3}}\\
\implies \fbox{$v_{xy}=v_{yx}=-\frac{2xy}{(x-y)^{3}}$}
\end{align*}
$$
# Problem 3
**a) negative** (as x increases, f decreases)
**b) positive** (as y increases, f increases)
**c) positive** (as x increases, $f_{x}$ increases - curves spaced farther apart - gets less negative)
**d) negative** (as y increases, $f_{x}$ decreases - curves tighter - gets more negative OR as x increases, $f_{y}$ decreases - curves farther apart gets less positive)
**e) positive** (as y increases, $f_{y}$ increases - curves tighter - gets more positive)
# Problem 4
$$
\begin{align*}
u=\sqrt{r^{2}+s^{2}}\\
\begin{cases}
r=y+x\cos t \\
s=x+y\sin t
\end{cases}\\
\frac{ \partial u }{ \partial x } =\frac{1}{\sqrt{r^{2}+s^{2}}}\left( r\frac{ \partial r }{ \partial x } + s\frac{ \partial s }{ \partial x }  \right)\\
\frac{ \partial r }{ \partial x } =\cos t,\frac{ \partial s }{ \partial x } =1\\
\implies \frac{ \partial u }{ \partial x } =\frac{r\cos t+s}{\sqrt{r^{2}+s^{2}}}\\
\frac{ \partial u }{ \partial y } =\frac{1}{\sqrt{r^{2}+s^{2}}}\left( r\frac{ \partial r }{ \partial y } + s\frac{ \partial s }{ \partial y }  \right)\\
\frac{ \partial r }{ \partial y } =1=,\frac{ \partial s }{ \partial x } =\sin t\\
\implies \frac{ \partial u }{ \partial u } =\frac{r+s\sin t}{\sqrt{r^{2}+s^{2}}}\\
\frac{ \partial u }{ \partial t } =\frac{1}{\sqrt{r^{2}+s^{2}}}\left( r\frac{ \partial r }{ \partial t } + s\frac{ \partial s }{ \partial t }  \right)\\
\frac{ \partial r }{ \partial t } =-x\sin t,\frac{ \partial s }{ \partial t } =y\cos t\\
\implies \frac{ \partial u }{ \partial t } =\frac{sy\cos t-rx\sin t}{\sqrt{r^{2}+s^{2}}}\\
x=1,y=2,t=0\\
\implies r=3,s=1\\
\implies \fbox{$\frac{ \partial u }{ \partial x }=\frac{2}{5}\sqrt{10}$}\\
\implies \fbox{$\frac{ \partial u }{ \partial y } =\frac{3}{10}\sqrt{10}$}\\
\implies \fbox{$\frac{ \partial u }{ \partial t } =\frac{1}{5}\sqrt{10}$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\frac{dy}{dx}=-\frac{F_{x}}{F_{y}}\\
y^{5}+x^{2}y^{3}=1+ye^{x^{2}}\\
\text{Implicit Differentiation:}\\
5y^{4} \frac{dy}{dx}+2xy^{3}+3x^{2}y^{2} \frac{dy}{dx}=2xye^{x^{2}}+e^{x^{2}} \frac{dy}{dx}\\
\implies \frac{dy}{dx}(5y^{4}+3x^{2}y^{2}-e^{x^{2}})=2xye^{x^{2}}-2xy^{3}\\
\implies \fbox{$\frac{dy}{dx}=\frac{2xye^{x^{2}}-2xy^{3}}{5y^{4}+3x^{2}y^{2}-e^{x^{2}}}$}\\
\text{Formula:}\\
F(x,y)=y^{5}+x^{2}y^{3}-ye^{x^{2}}=1\\
\implies F_{x}=2xy^{3}-2xye^{x^{2}}\\
\implies F_{y}=5y^{4}+3x^{2}y^{2}-e^{x^{2}}\\
\implies \fbox{$\frac{dy}{dx}=\frac{2xye^{x^{2}}-2xy^{3}}{5y^{4}+3x^{2}y^{2}-e^{x^{2}}}$}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
yz=\ln(x+z)\\
\text{Implicit Differentiation:}\\
y\frac{ \partial z }{ \partial x } =\frac{1+\frac{ \partial z }{ \partial x } }{x+z}\\
\implies \frac{ \partial z }{ \partial x } \left( y-\frac{1}{x+z} \right)=\frac{1}{x+z}\\
\implies\fbox{$\frac{ \partial z }{ \partial x } =\frac{1}{y(x+z)-1}$}\\
z+y\frac{ \partial z }{ \partial y } =\frac{1}{x+z}\frac{ \partial z }{ \partial y } \\
\implies \frac{ \partial z }{ \partial y } \left( y-\frac{1}{x+z} \right)=-z\\
\implies \fbox{$\frac{ \partial z }{ \partial y } =-\frac{z(x+z)}{y(x+z)-1}$}\\
\text{Formulas:}\\
F(x,y,z)=yz-\ln(x+z)\\
\implies F_{x}=-\frac{1}{x+z}\\
\implies F_{y}=z\\
\implies F_{z}=y-\frac{1}{x+z}\\
\frac{ \partial z }{ \partial x } =-\frac{F_{x}}{F_{z}}\\
=-\frac{-\frac{1}{x+z}}{y-\frac{1}{x+z}}\\
\implies \fbox{$\frac{ \partial z }{ \partial x } =\frac{1}{y(x+z)-1}$}\\
\frac{ \partial z }{ \partial y } =-\frac{F_{y}}{F_{z}}\\
=-\frac{z}{y-\frac{1}{x+z}}\\
\implies \fbox{$\frac{ \partial z }{ \partial y } =-\frac{z(x+z)}{y(x+z)-1}$}
\end{align*}
$$
# Problem 7
$$
z=f(x,y),x=r\cos \theta,y=r\sin\theta
$$
## a)
$$
\begin{align*}
\frac{ \partial z }{ \partial r } =\frac{ \partial z }{ \partial x } \frac{ \partial x }{ \partial r } +\frac{ \partial z }{ \partial y } \frac{ \partial y }{ \partial r } \\
=\fbox{$\frac{ \partial z }{ \partial r } =\frac{ \partial z }{ \partial x } \cos\theta+\frac{ \partial z }{ \partial y } \sin\theta$}\\
\frac{ \partial z }{ \partial \theta } =\frac{ \partial z }{ \partial x } \frac{ \partial x }{ \partial \theta } +\frac{ \partial z }{ \partial y } \frac{ \partial y }{ \partial \theta } \\
=\fbox{$\frac{ \partial z }{ \partial \theta } =-\frac{ \partial z }{ \partial x }r\sin\theta+\frac{ \partial z }{ \partial y } r\cos\theta $}
\end{align*}
$$
## b)
$$
\begin{align*}
\left( \frac{ \partial z }{ \partial x }  \right)^{2}+\left( \frac{ \partial z }{ \partial y } \right)^{2}=\left( \frac{ \partial z }{ \partial r } \right)^{2}+\frac{1}{r^{2}}\left( \frac{ \partial z }{ \partial \theta } \right)^{2}\\
=\left( \frac{ \partial z }{ \partial x } \cos\theta+\frac{ \partial z }{ \partial y } \sin\theta \right)^{2}+\frac{1}{r^{2}}\left( -\frac{ \partial z }{ \partial x } r\sin\theta +\frac{ \partial z }{ \partial y } r\cos\theta\right)^{2}\\
=\left( \frac{ \partial z }{ \partial x } \right)^{2}\cos^{2}\theta+2\frac{ \partial z }{ \partial x } \frac{ \partial z }{ \partial y } \cos\theta\sin\theta+\left( \frac{ \partial z }{ \partial y } \right)^{2}\sin^{2}\theta\\
+\frac{1}{r^{2}}\left( \left( \frac{ \partial z }{ \partial x } \right)^{2}r^{2}\sin^{2}\theta-2\frac{ \partial z }{ \partial x } \frac{ \partial z }{ \partial y } r^{2}\cos\theta\sin\theta+\left( \frac{ \partial z }{ \partial y }  \right)^{2}r^{2}\cos^{2}\theta \right)\\
=\left( \frac{ \partial z }{ \partial x }  \right)^{2}\cos^{2}\theta+\left( \frac{ \partial z }{ \partial x }  \right)^{2}\sin^{2}\theta+\left( \frac{ \partial z }{ \partial y }  \right)^{2}\sin^{2}\theta+\left( \frac{ \partial z }{ \partial y }  \right)^{2}\cos^{2}\theta\\
=\left( \frac{ \partial z }{ \partial x }  \right)^{2}+\left( \frac{ \partial z }{ \partial y }  \right)^{2} \Huge\checkmark
\end{align*}
$$
# Problem 8
$$
\begin{align*}
z=f(x,y),x=r\cos\theta,y=r\sin\theta\\
\text{From \bf Problem 7\rm:}\\
\frac{ \partial z }{ \partial r } =\frac{ \partial z }{ \partial x } \cos\theta+\frac{ \partial z }{ \partial y } \sin\theta\\
\frac{ \partial z }{ \partial \theta } =-\frac{ \partial z }{ \partial x }r\sin\theta+\frac{ \partial z }{ \partial y } r\cos\theta\\
\implies\frac{ \partial^{2} z }{ \partial r^{2} } =\frac{ \partial^{2} z }{ \partial x \partial r } \cos\theta+\frac{ \partial^{2} z }{ \partial y \partial r } \sin\theta\\
=\left( \frac{ \partial^{2} z }{ \partial x^{2} } \frac{ \partial x }{ \partial r } +\frac{ \partial^{2} z }{ \partial x \partial y } \frac{ \partial y }{ \partial r } \right)\cos\theta +\left( \frac{ \partial^{2} z }{ \partial y \partial x } \frac{ \partial x }{ \partial r } +\frac{ \partial^{2} z }{ \partial y^{2} } \frac{ \partial y }{ \partial r }  \right)\sin\theta\\
=\left( \frac{ \partial^{2} z }{ \partial x^{2} } \cos\theta+\frac{ \partial^{2} z }{ \partial x \partial y } \sin\theta \right)\cos\theta+\left( \frac{ \partial^{2} z }{ \partial y \partial x } \cos\theta+\frac{ \partial^{2} z }{ \partial y^{2} } \sin\theta \right)\sin\theta\\
=\frac{ \partial^{2} z }{ \partial x^{2} } \cos^{2}\theta+\frac{ \partial^{2} z }{ \partial x \partial y } \sin\theta\cos\theta+\frac{ \partial^{2} z }{ \partial y \partial x } \cos\theta\sin\theta+\frac{ \partial^{2} z }{ \partial y^{2} } \sin ^{2}\theta\\
=\frac{ \partial^{2} z }{ \partial x^{2} } \cos^{2}\theta+\frac{ \partial^{2} z }{ \partial y^{2} }\sin^{2}\theta+2\sin\theta\cos\theta\frac{ \partial^{2} z }{ \partial x \partial y }  \\
\implies \frac{ \partial^{2} z }{ \partial \theta^{2} } =-\frac{ \partial^{2} z }{ \partial x \partial \theta } r\sin\theta-\frac{ \partial z }{ \partial x } r\cos\theta+\frac{ \partial^{2} z }{ \partial y \partial \theta } r\cos\theta-\frac{ \partial z }{ \partial y } r\sin\theta\\
=-\left( -\frac{ \partial^{2} z }{ \partial x^{2} }r\sin\theta +\frac{ \partial^{2} z }{ \partial x\partial y } r\cos\theta \right)r\sin\theta-\frac{ \partial z }{ \partial x } r\cos\theta\\
+\left( -\frac{ \partial^{2} z }{ \partial y \partial x }r\sin\theta+\frac{ \partial^{2} z }{ \partial y^{2} } r\cos\theta \right)r\cos\theta-\frac{ \partial z }{ \partial y } r\sin\theta\\
=\frac{ \partial^{2} z }{ \partial x^{2} } r^{2}\sin^{2}\theta-2\frac{ \partial^{2} z }{ \partial x \partial y } r^{2}\cos\theta\sin\theta+\frac{ \partial^{2} z }{ \partial y^{2} } r^{2}\cos^{2}\theta-\frac{ \partial z }{ \partial x } r\cos\theta-\frac{ \partial z }{ \partial y } r\sin\theta\\
\implies \frac{ \partial^{2} z }{ \partial r^{2} } +\frac{1}{r^{2}}\frac{ \partial^{2} z }{ \partial \theta^{2} } +\frac{1}{r}\frac{ \partial z }{ \partial r } \\
= \frac{ \partial^{2} z }{ \partial x^{2} } \cos^{2}\theta+\frac{ \partial^{2} z }{ \partial y^{2} }\sin^{2}\theta+2\sin\theta\cos\theta\frac{ \partial^{2} z }{ \partial x \partial y }\\
+\frac{1}{r^{2}}\left( \frac{ \partial^{2} z }{ \partial x^{2} } r^{2}\sin^{2}\theta-2\frac{ \partial^{2} z }{ \partial x \partial y } r^{2}\cos\theta\sin\theta+\frac{ \partial^{2} z }{ \partial y^{2} } r^{2}\cos^{2}\theta-\frac{ \partial z }{ \partial x } r\cos\theta-\frac{ \partial z }{ \partial y } r\sin\theta \right)\\
+\frac{1}{r}\left( \frac{ \partial z }{ \partial x } \cos\theta+\frac{ \partial z }{ \partial y } \sin\theta \right)\\
=\frac{ \partial^{2} z }{ \partial x^{2} } \cos^{2}\theta+\frac{ \partial^{2} z }{ \partial x^{2} } \sin^{2}\theta+\frac{ \partial^{2} z }{ \partial y^{2} } \sin^{2}\theta+\frac{ \partial^{2} z }{ \partial y^{2} } \cos^{2}\theta\\
=\frac{ \partial^{2} z }{ \partial x^{2} } +\frac{ \partial^{2} z }{ \partial y^{2} } \huge \checkmark
\end{align*}
$$
# Problem 9
$$
\begin{align*}
F(x,y,z)=0\\
F(x(y,z),y,z)=0\\
\implies F_{x}\frac{ \partial x }{ \partial y }+F_{y}=0\\
\implies \frac{ \partial x }{ \partial y } =-\frac{F_{y}}{F_{x}}\\
F(x,y(x,z),z)=0\\
\implies F_{y}\frac{ \partial y }{ \partial z } +F_{z}=0\\
\implies \frac{ \partial y }{ \partial z } =-\frac{F_{z}}{F_{y}}\\
F(x,y,z(x,y))=0\\
\implies F_{x}+F_{z}\frac{ \partial z }{ \partial x }=0\\
\implies \frac{ \partial z }{ \partial x } =-\frac{F_{x}}{F_{z}}\\
\implies \frac{ \partial x }{ \partial y } \frac{ \partial y }{ \partial z } \frac{ \partial z }{ \partial x } =\left( -\frac{F_{y}}{F_{x}} \right)\left( -\frac{F_{x}}{F_{y}} \right)\left( -\frac{F_{x}}{F_{z}} \right)\\
\implies \fbox{$\frac{ \partial x }{ \partial y } \frac{ \partial y }{ \partial z } \frac{ \partial z }{ \partial x } =-1$}
\end{align*}
$$
# Problem 10
$$
yz=\ln(x+z),(0,0,1)
$$
## a)
$$
\begin{align*}
F(x,y,z)=yz-\ln(x+z)\\
\overrightarrow{\nabla F }=\vec{n}=\left\langle  -\frac{1}{x+z}, z,y-\frac{1}{x+z} \right\rangle \\
\overrightarrow{\nabla F }(0,0,1)=\vec{n}=\langle -1,1,-1 \rangle \\
-x+y-z=c\\
-(0)+(0)-(1)=c\implies c=-1\\
\implies \fbox{$x-y+z=1$}
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{n}=\langle -1,1,-1 \rangle\\
\implies \fbox{$\begin{cases}
x=-t \\
y=t \\
z=1-t
\end{cases}$}
\end{align*}
$$
# Problem 11
$$
\begin{align*}
y=x^{2}+z^{2}\\
T\parallel x+2y+3z=1\implies \vec{n}=c\langle 1,2,3 \rangle\\
F(x,y,z)=x^{2}+z^{2}-y=0\\
\vec{n}=\overrightarrow{\nabla F }=\langle 2x,-1,2z \rangle\\
\implies \langle 2x,-1,2z \rangle =c\langle 1,2,3 \rangle\\
\implies\langle 2x,-1,2z \rangle =\left\langle  -\frac{1}{2},-1,-\frac{3}{2} \right\rangle\\
\implies x=-\frac{1}{4},z=-\frac{3}{4}\implies y=\frac{5}{8}\\
\fbox{$\left( -\frac{1}{4}, \frac{5}{8},-\frac{3}{4} \right)$}
\end{align*}
$$
# Problem 12
$$
\begin{align*}
E(x,y,z)=3x^{2}+2y^{2}+z^{2}=9\\
S(x,y,z)=x^{2}+y^{2}+z^{2}-8x-6y-8z+24=0\\
\text{Show }(x,y,z)=(1,1,2)\implies\vec{n}_{E}=c\vec{n}_{S}\\
\vec{n}_{E}=\overrightarrow{\nabla E }=\langle 6x,4y,2z \rangle\\
\vec{n}_{S}=\overrightarrow{\nabla S }=\langle 2x-8,2y-6,2z-8 \rangle\\
\implies \langle 6x,4y,2z \rangle =c\langle 2x-8,2y-6,2z-8 \rangle\\
(x,y,z)=(1,1,2)\\
\implies \langle 6,4,4 \rangle =c\langle -6,-4,-4 \rangle\\
c=-1\huge\checkmark  
\end{align*}
$$