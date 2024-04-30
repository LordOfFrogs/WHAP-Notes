---
tags:
  - math/calc
aliases:
  - ESR
---
For [[Nth-Order ODE]] with [[Nth-Order ODE#Constant Coefficients|constant coefficients]] of the form
$$
[p(D)]x(t)=e^{rt}q(t)
$$
If $u(t)$ is a solution to $[p(D+rI)]u(t)=q(t)$, then $x(t)=e^{rt}u(t)$ is a particular solution
# Derivation
$$
\begin{align*}
D(e^{rt}u)=e^{rt}Du+re^{rt}u=e^{rt}[D+rI]u(t)\\
D^{2}(e^{rt}u)=D[e^{rt}(D+rI)u]\\
=e^{rt}[(D^{2}+rD)u]+re^{rt}(D+rI)(u)\\
=e^{rt}[D^{2}+2rD+r^{2}I]u\\
=e^{rt}[D+rI]^{2}u(t)\\
\implies D^{n}(e^{rt}u)=e^{rt}[D+rI]^{n}u(t)\\
\implies [p(D)](e^{rt}u)=e^{rt}[p(D+rI)]u(t)\\
\text{Let } [p(D+rI)]u(t)=q(t)\\
\implies [p(D)](e^{rt}u(t))=e^{rt}q(t)\\
\therefore \fbox{$x(t)=e^{rt}u(t) \text{ solves } [p(D)]x(t)=e^{rt}q(t)$}
\end{align*}
$$