---
tags:
  - math/calc
due: 2023-10-28
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW7-2023.pdf)
# Problem 1
$$
\begin{align*}
f(x,y)=x^{3}y+12x^{2}-8y\\
\overrightarrow{\nabla f }=0\implies f_{x}=0,f_{y}=0\\
\implies 3x^{2}y+24x=0,\\
x^{3}-8=0\\
\implies x=2,y=-4\\
H_{f}=\begin{bmatrix}
6xy+24 & 3x^{2} \\
3x^{2} & 0
\end{bmatrix}\\
\det(H_{f}(2,-4))=\begin{vmatrix}
6(2)(-4)+24 & 3(2)^{2} \\
3(2)^{2} & 0
\end{vmatrix}
\\
=(-48+24)(0)-(12)(12)=-144\\
\implies \fbox{$(2,-4)$ is a saddle point}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
f(x,y)=xy+\frac{1}{x}+\frac{1}{y}\\
\overrightarrow{\nabla f }=0\implies f_{x}=0,f_{y}=0\\
\implies y-\frac{1}{x^{2}}=0,\\
x-\frac{1}{y^{2}}=0\\
\implies x-\frac{1}{\left( \frac{1}{x^{2}} \right)^{2}}=0\\
\implies x-x^{4}=0\\
\implies (1,1)\\
H_{f}=\begin{bmatrix}
\frac{3}{x^{3}} & 1 \\
1 & \frac{3}{y^{2}}
\end{bmatrix}\\
\det(H_{f}(1,1))=(3)(3)-(1)(1)=8>0\\
f_{xx}(1,1)=3>0\\
\implies \fbox{$(1,1)$ is a local min}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
f(x,y)=e^{y}(y^{2}-x^{2})\\
\overrightarrow{\nabla f }=0\implies f_{x}=0,f_{y}=0\\
\implies -2xe^{y}=0,\\
e^{y}(y^{2}-x^{2})+2ye^{y}=0\\
\implies(0,0),(0,-2)\\
H_{f}=\begin{bmatrix}
-2e^{y} & -2xe^{y} \\
-2xe^{y} & e^{y}(y^{2}-x^{2})+4ye^{y}+2e^{y}
\end{bmatrix}\\
\det(H_{f}(0,0))=(-2)(2)-(0)(0)=-4\\
\implies \fbox{$(0,0)$ is a saddle point}\\
\det(H_{f}(0,-2))=\left( -\frac{2}{e^{2}} \right)\left( -\frac{2}{e^{2}} \right)-(0)(0)=\frac{4}{e^{4}}>0\\
f_{xx}(0,-2)=-\frac{2}{e^{2}}<0\\
\implies \fbox{$(0,-2)$ is a local max}
\end{align*}
$$
# Problem 4
$$
\begin{align*}
f(x,y)=3+xy-x-2y\\
(x,y)\in D:\text{Triangle }(1,0),(5,0),(1,4)\\
\overrightarrow{\nabla f }=0\implies f_{x}=0,f_{y}=0\\
\implies y-1=0,\\
x-2=0\\
\implies (2,1)\\
H_{f}=\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}\\
\det(H_{f}(2,1))=-1\implies\text{Saddle point}\\
\text{Boundary:}\\
\text{Line }(1,0),(5,0)\to y=0\\
\implies f(x,y)=3-x\\
\max=2,\min=-2\\
\text{Line }(1,0),(1,4)\to x=1\\
\implies f(x,y)=2-y\\
\max=2,\min=-2\\
\text{Line }(5,0),(1,4)\to y=5-x\\
\implies f(x,y)=3+x(5-x)-x-2(5-x)\\
=-x^{2}+6x-7\\
\frac{d}{dx}(-x^{2}+6x-7)=6-2x=0\\
\implies x=3\implies f(x,y)=2\\
x=5\implies f(x,y)=-2\\
x=1\implies f(x,y)=-2\\
\implies \fbox{Max: $2$, Min: $-2$}
\end{align*}
$$
# Problem 5
## a)
$$
\begin{align*}
f(x,y,z)=(x-1)^{2}+(y-2)^{2}+(z-3)^{2}\\
x-y+z=4\\
\implies x=4+y-z\\
\implies f(x,y,z)=(3+y-z)^{2}+(y-2)^{2}+(z-3)^{2}\\
\overrightarrow{\nabla f }=0\implies f_{x},f_{y},f_{z}=0\\
\implies 2(3+y-z)+2(y-2)=0,\\
-2(3+y-z)+2(z-3)=0\\
\implies 4y-2z=-2\implies 2y-z=-1,\\
4z-2y=12\\
\implies z=\frac{11}{3},y=\frac{4}{3}\implies x=\frac{5}{3}\\
\implies \fbox{$\left( \frac{5}{3}, \frac{4}{3}, \frac{11}{3} \right)$ is closest}
\end{align*}
$$
## b)
$$
\begin{align*}
f(x,y,z)=(x-1)^{2}+(y-2)^{2}+(z-3)^{2}\\
g(x,y,z)=x-y+z=4\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle 2x-2,2y-4,2z-6 \rangle = \lambda\langle 1,-1,1 \rangle \\
\implies 2x-2=\lambda,\\
2y-4=-\lambda,\\
2z-6=\lambda\\
x-y+z=4\\
\implies 8+2y-2z-2=\lambda\\
\implies 6+4-\lambda-\lambda-6=\lambda\\
\implies \lambda=\frac{4}{3}\\
\implies x=\frac{5}{3},y=\frac{4}{3},z=\frac{11}{3}\\
\implies \fbox{$\left( \frac{5}{3}, \frac{4}{3}, \frac{11}{3} \right)$ is closest point}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
f(x,y,z)=x^{2}+y^{2}+z^{2}\\
g(x,y,z)=y^{2}-xz=9\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle 2x,2y,2z \rangle =\lambda\langle -z,2y,-x \rangle \\
\implies 2x=-\lambda z,\\
2y=\lambda2y,\\
2z=-\lambda x,\\
y^{2}-xz=9\\
\implies \lambda=1\text{ or }y=0\\
\lambda=1\implies 2(-2z)=-z\implies x,z=0\\
\implies (0,3,0),(0,-3,0)\\
y=0\implies 9=-xz\implies z\neq0\\
\implies 2z=-\lambda\left( -\frac{\lambda z}{2} \right)\implies\lambda=2\\
\implies x=-z\\
\implies (3,0,-3),(-3,0,3)\\
H_{f}=\begin{bmatrix}
2 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 2
\end{bmatrix}\\
\det(H_{f})=8>0\\
f_{yy}=2>0\\
\implies (0,3,0),(0,-3,0),(3,0,-3),(-3,0,3)\text{ mins}\\
\implies \fbox{(0,3,0) and (0,-3,0) are closest}
\end{align*}
$$
# Problem 7
## a)
$$
\begin{align*}
f(x,y,z)=xyz\\
x+y+z=100\\
\implies f(x,y,z)=(100-y-z)yz\\
=100yz-y^{2}z-yz^{2}\\
\overrightarrow{\nabla f }=0\\
\implies 100z-2yz-z^{2}=0,\\
100y-y^{2}-2yz=0\\
\implies (0,0,0)\\
\lnot (0,0,0)\implies 100-2y-z=0,\\
100-y-2z=0\\
\implies 2y+z=2z+y\implies y=z=\frac{100}{3}\\
\implies \left( \frac{100}{3}, \frac{100}{3}, \frac{100}{3} \right)\\
\implies \fbox{$\frac{100}{3}$ thrice}
\end{align*}
$$
## b)
$$
\begin{align*}
f(x,y,z)=xyz\\
g(x,y,z)=x+y+z=100\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle yz,xz,xy \rangle =\lambda\langle 1, 1, 1 \rangle\\
\implies yz=xz=xy\implies x=y=z=\frac{100}{3}\\
\implies \fbox{$\frac{100}{3}$ thrice}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
f(x,y,z)=xyz\\
x+2y+3z=6\\
\implies f(x,y,z)=(6-2y-3z)yz\\
=6yz-2y^{2}z-3yz^{2}\\
\overrightarrow{\nabla f }=0\\
\implies 6z-4yz-3z^{2}=0,\\
6y-2y^{2}-6yz=0\\
x,y,z>0\implies 6-4y-3z=0,\\
6-2y-6z=0\\
\implies 4y+3z=2y+6z\implies 2y=3z\\
\implies z=\frac{2}{3},y=1\\
\implies \left( 2,1, \frac{2}{3} \right)\\
\implies \fbox{Largest volume is $\frac{4}{3}$}
\end{align*}
$$
## b)
$$
\begin{align*}
f(x,y,z)=xyz\\
g(x,y,z)=x+2y+3z=6\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle yz,xz,xy \rangle =\lambda\langle 1,2,3 \rangle \\
\implies yz=\lambda\\
xz=2\lambda\\
xy=3\lambda\\
x+2y+3z=6\\
\implies xz=2yz\implies x=2y,\\
xy=3yz\implies x=3z\\
\implies y=1,x=2,z=\frac{2}{3}\\
\implies \left( 2,1,\frac{2}{3} \right)\\
\implies \fbox{$\frac{4}{3}$ max volume}
\end{align*}
$$
# Problem 9
$$
\begin{align*}
f(x,y,z)=xyz\\
2yz+2xz+2xy=64\\
\implies g(x,y,z)=yz+xz+xy=32\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle yz,xz,xy \rangle =\lambda\langle z+y,x+z,x+y \rangle \\
\implies yz=\lambda(z+y),\\
xz=\lambda(x+z),\\
xy=\lambda(x+y)\\
yz+xz+xy=32\\
\implies x=\frac{\lambda z}{z-\lambda},y=\frac{\lambda z}{z-\lambda}\\
\implies x=y\\
\implies x^{2}=2\lambda x\implies x=2\lambda\\
\implies 2\lambda=\frac{\lambda z}{z-\lambda}\implies 2\lambda z-2\lambda^{2}=\lambda z\\
\implies z=2\lambda\\
x=y=z\\
\implies 3x^{2}=32\implies x=\sqrt{\frac{32}{3}}\\
\implies \fbox{$\frac{4\sqrt{6}}{3}$ cm in all three dimensions}
\end{align*}
$$
# Problem 10
$$
\begin{align*}
f(x,y,z)=5xy+2xz+2yz\\
g(x,y,z)=xyz=V\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle 5y+2z,5x+2z,2x+2y \rangle =\lambda\langle yz,xz,xy \rangle\\
\implies 5y+2z=\lambda yz\implies \frac{5}{z}+\frac{2}{y}=\lambda,\\
5x+2z=\lambda xz\implies \frac{5}{z}+\frac{2}{x}=\lambda,\\
2x+2y=\lambda xy\implies \frac{2}{y}+\frac{2}{x}=\lambda\\
xyz=V\\
\implies \frac{5}{z}+\frac{2}{y}=\frac{5}{z}+\frac{2}{x}=\frac{2}{y}+\frac{2}{x}\\
\implies x=y\\
\implies \frac{5}{z}+\frac{2}{x}=\frac{4}{x}\implies 5x=2z\\
\implies \frac{5}{2}x^{3}=V\implies x=\sqrt[3]{\frac{2}{5}V}=\frac{\sqrt[3]{10V}}{5}=y\\
\implies z=\frac{\sqrt[3]{50V}}{2}\\
\implies \fbox{$\frac{\sqrt[3]{50V}}{5}\times \frac{\sqrt[3]{50V}}{5}\times \frac{\sqrt[3]{50V}}{2}$}
\end{align*}
$$
# Problem 11
$$
\begin{align*}
f(x_{0},y_{0},z_{0})=\frac{1}{3}x_{0}y_{0}z_{0}\\
\frac{x}{x_{0}}+\frac{y}{y_{0}}+\frac{z}{z_{0}}=1\\
\frac{1}{x_{0}}+\frac{2}{y_{0}}+\frac{3}{z_{0}}=1\\
g(x,y,z)=\frac{1}{x}+\frac{2}{y}+\frac{3}{z}=1\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \left\langle  \frac{yz}{3}, \frac{xz}{3}, \frac{xy}{3} \right\rangle=\lambda\left\langle  -\frac{1}{x^{2}},-\frac{2}{y^{2}},-\frac{3}{z^{2}}  \right\rangle\\
\implies \frac{yz}{3}=-\frac{\lambda}{x^{2}}\implies x^{2}yz=-3\lambda,\\
\frac{xz}{3}=-\frac{2\lambda}{y^{2}}\implies xy^{2}z=-6\lambda,\\
\frac{xy}{3}=-\frac{3\lambda}{z^{2}}\implies xyz^{2}=-9\lambda\\
\frac{1}{x}+\frac{2}{y}+\frac{3}{z}=1\\
\implies 2x^{2}yz=xy^{2}z\implies 2x=y,\\
3x^{2}yz=xyz^{2}\implies 3x=z,\\
3xy^{2}z=2xyz^{2}\implies 3y=2z\\
\frac{1}{x}+\frac{2}{2x}+\frac{3}{3x}=1\implies x=3\\
\implies y=6,z=9\\
\implies \frac{x}{3}+\frac{y}{6}+\frac{z}{9}=1\\
\implies \fbox{$6x+3y+2z=18$}
\end{align*}
$$
# Problem 12
$$
(-2,4),(-1,2),(0,1),(1,1),(2,2)
$$
## a)
$$
\begin{align*}
f(m,b)=\sum_{i=1}^{N} (mx_{i}+b-y_{i})^{2}\\
\overrightarrow{\nabla f }=0\implies f_{m},f_{b}=0\\
\implies \sum_{i=1}^{N} 2x_{i}(mx_{i}+b-y_{i})=0\\
\sum_{i=1}^{N} 2(mx_{i}+b-y_{i})=0\\
\implies 2m\sum x_{i}^{2}+2b\sum x_{i}-2\sum x_{i}y_{i}=0\\
2m\sum x_{i}+2bN-2\sum y_{i}=0\\
\implies \begin{bmatrix}
\sum x_{i}^{2} & \sum x_{i} \\
\sum x_{i} & N
\end{bmatrix}
\begin{bmatrix} m \\ b \end{bmatrix}
=\begin{bmatrix} \sum x_{i}y_{i} \\ \sum y_{i}\end{bmatrix}\\
\begin{array}{c|cccc}
\ & x_{i} & y_{i} & x_{i}^{2} & x_{i}y_{i} \\
\hline & -2 & 4 & 4 & -8 \\
 & -1 & 2 & 1 & -2 \\
 & 0 & 1 & 0 & 0 \\
 & 1 & 1 & 1 & 1 \\
 & 2 & 2 & 4 & 4 \\
