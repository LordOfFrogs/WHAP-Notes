---
tags:
  - math/calc
due: 2023-11-10
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS9-2023.pdf)
# Problem 1
## a)
$$
\begin{align*}
\dot{w}(t)+kw(t)=\delta(t)\\
sW(s)+kW(s)=1\\
\implies W(s)=\frac{1}{s+k}\\
\implies \fbox{$w(t)=e^{-kt}$}\\
\dot{v}(t)+kv(t)=u(t)\\
\implies sV(s)+kV(s)=\frac{1}{s}\\
\implies V(s)=\frac{1}{s(s+k)}=\frac{1}{ks}-\frac{1}{k(s+k)}\\
\implies \fbox{$v(t)=\frac{1}{k}-\frac{1}{k}e^{-kt}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\ddot{w}(t)+\omega_{0}^{2}w(t)=\delta(t)\\
s^{2}W(s)+\omega_{0}^{2}W(s)=1\\
\implies W(s)=\frac{1}{s^{2}+\omega_{0}^{2}}\\
\implies \fbox{$w(t)=\frac{1}{\omega_{0}}\sin(\omega_{0}t)$}\\
\ddot{v}(t)+\omega_{0}^{2}v(t)=u(t)\\
s^{2}V(s)+\omega_{0}^{2}V(t)=\frac{1}{s}\\
\implies V(s)=\frac{1}{s(s^{2}+\omega_{0}^{2})}=\frac{A}{s}+\frac{Bs+C}{s^{2}+\omega_{0}^{2}}\\
\implies As^{2}+A\omega_{0}^{2}+Bs^{2}+Cs=1\\
\implies A+B=0,C=0,A\omega_{0}^{2}=1\\
\implies A=\frac{1}{\omega_{0}^{2}},B=-\frac{1}{\omega_{0}^{2}}\\
\implies V(s)=\frac{1}{\omega_{0}^{2}s}-\frac{1}{\omega_{0}^{2}}\left( \frac{s}{s^{2}+\omega_{0}^{2}} \right)\\
\implies \fbox{$v(t)=\frac{1}{\omega_{0}^{2}}-\frac{1}{\omega_{0}^{2}}\cos(\omega_{0}t)$}
\end{align*}
$$
## c)
$$
\begin{align*}
\dot{v}(t)=e^{-kt}=w(t)\checkmark \\
\dot{v}(t)=\frac{1}{\omega_{0}}\sin(\omega_{0}t)=w(t)\checkmark
\end{align*}
$$
# Problem 2
## a)
$$
\begin{align*}
p(D)=2D^{2}+4D+4I\\
W(s)=\frac{1}{p(s)}=\frac{1}{2s^{2}+4s+4}\\
\frac{-4\pm\sqrt{16-32}}{4}=i\pm1\\
\implies W(s)=\frac{1}{2}\left( \frac{1}{(s+1)^{2}+1}\right)\\
\implies \fbox{$w(t)=\frac{1}{2}e^{-t}\sin(t)$}
\end{align*}
$$
## b)
$$
\begin{align*}
V(s)=\frac{1}{sp(s)}=\frac{1}{2s(s^{2}+2s+2)}\\
=\frac{1}{2}\left( \frac{A}{s}+\frac{Bs+C}{s^{2}+2s+2} \right)\\
As^{2}+2As+2A+Bs^{2}+Cs=1\\
A+B=0,2A+C=0,2A=1\\
\implies A=\frac{1}{2},B=-\frac{1}{2},C=-1\\
\implies V(s)=\frac{1}{4s}-\frac{s+2}{4(s^{2}+2s+2)}\\
=\frac{1}{4s}-\frac{1}{4}\left( \frac{s+1}{(s+1)^{2}+1} \right)-\frac{1}{4}\left( \frac{1}{(s+1)^{2}+1} \right)\\
\implies \fbox{$v(t)=\frac{1}{4}-\frac{1}{4}e^{-t}\cos(t)-\frac{1}{4}e^{-t}\sin(t)$}
\end{align*}
$$
## c)
$$
\begin{align*}
\dot{v}(t)=\frac{1}{4}e^{-t}\cos(t)+\frac{1}{4}e^{t}\sin (t)+\frac{1}{4}e^{-t}\sin(t)-\frac{1}{4}e^{-t}\cos(t)\\
=\frac{1}{2}e^{-t}\sin(t)=w(t)\checkmark
\end{align*}
$$
# Problem 3
## a)
$$
\begin{align*}
\mathscr{L}[e^{-t}\sin(3t)]=\mathscr{L}[\sin(3t)](s+1)\\
=\fbox{$\frac{3}{(s+1)^{2}+9}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\mathscr{L}[e^{2t}(t^{2}-3t+2)]=\mathscr{L}[t^{2}-3t+2](s-2)\\
=\mathscr{L}[t^{2}](s-2)-3\mathscr{L}[t](s-2)+2\mathscr{L}[1](s-2)\\
=\fbox{$\frac{2}{(s-2)^{3}}-\frac{3}{(s-2)^{2}}+\frac{2}{s-2}$}=\frac{2-3(s-2)+2(s-2)^{2}}{(s-2)^{3}}\\
=\fbox{$\frac{2s^{2}-11s+16}{(s-2)^{3}}$}
\end{align*}
$$
## c)
$$
\begin{align*}
\mathscr{L}[t^{4}e^{\pi t}]=\mathscr{L}[t^{4}](s-\pi)\\
=\fbox{$\frac{24}{(s-\pi)^{5}}$}
\end{align*}
$$
# Problem 4
$$
\begin{align*}
e^{-t}\sin(3t)=e^{-t}(ae^{-3it}+be^{3it})\\
=e^{-t}(a\cos(-3t)+ai\sin(-3t)+b\cos(3t)+bi\sin(3t))\\
=e^{-t}(a\cos3t-ai\sin3t+b\cos3t+bi\sin3t)\\
\implies a+b=0,bi-ai=1\\
\implies a=\frac{i}{2},b=-\frac{i}{2}\\
\implies e^{-t}\sin3t=\frac{i}{2}e^{-t}(e^{-3it}-e^{3it})=\frac{i}{2}(e^{(-1-3i)t}-e^{(3i-1)t})\\
\implies \mathscr{L}[e^{-t}\sin3t]=\frac{i}{2}\mathscr{L}[e^{(-1-3i)t}-e^{(3i-1)t}]\\
=\frac{i}{2}\mathscr{L}[e^{(-1-3i)t}]-\frac{i}{2}\mathscr{L}[e^{(3i-1)t}]\\
=\frac{i}{2(s+1+3i)}-\frac{i}{2(s+1-3i)}\\
=\frac{i}{2}\left( \frac{s+1-3i-(s+1+3i)}{(s+1+3i)(s+1-3i)} \right)\\
=\frac{6}{2(s+1)^{2}+18}=\fbox{$\frac{3}{(s+1)^{2}+9}$}
\end{align*}
$$
Same as **Problem 3a**
# Problem 5
## a)
$$
\begin{align*}
\mathscr{L}^{-1}\left[ \frac{3}{2s-4} \right]=\frac{3}{2}\mathscr{L}^{-1}\left[ \frac{1}{s-2} \right]=\fbox{$\frac{3}{2}e^{2t}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\mathscr{L}^{-1}\left[ \frac{5s-6}{s^{2}-3s} \right]\\
\frac{5s-6}{s^{2}-3s}=\frac{A}{s}+\frac{B}{s-3}=\frac{2}{s}+\frac{3}{s-3}\\
\implies \mathscr{L}^{-1}\left[ \frac{5s-6}{s^{2}-3s} \right]=2\mathscr{L}^{-1}\left[ \frac{1}{s} \right]+3\mathscr{L}^{-1}\left[ \frac{1}{s-3} \right]\\
=\fbox{$2+3e^{3t}$}
\end{align*}
$$
## c)
$$
\begin{align*}
\mathscr{L}^{-1}\left[ \frac{3s^{3}-3s^{2}+s-39}{s^{4}+4s^{3}+13s^{2}} \right]\\
\frac{3s^{3}-3s^{2}+s-39}{s^{4}+4s^{3}+13s^{2}}=\frac{As+B}{s^{2}}+\frac{Cs+D}{s^{2}+4s+13}\\
\implies As^{3}+4As^{2}+13As+Bs^{2}+4Bs+13B+Cs^{3}+Ds^{2}=3s^{3}-3s^{2}+s-39\\
\implies \begin{cases}
A+C=3 \\
4A+B+D=-3 \\
13A+4B=1 \\
13B=-39
\end{cases}\\
\implies B=-3, A=1, C=2, D=-4\\
\implies \frac{3s^{3}-3s^{2}+s-39}{s^{4}+4s^{3}+13s^{2}}=\frac{s-3}{s^{2}}+\frac{2s-4}{s^{2}+4s+13}\\
=\frac{1}{s}-\frac{3}{s^{2}}+\frac{2(s+2)}{(s+2)^{2}+9}-\frac{8}{3}\frac{3}{(s+2)^{2}+9}\\
\implies \mathscr{L}^{-1}\left[ \frac{3s^{3}-3s^{2}+s-39}{s^{4}+4s^{3}+13s^{2}} \right]\\
=\mathscr{L}^{-1}\left[ \frac{1}{s} \right]-3\mathscr{L}^{-1}\left[ \frac{1}{s^{2}} \right]+3\mathscr{L}^{-1}\left[ \frac{s+2}{(s+2)^{2}+9} \right]-\frac{10}{3}\mathscr{L}^{-1}\left[ \frac{3}{(s+2)^{2}+9} \right]\\
=\fbox{$1-3t+2e^{-2t}\cos(3t)-\frac{8}{3}e^{-2t}\sin(3t)$}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\dot{x}-x=e^{3t},x(0^{-})=1\\
sX(s)-1-X(s)=\frac{1}{s-3}\\
\implies X(s)=\frac{s-2}{(s-3)(s-1)}\\
=\frac{A}{s-3}+\frac{B}{s-1}=\frac{1}{2}\left( \frac{1}{s-3} \right)+\frac{1}{2}\left( \frac{1}{s-1} \right)\\
\implies \fbox{$x(t)=\frac{1}{2}e^{3t}+\frac{1}{2}e^{t}$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\ddot{x}+4x=\sin t,x(0^{-})=1,\dot{x}(0^{-})=0\\
s^{2}X(s)-s+4X(s)=\frac{1}{s^{2}+1}\\
\implies X(s)=\frac{s^{3}+s+1}{(s^{2}+1)(s^{2}+4)}\\
=\frac{As+B}{s^{2}+1}+\frac{Cs+D}{s^{2}+4}\\
\implies As^{3}+4As+Bs^{2}+4B+Cs^{3}+Cs+Ds^{2}+D=s^{3}+s+1\\
\implies \begin{cases}
A+C=1 \\
B+D=0 \\
4A+C=1 \\
4B+D=1
\end{cases}\\
\implies A=0,C=1,B=\frac{1}{3},D=-\frac{1}{3}\\
\implies X(s)=\frac{1}{3}\left( \frac{1}{s^{2}+1} \right)+\left( \frac{s}{s^{2}+4} \right)-\frac{1}{6}\left( \frac{2}{s^{2}+4} \right)\\
\implies \fbox{$x(t)=\frac{1}{3}\sin t+\cos2t-\frac{1}{6}\sin2t$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\ddot{x}-2\dot{x}+2x=2e^{t},x(0^{-})=0,\dot{x}(0^{-})=1\\
s^{2}X(s)-1-2sX(s)+2X(s)=\frac{2}{s-1}\\
X(s)=\frac{s+1}{(s-1)(s^{2}-2s+2)}\\
=\frac{A}{s-1}+\frac{Bs+C}{s^{2}-2s+2}\\
\implies As^{2}-2As+2A+Bs^{2}-Bs+Cs-C=s+1\\
\implies \begin{cases}
A+B=0 \\
-2A-B+C=1 \\
2A-C=1
\end{cases}\\
\implies B=-2,A=2,C=3\\
\implies X(s)=2\left( \frac{1}{s-1} \right)-2\left( \frac{s-1}{(s-1)^{2}+1} \right)+\left( \frac{1}{(s-1)^{2}+1} \right)\\
\implies \fbox{$x(t)=2e^{t}-2e^{t}\cos t+e^{t}\sin t$}
\end{align*}
$$