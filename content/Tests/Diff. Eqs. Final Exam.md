---
date: 2023-12-20
course: "[[Ordinary Differential Equations]]"
tags:
  - math/calc
---
Open note!
[Practice Problems](http://math.rwinters.com/E21c/solutions/PracticeFinal2023.pdf)
# Problem 1
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
0 & 1 \\
-4k & 2k
\end{bmatrix}\vec{x}\\
\text{Horizontal nullclines: }4kx=2ky\implies y=2x\\
\text{Vertical nullclines: }y=0\\
\det(\lambda\mathbf{I}-\mathbf{A})=\begin{vmatrix}
\lambda & -1 \\
4k & \lambda-2k
\end{vmatrix}\\
=\lambda^{2}-2k\lambda+4k\\
\implies \lambda=\frac{2k\pm\sqrt{4k^{2}-16k}}{2}=k\pm \sqrt{k(k-4)}\\
\implies \text{If }k<0, \vec{v}_{2} \text{ shrinks (toward origin)}\text{ and }\\
\vec{v}_{1}\text{ grows if }k+\sqrt{k(k-4)}>0\implies k^{2}-4k>k^{2}\implies\text{any }k<0\\
\text{If } k>0, \text{Re}(\lambda)>0\implies \text{spirals clockwise away from origin}\\
\text{If }k>4, \vec{v}_{1} \text{ is stable and grows}, \vec{v}_{2}\text{ is unstable and grows}\\
\text{If }k=4,\text{stable and growing eigenvector}
\end{align*}
$$
![[Diff. Eqs. Final Exam 2023-12-18 13.58.52.excalidraw]]
# Problem 2
![[Diff. Eqs. Final Exam 2023-12-19 11.49.21.excalidraw]]
# Problem 7
## a)
$$
\begin{align*}
\ddot{y}+2\dot{y}+ky=0\\
\implies r=-1\pm\sqrt{1-k}\\
\implies k=1\\
(y=c_{1}e^{-t}+c_{2}te^{-t})
\end{align*}
$$
## b)
$$
\begin{align*}
k>1
\end{align*}
$$
## c)
$$
\begin{align*}
\ddot{y}+2\dot{y}+3y=5\sin2t\\
\ddot{z}+2\dot{z}+3z=5e^{2it}\\
\implies z_{p}=\frac{5e^{2it}}{4i-1}\\
=-\frac{5}{17}(4i+1)(\cos2t+i\sin2t)\\
\implies y_{p}=-\frac{20}{17}\cos2t-\frac{5}{17}\sin2t
\end{align*}
$$
# Problem 8
![[Diff. Eqs. Final Exam 2023-12-20 09.30.54.excalidraw]]
# Problem 9
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
a & 0 \\
b & c
\end{bmatrix}\vec{x},a>0\\
\text{One equilibrium at }(0,0)\\
\begin{vmatrix}
\lambda-a & 0 \\
-b & \lambda-c
\end{vmatrix}=\lambda^{2}-(a+c)\lambda+ac=0\\
\implies \lambda=\frac{a+c\pm\sqrt{a^{2}+2ac+c^{2}-4ac}}{2}=\frac{a+c\pm(a-c)}{2}\\
\implies \lambda_{1}=a,\lambda_{2}=c\\
\implies \vec{v}_{1}=\begin{bmatrix}
a-c \\
b
\end{bmatrix}\text{ grows away from origin}\\
\vec{v}_{2}=\begin{bmatrix}
0 \\
1
\end{bmatrix}\\
\text{Either semi-stable or unstable}
\end{align*}
$$
# Problem 10
![[Diff. Eqs. Final Exam 2023-12-20 09.47.31.excalidraw]]
$$
\begin{align*}
(-4,-2):\\
\frac{dx}{dt}=-4(y+2)\\
\frac{dy}{dt}=(x+4)-4(y+2)\\
\implies \begin{bmatrix}
0 & -4 \\
1 & -4
\end{bmatrix}\implies \begin{vmatrix}
\lambda & 4 \\
-1 & \lambda+4
\end{vmatrix}=0\\
\implies \lambda=-2\text{ multiplicity 2}\\
\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
1
\end{bmatrix}\\
\implies -4v_{2}=-2v_{1}+2,\\
v_{1}-4v_{2}=-2v_{2}+1\implies v_{1}=2v_{2}+1\\
\implies \vec{v}_{2}=\begin{bmatrix}
3 \\
1
\end{bmatrix}\\
\implies \text{Stable}\\
(0,0):\\
\frac{dx}{dt}=2x\\
\frac{dy}{dt}=x\\
\implies \text{Always in span}\left\{\begin{bmatrix}
2 \\
1
\end{bmatrix}\right\}\\
\text{Unstable}
\end{align*}
$$
# Problem 11
$$
\begin{align*}
\dddot{x}-3\ddot{x}+\dot{x}-3x=12\cos3t\\
p(r)=r^{3}-3r^{2}+r-3=0\\
\implies r=3,\pm i\\
\implies x_{h}=c_{1}e^{3t}+c_{2}\sin t+c_{3}\cos t\\
\dddot{z}-3\ddot{z}+\dot{z}-3z=12e^{3it}\\
\implies z_{p}=\frac{12e^{3it}}{24-24i}=\frac{1}{4}(2+2i)(\cos3t+i\sin3t)\\
\implies x_{p}=\frac{1}{2}\cos3t-\frac{1}{2}\sin3t\\
\implies x=c_{1}e^{3t}+c_{2}\sin t+c_{3}\cos t+\frac{1}{2}\cos3t-\frac{1}{2}\sin3t
\end{align*}
$$
# Problem 12
$$
\begin{align*}
xy'=y+x^{2}\\
\implies xy'-y=x^{2}\\
y_{h}:xy'=y\implies \ln y=\ln x+C\\
\implies y_{h}=c_{1}x\\
y_{p}=ax^{2}+bx\\
\implies y'=2ax+b\\
\implies 2ax^{2}+bx-ax^{2}-bx=x^{2}\\
\implies a=1,b=0\\
\implies y_{p}=x^{2}\\
\implies y=x+x^{2}
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\ddot{x}-3\dot{x}+2x=e^{-t}+t\\
x_{h}=c_{1}e^{t}+c_{2}e^{2t}\\
\ddot{x}-3\dot{x}+2x=e^{-t}\implies x_{p}=\frac{1}{6}e^{-t}\\
\ddot{x}-3\dot{x}+2x=t\implies x_{p}=at+b\\
\implies -3a+2at+2b=t\\
\implies x_{p}=\frac{1}{2}t+\frac{3}{4}\\
\implies x=c_{1}e^{t}+c_{2}e^{2t}+\frac{1}{6}e^{-t}+\frac{1}{2}t+\frac{3}{4}
\end{align*}
$$