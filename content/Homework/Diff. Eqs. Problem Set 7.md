---
tags:
  - math/calc
due: 2023-10-27
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS7-2023.pdf)
# Problem 1
## a)
$$
\begin{align*}
\sin\left( \frac{\pi t}{3} \right)=\sin\left( \frac{\pi t}{3} +2\pi\right)\\
=\sin\left( \frac{\pi (t+6)}{3} \right)\implies \fbox{$T=6$}
\end{align*}
$$
## b)
$$
\begin{align*}
|\sin( t )|=|-\sin(t+\pi)|=|\sin(t+\pi)|\\
\implies \fbox{$T=\pi$}
\end{align*}
$$
## c)
$$
\begin{align*}
\cos^{2} 3t=\cos^{2}(3t+\pi)=\cos^{2}\left( 3\left( t+\frac{\pi}{3} \right) \right)\\
\implies \fbox{$T=\frac{\pi}{3}$}
\end{align*}
$$
# Problem 2
## a)
$$
\begin{align*}
f(t)=\begin{Bmatrix}
0 & -\pi<t\leq0 \\
1 & 0<t\leq\pi
\end{Bmatrix}\\
a_{0}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\,dt=1\\
a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos nt\,dt\\
=\frac{1}{\pi}\int_{0}^{\pi} \cos nt\,dt=\frac{1}{n\pi}\sin(\pi n)=0\\
b_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin nt\,dt= \frac{1}{\pi}\int_{0}^{\pi}\sin nt\,dt\\
=-\frac{1}{n\pi}\cos nt\biggr|_{0}^{\pi}=\frac{1-\cos(n\pi)}{n\pi}=\begin{Bmatrix}
0 & n\text{ even} \\
\frac{2}{n\pi} & n\text{ odd}
\end{Bmatrix}\\
\implies \fbox{$f(t)\sim \frac{1}{2}+\frac{2}{\pi}\sum\limits_{n\text{ odd}} \frac{\sin nt}{n}$}
\end{align*}
$$
## b)
$$
\begin{align*}
sq(t)=\begin{Bmatrix}
-1 & t\in[-\pi,0) \\
1 & t\in[0,\pi)
\end{Bmatrix}\\
sq(t)\sim \frac{4}{\pi}\sum_{n\text{ odd}}\frac{\sin nt}{n}\\
f(t)=\frac{sq(t)}{2}+\frac{1}{2}\\
\implies \fbox{$f(t)\sim \frac{1}{2}+\frac{2}{\pi}\sum_{n\text{ odd}} \frac{\sin nt}{n}$}
\end{align*}
$$
# Problem 3
## a)
$$
\begin{align*}
f(t)=|t|\quad(-\pi,\pi)\\
f'(t)=\begin{Bmatrix}
-1 & (-\pi,0) \\
1 & (0,\pi)
\end{Bmatrix}\\
=sq(t)\\
\implies f'(t)\sim\frac{4}{\pi}\sum_{n\text{ odd}}\frac{\sin nt}{n}\\
\implies f(t)\sim-\frac{4}{\pi}\sum_{n\text{ odd}}\frac{\cos nt}{n^{2}}+C\\
C=\frac{a_{0}}{2}=\frac{1}{2\pi}\int_{-\pi}^\pi|t|\,dt=\frac{\pi}{2}\\
\implies \fbox{$f(t)\sim \frac{\pi}{2}-\frac{4}{\pi}\sum_{n\text{ odd}}\frac{\cos nt}{n^{2}}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\frac{a_{0}^{2}}{2}+a_{1}^{2}+b_{1}^{2}+a_{2}^{2}+b_{2}^{2}+\cdots=\|f\|^{2}\\
\|f\|^{2}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)^{2}\,dt=\frac{1}{\pi}\int_{-\pi}^{\pi} t^{2}\,dt=\frac{t^{3}}{3\pi}\biggr|_{-\pi}^{\pi}=\frac{2\pi^{2}}{3}\\
\frac{a_{0}^{2}}{2}+a_{1}^{2}+b_{1}^{2}+a_{2}^{2}+b_{2}^{2}+\cdots=\frac{\pi^{2}}{2}+\frac{16}{\pi^{2}}+\frac{16}{9\pi^{2}}+\frac{1}{\pi^{2}}+\frac{16}{(2n-1)^{4}\pi^{2}}\\
=\frac{\pi^{2}}{2}+\frac{16}{\pi^{2}}\sum_{n\text{ odd}} \frac{1}{n^{4}}\\
\implies \frac{\pi^{2}}{2}+\frac{16}{\pi^{2}}\sum_{n\text{ odd}} \frac{1}{n^{4}}=\frac{2\pi^{2}}{3}\\
\implies \fbox{$\sum_{n\text{ odd}} \frac{1}{n^{4}}=\frac{\pi^{4}}{96}$}
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
2\sin\left( t-\frac{\pi}{3} \right)\\
a_{0}=\frac{1}{\pi}\int_{-\pi}^{\pi}2\sin\left( t-\frac{\pi}{3} \right)\,dt=-\frac{2}{\pi}\cos\left( t-\frac{\pi}{3} \right)\biggr|_{-\pi}^{\pi}\\
=\frac{1}{\pi}-\frac{1}{\pi}=0\\
a_{1}=\frac{2}{\pi}\int_{-\pi}^{\pi}\sin\left( t-\frac{\pi}{3} \right)\cos t\,dt=-\sqrt{3}\\
a_{n}=\frac{2}{\pi}\int_{-\pi}^{\pi}\sin\left( t-\frac{\pi}{3} \right)\cos nt\,dt\\
=\frac{2\sqrt{3}n\sin(\pi n)}{\pi(n^{2}-1)}=0,n>1\\
b_{1}=\frac{2}{\pi}\int_{-\pi}^{\pi}\sin\left( t-\frac{\pi}{3} \right)\sin t\,dt=1\\
b_{n}=\frac{2}{\pi}\int_{-\pi}^{\pi}\sin\left( t-\frac{\pi}{3} \right)\sin nt\,dt\\
=\frac{2\sin(\pi n)}{\pi-\pi n^{2}}=0,n>1\\
\implies \fbox{$2\sin\left( t-\frac{\pi}{3} \right)=-\sqrt{3}\cos t+\sin t$}
\end{align*}
$$
## b)
$$
\begin{align*}
sq(t)=\begin{Bmatrix}
-1 & t\in[-\pi,0)\cup[\pi,2\pi) \\
1 & t\in(-2\pi,-\pi)\cup[0,\pi)
\end{Bmatrix}\\
L=2\pi\\
a_{0}=\frac{1}{2\pi}\int_{-2\pi}^{2\pi}sq(t)\,dt=0\\
a_{n}=\frac{1}{2\pi}\int_{-2\pi}^{2\pi} sq(t)\cos \frac{nt}{2}\,dt\\
=\frac{1}{2\pi}\left( \int_{-2\pi}^{-\pi}\cos \frac{nt}{2}\,dt-\int_{-\pi}^{0}\cos \frac{nt}{2}\,dt+\int_{0}^{\pi}\cos \frac{nt}{2}\,dt-\int_{\pi}^{2\pi}\cos \frac{nt}{2}\,dt \right)\\
=0\\
 b_{n}=\frac{1}{2\pi}\int_{-2\pi}^{2\pi} sq(t)\sin nt\,dt\\
