---
tags:
  - math
  - math/linear-algebra
aliases:
  - Complex Numbers
---
A number of the form $z=a+ib$ where $i=\sqrt{-1}$
Extend usual rules of algebra to $\mathbb{C}$
Can be plotted using the [[Coordinate System]] the complex plane, with the real numbers as the x-axis and the imaginary numbers as the y-axis
![[Argument-and-Modulas-of-a-Complex-Number.png|50%]]
# Properties
$$
\begin{align*}
\text{For }z=x+iy:\\
\text{Algebraic properties:}\\
z_{1}+z_{2}=(x_{1}+iy_{1})+(x_{2}+iy_{2})=(x_{1}+x_{2})+i(y_{1}+y_{2})\\
t(x+iy)=tx+ity\\
(x_{1}+iy_{1})(x_{2}+iy_{2})=(x_{1}x_{2}-y_{1}y_{2})+i(x_{1}y_{2}+x_{2}y_{1})\\
\bar{z}=x-iy\quad\text{(complex conjugate)}\\
\end{align*}
$$
# Complex Conjugate
$$
\begin{align*}
z=x+iy\\
\bar{z}=x-iy\\
\overline{z_{1}z_{2}}=\bar{z}_{1}\bar{z}_{2}\\
\overline{z_{1}+z_{2}}=\bar{z}_{1}+\bar{z}_{2}\\
z\bar{z}=|z|^{2}
\end{align*}
$$
Flips around y-axis
# Modulus
Like [[vector]] magnitude
$$
\text{modulus}(z)=\text{mod}(z)=|z|=\sqrt{a^{2}+b^{2}}
$$
# Argument
$$
\text{argument}(z)=\text{arg}(z)=\theta=\tan^{-1}\left( \frac{b}{a} \right)
$$
# [[Polar Coordinates|Polar]] Form
Using [[Euler's Formula]]:
$$
\large\begin{align*}
z=|z|(\cos \theta+i\sin \theta)=\fbox{$|z|e^{i\theta}$}\\
z_{1}z_{2}=|z_{1}||z_{2}|e^{i(\theta_{1}+\theta_{2})}
\end{align*}
$$
So, multiplying complex numbers multiplies their [[#Modulus|moduli]] and adds their [[#Argument|arguments]]
$$
\begin{align*}
i=e^{i\pi/2}\\
\implies i^{2}=e^{i\pi}=-1
\end{align*}
$$
[[Euler's Formula#Euler's Identity|Euler's Identity]]!
# Trigonometry Application #math/trig
Derive sum and difference formulas from [[Euler's Formula]]:
$$
\begin{align*}
\cos(\theta+\phi)=\cos \theta \cos \phi-\sin \theta \sin \phi\\
\sin(\theta+\phi)=\sin \theta \cos \phi+\cos \theta \sin \phi\\
e^{i(\theta+\phi)}=\cos(\theta+\phi)+i\sin(\theta+\phi)\\
=e^{i\theta}e^{i\phi}=(\cos \theta+i\sin \theta)(\cos \phi+i\sin \phi)\\
=(\cos \theta \cos \phi-\sin \theta \sin \phi)+i(\sin \theta \cos \phi+\cos \theta \sin \phi)
\end{align*}
$$
# Calculus Application #math/calc 
$$
\begin{align*}
\int e^{(a+ib)t}\ dt=\int e^{at}\cos bt\ dt+i\int e^{at}\sin bt\ dt\\
=\frac{e^{(a+ib)t}}{a+ib}=\frac{e^{at}}{a^{2}+b^{2}}(a-ib)(\cos bt+i\sin bt)\\
=\frac{e^{at}}{a^{2}+b^{2}}[(a\cos bt+b\sin bt)+i(-b\cos bt+a\sin bt)]\\
\implies \int e^{at}\cos bt\ dt=\frac{e^{at}}{a^{2}+b^{2}}(a\cos bt+b\sin bt)+C\\
\implies \int e^{at}\sin bt\ dt=\frac{e^{at}}{a^{2}+b^{2}}(-b\cos bt+a\sin bt)+C
\end{align*}
$$