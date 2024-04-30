---
tags:
  - math
  - math/calc
due: 2023-09-23
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW2-2023.pdf)
# Problem 1
![[Multivariable Problem Set 2 2023-09-17 18.44.50.excalidraw]]
$$
\begin{align*}
(a+b)^{2}=4\left( \frac{1}{2}ab \right)+c^{2}\\
\implies a^{2}+2ab+b^{2}=2ab+c^{2}\\
\implies \fbox{$a^{2}+b^{2}=c^{2}$}
\end{align*}
$$
# Problem 2
![[Multivariable Problem Set 2 2023-09-17 18.56.31.excalidraw]]
$$
\begin{align*}
A=m+n\\
\text{From Pythagorean Theorem:}\\
m^{2}+h^{2}=B^{2}\\
n^{2}+h^{2}=C^{2}\\
\cos \theta=\frac{m}{B}\implies m=B\cos \theta\\
\\
n=A-m\\
\implies n^{2}=(A-m)^{2}\\
\implies n^{2}=A^{2}-2Am+m^{2}\\
\implies n^{2}+h^{2}=A^{2}+m^{2}+h^{2}-2AB\cos \theta\\
\implies \fbox{$C^{2}=A^{2}+B^{2}-2AB\cos \theta$}
\end{align*}
$$
# Problem 3
![[Multivariable Problem Set 2 2023-09-17 19.15.28.excalidraw]]
$$
\begin{align*}
\vec{u}=\vec{x}-\vec{w}\\
\vec{v}=\vec{x}+\vec{w}\\
\|\vec{x}\|=\|\vec{w}\| (\because \vec{x},\vec{w}\text{ are radii})\\
\implies\|\vec{x}\|^{2}=\|\vec{w}\|^{2}\\
\implies \vec{x}\cdot\vec{x}=\vec{w}\cdot\vec{w}\\
\implies \vec{x}\cdot\vec{x}-\vec{w}\cdot\vec{w}=0\\
\implies (\vec{x}+\vec{w})\cdot(\vec{x}-\vec{w})=0\\
\implies \vec{u}\cdot\vec{v}=0\\
\therefore \fbox{$\vec{u}\perp\vec{v}$}
\end{align*}
$$
# Problem 4
![[Multivariable Problem Set 2 2023-09-17 20.52.10.excalidraw]]
$$
\begin{align*}
\overset\longrightarrow{ED}=\vec{u}=\langle2,-3,-2\rangle, \|\vec{u}\|=\sqrt{17}\\
\overset\longrightarrow{DF}=\vec{v}=\langle1,1,-2\rangle, \|\vec{v}\|=\sqrt{6}\\
\overset\longrightarrow{FE}=\vec{w}=\langle-3,2,4\rangle, \|\vec{w}\|=\sqrt{29}\\
\vec{a}\cdot\vec{b}=\|a\|\|b\|\cos \theta\\
\therefore \theta=\cos^{-1}\left(\frac{\vec{a}\cdot \vec{b}}{\|a\|\|b\|}\right)\\
\angle E=\cos^{-1}\left( \frac{\vec{u}\cdot(-\vec{w})}{\|\vec{u}\|\|\vec{w}\|} \right)=\cos^{-1}(\frac{(2)(3)+(-3)(-2)+(-2)(-4)}{\sqrt{17}\sqrt{29}})\approx26\degree\\
\angle D=\cos^{-1}\left( \frac{(-\vec{u})\cdot\vec{v}}{\|\vec{u}\|\|\vec{v}\|} \right)=\cos^{-1}(\frac{(-2)(1)+(3)(1)+(2)(-2)}{\sqrt{17}\sqrt{6}})\approx107\degree\\
\angle F=\cos^{-1}\left( \frac{(-\vec{v})\cdot\vec{w}}{\|\vec{v}\|\|\vec{w}\|} \right)=\cos^{-1}(\frac{(-1)(-3)+(-1)(2)+(2)(4)}{\sqrt{6}\sqrt{29}})\approx47\degree
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\mathscr{l}=\left(\frac{\vec{a}\cdot\vec{b}}{\|\vec{a}\|}\right)=\left( \frac{(1)(-4)+(2)(1)}{\sqrt{6}}\right)=-\frac{2}{\sqrt{6}}=\fbox{$-\frac{\sqrt{6}}{3}$}\\
\frac{\mathscr{l}\vec{a}}{\|\vec{a}\|}=-\frac{\sqrt{6}}{3\sqrt{6}}\langle1,2\rangle=\fbox{$\left\langle-\frac{1}{3},-\frac{2}{3} \right\rangle$}
\end{align*}
$$
# Problem 6
![[Multivariable Problem Set 2 2023-09-17 21.53.51.excalidraw]]
$$
\begin{align*}
ax+by+c=0\\
ax_{0}+c=0\implies x_{0}=-\frac{c}{a}\\
\vec{u}=\langle x_{1}-x_{0},y_{1}\rangle=\left\langle  x_{1}+\frac{c}{a},y_{1} \right\rangle,\ \|\vec{u}\|=\sqrt{\left( x_{1}+\frac{c}{a} \right)^{2}+y_{1}^{2}}\\
\vec{n}=\langle a,b\rangle,\ \|\vec{n}\|=\sqrt{a^{2}+b^{2}}\\
\mathscr{l}=\left|\frac{\vec{u}\cdot\vec{n}}{\|\vec{n}\|}\right|=\fbox{$\frac{|ax_{1}+by_{1}+c|}{\sqrt{a^{2}+b^{2}}}$}\\
P_{1}(x_{1},y_{1})=(-2,3),\ 3x-4y+5=0\\
\frac{|3(-2)-4(3)+5|}{\sqrt{ 3^{2}+(-4)^{2}}}=\fbox{$\frac{13}{5}$}
\end{align*}
$$
# Problem 7
![[Multivariable Problem Set 2 2023-09-18 10.19.50.excalidraw]]
$$
\begin{align*}
\vec{u}=a\hat{\imath}+a\hat{\jmath}+a\hat{k}\\
\vec{u}\cdot a\hat{k}=\|\vec{u}\|a\cos \theta=(a)(0)+(a)(0)+(a)(a)=a^{2}\\
\implies \cos \theta=\frac{a}{\|\vec{u}\|}=\frac{1}{\sqrt{3}}\\
\implies \fbox{$\theta=0.955\text{ rad}=54.74\degree$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\vec{c}=\|\vec{a}\|\vec{b}+\|\vec{b}\|\vec{a}\\
\text{$\vec{c}$ bisects angle between $\vec{a}$ and $\vec{b}$}\Longleftrightarrow \theta_{ac}=\theta_{bc}\\
\Longleftrightarrow \frac{\vec{c}\cdot\vec{a}}{\|\vec{c}\|\|\vec{a}\|}=\cos \theta=\frac{\vec{c}\cdot\vec{b}}{\|\vec{c}\|\|\vec{b}\|}\\
\Longleftrightarrow \frac{\vec{a}\cdot\|\vec{a}\|\vec{b}+\|\vec{b}\|\|\vec{a}\|^{2}}{\|\vec{a}\|}=\frac{\|\vec{a}\|\|\vec{b}\|^{2}+\vec{b}\cdot\|\vec{b}\|\vec{a}}{\|\vec{b}\|}\\
\Longleftrightarrow \vec{a}\cdot\vec{b}+\|\vec{a}\|\|\vec{b}\|\overset\checkmark=\vec{a}\cdot\vec{b}+\|\vec{a}\|\|\vec{b}\|\\
\text{and $\vec{c}$ must lie on the same plane as $\vec{a}$ and $\vec{b}$}\\
\Longleftrightarrow \text{comp}_{\vec{a}\times\vec{b}}{\vec{c}}=\frac{\vec{c}\cdot(\vec{a}\times\vec{b})}{\|\vec{a}\times \vec{b}\|}=0\\
\Longleftrightarrow \vec{c}\cdot(\vec{a}\times \vec{b})=0\\
\Longleftrightarrow \|\vec{a}\|\vec{b}\cdot(\vec{a}\times \vec{b})+\|\vec{b}\|\vec{a}\cdot(\vec{a}\times \vec{b})=0\\
\Longleftrightarrow \|\vec{a}\|(\vec{b}\times \vec{b})\cdot \vec{a}+\|\vec{b}\|(\vec{a}\times \vec{a})\cdot \vec{b}=0\\
\Longleftrightarrow 0\overset\checkmark=0
\end{align*}
$$
# Problem 9
$$
\begin{align*}
(\hat{\imath}+\hat{\jmath}+\hat{k})\times(2\hat{\imath}+\hat{k})=\langle1,1,1\rangle\times\langle2,0,1\rangle\\
=\langle (1)(1)-(1)(0),\ (1)(2)-(1)(1),\ (1)(0)-(1)(2)\rangle\\
=\langle1,1,-2\rangle,\ \|\langle1,1,-2\rangle\|=\sqrt{6}\\
\implies \fbox{$\left\langle  \frac{\sqrt{6}}{6}, \frac{\sqrt{6}}{6},-\frac{\sqrt{6}}{3} \right\rangle,\ \left\langle  -\frac{\sqrt{6}}{6}, -\frac{\sqrt{6}}{6},\frac{\sqrt{6}}{3} \right\rangle$}
\end{align*}
$$
# Problem 10
$$
\begin{align*}
A=\|\overset\longrightarrow{KL}\times\overset\longrightarrow{KN}\|\\
=\|\langle 0,1,3\rangle\times\langle 2,5,0\rangle\|\\
=\|\langle(1)(0)-(3)(5),(3)(2)-(0)(0),(0)(5)-(1)(2)\rangle\|\\
=\|\langle-15,6,-2\rangle\|\\
=\sqrt{265}\approx 16.2788
\end{align*}
$$
# Problem 11
## a)
$$
\begin{align*}
\vec{n}=\overset\longrightarrow{PQ}\times\overset\longrightarrow{PR}\\
=\langle 1,2,1 \rangle\times\langle 5,0,-2 \rangle\\
=\langle (2)(-2)-(1)(0),(1)(5)-(1)(-2),(1)(0)-(2)(5) \rangle\\
=\langle -4,7,-10 \rangle
\end{align*}
$$
## b)
$$
\begin{align*}
A_{\triangle}=\frac{1}{2}A_{parallelogram}=\frac{1}{2}\|\overset\longrightarrow{PQ}\times\overset\longrightarrow{PR}\|\\
=\frac{1}{2}\|\langle-4,7,-10\rangle\|=\frac{\sqrt{165}}{2}\approx 6.423
\end{align*}
$$
# Problem 12
![[Multivariable Problem Set 2 2023-09-19 09.05.13.excalidraw]]
$$
\begin{align*}
A=\|\vec{a}\|\cdot h=\|\vec{a}\times \vec{b}\|\\
\implies h=\fbox{a) $\frac{\|\vec{a}\times\vec{b}\|}{\|\vec{a}\|}$}\\
\vec{a}=\langle-1,-2,-1\rangle,\ \vec{b}=\langle1,-5,-7\rangle\\
\frac{\|\vec{a}\times\vec{b}\|}{\|\vec{a}\|}\\
=\frac{\|\langle(-2)(-7)-(-1)(-5),(-1)(1)-(-1)(-7),(-1)(-5)-(-2)(1)\rangle\|}{\sqrt{6}}\\
=\frac{\|\langle9,-8,7\rangle\|}{\sqrt{6}}=\frac{\sqrt{194}}{\sqrt{6}}=\fbox{b) $\frac{\sqrt{291}}{3}\approx5.686$}
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\begin{cases}
x+2y+3z=1 \\
x-y+z=1 \\
\end{cases}\\
\text{Normal vectors:}\langle1,2,3\rangle,\langle1,-1,1\rangle\\
\vec{v}=\langle1,2,3\rangle\times\langle1,-1,1\rangle\\
=\langle(2)(1)-(3)(-1),(3)(1)-(1)(1),(1)(-1)-(2)(1)\rangle\\
=\langle5,2,-3\rangle\\
\text{Inital point:}\\
\begin{cases}
x+2y+3(0)=1 \\
x-y+(0)=1
\end{cases}\\
\implies
3x=3\implies x=1,y=0\\
\implies (1,0,0)\\
\fbox{
$\begin{cases}
x=1+5t \\
y=2t \\
z=-3t
\end{cases}$
}
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\vec{v}_{1}=\langle2,3,-1\rangle,\vec{v}_{2}=\langle1,1,3\rangle\\
\vec{v}_{1}\ne a\vec{v}_{2},a\in\mathbb{R}\implies L_{1}\not\parallel L_{2}\\
\begin{cases}
1+2t=-1+s \\
3t=4+s \\
2-t=1+3s
\end{cases}\\
\implies 1-t=-5\implies t=6,s=14\\
2-t\overset?=1+3s\\
2-6\overset?=1+3(14)\\
-4\ne43\\
\therefore \text{$L_{1}$ and $L_{2}$ are skew}
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\vec{n}=\langle1,-1,0\rangle\times\langle1,0,-1\rangle\\
=\langle(-1)(-1)-(0)(0),(0)(1)-(1)(-1),(1)(0)-(-1)(1)\rangle\\
=\langle1,1,1\rangle\\
\implies x+y+z=c\\
0+1+1=c\\
\implies c=2\\
\implies \fbox{$x+y+z=2$}
\end{align*}
$$
# Problem 16
$$
\begin{align*}
\vec{n}=\langle2,-3,-9\rangle\times\langle-2,5,4\rangle\\
=\langle(-3)(4)-(-9)(5),(-9)(-2)-(2)(4),(2)(5)-(-3)(-2)\rangle\\
=\langle33,10,4\rangle\\
\implies 33x+10y+4z=c\\
33(6)+10(0)+4(-2)=c\\
\implies c=190\\
\implies \fbox{$33x+10y+4z=190$}
\end{align*}
$$
# Problem 17
$$
\begin{align*}
\begin{cases}
x-z=1 \\
y+2z=3
\end{cases}\\
\vec{n}_{1}=\langle1,0,-1\rangle,\vec{n}_{2}=\langle0,1,2\rangle\\
\vec{v}=\vec{n}_{1}\times \vec{n}_{2}\\
=\langle(0)(2)-(-1)(1),(-1)(0)-(1)(2),(1)(1)-(0)(0)\rangle\\
=\langle1,-2,1\rangle\\
\vec{n}_{3}=\langle1,1,-2\rangle\\
\vec{n}=\vec{v}\times \vec{n}_{3}\\
=\langle(-2)(-2)-(1)(1),(1)(1)-(1)(-2),(1)(1)-(-2)(1)\rangle\\
=\langle3,3,3\rangle\\
z=0\implies x=1,y=3\\
3(1)+3(3)+3(0)=c\\
\implies c=12\\
\implies \fbox{$x+y+z=4$}
\end{align*}
$$
# Problem 18
![[Multivariable Problem Set 2 2023-09-19 17.48.38.excalidraw]]
$$
\begin{align*}
\vec{n}=\langle1,-2,-4\rangle\\
\vec{v}=\langle-14,3,5\rangle\\
|\text{Comp}_\vec{n}\vec{v}|=\frac{|\vec{n}\cdot\vec{v}|}{\|\vec{n}\|}\\
=\frac{|(1)(-14)+(-2)(3)+(-4)(5)|}{\sqrt{21}}\\
=\fbox{$\frac{40}{\sqrt{21}}\approx8.729$}
\end{align*}
$$
# Problem 19
$$
\begin{align*}
\begin{cases}
6z=4y-2x \implies x-2y+3z=0\\
9z=1-3x+6y \implies x-2y+3z=1
\end{cases}\\
\vec{n}=\langle1,-2,3\rangle\\
\vec{v}=\left\langle 0,0,\frac{1}{3} \right\rangle\\
|\text{Comp}_\vec{n}\vec{v}|=\frac{|\vec{n}\cdot\vec{v}|}{\|\vec{n}\|}\\
=\frac{|(1)(0)+(-2)(0)+(3)\left( \frac{1}{3} \right)|}{\sqrt{14}}\\
=\fbox{$\frac{1}{\sqrt{14}}\approx0.267$}
\end{align*}
$$