=\frac{1}{2\pi}\left( \int_{-2\pi}^{-\pi}\sin nt\,dt-\int_{-\pi}^{0}\sin nt\,dt+\int_{0}^{\pi}\sin nt\,dt-\int_{\pi}^{2\pi}\sin nt\,dt \right)\\
=-\frac{2}{\pi n}\left( 2\cos\left( \frac{\pi n}{2} \right)-\cos(\pi n)-1 \right)\\
=\begin{Bmatrix}
-\frac{4}{\pi n}\left( \cos\left( \frac{\pi n}{2} \right)-1 \right) & n\text{ even} \\
0 & n\text{ odd}
\end{Bmatrix}\\
=\begin{Bmatrix}
\frac{8}{\pi n} & n\text{ even and }n\nmid4 \\
0 & n\text{ odd or }n|4
\end{Bmatrix}\\
\implies sq(t)\sim \frac{8}{\pi}\sum_{n\text{ even and }n\nmid4} \frac{\sin \frac{n}{2}t}{n}\\
\text{Replace $n$ with $2n$}\implies \fbox{$sq(t)\sim \frac{4}{\pi}\sum_{n\text{ odd}} \frac{\sin nt}{n}$}
\end{align*}
$$
## c)
$$
\begin{align*}
sq\left( t-\frac{\pi}{4} \right)\\
sq(t)\sim \frac{4}{\pi}\sum_{n\text{ odd}} \frac{\sin nt}{n}\\
\implies \fbox{$sq\left( t-\frac{\pi}{4} \right)\sim \frac{4}{\pi}\sum_{n\text{ odd}} \frac{\sin \left(n\left( t-\frac{\pi}{4} \right)\right)}{n}$}\\
\fbox{Minimal period is $2\pi$}
\end{align*}
$$
![[Diff. Eqs. Problem Set 7 2023-10-24 09.32.57.excalidraw]]
## d)
$$
\begin{align*}
1+2sq(2\pi t)\\
sq(t)\sim \frac{4}{\pi}\sum_{n\text{ odd}} \frac{\sin nt}{n}\\
\implies \fbox{$1+2sq(2\pi t)\sim 1+\frac{8}{\pi}\sum_{n\text{ odd}} \frac{\sin 2\pi nt}{n}$}\\
\fbox{Minimal period is $1$}
\end{align*}
$$
![[Diff. Eqs. Problem Set 7 2023-10-24 09.37.47.excalidraw]]
## e)
$$
\begin{align*}
g(t)=\begin{Bmatrix}
t & \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \\
\pi-t & \left[ \frac{\pi}{2}, \frac{3\pi}{2} \right]
\end{Bmatrix}\\
g'(t)=\begin{Bmatrix}
1 & \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \\
-1 & \left[ \frac{\pi}{2}, \frac{3\pi}{2} \right]
\end{Bmatrix}\\
sq(t)=\begin{Bmatrix}
-1 & [-\pi,0] \\
1 & [0,\pi]
\end{Bmatrix}\\
g'(t)=-sq\left( t-\frac{\pi}{2} \right)\\
\implies g'(t)\sim -\frac{4}{\pi}\sum_{n\text{ odd}} \frac{\sin \left( n\left( t-\frac{\pi}{2} \right) \right)}{n}\\
\implies g(t)=C+\frac{4}{\pi}\sum_{n\text{ odd}} \frac{\cos\left( n\left( t-\frac{\pi}{2} \right) \right)}{n^{2}}\\
g(0)=0=C+\frac{4}{\pi}\sum_{n\text{ odd}} \frac{\cos\left( \frac{\pi}{2}n \right)}{n^{2}}=C\\
\implies \fbox{$g(t)\sim \frac{4}{\pi}\sum_{n\text{ odd}} \frac{\cos\left( n\left( t-\frac{\pi}{2} \right) \right)}{n^{2}}$}\\
\fbox{Minimal period is $2\pi$}
\end{align*}
$$
![[Diff. Eqs. Problem Set 7 2023-10-24 09.42.53.excalidraw]]
# Problem 5
$$
\begin{align*}
\ddot{x}+3x=F(t)\\
F(t)=2t,(-\pi,\pi)\\
a_{0}=\frac{1}{\pi}\int_{-\pi}^{\pi}2t\,dt=0\\
a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}2t\cos nt\,dt=0\\
b_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}2t\sin nt\,dt=\frac{1}{\pi}\left( -\frac{2t}{n}\cos nt+\frac{2}{n^{2}}\sin nt \right)\biggr|_{-\pi}^{\pi}\\
=-\frac{4}{n}\cos(\pi n)\\
\implies F(t)\sim -4\sum_{n=1}^{\infty} \cos \pi n \frac{\sin nt}{n}=-4\sum_{n=1}^{\infty} \frac{(-1)^{n}\sin nt}{n}\\
\ddot{x}_{n}+3x_{n}=-\frac{4(-1)^{n}}{n}\sin nt\\
z_{n}=y_{n}+ix_{n}, T(y_{n})=-\frac{4(-1)^{n}}{n}\cos nt\\
\ddot{z}+3z=-\frac{4(-1)^{n}}{n}\cos nt-\frac{4i(-1)^{n}}{n}\sin nt\\
=-\frac{4(-1)^{n}}{n}e^{int}\\
\implies z= -\frac{4(-1)^{n}}{n}\frac{e^{int}}{p(in)}\\
p(s)=s^{2}+3\\
p(in)=3-n^{2}\\
\implies z=-\frac{4(-1)^{n}}{n}\frac{e^{int}}{3-n^{2}}\\
=\frac{4(-1)^{n}}{n^{3}-3n}(\cos nt+i\sin nt)\\
\implies x_{n}=\frac{4(-1)^{n}}{n^{3}-3n}\sin nt\\
\implies \fbox{$x_{p}=4\sum_{n=1}^{\infty} \frac{(-1)^{n}}{n^{3}-3n}\sin nt$}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\ddot{x}+4x=f(t)\\
f(t)\sim \frac{\pi}{2}-\frac{4}{\pi}\sum_{n\text{ odd}}\frac{\cos nt}{n^{2}} & \text{ (from \bf Problem 3)}\\
\ddot{x}_{0}+4x_{0}=\frac{\pi}{2}\\
x_{0}=a\\
\implies x_{0}=\frac{\pi}{8}\\
\ddot{x}_{n}+4\ddot{x}_{n}=-\frac{4}{\pi}\frac{\cos nt}{n^{2}}&,\ n\text{ odd}\\
z=x+iy,T(y)=-\frac{4\sin nt}{\pi n^{2}}\\
\ddot{z}+4z=-\frac{4}{\pi n^{2}}e^{int}\\
\implies z_{p}=-\frac{4e^{int}}{\pi n^{2}p(in)}\\
p(s)=s^{2}+4\\
p(in)=4-n^{2}\\
\implies z_{p}=-\frac{4e^{int}}{\pi n^{2}(4-n^{2})}\\
=-\frac{4}{\pi n^{2}(4-n^{2})}(\cos nt+i\sin nt)\\
\implies x_{n}=-\frac{4\cos nt}{\pi n^{2}(4-n^{2})}&,n\text{ odd}\\
\implies \fbox{$x_{p}=\frac{\pi}{8}-\frac{4}{\pi}\sum_{n\text{ odd}} \frac{\cos nt}{4n^{2}-n^{4}}$}
\end{align*}
$$