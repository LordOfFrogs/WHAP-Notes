---
tags:
  - math/calc
due: 2023-11-17
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS10-2023.pdf)
# Problem 1
$$
a\dot{x}+bx=t,x(0)=0,a\neq0
$$
## a)
$$
\begin{align*}
b\neq0:\\
x_{p}=At+B\\
\dot{x}_{p}=A\\
Aa+Abt+Bb=t\\
\implies A=\frac{1}{b},B=-\frac{a}{b^{2}}\\
\implies x_{p}=\frac{t}{b}-\frac{a}{b^{2}}\\
p(s)=as+b=0\\
\implies s=-\frac{b}{a}\\
\implies x_{h}=ce^{-\frac{b}{a}t}\\
\implies x=ce^{- \frac{b}{a}t}+\frac{t}{b}-\frac{a}{b^{2}}\\
x(0)=0\implies c=\frac{a}{b^{2}}\\
\implies \fbox{$x(t)=\frac{a}{b^{2}}e^{-\frac{b}{a}t}+\frac{t}{b}-\frac{a}{b^{2}}$}\\
b=0:\\
x_{p}=At^{2}\implies \dot{x}_{p}=2At\\
\implies A=\frac{1}{2a}\\
\implies x_{p}=\frac{t^{2}}{2a}\\
x_{h}=c\\
\implies x=c+\frac{t^{2}}{2a}\\
x(0)=0\implies c=0\\
\implies \fbox{$x(t)=\frac{t^{2}}{2a}$}
\end{align*}
$$
## b)
$$
\begin{align*}
asX(s)+bX(s)=\frac{1}{s^{2}}\\
\implies X(s)=\frac{1}{s^{2}(as+b)}=\frac{As+B}{s^{2}}+\frac{C}{as+b}\\
\implies \begin{cases}
Aa+C=0 \\
Ab+Ba=0 \\
Bb=1
\end{cases}\\
\implies A=-\frac{a}{b^{2}},B=\frac{1}{b},C=\frac{a^{2}}{b^{2}}\\
\implies X(s)=\frac{1}{bs^{2}}-\frac{a}{b^{2}s}+\frac{a}{b^{2}}\left( \frac{1}{s+\frac{b}{a}} \right)\\
\implies \fbox{$x(t)=\frac{t}{b}-\frac{a}{b^{2}}+\frac{a}{b^{2}}e^{-\frac{b}{a}t}$}\\
b=0:\\
asX(s)=\frac{1}{s^{2}}\\
\implies X(s)=\frac{1}{as^{3}}\\
\implies \fbox{$x(t)=\frac{t^{2}}{2a}$}
\end{align*}
$$
## c)
$$
\begin{align*}
a\dot{w}+bw=\delta(t)\\
\implies W(s)=\frac{1}{as+b}\\
\implies w(t)=\frac{1}{a}e^{- \frac{b}{a}t}\\
w(t)*t=t*w(t)=\int_{0}^{t} \tau w(t-\tau)\, d\tau\\
=\frac{1}{a}e^{-\frac{b}{a}t}\int_{0}^{t} \tau e^{\frac{b}{a}\tau}\, d\tau \\
u=\tau, v=\frac{a}{b}e^{\frac{b}{a}\tau}\\
du=1\,d\tau,dv=e^{\frac{b}{a}\tau}\,d\tau\\
\implies \frac{1}{b}e^{-\frac{b}{a}t}\left( \tau e^{\frac{b}{a}\tau}-\int e^{\frac{b}{a}\tau}\, d\tau  \right)\\
=\frac{1}{b}e^{- \frac{b}{a}t}e^{\frac{b}{a}\tau}\left( \tau-\frac{a}{b} \right)_{\tau=0}^{\tau=t}\\
\implies \fbox{$w(t)*t=\frac{t}{b}-\frac{a}{b^{2}}+\frac{a}{b^{2}}e^{-\frac{b}{a}t}$}\\
b=0:\\
W(s)=\frac{1}{as}\\
\implies w(t)=\frac{1}{a}\\
\implies w(t)*t=\frac{1}{a}\int_{0}^{t} \tau\, d\tau\\
=\frac{1}{a}\frac{\tau^{2}}{2}\biggr|_{\tau=0}^{\tau=t}\\
\implies \fbox{$w(t)*t=\frac{t^{2}}{2a}$}
\end{align*}
$$
# Problem 2
$$
\ddot{x}+2\dot{x}+x=3e^{-2t}\sin t, x(0)=2,\dot{x}(0)=1
$$
## a)
$$
\begin{align*}
s^{2}X(s)-2s-1+2sX(s)-4+X(s)=\frac{3}{(s+2)^{2}+1}\\
\implies X(s)=\frac{8+2s(s+2)^{2}+2s+5(s+2)^{2}}{(s^{2}+2s+1)((s+2)^{2}+1)}\\
=\frac{2s^{3}+13s^{2}+30s+28}{(s+1)^{2}(s^{2}+4s+5)}\\
=\frac{As+B}{(s+1)^{2}}+\frac{Cs+D}{s^{2}+4s+5}\\
As^{3}+4As^{2}+5As+Bs^{2}+4Bs+5B\\
+Cs^{3}+2Cs^{2}+Cs+Ds^{2}+2Ds+D\\
=2s^{3}+13s^{2}+30s+28\\
\implies \begin{cases}
A+C=2 \\
4A+B+2C+D=13 \\
5A+4B+C+2D=30 \\
5B+D=28
\end{cases}\\
\implies \left[\begin{array}{cccc|c}
1 & 0 & 1 & 0 & 2 \\
4 & 1 & 2 & 1 & 13 \\
5 & 4 & 1 & 2 & 30 \\
0 & 5 & 0 & 1 & 28
\end{array}\right]\\
R_{2}-4R_{1},R_{3}-5R_{1}\implies \left[\begin{array}{cccc|c}
1 & 0 & 1 & 0 & 2 \\
0 & 1 & -2 & 1 & 5 \\
0 & 4 & -4 & 2 & 20 \\
0 & 5 & 0 & 1 & 28
\end{array}\right]\\
R_{3}-4R_{2},R_{4}-5R_{2}\implies \left[\begin{array}{cccc|c}
1 & 0 & 1 & 0 & 2 \\
0 & 1 & -2 & 1 & 5 \\
0 & 0 & 4 & -2 & 0 \\
0 & 0 & 10 & -4 & 3
\end{array}\right]\\
\frac{R_{3}}{4},R_{4}-10R_{3}\implies \left[\begin{array}{cccc|c}
1 & 0 & 1 & 0 & 2 \\
0 & 1 & -2 & 1 & 5 \\
0 & 0 & 1 & -\frac{1}{2} & 0 \\
0 & 0 & 0 & 1 & 3
\end{array}\right]\\
\implies D=3,C=\frac{3}{2},B=5,A=\frac{1}{2}\\
\implies X(s)=\frac{1}{2}\left( \frac{1}{s+1}+\frac{9}{(s+1)^{2}} \right)+\frac{3}{2}\left( \frac{s+2}{(s+2)^{2}+1} \right)\\
\implies \fbox{$x(t)=\frac{1}{2}e^{-t}+\frac{9}{2}te^{-t}+\frac{3}{2}e^{-2t}\cos t$}
\end{align*}
$$
## b)
$$
\begin{align*}
\ddot{w}+2\dot{w}+w=\delta(t)\\
\implies W(s)=\frac{1}{(s+1)^{2}}\\
\implies w(t)=te^{-t}\\
x_{ZSR}=3e^{-2t}\sin t*te^{-t}=3\int_{0}^{t} \tau e^{-\tau}e^{-2(t-\tau)}\sin(t-\tau)\, d\tau\\
=3\int_{0}^{t} \tau e^{\tau-2t}\sin(t-\tau)\, d\tau,\quad u=t-\tau\implies du=-d\tau\\
\implies -3\int (t-u)e^{-u-t}\sin u\, d\tau\\
=-3te^{-t}\int e^{-u}\sin u\, d\tau+3e^{-t}\int ue^{-u}\sin u\, d\tau\\
=\frac{3}{2}te^{-t}e^{\tau-t}(\sin (t-\tau)+\cos(t-\tau))\\
+\frac{3}{2}(\tau-t)e^{-t}(\sin(t-\tau)+\cos(t-\tau))-\frac{3}{2}e^{-t}e^{\tau-t}\cos(t-\tau)\biggr|_{\tau=0}^{\tau=t}\\
=\frac{3}{2}te^{-t}-\frac{3}{2}e^{-t}+\frac{3}{2}e^{-2t}\cos t \\
p(s)=s^{2}+2s+1=0\implies s=-1\\
x_{ZIR}=c_{1}te^{-t}+c_{2}e^{-t}\\
x(0)=2\implies c_{2}=2\\
\dot{x}=c_{1}e^{-t}-c_{1}te^{-t}-2e^{-t}\\
\dot{x}(0)=1\implies c_{1}-2=1\implies c_{1}=3\\
\implies \fbox{$x(t)=\frac{9}{2}te^{-t}+\frac{1}{2}e^{-t}+\frac{3}{2}e^{-2t}\cos t$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\dddot{x}+5\ddot{x}+8\dot{x}+4x=e^{-3t},\\
x(0)=1,\dot{x}(0)=2,\ddot{x}(0)=3\\
p(s)=s^{3}+5s^{2}+8s+4\\
\begin{array}{c|cccc}
-1 & 1 & 5 & 8 & 4 \\
 &  & -1 & -4 & -4 \\
\hline & 1 & 4 & 4 & 0
\end{array}\\
\implies p(s)=(s+1)(s+2)^{2}\\
\implies W(s)=\frac{1}{(s+1)(s+2)^{2}}\\
=\frac{A}{s+1}+\frac{Bs+C}{(s+2)^{2}}\\
\implies As^{2}+4As+4A+Bs^{2}+Bs+Cs+C=1\\
\implies \begin{cases}
A+B=0 \\
4A+B+C=0 \\
4A+C=1
\end{cases}\\
\implies B=-1,A=1,C=-3\\
\implies W(s)=\frac{1}{s+1}-\frac{1}{s+2}-\frac{1}{(s+2)^{2}}\\
\implies w(t)=e^{-t}-e^{-2t}-te^{-2t}\\
x_{ZSR}=e^{-3t}*(e^{-t}-e^{-2t}-te^{-2t})\\
=\int_{0}^{t} e^{-3(t-\tau)}(e^{-\tau}-e^{-2\tau}-\tau e^{-2\tau})\, d\tau \\
=\int_{0}^{t} e^{2\tau-3t}-e^{\tau-3t}-\tau e^{\tau-3t}\, d\tau \\
=\frac{1}{2}e^{-t}-\frac{1}{2}e^{-3t}-e^{-2t}+e^{-3t}-te^{-2t}+e^{-2t}-e^{-3t}\\
=\frac{1}{2}e^{-t}-\frac{1}{2}e^{-3t}-te^{-2t}\\
x_{ZIR}=c_{1}e^{-t}+c_{2}e^{-2t}+c_{3}te^{-2t}\\
x(0)=1\implies c_{1}+c_{2}=1\\
\dot{x}=-c_{1}e^{-t}-2c_{2}e^{-2t}+c_{3}e^{-2t}-2c_{3}te^{-2t}\\
\dot{x}(0)=2\implies -c_{1}-2c_{2}+c_{3}=2\\
\ddot{x}=c_{1}e^{-t}+4c_{2}e^{-2t}-2c_{3}e^{-2t}-2c_{3}e^{-2t}+4c_{3}te^{-2t}\\
\ddot{x}(0)=3\implies c_{1}+4c_{2}-4c_{3}=3\\
\implies 2c_{2}-3c_{3}=5,\\
c_{3}-c_{2}=3\\
\implies c_{3}=-11,c_{2}=-14,c_{1}=15\\
\implies \fbox{$x(t)=\frac{31}{2}e^{-t}-14e^{-2t}-12te^{-2t}-\frac{1}{2}e^{-3t}$}
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
\ddot{x}+\dot{x}-6x=0\\
\dot{x}=y\\
\implies \dot{y}+y-6x=0\\
\implies \fbox{$\begin{cases}
\displaystyle\frac{dx}{dt}=\qquad y \\
\displaystyle\frac{dy}{dt}=6x-y
\end{cases}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\ddot{x}+5\dot{x}+tx^{2}=0\\
\dot{x}=y\\
\implies \dot{y}+5y+tx^{2}=0\\
\implies \fbox{$\begin{cases}
\displaystyle\frac{dx}{dt}=\hspace{64mu} y \\
\displaystyle\frac{dy}{dt}=-tx^{2}-5y
\end{cases}$}
\end{align*}
$$
## c)
$$
\begin{align*}
\dddot{x}+5\ddot{x}+8\dot{x}+4x=0\\
\dot{x}=y,\ddot{x}=z\implies \dot{y}=z\\
\implies \dot{z}+5z+8y+4x=0\\
\implies \fbox{$\left\{\begin{array}{lrr}
\displaystyle \frac{dx}{dt}= & y\\
\displaystyle \frac{dy}{dt}= &  & z \\
\displaystyle \frac{dz}{dt}=-4x & -8y & -5z
\end{array}\right.$}
\end{align*}
$$
# Problem 5
![[Diff. Eqs. Problem Set 10 Problem 5-1.png|600]]
With curves:
![[Diff. Eqs. Problem Set 10 Problem 5 with curves-1.png|600]]