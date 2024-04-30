---
tags:
  - math/calc
aliases:
  - Dirac Delta Function
---

Derivative of [[Heaviside Function]]
While not differentiable at 0, say the derivative is infinity
$$
\dot{u}(t)=\delta(t)=\begin{Bmatrix}
0 & t\neq0 \\
\infty & t=0
\end{Bmatrix}
$$
For point a:
$$
\dot{u}_{a}(t)=u(t-a)=\delta_{a}=\delta(t-a)=\begin{Bmatrix}
0 & t\neq a \\
\infty & t=a
\end{Bmatrix}
$$
Has properties:
$$
\begin{align*}
f(0)=\int_{-\infty}^{+\infty} f(t)\delta(t)\,dt \\
f(a)=\int_{-\infty}^{+\infty} f(t)\delta_{a}(t)\,dt \\
\implies \int_{-\infty}^{+\infty} \delta(t) \, dt=1 
\end{align*}
$$
## Derivation
Using [[Integral|integration]] by parts:
$$
\int_{a}^{b} u(t)v'(t)\,dt=[uv]\biggr|_{t=a}^{t=b}-\int_{a}^{b} u'(t)v(t)\,dt
$$
Suppose $g(t)$ has compact support (vanishes outside some closed bounded interval)
$$
\int_{-\infty}^{+\infty} f'(t)g(t)\,dt=-\int_{-\infty}^{+\infty} f(t)g'(t) \,dt  
$$
Apply to Heaviside function:
$$
\begin{align*}
\int_{-\infty}^{+\infty} \delta(t)g(t)\,dt = -\int_{-\infty}^{+\infty} u(t)g'(t)\,dt=-\int_{0}^{\infty} g'(t)\,dt =-[0-g(0)]=g(0)
\end{align*}
$$
Similarly, can be done for $t=a$ shift