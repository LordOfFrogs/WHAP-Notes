---
tags:
  - math/linear-algebra
due: 2024-02-03
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW1-2024.pdf)
# Problem 1
$$
\begin{align*}
\left[\begin{array}{cc|c}
1 & -2 & 2 \\
3 & 5 & 17
\end{array}\right]\\
\overset{R_{1}}{\underset{R_{2}-3R_{1}}{\longrightarrow}}\left[\begin{array}{cc|c}
1 & -2 & 2 \\
0 & 11 & 11
\end{array}\right]\\
\overset{R_{1}}{\underset{\frac{R_{2}}{11}}{\longrightarrow}}\overset{R_{1}+2R_{2}}{\underset{R_{2}}{\longrightarrow}}\left[\begin{array}{cc|c}
1 & 0 & 4 \\
0 & 1 & 1
\end{array}\right]\\
\implies \boxed{ (x,y)=(4,1) }
\end{align*}
$$
![[E21B Homework 1 2024-02-01 15.23.06.excalidraw]]
# Problem 2
$$
\begin{align*}
\left[\begin{array}{ccc|c}
1 & 4 & 1 & 0 \\
4 & 13 & 7 & 0 \\
7 & 22 & 13 & 0
\end{array}\right]\\
RREF\to\left[\begin{array}{ccc|c}
1 & 0 & 5 & 0 \\
0 & 1 & -1 & 0 \\
0 & 0 & 0 & 0
\end{array}\right]\\
\implies x+5z=0,y-z=0\\
t=z\implies \boxed{ \begin{cases}
x=-5t \\
y=t \\
z=t
\end{cases} }\\
\fbox{ 3 planes intersecting in a single line passing through origin }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\left[\begin{array}{cc|c}
1 & 2 & a \\
3 & 5 & b
\end{array}\right]\\
RREF\to\left[\begin{array}{cc|c}
1 & 0 & 2b-5a \\
0 & 1 & 3a-b
\end{array}\right]\\
\implies \boxed{ (x,y)=(2b-5a,3a-b) }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\text{First, looking at just the first 2 equations:}\\
\left[\begin{array}{ccc|c}
1 & 1 & -1 & -2 \\
3 & -5 & 13 & 18
\end{array}\right]\\
RREF\to\left[\begin{array}{ccc|c}
1 & 0 & 1 & 1 \\
0 & 1 & -2 & -3
\end{array}\right]\\
\implies\text{line }\vec{x}=\begin{bmatrix}
1 \\
-3 \\
0
\end{bmatrix}+t\begin{bmatrix}
-1 \\
2 \\
1
\end{bmatrix}\\
\text{Any solution exists: }(1-t)-2(2t-3)+5(t)=k\\
\Longleftrightarrow k=7\\
\text{Infinite solns. if and only if normal vector of plane $\perp$ vector of line}\\
\Longleftrightarrow \begin{bmatrix}
1 \\
-2 \\
5
\end{bmatrix}\cdot t\begin{bmatrix}
-1 \\
2 \\
1
\end{bmatrix}=0\\
\Longleftrightarrow -t-4t+5t=0\checkmark\\
\therefore\fbox{ This system has infinite solutions for $k=7$}\\
\boxed{\text{that fall on the line parametrically described as }\vec{r}(t)=\begin{bmatrix}
1 \\
-3 \\
0
\end{bmatrix}+t\begin{bmatrix}
-1 \\
2 \\
1
\end{bmatrix} }
\end{align*}
$$
# Problem 5
$$
\begin{align*}
f(t)=a+bt+ct^{2}\\
f(1)=-1,f(2)=3,f(3)=13\\
\implies \begin{cases}
a+b+c=-1 \\
a+2b+4c=3 \\
a+3b+9t=13
\end{cases}\\
\implies \left[\begin{array}{ccc|c}
1 & 1 & 1 & -1 \\
1 & 2 & 4 & 3 \\
1 & 3 & 9 & 13
\end{array}\right]\\
RREF\to\left[\begin{array}{ccc|c}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & -5 \\
0 & 0 & 1 & 3
\end{array}\right]\\
\implies \boxed{ f(t)=1-5t+3t^{2} }
\end{align*}
$$
![[E21B Homework 1 2024-01-29 11.31.01.excalidraw]]
# Problem 6
![[E21B Homework 1 2024-01-29 11.38.04.excalidraw|600]]
# Problem 7
![[E21B Homework 1 2024-01-29 15.19.58.excalidraw|600]]
# Problem 8
$$
\begin{align*}
1.\begin{bmatrix}
1 & a \\
0 & 1
\end{bmatrix}\\
2.\begin{bmatrix}
1 & a \\
0 & 0
\end{bmatrix}\\
3.\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\\
4.\begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}
\end{align*}
$$
**Four types**
The bottom left can't be 1, because it would not be leading
If the top left is 1, the bottom right is either 1 (1.) or 0 (2.)
If not, either the top right is 1 and everything else is 0 (3.) or everything is 0 (4.)
# Problem 9
$$
\begin{array}{cc}
1.\begin{bmatrix}
1 & a \\
0 & 1 \\
0 & 0
\end{bmatrix} & 2.\begin{bmatrix}
1 & a \\
0 & 0 \\
0 & 0
\end{bmatrix} \\
3.\begin{bmatrix}
0 & 1 \\
0 & 0 \\
0 & 0
\end{bmatrix} & 4.\begin{bmatrix}
0 & 0 \\
0 & 0 \\
0 & 0
\end{bmatrix}
\end{array}
$$
**Four types**
Same as 2x2 because the bottom row can't have a leading 1, so must be 0s
# Problem 10
$$
\begin{array}{cc}
1.\begin{bmatrix}
1 & a & b \\
0 & 1 & c
\end{bmatrix} & 2. \begin{bmatrix}
1 & a & b \\
0 & 0 & 1
\end{bmatrix}\\
3. \begin{bmatrix}
1 & a & b \\
0 & 0 & 0
\end{bmatrix} & 4. \begin{bmatrix}
0 & 1 & a \\
0 & 0 & 1
\end{bmatrix}\\
5. \begin{bmatrix}
0 & 1 & a \\
0 & 0 & 0
\end{bmatrix} & 6.\begin{bmatrix}
0 & 0 & 1 \\
0 & 0 & 0
\end{bmatrix} \\
7.\begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\end{array}
$$
**Seven types**
# Problem 11
$$
\begin{align*}
\left[\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 1 \\
1 & 1 & 1 & 1 & 0 \\
1 & -1 & 1 & -1 & 0 \\
1 & 2 & 4 & 8 & -15
\end{array}\right]\\
RREF\to\left[\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 & 2 \\
0 & 0 & 1 & 0 & -1 \\
0 & 0 & 0 & 1 & -2
\end{array}\right]\\
\implies \boxed{ f(t) =1+2t-t^{2}-2t^{3} }
\end{align*}
$$
![[E21B Homework 1 2024-01-29 22.29.50.excalidraw]]
# Problem 12
$$
\begin{align*}
\text{JFK: }J,\text{Dunster: }D,\text{Mt. Auburn: }M,\text{Winthrop: }W\\
250=M+D+100\\
D=150+120-W\\
J=300+W-320\\
M=300+J-400\\
\implies \begin{cases}
D+M=150 \\
D+W=270 \\
J-W=-20 \\
J-M=100
\end{cases}\\
\implies \left[\begin{array}{cccc|c}
0 & 1 & 1 & 0 & 150 \\
0 & 1 & 0 & 1 & 270 \\
1 & 0 & 0 & -1 & -20 \\
1 & 0 & -1 & 0 & 100
\end{array}\right]\\
RREF\to \left[\begin{array}{cccc|c}
1 & 0 & 0 & -1 & -20 \\
0 & 1 & 0 & 1 & 270 \\
0 & 0 & 1 & -1 & -120 \\
0 & 0 & 0 & 0 & 0
\end{array}\right]\\
t=W\implies\\
\boxed{ \begin{cases}
J=t-20 \\
D=270-t \\
M=t-120 \\
W=t
\end{cases} }\\
\fbox{ Not possible to figure out exactly how much traffic, one degree of freedom }\\
\boxed{ t=200\implies J=180,D=70,M=80,W=200 }\\
t_{min}=120,t_{max}=270\\
\implies \boxed{ \begin{cases}
J_{min}=100,& J_{max}=250 \\
D_{min}=0,& D_{max}=150 \\
M_{min}=0, & M_{max}=150 \\
W_{min}=120, & W_{max}=270
\end{cases} }
\end{align*}
$$
# Problem 13
$$
\begin{align*}
5R+3H+\frac{1}{3}C=100\\
R+H+C=100\\
\left[\begin{array}{ccc|c}
5 & 3 & \frac{1}{3} & 100 \\
1 & 1 & 1 & 100
\end{array}\right]\\
RREF\to\left[\begin{array}{ccc|c}
1 & 0 & -\frac{4}{3} & -100 \\
0 & 1 & \frac{7}{3} & 200
\end{array}\right]\\
t=C\implies \begin{cases}
R=\frac{4}{3}t-100 \\
H=200-\frac{7}{3}t \\
C=t
\end{cases}\\
R,H,C\in\mathbb{N}\geq0\implies 75\leq t\leq 84\mod3\equiv0\\
\boxed{ \begin{array}{c|c|c}
R & H & C \\
\hline 0 & 25 & 75 \\
4 & 18 & 78 \\
8 & 11 & 81 \\
12 & 4 & 84
\end{array} }
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\left[\begin{array}{ccc|c}
1 & 0 & 0 & a \\
0 & 1 & 0 & b \\
0 & 0 & 1 & c
\end{array}\right]
\end{align*}
$$
Because if the [[rank]] must = # unknowns if there is a unique solution, so there needs to be 3 leading 1s and there can't be one in the bottom right because that would make inconsistent
# Problem 15
$$
\begin{align*}
\left[\begin{array}{ccc|c}
1 & 0 & 0 & a \\
0 & 1 & 0 & b \\
0 & 0 & 1 & c \\
0 & 0 & 0 & 0
\end{array}\right]
\end{align*}
$$

