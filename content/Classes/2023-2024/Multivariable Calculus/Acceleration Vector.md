---
tags:
  - math/calc
---
[[Vector]] representing change in [[Velocity Vector]] over time
# For [[Parameterized Curve]]
$$
\vec{a}(t)=\vec{v}'(t)=\vec{r}''(t)=\langle x_{1}'',x_{2}'',\cdots,x_{n}''\rangle
$$
Instantaneous rate of change of [[Velocity Vector]] found by differentiation
Has to be twice differentiable function
$a=\|\vec{a}\|$ is scalar acceleration
## [[Unit Tangent Vector]] and [[Unit Normal Vector]] components
Uses [[Curvature]] $\kappa$ and [[Arc Length]] s
$$
\begin{align*}
\vec{T}=\frac{\vec{v}}{\|\vec{v}\|}\\
\implies\vec{v}=\|\vec{v}\|\vec{T}=\frac{ds}{dt}\vec{T}\\
\implies \frac{d}{dt}(\vec{v})=\vec{a}=\frac{d}{dt}\left[ \frac{ds}{dt}\vec{T} \right]\\
=\frac{ds}{dt} \frac{d\vec{T}}{dt}+\frac{d^{2}s}{dt^{2}}\vec{T}\\
=\frac{dv}{dt}\vec{T}+v\|\vec{T}'(t)\|\vec{N}\\
\implies \vec{a}=\left( \frac{dv}{dt} \right)\vec{T}+(\kappa v^{2})\vec{N}\\
=\left( \frac{dv}{dt} \right)\vec{T}+\left( \frac{v^{2}}{R} \right)\vec{N}
\end{align*}
$$