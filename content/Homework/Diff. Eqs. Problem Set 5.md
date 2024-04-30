---
tags:
  - math/calc
due: 2023-10-13
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS5-2023.pdf)
# Problem 1
## a)
$$
\begin{align*}
\ddot{x}+2\dot{x}+cx=0\\
\implies p(r)=r^{2}+2r+c\\
\implies r=\frac{-2\pm\sqrt{2^{2}-4c}}{2}\\
=-1\pm\sqrt{1-c}\\
\text{Two real roots: } 1-c>0\\
\implies \fbox{$c<1$}\\
\text{Repeated real root: }1-c=0\\
\implies \fbox{$c=1$}\\
\text{Complex roots: }1-c<0\\
\implies \fbox{$c>1$}
\end{align*}
$$
## b)
$$
\begin{align*}
\text{Two real roots}\implies c<1\\
\text{Let }r_{1}=-1+\sqrt{1-c},r_{2}=-1-\sqrt{1-c}\\
r_{1}<0\implies -1+\sqrt{1-c}<0\\
\implies \sqrt{1-c}<1\implies 1-c<1\\
\implies c>0\\
r_{2}<0\implies-1-\sqrt{1-c}<0\\
\implies -\sqrt{1-c}<1\\
\text{True for all c ($\sqrt{}$ in this case is principle root)}\\
\therefore \fbox{$\begin{align}\text{Both -}: c>0\\
\text{Both + : never}\\
\text{Different signs}:c\leq0\end{align}$}\\
\text{(c=0 included because one root would be 0 and the}\\
\text{other would be negative, so they have different signs)}
\end{align*}
$$
## c)
![[Diff. Eqs. Problem Set 5 2023-10-08 09.37.04.excalidraw]]
## d)
$$
\begin{align*}
\text{Stable}\Longleftrightarrow \lim_{ t \to \infty } x_{h}(t)=0\\
x_{h}(t)=c_{1}e^{r_{1}t}+c_{2}e^{r_{2}t}\\
r_{1},r_{2}\in\mathbb{R}\implies r_{1},r_{2}<0\\
r_{1},r_{2}\in\mathbb{C}\implies r_{1},r_{2}=a\pm bi\implies a<0\\
r_{1},r_{2}\in\mathbb{R}\land r_{1},r_{2}<0\implies 0<c\leq1\\
r_{1},r_{2}\in\mathbb{C}\land a<0\implies c>1\\
\therefore \fbox{ODE is stable $\Longleftrightarrow c>0$}
\end{align*}
$$
![[Diff. Eqs. Problem Set 5 2023-10-08 10.22.55.excalidraw]]
## e)
$$
\begin{align*}
\ddot{x}+2\dot{x}-3x=0,x(0)=1,\dot{x}(0)=-1\\
r=-3,1\\
\implies x=c_{1}e^{-3t}+c_{2}e^{t}\\
1=c_{1}+c_{2}\\
\dot{x}=-3c_{1}e^{-t}+c_{2}e^{t}\\
-1=-3c_{1}+c_{2}\\
\implies 2=4c_{1}\\
\implies c_{1}=\frac{1}{2},c_{2}=\frac{1}{2}\\
\implies \fbox{$x=\frac{1}{2}e^{-3t}+\frac{1}{2}e^{t}$}
\end{align*}
$$
## f)
$$
\begin{align*}
\ddot{x}+2\dot{x}+5x=0,x(0)=1,\dot{x}(0)=-1\\
r=\frac{-2\pm\sqrt{2^{2}- 4(5)}}{2}=-1\pm2i\\
\implies x=c_{1}e^{(-1+2i)t}+c_{2}e^{(-1-2i)t}\\
=c_{1}e^{-t}e^{2it}+c_{2}e^{-t}e^{-2it}\\
=c_{1}e^{-t}(\cos2t+i\sin2t)+c_{2}e^{-t}(\cos(-2t)+i\sin(-2t))\\
=c_{1}e^{-t}\cos2t+c_{1}e^{-t}i\sin2t+c_{2}e^{-t}\cos2t-c_{2}e^{-t}i\sin2t\\
=e^{-t}[(c_{1}+c_{2})\cos2t+(c_{1}-c_{2})i\sin2t]\\
=e^{-t}(a\cos2t+bi\sin2t)\\
1=a\\
\dot{x}=-ae^{-t}\cos2t-2ae^{-t}\sin2t-bie^{-t}\sin2t+2bie^{-t}\cos2t\\
=e^{-t}[-a\cos 2t-2a\sin 2t-bi\sin 2t+2bi\cos 2t]\\
-1=-a+2bi\\
\implies b=0\\
\fbox{$x=e^{-t}\cos 2t$}
\end{align*}
$$
## g)
$$
\begin{align*}
\ddot{x}+2\dot{x}+x=0,x(0)=1,\dot{x}(0)=-1\\
r=-1\text{ (double root)}\\
x=c_{1}e^{-t}+c_{2}te^{-t}\\
1=c_{1}\\
\dot{x}=-c_{1}e^{-t}+c_{2}e^{-t}-c_{2}te^{-t}\\
-1=-c_{1}+c_{2}\implies c_{2}=0\\
\fbox{$x=e^{-t}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
2\ddot{x}-3\dot{x}=0\\
p(r)=2r^{2}-3r=0\\
\implies r=0, \frac{3}{2}\\
\implies \fbox{$x=c_{1}+c_{2}e^{\frac{3}{2}t}$}\\
x(0)=3\implies3=c_{1}+c_{2}\\
\dot{x}=\frac{3}{2}c_{2}e^{\frac{3}{2}t}\\
\dot{x}(0)=1\implies 1=\frac{3}{2}c_{2}\\
\implies c_{2}=\frac{2}{3},c_{1}=\frac{7}{3}\\
\implies \fbox{$x=\frac{7}{3}+\frac{2}{3}e^{\frac{3}{2}t}$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\ddot{x}-6\dot{x}+25x=0\\
p(r)=r^{2}-6r+25=0\\
\implies r=\frac{6\pm\sqrt{36-100}}{2}\\
=\frac{6\pm8i}{2}=3\pm4i\\
\implies x=c_{1}e^{(3+4i)t}+c_{2}e^{(3-4i)t}\\
=c_{1}e^{3t}(\cos4t+i\sin4t)+c_{2}e^{3t}(\cos(-4t)+i\sin(-4t))\\
\implies \fbox{$x=e^{3t}(a\cos4t+b\sin4t)$}\\
x(0)=3\implies 3=a\\
\dot{x}=3ae^{3t}\cos4t-4ae^{3t}\sin4t+3be^{3t}\sin4t+4be^{3t}\cos4t\\
\dot{x}(0)=1\implies 1=3a+4b\\
\implies 4b=-8\\
\implies b=-2\\
\implies \fbox{$x=e^{3t}(3\cos4t-2\sin4t)$}
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
\frac{d^{5}x}{dt^{5}}-4 \frac{d^{4}x}{dt^{4}}+4 \frac{d^{3}x}{dt^{3}}=0\\
p(r)=r^{5}-4r^{4}+4r^{3}=0\\
\implies r^{3}(r^{2}-4r+4)=0\\
\implies r^{3}(r-2)^{2}=0\\
\implies r=0\text{ (x3)},2\text{ (x2)}\\
\implies x=\text{Span}\{1,t,t^{2},e^{2t},te^{2t}\}\\
\implies \fbox{$x=c_{1}+c_{2}t+c_{3}t^{2}+c_{4}e^{2t}+c_{5}te^{2t}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\frac{d^{3}x}{dt^{3}}+6 \frac{d^{2}x}{dt^{2}}+12 \frac{dx}{dt}+8x=0\\
p(r)=r^{3}+6r^{2}+12r+8=0\\
\begin{array}{c|rrr}
-2 & 1 & 6 & 12 & 8 \\
 &  & -2 & -8 & -8 \\
\hline  & 1 & 4 & 4 & 0
\end{array}\\
\implies (r+2)(r^{2}+4r+4)=0\\
\implies r=-2\text{ (x3)}\\
\implies \fbox{$x=c_{1}e^{-2t}+c_{2}te^{-2t}+c_{3}t^{2}e^{-2t}$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\ddot{x}-2\dot{x}+4x=e^{t}\cos t\\
z=x+iy, T(y)=e^{t}\sin t\\
\ddot{z}-2\dot{z}+4z=e^{(1+i)t}\\
z_{p}=\frac{e^{(1+i)t}}{p(1+i)}=\frac{e^{t}}{2}(\cos t+i\sin t)\\
\implies \fbox{$x_{p}=\frac{e^{t}}{2}\cos t$}
\end{align*}
$$
# Problem 6
$$
\begin{align*}
\ddot{x}-6\dot{x}+9x=4e^{3t}\\
p(r)=r^{2}-6r+9\\
\implies r=3\text{ (x2)}\\
\implies x_{h}=c_{1}e^{3t}+c_{2}te^{3t}\\
x_{p}=\frac{4t^{2}e^{3t}}{p''(3)}\\
p'(r)=2r-6\rightarrow p''(r)=2\\
\implies x_{p}=2t^{2}e^{3t}\\
\implies x=c_{1}e^{3t}+c_{2}te^{3t}+2t^{2}e^{3t}\\
x(0)=5\implies 5=c_{1}\\
\dot{x}=3c_{1}e^{3t}+c_{2}e^{3t}+3c_{2}te^{3t}+4te^{3t}+6t^{2}e^{3t}\\
\dot{x}(0)=6\implies 6=3c_{1}+c_{2}\\
=15+c_{2}\\
\implies c_{2}=-9\\
\implies \fbox{$x=5e^{3t}-9te^{3t}+2t^{2}e^{3t}$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
R=12\ \ohm,L=1\ \text{H},C=0.01\ \text{F}\\
V(t)=12\cos10t
\end{align*}
$$
## a)
$$\begin{align*}
V=L\dot{I}+RI+\frac{Q}{C}\\
\dot{Q}=I\\
\implies \ddot{Q}+12\dot{Q}+100Q=12\cos10t\\
p(r)=r^{2}+12r+100=0\\
\implies r=\frac{-12\pm\sqrt{-256}}{2}\\
=-6\pm8i\\
\implies Q_{h}=e^{-6t}(a\cos8t+b\sin8t)\\
z=Q+iy,T(y)=12\sin10t\\
\ddot{z}+12\dot{z}+100z=12e^{10it}\\
\implies z_{p}=\frac{12e^{10it}}{p(10i)}\\
=\frac{12e^{10it}}{(10i)^{2}+12(10i)+100}\\
=-\frac{1}{10}(i\cos10t-\sin10t)\\
\implies Q_{p}=\frac{1}{10}\sin10t\\
\implies Q=e^{-6t}(a\cos8t+b\sin8t)+\frac{1}{10}\sin10t\\
Q(0)=0\implies a=0\\
\dot{Q}=-6e^{-6t}(a\cos8t+b\sin8t)-8e^{-6t}(a\sin8t-b\cos8t)+\cos10t\\
I(0)=\dot{Q}(0)=0\implies0=-6a+8b+1\\
\implies b=-\frac{1}{8}\\
\implies \fbox{$Q(t)=-\frac{1}{8}e^{-6t}\sin8t+\frac{1}{10}\sin10t$}
\end{align*}
$$
## b)
$$
\begin{align*}
\dot{Q}=I\\
\dot{Q}=\frac{3}{4}e^{-6t}\sin8t-e^{-6}\cos8t+\cos10t\\
\implies \fbox{$I(t)=\frac{3}{4}e^{-6t}\sin8t-e^{-6t}\cos8t+\cos10t$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
m=1,c=6,k=45,F_{0}=50\\
m\ddot{x}+c\dot{x}+kx=F_{0}\cos \omega t\\
\ddot{x}+6\dot{x}+45x=50\cos(\omega t)\\
p(r)=r^{2}+6r+45=0\\
\implies r=\frac{-6\pm\sqrt{36-180}}{2}\\
=-3\pm6i\text{ (transient)}\\
T(y)=50\sin(\omega t),z=x+iy\\
\ddot{z}+6\dot{z}+45z=50e^{\omega it}\\
\implies z_{p}=\frac{50e^{\omega it}}{p(\omega i)}=\frac{50e^{\omega it}}{45-\omega^{2}+6\omega i}\frac{(45-\omega^{2}-6\omega i)}{(45-\omega^{2}-6\omega i)}\\
=\frac{50}{\omega^{4}-54\omega^{2}+2025}(45-\omega^{2}-6\omega i)(\cos \omega t+i\sin \omega t)\\
\implies x_{p}=\frac{50}{\omega^{4}-54\omega^{2}+2025}(45\cos \omega t-\omega^{2} \cos \omega t+6\omega \sin \omega t)\\
=\frac{50(45\cos \omega t-\omega^{2} \cos \omega t+6\omega \sin \omega t)}{\omega^{4}-54\omega^{2}+2025}\text{ (steady state)}\\
(45-\omega^{2})\cos \omega t+6\omega \sin \omega t=\sqrt{\omega^{4}-54\omega^{2}+2025}\cos(\omega t-\phi_{0})\\
\implies x_{p}=\frac{50}{\sqrt{\omega^{4}-54\omega^{2}+2025}}\cos(\omega t-\phi_{0})\\
\implies \fbox{$A(\omega)=\frac{50}{\sqrt{\omega^{4}-54\omega^{2}+2025}}$}\\
A'(\omega)=-25(\omega^{4}-54\omega^{2}+2025)^{\frac{3}{2}}(4\omega^{3}-108\omega)=0\\
\implies \omega=0,\pm3\sqrt{3},\text{complex solutions}\\
\begin{array}{c|c}
\omega & A(\omega) \\
\hline -3\sqrt{3} & \frac{25}{18} \\
0 & \frac{10}{9} \\
3\sqrt{3} & \frac{25}{18}
\end{array}\\
\therefore \fbox{$\omega=3\sqrt{3}\approx5.196$ is maximum amplitude}
\end{align*}
$$
