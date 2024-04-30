---
tags:
  - math
  - math/linear-algebra
---
$$
\Huge e^{it}=\cos t+i\sin t
$$
For [[Complex Number]]
Alternately: $e^{i\omega t}=\cos \omega t+i\sin \omega t$
# Euler's Identity
$$
\Huge t=\pi\implies e^{i\pi}=-1
$$
# Derivation from calculus #math/calc 
$$
\begin{align*}
\text{Maclaurin series:}\\
e^{t}=1+t+\frac{t^{2}}{2!}+\cdots+\frac{t^{n}}{n!}\\
\cos t=1-\frac{t^{2}}{2!}+\frac{t^{4}}{4!}-\frac{t^{6}}{6!}+\cdots+(-1)^{2n} \frac{t^{2n}}{(2n)!}\\
\sin t=t-\frac{t^{3}}{3!}+\frac{t^{5}}{5!}-\frac{t^{7}}{7!}+\cdots+(-1)^{2n+1} \frac{t^{2n+1}}{(2n+1)!}\\
\text{Replace $t$ with $it$:}\\
e^{it}=1+(it)+\frac{(it)^{2}}{2!}+\frac{(it)^{3}}{3!}+\frac{(it)^{4}}{4!}+\cdots\\
=\left( 1-\frac{t^{2}}{2!}+\frac{t^{4}}{4!}\cdots \right)+i\left( t-\frac{t^{3}}{3!}+\frac{t^{5}}{5!}\cdots \right)\\
\implies \fbox{$e^{it}=\cos t+i\sin t$}
\end{align*}
$$