\hline \sum\limits & 0 & 10 & 10 & -5
\end{array}\\
\begin{bmatrix}
10 & 0 \\
0 & 5
\end{bmatrix}
\begin{bmatrix} m \\ b \end{bmatrix}
=\begin{bmatrix} -5 \\ 10 \end{bmatrix}\\
\implies \begin{bmatrix} m \\ b \end{bmatrix}
=\frac{1}{50}\begin{bmatrix}
5 & 0 \\
0 & 10
\end{bmatrix}
\begin{bmatrix} -5 \\ 10 \end{bmatrix}\\
\implies m=\frac{1}{50}(-25)=-\frac{1}{2}\\
b=\frac{1}{50}(100)=2\\
\implies \fbox{$y=-\frac{1}{2}x+2$}
\end{align*}
$$
## b)
$$
\begin{align*}
f(a,b,c)=\sum(ax_{i}^{2}+bx_{i}+c-y_{i})^{2}\\
\overrightarrow{\nabla f }=0\implies f_{a},f_{b},f_{c}=0\\
\implies \sum2x_{i}^{2}(ax_{i}^{2}+bx_{i}+c-y_{i})=0\\
\sum2x_{i}(ax_{i}^{2}+bx_{i}+c-y_{i})=0\\
\sum2(ax_{i}^{2}+bx_{i}+c-y_{i})=0\\
\implies a\sum x_{i}^{4}+b\sum x_{i}^{3}+c\sum x_{i}^{2}=\sum x_{i}^{2}y_{i}\\
a\sum x_{i}^{3}+b\sum x_{i}^{2}+c\sum x_{i}=\sum x_{i}y_{i}\\
a\sum x_{i}^{2}+b\sum x_{i}+cN=\sum y_{i}\\
\implies \begin{bmatrix}
x_{i}^{4} & x_{i}^{3} & x_{i}^{2} \\
x_{i}^{3} & x_{i}^{2} & x_{i} \\
x_{i}^{2} & x_{i} & N
\end{bmatrix}
\begin{bmatrix} a \\ b \\ c \end{bmatrix}
=\begin{bmatrix} x_{i}^{2}y_{i} \\ x_{i}y_{i} \\ y_{i}\end{bmatrix} & \text{(implied sums)}\\
\begin{array}{c|cccc}
\ & x_{i} & y_{i} & x_{i}^{2} & x_{i}^{3} & x_{i}^{4} & x_{i}y_{i} & x_{i}^{2}y_{i} \\
\hline & -2 & 4 & 4 & -8 & 16 & -8 & 16 \\
 & -1 & 2 & 1 & -1 & 1 & -2 & 2 \\
 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
 & 2 & 2 & 4 & 8 & 16 & 4 & 8 \\
