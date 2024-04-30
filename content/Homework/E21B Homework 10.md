---
tags:
  - math/linear-algebra
due: 2024-04-13
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW10-2024.pdf)
# Problem 1
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix},\mathbf{B}=\begin{bmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33}
\end{bmatrix}\\
\mathrm{tr}\,\mathbf{AB}=\mathrm{tr}\,\begin{bmatrix}
a_{11}b_{11}+a_{12}b_{21}+a_{13}b_{31} & a_{11}b_{12}+a_{12}b_{22}+a_{13}b_{32} & a_{11}b_{13}+a_{12}b_{23}+a_{13}b_{33} \\
a_{21}b_{11}+a_{22}b_{21}+a_{23}b_{31} & a_{21}b_{12}+a_{22}b_{22}+a_{23}b_{32} & a_{21}b_{13}+a_{22}b_{23}+a_{23}b_{33} \\
a_{31}b_{11}+a_{32}b_{21}+a_{33}b_{31} & a_{31}b_{12}+a_{32}b_{22}+a_{33}b_{32} & a_{31}b_{13}+a_{32}b_{23}+a_{33}b_{33}
\end{bmatrix}\\
=a_{11}b_{11}+a_{12}b_{21}+a_{13}b_{31}+a_{21}b_{12}+a_{22}b_{22}+a_{23}b_{32}+a_{31}b_{13}+a_{32}b_{23}+a_{33}b_{33}\\
\mathrm{tr}\,\mathbf{BA}=\mathrm{tr}\,\begin{bmatrix}
b_{11}a_{11}+b_{12}a_{21}+b_{13}a_{31} & b_{11}a_{12}+b_{12}a_{22}+b_{13}a_{32} & b_{11}a_{13}+b_{12}a_{23}+b_{13}a_{33} \\
b_{21}a_{11}+b_{22}a_{21}+b_{23}a_{31} & b_{21}a_{12}+b_{22}a_{22}+b_{23}a_{32} & b_{21}a_{13}+b_{22}a_{23}+b_{23}a_{33} \\
b_{31}a_{11}+b_{32}a_{21}+b_{33}a_{31} & b_{31}a_{12}+b_{32}a_{22}+b_{33}a_{32} & b_{31}a_{13}+b_{32}a_{23}+b_{33}a_{33}
\end{bmatrix}\\
=b_{11}a_{11}+b_{12}a_{21}+b_{13}a_{31}+b_{21}a_{12}+b_{22}a_{22}+b_{23}a_{32}+b_{31}a_{13}+b_{32}a_{23}+b_{33}a_{33}\\
=a_{11}b_{11}+a_{12}b_{21}+a_{13}b_{31}+a_{21}b_{12}+a_{22}b_{22}+a_{23}b_{32}+a_{31}b_{13}+a_{32}b_{23}+a_{33}b_{33}\\
\implies \boxed{ \mathrm{tr}\,\mathbf{AB}=\mathrm{tr}\,\mathbf{BA} }
\end{align*}
$$
Which generalizes to [[Rn]] because the indices of both [[Trace|traces]] hit all terms $a_{ij}b_{ji}$ for  all $1\leq i,j\leq n$
This happens because the $i$th element of $\mathrm{tr}\,\mathbf{AB}$, $a_{i1}b_{1i}+a_{i2}b_{2i}+\cdots+a_{in}b_{ni}$, one simply must sum the $i$th terms of each element in $\mathrm{tr}\,\mathbf{BA}$:
$$
\begin{align*}
b_{11}a_{11}+\cdots+\boxed{ b_{1i}a_{i1} }+\cdots+b_{1n}a_{n1}\\
b_{21}a_{12}+\cdots+\boxed{ b_{2i}a_{i2} }+\cdots+b_{2n}a_{n2}\\
\vdots\\
b_{n1}a_{1n}+\cdots+\boxed{ b_{ni}a_{in} }+\cdots+b_{nn}a_{nn}
\end{align*}
$$
Which can then be repeated for all $1\leq i\leq n$
# Problem 2
$$
\begin{align*}
\mathbf{A},\mathbf{B}\text{ are similar}\implies\mathbf{A}=\mathbf{SB}\mathbf{S}^{-1}\\
\implies \mathrm{tr}\,\mathbf{A}=\mathrm{tr}\,\mathbf{SBS}^{-1}\\
=\mathrm{tr}\,[\mathbf{S}(\mathbf{BS}^{-1})]=\mathrm{tr}\,[(\mathbf{BS}^{-1})\mathbf{S}]=\mathrm{tr}\,[\mathbf{B}(\mathbf{S}^{-1}\mathbf{S})]\\
=\mathrm{tr}\,\mathbf{BI}=\mathrm{tr}\,\mathbf{B}\checkmark
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\mathbf{A}\vec{v}=\lambda\vec{v},\mathbf{A}^{\text{T}}\vec{v}=\lambda\vec{v}\\
\text{Geometric multiplicity}=\dim(\ker(\mathbf{I}\lambda-\mathbf{A})),\dim(\ker(\mathbf{I}\lambda-\mathbf{A}^{\text{T}}))\\
\dim(\ker(\mathbf{I}\lambda-\mathbf{A}))=\dim[(\mathrm{im}(\mathbf{I}\lambda-\mathbf{A})^{\text{T}})^{\perp}]\\
=\dim[(\mathrm{im}(\mathbf{I}\lambda-\mathbf{A}^{\text{T}}))^{\perp}]\\
=n-(n-\dim(\ker(\mathbf{I}\lambda-\mathbf{A}^{\text{T}})))=\dim(\ker(\mathbf{I}\lambda-\mathbf{A}^{\text{T}}))\\
\implies \fbox{ Same geometric multiplicities }
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
\vec{x}\in\ker\mathbf{B}\implies \mathbf{B}\vec{x}=\vec{0}\\
\implies \mathbf{S}^{-1}\mathbf{A}\mathbf{S}\vec{x}=\vec{0}\\
\implies \mathbf{S}\vec{x}\in\ker(\mathbf{S}^{-1}\mathbf{A})\\
\mathbf{S}^{-1}\text{ is invertible}\implies \ker(\mathbf{S}^{-1})=\{ \vec{0} \}\implies\ker(\mathbf{S}^{-1}\mathbf{A})=\ker(\mathbf{A})\\
\implies \boxed{ \mathbf{S}\vec{x}\in\ker\mathbf{A} }
\end{align*}
$$
## b)
$\mathbf{S}$ is invertible, so for every [[vector]] $\vec{y}\in$ [[Rn]], $\exists \vec{x}=\mathbf{S}^{-1}\vec{y}:T(\vec{x})=\vec{y}$ 
Therefore, $T(\vec{x})=\mathbf{S}\vec{x}$ is an [[isomorphism]]
## c)
Because $\ker\mathbf{B}\overset{T}{\to}\ker\mathbf{A}$ and $T$ is [[Isomorphism|isomorphic]], $\dim(\ker\mathbf{B})=\dim(\ker\mathbf{A})$ which means the [[Nullity|nullities]] are equal
Then, by the [[Rank-Nullity Theorem]] and because $\mathbf{A}$ and $\mathbf{B}$ share a domain, the [[Rank|ranks]] must also be equal
# Problem 5
They are not [[similar]] because, from [[#Problem 2]], if two [[Matrix|matrices]] are [[similar]], their [[Trace|traces]] are the same, and 
$$
\mathrm{tr}\,\begin{bmatrix}
0 & 1 \\
5 & 3
\end{bmatrix}=3\neq\mathrm{tr}\,\begin{bmatrix}
1 & 2 \\
4 & 3
\end{bmatrix}=1+3=4
$$
So by the contrapositive, they are not [[similar]]
# Problem 6
$$
\begin{align*}
\det\begin{bmatrix}
\lambda+1 & -6 \\
2 & \lambda-6
\end{bmatrix}=\lambda^{2}-5\lambda+6=0\\
\implies \lambda_{1}=2,\lambda_{2}=3\\
\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
1
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
3 \\
2
\end{bmatrix}\\
\implies \begin{bmatrix}
-1 & 6 \\
-2 & 6
\end{bmatrix}=\begin{bmatrix}
2 & 3 \\
1 & 2
\end{bmatrix}\begin{bmatrix}
2 & 0 \\
0 & 3
\end{bmatrix}\begin{bmatrix}
2 & -3 \\
-1 & 2
\end{bmatrix}\\
\det\begin{bmatrix}
\lambda-1 & -2 \\
1 & \lambda-4
\end{bmatrix}=\lambda^{2}-5\lambda+6=0\\
\implies \lambda_{1}=2,\lambda_{2}=3\\
\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
1
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\implies \begin{bmatrix}
1 & 2 \\
-1 & 4
\end{bmatrix}=\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2 & 0 \\
0 & 3
\end{bmatrix}\begin{bmatrix}
1 & -1 \\
-1 & 2
\end{bmatrix}\\
\text{Both matrices are similar to }\begin{bmatrix}
2 & 0 \\
0 & 3
\end{bmatrix}\implies\boxed{ \text{they are similar} }
\end{align*}
$$
# Problem 7
No, for example:
$$
\begin{align*}
\mathrm{tr}\,\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}=2=\mathrm{tr}\,\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix},\\
\det\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}=1=\det\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\end{align*}
$$
But, the identity [[matrix]] is the same in every [[basis]], which would contradict it being similar to the first [[matrix]]
Therefore, the [[Matrix|matrices]] are not [[similar]] even though they have the same [[trace]] and [[determinant]]
# Problem 8
$$
\vec{x}(t+1)=\begin{bmatrix}
0.7 & 0 & 0 \\
0.1 & 0.6 & 0 \\
0 & 0.2 & 0.8
\end{bmatrix}\vec{x}(t)
$$
## a)
Each week, 70% of the pollutant stays in Lake Sils, 10% of the pollutant from Lake Sils goes to Lake Silvaplana, 60% of the pollutant in Silvaplana stays, 20% of it goes to Lake St. Moritz, and 80% of the pollultant in St. Moritz stays
## b)
$$
\begin{align*}
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-0.7 & 0 & 0 \\
-0.1 & \lambda-0.6 & 0 \\
0 & -0.2 & \lambda-0.8
\end{vmatrix}\\
=(\lambda-0.7)\begin{vmatrix}
\lambda-0.6 & 0 \\
-0.2 & \lambda-0.8
\end{vmatrix}=(\lambda-0.7)(\lambda-0.6)(\lambda-0.8)\\
\implies \lambda_{1}=0.6,\lambda_{2}=0.7,\lambda_{3}=0.8\\
\lambda_{1}\implies \begin{bmatrix}
-0.1 & 0 & 0 \\
-0.1 & 0 & 0 \\
0 & -0.2 & -0.2
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
0 \\
1 \\
-1
\end{bmatrix}\\
\lambda_{2}\implies \begin{bmatrix}
0 & 0 & 0 \\
-0.1 & 0.1 & 0 \\
0 & -0.2 & -0.1
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
-2
\end{bmatrix}\\
\lambda_{3}\implies \begin{bmatrix}
0.1 & 0 & 0 \\
-0.1 & 0.2 & 0 \\
0 & -0.2 & 0
\end{bmatrix}\vec{v}_{3}=\vec{0}\implies \vec{v}_{3}=\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
0 & 1 & 0 \\
1 & 1 & 0 \\
-1 & -2 & 1
\end{bmatrix}\implies \mathbf{S}^{-1}=\begin{bmatrix}
-1 & 1 & 0 \\
1 & 0 & 0 \\
1 & 1 & 1
\end{bmatrix}\\
\implies \vec{x}(t)=\mathbf{A}^{t}\vec{x}_{0}=\mathbf{SD}^{t}\mathbf{S}^{-1}\vec{x}_{0}=\begin{bmatrix}
0 & 1 & 0 \\
1 & 1 & 0 \\
-1 & -2 & 1
\end{bmatrix}\begin{bmatrix}
0.6^{t} & 0 & 0 \\
0 & 0.7^{t} & 0 \\
0 & 0 & 0.8^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 1 & 0 \\
1 & 0 & 0 \\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
100 \\
0 \\
0
\end{bmatrix}\\
=\begin{bmatrix}
0 & 0.7^{t} & 0 \\
0.6^{t} & 0.7^{t} & 0 \\
-0.6^{t} & -2\cdot0.7^{t} & 0.8^{t}
\end{bmatrix}\begin{bmatrix}
-100 \\
100 \\
100
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
100\cdot0.7^{t} \\
100\cdot0.7^{t}-100\cdot0.6^{t} \\
100\cdot0.6^{t}+100\cdot0.8^{t}-200\cdot0.7^{t}
\end{bmatrix} }
\end{align*}
$$
![[E21B Homework 10 2024-04-11 10.29.50.excalidraw|400]]
$$
\begin{align*}
\frac{d}{dt}(100\cdot0.7^{t}-100\cdot0.6^{t})=0\\
\implies 100\ln0.7 \cdot0.7^{t}-100\ln0.6\cdot0.6^{t}=0\\
\implies \ln0.7\cdot0.7^{t}=\ln0.6\cdot0.6^{t}\\
\implies \log_{0.7}\ln0.7 +t=\log_{0.7}\ln0.6+\log_{0.7}0.6^{t}\\
=\log_{0.7}\ln0.6 + \frac{t}{\log_{0.6}0.7}\\
\implies t\left( 1-\frac{1}{\log_{0.6}0.7} \right)=\log_{0.7}\ln0.6-\log_{0.7}\ln0.7\\
=\log_{0.7}\left( \frac{\ln0.6}{\ln0.7} \right)=\log_{0.7}\log_{0.7}0.6\\
\implies t=\frac{\log_{0.7}\log_{0.7}0.6}{1-\frac{1}{\log_{0.6}0.7}}=\boxed{ 2.33021\text{ weeks} }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
2 & 0 & 1 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-2 & 0 & -1 \\
0 & \lambda-1 & 0 \\
0 & 0 & \lambda-1
\end{vmatrix}\\
=(\lambda-2)(\lambda-1)^{2}=0\\
\implies \lambda_{1}=1,\lambda_{2}=2\\
\lambda_{1}\implies\begin{bmatrix}
-1 & 0 & -1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix}t+\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}s\\
\lambda_{2}\implies \begin{bmatrix}
0 & 0 & -1 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
\implies \boxed{ \mathbf{D}=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 2
\end{bmatrix} },\\
\boxed{ \mathbf{S}=\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{bmatrix} }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}\\
\implies \det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & 0 & -1 \\
0 & \lambda-1 & 0 \\
-1 & 0 & \lambda-1
\end{vmatrix}\\
=(\lambda-1)\begin{vmatrix}
\lambda-1 & 0 \\
0 & \lambda-1
\end{vmatrix}-\begin{vmatrix}
0 & \lambda-1 \\
-1 & 0
\end{vmatrix}\\
=\lambda^{3}-3\lambda^{2}+3\lambda-1-\lambda+1\\
=\lambda^{3}-3\lambda^{2}+2\lambda=\lambda(\lambda-1)(\lambda-2)=0\\
\implies \lambda_{1}=0,\lambda_{2}=1,\lambda_{3}=2\\
\lambda_{1}\implies \begin{bmatrix}
-1 & 0 & -1 \\
0 & -1 & 0 \\
-1 & 0 & -1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix}\\
\lambda_{2}\implies \begin{bmatrix}
0 & 0 & -1 \\
0 & 0 & 0 \\
-1 & 0 & 0
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\\
\lambda_{3}\implies \begin{bmatrix}
1 & 0 & -1 \\
0 & 1 & 0 \\
-1 & 0 & 1
\end{bmatrix}\vec{v}_{3}=\vec{0}\implies \vec{v}_{3}=\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}\\
\implies \boxed{ \mathbf{S}=\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
-1 & 0 & 1
\end{bmatrix} }\\
\boxed{ \mathbf{D}=\begin{bmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 2
\end{bmatrix} }
\end{align*}
$$
# Problem 11
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 0 \\
0 & 1 & 0
\end{bmatrix}\\
\implies \det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & -1 & -1 \\
0 & \lambda-1 & 0 \\
0 & -1 & \lambda
\end{vmatrix}\\
=\lambda(\lambda-1)^{2}=0\\
\implies \lambda_{1}=0,\lambda_{2}=1\\
\lambda_{1}\implies \begin{bmatrix}
-1 & -1 & -1 \\
0 & -1 & 0 \\
0 & -1 & 0
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix}\\
\lambda_{2}\implies\begin{bmatrix}
0 & -1 & -1 \\
0 & 0 & 0 \\
0 & -1 & 1
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
\text{Not enough to form an eigenbasis}\implies\boxed{ \text{Not diagonalizable} }
\end{align*}
$$
# Problem 12
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
4 & -2 \\
1 & 1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-4 & 2 \\
-1 & \lambda-1
\end{vmatrix}=(\lambda-4)(\lambda-1)+2\\
=\lambda^{2}-5\lambda+6=(\lambda-2)(\lambda-3)=0\\
\implies \lambda_{1}=2,\lambda_{2}=3\\
\lambda_{1}\implies\begin{bmatrix}
-2 & 2 \\
-1 & 1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies\vec{v}_{1}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\lambda_{2}\implies\begin{bmatrix}
-1 & 2 \\
-1 & 2
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies\vec{v}_{2}=\begin{bmatrix}
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
\mathbf{D}=\begin{bmatrix}
2 & 0 \\
0 & 3
\end{bmatrix}\\
\implies \mathbf{A}^{t}=\mathbf{SD}^{t}\mathbf{S}^{-1}=\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2^{t} & 0 \\
0 & 3^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}\\
=\begin{bmatrix}
2^{t} & 2\cdot3^{t} \\
2^{t} & 3^{t}
\end{bmatrix}\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}=\boxed{ \begin{bmatrix}
2\cdot3^{t}-2^{t} & 2\cdot2^{t}-2\cdot3^{t} \\
3^{t}-2^{t} & 2\cdot2^{t}-3^{t}
\end{bmatrix} }\\
\implies\mathbf{A}^{t}\begin{bmatrix}
1 \\
2
\end{bmatrix}=\begin{bmatrix}
2\cdot3^{t}-2^{t} & 2\cdot2^{t}-2\cdot3^{t} \\
3^{t}-2^{t} & 2\cdot2^{t}-3^{t}
\end{bmatrix}\begin{bmatrix}
1 \\
2
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
3\cdot2^{t}-2\cdot3^{t} \\
3\cdot2^{t}-3^{t}
\end{bmatrix} }
\end{align*}
$$
# Problem 13
$$
\begin{align*}
[T(f)](x)=f(2x),P_{2}\to P_{2}\\
\mathcal{B}=\{ 1,x,x^{2} \}\\
T(1)=1,T(x)=2x,T(x^{2})=4x^{2}\\
\implies T(f)=\mathbf{A}f=\begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 4
\end{bmatrix}f\\
\text{Already diagonal!}\\
\boxed{ \lambda_{1}=1,\lambda_{2}=2,\lambda_{3}=4 }\\
\boxed{ \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}=1,\vec{v}_{2}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}=x,\vec{v}_{3}=\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}=x^{2} }
\end{align*}
$$
# Problem 14
$$
\begin{align*}
[T(f)](x)=f(x-3)\\
\mathcal{B}=\{ 1,x,x^{2} \}\\
T(1)=1,T(x)=x-3,T(x^{2})=9-6x+x^{2}\\
\implies T(f)=\mathbf{A}f=\begin{bmatrix}
1 & -3 & 9 \\
0 & 1 & -6 \\
0 & 0 & 1
\end{bmatrix}f\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & 3 & -9 \\
0 & \lambda-1 & 6 \\
0 & 0 & \lambda-1
\end{vmatrix}=(\lambda-1)^{3}=0\\
\implies \boxed{ \lambda_{1}=1 }\\
\implies \begin{bmatrix}
0 & 3 & -9 \\
0 & 0 & 6 \\
0 & 0 & 0
\end{bmatrix}\vec{v}=\vec{0}\implies \boxed{ \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}=1 }\\
\implies \boxed{ \text{Not diagonalizable} }
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
3 & -5 \\
2 & -3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-3 & 5 \\
-2 & \lambda+3
\end{vmatrix}\\
=(\lambda-3)(\lambda+3)+10=\lambda^{2}+1=0\\
\implies \boxed{ \lambda=i,\bar{\lambda}=-i }
\end{align*}
$$
# Problem 16
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
5 & -7 & 3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda & -1 & 0 \\
0 & \lambda & -1 \\
-5 & 7 & \lambda-3
\end{vmatrix}\\
=\lambda\begin{vmatrix}
\lambda & -1 \\
7 & \lambda-3
\end{vmatrix}+\begin{vmatrix}
0 & -1 \\
-5 & \lambda-3
\end{vmatrix}=\lambda^{2}(\lambda-3)+7\lambda-5\\
=\lambda^{3}-3\lambda^{2}+7\lambda-5=0\\
\begin{array}{c|cccc}
1 & 1 & -3 & 7 & -5 \\
 &  & 1 & -2 & 5 \\
