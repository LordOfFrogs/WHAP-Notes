---
tags:
  - math/calc
due: 2023-12-01
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS11-2023.pdf)
# Problem 1
## a)
$$
\begin{align*}
\mathcal{B}=\begin{Bmatrix}
\begin{bmatrix} 2 \\ 1 \end{bmatrix},
\begin{bmatrix} 2 \\ 5 \end{bmatrix}
\end{Bmatrix}\\
\vec{x}=\begin{bmatrix} 7 \\ 2 \end{bmatrix}\\
=c_{1}\begin{bmatrix} 2\\1 \end{bmatrix}+c_{2}\begin{bmatrix} 2\\5 \end{bmatrix}\\
\implies \begin{cases}
2c_{1}+2c_{2}=7 \\
c_{1}+5c_{2}=2
\end{cases}\\
\implies -8c_{2}=3\implies c_{2}=-\frac{3}{8}\\
\implies c_{1}=\frac{31}{8}\\
\implies \fbox{$[\vec{x}]_\mathcal{B}=\begin{bmatrix} \displaystyle\frac{31}{8} \\ \displaystyle-\frac{3}{8} \end{bmatrix}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\mathcal{B}=\begin{Bmatrix}
\begin{bmatrix} 2\\1\\3 \end{bmatrix},
\begin{bmatrix} 1\\1\\-1 \end{bmatrix},
\begin{bmatrix} 0\\1\\-3 \end{bmatrix}
\end{Bmatrix}\\
\vec{x}=\begin{bmatrix} 7\\2\\3 \end{bmatrix}\\
=c_{1}\begin{bmatrix} 2\\1\\3 \end{bmatrix}+c_{2}\begin{bmatrix} 1\\1\\-1 \end{bmatrix}+c_{3}\begin{bmatrix} 0\\1\\-3 \end{bmatrix}\\
\implies \begin{cases}
2c_{1}+c_{2}=7 \\
c_{1}+c_{2}+c_{3}=2 \\
3c_{1}-c_{2}-3c_{3}=3
\end{cases}\\
\implies c_{1}-c_{3}=5,\\
5c_{1}-3c_{3}=10\\
\implies -2c_{3}=15\implies c_{3}=-\frac{15}{2}\\
\implies c_{1}=-\frac{5}{2},c_{2}=12\\
\implies \fbox{$[\vec{x}]_\mathcal{B}=\begin{bmatrix} \displaystyle-\frac{5}{2} \\ 12 \\ \displaystyle-\frac{15}{2} \end{bmatrix}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
-3 & 4 \\
-2 & 3
\end{bmatrix}\vec{x},
\vec{x}(0)=\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
\begin{bmatrix}
\lambda+3 & -4 \\
2 & \lambda-3
\end{bmatrix}\\
p_\mathbf{A}(\lambda)=\lambda^{2}-1\\
\implies \lambda_{1}=1,\lambda_{2}=-1\\
\begin{bmatrix}
4 & -4 \\
2 & -2
\end{bmatrix}\vec{v}_{1}=\vec{0}=\begin{bmatrix}
4v_{1,1}-4v_{1,2} \\
2v_{1,1}-2v_{1,2}
\end{bmatrix}\\
\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\begin{bmatrix}
2 & -4 \\
2 & -4
\end{bmatrix}\vec{v}_{2}=\vec{0}=\begin{bmatrix}
2v_{2,1}-4v_{2,2} \\
2v_{2,1}-4v_{2,2}
\end{bmatrix}\\
\implies \vec{v}_{2}=\begin{bmatrix}
2 \\
1
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}\\
\mathbf{D}=\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}\\
\vec{x}=\mathbf{S}[e^{t\mathbf{D}}]\mathbf{S}^{-1}\vec{x}(0)\\
=\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
e^{t} & 0 \\
0 & e^{-t}
\end{bmatrix}\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
=\begin{bmatrix}
e^{t} & 2e^{-t} \\
e^{t} & e^{-t}
\end{bmatrix}\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
=\begin{bmatrix}
2e^{-t}-e^{t} & 2e^{t}-2e^{-t} \\
e^{-t}-e^{t} & 2e^{t}-e^{-t}
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
\implies \fbox{$\vec{x}(t)=\begin{bmatrix}
10e^{-t}-3e^{t} \\
5e^{-t}-3e^{t}
\end{bmatrix}=-3e^{t}\begin{bmatrix}
1 \\
1
\end{bmatrix}+5e^{-t}\begin{bmatrix}
2 \\
1
\end{bmatrix}$}
\end{align*}
$$
![[Pasted image 20231124211643.png|500]]
# Problem 3
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
4 & -3 \\
8 & -6
\end{bmatrix}\vec{x},\ \vec{x}(0)=\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
\lambda\mathbf{I}-\mathbf{A}=\begin{bmatrix}
\lambda-4 & 3 \\
-8 & \lambda+6
\end{bmatrix}\\
p_\mathbf{A}(\lambda)=\lambda^{2}+2\lambda\\
\implies \lambda_{1}=0,\lambda_{2}=-2\\
\implies \begin{bmatrix}
-4 & 3 \\
-8 & 6
\end{bmatrix}\vec{v}_{1}=\vec{0}=\begin{bmatrix}
-4v_{1,1}+3v_{1,2} \\
-8v_{1,1}+6v_{1,2}
\end{bmatrix}\\
\implies \vec{v}_{1}=\begin{bmatrix}
3 \\
4
\end{bmatrix}\\
\begin{bmatrix}
-6 & 3 \\
-8 & 4
\end{bmatrix}\vec{v}_{1}=\vec{0}=\begin{bmatrix}
-6\vec{v}_{1,1}+3\vec{v}_{1,2} \\
-8\vec{v}_{1,1}+4\vec{v}_{1,2}
\end{bmatrix}\\
\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
2
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
3 & 1 \\
4 & 2
\end{bmatrix}\implies \det(\mathbf{S})=2\\
\implies\mathbf{S}^{-1}=\frac{1}{2}\begin{bmatrix}
2 & -1 \\
-4 & 3
\end{bmatrix}\\
\mathbf{D}=\begin{bmatrix}
0 & 0 \\
0 & -2
\end{bmatrix}\implies[e^{t\mathbf{D}}]=\begin{bmatrix}
1 & 0 \\
0 & e^{-2t}
\end{bmatrix}\\
\implies \vec{x}=\frac{1}{2}\begin{bmatrix}
3 & 1 \\
4 & 2
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & e^{-2t}
\end{bmatrix}\begin{bmatrix}
2 & -1 \\
-4 & 3
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
=\frac{1}{2}\begin{bmatrix}
3 & e^{-2t} \\
4 & 2e^{-2t}
\end{bmatrix}\begin{bmatrix}
2 & -1 \\
-4 & 3
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
=\frac{1}{2}\begin{bmatrix}
6-4e^{-2t} & -3+3e^{-2t} \\
8-8e^{-2t} & -4+6e^{-2t}
\end{bmatrix}\begin{bmatrix}
7 \\
2
\end{bmatrix}\\
=\frac{1}{2}\begin{bmatrix}
36-22e^{-2t} \\
48-44e^{-2t}
\end{bmatrix}\\
\implies \fbox{$\vec{x}(t)=\begin{bmatrix}
18-11e^{-2t} \\ 24-22e^{-2t}
\end{bmatrix}=6\begin{bmatrix} 3\\4 \end{bmatrix}-11e^{-2t}\begin{bmatrix}  1\\2 \end{bmatrix}$}
\end{align*}
$$
![[Pasted image 20231124231400.png|500]]
# Problem 4
$$
\begin{align*}
\frac{d\vec{x}}{dt}=\begin{bmatrix}
1 & -1 & 0 \\
1 & 2 & 1 \\
-2 & 1 & -1
\end{bmatrix}\vec{x}, 
\vec{x}(0)=\begin{bmatrix} 7\\2\\3 \end{bmatrix}\\
\lambda\mathbf{I}-\mathbf{A}=\begin{bmatrix}
\lambda-1 & 1 & 0 \\
-1 & \lambda-2 & -1 \\
2 & -1 & \lambda+1
\end{bmatrix}\\
p_\mathbf{A}(\lambda)=(\lambda-1)\begin{vmatrix}
\lambda-2 & -1 \\
-1 & \lambda+1
\end{vmatrix}-\begin{vmatrix}
-1 & -1 \\
2 & \lambda+1
\end{vmatrix}\\
=(\lambda-1)(\lambda-2)(\lambda+1)-(\lambda-1)+(\lambda+1)-2\\
=\lambda^{3}-2\lambda^{2}-\lambda\cancel{ +2 }\cancel{ -\lambda }+1\cancel{ +\lambda }+1\cancel{ -2 }\\
\implies \lambda_{1}=-1,\lambda_{2}=1,\lambda_{3}=2\\
\lambda_{1}\implies\begin{bmatrix}
-2 & 1 & 0 \\
-1 & -3 & -1 \\
2 & -1 & 0
\end{bmatrix}\vec{v}_{1}=\vec{0}\\
\implies \vec{v}_{1}=\begin{bmatrix} -1\\-2\\7 \end{bmatrix}\\
\lambda_{2}\implies\begin{bmatrix}
0 & 1 & 0 \\
-1 & -1 & -1 \\
2 & -1 & 2
\end{bmatrix}\vec{v}_{2}=\vec{0}\\
\implies \vec{v}_{2}=\begin{bmatrix} -1\\0\\1 \end{bmatrix}\\
\lambda_{3}\implies\begin{bmatrix}
1 & 1 & 0 \\
-1 & 0 & -1 \\
2 & -1 & 3
\end{bmatrix}\vec{v}_{3}=\vec{0}\\
\implies \vec{v}_{3}=\begin{bmatrix} -1\\1\\1 \end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
-1 & -1 & -1 \\
-2 & 0 & 1 \\
7 & 1 & 1
\end{bmatrix}\\
\left[\begin{array}{ccc|ccc}
-1 & -1 & -1 & 1 & 0 & 0 \\
-2 & 0 & 1 & 0 & 1 & 0 \\
7 & 1 & 1 & 0 & 0 & 1
\end{array}\right]\\
-R_{1},R_{2}+2R_{1},R_{3}-7R_{1}\implies\left[\begin{array}{ccc|ccc}
1 & 1 & 1 & -1 & 0 & 0 \\
0 & 2 & 3 & -2 & 1 & 0 \\
0 & -6 & -6 & 7 & 0 & 1
\end{array}\right]\\
\frac{1}{2}R_{2},R_{1}-R_{2},R_{3}+6R_{2}\implies\left[\begin{array}{ccc|ccc}
1 & 0 & -\frac{1}{2} & 0 & -\frac{1}{2} & 0 \\
0 & 1 & \frac{3}{2} & -1 & \frac{1}{2} & 0 \\
0 & 0 & 3 & 1 & 3 & 1
\end{array}\right]\\
\frac{1}{3}R_{3},R_{2}-\frac{3}{2}R_{3},R_{1}+\frac{1}{2}R_{3}\implies\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & \frac{1}{6} & 0 & \frac{1}{6} \\
0 & 1 & 0 & -\frac{3}{2} & -1 & -\frac{1}{2} \\
0 & 0 & 1 & \frac{1}{3} & 1 & \frac{1}{3}
\end{array}\right]\\
\implies \mathbf{S}^{-1}=\begin{bmatrix}
\frac{1}{6} & 0 & \frac{1}{6} \\
-\frac{3}{2} & -1 & -\frac{1}{2} \\
\frac{1}{3} & 1 & \frac{1}{3}
\end{bmatrix}\\
\mathbf{D}=\begin{bmatrix}
-1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 2
\end{bmatrix}\implies [e^{t\mathbf{D}}]=\begin{bmatrix}
e^{-t} & 0 & 0 \\
0 & e^{t} & 0 \\
0 & 0 & e^{2t}
\end{bmatrix}\\
\vec{x}=\begin{bmatrix}
-1 & -1 & -1 \\
-2 & 0 & 1 \\
7 & 1 & 1
\end{bmatrix}\begin{bmatrix}
e^{-t} & 0 & 0 \\
0 & e^{t} & 0 \\
0 & 0 & e^{2t}
\end{bmatrix}\begin{bmatrix}
\frac{1}{6} & 0 & \frac{1}{6} \\
-\frac{3}{2} & -1 & -\frac{1}{2} \\
\frac{1}{3} & 1 & \frac{1}{3}
\end{bmatrix}\begin{bmatrix} 7\\2\\3 \end{bmatrix}\\
=\begin{bmatrix}
-e^{-t} & -e^{t} & -e^{2t} \\
-2e^{-t} & 0 & e^{2t} \\
7e^{-t} & e^{t} & e^{2t}
\end{bmatrix}\begin{bmatrix}
\frac{1}{6} & 0 & \frac{1}{6} \\
-\frac{3}{2} & -1 & -\frac{1}{2} \\
\frac{1}{3} & 1 & \frac{1}{3}
\end{bmatrix}\begin{bmatrix} 7\\2\\3 \end{bmatrix}\\
=\begin{bmatrix}
-\frac{1}{6}e^{-t}+\frac{3}{2}e^{t}-\frac{1}{3}e^{2t} & e^{t}-e^{2t} & -\frac{1}{6}e^{-t}+\frac{1}{2}e^{t}-\frac{1}{3}e^{2t} \\
-\frac{1}{3}e^{-t}+\frac{1}{3}e^{2t} & e^{2t} & -\frac{1}{3}e^{-t}+\frac{1}{3}e^{2t} \\
\frac{7}{6}e^{-t}-\frac{3}{2}e^{t}+\frac{1}{3}e^{2t} & -e^{t}+e^{2t} & \frac{7}{6}e^{-t}-\frac{1}{2}e^{t}+\frac{1}{3}e^{2t}
\end{bmatrix}\begin{bmatrix} 7\\2\\3 \end{bmatrix}\\
\implies \fbox{$\vec{x}(t)=\begin{bmatrix}
-\frac{5}{3}e^{-t}+14e^{t}-\frac{16}{3}e^{2t} \\
-\frac{10}{3}e^{-t}+\frac{16}{3}e^{2t} \\
\frac{35}{3}e^{-t}-14e^{t}+\frac{16}{3}e^{2t}
\end{bmatrix}
=\frac{5}{3}e^{-t}\begin{bmatrix}-1\\-2\\7 \end{bmatrix}
-14e^{t}\begin{bmatrix} -1\\0\\1 \end{bmatrix}
+\frac{16}{3}e^{2t}\begin{bmatrix} -1\\1\\1 \end{bmatrix}$}
\end{align*}
$$
![[Pasted image 20231125205239.png|500]]
# Problem 5
$$
\ddot{x}+3\dot{x}-4x=0,x(0)=5,\dot{x}(0)=2
$$
## a)
$$
\begin{align*}
p(r)=r^{2}+3r-4=0\\
\implies r=-4,r=1\\
\implies x_{h}=c_{1}e^{-4t}+c_{2}e^{t}\\
x(0)=5\implies c_{1}+c_{2}=5\\
\dot{x}=-4c_{1}e^{-4t}+c_{2}e^{t}\\
\dot{x}(0)=2\implies c_{2}-4c_{1}=2\\
\implies 5c_{1}=3\\
\implies c_{1}=\frac{3}{5},c_{2}=\frac{22}{5}\\
\implies \fbox{$x(t)=\frac{3}{5}e^{-4t}+\frac{22}{5}e^{t}$}
\end{align*}
$$
## b)
$$
\begin{align*}
y=\dot{x}\\
\implies \begin{cases}
\frac{dx}{dt}=y \\
\frac{dy}{dt}=4x-3y
\end{cases}\\
\implies \frac{d\vec{x}}{dt}=\begin{bmatrix}
0 & 1 \\
4 & -3
\end{bmatrix}\vec{x}\\
\lambda\mathbf{I}-\mathbf{A}=\begin{bmatrix}
\lambda & -1 \\
-4 & \lambda+3
\end{bmatrix}\\
\implies p_\mathbf{A}(t)=\lambda^{2}+3\lambda-4\\
\implies \lambda_{1}=-4,\lambda_{2}=1\\
\lambda_{1}\implies\begin{bmatrix}
-4 & -1 \\
-4 & -1
\end{bmatrix}\vec{v}_{1}=\vec{0}\\
\implies \vec{v}_{1}=\begin{bmatrix} -1\\4 \end{bmatrix}\\
\lambda_{2}\implies \begin{bmatrix}
1 & -1 \\
-4 & 4
\end{bmatrix}\vec{v}_{2}=\vec{0}\\
\implies \vec{v}_{2}=\begin{bmatrix} 1\\1 \end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
-1 & 1 \\
4 & 1
\end{bmatrix}\implies \det(\mathbf{S})=-5\\
\implies \mathbf{S}^{-1}=\frac{1}{5}\begin{bmatrix}
-1 & 1 \\
4 & 1
\end{bmatrix}\\
\mathbf{D}=\begin{bmatrix}
-4 & 0 \\
0 & 1
\end{bmatrix}\\
\implies \vec{x}=\frac{1}{5}\begin{bmatrix}
-1 & 1 \\
4 & 1
\end{bmatrix}\begin{bmatrix}
e^{-4t} & 0 \\
0 & e^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 1 \\
4 & 1
\end{bmatrix}\begin{bmatrix} 5\\2 \end{bmatrix}\\
=\frac{1}{5}\begin{bmatrix}
-e^{4t} & e^{t} \\
4e^{-4t} & e^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 1 \\
4 & 1
\end{bmatrix}\begin{bmatrix} 5\\2 \end{bmatrix}\\
=\frac{1}{5}\begin{bmatrix}
e^{-4t}+4e^{t} & -e^{-4t}+e^{t} \\
-4e^{-4t}+4e^{t} & 4e^{-4t}+e^{t}
\end{bmatrix}\begin{bmatrix} 5\\2 \end{bmatrix}\\
=\frac{1}{5}\begin{bmatrix}
3e^{-4t}+22e^{t} \\
-12e^{-4t}+22e^{t}
\end{bmatrix}\\
\implies \fbox{$x(t)=\frac{3}{5}e^{-4t}+\frac{22}{5}e^{t}$}
\end{align*}
$$
![[Pasted image 20231201110135.png|500]]