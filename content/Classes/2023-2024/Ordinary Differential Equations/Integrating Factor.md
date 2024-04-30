---
tags:
  - math/calc
---
A [[First Order ODE]], [[Linear ODE#Homogeneous|inhomogeneous]]
$$
\begin{align*}
\frac{dx}{dt}+p(t)x=q(t)
\end{align*}
$$
Seek v(t) such that
$$
\begin{align*}
v(t)\left[ \frac{dx}{dt}+p(t)x \right]=v(t)q(t)\\
\frac{d}{dx}(vx)=v(t) \frac{dx}{dt} + \frac{dv}{dt}x\\
pv=\frac{dv}{dt}\\
\int{\frac{dv}{dt}}=\int{p\, dt} \implies \ln|v|=\int{p(t)dt}\implies \fbox{$v(t)=e^{\int{p dt}}$}\\
\frac{d}{dt}(vx)=vq\\
\implies vx=\int q(t)e^{\int{p dt}}+C\\
\implies x(t)=e^{-\int{p\,dt}}\left[\int{q\left(t\right)e^{\int{p\,dt}}\,dt}+C\right]
\end{align*}
$$