---
tags:
  - math/calc
---
For an [[Autonomous ODE]] $p(D)[x(t)]=f(t)$ , the [[Input-Response Formulation#Zero State Response|ZSR]] is
$$
x(t)=(f*w)(t)=\int_{0}^{t} f(\tau)w(t-\tau)\,d\tau
$$
Where $(f*w)$ is the [[Convolution]] with the [[Unit Impulse Response]]

When used with [[Convolution#Properties]]:
$$
x(t)=\mathscr{L}^{-1}[F(s)W(s)]=\mathscr{L}^{-1}\left[ \frac{F(s)}{p(s)} \right]
$$
# Derivation
Solve [[Linear ODE]] $p(D)[x(t)]=f(t)$ with initial conditions $x(0)=x_{0},\dot{x}(0)=\dot{x}_{0}$
Plan: 
- Find [[Unit Impulse Response]] (likely using [[Laplace Transform]])
- Think of $f(t)$ as "train of impulses"
- Use [[Integral#Reimann Sums|Reimann sums]] to construct [[integral]] by piecing together impulse solutions
- Called the convolution [[integral]]

[[Autonomous ODE]] means that translated [[Unit Impulse Response]]
$$
p(D)[x(t)]=\delta(t-t_{k})\implies w(t-t_{k})
$$
Partition time interval $[0,t]$ into subintervals $[t_{k-1},t_{k}]$, use [[Heaviside Function]] to turn $f(t)$ on and off on interval:
$$
f_{k}(t)=f(t)[u(t-t_{k-1})-u(t-t_{k})]
$$
Zero everywhere except on interval
Assemble function:
$$
f(t)=\sum f_{k}(t)
$$
If $f(t)$ is reasonably well behaved (except at finitely many points),
$$
f_{k}(t)\cong f(t_{k})=\int_{0}^{\infty} f(t)\delta(t-t_{k})\, dt = \int_{-\infty}^{\infty} f(t)\delta(t-t_{k}) \, dt 
$$
By [[Linearity]]:
$$
p(D)[x(t)]=f(t_{k})\delta(t-t_{k})\Delta t_{k}\implies x(t)=f(t_{k})w(t-t_{k})\Delta t_{k}
$$
Where $\Delta t_{k}=t_{k}-t_{k-1}$
Superposition of solutions gives that
$$
p(D)[x(t)]\cong\sum_{k}f(t_{k})\delta(t-t_{k})\Delta t_{k}\implies x(t)\cong\sum_{k}f(t_{k})w(t-t_{k})\Delta t_{k}
$$
Call $t_{k}$ $\tau_{k}$
Take limit to get [[Integral]]:
$$
x(t)=\int_{0}^{t} f(\tau)w(t-\tau)\,d\tau\equiv (f*w)(t)
$$
Which is just a [[Convolution]]