\hline & 1 & -2 & 5 & 0
\end{array}\\
=(\lambda-1)(\lambda^{2}-2\lambda+5)\\
\implies \boxed{ \mu=1,\lambda=1+2i,\bar{\lambda}=1-2i }
\end{align*}
$$
# Problem 17
$$
\begin{align*}\\
3\times3\ \mathbf{A},\quad\mu=2,\lambda=a+bi,\bar{\lambda}=a-bi\\
\det\mathbf{A}=50=2\lambda\bar{\lambda}=2(a+bi)(a-bi)=2(a^{2}+b^{2})\\
\implies a^{2}+b^{2}=25,\\
\mathrm{tr}\,\mathbf{A}=8=2+\lambda+\bar{\lambda}=2+a+bi+a-bi=2+2a\\
\implies a+1=4\implies a=3\implies b=4\\
\implies \boxed{ \lambda=3+4i,\bar{\lambda}=3-4i }
\end{align*}
$$
# Problem 18
## a)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{nn}
\end{bmatrix},\vec{x}=\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}\\
a_{1k}+\cdots+a_{nk}=1,x_{1}+\cdots+x_{n}=1\\
\mathbf{A}\vec{x}=(a_{11}x_{1}+\cdots+a_{1n}x_{n})+\cdots+(a_{n1}x_{1}+\cdots+a_{nn}x_{n})\\
=x_{1}(\underbrace{a_{11}+\cdots+a_{n1}}_{1})+\cdots+x_{n}(\underbrace{a_{1n}+\cdots+a_{nn}}_{1})\\
=x_{1}+\cdots+x_{n}=1\checkmark
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0.4 & 0.3 & 0.1 \\
0.5 & 0.1 & 0.2 \\
0.1 & 0.6 & 0.7
\end{bmatrix}\\
\mathbf{A}^{2}=\begin{bmatrix}
0.32 & 0.21 & 0.17 \\
0.27 & 0.28 & 0.21 \\
0.41 & 0.51 & 0.62
\end{bmatrix},\\
\mathbf{A}^{10}=\begin{bmatrix}
0.211356 & 0.211278 & 0.211229 \\
0.239488 & 0.239443 & 0.2339414 \\
0.549156 & 0.549279 & 0.549357
\end{bmatrix},\\
\mathbf{A}^{100}=\begin{bmatrix}
0.211268 & 0.211268 & 0.211268 \\
0.239437 & 0.239437 & 0.2339437 \\
0.549296 & 0.549296 & 0.549296
\end{bmatrix}
\end{align*}
$$
All powers of the [[matrix]] are also a regular transition [[matrix]]
Which makes sense because the result from a)
It also approaches one with all columns equal
This makes sense because for the [[Diagonalization|diagonalized]] [[matrix]]
$$
\mathbf{D}=\begin{bmatrix}
1 & 0 & 0 \\
0 & \lambda & 0 \\
0 & 0 & \bar{\lambda}
\end{bmatrix},\mathbf{D}^{t}=\begin{bmatrix}
1 & 0 & 0 \\
0 & \lambda^{t} & 0 \\
0 & 0 & \bar{\lambda}^{t}
\end{bmatrix}
$$
And because $|\lambda|<1$, as $t\to\infty$, $\lambda$ and $\bar{\lambda}$ will disappear, leaving a [[matrix]] that maps all [[Vector|vectors]] onto one
# Problem 19
## a)
$$
\begin{align*}
\vec{x}(t)=\begin{bmatrix}
a(t) \\
m(t) \\
s(t)
\end{bmatrix}\\
\mathbf{A}=\begin{bmatrix}
0.6 & 0.1 & 0.5 \\
0.2 & 0.7 & 0.1 \\
0.2 & 0.2 & 0.4
\end{bmatrix}
\end{align*}
$$
## b)
$$
\begin{align*}
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-0.6 & -0.1 & -0.5 \\
-0.2 & \lambda-0.7 & -0.1 \\
-0.2 & -0.2 & \lambda-0.4
\end{vmatrix}\\
=(\lambda-0.6)\begin{vmatrix}
\lambda-0.7 & -0.1 \\
-0.2 & \lambda-0.4
\end{vmatrix}+0.1\begin{vmatrix}
-0.2 & -0.1 \\
-0.2 & \lambda-0.4
\end{vmatrix}-0.5\begin{vmatrix}
-0.2 & \lambda-0.7 \\
-0.2 & -0.2
\end{vmatrix}\\
=(\lambda-0.6)(\lambda-0.7)(\lambda-0.4)-(\lambda-0.6)(0.02)\\
-0.02(\lambda-0.4)-0.02-0.002-0.02-0.1(\lambda-0.7)\\
=\lambda^{3}-1.7\lambda^{2}+0.8\lambda-0.1\\
\begin{array}{c|cccc}
1 & 1 & -1.7 & 0.8 & -0.1 \\
 &  & 1 & 0.7 & 0.1 \\
