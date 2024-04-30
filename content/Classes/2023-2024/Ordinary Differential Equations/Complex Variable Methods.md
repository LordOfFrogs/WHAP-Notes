---
tags:
  - math
  - math/calc
---
For [[Linear ODE]]s of the form $T(f)=g$ where the [[Input-Response Formulation|input]] is sinusoidal or exponential or both
Eg. $g(t)=ke^{at}$ or $g(t)=k\cos \omega t$ or $g(t)=k\sin \omega t$ or some sum or product of them
# Finding [[Linear ODE#Homogeneous|homogeneous]] solutions
Eg.
$$
\begin{align*}
\ddot{x}+\omega^{2}x=0\\
p(r)=r^{2}+\omega^{2}=0\\
\implies r=\pm iw\\
\implies x_{1}=e^{i\omega t}=\cos \omega t+i\sin \omega t\\
\implies x_{2}=e^{-i\omega t}=\cos \omega t-i\sin \omega t\\
\implies x_{h}=\text{Span}\{e^{i\omega t},e^{-i\omega t}\}\\
=\text{Span}\{\cos \omega t,\sin \omega t\}\\
=c_{1}e^{i\omega t}+c_{2}e^{-i\omega t}\\
=\fbox{$a_{1}\cos \omega t+a_{2}\sin \omega t$}
\end{align*}
$$[^1]
# Complex Replacement
Uses [[Exponential Response Formula|ERF]]
$$
\begin{align*}
T(x(t))=a\cos \omega t, T(y(t))=a\sin \omega t\\
z(t)=x(t)+iy(t)\\
T(z(t))=T(x(t))+iT(y(t))\\
=a(\cos \omega t+i\sin \omega t)\\
=ae^{i\omega t}\\
\implies z_{p}(t)=\frac{ae^{i\omega t}}{p(i\omega)}
\end{align*}
$$
Which can then be used to find $x(t)$ and $y(t)$ using [[Euler's Formula]]
$$
\begin{align*}
\frac{ae^{i\omega t}}{p(i\omega)}=\frac{ae^{i\omega t}}{|p(i\omega)|e^{i\phi}}\\
=\frac{a}{|p(i\omega)|}[\cos(\omega t-\phi)+i\sin(\omega t-\phi)]
\end{align*}
$$
$\phi$ is known as phase angle, like lag
$\frac{1}{|p(i\omega)|}$ is gain, same as in amps, etc.

[^1]: See [[Span]]