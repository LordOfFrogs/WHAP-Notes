---
tags:
  - math/linear-algebra
due: 2024-04-20
course: "[[E21B]]"
status: Complete
---
# Problem 1
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0.3 & 0.3 & 0.3 \\
0.3 & 0.3 & 0.3 \\
0.3 & 0.3 & 0.3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-0.3 & -0.3 & -0.3 \\
-0.3 & \lambda-0.3 & -0.3 \\
-0.3 & -0.3 & \lambda-0.3
\end{vmatrix}\\
=(\lambda-0.3)\begin{vmatrix}
\lambda-0.3 & -0.3 \\
-0.3 & \lambda-0.3
\end{vmatrix}+0.3\begin{vmatrix}
-0.3 & -0.3 \\
-0.3 & \lambda-0.3
\end{vmatrix}-0.3\begin{vmatrix}
-0.3 & \lambda-0.3 \\
-0.3 & -0.3
\end{vmatrix}\\
=(\lambda-0.3)^{3}-0.09(\lambda-0.3)-0.09(\lambda-0.3)-0.027-0.027-0.09(\lambda-0.3)\\
=\lambda^{3}-0.9\lambda^{2}=0\\
\implies \lambda_{1}=0,\lambda_{2}=0.9\\
\lambda_{1}\implies \begin{bmatrix}
-0.3 & -0.3 & -0.3 \\
-0.3 & -0.3 & -0.3 \\
-0.3 & -0.3 & -0.3
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}t+\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}s\\
\lambda_{2}\implies\begin{bmatrix}
0.6 & -0.3 & -0.3 \\
-0.3 & 0.6 & -0.3 \\
-0.3 & -0.3 & 0.6
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies\vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}\\
\implies \mathbf{A}^{t}=\mathbf{S}\begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0.9^{t}
\end{bmatrix}\mathbf{S}^{-1}\\
\implies\lim_{ t \to \infty } \mathbf{A}^{t}=\mathbf{S}[0]\mathbf{S}^{-1}=[0]\\
\implies\boxed{ \lim_{ t \to \infty } \mathbf{A}^{t}\vec{x}_{0}=\vec{0} }
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0.6 & k \\
-k & 0.6
\end{bmatrix}\\
\implies \det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-0.6 & -k \\
k & \lambda-0.6
\end{vmatrix}\\
=(\lambda-0.6)^{2}+k^{2}=\lambda^{2}-1.2\lambda+0.36+k^{2}=0\\
\implies\lambda=0.6\pm\frac{1}{2}\sqrt{1.44-1.44-4k^{2}}=0.6\pm|k|i\\
|\lambda|<1\implies|\sqrt{0.36+k^{2}}|<1\implies0.36+k^{2}<1\implies k^{2}<0.64\\
\implies \boxed{ -0.8<k<0.8 }
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0.6 & -0.8 \\
0.8 & 0.6
\end{bmatrix}\\
\implies \lambda=0.6\pm|-0.8|i\\
\implies \lambda=0.6+0.8i=e^{i\theta},\bar{\lambda}=0.6-0.8i=e^{-i\theta}\\
\lambda\implies\begin{bmatrix}
0.8i & 0.8 \\
-0.8 & 0.8i
\end{bmatrix}\vec{z}=\vec{0}\implies\vec{z}=\begin{bmatrix}
i \\
1
\end{bmatrix}\\
\bar{\lambda}\implies \hat{z}=\begin{bmatrix}
-i \\
1
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
i & -i \\
1 & 1
\end{bmatrix}\implies \mathbf{S}^{-1}=0.5\begin{bmatrix}
-i & 1 \\
i & 1
\end{bmatrix}\\
\implies \mathbf{A}^{t}\vec{x}_{0}=\mathbf{SD}^{t}\mathbf{S}^{-1}\vec{x}_{0}=\begin{bmatrix}
i & -i \\
1 & 1
\end{bmatrix}\begin{bmatrix}
(0.6+0.8i)^{t} & 0 \\
0 & (0.6-0.8i)^{t}
\end{bmatrix}0.5\begin{bmatrix}
-i & 1 \\
i & 1
\end{bmatrix}\begin{bmatrix}
0 \\
1
\end{bmatrix}\\
=0.5\begin{bmatrix}
i & -i \\
1 & 1
\end{bmatrix}\begin{bmatrix}
(e^{i\theta})^{t} & 0 \\
0 & (e^{-i\theta})^{t}
\end{bmatrix}\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
=0.5\begin{bmatrix}
i & -i \\
1 & 1
\end{bmatrix}\begin{bmatrix}
e^{it\theta} \\
e^{-it\theta}
\end{bmatrix}=\begin{bmatrix}
ie^{it\theta}-ie^{-it\theta} \\
e^{it\theta}+e^{-it\theta}
\end{bmatrix}\\
=0.5\begin{bmatrix}
i\cos t\theta-\sin t\theta-i\cos t\theta-\sin t\theta \\
\cos t\theta+i\sin t\theta+\cos t\theta-i\sin t\theta
\end{bmatrix}\\
=\begin{bmatrix}
-\sin t\theta \\
\cos t\theta
\end{bmatrix}\\
\theta=\sin ^{-1}(0.8)\implies\boxed{ \vec{x}(t)=\begin{bmatrix}
-\sin(t\sin ^{-1}(0.8)) \\
\cos(t\sin^{-1}(0.8))
\end{bmatrix} }
\end{align*}
$$
![[E21B Homework 11 2024-04-16 03.23.05.excalidraw]]
# Problem 4
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & -3 \\
1.2 & -2.6
\end{bmatrix}\\
\implies\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & 3 \\
-1.2 & \lambda+2.6
\end{vmatrix}=\lambda^{2}+1.6\lambda+1=0\\
\implies \lambda=-0.8\pm0.5\sqrt{2.56-4}\\
=-0.8\pm0.5\sqrt{-1.44}=-0.8\pm0.6i\\
\lambda=-0.8+0.6i\implies\begin{bmatrix}
-1.8+0.6i & 3 \\
-1.2 & 1.8+0.6i
\end{bmatrix}\vec{z}=\vec{0}\\
RREF\to\begin{bmatrix}
1 & -1.5-0.5i \\
0 & 0
\end{bmatrix}\implies\vec{z}=\begin{bmatrix}
1.5 \\
1
\end{bmatrix}+\begin{bmatrix}
0.5 \\
0
\end{bmatrix}i\\
\mathbf{S}=\begin{bmatrix}
0.5 & 1.5 \\
0 & 1
\end{bmatrix}\implies\mathbf{S}^{-1}=\begin{bmatrix}
2 & -3 \\
0 & 1
\end{bmatrix}\\
\implies\mathbf{B}=\mathbf{S}^{-1}\mathbf{AS}=\begin{bmatrix}
2 & -3 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
1 & -3 \\
1.2 & -2.6
\end{bmatrix}\begin{bmatrix}
0.5 & 1.5 \\
0 & 1
\end{bmatrix}=\begin{bmatrix}
-0.8 & -0.6 \\
0.6 & -0.8
\end{bmatrix}\\
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}^{t}=\begin{bmatrix}
\cos t\theta & -\sin t\theta \\
\sin t\theta & \cos t\theta
\end{bmatrix}\\
\mathbf{A}^{t}\vec{x}_{0}=\mathbf{SB}^{t}\mathbf{S}^{-1}\vec{x}_{0}=\begin{bmatrix}
0.5 & 1.5 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
\cos t\theta & -\sin t\theta \\
\sin t\theta & \cos t\theta
\end{bmatrix}\begin{bmatrix}
2 & -3 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
0 \\
1
\end{bmatrix}\\
=\begin{bmatrix}
0.5 & 1.5 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
\cos t\theta & -\sin t\theta \\
\sin t\theta & \cos t\theta
\end{bmatrix}\begin{bmatrix}
-3 \\
1
\end{bmatrix}\\
=\begin{bmatrix}
0.5 & 1.5 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
-3\cos t\theta-\sin t\theta \\
\cos t\theta-3\sin t\theta
\end{bmatrix}=\begin{bmatrix}
-5\sin t\theta \\
\cos t\theta-3\sin t\theta
\end{bmatrix}\\
\theta=\cos^{-1}(-0.8)\implies\boxed{ \vec{x}(t)=\begin{bmatrix}
-5\sin (t\cos^{-1}(-0.8)) \\
\cos(t\cos^{-1}(-0.8))-3\sin (t\cos^{-1}(-0.8))
\end{bmatrix} }
\end{align*}
$$
![[E21B Homework 11 2024-04-17 21.27.34.excalidraw]]
# Problem 5
## a)
$$
\begin{align*}
\mathbf{B}=\lambda\mathbf{I}+\mathbf{A},\mathbf{A}=\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\\
\mathbf{A}^{2}=[0]\\
\begin{array}{c|c}
t & \mathbf{B}^{t}  \\
\hline 1 & \lambda\mathbf{I}+\mathbf{A} \\
2 & \lambda^{2}\mathbf{I}+2\lambda\mathbf{A}+\mathbf{A}^{2}=\lambda^{2}\mathbf{I}+2\lambda\mathbf{A} \\
3 & \lambda^{3}\mathbf{I}+2\lambda^{2}\mathbf{A}+\lambda^{2}\mathbf{A}+2\lambda\mathbf{A}^{2}=\lambda^{3}\mathbf{I}+3\lambda^{2}\mathbf{A} \\
4 & \lambda^{4}\mathbf{I}+3\lambda^{3}\mathbf{A}+\lambda^{3}\mathbf{A}+3\lambda^{2}\mathbf{A}^{2}=\lambda^{4}\mathbf{I}+4\lambda^{3}\mathbf{A}
\end{array}\\
\implies \boxed{ \mathbf{B}^{t}=\lambda^{t}\mathbf{I}+t\lambda^{t-1}\mathbf{A} }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & 1 \\
-1 & 3
\end{bmatrix}, \vec{x}_{0}=\vec{e}_{1}=\begin{bmatrix}
1 \\
0
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & -1 \\
1 & \lambda-3
\end{vmatrix}\\
=\lambda^{2}-4\lambda+4=0\\
\implies \lambda=2\\
\implies \begin{bmatrix}
1 & -1 \\
1 & -1
\end{bmatrix}\vec{v}_{1}=0\implies\vec{v}_{1}=\begin{bmatrix}
1 \\
1
\end{bmatrix}\\
\begin{bmatrix}
1 & 1 \\
-1 & 3
\end{bmatrix}\vec{v}_{2}=\vec{v}_{1}+2\vec{v}_{2}\\
\implies v_{1}+v_{2}=1+2v_{1}\implies v_{2}=1+v_{1},\\
-v_{1}+3v_{2}=1+2v_{2}\implies v_{2}=1+v_{1}\\
\vec{v}_{2}=\begin{bmatrix}
0 \\
1
\end{bmatrix}\\
\implies \vec{x}(t) = \mathbf{A}^{t}\vec{x}_{0}=\mathbf{SJS}^{-1}\vec{e}_{1}=\begin{bmatrix}
1 & 0 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2 & 1 \\
0 & 2
\end{bmatrix}^{t}\begin{bmatrix}
1 & 0 \\
-1 & 1
\end{bmatrix}\begin{bmatrix}
1 \\
0
\end{bmatrix}\\
\begin{bmatrix}
2 & 1 \\
0 & 2
\end{bmatrix}^{t}=\begin{bmatrix}
2 & 0 \\
0 & 2
\end{bmatrix}^{t}+2^{t-1}t\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\\
=\begin{bmatrix}
2^{t} & t2^{t-1} \\
0 & 2^{t}
\end{bmatrix}\\
\implies \vec{x}(t)=\begin{bmatrix}
1 & 0 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2^{t} & t2^{t-1} \\
0 & 2^{t}
\end{bmatrix}\begin{bmatrix}
1 \\
-1
\end{bmatrix}\\
=\begin{bmatrix}
1 & 0 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
2^{t}-t2^{t-1} \\
-2^{t}
\end{bmatrix}=\boxed{ \begin{bmatrix}
2^{t}-t2^{t-1} \\
-t2^{t-1}
\end{bmatrix} }
\end{align*}
$$
# Problem 6
## a)
$$
\begin{align*}
\mathbf{B}=\lambda\mathbf{I}+\mathbf{A},\mathbf{A}=\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{bmatrix}\\
\mathbf{A}^{2}=\begin{bmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix},\mathbf{A}^{3}=[0]\\
\mathbf{B}^{2}=(\lambda\mathbf{I}+\mathbf{A})^{2}=\lambda^{2}\mathbf{I}+2\lambda\mathbf{A}+\mathbf{A}^{2}\\
\mathbf{B}^{3}=(\lambda\mathbf{I}+\mathbf{A})^{3}=\lambda^{3}\mathbf{I}+3\lambda^{2}\mathbf{A}+3\lambda\mathbf{A}^{2}\cancel{ +\mathbf{A}^{3} }\\
\mathbf{B}^{4}=(\lambda\mathbf{I}+\mathbf{A})^{4}=\lambda^{4}\mathbf{I}+4\lambda^{3}\mathbf{A}+6\lambda^{2}\mathbf{A}^{2}\cancel{ +4\lambda\mathbf{A}^{3}+\mathbf{A}^{4}B }\\
\mathbf{B}^{5}=(\lambda\mathbf{I}+\mathbf{A})^{5}=\lambda^{5}\mathbf{I}+5\lambda^{4} \mathbf{A}+10\lambda^{3}\mathbf{A}^{2}\cancel{ +\cdots }\\
\mathbf{B}^{t}=\lambda^{t}\mathbf{I}+t\lambda^{t-1}\mathbf{A}+T_{t-1}\lambda^{t-2}\\
T_{t-1}=\text{the }(t-1)\text{th triangle number}
=\begin{bmatrix}
t \\
2
\end{bmatrix}=\frac{t(t-1)}{2}\\
\implies \boxed{ \begin{array}{r}\mathbf{B}^{t}=\lambda^{t}\mathbf{I}+t\lambda^{t-1}\mathbf{A}+\frac{t(t-1)}{2}\lambda^{t-2}\\
=\begin{bmatrix}
\lambda^{t} & t\lambda^{t-1} & \frac{t(t-1)}{2}\lambda^{t-2} \\
0 & \lambda^{t} & t\lambda^{t-1} \\
0 & 0 & \lambda^{t}
\end{bmatrix}\end{array} }\\
\text{(follows coefficients of the }t\text{th row of Pascal's Triangle)}
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 1 & 1 \\
-3 & 3 & 2 \\
-2 & 1 & 3
\end{bmatrix},\vec{x}_{0}=\vec{e}_{1}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda & -1 & -1 \\
3 & \lambda-3 & -2 \\
2 & -1 & \lambda-3
\end{vmatrix}\\
=\lambda\begin{vmatrix}
\lambda-3 & -2 \\
-1 & \lambda-3
\end{vmatrix}+\begin{vmatrix}
3 & -2 \\
2 & \lambda-3
\end{vmatrix}-\begin{vmatrix}
3 & \lambda-3 \\
2 & -1
\end{vmatrix}\\
=\lambda(\lambda-3)^{2}-2\lambda+3(\lambda-3)+4+3+2(\lambda-3)\\
=\lambda^{3}-6\lambda^{2}+12\lambda-8=0\\
\begin{array}{c|cccc}
2 & 1 & -6 & 12 & -8 \\
 &  & 2 & -8 & 8 \\
\hline & 1 & -4 & 4 & 0
\end{array}\\
\implies (\lambda-2)(\lambda^{2}-4\lambda+4)=(\lambda-2)^{3}\\
\implies \lambda=2\\
\implies \begin{bmatrix}
2 & -1 & -1 \\
3 & -1 & -2 \\
2 & -1 & -1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}\\
\mathbf{A}\vec{v}_{2}=\vec{v}_{1}+\lambda\vec{v}_{2}\\
\implies \begin{bmatrix}
0 & 1 & 1 \\
-3 & 3 & 2 \\
-2 & 1 & 3
\end{bmatrix}\vec{v}_{2}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}+2\vec{v}_{2}\\
\implies \left[\begin{array}{ccc|c}
-2 & 1 & 1 & 1 \\
-3 & 1 & 2 & 1 \\
-2 & 1 & 1 & 1
\end{array}\right]\to\left[\begin{array}{ccc|c}
1 & 0 & -1 & 0 \\
0 & 1 & -1 & 1 \\
0 & 0 & 0 & 0
\end{array}\right]\\
\implies v_{1}=v_{3},v_{2}-v_{3}=1\\
\implies \vec{v}_{2}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\\
\mathbf{A}\vec{v}_{3}=\vec{v}_{2}+\lambda\vec{v}_{3}\\
\implies \begin{bmatrix}
0 & 1 & 1 \\
-3 & 3 & 2 \\
-2 & 1 & 3
\end{bmatrix}\vec{v}_{3}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}+2\vec{v}_{3}\\
\implies \left[\begin{array}{ccc|c}
-2 & 1 & 1 & 0 \\
-3 & 1 & 2 & 1 \\
-2 & 1 & 1 & 0
\end{array}\right]\to\left[\begin{array}{ccc|c}
1 & 0 & -1 & -1 \\
0 & 1 & -1 & -2 \\
0 & 0 & 0 & 0
\end{array}\right]\\
\implies v_{1}-v_{3}=-1,v_{2}-v_{3}=-2\\
\implies \vec{v}_{3}=\begin{bmatrix}
1 \\
0 \\
2
\end{bmatrix}\\
\implies \mathbf{S}=\begin{bmatrix}
1 & 0 & 1 \\
1 & 1 & 0 \\
1 & 0 & 2
\end{bmatrix}\implies \mathbf{S}^{-1}=\begin{bmatrix}
2 & 0 & -1 \\
-2 & 1 & 1 \\
-1 & 0 & 1
\end{bmatrix}\\
\mathbf{J}=\begin{bmatrix}
2 & 1 & 0 \\
0 & 2 & 1 \\
0 & 0 & 2
\end{bmatrix}\\
\mathbf{A}^{t}\vec{x}_{0}=\mathbf{SJ}^{t}\mathbf{S}^{-1}\vec{e}_{1}\\
=\begin{bmatrix}
1 & 0 & 1 \\
1 & 1 & 0 \\
1 & 0 & 2
\end{bmatrix}\begin{bmatrix}
2^{t} & t2^{t-1} & \frac{t(t-1)}{2}2^{t-2} \\
0 & 2^{t} & t2^{t-1} \\
0 & 0 & 2^{t}
\end{bmatrix}\begin{bmatrix}
2 & 0 & -1 \\
-2 & 1 & 1 \\
-1 & 0 & 1
\end{bmatrix}\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\\
=\begin{bmatrix}
2^{t} & t2^{t-1} & \frac{t(t-1)}{2}2^{t-2}+2^{t} \\
2^{t} & 2^{t}+t2^{t-1} & \frac{t(t-1)}{2}2^{t-2}+t2^{t-1} \\
2^{t} & t2^{t-1} & \frac{t(t-1)}{2}2^{t-2}+2\cdot2^{t}
\end{bmatrix}\begin{bmatrix}
2 \\
-2 \\
-1
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
2^{t}-t2^{t}-t(t-1)2^{t-3} \\
-3t2^{t-1}-t(t-1)2^{t-3} \\
-t2^{t}-t(t-1)2^{t-3}
\end{bmatrix} }
\end{align*}
$$
# Problem 7
## a)
$$
\begin{align*}
T(\vec{x})=\mathbf{A}\vec{x}+\vec{b},\lambda\neq1\\
T(\vec{v})=\vec{v}\implies \mathbf{A}\vec{v}+\vec{b}=\vec{v}\\
\implies \vec{b}=(\mathbf{I}-\mathbf{A})\vec{v}\\
\lambda\neq1\implies \ker(\mathbf{I}-\mathbf{A})=\{ 0 \}\\
\implies (\mathbf{I}-\mathbf{A})\text{ invertible}\implies \boxed{ \vec{v}=(\mathbf{I}-\mathbf{A})^{-1}\vec{b} }
\end{align*}
$$
## b)
$$
\begin{align*}
\vec{x}(t+1)=T(\vec{x}(t))\\
\implies \vec{x}(t+2)=\mathbf{A}(\mathbf{A}\vec{x}(t)+\vec{b})+\vec{b}=\mathbf{A}^{2}\vec{x}(t)+(\mathbf{A}+\mathbf{I})\vec{b}\\
\vec{x}(t+3)=\mathbf{A}(\mathbf{A}^{2}\vec{x}(t)+(\mathbf{A}+\mathbf{I})\vec{b})+\vec{b}=\mathbf{A}^{3}\vec{x}(t)+(\mathbf{A}^{2}+\mathbf{A}+\mathbf{I})\vec{b}\\
\implies \vec{x}(t)=\mathbf{A}^{t}\vec{x}_{0}+(\mathbf{I}+\mathbf{A}+\cdots+\mathbf{A}^{t-1})\vec{b}\\
(\mathbf{I}-\mathbf{A})(\mathbf{I}+\mathbf{A}+\cdots+\mathbf{A}^{t-1})=\mathbf{I}+\mathbf{A}+\cdots+\mathbf{A}^{t-1}-\mathbf{A}-\cdots-\mathbf{A}^{t}\\
=\mathbf{I}-\mathbf{A}^{t}\\
\implies \vec{x}(t)=\mathbf{A}^{t}\vec{x}_{0}+(\mathbf{I}-\mathbf{A})^{-1}(\mathbf{I}-\mathbf{A}^{t})\vec{b}\\
\lim_{ t \to \infty } \vec{x}(t)=\vec{v}=(\mathbf{I}-\mathbf{A})^{-1}\vec{b}\implies \lim_{ t \to \infty } \mathbf{A}^{t}=[0]\\
\implies \forall\lambda,|\lambda|<1\\
\implies \fbox{ The equlibrium $\vec{v}$ is stable when all eigenvalues have a magnitude $<1$ }
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
6 & 2 \\
2 & 3
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-6 & -2 \\
-2 & \lambda-3
\end{vmatrix}=\lambda^{2}-9\lambda+14=0\\
\implies \lambda_{1}=2,\lambda_{2}=7\\
\lambda_{1}\implies \begin{bmatrix}
-4 & -2 \\
-2 & -1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies \vec{v}_{1}=\frac{1}{\sqrt{5}}\begin{bmatrix}
1 \\
-2
\end{bmatrix}\\
\lambda_{2}\implies \begin{bmatrix}
1 & -2 \\
-2 & 4
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
1
\end{bmatrix}\\
\vec{v}_{1}\cdot\vec{v}_{2}=\frac{2}{5}-\frac{2}{5}=0\\
\implies \boxed{ \mathcal{B}=\left\{ \frac{1}{\sqrt{5}}\begin{bmatrix}
1 \\
-2
\end{bmatrix}, \frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda & -1 & -1 \\
-1 & \lambda & -1 \\
-1 & -1 & \lambda
\end{vmatrix}\\
=\lambda\begin{vmatrix}
\lambda & -1 \\
-1 & \lambda
\end{vmatrix}+\begin{vmatrix}
-1 & -1 \\
-1 & \lambda
\end{vmatrix}-\begin{vmatrix}
-1 & \lambda \\
-1 & -1
\end{vmatrix}\\
=\lambda^{3}-\lambda-\lambda-1-1-\lambda=\lambda^{3}-3\lambda-2\\
\begin{array}{c|cccc}
-1 & 1 & 0 & -3 & -2 \\
 &  & -1 & 1 & 2 \\
\hline & 1 & -1 & -2 & 0
\end{array}\\
=(\lambda+1)(\lambda^{2}-\lambda-2)=(\lambda+1)^{2}(\lambda-2)=0\\
\implies \lambda_{1,2}=-1,\lambda_{3}=2\\
\lambda_{1,2}\implies \begin{bmatrix}
-1 & -1 & -1 \\
-1 & -1 & -1 \\
-1 & -1 & -1
\end{bmatrix}\vec{v}_{1,2}=\vec{0}\implies \vec{v}_{1,2}=\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}t+\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}s\\
\implies \vec{v}_{1}=\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}\\
\lambda_{3}\implies \begin{bmatrix}
2 & -1 & -1 \\
-1 & 2 & -1 \\
-1 & -1 & 2
\end{bmatrix}\vec{v}_{3}=\vec{0}\implies \vec{v}_{3}=\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}\\
\vec{u}_{1}=\frac{1}{\sqrt{2}}\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix},\\
\vec{v}_{2}-\text{proj}_{\vec{u}_{1}}\vec{v}_{2}=\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}-\frac{1}{2}\left( \begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}\cdot\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix} \right)\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}=\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}-\frac{1}{2}\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}=\begin{bmatrix}
-\frac{1}{2} \\
1 \\
-\frac{1}{2}
\end{bmatrix}\\
\implies \vec{u}_{2}=\frac{1}{\sqrt{\frac{3}{2}}}\begin{bmatrix}
-\frac{1}{2} \\
1 \\
-\frac{1}{2}
\end{bmatrix}=\frac{\sqrt{6}}{6}\begin{bmatrix}
-1 \\
2 \\
-1
\end{bmatrix}\\
\vec{v}_{3}\cdot\vec{u}_{1},\vec{v}_{3}\cdot\vec{u}_{2}=0\implies \vec{u}_{3}=\frac{1}{\sqrt{3}}\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} \\
\implies \boxed{ \mathcal{B}=\left\{ \frac{1}{\sqrt{ 2 }}\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}, \frac{1}{\sqrt{ 6 }}\begin{bmatrix}
-1 \\
2 \\
-1
\end{bmatrix}, \frac{1}{\sqrt{3}}\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 10
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 2 & 2 \\
2 & 1 & 0 \\
2 & 0 & -1
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda & -2 & -2 \\
-2 & \lambda-1 & 0 \\
-2 & 0 & \lambda+1
\end{vmatrix}\\
=-2\begin{vmatrix}
-2 & \lambda-1 \\
-2 & 0
\end{vmatrix}+(\lambda+1)\begin{vmatrix}
\lambda & -2 \\
-2 & \lambda-1
\end{vmatrix}\\
=-4\lambda+4+\lambda^{3}-\lambda-4\lambda-4=\lambda^{3}-9\lambda=0\\
\implies \lambda_{1}=0,\lambda_{2}=-3,\lambda_{3}=3\\
\lambda_{1}\implies \begin{bmatrix}
0 & -2 & -2 \\
-2 & -1 & 0 \\
-2 & 0 & 1
\end{bmatrix}\vec{v}_{1}=\vec{0}\implies\vec{v}_{1}=\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}\\
\lambda_{2}\implies \begin{bmatrix}
-3 & -2 & -2 \\
-2 & -4 & 0 \\
-2 & 0 & -2
\end{bmatrix}\vec{v}_{2}=\vec{0}\implies \vec{v}_{2}=\begin{bmatrix}
-2 \\
1 \\
2
\end{bmatrix}\\
\lambda_{3}\implies \begin{bmatrix}
3 & -2 & -2 \\
-2 & 2 & 0 \\
-2 & 0 & 4
\end{bmatrix}\vec{v}_{3}=\vec{0}\implies \vec{v}_{3}=\begin{bmatrix}
2 \\
2 \\
1
\end{bmatrix}\\
\vec{u}_{1}=\frac{1}{\sqrt{5}}\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}\\
\vec{v}_{2}\cdot\vec{u}_{1}=0\implies \vec{u}_{2}=\frac{1}{\sqrt{5}}\begin{bmatrix}
-2 \\
1 \\
2
\end{bmatrix}\\
\vec{v}_{3}\cdot\vec{u}_{2},\vec{v}_{3}\cdot\vec{u}_{1}=0\implies \vec{u}_{3}=\frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
2 \\
1
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \frac{1}{\sqrt{5}}\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}, \frac{1}{\sqrt{5}}\begin{bmatrix}
-2 \\
1 \\
2
\end{bmatrix}, \frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
2 \\
1
\end{bmatrix} \right\}  }
\end{align*}
$$
# Problem 11
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
1 & -2 & 2 \\
-2 & 4 & -4 \\
2 & -4 & 4
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda-1 & 2 & -2 \\
2 & \lambda-4 & 4 \\
-2 & 4 & \lambda-4
\end{vmatrix}\\
=(\lambda-1)\begin{vmatrix}
\lambda-4 & 4 \\
4 & \lambda-4
\end{vmatrix}-2\begin{vmatrix}
2 & 4 \\
-2 & \lambda-4
\end{vmatrix}-2\begin{vmatrix}
2 & \lambda-4 \\
-2 & 4
\end{vmatrix}\\
=(\lambda-1)(\lambda-4)^{2}-16\lambda+16-4\lambda+16-16-16-4\lambda+16\\
=\lambda^{3}-9\lambda^{2}=0\\
\implies \lambda_{1,2}=0,\lambda_{3}=9\\
\lambda_{1,2}\implies \begin{bmatrix}
-1 & 2 & -2 \\
2 & -4 & 4 \\
-2 & 4 & -4
\end{bmatrix}\vec{v}_{1,2}=\vec{0}\implies \vec{v}_{1,2}=\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix}t+\begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}s\\
\implies \vec{v}_{1}=\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}\\
\lambda_{3}\implies \begin{bmatrix}
8 & 2 & -2 \\
2 & 5 & 4 \\
-2 & 4 & 5
\end{bmatrix}\vec{v}_{3}=\vec{0}\implies \vec{v}_{3}=\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}\\
\vec{u}_{1}=\frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix}\\
\vec{v}_{2}-\text{proj}_{\vec{u}_{1}}\vec{v}_{2}=\begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}-\frac{1}{5}\left( \begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}\cdot\begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix} \right) \begin{bmatrix}
2 \\
1 \\
0
\end{bmatrix}=-\frac{1}{5}\begin{bmatrix}
-2 \\
4 \\
5
\end{bmatrix}\\
\implies \vec{u}_{2}=\frac{1}{3\sqrt{5}}\begin{bmatrix}
-2 \\
4 \\
5
\end{bmatrix}\\
\vec{v}_{3}\cdot\vec{u}_{2}=0\implies \vec{u}_{3}=\frac{1}{3}\begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}\\
\implies \boxed{ \mathbf{S}=\begin{bmatrix}
\frac{2}{\sqrt{5}} & -\frac{2}{3\sqrt{5}} & \frac{1}{3} \\
\frac{1}{\sqrt{5}} & \frac{4}{3\sqrt{5}} & -\frac{2}{3} \\
0 & \frac{5}{3\sqrt{5}} & \frac{2}{3}
\end{bmatrix} }\\
\boxed{ \mathbf{D}=\begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 9
\end{bmatrix} }
\end{align*}
$$
# Problem 12
## a)
$$
\begin{align*}
\vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
2
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix},\vec{v}_{3}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\\
\implies \vec{u}_{1}=\frac{1}{\sqrt{5}}\begin{bmatrix}
1 \\
0 \\
2
\end{bmatrix}\\
\vec{v}_{2}-\text{proj}_{\vec{u}_{1}}\vec{v}_{2}=\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}-\frac{1}{5}\left( \begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}\cdot\begin{bmatrix}
1 \\
0 \\
2
\end{bmatrix} \right) \begin{bmatrix}
1 \\
0 \\
2
\end{bmatrix}=\frac{2}{5}\begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}\\
\implies \vec{u}_{2}=\frac{1}{\sqrt{5}}\begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}\\
\vec{v}_{3}\cdot \vec{u}_{1},\vec{v}\cdot\vec{u}_{2}=0\implies \vec{u}_{3}=\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\\
\implies \boxed{ \mathcal{B}=\left\{ \frac{1}{\sqrt{5}}\begin{bmatrix}
1 \\
0 \\
2
\end{bmatrix}, \frac{1}{\sqrt{5}} \begin{bmatrix}
2 \\
0 \\
-1
\end{bmatrix}, \begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}\right\} }
\end{align*}
$$
## b)
$$
\begin{align*}
\mathbf{B}=\begin{bmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{bmatrix}
\end{align*}
$$
## c)
$$
\begin{align*}
\mathbf{A}=\mathbf{SB}\mathbf{S}^{-1}=\mathbf{SB}^{\text{T}}\\
=\begin{bmatrix}
\frac{1}{\sqrt{5}} & \frac{2}{\sqrt{5}} & 0 \\
0 & 0 & 1 \\
\frac{2}{\sqrt{5}} & -\frac{1}{\sqrt{5}} & 0
\end{bmatrix}\begin{bmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{bmatrix}\begin{bmatrix}
\frac{1}{\sqrt{5}} & \frac{2}{\sqrt{5}} & 0 \\
0 & 0 & 1 \\
\frac{2}{\sqrt{5}} & -\frac{1}{\sqrt{5}} & 0
\end{bmatrix}^{\text{T}}\\
=\begin{bmatrix}
\frac{1}{\sqrt{5}} & -\frac{2}{\sqrt{5}} & 0 \\
0 & 0 & -1 \\
\frac{2}{\sqrt{5}} & \frac{1}{\sqrt{5}} & 0
\end{bmatrix}\begin{bmatrix}
\frac{1}{\sqrt{5}} & 0 & \frac{2}{\sqrt{5}} \\
\frac{2}{\sqrt{5}} & 0 & -\frac{1}{\sqrt{5}} \\
0 & 1 & 0
\end{bmatrix}\\
=\boxed{ \begin{bmatrix}
-\frac{3}{5} & 0 & \frac{4}{5} \\
0 & -1 & 0 \\
\frac{4}{5} & 0 & \frac{3}{5}
\end{bmatrix} }
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\mathbf{A}=\mathbf{SDS}^{-1}\\
\mathbf{A}^{-1}=(\mathbf{SDS}^{-1})^{-1}=(\mathbf{S}^{-1})^{-1}\mathbf{D}^{-1}\mathbf{S}^{-1}=\mathbf{SD}^{-1}\mathbf{S}^{-1}\\
\mathbf{A}\text{ is invertible}\implies \ker\mathbf{A}=\{ \vec{0} \}\implies \lambda\neq0\\
\mathbf{D}\text{'s entries are eigenvalues, with none 0}\implies \det\mathbf{D}\neq0\\
\implies \mathbf{D}\text{ is invertible, so }\boxed{ \mathbf{A}^{-1}\text{ is orthogonally diagonalizable as }\mathbf{SD}^{-1}\mathbf{S}^{-1} }
\end{align*}
$$
# Problem 14
## a)
$$
\begin{align*}
RREF(\mathbf{A})=\begin{bmatrix}
1 & 1 & 1 & 1 & 1 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}\\
\implies\ker\mathbf{A}\neq\{ \vec{0} \}\implies \boxed{ \lambda_{1}=0 }\\
\mathbf{A}\text{ is symmetric}\implies \mathbf{A}\text{ is orthogonally diagonalizable}\\
\implies \text{It is possible to find an eigenbasis}\\
\implies AM=GM\\
AM(\lambda_{1})=GM(\lambda_{1})=\text{nullity }\mathbf{A}\\
\text{rank}\,\mathbf{A}=1\implies \text{nullity}\,\mathbf{A}=4\\
\implies \boxed{ AM(\lambda_{1})=GM(\lambda_{1})=4 }\\
\mathrm{tr}\,\mathbf{A}=\lambda_{1}\cdot4+\lambda_{2}=5\implies\boxed{ \lambda_{2}=5 }\\
\boxed{ AM(\lambda_{2})=GM(\lambda_{2})=1 }
\end{align*}
$$
## b)
$$
\begin{align*}
RREF\begin{bmatrix}
3 & 1 & 1 & 1 & 1 \\
1 & 3 & 1 & 1 & 1 \\
1 & 1 & 3 & 1 & 1 \\
1 & 1 & 1 & 3 & 1 \\
1 & 1 & 1 & 1 & 3
\end{bmatrix}=\mathbf{I}\implies \ker\mathbf{B}=\{ \vec{0} \}\\
\mathbf{B}\begin{bmatrix}
1 \\
1 \\
1 \\
1 \\
1
\end{bmatrix}=\begin{bmatrix}
7 \\
7 \\
7 \\
7 \\
7
\end{bmatrix}\implies \boxed{ \lambda_{1}=7 }\\
\boxed{ \lambda_{2}=2 }\\
\dim\ker(2\mathbf{I}-\mathbf{A})=4\\
\implies \boxed{ AM(\lambda_{2})=GM(\lambda_{2})=4 }\\
\implies \boxed{ AM(\lambda_{1})=GM(\lambda_{1})=1 }
\end{align*}
$$
## c)
$$
\begin{align*}
\det\mathbf{B}=\lambda_{1}\cdot\lambda_{2}^{4}=7\cdot2^{4}=7\cdot16=\boxed{ 112 }
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\mathbf{A}=\begin{bmatrix}
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
1 & 0 & 0 & 0
\end{bmatrix}\\
\det(\mathbf{I}\lambda-\mathbf{A})=\begin{vmatrix}
\lambda & 0 & 0 & -1 \\
0 & \lambda & -1 & 0 \\
0 & -1 & \lambda & 0 \\
-1 & 0 & 0 & \lambda
\end{vmatrix}\\
=\lambda\begin{vmatrix}
\lambda & -1 & 0 \\
-1 & \lambda & 0 \\
0 & 0 & \lambda
\end{vmatrix}+\begin{vmatrix}
0 & \lambda & -1 \\
0 & -1 & \lambda \\
-1 & 0 & 0
\end{vmatrix}\\
=\lambda^{2}\begin{vmatrix}
\lambda & -1 \\
-1 & \lambda
\end{vmatrix}-\begin{vmatrix}
\lambda & -1 \\
-1 & \lambda
\end{vmatrix}=(\lambda^{2}-1)(\lambda^{2}-1)=0\\
\implies \lambda_{1,2}=1,\lambda_{3,4}=-1\\
\lambda_{1,2}\implies \begin{bmatrix}
1 & 0 & 0 & -1 \\
0 & 1 & -1 & 0 \\
0 & -1 & 1 & 0 \\
-1 & 0 & 0 & 1
\end{bmatrix}\vec{v}_{1,2}=\vec{0}\implies \vec{v}_{1,2}=\begin{bmatrix}
1 \\
0 \\
0 \\
1
\end{bmatrix}t+\begin{bmatrix}
0 \\
1 \\
1 \\
0
\end{bmatrix}s\\
\implies \vec{v}_{1}=\begin{bmatrix}
1 \\
0 \\
0 \\
1
\end{bmatrix},\vec{v}_{2}=\begin{bmatrix}
0 \\
1 \\
1 \\
0
\end{bmatrix}\\
\lambda_{3,4}\implies \begin{bmatrix}
-1 & 0 & 0 & -1 \\
0 & -1 & -1 & 0 \\
0 & -1 & -1 & 0 \\
-1 & 0 & 0 & -1
\end{bmatrix}\vec{v}_{3,4}=\vec{0}\implies \vec{v}_{3}=\begin{bmatrix}
1 \\
0 \\
0 \\
-1
\end{bmatrix},\vec{v}_{4}=\begin{bmatrix}
0 \\
1 \\
-1 \\
0
\end{bmatrix}\\
\text{Already orthogonal}\implies \boxed{ \mathcal{B}=\left\{ \frac{1}{\sqrt{2}}\begin{bmatrix}
1 \\
0 \\
0 \\
1
\end{bmatrix}, \frac{1}{\sqrt{2}}\begin{bmatrix}
0 \\
1 \\
1 \\
0
\end{bmatrix}, \frac{1}{\sqrt{2}}\begin{bmatrix}
1 \\
0 \\
0 \\
-1
\end{bmatrix}, \frac{1}{\sqrt{2}}\begin{bmatrix}
0 \\
1 \\
-1 \\
0
\end{bmatrix} \right\}  }
\end{align*}
$$