[[Rank]]=# unknowns, so 3 leading 1s and none can be in the right column (otherwise it would be inconsistent), so the last row must be 0s
# Problem 16
## a)
A [[System of Linear Equations|system]] is inconsistent if the right column (right side of = sign) has a leading 1, but it is the zero vector, so it cannot, and therefore the system must be consistent
## b)
[[Rank]] must be < # unknowns, so there must be at least 1 parameter and the [[System of Linear Equations|system]] can't be inconsistent (from [[#a)]])
## c)
$$
\begin{align*}
\mathbf{A}\vec{x}_{1}=0,\mathbf{A}\vec{x}_{2}=0\\
\implies \mathbf{A}\vec{x}_{1}+\mathbf{A}\vec{x}_{2}=0\\
\implies \mathbf{A}(\vec{x}_{1}+\vec{x}_{2})=0
\end{align*}
$$
Using distributive property
## d)
$$
\begin{align*}
\mathbf{A}\vec{x}=\vec{0}\\
\mathbf{A}(k\vec{x})=k(\mathbf{A}\vec{x})\\
=k(\vec{0})=\vec{0}\checkmark
\end{align*}
$$
# Problem 17
## a)
$$
\begin{align*}
\mathbf{A}\vec{x}_{1}=\vec{b},\mathbf{A}\vec{x}_{h}=\vec{0}\\
\mathbf{A}(\vec{x}_{1}+\vec{x}_{h})=\mathbf{A}\vec{x}_{1}+\mathbf{A}\vec{x}_{h}=\mathbf{A}\vec{x}_{1}+\vec{0}=\mathbf{A}\vec{x}_{1}=\vec{b}\checkmark
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}\vec{x}_{1}=\mathbf{A}\vec{x}_{2}=\vec{b}\\
\mathbf{A}(\vec{x}_{2}-\vec{x}_{1})=\mathbf{A}\vec{x}_{2}-\mathbf{A}\vec{x}_{1}=\vec{b}-\vec{b}=\vec{0}\checkmark
\end{align*}
$$
## c)
![[E21B Homework 1 2024-01-30 10.53.18.excalidraw]]