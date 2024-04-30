---
tags:
  - math/calc
---
For [[Vector Field]] $\vec{F}(x,y)=\langle P(x,y),Q(x,y) \rangle$ in [[R2]],
$$
\text{2D-curl}(\vec{F})=\frac{ \partial Q }{ \partial x } -\frac{ \partial P }{ \partial y } 
$$
Same for [[R3]] ($\vec{F}(x,y)=\langle P(x,y),Q(x,y),R(x,y) \rangle$):
$$
\text{curl}(\vec{F})=\left\langle  \frac{ \partial R }{ \partial y } -\frac{ \partial Q }{ \partial z } , \frac{ \partial P }{ \partial z } -\frac{ \partial R }{ \partial x } , \frac{ \partial Q }{ \partial x } -\frac{ \partial P }{ \partial y } \right\rangle=\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{ \partial }{ \partial x }  & \frac{ \partial }{ \partial y }  & \frac{ \partial }{ \partial z } \\
P & Q & R
\end{vmatrix}
$$
Which can kind-of be thought of the values below the [[trace]] (diagonal) of the [[Jacobian Matrix]] - the values above
# Geometric Definition
Measures circulation density, where circulation density of $\vec{F}$:
$$
\text{2D-curl}(\vec{F})=\lim_{ \text{diam}(D_{k}) \to 0 } \left[ \frac{\oint_{C_{k}=\partial D_{k}}\vec{F}\cdot d\vec{r}}{\Delta A_{k}} \right]
$$
Or, in [[R3]]:
$$
(\text{curl}\vec{F})(\vec{x})\cdot\vec{n}=\lim_{ diam(S_{k}) \to 0 } \left[ \frac{\oint_{C_{k}}\vec{F}\cdot d\vec{r}}{\Delta S_{k}} \right]
$$