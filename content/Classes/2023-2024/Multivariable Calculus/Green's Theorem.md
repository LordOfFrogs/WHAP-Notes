---
tags:
  - math/calc
---
^For [[Vector Field]] $\vec{F}(x,y)=\langle P(x,y),Q(x,y) \rangle$ in bounded region $D$ in [[R2]] with $C$ as the boundary oriented counterclockwise, ^d3d3a2
$$
\oint_{C=\partial D}\vec{F}\cdot d\vec{r}=\iint_{D}\text{2D-curl}(\vec{F})\, dA=\iint_{D}\left( \frac{ \partial Q }{ \partial x } -\frac{ \partial P }{ \partial y }  \right)dA
$$

^8e5a43

[^1]
# Corollary
$$
Area(D)=\oint_{C=\partial D} x\, dy
$$
# Normal Form
Measure net flux outward across boundary - force of [[Vector Field]] on boundary
$$
\oint_{C=\partial D}F_{n}\, ds=\oint_{C=\partial D}-Q\, dx+P\, dy=\iint_{D}\text{div}(\vec{F})\, dA
$$
[^2]
[^1]: [[Curl]]
[^2]: [[Divergence]]