\hline \sum\limits & 0 & 10 & 10 & 0 & 34 & -5 & 27
\end{array}\\
\begin{bmatrix}
34 & 0 & 10 \\
0 & 10 & 0 \\
10 & 0 & 5
\end{bmatrix}
\begin{bmatrix} a \\ b \\ c \end{bmatrix}
=\begin{bmatrix} 27 \\ -5 \\ 10 \end{bmatrix}\\
\implies\left[\begin{array}{ccc|c}
34 & 0 & 10 & 27 \\
0 & 10 & 0 & -5 \\
10 & 0 & 5 & 10
\end{array}\right]\\
\frac{R_{1}}{34},R_{3}-10R_{1}\\
\left[\begin{array}{ccc|c}
1 & 0 & \frac{5}{17} & \frac{27}{34} \\
0 & 10 & 0 & -5 \\
0 & 0 & \frac{35}{17} & \frac{35}{17}
\end{array}\right]\\
\frac{R_{2}}{10}, R_{3} \frac{17}{35}, R_{1}-\frac{5}{17}R_{3}\\
\left[\begin{array}{ccc|c}
1 & 0 & 0 & \frac{1}{2} \\
0 & 1 & 0 & -\frac{1}{2} \\
0 & 0 & 1 & 1
\end{array}\right]\\
\implies \fbox{$y=\frac{1}{2}x^{2}-\frac{1}{2}x+1$}
\end{align*}
$$
# Problem 13
$$
\begin{align*}
f(x,y)=4x+6y\\
g(x,y)=x^{2}+y^{2}=13\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle 4,6 \rangle =\lambda\langle 2x,2y \rangle \\
\implies 2=\lambda x,\\
3=\lambda y\\
x^{2}+y^{2}=13\\
\implies \frac{4}{\lambda^{2}}+\frac{9}{\lambda^{2}}=13\\
\implies \lambda=\pm1\implies x=\pm2,y=\pm3\\
\begin{array}{c|c|c}
x & y & f(x,y) \\
\hline -2 & -3 & -26 \\
2 & 3 & 26
\end{array}\\
\implies \fbox{$(-2,-3)$ is min, $(2,3)$ is max}
\end{align*}
$$
# Problem 14
$$
\begin{align*}
f(x,y,z)=8x-4z\\
g(x,y,z)=x^{2}+10y^{2}+z^{2}=5\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies \langle 8,0,-4 \rangle =\lambda\langle 2x,20y,2z \rangle \\
\implies 8=2\lambda x\implies x=\frac{4}{\lambda},\\
20\lambda y=0\implies y=0,\\
-4=2\lambda z\implies z=-\frac{2}{\lambda}\\
x^{2}+10y^{2}+z^{2}=5\\
\implies \frac{16}{\lambda^{2}}+\frac{4}{\lambda^{2}}=5\\
\implies \lambda=\pm2\\
\implies x=\pm2,z=\mp1\\
\begin{array}{c|c|c|c}
x & y & z & f(x,y,z) \\
\hline 2 & 0 & -1 & 20 \\
-2 & 0 & 1 & -20
\end{array}\\
\implies \fbox{$(-2,0,1)$ is min, $(2,0,-1)$ is max}
\end{align*}
$$