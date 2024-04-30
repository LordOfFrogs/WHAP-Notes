---
tags:
  - math
due: 2023-09-30
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW3-2023.pdf)
# Problem 1
![[Multivariable Problem Set 3 2023-09-24 14.41.33.excalidraw]]
# Problem 2
![[Multivariable Problem Set 3 2023-09-24 14.57.06.excalidraw]]
# Problem 3
$$
\begin{align*}
P(x,y,z)\\
\sqrt{y^{2}+z^{2}}=2|x|\\
\implies \fbox{$y^{2}+z^{2}=4x^{2}$}
\end{align*}
$$
Cones coming out from the origin centered around the x-axis
# Problem 4
$$
\begin{array}{rr}
(\vec{a}\times \vec{b})\cdot[(\vec{b}\times \vec{c})\times(\vec{c}\times \vec{a})] & [\vec{a}\cdot(\vec{b}\times \vec{c})]^{2}\\
=(a\times b)\cdot[((b\times c)\cdot a)c - ((b\times c)\cdot c)a] & =[a\cdot(b\times c)][a\cdot(b\times c)]\\
=(a\times b)\cdot[((b\times c)\cdot a)c-(b\cdot(c\times c))a] & =[(a\times b)\cdot c][a\cdot(b\times c)]\\
=(a\times b)\cdot c[(b\times c)\cdot a] & = (a\times b)\cdot c[(b\times c)\cdot a]
\end{array}
$$
# Problem 5
$$
\begin{align*}
\overset\longrightarrow{AB}=\vec{u}=\langle1,3,-1\rangle\\
\overset\longrightarrow{AC}=\vec{v}=\langle-2,1,3\rangle\\
\overset\longrightarrow{AD}=\vec{w}=\langle-1,3,1\rangle\\
V=|\vec{u}\cdot(\vec{v}\times \vec{w})|\\
=|\langle1,3,-1\rangle\cdot(\langle-2,1,3\rangle\times\langle-1,3,1\rangle)|\\
=|\langle1,3,-1\rangle\cdot\langle(1)(1)-(3)(3),(3)(-1)-(-2)(1),(-2)(3)-(1)(-1)\rangle|\\
=|\langle1,3,-1\rangle\cdot\langle-8,-1,-5\rangle|\\
=|(1)(-8)+(3)(-1)+(-1)(-5)|\\
=|-8-3+5|\\
=\fbox{$6$}
\end{align*}
$$
# Problem 6
## a)
$$
\begin{align*}
\vec{n}=\langle 3,1,-4\rangle\\
3(0)+(0)-4z=2\implies z=-\frac{1}{2}\\
3(0)+(0)-4z=24\implies z=-6\\
\vec{u}=\left\langle 0,0,-\frac{11}{2} \right\rangle\\
\text{Comp}_\vec{n}\vec{u}=\frac{\vec{n}\cdot \vec{u}}{\|\vec{n}\|}\\
=\frac{(3)(0)+(1)(0)+\left( -\frac{11}{2} \right)(-4)}{\sqrt{26}}=\fbox{$\frac{22}{\sqrt{26}}\approx4.315$}
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{u}=\langle1,-1,2\rangle\\
\text{Plane: }x-y+2z=0\\
(1+t)-(2-t)+2(-1+2t)=0\\
\implies 6t-3=0\\
\implies t=\frac{1}{2}\\
P\left( 1+\frac{1}{2},2-\frac{1}{2},-1+2 \frac{1}{2} \right)\\
=\left( \frac{3}{2}, \frac{3}{2}, \frac{3}{2} \right)\\
\text{Distance: }\sqrt{3\left( \frac{3}{2} \right)^2}\\
=\sqrt{\frac{27}{4}}=\fbox{$\frac{\sqrt{27}}{2}\approx2.598$}
\end{align*}
$$
# Problem 7
## a)
$$
\begin{align*}
\vec{u}=\langle-3,-2,9\rangle, \vec{v}=\langle-1,2,-5\rangle\\
\vec{n}=\vec{u}\times \vec{v}\\
=\langle(-2)(-5)-(9)(2),(9)(-1)-(-3)(-5),(-3)(2)-(-2)(-1)\rangle\\
=\langle-8,-24,-8\rangle\longrightarrow\langle1,3,1\rangle\\
x+3y+z=c\\
(2)+3(1)+(1)=c\implies c=6\\
\fbox{$x+3y+z=6$}
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{v}=\langle1,3,1\rangle, \text{ from (a)}\\
\begin{cases}
x=-1+t \\
y=-1+3t \\
z=10+t
\end{cases}\\
\implies \fbox{$x+1=z-10=\frac{y+1}{3}$}
\end{align*}
$$
## c)
$$
\begin{align*}
\langle2,-4,-3\rangle\cdot\langle1,3,1\rangle\text{ (obtuse)}\\
\langle-2,4,3\rangle\cdot\langle1,3,1\rangle\\
=(-2)(1)+(4)(3)+(3)(1)\\
=13\\
=\|\langle2,-4,-3\rangle\|\|\langle1,3,1\rangle\|\cos \theta\\
=\sqrt{29}\sqrt{11}\cos \theta\\
\implies \theta=\arccos\left( \frac{13}{\sqrt{29}\sqrt{11}} \right)\\
\approx \fbox{$43.29\degree$}
\end{align*}
$$
## d)
$$
\begin{align*}
\vec{w}=\langle2,-4,-3\rangle\times\langle1,3,1\rangle\\
=\langle(-4)(1)-(-3)(3),(-3)(1)-(2)(1),(2)(3)-(-4)(1)\rangle\\
=\langle5,-5,10\rangle\longrightarrow\langle1,-1,2\rangle\\
\text{Let }z=0\\
\begin{cases}
x+3y=6 \\
2x-4y=-8
\end{cases}\\
\implies 10y=20\implies y=2\implies x=0\\
\fbox{$\begin{cases}
x=t \\
y=2-t \\
z=2t
\end{cases}$}
\end{align*}
$$
# Problem 8
![[Multivariable Problem Set 3 2023-09-25 10.00.02.excalidraw]]
# Problem 9
1. True, [[Dot Product]] is commutative
2. False, [[Cross Product]] is anti-commutative ($\vec{u}\times \vec{v}=-\vec{v}\times \vec{u}$)
3. True, they are [[Vector|vectors]] of equal magnitude but opposite direction
4. True, multiplying u by k multiplies its magnitude by k, and therefore the [[Dot Product]]
5. True, multiplying a side of a parallelogram by k increases its area by a factor of k, and therefore the [[Cross Product]]
6. True, [[Cross Product]] is distributive
7. True, [[Triple Scalar Product]] property of [[Cross Product]]
8. False, [[Cross Product]] is not associative, instead it has triple vector product
9. True, it can be reordered to $(\vec{u}\times\vec{u})\cdot\vec{v}$, which is 0
10. True, [[Cross Product]] is distributive, and $\vec{v}\times\vec{v}=0$
11. False, only if they are [[Orthogonality|perpendicular]]
12. False, it represents a [[plane]]
13. False, it is an infinitely tall cylinder
14. False, [[Dot Product]] gives a scalar
15. False, u and v could be [[Orthogonality|perpendicular]]
16. False, u and v could be parallel
17. True, u and v can't be [[Orthogonality|perpendicular]] and parallel, so one or both must be 0
18. True, $\vec{u}\cdot \vec{v}=\|\vec{u}\|\|\vec{v}\|\cos \theta$, and $|\cos \theta|\leq1$
# Problem 10
![[Multivariable Problem Set 3 2023-09-25 11.47.47.excalidraw]]
# Problem 11
![[Multivariable Problem Set 3 2023-09-25 11.54.39.excalidraw]]
# Problem 12
![[Multivariable Problem Set 3 2023-09-25 11.58.55.excalidraw]]
# Problem 13
![[Multivariable Problem Set 3 2023-09-25 13.28.13.excalidraw]]
# Problem 14
$$
\begin{align*}
\begin{cases}
z=\sqrt{x^{2}+y^{2}} \\
z=1+y
\end{cases}\\
\implies\sqrt{x^{2}+y^{2}}=1+y\\
\implies x^{2}+y^{2}=1+2y+y^{2}\\
\implies x^{2}=1+2y\\
\implies y=\frac{x^{2}-1}{2}\\
\text{Let } x=t\\
\implies y=\frac{t^{2}-1}{2}\\
\implies z=\frac{t^{2}+1}{2}\\
\fbox{$\vec{r}(t)=\left\langle t,\frac{t^{2}}{2}-\frac{1}{2}, \frac{t^{2}}{2}+\frac{1}{2}\right\rangle$}
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\begin{cases}
t_{1}=1+2t_{2} \\
t_{1}^{2}=1+6t_{2} \\
t_{1}^{3}=1+14t_{2}
\end{cases}\\
\implies 3t_{1}-t_{1}^{2}=2\\
\implies t_{1}=1,2\\
7t_{1}-t_{1}^{3}=6\\
\implies t_{1}=1,6\\
\implies t_{1}=1\implies t_{2}=0
\end{align*}
$$
They intersect, but do not collide
# Problem 16
## a)
![[Multivariable Problem Set 3 2023-09-25 21.23.07.excalidraw]]
## b)
$$
\mathbf{r}'(t)=\left\langle  1, \frac{1}{2\sqrt{t}} \right\rangle
$$
## c)
![[Multivariable Problem Set 3 2023-09-25 21.35.28.excalidraw]]
# Problem 17
$$
\begin{align*}
0=\ln t\implies t=1\\
2=2\sqrt{(1)},1=(1)^{2}\ \checkmark\\
\begin{cases}
x=\frac{1}{t} \\
y=\frac{1}{\sqrt{t}} \\
z=2t
\end{cases}\\
\implies \vec{v}=\left\langle  \frac{1}{(1)}, \frac{1}{\sqrt{(1)}}, 2(1) \right\rangle\\
=\langle1,1,2\rangle\\
\fbox{$\begin{cases}
x=t \\
y=2+t \\
z=1+2t
\end{cases}$}
\end{align*}
$$
# Problem 18
$$
\begin{align*}
\begin{cases}
t=3-s \\
1-t=s-2 \\
3+t^{2}=s^{2}
\end{cases}\\
\implies 3+(3-s)^{2}=s^{2}\\
\implies 3+9-6s+s^{2}=s^{2}\\
\implies 6s=12\implies s=2\\
\implies t=1\\
\fbox{$(1,0,4)$}\\
\vec{u}=\vec{r}_{1}'(t)=\langle 1,-1,2t\rangle\\
=\langle1,-1,2\rangle\\
\vec{v}=\vec{r}_{2}'(t)=\langle -1,1,2s\rangle\\
=\langle -1,1,4\rangle\\
\vec{u}\cdot \vec{v}=\|\vec{u}\|\|\vec{v}\|\cos \theta\\
\implies \theta=\cos^{-1}\left( \frac{\vec{u}\cdot\vec{v}}{\|\vec{u}\|\|\vec{v}\|} \right)\\
=\cos^{-1}\left( \frac{(1)(-1)+(-1)(1)+(2)(4)}{\sqrt{6}\sqrt{18}} \right)\\
=\cos^{-1}\left( \frac{6}{6\sqrt{3}} \right)\\
\approx \fbox{$55\degree$}
\end{align*}
$$