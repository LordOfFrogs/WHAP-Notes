---
tags:
  - math/linear-algebra
due: 2024-03-02
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW5-2024.pdf)
# Problem 1
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix},\mathbf{B}=\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}\\
\mathbf{B}\overset{?}{=}\mathbf{S}^{-1}\mathbf{AS}\\
\mathbf{S}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
\implies \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}=\frac{1}{ad-bc}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
\implies \begin{bmatrix}
0 & ad-bc \\
ad-bc & 0
\end{bmatrix}=\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}\begin{bmatrix}
a & b \\
-c & -d
\end{bmatrix}\\
\implies \begin{bmatrix}
0 & ad-bc \\
ad-bc & 0
\end{bmatrix}=\begin{bmatrix}
ad+bc & 2bd \\
-2ac & -bc-ad
\end{bmatrix}\\
\implies ad+bc=0,\\
2bd=-2ac=ad-bc\\
\text{eg. }\mathbf{S}=\begin{bmatrix}
1 & 1 \\
1 & -1
\end{bmatrix}\\
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}=-\frac{1}{2}\begin{bmatrix}
-1 & -1 \\
-1 & 1
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
1 & -1
\end{bmatrix}\\
\implies \begin{bmatrix}
0 & -2 \\
-2 & 0
\end{bmatrix}=\begin{bmatrix}
-1 & -1 \\
-1 & 1
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
-1 & 1
\end{bmatrix}\\
=\begin{bmatrix}
0 & -2 \\
-2 & 0
\end{bmatrix}\checkmark
\end{align*}
$$
Yes, they are similar
# Problem 2
$$
\begin{align*}
\mathbf{B}=\begin{bmatrix}
5 & 0 \\
0 & -1
\end{bmatrix},T(\vec{x})=\mathbf{A}\vec{x}=\begin{bmatrix}
1 & 2 \\
4 & 3
\end{bmatrix}\vec{x}\\
\mathbf{B}=\mathbf{S}^{-1}\mathbf{AS}\implies \mathbf{SB}=\mathbf{AS}\\
\mathbf{S}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
\implies \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\begin{bmatrix}
5 & 0 \\
0 & -1
\end{bmatrix}=\begin{bmatrix}
1 & 2 \\
4 & 3
\end{bmatrix}\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
\implies \begin{bmatrix}
5a & -b \\
5c & -d
\end{bmatrix}=\begin{bmatrix}
a+2c & b+2d \\
4a+3c & 4b+3d
\end{bmatrix}\\
\implies 5a=a+2c\implies c=2a,\\
-b=b+2d\implies b=-d,\\
5c=4a+3c\implies c=2a,\\
-d=4b+3d\implies b=-d\\
\mathbf{S}=\begin{bmatrix}
1 & 1 \\
2 & -1
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 \\
2
\end{bmatrix},\begin{bmatrix}
1 \\
-1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 3
90 deg rotation matrix
Upper triangular would mean that the first column of $\mathbf{B}$ just scaling the first basis vector. There is no vector for which rotating 90 deg just scales it, so therefore there is no basis for which $\mathbf{B}$ is upper triangular
# Problem 4
## a)
Intuitively:
If $\vec{x}\in\ker\mathbf{B}$ ($\vec{x}$ in basis of $\mathbf{B}$), the representation of $\vec{x}$ in the basis of $\mathbf{A}$ would be $\mathbf{S}\vec{x}$ with $\mathbf{S}$ being the change-of-basis matrix from $\mathbf{B}$'s basis to $\mathbf{A}$'s. Therefore, $\vec{x}\in\ker\mathbf{B}$ in the basis of $\mathbf{B}$ means the same thing as $\mathbf{S}\vec{x}\in\ker\mathbf{A}$ in the basis of $\mathbf{A}$

