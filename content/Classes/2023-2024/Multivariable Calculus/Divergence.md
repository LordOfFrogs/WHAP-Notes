---
tags:
  - math/calc
---
For [[Vector Field]] $\vec{F}(x,y)=\langle P(x,y),Q(x,y) \rangle$ in [[R2]],
$$
\text{2D-div}(\vec{F})=\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y }
$$
Which is the diagonal ([[trace]]) of the [[Jacobian Matrix]]
Same for [[R3]] ($\vec{F}(x,y)=\langle P(x,y),Q(x,y),R(x,y) \rangle$):
$$
\text{div}(\vec{F})=\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y }+\frac{ \partial R }{ \partial z } 
$$
# Geometric Definition
Define as "source density"
Suppose $\vec{F}$ is [[Vector Field]] in vicinity of point $\vec{x}$
"Build bubble" $B_{k}$ containing point, measure [[Integration Over A Surface#Flux|flux]] over boundary $\partial B_{k}=S_{k}$ and divide by volume $\Delta V_{k}$
Shrink "bubble":
$$
\lim_{ diam(B_{k}) \to 0 } \left( \frac{\displaystyle\oiint \vec{F}\cdot d\vec{S}}{\Delta V_{k}} \right)\equiv (\text{div} \vec{F})(\vec{x})
$$
# Algebraic Definition
Build [[Cartesian Coordinates|Cartesian]] box with $(x,y,z)$ as corner, then move $\Delta x, \Delta y, \Delta z$
Net [[Flux]] is $F_{N}\Delta S=(\vec{F}\cdot\vec{n})\Delta S$
$$
\begin{array}{|c|c|c|c|}
\hline \text{Face} & \vec{n} & F_{N}=\vec{F}\cdot\vec{n} & \Delta S \\
\hline \text{Front} & \mathbf{i} & P(x+\Delta x, y, z) & \Delta y\Delta z \\
\hline \text{Back} & -\mathbf{i} & -P(x,y,z) & \Delta y\Delta z \\
\hline \text{Right} & \mathbf{j} & Q(x,y+\Delta y,z) & \Delta x\Delta z \\
\hline \text{Left} & -\mathbf{j} & -Q(x,y,z) & \Delta x\Delta z \\
\hline \text{Top} & \mathbf{k} & R(x,y,z+\Delta z) & \Delta x\Delta y \\
\hline \text{Bottom} & -\mathbf{k} & -R(x,y,z) & \Delta x\Delta y \\
\hline
\end{array}
$$
Sum over faces and divide by volume to get small increments in $\vec{F}$ along [[Vector#Unit Vector|unit vectors]], which correspond to [[Partial Derivative|Partial Derivatives]]:
$$
\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y } +\frac{ \partial R }{ \partial z } 
$$