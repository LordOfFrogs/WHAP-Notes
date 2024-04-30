---
tags:
  - math/calc
due: 2023-10-20
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS6-2023.pdf)
# Problem 1
$$
\begin{align*}
\ddot{x}+x=t^{2}+\cos(2t-1)\\
x=x_{1}+x_{2}\\
T(x_{1})=t^{2},T(x_{2})=\cos(2t-1)\\
x_{1}=at^{2}+b\\
2a+at^{2}+b=t^{2}\\
\implies x_{1}=t^{2}-2\\
x_{2}=a\cos(2t-1)\\
\implies\dot{x}_{2}=-2a\sin(2t-1)\\
\implies\ddot{x}_{2}=-4a\cos(2t-1)\\
-4a\cos(2t-1)+a\cos(2t-1)=\cos(2t-1)\\
\implies a=-\frac{1}{3}\\
\implies \fbox{$x_{p}=t^{2}-2-\frac{1}{3}\cos(2t-1)$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\ddot{x}-2\dot{x}+4x=e^{t}\cos t\\
p(s)=s^{2}-2s+4\\
p(s+1)=s^{2}+3\\
[p(D+I)]u(t)=\cos t\\
\ddot{u}+3u=\cos t\\
u=a\cos t\implies\ddot{u}=-a\cos t\\
-a\cos t+3a\cos t=\cos t\\
\implies a=\frac{1}{2}\\
\implies \fbox{$x_{p}=\frac{e^{t}}{2}\cos t$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\ddot{x}-6\dot{x}+9x=4e^{3t}\\
p(s)=s^{2}-6s+9\\
p(s+3)=s^{2}\\
[p(D+3I)]u=4\\
\ddot{u}=4\\
\implies u_{p}=2t^{2}\\
\implies \fbox{$x_{p}=2t^{2}e^{3t}$}
\end{align*}
$$
# Problem 4
$$
\ddot{x}+9x=e^{-t}(t^{2}+1)
$$
## a)
$$
\begin{align*}
x_{p}=e^{-t}(at^{2}+bt+c)\\
\dot{x}=e^{-t}(2at+b)-e^{-t}(at^{2}+bt+c)\\
=e^{-t}(-at^{2}+2at-bt+b-c)\\
\ddot{x}=e^{-t}(-2at+2a-b)-e^{-t}(-at^{2}+2at-bt+b-c)\\
=e^{-t}(at^{2}-4at+bt+2a-2b+c)\\
e^{-t}(at^{2}-4at+bt+2a-2b+c)+9e^{-t}(at^{2}+bt+c)=e^{-t}(t^{2}+1)\\
\implies e^{-t}(10at^{2}+(10b-4a)t+(2a+10c-2b))=e^{-t}(t^{2}+1)\\
\implies \begin{cases}
10a=1 \\
10b-4a=0 \\
2a+10c-2b=1
\end{cases}\\
\implies a=\frac{1}{10},b=\frac{1}{25},c=\frac{11}{125}\\
\implies \fbox{$x_{p}=e^{-t}\left( \frac{1}{10}t^{2}+\frac{1}{25}t+\frac{11}{125} \right)$}
\end{align*}
$$
## b)
$$
\begin{align*}
p(s)=s^{2}+9\\
p(s-1)=s^{2}-2s+10\\
[p(D-I)]u=t^{2}+1\\
\ddot{u}-2\dot{u}+10u=t^{2}+1\\
u_{p}=at^{2}+bt+c\\
\dot{u}=2at+b,\ddot{u}=2a\\
2a-2(2at+b)+10(at^{2}+bt+c)=t^{2}+1\\
\implies 10at^{2}+(10b-4a)t+(2a+10c-2b)=t^{2}+1\\
\text{Same system as part a}\\
\implies u_{p}=\frac{1}{10}t^{2}+\frac{1}{25}t+\frac{11}{125}\\
\implies \fbox{$x_{p}=e^{-t}\left( \frac{1}{10}t^{2}+\frac{1}{25}t+\frac{11}{125} \right)$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\ddot{x}+9x=2\sec3t\\
p(s)=s^{2}+9=0\\
\implies s=\pm3i\\
\implies x_{h}=c_{1}e^{3it}+c_{2}e^{-3it}\\
=d_{1}\cos3t+d_{2}\sin3t\\
x_{p}=v_{1}\cos3t+v_{2}\sin3t\\
\begin{bmatrix}
\cos3t & \sin3t \\
-3\sin3t & 3\cos3t
\end{bmatrix}
\begin{bmatrix}
\dot{v}_{1} \\
\dot{v}_{2}
\end{bmatrix}
=\begin{bmatrix}
0 \\
2\sec3t
\end{bmatrix}\\
W(t)=3\cos^{2}3t+3\sin^{2}3t=3\\
\implies \dot{v}_{1}=-\frac{2}{3}\tan3t\\
\implies v_{1}=\frac{2}{9}\ln(\cos3t)\\
\implies \dot{v}_{2}=\frac{2}{3}\\
\implies v_{2}=\frac{2}{3}t\\
\implies \fbox{$x_{p}=\frac{2}{9}\cos3t\ln(\cos3t)+\frac{2}{3}t\sin3t$}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\ddot{x}+9x=5e^{-t}(t^{2}+1)+12\sec3t\\
x_{1}=e^{-t}\left( \frac{1}{10}t^{2}+\frac{1}{25}t+\frac{11}{125} \right), T(x_{1})=e^{-t}(t^{2}+1)\\
x_{2}=\frac{2}{9}\cos3t\ln(\cos3t)+\frac{2}{3}t\sin3t, T(x_{2})=2\sec3t\\
T(x_{p})=5T(x_{1})+6T(x_{2})\implies x_{p}=5x_{1}+6x_{2}\\
\implies \fbox{$x_{p}=e^{-t}\left( \frac{1}{2}t^{2}+\frac{1}{5}t+\frac{11}{25} \right)+\frac{4}{3}\cos3t\ln(\cos3t)+4t\sin3t$}
\end{align*}
$$
# Problem 7
$$
\ddot{x}+2\dot{x}+x=e^{-t}\ln t
$$
## a)
$$
\begin{align*}
p(s)=s^{2}+2s+1\\
p(s-1)=s^{2}\\
[p(D-I)]u=\ln t\\
\ddot{u}=\ln t\\
\implies \dot{u}=t\ln t-t\\
\implies u_{p}=\frac{t^{2}}{2}\ln t-\frac{3}{4}t^{2}\\
\implies \fbox{$x_{p}=\frac{t^{2}}{4}e^{-t}(2\ln t-3)$}
\end{align*}
$$
## b)
$$
\begin{align*}
p(s)=s^{2}+2s+1=0\\
\implies s=-1 \text{ (double root)}\\
\implies x_{h}=c_{1}e^{-t}+c_{2}te^{-t}\\
x_{p}=v_{1}e^{-t}+v_{2}te^{-t}\\
\begin{bmatrix}
e^{-t} & te^{-t} \\
-e^{-t} & e^{-t}-te^{-t}
\end{bmatrix}\\
W(t)=e^{-t}(e^{-t}-te^{-t})+e^{-t}(te^{-t})=e^{-2t}\neq0,\ t\in \mathbb{R}\\
\implies \dot{v}_{1}=-\frac{(te^{-t})(e^{-t}\ln t)}{e^{-2t}}=-t\ln t\\
\implies v_{1}=\frac{1}{4}t^{2}(1-2\ln t)\\
\implies \dot{v}_{2}=\frac{(e^{-t})(e^{-t}\ln t)}{e^{-2t}}=\ln t\\
\implies v_{2}=t\ln t-t\\
\implies x_{p}=\frac{t^{2}}{4}e^{-t}(1-2\ln t)+t^{2}e^{-t}\ln t-t^{2}e^{-t}\\
\implies \fbox{$x_{p}=\frac{t^{2}}{4}e^{-t}(2\ln t-3)$}
\end{align*}
$$
# Problem 8
$$
t^{2}\ddot{x}+t\dot{x}-x=72t^{5},x(1)=10,\dot{x}(1)=12
$$
## a)
$$
\begin{align*}
x=t^{n}\implies\dot{x}=nt^{n-1}\implies\ddot{x}=n(n-1)t^{n-2}\\
n(n-1)t^{n}+nt^{n}-t^{n}=0\\
t^{n}(n^{2}-1)=0\\
\implies n=\pm1\\
\implies \fbox{$\left\{t, \frac{1}{t}\right\}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\begin{bmatrix}
t & \frac{1}{t} \\
1 & -\frac{1}{t^{2}}
\end{bmatrix}\\
W(t)=-\frac{1}{t}-\frac{1}{t}=-\frac{2}{t}\neq0\\
\implies \fbox{$t\neq0$}
\end{align*}
$$
## c)
$$
x_{h}=c_{1}t+\frac{c_{2}}{t}
$$
## d)
$$
\begin{align*}
x_{p}=v_{1}t+\frac{v_{2}}{t}\\
W(t)=-\frac{2}{t}\\
R(t)=72t^{3}\\
\implies \dot{v}_{1}=36t^{3}\implies v_{1}=9t^{4}\\
\implies \dot{v}_{2}=-36t^{5}\implies v_{2}=-6t^{6}\\
\implies x_{p}=9t^{5}-6t^{5}\\
\implies \fbox{$x_{p}=3t^{5}$}
\end{align*}
$$
## e)
$$
x=c_{1}t+\frac{c_{2}}{t}+3t^{5}
$$
## f)
$$
\begin{align*}
x(1)=10\implies10=c_{1}+c_{2}+3\\
\dot{x}=c_{1}-\frac{c_{2}}{t^{2}}+15t^{4}\\
\dot{x}(1)=12\implies12=c_{1}-c_{2}+15\\
\implies c_{1}=2,c_{2}=5\\
\implies \fbox{$x=2t+\frac{5}{t}+3t^{5}$}
\end{align*}
$$