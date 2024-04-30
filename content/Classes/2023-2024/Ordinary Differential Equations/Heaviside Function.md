---
tags:
  - math/calc
---
$$
\Huge u(t)=\begin{Bmatrix}
0 & t<0 \\
1 & t>0
\end{Bmatrix}
$$
Or for some point a,
$$
\Huge u_{a}(t)=u(t-a)=\begin{Bmatrix}
0 & t<a \\
1 & t>a
\end{Bmatrix}
$$
Derivative is [[Delta Function]]
# Box Function
Using Heaviside functions to define piecewise functions
$$
f(t)=\begin{Bmatrix}
0 & t<3 \\
4 & 3<t<5 \\
1 & 5<t<6 \\
0 & t>6
\end{Bmatrix}
=4[u_{3}(t)-u_{5}(t)]+1[u_{5}(t)-u_{6}(t)]=4u_{3}(t)-3u_{5}(t)-u_{6}(t)
$$
Derivative given by [[Singularity Function]]