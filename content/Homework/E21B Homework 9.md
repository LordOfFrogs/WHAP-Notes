---
tags:
  - math/linear-algebra
due: 2024-04-06
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW9-2024.pdf)
# Problem 1
$$
\begin{align*}
\vec{x}(t)=\begin{bmatrix}
2^{t}-6^{t} \\
2^{t}+6^{t}
\end{bmatrix}\\
\vec{x}(t+1)=\mathbf{A}\vec{x}(t)\\
\implies \begin{bmatrix}
2\cdot2^{t}-6\cdot6^{t} \\
2\cdot2^{t}+6\cdot6^{t}
\end{bmatrix}=\mathbf{A}\begin{bmatrix}
2^{t}-6^{t} \\
2^{t}+6^{t}
\end{bmatrix}\\
\implies \begin{bmatrix}
2 & -6 \\
2 & 6
\end{bmatrix}\begin{bmatrix}
2^{t} \\
6^{t}
\end{bmatrix}=\mathbf{A}\begin{bmatrix}
1 & -1 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2^{t} \\
6^{t}
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
2 & -6 \\
2 & 6
\end{bmatrix}\begin{bmatrix}
1 & -1 \\
1 & 1
\end{bmatrix}^{-1}\\
=\begin{bmatrix}
2 & -6 \\
2 & 6
\end{bmatrix} \frac{1}{2}\begin{bmatrix}
1 & 1 \\
-1 & 1
\end{bmatrix}=\boxed{ \begin{bmatrix}
4 & -2 \\
-2 & 4
\end{bmatrix} }
\end{align*}
$$
# Problem 2
$$
\begin{align*}\\
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
\mathbf{A}\begin{bmatrix}
3 \\
1
\end{bmatrix}=5\begin{bmatrix}
3 \\
1
\end{bmatrix}=\begin{bmatrix}
15 \\
5
\end{bmatrix}\\
\implies 3a+b=15,\\
3c+d=5\\
\mathbf{A}\begin{bmatrix}
1 \\
2
\end{bmatrix}=10\begin{bmatrix}
1 \\
2
\end{bmatrix}=\begin{bmatrix}
10 \\
20
\end{bmatrix}\\
\implies a+2b=10\\
c+2d=20\\
\implies \left[\begin{array}{cccc|c}
3 & 1 & 0 & 0 & 15 \\
0 & 0 & 3 & 1 & 5 \\
1 & 2 & 0 & 0 & 10 \\
0 & 0 & 1 & 2 & 20
\end{array}\right]\\
RREF\to\left[\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 4 \\
0 & 1 & 0 & 0 & 3 \\
0 & 0 & 1 & 0 & -2 \\
0 & 0 & 0 & 1 & 11
\end{array}\right]\\
\implies \boxed{ \mathbf{A}=\begin{bmatrix}
4 & 3 \\
-2 & 11
\end{bmatrix} }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
3 & 3 \\
3 & 3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=0\implies \begin{vmatrix}
\lambda-3 & -3 \\
-3 & \lambda-3
\end{vmatrix}=0\\
\implies (\lambda-3)^{2}-9=\lambda^{2}-6\lambda=0\\
\implies \boxed{ \lambda_{1}=0,\lambda_{2}=6 }\\
\fbox{ Both algebraic and geometric multiplicity 1 }\\
\lambda_{1}\implies \begin{bmatrix}
3 & 3 \\
3 & 3
\end{bmatrix}\vec{v}_{1}=\vec{0}\\
\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
1 \\
-1
\end{bmatrix} }\\
\lambda_{2}\implies \begin{bmatrix}
3 & 3 \\
3 & 3
\end{bmatrix}\vec{v}_{2}=6\vec{v}_{2}\\
\implies \boxed{ \vec{v}_{2}=\begin{bmatrix}
1 \\
1
\end{bmatrix} }\\
\boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
-1
\end{bmatrix},\begin{bmatrix}
1 \\
1
\end{bmatrix} \right\} }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 4 \\
-1 & 4
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=0\implies\begin{vmatrix}
\lambda & -4 \\
1 & \lambda-4
\end{vmatrix}=0\\
\implies \lambda^{2}-4\lambda+4=0\\
\implies \boxed{ \lambda_{1}=2 }\\
\fbox{ Algebraic multiplicity 2 }\\
\begin{bmatrix}
0 & 4 \\
-1 & 4
\end{bmatrix}\vec{v}_{1}=2\vec{v}_{1}\\
\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
2 \\
1
\end{bmatrix} }\\
\fbox{ Geometric multiplicity 1 }\\
\text{Not diagonalizable}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
-1 & -1 & -1 \\
-1 & -1 & -1 \\
-1 & -1 & -1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda+1 & 1 & 1 \\
1 & \lambda+1 & 1 \\
1 & 1 & \lambda+1
\end{vmatrix}\\
=(\lambda+1)\begin{vmatrix}
\lambda+1 & 1 \\
1 & \lambda+1
\end{vmatrix}-\begin{vmatrix}
1 & 1 \\
1 & \lambda+1
\end{vmatrix}+\begin{vmatrix}
1 & \lambda+1 \\
1 & 1
\end{vmatrix}\\
=\lambda^{3}+3\lambda^{2}=0\\
\implies \boxed{ \lambda_{1}=0\text{ (alg. multiplicity 2)},\lambda_{2}=-3 \text{ (alg. multiplicity 1)} }\\
\lambda_{1}\implies \begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies v_{1}+v_{2}+v_{3}=0\\
v_{2}=t,v_{3}=s\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}t+\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}s }\\
\fbox{ Geometric multiplicity 2 }\\
\lambda_{2}\implies \begin{bmatrix}
-2 & 1 & 1 \\
1 & -2 & 1 \\
1 & 1 & -2
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \boxed{ \vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} }\\
\implies \fbox{ Geometric multiplicity 1 }\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix},\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 1 & 0 \\
0 & 2 & 2 \\
0 & 0 & 3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & -1 & 0 \\
0 & \lambda-2 & -2 \\
0 & 0 & \lambda-3
\end{vmatrix}\\
=(\lambda-1)(\lambda-2)(\lambda-3)=0\\
\implies \boxed{ \lambda_{1}=1,\lambda_{2}=2,\lambda_{3}=3 }\\
\fbox{ All algebraic multiplicity 1 }\\
\lambda_{1}\implies \begin{bmatrix}
0 & -1 & 0 \\
0 & -1 & -2 \\
0 & 0 & -2
\end{bmatrix}\vec{v}_{1}=\vec{0}\\
\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
\fbox{ Geometric multiplicity 1 }\\
\lambda_{2}\implies \begin{bmatrix}
1 & -1 & 0 \\
0 & 0 & -2 \\
0 & 0 & 1
\end{bmatrix}\vec{v}_{2}=\vec{0}\\
\implies \boxed{ \vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix} }\\
\fbox{ Geometric multiplicity 1 }\\
\lambda_{3}\implies \begin{bmatrix}
2 & -1 & 0 \\
0 & 1 & -2 \\
0 & 0 & 0
\end{bmatrix}\vec{v}_{3}=\vec{0}\\
\implies \boxed{ \vec{v}_{3}=\begin{bmatrix}
1 \\
2 \\
1
\end{bmatrix} }\\
\fbox{ Geometric multiplicity 1 }\\
\boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix},\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
1 \\
2 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 0 & 0 \\
-5 & 0 & 2 \\
0 & 0 & 1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & 0 & 0 \\
5 & \lambda & -2 \\
0 & 0 & \lambda-1
\end{vmatrix}\\\
=\lambda(\lambda-1)^{2}=0\\
\implies \boxed{ \lambda_{1}=0,\lambda_{2}=1 }\\
\fbox{ $\lambda_{1}$ algebraic multiplicity 1, $\lambda_{2}$ algebraic multiplicity 2 }\\
\lambda_{1}\implies\begin{bmatrix}
-1 & 0 & 0 \\
5 & 0 & -2 \\
0 & 0 & -1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix} }\\
\fbox{ Geometric multiplicity 1 }\\
\lambda_{2}\implies \begin{bmatrix}
0 & 0 & 0 \\
5 & 1 & -2 \\
0 & 0 & 0
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies 5v_{1}+v_{2}-2v_{3}=0\\
\implies \boxed{ \vec{v}_{2}=\begin{bmatrix}
1 \\
-5 \\
0
\end{bmatrix}t+\begin{bmatrix}
0 \\
2 \\
1
\end{bmatrix}s }\\
\fbox{ Geometric multiplicity 2 }\\
\boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
1 \\
-5 \\
0
\end{bmatrix},\begin{bmatrix}
0 \\
2 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 8
First, for an [[Eigenvalue]] $\lambda$ and corresponding [[Eigenvector]] $\vec{v}$ for [[matrix]] $\mathbf{A}$,
$$
\begin{align*}
\mathbf{A}^{n}\vec{v}=\mathbf{A}^{n-1}(\mathbf{A}\vec{v})=\mathbf{A}^{n-1}(\lambda\vec{v})\\
=\lambda(\mathbf{A}^{n-1}\vec{v})\\
\text{Repeat:}\\
=\lambda^{n}\vec{v}
\end{align*}
$$
$$
\begin{align*}
\mathbf{A}\vec{v}=\lambda\vec{v}\\
p(t)=a_{n}t^{n}+a_{n-1}t^{n-1}+\cdots+a_{1}t+a_{0}\\
p(\mathbf{A})=a_{n}\mathbf{A}^{n}+a_{n-1}\mathbf{A}^{n-1}+\cdots+a_{1}\mathbf{A}+a_{0}\mathbf{I}\\\\
p(\mathbf{A})\vec{v}=(a_{n}\mathbf{A}^{n}+a_{n-1}\mathbf{A}^{n-1}+\cdots+a_{1}\mathbf{A}+a_{0}\mathbf{I})\vec{v}\\
=a_{n}\mathbf{A}^{n}\vec{v}+a_{n-1}\mathbf{A}^{n-1}\vec{v}+\cdots+a_{1}\mathbf{A}\vec{v}+a_{0}\mathbf{I}\\
=a_{n}\lambda^{n}\vec{v}+a_{n-1}\lambda^{n-1}\vec{v}+\cdots+a_{1}\lambda\vec{v}+a_{0}\vec{v}\\
=(a_{n}\lambda^{n}+a_{n-1}\lambda^{n-1}+\cdots+a_{1}\lambda+a_{0})\vec{v}=p(\lambda)\vec{v}\\
\implies \fbox{ $\vec{v}$ is an eigenvector of \textbf{A} with eigenvalue $p(\lambda)$ }
\end{align*}
$$
# Problem 9
Characteristic polynomials come from setting the [[determinant]] equal to zero, and [[similar]] [[Matrix|matrices]] have the same [[determinant]], so the characteristic polynomials are identical

