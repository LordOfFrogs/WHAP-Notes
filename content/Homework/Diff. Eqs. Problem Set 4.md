---
tags:
  - math/calc
due: 2023-10-07
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS4-2023.pdf)
# Problem 1
## a)
$$
\begin{align*}
r=|-1+i|=\sqrt{2}\\
\theta=\tan^{-1}\left( \frac{1}{-1} \right)=\frac{3\pi}{4}\\
\fbox{$\sqrt{2}e^{3i\pi/4}$}
\end{align*}
$$
## b)
$$
\begin{align*}
r=|\sqrt{3}-i|=2\\
\theta=\tan^{-1}\left( -\frac{\sqrt{3}}{3} \right)=-\frac{\pi}{6}\\
\fbox{$2e^{-i\pi/6}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\frac{1-i}{1+i}=\frac{(1-i)(1-i)}{(1+i)(1-i)}=\frac{-2i}{2}=\fbox{$-i$}\\
\frac{1-i}{1+i}=\frac{\sqrt{2}e^{7i\pi/4}}{\sqrt{2}e^{i\pi/4}}=e^{3i\pi/2}\\
=\cos\left( \frac{3\pi}{2} \right)+i\sin\left( \frac{3\pi}{2} \right)\\
=\fbox{$-i$}\checkmark
\end{align*}
$$
# Problem 3
## a)
$$
\begin{align*}
(1-i)^{4}=1^{4}+4(1)^{3}(i)+6(1)^{2}(i)^{2}+4(1)(i)^{3}+i^{4}\\
=1+4i-6-4i+1=\fbox{$-4$}\\
(1-i)^{4}=(\sqrt{2}e^{7i\pi/4})^{4}=4e^{7i\pi}=\fbox{$-4$}
\end{align*}
$$
## b)
$$
\begin{align*}
(1+i\sqrt{3})^{3}=1^{3}+3(1)^{2}(i\sqrt{3})+3(1)(i\sqrt{3})^{2}+(i\sqrt{3})^{3}\\
=1+3\sqrt{3}i-9-3\sqrt{3}i=\fbox{$-8$}\\
(1+i\sqrt{3})^{3}=(2e^{i\pi/3})^{3}=8e^{i\pi}=\fbox{$-8$}
\end{align*}
$$
# Problem 4
## a)
$$
\begin{align*}
z^{4}+4=0\\
\implies z^{4}=-4\\
\implies z^{2}=2i,-2i\\
\implies |z|^{2}e^{2i\theta}=2i,-2i\\
\implies |z|^{2}(\cos2\theta +i\sin2\theta)=2i,-2i\\
\implies \theta=\frac{\pi}{4}+k\frac{\pi}{2},k\in\mathbb{Z}\\
\implies |z|=\sqrt{2}\\
\implies \fbox{$z=1+i,1-i,-1+i,-1-i$}\\
z^{2}+2z+2=0\\
\implies z=\frac{-2\pm\sqrt{2^{2}-4(1)(2)}}{2(1)}\\
=\frac{-2\pm\sqrt{-4}}{2}=-1\pm i\\
\implies \fbox{$z=-1+i,-1-i$}
\end{align*}
$$
## b)
$$
\begin{align*}
e^{z}=-2\\
\implies e^{a}e^{bi}=-2\\
\implies e^{a}(\cos b+i\sin b)=-2\\
\implies a=\ln{2},b=\pi+2\pi k,k\in\mathbb{Z}\\
\implies \fbox{$z=\ln2+(\pi+2\pi k)i,k\in\mathbb{Z}$}
\end{align*}
$$
## c)
$$
\begin{align*}
e^{4it}=(e^{it})^{4}\\
=\cos 4t+i\sin4t\\
=(\cos t+i\sin t)^{4}\\
=\cos^{4}t+4i\cos^{3}t\sin t-6\cos^{2}t\sin^{2}t-4i\cos t\sin^{3}t+\sin^{4}t\\
\implies \cos 4t=\cos^{4}t-6\cos^{2}t\sin^{2}t+\sin^{4}t\\
+4i\cos^{3}t\sin t-4i\cos t\sin^{3}t-i\sin4t\\
\left.\begin{array}{r}
4i\cos^{3}t\sin t-4i\cos t\sin^{3}t\\
=2i(2\sin t\cos t)(\cos^{2}t-\sin^{2}t)\\
=2i\sin2t\cos2t\\
i\sin4t=2i\sin2t\cos2t\\
\end{array}
\right\}&\text{Double angle formulas}\\
\implies 4i\cos^{3}t\sin t-4i\cos t\sin^{3}t-i\sin4t=0\\
\implies \fbox{$\cos4t=\cos^{4}t-6\cos^{2}t\sin^{2}t+\sin^{4}t$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\int e^{2x}\sin x\,dx\\
z=a+bi\\
\implies \int e^{zx}\,dx=\int e^{ax}\cos bx\,dx+i\int e^{ax}\sin bx\,dx\\
a=2,b=1\\
\implies \int e^{zx}\,dx=\frac{e^{(2+i)x}}{2+i}\\
=\frac{e^{2x}}{5}(2-i)(\cos x+i\sin x)\\
=\frac{e^{2x}}{5}(2\cos x-i\cos x+2i\sin x+\sin x)\\
=\frac{e^{2x}}{5}[(2\cos x+\sin x)+i(2\sin x-\cos x)]\\
=\frac{e^{2x}}{5}(2\cos x+\sin x)+i\frac{e^{2x}}{5}(2\sin x-\cos x)\\
\implies \fbox{$\int e^{2x}\sin x=\frac{e^{2x}}{5}(2\sin x-\cos x)$}
\end{align*}
$$
# Problem 6
## a)
$$
\begin{align*}
\dot{x}+2x=4e^{3t}\\
x_{p}=Be^{3t}\implies 3Be^{3t}+2Be^{3t}=4e^{3t}\\
\implies 5B=4\implies B=\frac{4}{5}\\
\implies \fbox{$x_{p}=\frac{4}{5}e^{3t}$}\\
\dot{x}_{h}+2x_{h}=0\\
\implies \int \frac{1}{x}\,dx=\int-2\,dt\\
\implies x_{h}=Ce^{-2t}\\
\implies \fbox{$x=Ce^{-2t}+\frac{4}{5}e^{3t}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\dot{z}+2z=4e^{3it}\\
z_{p}=Be^{3it}\\
\implies 3iBe^{3it}+2Be^{3it}=4e^{3it}\\
\implies 3iB+2B=4\implies B=\frac{4}{2+3i}\\
=\frac{4(2-3i)}{13}=\frac{8}{13}-\frac{12}{13}i\\
\implies \fbox{$z_{p}=\frac{4e^{3it}}{13}(2-3i)$}\\
\dot{z}+2z=0\\
\implies \int \frac{1}{z}\,dz=\int-2\,dt\\
\implies z_{h}=Ce^{-2t}\\
\implies \fbox{$z=Ce^{-2t}+\frac{4e^{3it}}{13}(2-3i)$}
\end{align*}
$$
## c)
$$
\begin{align*}
z=x+iy\\
\implies T(z)=T(x+iy)\\
=T(x)+iT(y)\\
\implies \dot{z}+2z=4\cos3t+4i\sin3t=4e^{3it}\\
\implies z_{p}=\frac{4e^{3it}}{13}(2-3i)\\
=\frac{8}{13}e^{3it}-\frac{12}{13}ie^{3it}\\
=\frac{8}{13}(\cos3t+i\sin3t)-\frac{12}{13}i(\cos3t+i\sin3t)\\
=\frac{8}{13}\cos3t+\frac{12}{13}\sin3t+i\left[ \frac{8}{13}\sin3t-\frac{12}{13}\cos3t \right]\\
\implies x_{p}=\frac{8}{13}\cos3t+\frac{12}{13}\sin3t &\quad\text{(i)}\\
=\sqrt{\left( \frac{8}{13} \right)^{2}+\left( \frac{12}{13} \right)^{2}}\cos\left( 3t-\tan^{-1}\left( \frac{\frac{12}{13}}{\frac{8}{12}} \right) \right)\\
=\frac{4\sqrt{13}}{13}\cos(3t-0.927) &\quad\text{(ii)}\\
y_{p}=\frac{8}{13}\sin3t-\frac{12}{13}\cos3t &\quad\text{(i)}\\
=\frac{4\sqrt{13}}{13}\cos\left( 3t-\tan^{-1}\left( -\frac{3}{4} \right) \right)\\
=\frac{4\sqrt{13}}{13}\cos(3t+0.643) &\quad\text{(ii)}\\
\implies \fbox{$x=Ce^{-2t}+\frac{8}{13}\cos3t+\frac{12}{13}\sin3t$}\\
\fbox{$y=Ce^{-2t}+\frac{8}{13}\sin3t-\frac{12}{13}\cos3t$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
\ddot{x}+5\dot{x}+6x=2e^{-t}\cos t\\
p(r)=r^{2}+5r+6=0\\
r=-3,-2\\
x_{h}=c_{1}e^{-3t}+c_{2}e^{-2t}\\
z=x+yi,T(y)=2e^{-t}\sin t\\
T(z)=T(x)+iT(y)\\
\ddot{z}+5\dot{z}+6z=2e^{-t}\cos t+2ie^{-t}\sin t\\
=2e^{-t}(\cos t+i\sin t)=2e^{-t}e^{it}=2e^{(-1+i)t}\\
z_{p}=\frac{2e^{(-1+i)t}}{p(-1+i)}=\frac{2e^{(-1+i)t}}{-2i-5+5i+6} &\quad\text{ERF}\\
=\frac{2e^{(-1+i)t}}{1+3i}=\frac{2e^{-t}}{1+3i}(\cos t+i\sin t)\\
=\frac{2e^{-t}-6ie^{-t}}{10}(\cos t+i\sin t)\\
=\frac{1}{5}e^{-t}\cos t+\frac{1}{5}ie^{-t}\sin t-\frac{3}{5}ie^{-t}\cos t+\frac{3}{5}e^{-t}\sin t\\
=\frac{1}{5}e^{-t}(\cos t+3\sin t)+\frac{1}{5}ie^{-t}(-3\cos t+\sin t)\\
\implies x_{p}=\frac{1}{5}e^{-t}(\cos t+3\sin t)\\
\implies x=c_{1}e^{-3t}+c_{2}e^{-2t}+\frac{1}{5}e^{-t}(\cos t+3\sin t)\\
\implies \dot{x}=-3c_{1}e^{-3t}-2c_{2}e^{-2t}-\frac{1}{5}e^{-t}(\cos t+3\sin t)+\frac{1}{5}e^{-t}(-\sin t+3\cos t)\\
x(0)=2,\dot{x}(0)=-4\\
\begin{cases}
2=c_{1}+c_{2}+\frac{1}{5}\implies c_{1}=\frac{9}{5}-c_{2} \\
-4=-3c_{1}-2c_{2}+\frac{2}{5}\implies -\frac{22}{5}=-3c_{1}-2c_{2}
\end{cases}\\
\implies -\frac{22}{5}=-3\left( \frac{9}{5}-c_{2} \right)-2c_{2}=-\frac{27}{5}+c_{2}\\
\implies c_{2}=1,c_{1}=\frac{4}{5}\\
\implies \fbox{$x=\frac{4}{5}e^{-3t}+e^{-2t}+\frac{1}{5}e^{-t}(\cos t+3\sin t)$}
\end{align*}
$$