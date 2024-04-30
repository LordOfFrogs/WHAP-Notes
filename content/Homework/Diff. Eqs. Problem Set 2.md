---
tags:
  - math/calc
due: 2023-09-22
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS2-2023.pdf)
# Problem 1
$$
\begin{align*}
xy'+5y=7x^{2},\ y(2)=5\\
xy'+5y=0\\
\implies \frac{dy}{y}=-\frac{5}{x}dx\\
\implies \int{\frac{dy}{y}=-5\int{\frac{dx}{x}}}\\
\implies \ln|y|=-5\ln|x|+C\\
\implies y_{h}=Ax^{-5}\\
\\
y_{p}=ax^{2}, y'=2ax \\
2ax^{2}+5ax^{2}=7x^{2}\\
\implies a=1\\
\implies y_{p}=x^{2}\\
\fbox{$y=Ax^{-5}+x^{2}$}\\
5=\frac{A}{32}+4\\
\implies A=32\\
\implies \fbox{$y=32x^{-5}+x^{2}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
y'=(1-y)\cos x,\ y(\pi)=2\\
\implies y'+(\cos x)y=\cos x\\
v=e^{\int{\cos x\ dx}}\\
=e^{\sin x}\\
e^{\sin x}y'+e^{\sin x}(\cos x)y=e^{\sin x}\cos x\\
(ye^{\sin x})'=e^{\sin x}\cos x\\
ye^{\sin x}=\int{e^{\sin x}\cos x\ dx}\\
=\int{e^{u}\ du}\quad (u=\sin x)\\
=e^{\sin x}+C\\
\implies \fbox{$y=1+Ce^{-\sin x}$}\\
2=1+Ce^{-\sin \pi}=1+Ce^{0}\\
\implies C=1\\
\implies \fbox{$y=1+e^{-\sin x}$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
y'=1+x+y+xy,\ y(0)=0\\
\implies y'-(1+x)y=1+x\\
y'-(1+x)y=0\\
\implies \frac{dy}{y}=1+x\ dx\\
\implies \ln|y|=\frac{x^{2}}{2}+x+C\\
\implies y_{h}=Ae^{\frac{1}{2}x^{2}+x}\\\\
y_{p}=ax+b,\ y'=a\\
a-(1+x)(ax+b)=1+x\\
\implies a-ax-b-ax^{2}-bx=1+x\\
\implies a=0,b=-1\\
\implies y_{p}=-1\\
\implies \fbox{$y=Ae^{\frac{1}{2}x^{2}+x}-1$}\\
0=Ae^{0}-1\\
\implies A=1\\
\implies \fbox{$y=e^{\frac{1}{2}x^{2}+x}-1$}
\end{align*}
$$
# Problem 4
$$
\begin{align*}
(1+2xy) \frac{dy}{dx}=1+y^{2}\\
\implies \frac{dy}{dx}=\frac{1+y^{2}}{1+2xy}\\
\implies \frac{dx}{dy}=\frac{1+2xy}{1+y^{2}}=\frac{1}{1+y^{2}}+\frac{2xy}{1+y^{2}}\\
\implies \frac{dx}{dy}-\frac{2y}{1+y^{2}}x=\frac{1}{1+y^{2}}\\
v=e^{\int{-\frac{2y}{1+y^{2}}\ dy}}=e^{-\ln(1+y^{2})}=\frac{1}{1+y^{2}}\\
\frac{1}{1+y^{2}} \frac{dx}{dy}-\frac{1}{1+y^{2}} \frac{2y}{1+y^{2}}x=\left(\frac{1}{1+y^{2}}\right)^{2}\\
\left( \frac{x}{1+y^{2}} \right)'=\left( \frac{1}{1+y^{2}} \right)^{2}\\
\implies \frac{x}{1+y^{2}}=\int{\frac{1}{(1+y^{2})^{2}}\ dy}\\
\text{Reduction formula:}\\
\int{\frac{dy}{(a^{2}+y^{2})^{n}}}= \frac{y}{2a^{2}(n-1)(a^{2}+y^{2})^{n-1}}+\frac{2n-3}{2a^{2}(n-1)}\int{\frac{dy}{(a^{2}+y^{2})^{n-1}}}\\
\implies \int{\frac{dy}{(1+y^{2})^{2}}}=\frac{y}{2(1+y^{2})}+\frac{1}{2}\int{\frac{dy}{1+y^{2}}}\\
=\frac{y}{2(1+y^{2})}+\frac{\tan^{-1}y}{2}+C\\
\implies \fbox{$x=\frac{y}{2}+\frac{1+y^{2}}{2}\tan^{-1}y+C(1+y^{2})$}
\end{align*}
$$
([Reference](https://en.wikipedia.org/wiki/Integration_by_reduction_formulae))
# Problem 5
$$
\begin{align*}
\frac{dy}{dx}=1+2xy\\
\implies\frac{dy}{dx}-2xy=1\\
v=e^{\int{-2x\ dx}}=e^{-x^{2}}\\
e^{-x^{2}} \frac{dy}{dx}-2xe^{-x^{2}}y=e^{-x^{2}}\\
\implies \frac{d}{dx}(ye^{-x^{2}})=e^{-x^{2}}\\
\implies ye^{-x^{2}}=\frac{\sqrt{ \pi }}{2}\text{erf}(x)+C\\
\implies \fbox{$y=\frac{e^{x^{2}}\sqrt{\pi}}{2}\text{erf}(x)+Ce^{x^{2}}$}
\end{align*}
$$
# Problem 6
## a)
$$
\begin{align*}
\frac{dx}{dt}+x=2\sin t\\
v=e^{\int{1 dt}}=e^{t}\\
e^{t} \frac{dx}{dt}+e^{t}x=\frac{d}{dt}(xe^{t})=2e^{t}\sin t\\
xe^{t}=\int{2e^{t}\sin t\ dt}\\
I=\int{e^{t}\sin t\ dt}
&\qquad\begin{Bmatrix}
u=\sin t & v=e^{t} \\
du=\cos t\ dt & dv=e^{t}\ dt
\end{Bmatrix}\\
=e^{t}\sin t-\int{e^{t}\cos t\ dt}
&\qquad\begin{Bmatrix}
u=\cos t & v=e^{t} \\
du=-\sin t\ dt & dv=e^{t}\ dt
\end{Bmatrix}\\
=e^{t}\sin t-e^{t}\cos t-I\\
\implies 2I=\int2e^{t}\sin t\ dt=e^{t}(\sin t-\cos t)+C=xe^{t}\\
\implies x=\sin t-\cos t+\frac{C}{e^{t}}\\
x(0)=1\implies 1=C-1\implies C=2\\
\implies \fbox{$x=\sin t-\cos t+\frac{2}{e^{t}}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\frac{dx}{dt}+x=2\sin t\\
\frac{dx}{dt}+x=0\\
\implies\frac{dx}{x}=-dt\\
\implies \ln |x|=C-t\\
\implies x_{h}=Ae^{-t}\\
x_{p}=A\sin t+B\cos t\\
x'=A\cos t-B\sin t\\
A\cos t-B\sin t+A\sin t+B\cos t=2\sin t\\
\begin{cases}
A+B=0 \\
A-B=2
\end{cases}\\
\implies A=1,B=-1\\
\implies x=Ae^{-t}+\sin t-\cos t\\
x(0)=1\implies 1=Ae^{0}-1\\
\implies A=2\\
\implies \fbox{$x=\sin t-\cos t+\frac{2}{e^{t}}$}
\end{align*}
$$
## c)
$$
\begin{align*}
a\sin t+b\cos t=\sqrt{ a^{2}+b^{2} }\cos\left( t-\tan^{-1}\left( \frac{b}{a} \right) \right)\\
\implies x=\sin t-\cos t+2e^{-t}\\
= \fbox{$\sqrt{2}\cos\left( t-\frac{3\pi}{4} \right)+2e^{-t}$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
S(t)=30e^{\frac{t}{20}}\\
\Delta A\approx0.12S(t)\Delta t+0.06A\Delta t\\
\frac{dA}{dt}=0.12S(t)+0.06A=3.6e^{t/20}+0.06A\\
\fbox{a) $\frac{dA}{dt}-0.06A=3.6e^{t/20}$}\\
\frac{dA}{dt}-0.06A=0\\
\implies \frac{dA}{A}=0.06 dt\\
\implies \ln |A|=0.06t+C\\
\implies A_{h}=Ce^{0.06t}\\
A_{p}=ae^{\frac{t}{20}}\implies \frac{dA}{dt}=\frac{a}{20}e^{\frac{t}{20}}\\
\frac{a}{20}e^{\frac{t}{20}}-0.06ae^{\frac{t}{20}}=3.6e^{\frac{t}{20}}\\
\implies-0.01a=3.6\\
\implies a=-360\\
\implies A_{p}=-360e^{\frac{t}{20}}\\
A=Ce^{0.06t}-360e^{t/20}\\
A(0)=0\implies 0=C-360\\
\implies C=360\\
\implies A=360e^{0.06t}-360e^{\frac{t}{20}}\\
\implies A(40)=1308.28
\end{align*}
$$
b) \$1,308,280 in her retirement account at age 70