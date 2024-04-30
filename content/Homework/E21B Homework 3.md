---
tags:
  - math/linear-algebra
due: 2024-02-17
course: "[[E21B]]"
status: Complete
---
[Link](http://math.rwinters.com/E21b/homework/HW3-2024.pdf)
# Problem 1
$$
\begin{align*}\\
\mathbf{AA}=\begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix}=\begin{bmatrix}
2 & 2 \\
2 & 2
\end{bmatrix}\\
\mathbf{BC}=\begin{bmatrix}
1 & 2 & 3
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1 \\
2 & 1 & 0 \\
3 & 2 & 1
\end{bmatrix}\\
=\begin{bmatrix}
1+4+9 & 2+6 & -1+3
\end{bmatrix}=\boxed{ \begin{bmatrix}
14 & 8 & 2
\end{bmatrix} }\\
\mathbf{BD}=\begin{bmatrix}
1 & 2 & 3
\end{bmatrix}\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}=\boxed{ \begin{bmatrix}
6
\end{bmatrix} }\\
\mathbf{CC}=\begin{bmatrix}
1 & 0 & -1 \\
2 & 1 & 0 \\
3 & 2 & 1
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1 \\
2 & 1 & 0 \\
3 & 2 & 1
\end{bmatrix}=\boxed{ \begin{bmatrix}
-2 & -2 & -2 \\
4 & 1 & -2 \\
10 & 4 & -2
\end{bmatrix} }\\
\mathbf{CD}=\begin{bmatrix}
1 & 0 & -1 \\
2 & 1 & 0 \\
3 & 2 & 1
\end{bmatrix}\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}=\boxed{ \begin{bmatrix}
0 \\
3 \\
6
\end{bmatrix} }\\
\mathbf{DB}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}\begin{bmatrix}
1 & 2 & 3
\end{bmatrix}=\boxed{ \begin{bmatrix}
1 & 2 & 3 \\
1 & 2 & 3 \\
1 & 2 & 3
\end{bmatrix} }\\
\mathbf{EB}=[5]\begin{bmatrix}
1 & 2 & 3
\end{bmatrix}=\boxed{ \begin{bmatrix}
5 & 10 & 15
\end{bmatrix} }\\
\mathbf{DE}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}[5]=\boxed{ \begin{bmatrix}
5 \\
5 \\
5
\end{bmatrix} }\\
\mathbf{EE}=[5][5]=\boxed{ [25] }
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\mathbf{AB}(\mathbf{AB})^{-1}=\mathbf{I}\implies \mathbf{A}(\mathbf{B}(\mathbf{AB})^{-1})=\mathbf{I}\implies \mathbf{A}^{-1}=\mathbf{B}(\mathbf{AB})^{-1}\\
(\mathbf{AB})^{-1}\mathbf{AB}=\mathbf{I}\implies((\mathbf{AB})^{-1}\mathbf{A})\mathbf{B}=\mathbf{I}\implies\mathbf{B}^{-1}=(\mathbf{AB})^{-1}\mathbf{A}\\
\therefore \mathbf{A},\mathbf{B}\text{ are both invertible}
\end{align*}
$$
Also, thinking in terms of [[Linear Transformation|linear transformations]] for the product $\mathbf{AB}$ is applying $\mathbf{B}$ then $\mathbf{A}$, so, for the inverse to exist, it must be possible to apply the inverse of $\mathbf{A}$ and then the inverse of $\mathbf{B}$, implying that both [[Matrix|matrices]] are invertible.
# Problem 3
$$
\begin{align*}
67.\quad (\mathbf{A}+\mathbf{B})^{2}=(\mathbf{A}+\mathbf{B})(\mathbf{A}+\mathbf{B})\\
=(\mathbf{A}+\mathbf{B})\mathbf{A}+(\mathbf{A}+\mathbf{B})\mathbf{B}\\
=\mathbf{A}^{2}+\mathbf{BA}+\mathbf{AB}+\mathbf{B}^{2}\boxed{ \neq }\mathbf{A}^{2}+2\mathbf{AB}+\mathbf{B}^{2}\\\\
68.\quad (\mathbf{A}^{2})^{-1}=(\mathbf{AA})^{-1}=\mathbf{A}^{-1}\mathbf{A}^{-1}=(\mathbf{A}^{-1})^{2}\boxed{ \checkmark }\\\\
69.\quad (\mathbf{A}+\mathbf{B})^{-1}=\mathbf{A}^{-1}+\mathbf{B}^{-1}\\
\implies (\mathbf{A}+\mathbf{B})(\mathbf{A}+\mathbf{B})^{-1}=(\mathbf{A}+\mathbf{B})(\mathbf{A}^{-1}+\mathbf{B}^{-1})\\
=\mathbf{AA}^{-1}+\mathbf{BA}^{-1}+\mathbf{AB}^{-1}+\mathbf{BB}^{-1}=\mathbf{BA}^{-1}+\mathbf{AB}^{-1}\boxed{ \neq }\mathbf{I}\\\\
70.\quad (\mathbf{A}-\mathbf{B})(\mathbf{A}+\mathbf{B})=\mathbf{A}^{2}-\mathbf{BA}+\mathbf{AB}-\mathbf{B}^{2}\boxed{ \neq }\mathbf{A}^{2}+\mathbf{B}^{2}\\\\
71.\quad \mathbf{ABB}^{-1}\mathbf{A}^{-1}=\mathbf{AIA}^{-1}=\mathbf{I}\boxed{ \checkmark }\\\\
72.\quad \mathbf{ABA}^{-1}=\mathbf{B}\implies \mathbf{AB}=\mathbf{BA} \boxed{ \neq }\\\\
73.\quad (\mathbf{ABA}^{-1})^{3}=\mathbf{ABA}^{-1}\mathbf{ABA}^{-1}\mathbf{ABA}^{-1}\\
=\mathbf{ABIBIBA}^{-1}=\mathbf{AB}^{3}\mathbf{A}^{-1}\boxed{ \checkmark }\\\\
74.\quad (\mathbf{I}+\mathbf{A})(\mathbf{I}+\mathbf{A}^{-1})=\mathbf{I}^{2}+\mathbf{AI}+\mathbf{IA}^{-1}+\mathbf{AA}^{-1}\\
=2\mathbf{I}+\mathbf{A}+\mathbf{A}^{-1}\boxed{ \checkmark }\\\\
75.\quad (\mathbf{A}^{-1}\mathbf{B})^{-1}=\mathbf{B}^{-1}(\mathbf{A}^{-1})^{-1}=\mathbf{B}^{-1}\mathbf{A}\boxed{ \checkmark }
\end{align*}
$$
# Problem 4
$$
\begin{align*}
\mathbf{A}\begin{bmatrix}
1 & 2 \\
2 & 5
\end{bmatrix}=\begin{bmatrix}
2 & 1 \\
1 & 3
\end{bmatrix}\\
\begin{bmatrix}
1 & 2 \\
2 & 5
\end{bmatrix}^{-1}=\begin{bmatrix}
5 & -2 \\
-2 & 1
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
2 & 1 \\
1 & 3
\end{bmatrix}\begin{bmatrix}
5 & -2 \\
-2 & 1
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
8 & -3 \\
-1 & 1
\end{bmatrix} }
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\mathbf{A}\begin{bmatrix}
1 & 2 \\
2 & 5
\end{bmatrix}=\begin{bmatrix}
7 & 1 \\
5 & 2 \\
3 & 3
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
7 & 1 \\
5 & 2 \\
3 & 3
\end{bmatrix}\begin{bmatrix}
5 & -2 \\
-2 & 1
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
33 & -13 \\
21 & -8 \\
9 & -3
\end{bmatrix} }
\end{align*}
$$
# Problem 6
$$
\begin{array}{ll}
P_{0}\overset{T}\to P_{1} & P_{0}\overset{L}\to P_{0} \\
P_{1}\to P_{3} & P_{1}\to P_{2} \\
P_{2}\to P_{2} & P_{2}\to P_{1} \\
P_{3}\to P_{0} & P_{3}\to P_{3}
\end{array}
$$
a) The rotation about the axis through points 0 and $P_{2}$ that transforms $P_{3}$ into $P_{1}$
b) The reflection about the plane through the points 0, $P_{0}$, and $P_{3}$ (the same)
c) The rotation about the axis through points 0 and $P_{2}$ that transforms $P_{1}$ into $P_{0}$
d)
$$
\begin{array}{ll}
P_{0}\overset{T\circ L}\to P_{1} & P_{0}\overset{L\circ T}\to P_{2} \\
P_{1}\to P_{2} & P_{1}\to P_{3} \\
P_{2}\to P_{3} & P_{2}\to P_{1} \\
P_{3}\to P_{0} & P_{3}\to P_{0}
\end{array}
$$
Not the same
e)
$$
\begin{align*}
P_{0}\overset{L\circ T\circ L}\to P_{2} \\
P_{1}\to P_{1} \\
P_{2}\to P_{3} \\
P_{3}\to P_{0} \\
\end{align*}
$$
The rotation about the axis through points 0 and $P_{1}$ that transforms $P_{0}$ into $P_{2}$
# Problem 7
$$
\begin{align*}
T:\mathbf{A}\begin{bmatrix}
\overset{P_{0}}1 & \overset{P_{1}}1 & \overset{P_{2}}-1 \\
1 & -1 & 1 \\
1 & -1 & -1
\end{bmatrix}=\begin{bmatrix}
\overset{P_{1}}1 & \overset{P_{3}}-1 & \overset{P_{2}}-1 \\
-1 & -1 & 1 \\
-1 & 1 & -1
\end{bmatrix}\\
\implies \mathbf{A}=\begin{bmatrix}
1 & -1 & -1 \\
-1 & -1 & 1 \\
-1 & 1 & -1
\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 \\
\frac{1}{2} & 0 & -\frac{1}{2} \\
0 & \frac{1}{2} & -\frac{1}{2}
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
0 & 0 & 1 \\
-1 & 0 & 0 \\
0 & -1 & 0
\end{bmatrix} }\\
L:\mathbf{B}\begin{bmatrix}
\overset{P_{0}}1 & \overset{P_{1}}1 & \overset{P_{2}}-1 \\
1 & -1 & 1 \\
1 & -1 & -1
\end{bmatrix}=\begin{bmatrix}
\overset{P_{0}}1 & \overset{P_{2}}-1 & \overset{P_{1}}1 \\
1 & 1 & -1 \\
1 & -1 & -1
\end{bmatrix}\\
\implies \mathbf{B}=\begin{bmatrix}
1 & -1 & 1 \\
1 & 1 & -1 \\
1 & -1 & -1
\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 \\
\frac{1}{2} & 0 & -\frac{1}{2} \\
0 & \frac{1}{2} & -\frac{1}{2}
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix} }
\end{align*}
$$
# Problem 8
![[E21B Homework 3 2024-02-14 21.28.32.excalidraw]]
# Problem 9
![[E21B Homework 3 2024-02-14 22.27.04.excalidraw]]
# Problem 10
![[E21B Homework 3 2024-02-15 09.25.29.excalidraw]]
# Problem 11
The [[image]] is the [[line]] in [[R3]] through the origin and [[vector]] $\begin{bmatrix}1\\ 1\\ 1\end{bmatrix}$, because all [[standard basis vectors]] are mapped onto [[vector]] $\begin{bmatrix}1\\ 1\\ 1\end{bmatrix}$
# Problem 12
$$
\begin{align*}
\begin{bmatrix}
2 \\
3 \\
6
\end{bmatrix}\times\begin{bmatrix}
1 \\
4 \\
5
\end{bmatrix}=\begin{bmatrix}
15-24 \\
6-10 \\
8-3
\end{bmatrix}=\begin{bmatrix}
-9 \\
-4 \\
5
\end{bmatrix}\\
\begin{bmatrix}
-9 \\
-4 \\
5
\end{bmatrix}\cdot\begin{bmatrix}
3 \\
2 \\
7
\end{bmatrix}=-27-8+35=0\\
\implies \text{All three basis vectors lie on a plane}
\end{align*}
$$
The [[image]] is a [[plane]] in [[R3]]
# Problem 13
$$
\begin{align*}
L(\vec{x})=\mathbf{A}\vec{x}=\begin{bmatrix}
7 & 14 & 7 \\
6 & 12 & 6 \\
5 & 10 & 5
\end{bmatrix}\vec{x}\\
\text{im}(\mathbf{A})=\text{span}\left\{ \begin{bmatrix}
7 \\
6 \\
5
\end{bmatrix} \right\}
\end{align*}
$$
# Problem 14
$$
\begin{align*}
\mathbf{A}(t\vec{v})=t\mathbf{A}\begin{bmatrix}
-1 \\
1 \\
2
\end{bmatrix}=\vec{0}\\
\implies -\vec{v}_{1}+\vec{v}_{2}+2\vec{v}_{3}=0\\
\text{ Choose 2 arbitrary linearly independent vectors:}\\
\vec{v}_{3}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}\\
\implies \vec{v}_{1}=\vec{v}_{2}+2\vec{v}_{3}=\begin{bmatrix}
3 \\
4 \\
5
\end{bmatrix}\\
\implies \boxed{ \mathbf{A}=\begin{bmatrix}
3 & 1 & 1 \\
4 & 2 & 1 \\
5 & 3 & 1
\end{bmatrix} }
\end{align*}
$$
# Problem 15
## a)
$$
\begin{align*}
\vec{v}\in\text{ker}(\mathbf{B})\implies (\mathbf{AB})\vec{v}=\mathbf{A}(\mathbf{B}\vec{v})=\vec{0}\\
\therefore \ker(\mathbf{AB})\supseteq \ker(\mathbf{B})
\end{align*}
$$
The [[kernel]] of $\mathbf{AB}$ contains the [[kernel]] of $\mathbf{B}$, and then anything that, when transformed by $\mathbf{B}$, is  in the [[kernel]] of $\mathbf{A}$. They are not always equal, but the [[kernel]] of $\mathbf{B}$ is always contained in the [[kernel]] of $\mathbf{AB}$
## b)
The [[image]] of $\mathbf{A}$ always contains the [[image]] of $\mathbf{AB}$, but are not necessarily equal
# Problem 16
## a)
Yes, because
$$
\begin{align*}
\ker(\mathbf{A})=\{ \vec{v}|\mathbf{A}\vec{v}=0 \}\\
\mathbf{A}\vec{v}=0\Longleftrightarrow \text{rref}(\mathbf{A})\vec{v}=0\Longleftrightarrow \mathbf{B}\vec{v}=0\\
\implies \ker(\mathbf{A})=\{ \vec{v}|\mathbf{B}\vec{v}=0 \}=\ker(\mathbf{B})
\end{align*}
$$
## b)
No, because, for example:
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 2 \\
3 & 6
\end{bmatrix},\text{im}(\mathbf{A})=\text{span}\left\{ \begin{bmatrix}
1 \\
3
\end{bmatrix} \right\}\\
\text{rref}(\mathbf{A})=\mathbf{B}=\begin{bmatrix}
1 & 2 \\
0 & 0
\end{bmatrix},\text{im}(\mathbf{B})=\text{span}\left\{ \begin{bmatrix}
1 \\
0
\end{bmatrix} \right\}
\end{align*}
$$