---
tags:
  - math/calc
due: 2023-11-03
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS8-2023.pdf)
# Problem 1
$$
\begin{align*}
f(t)=t^{2},[0,2)\\
a_{0}=\int_{0}^{2} t^{2}\,dt = \frac{t^{3}}{3}\biggr|_{0}^{2}=\frac{8}{3}\\
a_{n}=\int_{0}^{2} t^{2}\cos(n\pi t)\,dt \\
=\frac{t^{2}}{n\pi}\sin(n\pi t)+\frac{2t}{n^{2}\pi^{2}}\cos(n\pi t)\biggr|_{0}^{2}\\
=\frac{4}{n^{2}\pi^{2}}\\
b_{n}=\int_{0}^{2} t^{2}\sin(n\pi t)\,dt =-\frac{t^{2}}{n\pi}\cos(n\pi t)+\frac{2t}{n^{2}\pi^{2}}\sin(n\pi t)\biggr|_{0}^{2}\\
=-\frac{4}{n\pi}\\
\implies \fbox{$f(t)\sim \frac{4}{3}+\frac{4}{\pi}\large\sum_{n=1}^{\infty} \normalsize\left[ \frac{\cos(n\pi t)}{\pi n^{2}}-\frac{\sin(n\pi t)}{n} \right]$}
\end{align*}
$$
# Problem 2
## a)
$$
\begin{align*}
t=0\implies f(0)\sim2\sim \frac{4}{3}+\frac{4}{\pi^{2}}\sum_{n=1}^{\infty} \frac{1}{n^{2}}\\
\implies \fbox{$\sum_{n=1}^{\infty} \frac{1}{n^{2}}=\frac{\pi^{2}}{6}$}\\
t=1\implies f(1)=1\sim \frac{4}{3}+\frac{4}{\pi^{2}}\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^{2}}\\
\implies \fbox{$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^{2}}=\frac{\pi^{2}}{12}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\sum \frac{1}{n^{2}}=1+\frac{1}{4}+\frac{1}{9}+\frac{1}{16}+\cdots\\
\sum \frac{(-1)^{n+1}}{n^{2}}=1-\frac{1}{4}+\frac{1}{9}-\frac{1}{16}+\cdots\\
\implies \sum \frac{1}{n^{2}}+\sum \frac{(-1)^{n+1}}{n^{2}}=2\sum_{n\text{ odd}} \frac{1}{n^{2}}\\
\implies \fbox{$\sum_{n\text{ odd}} \frac{1}{n^{2}}=\frac{\pi^{2}}{8}$}
\end{align*}
$$
## c)
$$
\begin{align*}
\|f\|^{2}=\int_{0}^{2} t^{4}\, dt =\frac{32}{5}\\
=\frac{a_{0}^{2}}{2}+a_{1}^{2}+b_{1}^{2}+\cdots=\frac{32}{9}+\frac{16}{\pi^{4}}+\frac{16}{\pi^{2}}+\frac{16}{2^{4}\pi^{4}}+\frac{16}{2^{2}\pi^{2}}+\cdots+\frac{16}{n^{4}\pi^{4}}+\frac{16}{n^{2}\pi^{2}}\\
\implies \frac{32}{5}=\frac{32}{9}+\frac{16}{\pi^{4}}\sum_{n=1}^{\infty} \left( \frac{1}{n^{4}}+\frac{\pi^{2}}{n^{2}} \right)\\
\implies 288=160+\frac{720}{\pi^{4}}\sum\\
\implies \sum_{n=1}^{\infty}\left( \frac{1}{n^{4}}+\frac{\pi^{2}}{n^{2}} \right)=\frac{8}{45}\pi^{4}\\
\implies \sum \frac{1}{n^{4}}+\pi^{2}\sum \frac{1}{n^{2}}=\frac{8}{45}\pi^{4}\\
\implies \sum \frac{1}{n^{4}}+\frac{\pi^{4}}{6}=\frac{8}{45}\pi^{4}\\
\implies \fbox{$\sum_{n=1}^{\infty} \frac{1}{n^{4}}=\frac{\pi^{4}}{90}$}
\end{align*}
$$
# Problem 3
## a)
$$
\begin{align*}
\ddot{x}+\omega^{2}x=f(t)\\
f(t)=t^{2},[0,2)\\
f(t)\sim\frac{4}{3}+\frac{4}{\pi}\large\sum_{n=1}^{\infty} \normalsize\left[ \frac{\cos(n\pi t)}{\pi n^{2}}-\frac{\sin(n\pi t)}{n} \right]\\
\ddot{x}_{0}+\omega^{2}x_{0}=\frac{4}{3}\\
x_{0}=a\implies \omega^{2}a=\frac{4}{3}\implies a=x_{0}=\frac{4}{3\omega^{2}}\\
\ddot{x}_{n}+\omega^{2}x_{n}=\frac{4}{\pi}\left( \frac{\cos(n\pi t)}{\pi n^{2}}-\frac{\sin(n\pi t)}{n} \right)\\
x_{n}=a\cos(n\pi t)+b\sin(n\pi t)\\
\implies \ddot{x}_{n}=-an^{2}\pi^{2}\cos(n\pi t)-bn^{2}\pi^{2}\sin(n\pi t)\\
\implies a\omega^{2}-an^{2}\pi^{2}=\frac{4}{\pi^{2}n^{2}}\implies a=\frac{4}{\pi^{2}n^{2}(\omega^{2}-n^{2}\pi^{2})},\\
b\omega^{2}-bn^{2}\pi^{2}=-\frac{4}{\pi n}\implies b=-\frac{4}{\pi n(\omega^{2}-n^{2}\pi^{2})}\\
\implies x_{n}=\frac{4}{\pi^{2}n^{2}(\omega^{2}-n^{2}\pi^{2})}(\cos(n\pi t)-\pi n\sin(n\pi t))\\
\implies \fbox{$x=\frac{4}{3\omega^{2}}+\frac{4}{\pi^{2}}\sum_{n=1}^{\infty} \frac{\cos(n\pi t)-\pi n\sin(n\pi t)}{n^{2}\omega^{2}-n^{4}\pi^{2}}$}
\end{align*}
$$
## b)
$$
\begin{align*}
3\omega^{2}=0\implies \omega=0\\
n^{2}(\omega^{2}-n^{2}\pi^{2})=0\\
\implies \omega^{2}=n^{2}\pi^{2}\\
\implies \omega=n\pi\\
\fbox{$\omega=k\pi,k\in\mathbb{Z}$}
\end{align*}
$$
# Problem 4
## a)
$$
f(t)=\begin{Bmatrix}
0 & t<0 \\
-t & t>0
\end{Bmatrix}
$$
### i)
![[Diff. Eqs. Problem Set 8 2023-10-27 21.02.31.excalidraw]]
### ii)
![[Diff. Eqs. Problem Set 8 2023-10-27 21.05.23.excalidraw]]
### iii)
$$
\begin{align*}
\fbox{$f(t)=-tu(t)$}\\
\fbox{$f'(t)=-u(t)$}
\end{align*}
$$
## b)
$$
f(t)=\begin{Bmatrix}
0 & t<0 \\
1-t & t>0
\end{Bmatrix}
$$
### i)
![[Diff. Eqs. Problem Set 8 2023-10-28 12.47.28.excalidraw]]
### ii)
$$
\begin{align*}
f'(0)=(f(0^{+})-f(0^{-}))\delta(0)\\
=\delta(0)
\end{align*}
$$
![[Diff. Eqs. Problem Set 8 2023-10-28 12.55.02.excalidraw]]
### iii)
$$
\begin{align*}
\fbox{$f(t)=u(t)-tu(t)$}\\
\implies f'(t)=\delta(t)-u(t)-t\delta(t)\\
\implies \fbox{$f'(t)=\delta(t)-u(t)$}
\end{align*}
$$
## c)
$$
f(t)=\begin{Bmatrix}
0 & t<0 \\
2t-1 & 0\leq t<1 \\
2 & 1\leq t<2 \\
0 & t\geq2
\end{Bmatrix}
$$
### i)
![[Diff. Eqs. Problem Set 8 2023-10-28 13.03.53.excalidraw]]
### ii)
$$
\begin{align*}
f'(0)=(f(0^{+})-f(0^{-}))\delta(0)=-\delta(0)\\
f'(1)=(f(1^{+})-f(1^{-}))\delta(0)=\delta(0)\\
f'(2)=(f(2^{+})-f(2^{-}))\delta(0)=-2\delta(0)
\end{align*}
$$
![[Diff. Eqs. Problem Set 8 2023-10-28 13.07.00.excalidraw]]
### iii)
$$
\begin{align*}
\fbox{$f(t)=(2t-1)[u(t)-u(t-1)]+2[u(t-1)-u(t-2)]$}\\
=2tu(t)-2tu(t-1)-u(t)+u(t-1)-2u(t-2)\\
\implies f'(t)=2u(t)-2u(t-1)+2t\delta(t)-\delta(t)+\delta(t-1)-2\delta(t-2)\\
\implies \fbox{$f'(t)=2[u(t)-u(t-1)]-\delta(t)+\delta(t-1)-2\delta(t-2)$}
\end{align*}
$$
