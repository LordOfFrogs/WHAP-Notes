---
tags:
  - math/calc
---
[[Integral|Integration]] along a curve $C$ in [[R2]] or [[R3]]
Suppose mass density function $\sigma(x,y)$ or $\sigma(x,y,z)$
# Derivation
Partition $C$ into $C_{k}$ pieces with length $\Delta s_{k}$
Estimate mass of piece as $\Delta m_{k}\cong \sigma(\vec{x}_{k})\Delta s_{k}$
Sum:
$$
Mass(C)=\sum_{k}\Delta m_{k}\cong \sum_{k}\sigma(\vec{x}_{k})\Delta s_{k}
$$
Norm $|\Delta|=\underset{k}\max[diam(C_{k})]$ tends to zero
$$
\lim_{ |\Delta| \to 0 }\left[ \sum_{k}\sigma(\vec{x}_{k})\Delta s_{k} \right]=\int_{C} \sigma(\vec{x})\, ds  
$$
So,
$$
Mass(C)=\int_{C}\, dm =\int_{C} \sigma \, ds 
$$
# Arclength
Just let $\sigma=1$,
$$
Length(C)=\int_{C}\, ds
$$
# Average
$$
\bar{f}=\frac{1}{Length(C)}\int_{C} f\, ds
$$
# Evaluation
For [[Parameterized Curve]] $\vec{r}(t)$ where $a\leq t\leq b$ and $\vec{v}(t)=\vec{r}'(t)$ ([[Velocity Vector]])
Speed is $\|\vec{v}(t)\|=\frac{ds}{dt}$, so
$$
\int_{C}f(\vec{x})\, ds =\int_{t=a}^{t=b}f(\vec{r}(t))\|\vec{v}(t)\|\, dt 
$$