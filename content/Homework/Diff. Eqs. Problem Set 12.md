---
tags:
  - math/calc
due: 2023-12-08
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS12-2023.pdf)
# Problem 1
## a)
Yes, because differentiation is linear and [[matrix]] multiplication is distributive with respect to [[matrix]] addition, so:
$$
\begin{align*}
\frac{d\vec{x}_{1}}{dt}=\mathbf{A}\vec{x}_{1}, \frac{d\vec{x}_{2}}{dt}=\mathbf{A}\vec{x}_{2}\\
\vec{x}=\vec{x}_{1}+\vec{x}_{2}\\
\implies \frac{d\vec{x}}{dt}=\frac{d}{dt}(\vec{x}_{1}+\vec{x}_{2})=\frac{d\vec{x}_{1}}{dt}+\frac{d\vec{x}_{2}}{dt}\\
=\mathbf{A}\vec{x}_{1}+\mathbf{A}\vec{x}_{2}=\mathbf{A}(\vec{x}_{1}+\vec{x}_{2})=\mathbf{A}\vec{x}\checkmark
\end{align*}
$$
## b)
Yes, because differentiation is linear and scalars can be factored into [[matrix]] multiplication, so:
$$
\begin{align*}
\frac{d\vec{x}_{1}}{dt}=\mathbf{A}\vec{x}_{1}, \vec{x}=k\vec{x}_{1}\\
\implies \frac{d\vec{x}}{dt}=\frac{d}{dt}(k\vec{x}_{1})=k\frac{d\vec{x}_{1}}{dt}\\
=k\mathbf{A}\vec{x}_{1}=\mathbf{A}(k\vec{x}_{1})=\mathbf{A}\vec{x}\checkmark
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\vec{x},\vec{x}(0)=\begin{bmatrix}
1 \\
-1
\end{bmatrix}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda+1 & 2 \\
-2 & \lambda+1
\end{vmatrix}=0\\
\implies (\lambda+1)^{2}+4=0\\
\implies \lambda+1=\pm2i\\
\implies \lambda=-1+2i,\bar{\lambda}=-1-2i\\
\mathbf{A}\vec{w}=\lambda\vec{w}\\
\implies \begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\begin{bmatrix}
w_{1} \\
w_{2}
\end{bmatrix}=(-1+2i)\begin{bmatrix}
w_{1} \\
w_{2}
\end{bmatrix}\\
\implies -2w_{2}-w_{1}=2iw_{1}-w_{1}\implies -w_{2}=iw_{1}\\
2w_{1}-w_{2}=2iw_{2}-w_{2}\implies w_{1}=iw_{2}\\
\implies \vec{w}=\begin{bmatrix}
i \\
1
\end{bmatrix}\\
\mathbf{A}\hat{w}=\lambda\hat{w}\\
\implies \begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\begin{bmatrix}
w_{1} \\
w_{2}
\end{bmatrix}=(-1-2i)\begin{bmatrix}
w_{1} \\
w_{2}
\end{bmatrix}\\
\implies -w_{1}-2w_{2}=-w_{1}-2iw_{1}\implies w_{2}=iw_{1}\\
2w_{1}-w_{2}=-w_{2}-2iw_{2}\implies w_{1}=-iw_{2}\\
\implies \hat{w}=\begin{bmatrix}
1 \\
i
\end{bmatrix}\\
\mathbf{S}=\begin{bmatrix}
i & 1 \\
1 & i
\end{bmatrix}\implies \mathbf{S}^{-1}=\frac{1}{(-2)}\begin{bmatrix}
i & -1 \\
-1 & i
\end{bmatrix}\\
\mathbf{D}=\begin{bmatrix}
-1+2i & 0 \\
0 & -1-2i
\end{bmatrix}\\
\implies \vec{x}=-\frac{1}{2}\begin{bmatrix}
i & 1 \\
1 & i
\end{bmatrix}\begin{bmatrix}
e^{(-1+2i)t} & 0 \\
0 & e^{(-1-2i)t}
\end{bmatrix}\begin{bmatrix}
i & -1 \\
-1 & i
\end{bmatrix}\begin{bmatrix}
1 \\
-1
\end{bmatrix}\\
= -\frac{1}{2}\begin{bmatrix}
ie^{-t+2it} & e^{-t-2it} \\
e^{-t+2it} & ie^{-t-2it}
\end{bmatrix}\begin{bmatrix}
1+i \\
-1-i
\end{bmatrix}\\
=-\frac{1}{2}\begin{bmatrix}
ie^{-t+2it}-e^{-t+2it}-e^{-t-2it}-ie^{-t-2it} \\
e^{-t+2it}+ie^{-t+2it}-ie^{-t-2it}+e^{-t-2it}
\end{bmatrix}\\
=-\frac{e^{-t}}{2}\begin{bmatrix}
-2\cos2t-2\sin2t \\
2\cos2t-2\sin2t
\end{bmatrix}\\
\implies \boxed{ x(t)=e^{-t}(\cos2t+\sin2t) },\\
\boxed{ y(t)=e^{-t}(\sin2t-\cos2t) }
\end{align*}
$$
![[Diff. Eqs. Problem Set 12 2023-12-06 09.29.46.excalidraw|500]]
![[Pasted image 20231206120458.png|500]]
# Problem 3
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
-1 & 5 \\
-2 & 5
\end{bmatrix}\vec{x},\vec{x}(0)=\begin{bmatrix}
6 \\
5
\end{bmatrix}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda+1 & -5 \\
2 & \lambda-5
\end{vmatrix}=0\\
\implies \lambda^{2}-4\lambda+5=0\\
\implies \lambda=2+i,\bar{\lambda}=2-i\\
\begin{bmatrix}
-1 & 5 \\
-2 & 5
\end{bmatrix}\vec{w}=(2+i)\vec{w}\\
\implies -w_{1}+5w_{2}=2w_{1}+iw_{1}\\
\implies 5w_{2}=(3+i)w_{1}\\
-2w_{1}+5w_{2}=2w_{2}+iw_{2}\implies (3-i)w_{2}=2w_{1}\\
\implies \vec{w}=\begin{bmatrix}
3-i \\
2
\end{bmatrix}=\vec{u}+i\vec{v}=\begin{bmatrix}
3 \\
2
\end{bmatrix}+i\begin{bmatrix}
-1 \\
0
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
-1 & 3 \\
0 & 2
\end{bmatrix}\implies \mathbf{S}^{-1}=-\frac{1}{2}\begin{bmatrix}
2 & -3 \\
0 & -1
\end{bmatrix}\\
[e^{t\mathbf{B}}]=e^{2t}\begin{bmatrix}
\cos t & -\sin t \\
\sin t & \cos t
\end{bmatrix}\\
\implies \vec{x}=-\frac{e^{2t}}{2}\begin{bmatrix}
-1 & 3 \\
0 & 2
\end{bmatrix}\begin{bmatrix}
\cos t & -\sin t \\
\sin t & \cos t
\end{bmatrix}\begin{bmatrix}
2 & -3 \\
0 & -1
\end{bmatrix}\begin{bmatrix}
6 \\
5
\end{bmatrix}\\
=-\frac{e^{2t}}{2}\begin{bmatrix}
3\sin t-\cos t & \sin t+3\cos t \\
2\sin t & 2\cos t
\end{bmatrix}\begin{bmatrix}
-3 \\
-5
\end{bmatrix}\\
\implies \boxed{ x(t)=e^{2t}(7\sin t+6\cos t) }\\
\boxed{ y(t)=e^{2t}(3\sin t+5\cos t) }
\end{align*}
$$
![[Pasted image 20231206124937.png|500]]
![[Diff. Eqs. Problem Set 12 2023-12-06 12.56.44.excalidraw|500]]
# Problem 4
## a)
$$
\begin{align*}
\ddot{x}+4\dot{x}+5x=0,x(0)=6,\dot{x}(0)=4\\
p(r)=r^{2}+4r+5=0\implies r=-2+i,-2-i\\
\implies x=a_{1}e^{(-2+i)t}+a_{2}e^{(-2-i)t}\\
=a_{1}e^{-2t}(\cos t+i\sin t)+a_{2}e^{-2t}(\cos t-i\sin t)\\
=e^{-2t}(c_{1}\cos t+c_{2}\sin t)\\
x(0)=6\implies c_{1}=6\\
\dot{x}=-2e^{-2t}(6\cos t+c_{2}\sin t)+e^{-2t}(c_{2}\cos t-6\sin t)\\
\dot{x}(0)=4\implies c_{2}=16\\
\implies \boxed{ x(t)=2e^{-2t}(3\cos t+8\sin  t) }
\end{align*}
$$
## b)
$$
\begin{align*}
y=\dot{x}\\
\implies \frac{d\vec{x}}{dt}=\begin{bmatrix}
0 & 1 \\
-5 & -4
\end{bmatrix}\vec{x}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda & -1 \\
5 & \lambda+4
\end{vmatrix}=0\\
\implies \lambda=-2+i, \bar{\lambda}=-2-i\\
\begin{bmatrix}
0 & 1 \\
-5 & -4
\end{bmatrix}\vec{w}=(-2+i)\vec{w}\\
\implies w_{2}=(-2+i)w_{1}\\
-5w_{1}-4w_{2}=-2w_{2}+iw_{2}\\
\implies-5w_{1}=(2+i)w_{2}\\
\implies \vec{w}=\begin{bmatrix}
2+i \\
-5
\end{bmatrix}=\vec{u}+i\vec{v}=\begin{bmatrix}
2 \\
-5
\end{bmatrix}+i\begin{bmatrix}
1 \\
0
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 2 \\
0 & -5
\end{bmatrix}\implies \mathbf{S}^{-1}=-\frac{1}{5}\begin{bmatrix}
-5 & -2 \\
0 & 1
\end{bmatrix}\\
[e^{t\mathbf{B}}]=e^{-2t}\begin{bmatrix}
\cos t & -\sin t \\
\sin t & \cos t
\end{bmatrix}\\
\implies x=-\frac{e^{-2t}}{5}\begin{bmatrix}
1 & 2 \\
0 & -5
\end{bmatrix}\begin{bmatrix}
\cos t & -\sin t \\
\sin t & \cos t
\end{bmatrix}\begin{bmatrix}
-5 & -2 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
6 \\
4
\end{bmatrix}\\
=\frac{1}{5}e^{-2t}\begin{bmatrix}
\cos t+2\sin t & 2\cos t-\sin t \\
-5\sin t & -5\cos t
\end{bmatrix}\begin{bmatrix}
38 \\
-4
\end{bmatrix}\\
\implies \boxed{ x(t)=2e^{-2t}(3\cos t+8\sin t) }\checkmark
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
3 & 0 & -4 \\
10 & 5 & -10 \\
6 & 2 & -7
\end{bmatrix}\vec{x},\vec{x}(0)=\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix}\\
\implies \det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda-3 & 0 & 4 \\
-10 & \lambda-5 & 10 \\
-6 & -2 &  \lambda+7
\end{vmatrix}=0\\
\implies (\lambda-3)\begin{vmatrix}
\lambda-5 & 10 \\
-2 & \lambda+7
\end{vmatrix}+4\begin{vmatrix}
-10 & \lambda-5 \\
-6 & -2
\end{vmatrix}=0\\
\implies (\lambda-3)(\lambda^{2}+2\lambda-15)+4(6\lambda-10)=0\\
\implies \lambda^{3}-\lambda^{2}+3\lambda+5=0\\
\begin{array}{c|cccc}
-1 & 1 & -1 & 3 & 5 \\
 &  & -1 & 2 & -5 \\