This also means that the [[Eigenvalue|eigenvalues]] and their algebraic multiplicities are the same
# Problem 10
Characteristic polynomials come from setting the [[determinant]] equal to zero, and the [[transpose]] maintains the same [[determinant]], so the characteristic polynomials are identical

This also means that the [[Eigenvalue|eigenvalues]] and their algebraic multiplicities are the same
# Problem 11
$$
\begin{align*}
h(t+1)=4h(t)-2f(t)\\
f(t+1)=h(t)+f(t)\\
\begin{bmatrix}
h(t+1) \\
f(t+1)
\end{bmatrix}=\begin{bmatrix}
4 & -2 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
h(t) \\
f(t)
\end{bmatrix}\\
\implies \begin{bmatrix}
h(t) \\
f(t)
\end{bmatrix}=\begin{bmatrix}
4 & -2 \\
1 & 1
\end{bmatrix}^{t}\begin{bmatrix}
h(0) \\
f(0)
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-4 & 2 \\
-1 & \lambda-1
\end{vmatrix}=\lambda^{2}-5\lambda+6\\
\implies \lambda_{1}=2,\lambda_{2}=3\\
\lambda_{1}\implies\begin{bmatrix}
-2 & 2 \\
-1 & 1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\lambda_{2}\implies \begin{bmatrix}
-1 & 2 \\
-1 & 2
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\begin{bmatrix}
2 \\
1
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}\implies \mathbf{S}^{-1}=\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}\\
\implies\begin{bmatrix}
h(t) \\
f(t)
\end{bmatrix}=\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2^{t} & 0 \\
0 & 3^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}\begin{bmatrix}
h(0) \\
f(0)
\end{bmatrix}\\
=\begin{bmatrix}
2^{t} & 2\cdot3^{t} \\
2^{t} & 3^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}\begin{bmatrix}
h(0) \\
f(0)
\end{bmatrix}\\
=\begin{bmatrix}
2\cdot3^{t}-2^{t} & 2\cdot2^{t}-2\cdot3^{t} \\
3^{t}-2^{t} & 2\cdot2^{t}-3^{t}
\end{bmatrix}\begin{bmatrix}
h(0) \\
f(0)
\end{bmatrix}
\end{align*}
$$
## a)
$$
\begin{align*}
h(0)=f(0)=100\\
\begin{bmatrix}
h(t) \\
f(t)
\end{bmatrix}=\begin{bmatrix}
200\cdot3^{t}-100\cdot2^{t}+200\cdot2^{t}-200\cdot3^{t} \\
100\cdot3^{t}-100\cdot2^{t}+200\cdot2^{t}-100\cdot3^{t}
\end{bmatrix}\\
\implies \boxed{ h(t)=100\cdot2^{t} },\\
\boxed{ f(t)=100\cdot2^{t} }
\end{align*}
$$
## b)
$$
\begin{align*}
h(0)=200,f(0)=100\\
\implies \begin{bmatrix}
h(t) \\
f(t)
\end{bmatrix}=\begin{bmatrix}
400\cdot3^{t}-200\cdot2^{t}+200\cdot2^{t}-200\cdot3^{t} \\
200\cdot3^{t}-200\cdot2^{t}+200\cdot2^{t}-100\cdot3^{t}
\end{bmatrix}\\
\implies \boxed{ h(t)=200\cdot3^{t} },\\
\boxed{ f(t)=100\cdot3^{t} }
\end{align*}
$$
## c)
$$
\begin{align*}
h(0)=600,f(0)=500\\
\implies \begin{bmatrix}
h(t) \\
f(t)
\end{bmatrix}=\begin{bmatrix}
1200\cdot3^{t}-600\cdot2^{t}+1000\cdot2^{t}-1000\cdot3^{t} \\
600\cdot3^{t}-600\cdot2^{t}+1000\cdot2^{t}-500\cdot3^{t}
\end{bmatrix}\\
\implies \boxed{ h(t)=400\cdot2^{t}+200\cdot3^{t} },\\
\boxed{ f(t)=100\cdot3^{t}+400\cdot2^{t} }
\end{align*}
$$
# Problem 12
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
\begin{vmatrix}
\lambda-a & -b \\
-c & \lambda-d
\end{vmatrix}=0\\
\implies \lambda^{2}-(a+d)\lambda+ad-cd=0\\
\implies \lambda_{1}=\frac{a+d+\sqrt{(a+d)^{2}-4(ad-cd)}}{2},\\
\lambda_{2}=\frac{a+d-\sqrt{(a+d)^{2}-4(ad-cd)}}{2}\\
\implies \boxed{ \lambda_{1}+\lambda_{2}=a+d=\mathrm{tr}\mathbf{A}\checkmark }
\end{align*}
$$
# Problem 13
$$
\det\mathbf{A}=\sum_{\sigma\in P(n)}\text{sgn}(\sigma)a_{1\sigma(1)}\cdots a_{2\sigma(2)}
$$
For $\det(\mathbf{I}\lambda-\mathbf{A})$, the only permutation that would give $\lambda^{n-1}$ in the product must include $n-1$ diagonal elements
But if the permutation maps $n-1$ elements onto themselves, then the last element must also map onto itself
So, the permutation must map all elements onto themselves, giving all diagonal elements
Therefore, the coefficient of $\lambda^{n-1}$ must come from
$$
(\lambda-a_{11})(\lambda-a_{22})\cdots(\lambda-a_{nn})
$$
Expanding to get each $\lambda^{n-1}$ term shows that each must have a coefficient of the negative of some diagonal element. Summing them together gives
$$
(-a_{11}-a_{22}-\cdots-a_{nn})\lambda^{n-1}=-(\text{tr}\,\mathbf{A})\lambda^{n-1}
$$
Also, this gives that the leading coefficient (of $\lambda^{n}$) of the characteristic polynomial must be 1

