---
tags:
  - math/calc
due: 2023-12-15
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS13-2023.pdf)
# Problem 1
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
-7 & 9 \\
-4 & 5
\end{bmatrix}\vec{x}, \vec{x}(0)=\begin{bmatrix}
1 \\
-1
\end{bmatrix}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda+7 & -9 \\
4 & \lambda-5
\end{vmatrix}\\
=\lambda^{2}+2\lambda+1=0\\
\implies \lambda=-1\text{ multiplicity 2}\\
\mathbf{A}\vec{v}_{1}=\lambda\vec{v}_{1}\\
\implies \begin{bmatrix}
-7 & 9 \\
-4 & 5
\end{bmatrix}\vec{v}_{1}=-\vec{v}_{1}\\
\implies 3v_{2}=2v_{1}\\
\implies \vec{v}_{1}=\begin{bmatrix}
3 \\
2
\end{bmatrix}\\
\begin{bmatrix}
-7 & 9 \\
-4 & 5
\end{bmatrix}\vec{v}_{2}=\vec{v}_{1}+\lambda\vec{v}_{2}\\
\implies -7v_{1}+9v_{2}=3-v_{1},\\
-4v_{1}+5v_{2}=2-v_{2}\\
\implies 3v_{2}=1+2v_{1}\\
\implies \vec{v}_{2}=\begin{bmatrix}
0 \\
\frac{1}{3}
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
3 & 0 \\
2 & \frac{1}{3}
\end{bmatrix}\implies \mathbf{S}^{-1}=\begin{bmatrix}
\frac{1}{3} & 0 \\
-2 & 3
\end{bmatrix}\\
\mathbf{B}=\begin{bmatrix}
-1 & 1 \\
0 & -1
\end{bmatrix}\\
\vec{u}=[\vec{x}]_{\mathcal{B}}\implies \frac{d\vec{u}}{dt}=\begin{bmatrix}
-1 & 1 \\
0 & -1
\end{bmatrix}\vec{u}\\
[\vec{x}(0)]_{\mathcal{B}}=\vec{u}(0)=\begin{bmatrix}
\frac{1}{3} & 0 \\
-2 & 3
\end{bmatrix}\begin{bmatrix}
1 \\
-1
\end{bmatrix}=\begin{bmatrix}
\frac{1}{3} \\
-5
\end{bmatrix}\\
\implies u_{2}=-5e^{-t}\\
\implies \frac{du_{1}}{dt}=-u_{1}-5e^{-t}\\
\implies u_{1}=c_{1}te^{-t}+c_{2}e^{-t}=c_{1}te^{-t}+\frac{1}{3}e^{-t}\\
\implies \dot{u}_{1}=\left( c_{1}-\frac{1}{3} \right)e^{-t}-c_{1}te^{-t}\\
\implies \left( c_{1}-\frac{1}{3} \right)e^{-t}-c_{1}te^{-t}=-c_{1}te^{-t}-\frac{16}{3}e^{-t}\implies c_{1}=-5\\
\implies \vec{u}=\begin{bmatrix}
-5te^{-t}+\frac{1}{3}e^{-t} \\
-5e^{-t}
\end{bmatrix}\\
\implies \vec{x}=\begin{bmatrix}
3 & 0 \\
2 & \frac{1}{3}
\end{bmatrix}\begin{bmatrix}
-5te^{-t}+\frac{1}{3}e^{-t} \\
-5e^{-t}
\end{bmatrix}\\
\implies \vec{x}=\begin{bmatrix}
e^{-t}-15te^{-t} \\
-10te^{-t}-e^{-t}
\end{bmatrix}\\
\implies \boxed{ x(t)=e^{-t}-15te^{-t} }\\
\boxed{ y(t)=-e^{-t}-10te^{-t} }
\end{align*}
$$
![[Pasted image 20231212110000.png|500]]
# Problem 2
## a)
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
\lambda & 1 & 0 \\
0 & \lambda & 1 \\
0 & 0 & \lambda
\end{bmatrix}\vec{x}=\mathbf{B}\vec{x}\\
\frac{d\vec{u}}{dt}=\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{bmatrix}\vec{u}=\mathbf{C}\vec{u}\\
\implies \vec{u}=\begin{bmatrix}
\frac{c_{3}}{2}t^{2}+c_{2}t+c_{1} \\
c_{3}t+c_{2} \\
c_{3}
\end{bmatrix}\implies [e^{t\mathbf{C}}]=\begin{bmatrix}
1 & t & \frac{t^{2}}{2} \\
0 & 1 & t \\
0 & 0 & 1
\end{bmatrix}\\
\vec{x}(t)=e^{\lambda t}\vec{u}(t)\\
\implies \frac{d\vec{x}}{dt}=\lambda e^{\lambda t}\vec{u}(t)+e^{\lambda t} \frac{d\vec{u}}{dt}\\
=\lambda e^{\lambda t}\vec{u}(t)+e^{\lambda t}(\mathbf{C}\vec{u})=(\mathbf{C}+\lambda\mathbf{I}_{3})e^{\lambda t}\vec{u}(t)\\
\implies \frac{d\vec{x}}{dt}=(\mathbf{C}+\lambda\mathbf{I}_{3})\vec{x}\checkmark\\
\implies \boxed{ [e^{t\mathbf{B}}]=\begin{bmatrix}
e^{\lambda t} & te^{\lambda t} & \frac{t^{2}}{2}e^{\lambda t} \\
0 & e^{\lambda t} & te^{\lambda t} \\
0 & 0 & e^{\lambda t}
\end{bmatrix} }\\
\vec{x}(0)\to0\implies \lambda<0 
\end{align*}
$$
## b)
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
-2 & 1 & 5 \\
-2 & 2 & 3 \\
-1 & 0 & 3
\end{bmatrix}\vec{x}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda+2 & -1 & -5 \\
2 & \lambda-2 & -3 \\
1 & 0 & \lambda-3
\end{vmatrix}\\
=(\lambda+2)\begin{vmatrix}
\lambda-2 & -3 \\
0 & \lambda-3
\end{vmatrix}+\begin{vmatrix}
2 & -3 \\
1 & \lambda-3
\end{vmatrix}-5\begin{vmatrix}
2 & \lambda-2 \\
1 & 0
\end{vmatrix}\\
=(\lambda+2)(\lambda-2)(\lambda-3)+2\lambda-3+5\lambda-10\\
=\lambda^{3}-3\lambda^{2}-4\lambda+12+7\lambda-13=(\lambda-1)^{3}\\
\implies \boxed{ \lambda=1 }\\
\begin{bmatrix}
-2 & 1 & 5 \\
-2 & 2 & 3 \\
-1 & 0 & 3
\end{bmatrix}\vec{v}_{1}=\vec{v}_{1}\\
\implies 3v_{1}=v_{2}+5v_{3},\\
2v_{1}=v_{2}+3v_{3},\\
2v_{3}=v_{1}\\
\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
2 \\
1 \\
1
\end{bmatrix} }\\
\begin{bmatrix}
-2 & 1 & 5 \\
-2 & 2 & 3 \\
-1 & 0 & 3
\end{bmatrix}\vec{v}_{2}=\begin{bmatrix}
2 \\
1 \\
1
\end{bmatrix}+\vec{v}_{2}\\
\implies 3v_{1}=v_{2}+5v_{3}-2,\\
2v_{1}=v_{2}+3v_{3}-1,\\
v_{1}=2v_{3}-1\\
\implies \boxed{ \vec{v}_{2}=\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix} }\\
\begin{bmatrix}
-2 & 1 & 5 \\
-2 & 2 & 3 \\
-1 & 0 & 3
\end{bmatrix}\vec{v}_{3}=\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}+\vec{v}_{3}\\
\implies 3v_{1}=v_{2}+5v_{3}-1\\
2v_{1}=v_{2}+3v_{3}\\
v_{1}=2v_{3}-1\\
\implies \boxed{ \vec{v}_{3}=\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix} }
\end{align*}
$$
## c)
$$
\begin{align*}
\mathbf{S}=\begin{bmatrix}
2 & 1 & 1 \\
1 & 0 & -1 \\
1 & 1 & 1
\end{bmatrix}\\
\left[\begin{array}{ccc|ccc}
2 & 1 & 1 & 1 & 0 & 0 \\
1 & 0 & -1 & 0 & 1 & 0 \\
1 & 1 & 1 & 0 & 0 & 1
\end{array}\right]\\
R_{1}-R_{2},R_{2}-R_{3},R_{3}-R_{1}\\
\implies\left[\begin{array}{ccc|ccc}
1 & 1 & 2 & 1 & -1 & 0 \\
0 & -1 & -2 & 0 & 1 & -1 \\
0 & 0 & -1 & -1 & 1 & 1
\end{array}\right]\\
R_{1}+R_{2},-R_{2}\\
\implies\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & -1 \\
0 & 1 & 2 & 0 & -1 & 1 \\
0 & 0 & -1 & -1 & 1 & 1
\end{array}\right]\\
R_{2}+2R_{3},-R_{3}\\
\implies\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & -1 \\
0 & 1 & 0 & -2 & 1 & 3 \\
0 & 0 & 1 & 1 & -1 & -1
\end{array}\right]\\
\implies \mathbf{S}^{-1}=\begin{bmatrix}
1 & 0 & -1 \\
-2 & 1 & 3 \\
1 & -1 & -1
\end{bmatrix}\\
\implies \vec{x}=\begin{bmatrix}
2 & 1 & 1 \\
1 & 0 & -1 \\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
e^{t} & te^{t} & \frac{t^{2}}{2}e^{t} \\
0 & e^{t} & te^{t} \\
0 & 0 & e^{t}
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1 \\
-2 & 1 & 3 \\
1 & -1 & -1
\end{bmatrix}\begin{bmatrix}
1 \\
1 \\
2
\end{bmatrix}\\
=\begin{bmatrix}
2e^{t} & 2te^{t}+e^{t} & t^{2}e^{t}+te^{t}+e^{t} \\
e^{t} & te^{t} & \frac{t^{2}}{2}e^{t}-e^{t} \\
e^{t} & te^{t}+e^{t} & \frac{t^{2}}{2}e^{t}+te^{t}+e^{t}
\end{bmatrix}\begin{bmatrix}
-1 \\
5 \\
-2
\end{bmatrix}\\
\implies \boxed{ x(t)=e^{t}+8te^{t}-2t^{2}e^{t} },\\
\boxed{ y(t)=e^{t}+5te^{t}-t^{2}e^{t} },\\
\boxed{ z(t)=2e^{t}+3te^{t}-t^{2}e^{t} }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\vec{x}+\begin{bmatrix}
3 \\
4
\end{bmatrix}\\
\frac{d\vec{x}}{dt}=\vec{0}\\
\implies 3-x-2y=0,\\
4+2x-y=0\\
\implies \vec{x}=\begin{bmatrix}
-1 \\
2
\end{bmatrix}\\
\implies \vec{u}=\vec{x}-\begin{bmatrix}
-1 \\
2
\end{bmatrix}\\
\implies \frac{d\vec{u}}{dt}=\begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\left(\vec{u}+\begin{bmatrix}
-1 \\
2
\end{bmatrix}\right)+\begin{bmatrix}
3 \\
4
\end{bmatrix}\\
=\begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\vec{u}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda+1 & 2 \\
-2 & \lambda+1
\end{vmatrix}\\
=\lambda^{2}+2\lambda+5\\
\implies \lambda=-1+2i,\bar{\lambda}=-1-2i\\
\begin{bmatrix}
-1 & -2 \\
2 & -1
\end{bmatrix}\vec{w}=(-1+2i)\vec{w}\\
\implies iw_{1}=-w_{2},\\
iw_{2}=w_{1}\\
\implies \vec{w}=\begin{bmatrix}
i \\
1
\end{bmatrix}=\begin{bmatrix}
0 \\
1
\end{bmatrix}+i\begin{bmatrix}
1 \\
0
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}\implies \mathbf{S}^{-1}=\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}\\
\implies [e^{t\mathbf{B}}]=e^{-t}\begin{bmatrix}
\cos2t & -\sin2t \\
\sin2t & \cos2t
\end{bmatrix}\\
\vec{u}(0)=\begin{bmatrix}
1 \\
-1
\end{bmatrix}-\begin{bmatrix}
-1 \\
2
\end{bmatrix}=\begin{bmatrix}
2 \\
-3
\end{bmatrix}\\
\implies \vec{u}=e^{-t}\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
\cos2t & -\sin2t \\
\sin2t & \cos2t
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
2 \\
-3
\end{bmatrix}\\
=e^{-t}\begin{bmatrix}
2\cos2t+3\sin2t \\
2\sin2t-3\cos2t
\end{bmatrix}\\
\implies \vec{x}=e^{-t}\begin{bmatrix}
2\cos2t+3\sin2t \\
2\sin2t-3\cos2t
\end{bmatrix}+\begin{bmatrix}
-1 \\
2
\end{bmatrix}\\
\implies \boxed{ x(t)=e^{-t}(2\cos2t+3\sin2t)-1 },\\
\boxed{ y(t)=e^{-t}(2\sin2t-3\cos2t)+2 }
\end{align*}
$$
![[Pasted image 20231214101309.png|500]]
# Problem 4
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
1 & 1 \\
4 & -2
\end{bmatrix}\vec{x}+\begin{bmatrix}
e^{-2t} \\
-2e^{t}
\end{bmatrix}\\
\frac{d\vec{x}}{dt}=\begin{bmatrix}
1 & 1 \\
4 & -2
\end{bmatrix}\vec{x}\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda-1 & -1 \\
-4 & \lambda+2
\end{vmatrix}\\
=\lambda^{2}+\lambda-6\\
\implies \lambda_{1}=-3,\lambda_{2}=2\\
\begin{bmatrix}
1 & 1 \\
4 & -2
\end{bmatrix}\vec{v}_{1}=-3\vec{v}_{1}\implies \vec{v}_{1}=\begin{bmatrix}
-1 \\
4
\end{bmatrix}\\
\begin{bmatrix}
1 & 1 \\
4 & -2
\end{bmatrix}\vec{v}_{2}=2\vec{v}_{2}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
-1 & 1 \\
4 & 1
\end{bmatrix}\\
[e^{t\mathbf{B}}]=\begin{bmatrix}
e^{-3t} & 0 \\
0 & e^{2t}
\end{bmatrix}\\
\implies \vec{x}_{h}=\mathbf{M}(t)\mathbf{S}^{-1}\vec{x}(0)=\begin{bmatrix}
-e^{-3t} & e^{2t} \\
4e^{-3t} & e^{2t}
\end{bmatrix}\vec{c}\\
\vec{x}_{p}=\begin{bmatrix}
ae^{-2t}+be^{t} \\
ce^{-2t}+de^{t}
\end{bmatrix}\\
\implies \frac{d\vec{x}}{dt}=\begin{bmatrix}
-2ae^{-2t}+be^{t} \\
-2ce^{-2t}+de^{t}
\end{bmatrix}=\begin{bmatrix}
(a+c+1)e^{-2t}+(b+d)e^{t} \\
(4a-2c)e^{-2t}+(4b-2d-2)e^{t}
\end{bmatrix}\\
\implies \begin{cases}
-2a=a+c+1 \\
b=b+d \\
-2c=4a-2c \\
d=4b-2d-2
\end{cases}\\
\implies d=0,a=0,c=-1,b=\frac{1}{2}\\
\implies \vec{x}_{p}=\begin{bmatrix}
\frac{1}{2}e^{t} \\
-e^{-2t}
\end{bmatrix}\\
\implies \vec{x}=\begin{bmatrix}
-e^{-3t} & e^{2t} \\
4e^{-3t} & e^{2t}
\end{bmatrix}\vec{c}+\begin{bmatrix}
\frac{1}{2}e^{t} \\
-e^{-2t}
\end{bmatrix}\\
\implies \boxed{ x(t)=c_{2}e^{2t}-c_{1}e^{-3t}+\frac{1}{2}e^{t} }\\
\boxed{ y(t)=4c_{1}e^{-3t}+c_{2}e^{2t}-e^{-2t} }
\end{align*}
$$