More formally:
$$
\begin{align*}
\vec{x}\in\ker\mathbf{B}\implies \mathbf{B}\vec{x}=\vec{0}\\
\implies \mathbf{S}^{-1}\mathbf{AS}\vec{x}=\vec{0}\implies \mathbf{A}(\mathbf{S}\vec{x})=\vec{0}\\
\implies \boxed{ \vec{x}\in\ker\mathbf{A} }
\end{align*}
$$
## b)
Given $\{ \vec{v}_{1},\vec{v}_{2},\cdots,\vec{v}_{p} \}$ is a basis for $\ker\mathbf{B}$, which gives $\{ \mathbf{S}\vec{v}_{1},\mathbf{S}\vec{v}_{2},\cdots,\mathbf{S}\vec{v}_{p} \}\in\ker\mathbf{A}$, meaning that $\text{nullity}(\mathbf{A})=\text{dim}(\ker\mathbf{A})\geq p=\text{nullity}(\mathbf{B})=\dim(\ker\mathbf{B})$ as linearly independent, reverse it. This gives $\{ \vec{u}_{1},\vec{u}_{2},\cdots,\vec{u}_{q} \}$ as a basis for $\mathbf{A}$ and $\{ \mathbf{S}^{-1}\vec{u}_{1},\mathbf{S}^{-1}\vec{u}_{2},\cdots,\mathbf{S}^{-1}\vec{u}_{q} \}\in\ker\mathbf{B}$ as linearly independent, meaning $\text{nullity}(\mathbf{B})=\dim(\ker\mathbf{B})\geq q=\text{nullity}(\mathbf{A})=\dim(\ker\mathbf{A})$
Therefore, $p=q$ and the nullities are the same
## c)
Both matrices must have the same codomain, and by the rank-nullity theorem, $\text{rank}(\mathbf{A})+\text{nullity}(\mathbf{A})=\dim(\text{domain}(\mathbf{A}))$  and $\text{rank}(\mathbf{B})+\text{nullity}(\mathbf{B})=\dim(\text{domain}(\mathbf{B}))$. Because (from [[#b)]]) the nullities are equal, the ranks therefore must be equal
# Problem 5
$$
\begin{align*}
\mathcal{B}=\left\{ \begin{bmatrix}
3 \\
4 \\
0
\end{bmatrix},\begin{bmatrix}
4 \\
-3 \\
0
\end{bmatrix},\begin{bmatrix}
0 \\
0 \\
5
\end{bmatrix} \right\}\\
\implies \mathbf{S}=\begin{bmatrix}
3 & 4 & 0 \\
4 & -3 & 0 \\
0 & 0 & 5
\end{bmatrix}\implies \mathbf{S}^{-1}=\frac{1}{25}\begin{bmatrix}
3 & 4 & 0 \\
4 & -3 & 0 \\
0 & 0 & 5
\end{bmatrix}\\
[\mathbf{A}]_{\mathcal{B}}=\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{bmatrix}\\
\mathbf{A}=\mathbf{S}[\mathbf{A}]_{\mathcal{B}}\mathbf{S}^{-1}\\
=\begin{bmatrix}
3 & 4 & 0 \\
4 & -3 & 0 \\
0 & 0 & 5
\end{bmatrix}\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{bmatrix} \frac{1}{25}\begin{bmatrix}
3 & 4 & 0 \\
4 & -3 & 0 \\
0 & 0 & 5
\end{bmatrix}\\
=\frac{1}{25}\begin{bmatrix}
3 & 4 & 0 \\
4 & -3 & 0 \\
0 & 0 & 5
\end{bmatrix}\begin{bmatrix}
3 & 4 & 0 \\
0 & 0 & 5 \\
-4 & 3 & 0
\end{bmatrix}\\
=\boxed{ \frac{1}{25}\begin{bmatrix}
9 & 12 & 20 \\
12 & 16 & -15 \\
-4 & -3 & 0
\end{bmatrix} }
\end{align*}
$$
# Problem 6
## a)
$$
\begin{align*}
\vec{v}_{0}+\vec{v}_{1}+\vec{v}_{2}+\vec{v}_{3}\\
=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}+\begin{bmatrix}
1 \\
-1 \\
-1
\end{bmatrix}+\begin{bmatrix}
-1 \\
1 \\
-1
\end{bmatrix}+\begin{bmatrix}
-1 \\
-1 \\
1
\end{bmatrix}\\
=\begin{bmatrix}
1+1-1-1 \\
1-1+1-1 \\
1-1-1+1
\end{bmatrix}=\boxed{ \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}=\vec{0} }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathcal{B}=\{ \vec{v}_{1},\vec{v}_{2},\vec{v}_{3} \}\implies \mathbf{S}=\begin{bmatrix}
1 & -1 & -1 \\
-1 & 1 & -1 \\
-1 & -1 & 1
\end{bmatrix}\\
\implies \mathbf{S}^{-1}=-\frac{1}{2}\begin{bmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0
\end{bmatrix}\\
[\vec{v}_{0}]_{\mathcal{B}}=\mathbf{S}^{-1}\vec{v}_{0}\\
=-\frac{1}{2}\begin{bmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0
\end{bmatrix}\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}=\boxed{ \begin{bmatrix}
-1 \\
-1 \\
-1
\end{bmatrix} }
\end{align*}
$$
## c)
$T(\vec{v}_{2})=\vec{v}_{2}$
$T$ is a clockwise rotation around the axis from $O\to P_{2}$ which takes $P_{0}\to P_{3}$
$$
[\mathbf{B}]_{\mathcal{B}}=\begin{bmatrix}
-1 & 0 & 1 \\
-1 & 1 & 0 \\
-1 & 0 & 0
\end{bmatrix}
$$
$\mathbf{B}^{3}$ is $\mathbf{I}$ (the identity matrix) because $T$ is one third of a full rotation, so doing it thrice makes it a full $360\degree$ rotation, which is the same as the identity
# Problem 7
$$
\begin{align*}
\mathbf{M}_{1}=\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix},\\
\mathbf{M}_{2}=\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix},\\
\mathbf{M}_{3}=\begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix}\\
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}=a\mathbf{M}_{1}+b\mathbf{M}_{2}+c\mathbf{M}_{3}\\
\boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix},\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix},\begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix} \right\} }\\
\boxed{ \dim=3B }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
f(t)=a+bt+ct^{2}+dt^{3}\\
f(1)=0\implies b+c+d=0\\
\int_{-1}^{1} f(t)\, dt =0\implies \left[ at+\frac{b}{2}t^{2}+\frac{c}{3}t^{3}+\frac{d}{4}t^{4} \right]^{1}_{-1}=0\\
\implies 2a+\frac{2}{3}c=0\\
f_{1}(t)=1-3t^{2},f_{2}(t)=t+t^{2}-2t^{3}\\
\implies f(t)=a+bt+ct^{2}+dt^{3}=af_{1}(t)+bf_{2}(t)\\
\boxed{ \mathcal{B}=\{ 1-3t^{2},t+t^{2}-2t^{3} \} }\\
\boxed{ \dim=2 }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\begin{bmatrix}
1 & 2 \\
3 & 6
\end{bmatrix}\mathbf{A}=\begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}\\
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\implies a+2c=0,\\
b+2d=0,\\
3a+6c=0,\\
3b+6d=0\\
\mathbf{M}_{1}=\begin{bmatrix}
-2 & 0 \\
1 & 0
\end{bmatrix},\mathbf{M}_{2}=\begin{bmatrix}
0 & -2 \\
0 & 1
\end{bmatrix}\\
\boxed{ \mathcal{B}=\left\{ \begin{bmatrix}
-2 & 0 \\
1 & 0
\end{bmatrix},\begin{bmatrix}
0 & -2 \\
0 & 1
\end{bmatrix} \right\}  }\\
\boxed{ \dim=2 }
\end{align*}
$$
# Problem 10
## a)
$$
\begin{align*}
T(a\mathbf{M}_{1}+b\mathbf{M}_{2})\overset{?}{=}aT(\mathbf{M}_{1})+bT(\mathbf{M}_{2})\\
(a\mathbf{M}_{1}+b\mathbf{M}_{2})\begin{bmatrix}
1 & 2 \\
3 & 6
\end{bmatrix}=a\mathbf{M}_{1}\begin{bmatrix}
1 & 2 \\
3 & 6
\end{bmatrix}+b\mathbf{M}_{2}\begin{bmatrix}
1 & 2 \\
3 & 6
\end{bmatrix}\\
=aT(\mathbf{M}_{1})+bT(\mathbf{M}_{2})\checkmark\\
\fbox{ Linear }\\
\forall \mathbf{A}\in\mathbb{R}^{2\times2}, \overset{?}{\exists} \mathbf{B}\in\mathbb{R}^{2\times2},T(\mathbf{B})=\mathbf{A}\\
\mathbf{A}=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix},\mathbf{B}=\begin{bmatrix}
e & f \\
g & h
\end{bmatrix}\\
T(\mathbf{B})=\begin{bmatrix}
e & f \\
g & h
\end{bmatrix}\begin{bmatrix}
1 & 2 \\
3 & 6
\end{bmatrix}=\begin{bmatrix}
e+3f & 2e+6f \\
g+3h & 2g+6h
\end{bmatrix}\overset{?}{=}\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\\
2a\neq b\lor 2c\neq d\implies \nexists \mathbf{B}\\
\implies \fbox{ Not isomorphic }
\end{align*}
$$
## b)
$$
\begin{align*}
\text{im}(T)=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\in\mathbb{R}^{2\times2}:2a=b,2c=d\\
\implies \boxed{ \text{basis}(\text{im}(T))=\left\{ \begin{bmatrix}
1 & 2 \\
0 & 0
\end{bmatrix},\begin{bmatrix}
0 & 0 \\
1 & 2
\end{bmatrix} \right\}  }\\
\implies \fbox{ rank $=2$ }\\
\ker(T)=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\in\mathbb{R}^{2\times2}: a+3b=0,c+3d=0\\
\implies \boxed{ \text{basis}(\ker(T))=\left\{ \begin{bmatrix}
3 & -1 \\
0 & 0
\end{bmatrix},\begin{bmatrix}
0 & 0 \\
3 & -1
\end{bmatrix} \right\}  }\\
\implies \fbox{ nullity $=2$}
\end{align*}
$$
# Problem 11
## a)
$$
\begin{align*}
[T(f)](t)=f''(t)+4f'(t)\\
[T(af+bg)](t)=(af(t)+bg(t))''+4(af(t)+bg(t))'\\
=af''(t)+bg''(t)+4af'(t)+4bg'(t)=[aT(f)+bT(g)](t)\\
\implies \fbox{ Yes, linear }\\
g(t)=a+bt+ct^{2},T(f)\overset{?}{=}g\\
c\neq0\implies T(f)\neq g\\
\implies \fbox{ Not isomorphic }
\end{align*}
$$
## b)
$$
\begin{align*}
\boxed{ \text{im}(T)=P_{1},\text{rank}(T)=2 }\\
\ker(T)=f(t)=a+bt+ct^{2}:2c+4b+8ct=0\\
\implies c=0\implies b=0\\
\implies \boxed{ \ker(T)=f(t)=a=P_{0},\text{nullity}(T)=1 }
\end{align*}
$$
## c)
$$
\begin{align*}
\mathcal{U}=\{ 1,t,t^{2} \}\\
f(t)=a+bt+ct^{2}=\begin{bmatrix}
a \\
b \\
c
\end{bmatrix}_{\mathcal{U}}\overset{ T }{ \to }2c+4b+8ct=\begin{bmatrix}
2c+4b \\
8c \\
0
\end{bmatrix}_{\mathcal{U}}\\
1\to0,t\to4,t^{2}\to2+8t\\
\implies \boxed{ [T(f)]_{\mathcal{U}}=\begin{bmatrix}
0 & 4 & 2 \\
0 & 0 & 8 \\
0 & 0 & 0
\end{bmatrix} }
\end{align*}
$$
# Problem 12
## a)
$$
\begin{align*}
\mathcal{U}=\{ 1,t,t^{2} \}\\
[T(f)](t)=f(2t-1)\\
f(t)=1\implies [T(f)](t)=1=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}_{\mathcal{U}}\\
f(t)=t\implies [T(f)](t)=2t-1=\begin{bmatrix}
-1 \\
2 \\
0
\end{bmatrix}_{\mathcal{U}}\\
f(t)=t^{2}\implies [T(f)](t)=4t^{2}-4t+1=\begin{bmatrix}
1 \\
-4 \\
4
\end{bmatrix}_{\mathcal{U}}\\
\implies \boxed{ \mathbf{A}=[T(f)]_{\mathcal{U}}=\begin{bmatrix}
1 & -1 & 1 \\
0 & 2 & -4 \\
0 & 0 & 4
\end{bmatrix} }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathcal{B}=\{ 1,t-1,(t-1)^{2} \}\\
T(1)=1=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}_{\mathcal{B}},\\
T(t-1)=2t-2=\begin{bmatrix}
0 \\
2 \\
0
\end{bmatrix}_{\mathcal{B}}\\
T((t-1)^{2})=(2t-2)^{2}=4(t-1)^{2}=\begin{bmatrix}
0 \\
0 \\
4
\end{bmatrix}_{\mathcal{B}}\\
\implies \boxed{ \mathbf{B}=[T(f)]_{\mathcal{B}}=\begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 4
\end{bmatrix} }
\end{align*}
$$
## c)
$$
\begin{align*}
\mathcal{B}=\{ 1,t-1,(t-1)^{2} \}=\left\{ \begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}_{\mathcal{U}},\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}_{\mathcal{U}},\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}_{\mathcal{U}} \right\} \\
\implies \boxed{ \mathbf{S}=\begin{bmatrix}
1 & -1 & 1 \\
0 & 1 & -2 \\
0 & 0 & 1
\end{bmatrix} }
\end{align*}
$$
## d)
$$
\begin{align*}
\mathbf{SB}=\mathbf{AS}\\
\implies \begin{bmatrix}
1 & -1 & 1 \\
0 & 1 & -2 \\
0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 4
\end{bmatrix}=\begin{bmatrix}
1 & -1 & 1 \\
0 & 2 & -4 \\
0 & 0 & 4
\end{bmatrix}\begin{bmatrix}
1 & -1 & 1 \\
0 & 1 & -2 \\
0 & 0 & 1
\end{bmatrix}\\
\implies \begin{bmatrix}
1 & -2 & 4 \\
0 & 2 & -8 \\
0 & 0 & 4
\end{bmatrix}=\begin{bmatrix}
1 & -2 & 4 \\
0 & 2 & -8 \\
0 & 0 & 4
\end{bmatrix}\checkmark
\end{align*}
$$
## e)
$$
\begin{align*}
\mathcal{U}=\{ 1,t,t^{2} \}=\{ 1,(t-1)+1, (t-1)^{2}+2(t-1)+1 \}\\
=\left\{ \begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}_{\mathcal{B}},\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix}_{\mathcal{B}},\begin{bmatrix}
1 \\
2 \\
1
\end{bmatrix}_{\mathcal{B}} \right\} \\
\implies \boxed{ \mathbf{Q}=\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 2 \\
0 & 0 & 1
\end{bmatrix} }
\end{align*}
$$