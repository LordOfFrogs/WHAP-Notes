---
tags:
  - math/calc
due: 2023-09-29
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS3-2023.pdf)
# Problem 1
## a) $\frac{dx}{dt}=x^{2}+2x$
![[Diff. Eqs. Problem Set 3 2023-09-22 09.20.48.excalidraw]]
## b) $\frac{dx}{dt}=-(x-1)^{2}$
![[Diff. Eqs. Problem Set 3 2023-09-22 09.34.41.excalidraw]]
## c) $\frac{dx}{dt}=2x-x^{2}$
![[Diff. Eqs. Problem Set 3 2023-09-22 09.42.28.excalidraw]]
## d) $\frac{dx}{dt}=(2-x)^{3}$
![[Diff. Eqs. Problem Set 3 2023-09-22 09.42.37.excalidraw]]
# Problem 2
## a)
$$
\begin{align*}
\frac{dx}{dt}+3x=12e^{-t}\\
\frac{dx}{dt}+3x=0\\
\implies\int\frac{dx}{x}=\int-3dt\\
\implies\ln|x|=-3t+C\\
\implies x_{h}=Ae^{-3t}\\
x_{p}=ae^{-t}\\
\frac{dx_{p}}{dt}=-ae^{-t}\\
-ae^{-t}+3ae^{-t}=12e^{-t}\\
\implies a=6\\
\implies x=Ae^{-3t}+6e^{-t}, x(0)=1\\
1=A+6\implies A=-5\\
\implies\fbox{$x=6e^{-t}-5e^{-3t}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\frac{dx}{dt}+3x=12e^{-t}\\
\frac{dx}{dt}+3x=0\\
\implies\int\frac{dx}{x}=\int-3dt\\
\implies\ln|x|=-3t+C\\
\implies x_{h}=Ae^{-3t}\\
x_{1}(t)=e^{-3t}\\
v(t)=\int{\frac{12e^{-t}}{e^{-3t}}dt}=\int12e^{2t}dt=6e^{2t}\\
\implies x_{p}=e^{-3t}(6e^{2t})=6e^{-t}\\
\implies x=Ae^{-3t}+6e^{-t}, x(0)=1\\
1=A+6\implies A=-5\\
\implies\fbox{$x=6e^{-t}-5e^{-3t}$}
\end{align*}
$$

# Problem 3
## a)
### i)
$$
\begin{align*}
\frac{dx}{dt}=1-2x\\
\implies\int \frac{1}{1-2x}dx=\int1dt\\
\implies-\frac{1}{2}\ln|1-2x|=t+C\\
\implies \ln|1-2x|=-2t+C\\
\implies 1-2x=Ae^{-2t}\\
\implies \fbox{$x=\frac{1}{2}-Ae^{-2t}$}
\end{align*}
$$
### ii)
$$
\begin{align*}
v(t)=e^{\int 2\, dt}=e^{2t}\\
\frac{d}{dt}(xe^{2t})=e^{2t}\\
\implies xe^{2t}=\frac{1}{2}e^{2t}+C\\
\implies \fbox{$x=\frac{1}{2}+Ce^{-2t}$}
\end{align*}
$$
### iii)
$$
\begin{align*}
\frac{dx}{dt}+2x=0\\
\implies \frac{dx}{dt}=-2x\\
\implies \int \frac{1}{x}dx=\int-2dt\\
\implies \ln|x|=-2t+C\\
\implies x_{h}=Ae^{-2t}\\
x_{p}=c\implies\frac{dx}{dt}=0\\
0+2c=1\\
\implies c=\frac{1}{2}\\
\implies \fbox{$x=Ae^{-2t}+\frac{1}{2}$}
\end{align*}
$$
## b)
![[Diff. Eqs. Problem Set 3 2023-09-22 14.11.17.excalidraw]]
$x=\frac{1}{2}$ is a [[Equilibrium#Stable Equilibrium|stable equilibrium]]
# Problem 4
$$
\begin{align*}
\ddot{x}+2\dot{x}-3x=2t-5\\
\frac{d^{2}x}{dt^{2}}+2 \frac{dx}{dt}-3x=0\\
x_{h}=Ae^{r_{1}t}+Be^{r_{2}t}\\
\implies\frac{dx}{dt}=Ar_{1}e^{r_{1}t}+Br_{2}e^{r_{2}t}\\
\implies \frac{d^{2}x}{dt^{2}}=Ar_{1}^{2}e^{r_{1}t}+Br_{2}^{2}e^{r_{2}t}\\
\implies Ae^{r_{1}t}(r_{1}^{2}+2r_{1}-3)+Be^{r_{2}t}(r_{2}^{2}+2r-3)=0\\
r_{1}=-3,r_{2}=1\\
\implies x_{h}=Ae^{-3t}+Be^{t}\\\\
x_{p}=at+b\\
\frac{dx}{dt}=a\\
\frac{d^{2}x}{dt^{2}}=0\\
2a-3at-3b=2t-5\\
\implies a=-\frac{2}{3}\implies b=\frac{11}{9}\\
\therefore x=Ae^{-3t}+Be^{t}-\frac{2}{3}t+\frac{11}{9}\\
x(0)=1,\dot{x}(0)=-1\\
\implies \begin{cases}
1=A+B+\frac{11}{9} \\
-1=-3A+B-\frac{2}{3}
\end{cases}\\
\implies2=4A+\frac{17}{9}\implies A=\frac{1}{36}\implies B=-\frac{9}{36}\\
\implies \fbox{$x=\frac{1}{36}e^{-3t}-\frac{1}{4}e^{t}-\frac{2}{3}t+\frac{11}{9}$}
\end{align*}
$$
# Problem 5
## a) $2\cos(3t)+2\sin(3t)$
![[Diff. Eqs. Problem Set 3 2023-09-22 17.52.40.excalidraw]]
$$
2\cos3t+2\sin3t=2\sqrt{2}\cos\left( 3t-\frac{\pi}{4} \right)
$$
## b) $\sqrt{3}\cos(\pi t)-\sin(\pi t)$
![[Diff. Eqs. Problem Set 3 2023-09-22 18.29.10.excalidraw]]
$$
\sqrt{3}\cos(\pi t)-\sin(\pi t)=2\cos\left( \pi t+\frac{\pi}{6} \right)
$$
## c) $\cos\left( t-\frac{\pi}{8} \right)+\sin\left( t-\frac{\pi}{8} \right)$
![[Diff. Eqs. Problem Set 3 2023-09-22 18.33.20.excalidraw]]
$$
\cos\left( t-\frac{\pi}{8} \right)+\sin\left( t-\frac{\pi}{8} \right)=\sqrt{2}\cos\left( t-\frac{\pi}{8}-\frac{\pi}{4} \right)=\sqrt{2}\cos\left( t-\frac{3\pi}{8} \right)
$$
# Problem 6
$$
\begin{align*}
\frac{dx}{dt}+3x=2\sin4t\\
\implies\int\frac{dx}{x}=\int-3\,dt\\
\implies x_{h}=Ce^{-3t}\\
x_{p}=a\sin4t+b\cos 4t\\
\implies \frac{dx}{dt}=4a\cos 4t-4b\sin 4t\\
4a\cos4t-4b\sin4t+3a\sin4t+3b\cos4t=2\sin4t\\
\implies\begin{cases}
4a+3b=0 \\
3a-4b=2
\end{cases}\\
\implies a=\frac{6}{25},b=-\frac{8}{25}\\
x=Ce^{-3t}+\frac{6}{25}\sin 4t-\frac{8}{25}\cos4t\\
x(0)=1\implies 1=C-\frac{8}{25}\implies C=\frac{33}{25}\\
\implies x=\frac{33}{25}e^{-3t}+\frac{6}{25}\sin 4t-\frac{8}{25}\cos4t\\
\frac{6}{25}\sin4t-\frac{8}{25}\cos4t\\
=-\sqrt{\left( -\frac{8}{25} \right)^2+\left( \frac{6}{25} \right)^{2}}\cos\left( 4t-\tan^{-1}\left( \frac{\frac{6}{25}}{-\frac{8}{25}} \right) \right)\\
\implies \fbox{$x=\frac{33}{25}e^{-3t}-\frac{2}{5}\cos(4t+0.6435)$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\frac{du}{dt}=1+\frac{dx}{dt}\\
=1+u^{2}\\
\implies \int\frac{du}{1+u^{2}}=\int 1\,dt\\
\implies \tan^{-1}u=t+C\\
\implies u=\tan(t+C)\\
\implies t+x+4=\tan(t+C)\\
\implies \fbox{$x=\tan(t+C)-t-4$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
\begin{array}{|l|l|}
\hline
y & \frac{dy}{dt} \\
\hline
0 & -\frac{3}{16} \\
\frac{1}{4} & 0 \\
\frac{1}{2} & \frac{1}{16} \\
\frac{3}{4} & 0 \\
1 & -\frac{3}{16} \\
\hline
\end{array}\\
\implies y_{0}=\frac{3}{4}\\
\end{align*}
$$
## a)
$$
\begin{align*}
\frac{du}{dt}=\frac{dy}{dt}\\
=(1-u-y_{0})(u+y_{0})-\frac{3}{16}\\
=\frac{1}{4}u+\frac{3}{16}-u^{2}-\frac{3}{4}u-\frac{3}{16}\\
=-u^{2}-\frac{u}{2}\\
\fbox{$\frac{du}{dt}=-u^{2}-\frac{u}{2}$}\\
\left.\frac{du}{dt}\right\vert_{u=0}=-(0)^{2}-\frac{0}{2}=0\ \checkmark
\end{align*}
$$
## b)
$$
\begin{align*}
\text{small }\implies\frac{du}{dt}=-\frac{u}{2}\\
\implies \int \frac{du}{u}=\int-\frac{1}{2}dt\\
\implies u=Ce^{-\frac{1}{2}t}
\end{align*}
$$
## c)
$$
\begin{align*}
u(10)=b\\
\implies Ce^{-5}=b\\
\implies C=be^{5}\\
\implies y=be^{5-\frac{1}{2}t}+\frac{3}{4}\\
y(11)=be^{5-\frac{11}{2}}+\frac{3}{4}=be^{-\frac{1}{2}}+\frac{3}{4}=\frac{b}{\sqrt{e}}+\frac{3}{4}\\
y(12)=be^{5-12/2}+\frac{3}{4}=be^{-1}+\frac{3}{4}=\frac{b}{e}+\frac{3}{4}
\end{align*}
$$
## d)
$p(t)$ and $q(t)$ must both be constants, as $\frac{dx}{dt}$ must be solely defined by $x$