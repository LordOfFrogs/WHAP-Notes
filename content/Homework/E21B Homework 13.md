---
tags:
  - math/linear-algebra
due: 2024-05-04
course: "[[E21B]]"
status: In-Progress
---
[Link](http://math.rwinters.com/E21b/homework/HW13-2024.pdf)
# Problem 1
$$
\begin{align*}
\frac{d\vec{x}_{1}}{dt}=\mathbf{A}\vec{x}_{1}, \frac{d\vec{x}_{2}}{dt}=\mathbf{A}\vec{x}_{2}\\
\vec{x}=c_{1}\vec{x}_{1}+c_{2}\vec{x}_{2}\implies\frac{d}{dt}(c_{1}\vec{x}_{1}+c_{2}\vec{x}_{2})\\
=c_{1} \frac{d\vec{x}_{1}}{dt}+c_{2} \frac{d\vec{x}_{2}}{dt}=c_{1}(\mathbf{A}\vec{x}_{1})+c_{2}(\mathbf{A}\vec{x}_{2})\\
=\mathbf{A}(c_{1}\vec{x}_{1}+c_{2}\vec{x}_{2})=\mathbf{A}\vec{x}\\
\implies \frac{d\vec{x}}{dt}=\mathbf{A}\vec{x}\checkmark
\end{align*}
$$
# Problem 2
## a)
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
1 & 2 \\
3 & 0
\end{bmatrix}\vec{x},\vec{x}_{0}=\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & -2 \\
-3 & \lambda
\end{vmatrix}=\lambda^{2}-\lambda-6=0\\
\implies \lambda_{1}=-2,\lambda_{2}=3\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
-3
\end{bmatrix}\\
\lambda_{2}\implies\vec{v}_{2}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\vec{x}=\mathbf{S}[e^{t\mathbf{B}}]\mathbf{S}^{-1}\vec{x}_{0}=\begin{bmatrix}
2 & 1 \\
-3 & 1
\end{bmatrix}\begin{bmatrix}
e^{-2t} & 0 \\
0 & e^{3t}
\end{bmatrix}\left( \frac{1}{5} \right)\begin{bmatrix}
1 & -1 \\
3 & 2
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
=\frac{1}{5}\begin{bmatrix}
2e^{-2t} & e^{3t} \\
-3e^{-2t} & e^{3t}
\end{bmatrix}\begin{bmatrix}
5 \\
25
\end{bmatrix}=-\frac{1}{5}\begin{bmatrix}
10e^{-2t}+25e^{3t} \\
-15e^{-2t}+25e^{3t}
\end{bmatrix}\\
\implies\boxed{ \vec{x}(t)=\begin{bmatrix}
2e^{-2t}+5e^{3t} \\
-3e^{-2t}+5e^{3t}
\end{bmatrix}=e^{-2t}\begin{bmatrix}
-2 \\
3
\end{bmatrix}+5e^{3t}\begin{bmatrix}
1 \\
1
\end{bmatrix} }
\end{align*}
$$
![[Pasted image 20240429140709.png|500]]
# Problem 3
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
4 & 3 \\
4 & 8
\end{bmatrix}\vec{x},\vec{x}_{0}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-4 & -3 \\
-4 & \lambda-8
\end{vmatrix}=\lambda^{2}-12\lambda+20=0\\
\implies \lambda_{1}=10,\lambda_{2}=2\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
2
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
3 \\
-2
\end{bmatrix}\\
\vec{x}=\mathbf{S}[e^{t\mathbf{B}}]\mathbf{S}^{-1}\vec{x}_{0}=\begin{bmatrix}
1 & 3 \\
2 & -2
\end{bmatrix}\begin{bmatrix}
e^{10t} & 0 \\
0 & e^{2t}
\end{bmatrix}\left( -\frac{1}{8} \right)\begin{bmatrix}
-2 & -3 \\
-2 & 1
\end{bmatrix}\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
=-\frac{1}{8}\begin{bmatrix}
e^{10t} & 3e^{2t} \\
2e^{10t} & -2e^{2t}
\end{bmatrix}\begin{bmatrix}
-5 \\
-1
\end{bmatrix}=-\frac{1}{8}\begin{bmatrix}
-5e^{10t}-3e^{2t} \\
-10e^{10t}+2e^{2t}
\end{bmatrix}\\
\implies \boxed{ \vec{x}(t)=\begin{bmatrix}
\frac{5}{8}e^{10t}+\frac{3}{8}e^{2t} \\
\frac{5}{4}e^{10t}-\frac{1}{4}e^{2t}
\end{bmatrix}=\frac{5}{8}e^{10t}\begin{bmatrix}
1 \\
2
\end{bmatrix}+\frac{1}{8}e^{2t}\begin{bmatrix}
3 \\
-2
\end{bmatrix} }
\end{align*}
$$
![[Pasted image 20240429141545.png|500]]
# Problem 4
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
1 & 2 \\
2 & 4
\end{bmatrix}\vec{x},\vec{x}_{0}=\begin{bmatrix}
5 \\
0
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & -2 \\
-2 & \lambda-4
\end{vmatrix}=\lambda^{2}-5\lambda=0\\
\implies \lambda_{1}=0,\lambda_{2}=5\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
-1
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
2
\end{bmatrix}\\
\vec{x}=\mathbf{S}[e^{t\mathbf{B}}]\mathbf{S}^{-1}\vec{x}_{0}=\begin{bmatrix}
2 & 1 \\
-1 & 2
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & e^{5t}
\end{bmatrix} \frac{1}{5}\begin{bmatrix}
2 & -1 \\
1 & 2
\end{bmatrix}\begin{bmatrix}
5 \\
0
\end{bmatrix}\\
=\begin{bmatrix}
2 & e^{5t} \\
-1 & 2e^{5t}
\end{bmatrix}\begin{bmatrix}
2 \\
1
\end{bmatrix}=\boxed{ \begin{bmatrix}
4+e^{5t} \\
2e^{5t}-2
\end{bmatrix}=2\begin{bmatrix}
2 \\
-1
\end{bmatrix}+e^{5t}\begin{bmatrix}
1 \\
2
\end{bmatrix} }
\end{align*}
$$
![[Pasted image 20240429142210.png|500]]
# Problem 5
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
2 & 1 & 1 \\
1 & 3 & 3 \\
3 & 2 & 2
\end{bmatrix}\vec{x},\vec{x}_{0}=\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-2 & -1 & -1 \\
-1 & \lambda-3 & -3 \\
-3 & -2 & \lambda-2
\end{vmatrix}\\
=(\lambda-2)\begin{vmatrix}
\lambda-3 & -3 \\
-2 & \lambda-2
\end{vmatrix}+\begin{vmatrix}
-1 & -3 \\
-3 & \lambda-2
\end{vmatrix}-\begin{vmatrix}
-1 & \lambda-3 \\
-3 & -2
\end{vmatrix}\\
=(\lambda-2)^{2}(\lambda-3)-6\lambda+12-\lambda+2-9-2-3\lambda+9\\
=\lambda^{3}-7\lambda^{2}+6\lambda=0\\
\implies \lambda_{1}=0,\lambda_{2}=1,\lambda_{3}=6\\
\lambda_{1}\implies \vec{v}_{1}=\begin{bmatrix}
0 \\
1 \\
-1
\end{bmatrix}\\
\lambda_{2}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}\\
\lambda_{3}\implies \begin{bmatrix}
4 & -1 & -1 \\
-1 & 3 & -3 \\
-3 & -2 & 4
\end{bmatrix}\vec{v}_{3}=\vec{0}\implies \vec{v}_{3}=
\end{align*}
$$