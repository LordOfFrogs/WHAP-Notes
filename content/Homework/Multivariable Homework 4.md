---
tags:
  - math/calc
due: 2023-10-08
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW4-2023.pdf)
# Problem 1
$$
\begin{align*}
\vec{r}(t)=\langle 4\sqrt{t},t^{2},t\rangle\\
\vec{r}'(t)=\left\langle  \frac{2}{\sqrt{t}}, 2t,1 \right\rangle\\
\vec{r}'(1)=\langle 2,2,1\rangle,\|\vec{r}'(1)\|=3\\
\fbox{$\vec{T}=\left\langle  \frac{2}{3}, \frac{2}{3}, \frac{1}{3} \right\rangle$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\vec{r}(t)=\langle \cos t,3\sin t,4t\rangle\\
\vec{r}'(t)=\langle -\sin t,3\cos t,4\rangle\\
\vec{T}'(0)=\frac{\langle0,3,4\rangle}{\|\langle 0,3,4\rangle\|}=\fbox{$\left\langle  0, \frac{3}{5}, \frac{4}{5} \right\rangle$}\\
\fbox{$\vec{r}''(t)=\langle -\cos t,-3\sin t,0\rangle$}\\
\vec{r}'(t)\times \vec{r}''(t)=\\
\langle (3\cos t)(0)-(4)(-3\sin t),\\
(4)(-\cos t)-(-\sin t)(0),\\
(-\sin t)(-3\sin t)-(3\cos t)(-\cos t)\rangle\\
\fbox{$\vec{r}'(t)\times \vec{r}''(t)=\langle12\sin t,-4\cos t,3\rangle$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\vec{r}(t)\cdot \vec{r}'(t)=0\\
xx'+yy'+zz'=0\\
\text{Sphere: }x^{2}+y^{2}+z^{2}=c^{2}\\
\implies x=\sqrt{c^{2}-y^{2}-z^{2}},\\
\implies x'=\frac{-2yy'-2zz'}{2x}=-\frac{yy'+zz'}{x}\\
\implies xx'+yy'+zz'\\
=x\left( -\frac{yy'+zz'}{x} \right)+yy'+zz'\\
=-yy'-zz'+yy'+zz'=0\checkmark
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\vec{r}(t)=\langle\cos t,\sin t,\ln(\cos t)\rangle\\
\vec{r}'(t)=\langle -\sin t,\cos t,-\tan t\rangle\\
\|\vec{r}'(t)\|=\sqrt{\sin^{2}t+\cos^{2}t+\tan^{2}t}=\sqrt{1+\tan^{2}t}\\
L=\int_{0}^{\pi/4} \|\vec{r}'(t)\|\,dt\\
=\int_{0}^{\frac{\pi}{4}} |\sec t|\,dt=\int_{0}^{\frac{\pi}{4}}\sec t\,dt\\
\fbox{$\approx 0.881$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\vec{r}(t)=\langle12t,8t^{3/2},3t^{2}\rangle\\
\vec{r}'(t)=\langle12,12\sqrt{t},6t\rangle\\
\|\vec{r}'(t)\|=\sqrt{144+144t+36t^{2}}\\
=6\sqrt{t^{2}+4t+4}=6\sqrt{(t+2)^{2}}\\
=6t+12\\
\int_{0}^{1} 6t+12\,dt\\
=3t^{2}+12t\biggr\vert^{1}_{0}\\
=\fbox{$15$}
\end{align*}
$$
# Problem 6
$$
\vec{r}(t)=\left\langle  t, \frac{1}{2}t^{2},t^{2} \right\rangle
$$
## a)
$$
\begin{align*}
\vec{r}'(t)=\langle 1,t,2t\rangle\\
\vec{T}(t)=\frac{\langle 1,t,2t\rangle}{\sqrt{1+5t^{2}}}\\
=\fbox{$\left\langle  \frac{1}{\sqrt{1+5t^{2}}}, \frac{t}{\sqrt{1+5t^{2}}}, \frac{2t}{\sqrt{1+5t^{2}}} \right\rangle$}\\
\vec{T}'(t)=\left\langle -5t(1+5t^{2})^{-\frac{3}{2}}, (1+5t^{2})^{-\frac{3}{2}}, 2(1+5t^{2})^{-\frac{3}{2}}\right\rangle\\
\|\vec{T}'(t)\|=\sqrt{25t^{2}(1+5t^{2})^{-3}+(1+5t^{2})^{-3}+4(1+5t^{2})^{-3}}\\
=\frac{1}{1+5t^{2}}\sqrt{\frac{25t^{2}}{1+5t^{2}}+\frac{1}{1+5t^{2}}+\frac{4}{1+5t^{2}}}\\
=\frac{\sqrt{25t^{2}+5}}{(1+5t^{2})^{3/2}}\\
\vec{N}(t)=\left\langle  -5t(1+5t^{2})^{-\frac{3}{2}}, (1+5t^{2})^{-\frac{3}{2}}, 2(1+5t^{2})^{-\frac{3}{2}} \right\rangle \frac{(1+5t^{2})^{\frac{3}{2}}}{\sqrt{25t^{2}+5}}\\
=\fbox{$\left\langle  \frac{-5t}{\sqrt{25t^{2}+5}}, \frac{1}{\sqrt{25t^{2}+5}}, \frac{2}{\sqrt{25t^{2}+5}}\right\rangle$}
\end{align*}
$$
## b)
$$
\begin{align*}
\kappa(t)=\frac{\|\vec{T}'(t)\|}{\|\vec{r}'(t)\|}\\
=\frac{\frac{\sqrt{25t^{2}+5}}{(1+5t^{2})^{3/2}}}{\sqrt{1+5t^{2}}}=\fbox{$\frac{\sqrt{25t^{2}+5}}{(1+5t^{2})^{2}}$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\vec{r}(t)=\langle t,t^{2},e^{t}\rangle\\
\vec{r}'(t)=\langle 1,2t,e^{t}\rangle, \|\vec{r}'(t)\|=\sqrt{1+4t^{2}+e^{2t}}\\
\vec{r}''(t)=\langle 0,2,e^{t}\rangle\\
\vec{r}'(t)\times \vec{r}''(t)\\
=\langle (2t)(e^{t})-(e^{t})(2),(e^{t})(0)-(1)(e^{t}),(1)(2)-(2t)(0)\rangle\\
=\langle 2e^{t}(t-1),-e^{t},2\rangle\\
\|\vec{r}'(t)\times \vec{r}''(t)\|=\sqrt{4e^{2t}(t^{2}-2t+1)+e^{2t}+4}\\
=\sqrt{4t^{2}e^{2t}-8te^{2t}+4e^{2t}+e^{2t}+4}\\
=\sqrt{e^{2t}(4t^{2}-8t+5)+4}\\
\kappa(t)=\frac{\|\vec{r}'(t)\times\vec{r}''(t)\|}{\|\vec{r}'(t)\|^{3}}\\
=\fbox{$\frac{\sqrt{e^{2t}(4t^{2}-8t+5)+4}}{(1+4t^{2}+e^{2t})^{3/2}}$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\vec{r}(t)=\langle t,2\cos t,\sin t\rangle\\
\vec{r}'(t)=\fbox{$\vec{v}(t)=\langle1,-2\sin t,\cos t\rangle$}\\
\vec{r}''(t)=\vec{v}'(t)=\fbox{$\vec{a}(t)=\langle0,-2\cos t,-\sin t\rangle$}\\
\text{Speed: }\|\vec{v}(t)\|=\sqrt{1+4\sin^{2}t+\cos^{2}t}\\
=\fbox{$\sqrt{2+3\sin^{2}t}$}
\end{align*}
$$
![[Multivariable Homework 4 2023-10-04 13.34.32.excalidraw]]
# Problem 9
$$
\begin{align*}
\vec{r}(t)=\langle t,t^{2},3t\rangle\\
\vec{r}'(t)=\langle1,2t,3\rangle\\
\vec{r}''(t)=\vec{a}(t)=\langle0,2,0\rangle\\
\vec{a}=\frac{dv}{dt}\vec{T}+\kappa v^{2}\vec{N}\\
\frac{dv}{dt}=\frac{d}{dt}(\sqrt{4t^{2}+10})\\
\text{Tangential component: }\frac{4t}{\sqrt{4t^{2}+10}}\\
\vec{r}'(t)\times \vec{r}''(t)=\\
\langle (2t)(0)-(3)(2),(3)(0)-(1)(0),(1)(2)-(2t)(0)\rangle\\
=\langle -6,0,2\rangle,\|\langle-6,0,2\rangle\|=2\sqrt{10}\\
\kappa v^{2}=\frac{\|\vec{r}'(t)\times\vec{r}''(t)\|}{\|\vec{r}'(t)\|^{3}}(4t^{2}+10)\\
=\frac{2\sqrt{10}}{\sqrt{4t^{2}+10}}\\
\text{Normal component: }\frac{2\sqrt{5}}{\sqrt{2t^{2}+5}}
\end{align*}
$$
# Problem 10
$$
\begin{align*}
9-x^{2}-9y^{2}\geq0\\
9\geq x^{2}+9y^{2}\\
\frac{x^{2}}{3^{2}}+y^{2}\leq1
\end{align*}
$$
![[Multivariable Homework 4 2023-10-04 17.36.15.excalidraw]]
$$
\text{Range: }(-\infty,\ln9)
$$
# Problem 11
$$
\begin{align*}
y\geq0\\
25-x^{2}-y^{2}\geq0\\
\implies x^{2}+y^{2}\leq5^{2}
\end{align*}
$$
![[Multivariable Homework 4 2023-10-04 17.44.24.excalidraw]]
# Problem 12
![[Multivariable Homework 4 2023-10-04 17.49.45.excalidraw]]
# Problem 13
![[Multivariable Homework 4 2023-10-04 18.24.27.excalidraw]]
# Problem 14
$$
\begin{align*}
\frac{ \partial f }{ \partial x }=4x^{3}y^{3}+16xy\\
\frac{ \partial f }{ \partial y }=3x^{4}y^{2}+8x^{2} 
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\frac{ \partial z }{ \partial x } = y\sec^{2}xy\\
\frac{ \partial z }{ \partial y } = x\sec^{2}xy
\end{align*}
$$
# Problem 16
$$
\begin{align*}
\frac{ \partial f }{ \partial r } = \ln(r^{2}+s^{2})+\frac{2r^{2}}{r^{2}+s^{2}}\\
\frac{ \partial f }{ \partial s } = \frac{2rs}{r^{2}+s^{2}}
\end{align*}
$$
# Problem 17
$$
\begin{align*}
\frac{ \partial f }{ \partial x } = \frac{2xy^{2}}{t+2z}\\
\frac{ \partial f }{ \partial y } = \frac{2x^{2}y}{t+2z}\\
\frac{ \partial f }{ \partial z } = -\frac{2x^{2}y^{2}}{(t+2z)^{2}}\\
\frac{ \partial f }{ \partial t } = -\frac{x^{2}y^{2}}{(t+2z)^{2}}
\end{align*}
$$
# Problem 18
$$
\begin{align*}
f_{x}(x,y)=\frac{ \partial f }{ \partial x }\\
=\frac{1}{x+\sqrt{x^{2}+y^{2}}}\left( 1+\frac{x}{\sqrt{x^{2}+y^{2}}} \right)\\
f_{x}(3,4)=\frac{1}{3+\sqrt{3^{2}+4^{2}}}\left( 1+\frac{3}{\sqrt{3^{2}+4^{2}}} \right)\\
=\frac{1}{8}\left( 1+\frac{3}{5} \right)\\
\implies \fbox{$f_{x}(3,4)=\frac{1}{5}$}
\end{align*}
$$
# Problem 19
$$
\begin{align*}
f_{x}(x,y)=\frac{ \partial f }{ \partial x }\\
= \frac{1}{1+\left( \frac{y}{x} \right)^{2}}\left( -\frac{y}{x^{2}} \right)\\
=-\frac{y}{x^{2}+y^{2}}\\
\fbox{$f_{x}(2,3)=-\frac{3}{13}$}
\end{align*}
$$
# Problem 20
$$
\begin{align*}
\frac{ \partial P }{ \partial L } = \alpha bL^{\alpha-1}K^{\beta}\\
\frac{ \partial P }{ \partial K } = \beta bL^{\alpha}K^{\beta-1}\\
L\frac{ \partial P }{ \partial L }+K\frac{ \partial P }{ \partial K }\\
=L(\alpha bL^{\alpha-1}K^{\beta})+K(\beta bL^{\alpha}K^{\beta-1})\\
=\alpha bL^{\alpha}K^{\beta}+\beta bL^\alpha K^{\beta}\\
=(\alpha+\beta)(bL^\alpha K^\beta)\\
=(\alpha+\beta)P\ \checkmark
\end{align*}
$$
