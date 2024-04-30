---
tags:
  - math/calc
due: 2023-10-14
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW5-2023.pdf)
# Problem 1
$$
\begin{align*}
\lim_{ (x,y) \to (0,0) } \frac{xy}{\sqrt{x^{2}+y^{2}}} \\
\text{Let }x=y\\
\lim_{ (x,y) \to (0,0) } \frac{x^{2}}{\sqrt{2x^{2}}}=\lim_{ (x,y) \to (0,0) } \frac{x}{\sqrt{2}}=\fbox{$0$}\\
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\lim_{ (x,y) \to (0,0) } \frac{xy^{4}}{x^{2}+y^{8}}\\
\text{Let }x=y\\
\lim_{ (x,y) \to (0,0) } \frac{x^{5}}{x^{2}+x^{8}}=\lim_{ (x,y) \to (0,0) } \frac{x^{3}}{1+x^{6}}=0\\
\text{Let }x=y^{4}\\
\lim_{ (x,y) \to (0,0) } \frac{y^{8}}{2y^{8}}=\frac{1}{2}\neq0\\
\therefore \fbox{Limit does not exist}
\end{align*}
$$
# Problem 4
![[Multivariable Homework 5 2023-10-12 10.11.02.excalidraw]]
$$
\begin{align*}
V(r,h)=\pi r^{2}h\\
dV=\frac{ \partial V }{ \partial r }\Delta r+\frac{ \partial V }{ \partial h }\Delta h\\
=2\pi rh\Delta r+\pi r^{2}\Delta h\\
r=4,h=12,\Delta r,\Delta h=0.04\\
\implies dV=3.84\pi+0.64\pi\\
=\fbox{$4.48\pi\approx14.07$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\frac{1}{R}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\frac{1}{R_{3}}\\
R=\frac{R_{1}R_{2}R_{3}}{R_{2}R_{3}+R_{1}R_{3}+R_{1}R_{2}}\\
dR=\frac{ \partial R }{ \partial R_{1} }\Delta R_{1}+\frac{ \partial R }{ \partial R_{2} }\Delta R_{2}+\frac{ \partial R }{ \partial R_{3} }\Delta R_{3}\\
=R^{2}\left( \frac{\Delta R_{1}}{R_{1}^{2}}+\frac{\Delta R_{2}}{R_{2}^{2}}+\frac{\Delta R_{3}}{R_{3}^{2}} \right)\\
R_{1}=25\ohm,R_{2}=40\ohm,R_{3}=50\ohm\quad \pm0.5\%\\
\Delta R_{1}=0.125,\Delta R_{2}=0.2,\Delta R_{3}=0.25\\
R=11.76\\
\implies dR=11.76^{2}\left( \frac{0.125}{25^{2}}+\frac{0.2}{40^{2}}+\frac{0.25}{50^{2}} \right)\\
=\fbox{$0.059\ohm$}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
P(2,1,3)\\
r_{1}(t)=\langle2+3t,1-t^{2},3-4t+t^{2}\rangle\\
r_{2}(u)=\langle1+u^{2},2u^{3}-1,2u+1\rangle\\
r_{1}(0)=P,r_{2}(1)=P\\
\dot{r}_{1}(t)=\langle3,-2t,2t-4\rangle\\
\dot{r}_{2}(u)=\langle2u,6u^{2},2\rangle\\
\dot{r}_{1}(0)=\langle3,0,-4\rangle,\dot{r}_{2}(1)=\langle2,6,2\rangle\\
\vec{n}=\dot{r}_{1}(0)\times\dot{r}_{2}(1)\\
=\langle3,0,-4\rangle\times\langle1,3,1\rangle\\
=\langle(0)(1)-(-4)(3),(-4)(1)-(3)(1),(3)(3)-(0)(1)\rangle\\
=\langle12,-7,9\rangle\\
\implies 12x-7y+9z=c\\
12(2)-7(1)+9(3)=c\\
\implies c=44\\
\implies \fbox{$12x-7y+9z=44$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
z=\cos(x+4y)\\
\frac{dz}{dt}=-\sin(x+4y)\left( \frac{dx}{dt}+4\frac{dy}{dt} \right)\\
x=5t^{4},y=\frac{1}{t}\\
\frac{dx}{dt}=20t^{3}, \frac{dy}{dt}=-\frac{1}{t^{2}}\\
\implies \fbox{$\frac{dz}{dt}=-\sin\left( 5t^{4}+\frac{4}{t} \right)\left( 20t^{3}-\frac{4}{t^{2}} \right)$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
V(r,h)=\frac{1}{3}\pi r^{2}h\\
\frac{dV}{dt}=\frac{2}{3}\pi rh \frac{dr}{dt}+\frac{1}{3}\pi r^{2} \frac{dh}{dt}\\
\frac{dr}{dt}=1.8, \frac{dh}{dt}=-2.5\\
r=120,h=140\\
\implies \frac{dV}{dt}=\frac{2}{3}\pi(120)(140)(1.8)+\frac{1}{3}\pi(120)^{2}(-2.5)\\
=25635\text{ in}^{3}/\text{sec}
\end{align*}
$$
# Problem 9
$$
\begin{align*}
V=IR\\
R=400\ohm,I=0.08\text{A}\\
\frac{dV}{dt}=-0.01, \frac{dR}{dt}=0.03\\
\frac{dV}{dt}=\frac{dI}{dt}R+I \frac{dR}{dt}\\
\implies \frac{dI}{dt} = \frac{1}{R}\left( \frac{dV}{dt}-I \frac{dR}{dt} \right)\\
=\frac{1}{400}(-0.01-(0.08)(0.03))\\
=\fbox{$-0.000031$ A/sec}
\end{align*}
$$
# Problem 10
$$
f(x,y)=\frac{y^{2}}{x},P(1,2),\hat{u}=\left\langle  \frac{2}{3}, \frac{\sqrt{5}}{3} \right\rangle
$$
## a)
$$
\overrightarrow{\nabla f}=\left\langle  -\frac{y^{2}}{x^{2}}, \frac{2y}{x} \right\rangle
$$
## b)
$$
\begin{align*}
\overrightarrow{\nabla f}(1,2)=\left\langle  -\frac{2^{2}}{1^{2}}, \frac{2(2)}{1} \right\rangle=\langle -4,4\rangle
\end{align*}
$$
## c)
$$
\begin{align*}
\overrightarrow{\nabla f}(1,2)\cdot \hat{u}=\langle-4,4\rangle\cdot\left\langle  \frac{2}{3}, \frac{\sqrt{5}}{3} \right\rangle\\
=-4\left( \frac{2}{3} \right)+4\left( \frac{\sqrt{5}}{3} \right)\\
=\fbox{$-\frac{8}{3}+\frac{4}{3}\sqrt{5}\approx0.315$}
\end{align*}
$$
# Problem 11
$$
f(x,y,z)=\sqrt{x+yz},P(1,3,1),\hat{u}=\left\langle  \frac{2}{7}, \frac{3}{7}, \frac{6}{7} \right\rangle
$$
## a)
$$
\overrightarrow{\nabla f }=\left\langle  \frac{1}{2\sqrt{x+yz}}, \frac{z}{2\sqrt{x+yz}}, \frac{y}{2\sqrt{x+yz}} \right\rangle
$$
## b)
$$
\overrightarrow{\nabla f }(1,3,1)=\left\langle  \frac{1}{4}, \frac{1}{4}, \frac{3}{4}  \right\rangle 
$$
## c)
$$
\begin{align*}
\overrightarrow{\nabla f }(1,3,1)\cdot\hat{u}=\left\langle  \frac{1}{4}, \frac{1}{4}, \frac{3}{4}  \right\rangle\cdot\left\langle  \frac{2}{7}, \frac{3}{7}, \frac{6}{7}  \right\rangle \\
=\frac{1}{4} \frac{2}{7}+\frac{1}{4} \frac{3}{7}+\frac{3}{4} \frac{6}{7}\\
=\fbox{$\frac{23}{28}\approx0.8214$}
\end{align*}
$$
# Problem 12
$$
\begin{align*}
f(x,y)=\ln(x^{2}+y^{2}),(2,1),\vec{v}=\langle -1,2 \rangle\\
\overrightarrow{\nabla f }(2,1)\cdot \frac{\vec{v}}{\|\vec{v}\|}\\
=\left\langle  \frac{2x}{x^{2}+y^{2}}, \frac{2y}{x^{2}+y^{2}}  \right\rangle_{(2,1)}\cdot\left\langle  -\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}  \right\rangle\\
=\left( \frac{4}{5} \right)\left( -\frac{1}{\sqrt{5}} \right)+\left( \frac{2}{5} \right)\left( \frac{2}{\sqrt{5}} \right)\\
=\fbox{$0$}
\end{align*}
$$
# Problem 13
$$
\begin{align*}
f(x,y,z)=\sqrt{xyz},(3,2,6),\vec{v}=\langle -1,-2,2 \rangle\\
\overrightarrow{\nabla f }(3,2,6)\cdot \frac{\vec{v}}{\|\vec{v}\|}\\
=\left\langle  \frac{yz}{2\sqrt{xyz}}, \frac{xz}{2\sqrt{xyz}}, \frac{xy}{2\sqrt{xyz}} \right\rangle_{(3,2,6)}\cdot\left\langle  -\frac{1}{3}, -\frac{2}{3}, \frac{2}{3}  \right\rangle\\
=(1)\left( -\frac{1}{3} \right)+\left( \frac{3}{2} \right)\left( -\frac{2}{3} \right)+\left( \frac{1}{2} \right)\left( \frac{2}{3} \right)\\
=\fbox{$-1$} 
\end{align*}
$$
# Problem 14
$$
z=1000-0.005x^{2}-0.01y^{2},(60,40,966)
$$
## a)
$$
-\frac{ \partial z }{ \partial y } =-0.02y=\fbox{Descend at 0.8 units/sec}
$$
## b)
$$
\begin{align*}
\hat{u}=\left\langle  -\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}  \right\rangle\\
\overrightarrow{\nabla f }(60,40)\cdot\hat{u}=\langle -0.01x,-0.02y \rangle\cdot\hat{u}\\
=(-0.6)\left( -\frac{\sqrt{2}}{2} \right)+(-0.8)\left( \frac{\sqrt{2}}{2} \right)\\
=-\frac{\sqrt{2}}{10}\approx-0.1414\\
\fbox{Descend at 0.1414 units/sec}
\end{align*}
$$
## c)
$$
\begin{align*}
\overrightarrow{\nabla f }(60,40)=\fbox{$\langle -0.6,-0.8 \rangle$}\\
\|\overrightarrow{\nabla f }(60,40)\|^{2}=\fbox{1 unit/sec}\\
\langle -0.6,-0.8,1 \rangle \cdot\langle -0.6,-0.8,0 \rangle =\|\langle -0.6,-0.8,1 \rangle \|\|\langle -0.6,-0.8,0 \rangle \|\cos \theta\\
\implies \theta=\cos^{-1}\left( \frac{1}{\sqrt{2}} \right)=\fbox{45$\degree$ angle above horizontal}
\end{align*}
$$