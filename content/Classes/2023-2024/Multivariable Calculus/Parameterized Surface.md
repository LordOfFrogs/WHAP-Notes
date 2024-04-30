---
tags:
  - math
  - math/calc
---
Uses two independent variables ($(u,v),(s,t)$)
For some $(s,t)$ in domain $D$, $\vec{r}(s,t)=\langle x(s,t),y(s,t),z(s,t)\rangle$
Maps [[R2]] to [[Rn]]
Can vary just s, or just t to trace out [[Parameterized Curve]], then do [[Partial Derivative]]
$$
\begin{align*}
\frac{ \partial \vec{r} }{ \partial s } =\left\langle \frac{ \partial x }{ \partial s },\frac{ \partial y }{ \partial s },\frac{ \partial z }{ \partial s }   \right\rangle \\
\frac{ \partial \vec{r} }{ \partial t } =\left\langle \frac{ \partial x }{ \partial t },\frac{ \partial y }{ \partial t },\frac{ \partial z }{ \partial t }   \right\rangle
\end{align*}
$$
Both are tangent to the surface
Can then derive [[Unit Normal Vector|normal vector]] and therefore [[Parameterized Curve#Curvature|curvature]] and [[Parameterized Curve#Radius of curvature|radius of curvature]]
# Sphere
$$
\begin{align*}
\vec{r}(\theta,\phi)=R\langle\cos \theta \sin \phi,\sin \theta \cos \phi,\cos \phi\rangle\\
\frac{ \partial \vec{r} }{ \partial \phi }=\text{South},\frac{ \partial \vec{r} }{ \partial \theta }=\text{East} 
\end{align*}
$$
# Function of surface
$$
\begin{align*}
\vec{r}(x,y)=\langle x,y,f(x,y)\rangle\\
\frac{ \partial \vec{r} }{ \partial x }=\left\langle1,0,\frac{ \partial f }{ \partial x }\right\rangle\\
\frac{ \partial \vec{r} }{ \partial y }=\left\langle0,1,\frac{ \partial f }{ \partial y }\right\rangle
\end{align*}
$$
# Normal Vector
$$
\vec{n}=\frac{\frac{ \partial \vec{r} }{ \partial s } \times\frac{ \partial \vec{r} }{ \partial t } }{\left\|\frac{ \partial \vec{r} }{ \partial s }\times\frac{ \partial \vec{r} }{ \partial t }  \right\|}
$$