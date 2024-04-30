---
tags:
  - math/calc
aliases:
  - Convolve
  - Convolved
---
Given functions $w(t)$ and $f(t)$,
$$
(f\ast w)(t)=\int_{0}^{t} f(\tau)w(t-\tau)\, d\tau 
$$
Used to find [[Input-Response Formulation#Zero State Response|ZSR]]
# Properties
Commutative
If $\mathscr{L}[f(t)]=F(s)$ and $\mathscr{L}[g(t)]=G(s)$, then 
$$
\mathscr{L}[(f*g)(t)]=F(s)G(s)
$$
Where $\mathscr{L}[f(t)]$ is the [[Laplace Transform]]
Because
$$
	\mathscr{L}[(f*g)(t)]=\int_{0^{-}}^{\infty} e^{-st}\left[ \int_{0}^{t} f(\tau)g(t-\tau)\,d\tau  \right] \, dt=F(s)G(s) 
$$