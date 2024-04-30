---
tags:
  - math/calc
---
$$
\iint_{S}f\, dS
$$
[[Integral#Average]], [[Integral#Weighted Average]], [[Integral#Density Function]], [[Centroid]] all the same, except with $dS$
# Derivation
Partition: $S_{k}$
Mass:
$$
\Delta m_{k}\cong \sigma(\vec{x}_{k}) \Delta S_{k}
$$
Sum:
$$
\text{Mass}(S)=\sum_{k}\Delta m_{k}\cong \sum_{k}\sigma(\vec{x}_{k})\Delta S_{k}
$$
Mesh: $|\Delta|=\underset{ k }{ \max }\{ diam(S_{k}) \}$
$$
\lim_{ |\Delta| \to 0 }\left( \sum_{k}\sigma(\vec{x}_{k})\Delta S_{k} \right)=\iint_{S}\sigma(\vec{x})dS
$$
## Evaluation of [[Parameterized Surface]]
Vary $s$ by $\Delta s$, $t$ by $\Delta t$
Creates [[Vector|vectors]] $\frac{ \partial \vec{r} }{ \partial s }\Delta s$ and $\frac{ \partial \vec{r} }{ \partial t }\Delta t$
Forming parallelogram with area
$$
\left( \frac{ \partial \vec{r} }{ \partial s }\Delta s \right)\times\left( \frac{ \partial \vec{r} }{ \partial t } \Delta t \right)\cong \vec{n}\Delta S
$$
Which becomes with [[Limit]]:
$$
dS=\left\|\frac{ \partial \vec{r} }{ \partial s } \times\frac{ \partial \vec{r} }{ \partial t } \right\|\, ds\, dt
$$
Also, [[Flux]]
# Evaluation
## General Method
[[Parameterized Surface|Parameterize surface]] $S$
$$
\vec{r}(s,t)=\langle x(s,t),y(s,t),z(s,t) \rangle
$$
$$
dS=\left\|\frac{ \partial \vec{r} }{ \partial s } \times\frac{ \partial \vec{r} }{ \partial t } \right\|\, ds\, dt
$$
## [[Cylindrical Coordinates]]
$$
dS=R\, dz\, d\theta
$$
[[Unit Normal Vector]]:
$$
\vec{n}=\frac{1}{R}\langle x,y,0 \rangle = \langle \cos\theta, \sin\theta, 0 \rangle 
$$
## [[Spherical Coordinates]]
$$
dS=R^{2}\sin\phi\, d\phi\, d\theta
$$
[[Unit Normal Vector]]:
$$
\vec{n}=\frac{1}{R}\langle x,y,z \rangle =\langle \cos\theta\sin\phi,\sin\theta\sin\phi,\cos\phi \rangle 
$$
## [[Functions of Two Variables]]
$$
dS=\sqrt{1+f_{x}^{2}+f_{y}^{2}}\, dx\, dy
$$
$$
d\vec{S}=\vec{n}\, dS=\langle -f_{x},-f_{y},1 \rangle\, dx\, dy
$$