\hline & 1 & -2 & 5 & 0
\end{array}\\
\implies \lambda_{1}=-1,\lambda^{2}-2\lambda+5=0\\
\implies \lambda_{2}=1+2i,\lambda_{3}=1-2i\\
\begin{bmatrix}
3 & 0 & -4 \\
10 & 5 & -10 \\
6 & 2 & -7
\end{bmatrix}\vec{v}=-\vec{v}\\
\implies \begin{cases}
v_{1}=v_{3} \\
5v_{1}+3v_{2}=5v_{3} \\
3v_{1}+v_{2}=3v_{3}
\end{cases}\\
\implies \vec{v}=\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}\\
\begin{bmatrix}
3 & 0 & -4 \\
10 & 5 & -10 \\
6 & 2 & -7
\end{bmatrix}\vec{w}=(1+2i)\vec{w}\\
\implies \begin{cases}
(1-i)w_{1}=2w_{3} \\
5w_{1}+(2-i)w_{2}=5w_{3} \\
3w_{1}+w_{2}=(4+i)w_{3}
\end{cases}\\
\implies w_{1}=(1+i)w_{3}\\
\implies w_{2}=(1-2i)w_{3}\\
\implies \vec{w}=\begin{bmatrix}
1+i \\
1-2i \\
1
\end{bmatrix}\\
\implies \hat{w}=\begin{bmatrix}
1-i \\
1+2i \\
1
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 1+i & 1-i \\
0 & 1-2i & 1+2i \\
1 & 1 & 1
\end{bmatrix}\\
\implies \mathbf{S}^{-1}=\frac{1}{2}\begin{bmatrix}
-4 & -2 & 6 \\
2-i & 1 & i-2 \\
2+i & 1 & -2-i
\end{bmatrix}\\
[e^{t\mathbf{D}}]=e^{t}\begin{bmatrix}
e^{-2t} & 0 & 0 \\
0 & e^{2it} & 0 \\
0 & 0 & e^{-2it}
\end{bmatrix}\\
\implies x=\frac{e^{t}}{2}\begin{bmatrix}
1 & 1+i & 1-i \\
0 & 1-2i & 1+2i \\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
e^{-2t} & 0 & 0 \\
0 & e^{2it} & 0 \\
0 & 0 & e^{-2it}
\end{bmatrix}\begin{bmatrix}
-4 & -2 & 6 \\
2-i & 1 & i-2 \\
2+i & 1 & -2-i
\end{bmatrix}\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix}\\
=\frac{e^{t}}{2}\begin{bmatrix}
e^{-2t} & (1+i)\cos 2t+(i-1)\sin2t & (1-i)\cos2t-(i+1)\sin2t \\
0 & (1-2i)\cos2t+(i+2)\sin2t & (1+2i)\cos2t+(2-i)\sin2t \\
e^{-2t} & \cos2t+i\sin2t & \cos2t-i\sin2t
\end{bmatrix}\begin{bmatrix}
4 \\
-1 \\
-1
\end{bmatrix}\\
\implies \boxed{ x(t)=e^{t}(2e^{-2t}-\cos2t+\sin2t) }\\
\boxed{ y(t)=-e^{t}(\cos2t+2\sin2t) }\\
\boxed{ z(t)=e^{t}(2e^{-2t}-\cos2t) }
\end{align*}
$$
![[Diff. Eqs. Problem Set 12 2023-12-07 10.48.30.excalidraw]]
![[Pasted image 20231207111138.png|500]]
# Problem 6
![[Pasted image 20231207115732.png|500]]
All horizontal lines
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\vec{x}\\
\begin{cases}
\frac{dx}{dt}=y \\
\frac{dy}{dt}=0
\end{cases}\\
\implies y(t)=y_{0}\implies x(t)=y_{0}t+x_{0}
\end{align*}
$$
Which are horizontal lines where the "speed" is proportional to the initial y [[Coordinates|coordinate]]
# Problem 7
$$
\begin{align*}
\begin{cases}
\frac{d\vec{x}}{dt}=\mathbf{A}\vec{x} \\
\frac{d\vec{c}}{dt}=(\mathbf{A}+k\mathbf{I}_{n})\vec{c}
\end{cases}\\
\vec{c}(t)=e^{kt}\vec{x}(t)\\
\implies \frac{d\vec{c}}{dt}=ke^{kt}\vec{x}(t)+e^{kt} \frac{d\vec{x}}{dt}\\
=ke^{kt}\vec{x}(t)+e^{kt}(\mathbf{A}\vec{x})=(\mathbf{A}+k\mathbf{I}_{n})e^{kt}\vec{x}(t)\\
\implies \boxed{ \frac{d\vec{c}}{dt}=(\mathbf{A}+k\mathbf{I}_{n})\vec{c} }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
\lambda & 1 \\
0 & \lambda
\end{bmatrix}\vec{x}\\
\begin{bmatrix}
\lambda & 1 \\
0 & \lambda
\end{bmatrix}=\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}+\lambda\mathbf{I}_{2}\\
\frac{d\vec{u}}{dt}=\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\vec{u}\implies \vec{u}=\begin{bmatrix}
c_{1}+c_{2}t \\
c_{2}
\end{bmatrix}\\
\frac{d\vec{x}}{dt}=\left(\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}+\lambda\mathbf{I}\right)\vec{x}\implies \vec{x}=e^{\lambda t}\vec{u}\\
\implies \boxed{ \vec{x}(t)=\begin{bmatrix}
c_{1}e^{\lambda t}+c_{2}te^{\lambda t} \\
c_{2}e^{\lambda t}
\end{bmatrix} }
\end{align*}
$$