By [Vieta's formula](https://en.wikipedia.org/wiki/Vieta%27s_formulas),
$$
\lambda_{1}+\cdots+\lambda_{n}=-\frac{c_{n-1}}{c_{n}}
$$
For
$$
p(\lambda)=c_{n}\lambda^{n}+c_{n-1}\lambda^{n-1}+\cdots+c_{1}\lambda+c_{0}
$$
So,
$$
\begin{align*}
\lambda_{1}+\cdots+\lambda_{n}=-\frac{-\text{tr}\,\mathbf{A}}{1}=\text{tr}\,\mathbf{A}
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix},a+c=b+d=1,a,b,c,d>0\\
\implies 0<a,b,c,d<1\\
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\begin{bmatrix}
b \\
c
\end{bmatrix}\overset{?}{=}\lambda_{1}\begin{bmatrix}
b \\
c
\end{bmatrix}\\
\Longleftrightarrow \begin{bmatrix}
ab+bc \\
bc+cd
\end{bmatrix}=\begin{bmatrix}
(a+c)b \\
(b+d)c
\end{bmatrix}=\begin{bmatrix}
b \\
c
\end{bmatrix}\checkmark\\
\boxed{ \lambda_{1}=1 }\\
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\begin{bmatrix}
1 \\
-1
\end{bmatrix}=\lambda_{2}\begin{bmatrix}
1 \\
-1
\end{bmatrix}\\
\Longleftrightarrow \begin{bmatrix}
a-b \\
c-d
\end{bmatrix}=\begin{bmatrix}
d-c \\
c-d
\end{bmatrix}\overset{?}{=}(d-c)\begin{bmatrix}
1 \\
-1
\end{bmatrix}\checkmark\\
\boxed{ \lambda_{2}=d-c }\\
0<d,c<1\implies -1<d-c<1\implies \boxed{ |\lambda_{2}|<1 }
\end{align*}
$$
![[E21B Homework 9 2024-04-03 10.11.50.excalidraw]]
# Problem 15
## a)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0.5 & 0.25 \\
0.5 & 0.75
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-0.5 & -0.25 \\
-0.5 & \lambda-0.75
\end{vmatrix}\\
=\lambda^{2}-1.25\lambda+0.25=0\\
\implies 4\lambda^{2}-5\lambda+1=0\\
\implies \boxed{ \lambda_{1}=1,\lambda_{2}=\frac{1}{4} }\\
\lambda_{1}:\begin{bmatrix}
0.5 & -0.25 \\
-0.5 & 0.25
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
1 \\
2
\end{bmatrix} }\\
\lambda_{2}:\begin{bmatrix}
-0.25 & -0.25 \\
-0.5 & -0.5
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies\boxed{ \vec{v}_{2}=\begin{bmatrix}
1 \\
-1
\end{bmatrix} }
\end{align*}
$$
## b)
![[E21B Homework 9 2024-04-03 13.56.19.excalidraw]]
## c)
$$
\begin{align*}
\vec{x}(t+1)=\begin{bmatrix}
0.5 & 0.25 \\
0.5 & 0.75
\end{bmatrix}\vec{x}(t)\\
\vec{x}_{0}=\vec{e}_{1}\\
\vec{x}(t)=\begin{bmatrix}
0.5 & 0.25 \\
0.5 & 0.75
\end{bmatrix}^{t}\vec{x}_{0}\\
=\begin{bmatrix}
1 & 1 \\
2 & -1
\end{bmatrix}\begin{bmatrix}
1^{t} & 0 \\
0 & \left( \frac{1}{4} \right)^{t}
\end{bmatrix}\left( -\frac{1}{3} \right)\begin{bmatrix}
-1 & -1 \\
-2 & 1
\end{bmatrix}\vec{x}_{0}\\
=-\frac{1}{3}\begin{bmatrix}
1 & 4^{-t} \\
2 & -4^{-t}
\end{bmatrix}\begin{bmatrix}
-1 & -1 \\
-2 & 1
\end{bmatrix}\vec{x}_{0}\\
=\begin{bmatrix}
\frac{1}{3}+\frac{2}{3}\cdot4^{-t} & \frac{1}{3}-\frac{1}{3}\cdot4^{-t} \\
\frac{2}{3}-\frac{2}{3}\cdot4^{-t} & \frac{2}{3}+\frac{1}{3}\cdot4^{-t}
\end{bmatrix}\begin{bmatrix}
1 \\
0
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
\frac{1}{3}+\frac{2}{3}\cdot4^{-t} \\
\frac{2}{3}-\frac{2}{3}\cdot4^{-t}
\end{bmatrix} }\\\\
\vec{x}_{0}=\vec{e}_{2}\\
\implies \vec{x}(t)=\begin{bmatrix}
\frac{1}{3}+\frac{2}{3}\cdot4^{-t} & \frac{1}{3}-\frac{1}{3}\cdot4^{-t} \\
\frac{2}{3}-\frac{2}{3}\cdot4^{-t} & \frac{2}{3}+\frac{1}{3}\cdot4^{-t}
\end{bmatrix}\begin{bmatrix}
0 \\
1
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
\frac{1}{3}-\frac{1}{3}\cdot4^{-t} \\
\frac{2}{3}+\frac{1}{3}\cdot4^{-t}
\end{bmatrix} }
\end{align*}
$$
## d)
$$
\begin{align*}
\mathbf{A}^{2}=\begin{bmatrix}
0.375 & 0.3125 \\
0.625 & 0.6875
\end{bmatrix}\\
\mathbf{A}^{5}=\begin{bmatrix}
0.333984 & 0.333008 \\
0.666016 & 0.666992
\end{bmatrix}\\
\mathbf{A}^{10}=\begin{bmatrix}
0.333334 & 0.333333 \\
0.666666 & 0.666667
\end{bmatrix}
\end{align*}
$$
As $t$ increases, $\mathbf{A}^{t}$ approaches
$$
\begin{bmatrix}
\frac{1}{3} & \frac{1}{3} \\
\frac{2}{3} & \frac{2}{3}
\end{bmatrix}
$$
And both columns become more similar, meaning that all vectors get mapped onto this vector
$$
\begin{bmatrix}
\frac{1}{3} \\
\frac{2}{3}
\end{bmatrix}
$$
So, as $t$ increases, $\mathbf{A}^{t}\vec{v}$ moves closer and closer to the span of $\begin{bmatrix} \frac{1}{3} \\ \frac{2}{3 }\end{bmatrix}$ (which is also the span of $\begin{bmatrix} 1 \\ 2 \end{bmatrix}=\vec{v}_{1}$)
## e)
For an arbitrary regular transition matrix $\mathbf{A}$,
$$
\lim_{ t \to \infty } \mathbf{A}^{t}=\begin{bmatrix}
b & b \\
c & c
\end{bmatrix}
$$
# Problem 16
## a)
$$
\begin{align*}
B(0)=2000,M(0)=0\\
\vec{x}(t+1)=\begin{bmatrix}
0.5B(t)+0.3M(t) \\
0.5B(t)+0.7M(t)
\end{bmatrix}\\
=\begin{bmatrix}
0.5 & 0.3 \\
0.5 & 0.7
\end{bmatrix}\vec{x}(t)\\
\implies \boxed{ \mathbf{A}=\begin{bmatrix}
0.5 & 0.3 \\
0.5 & 0.7
\end{bmatrix} }\\
0.5+0.5=1\checkmark\\
0.3+0.7=1\checkmark
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}^{t}=\begin{bmatrix}
0.3 & 1 \\
0.5 & -1
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & 0.2^{t}
\end{bmatrix}\left( -\frac{1}{0.8} \right)\begin{bmatrix}
-1 & -1 \\
-0.5 & 0.3
\end{bmatrix}\\
=-1.25\begin{bmatrix}
0.3 & 0.2^{t} \\
0.5 & -0.2^{t}
\end{bmatrix}\begin{bmatrix}
-1 & -1 \\
-0.5 & 0.3
\end{bmatrix}=\begin{bmatrix}
0.375+0.625\cdot0.2^{t} & 0.375-0.375\cdot0.2^{t} \\
0.625-0.625\cdot0.2^{t} & 0.625+0.375\cdot0.2^{t}
\end{bmatrix}\\
\vec{x}(t)=\mathbf{A}^{t}\vec{x}_{0}=\begin{bmatrix}
0.375+0.625\cdot0.2^{t} & 0.375-0.375\cdot0.2^{t} \\
0.625-0.625\cdot0.2^{t} & 0.625+0.375\cdot0.2^{t}
\end{bmatrix}\begin{bmatrix}
2000 \\
0
\end{bmatrix}\\
=\begin{bmatrix}
750+1250\cdot0.2^{t} \\
1250-1250\cdot0.2^{t}
\end{bmatrix}\\
\implies \boxed{ B(t)=750+1250\cdot0.2^{t},M(t)=1250-1250\cdot0.2^{t} }
\end{align*}
$$
## c)
$$
\begin{align*}
B(t)=750+1250\cdot0.2^{t}<700\\
\implies-\frac{50}{1250}=0.2^{t}
\end{align*}
$$
This does not happen