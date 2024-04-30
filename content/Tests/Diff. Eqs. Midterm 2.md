---
date: 2023-11-16
course: "[[Ordinary Differential Equations]]"
tags:
  - math/calc
---
# Problem 1
## a)
$$
\begin{align*}
\text{even }f(t)=\begin{Bmatrix}
\pi & 0\leq t< \frac{\pi}{2} \\
0 & \frac{\pi}{2}\leq t<\pi
\end{Bmatrix}\\
b_{n}=0\\
a_{0}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\, dt = \pi\\
a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos nt\, dt=\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos nt\, dt\\
=\frac{1}{n}\sin nt\biggr|_{-\frac{\pi}{2}}^{\frac{\pi}{2}} =\frac{2}{n}\sin\left( \frac{\pi}{2}n \right)\\
=(-1)^{n+1}\frac{2}{2n-1}\\
\implies \fbox{$f(t)\sim \frac{\pi}{2}+2\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{2n-1}\cos((2n-1)t)$}
\end{align*}
$$
## b)
$$
\begin{align*}
\ddot{x}+25x=f(t)\\
\ddot{x}_{0}+25x_{0}=\frac{\pi}{2}\implies x_{0}=\frac{\pi}{50}\\
\ddot{x}_{n}+25x_{n}=\frac{2(-1)^{n+1}}{2n-1}\cos((2n-1)t)\\
x_{n}=a\cos((2n-1)t)\\
\implies \ddot{x}_{n}=-(2n-1)^{2}a\cos((2n-1)t)\\
\implies a\cos((2n-1)t)(25-(2n-1)^{2})=\frac{2(-1)^{n+1}}{2n-1}\cos((2n-1)t)\\
\implies a(25-(2n-1)^{2})=\frac{2(-1)^{n+1}}{2n-1}\\
\implies a=\frac{2(-1)^{n+1}}{(2n-1)(25-(2n-1)^{2})}\\
\implies x_{n}=\frac{2(-1)^{n}}{(2n-1)(25-(2n-1)^{2})}\cos((2n-1)t)\\
\ddot{x}_{3}+25x_{3}=\frac{2}{5}\cos5t\\
\ddot{z}+25z=\frac{2}{5}e^{5it}\\
\implies z=\frac{2te^{5it}}{50i}=-\frac{i}{25}t(\cos5t+i\sin5t)\\
\implies x_{3}=\frac{t}{25}\sin5t\\
\implies \fbox{$x(t)=\frac{\pi}{50}+\frac{t}{25}\sin5t+\sum_{n=1,\neq3}^{\infty} \frac{(-1)^{n}}{n(2n-1)^{2}}\cos((2n-1)t)$}
\end{align*}
$$
# 2)
![[Diff. Eqs. Midterm 2 2023-11-16 09.48.18.excalidraw]]
## c)
$$
\begin{align*}
f(t)=(1-t)[u(t)-u_{1}(t)]+[u_{1}(t)]\\
f'(t)=\delta(t)-\delta_{1}(t)-u(t)-t\delta(t)+u_{1}(t)+t\delta_{1}(t)+\delta_{1}(t)\\
=\delta(t)-[u(t)-u_{1}(t)]+\delta_{1}(t)
\end{align*}
$$
# Problem 3
## a)
$$
\begin{align*}
f(t)=t,g(t)=t^{6}\\
(f*g)(t)=\int_{0}^{t} t\tau^{6}-\tau^{7}\, d\tau\\
=\frac{t}{7}\tau^{7}-\frac{\tau^{8}}{8}\biggr|_{0}^{t}=\frac{t^{8}}{56}
\end{align*}
$$
## b)
$$
\begin{align*}
x_{ZSR}=w(t)*e^{-t}\\
=2\int_{0}^{t} e^{\tau-t}u(\tau)\tau e^{-\tau}\, dt\\
=2e^{-t}\int_{0}^{t} \tau\, dt=\fbox{$t^{2}e^{-t}$}
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
s^{2}X(s)+2sX(s)+2X(s)=\frac{1}{s}\\
\implies X(s)=\frac{1}{s(s^{2}+2s+2)}\\
=\frac{A}{s}+\frac{Bs+C}{s^{2}+2s+2}\\
As^{2}+2As+2A+Bs^{2}+Cs=1\\
\implies \begin{cases}
A+B=0 \\
2A+C=0 \\
2A=1
\end{cases}\\
\implies A=\frac{1}{2},B=-\frac{1}{2},C=-1\\
\implies X(s)=\frac{1}{2s}-\frac{1}{2}\left( \frac{s+1}{(s+1)^{2}+1}+\frac{1}{(s+1)^{2}+1} \right)\\
\implies x(t)=\frac{1}{2}-\frac{1}{2}e^{-t}\cos t-\frac{1}{2}e^{-t}\sin t
\end{align*}
$$
## b)
$$
\begin{align*}
F(s)=\frac{2s}{(s+1)(s^{2}+2s+5)}\\
=\frac{A}{s+1}+\frac{Bs+C}{s^{2}+2s+5}\\
As^{2}+2As+5A+Bs^{2}+Bs+Cs+C=2s\\
\implies \begin{cases}
A+B=0 \\
2A+B+C=2 \\
5A+C=0
\end{cases}\\
\implies A=-\frac{1}{2},B=\frac{1}{2},C=\frac{5}{2}\\
\implies F(s)=-\frac{1}{2}\left( \frac{1}{s+1} \right)+\frac{1}{2}\left( \frac{s+1}{(s+1)^{2}+4} \right)+\frac{2}{(s+1)^{2}+4}\\
\implies \fbox{$f(t)=-\frac{1}{2}e^{-t}+\frac{1}{2}e^{-t}\cos 2t+e^{-t}\sin2t$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\dot{x}+3x=4e^{-3t},x(0)=4\\
\dot{w}+3w=\delta(t)\\
W(s)=\frac{1}{s+3}\\
\implies w(t)=e^{-3t}\\
x_{ZSR} = e^{-3t}*4e^{-3t}\\
=4\int_{0}^{t} e^{-3(t-\tau)}e^{-3\tau}\, dt\\
=4\int_{0}^{t} e^{-3t}\, dt=4te^{-3t} \\
x_{ZIR}=c_{1}e^{-3t}\\
\implies x=c_{1}e^{-3t}+4te^{-3t}\\
x(0)=4\implies c_{1}=4\\
\implies \fbox{$x(t)=4e^{-3t}+4te^{-3t}$}
\end{align*}
$$