\hline & 1 & -0.7 & 0.1 & 0
\end{array}\\
=(\lambda-1)(\lambda^{2}-0.7\lambda+0.1)=0\\
\implies \lambda_{1}=1,\lambda_{2}=0.2,\lambda_{3}=0.5\\
\lambda_{1}\implies \begin{bmatrix}
0.4 & -0.1 & -0.5 \\
-0.2 & 0.3 & -0.1 \\
-0.2 & -0.2 & 0.6
\end{bmatrix}\vec{v}_{1}=\vec{0}\xrightarrow{RREF}\begin{bmatrix}
1 & 0 & -\frac{8}{5} \\
0 & 1 & -\frac{7}{5} \\
0 & 0 & 0
\end{bmatrix}\implies \vec{v}_{1}=\begin{bmatrix}
8 \\
7 \\
5
\end{bmatrix}\\
\lim_{ t \to \infty } \mathbf{A}^{t}\vec{v}_{2},\mathbf{A}^{t}\vec{v}_{3}=\vec{0}\\
\implies \lim_{ t \to \infty } \mathbf{A}^{t}\vec{x}_{0}=\text{proj}_{\vec{v}_{1}}\vec{x}_{0}\\
\implies \boxed{ \lim_{ t \to \infty } a(t)=\frac{2}{5}=40\% },\\
\boxed{ \lim_{ t \to \infty } m(t)=\frac{7}{20}=35\% },\\
\boxed{ \lim_{ t \to \infty } s(t)=\frac{1}{4}=25\% }
\end{align*}
$$