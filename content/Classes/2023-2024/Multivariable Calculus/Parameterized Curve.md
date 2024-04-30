---
tags:
  - math
  - math/calc
aliases:
  - Parametric
---
A [[Vector]]-valued function where the component functions vary continuously with t ($\vec{r}:\mathbb{R}\rightarrow\mathbb{R}^{n}$)
Vary a parameter (usually t) and assign a [[vector]]
$$
t\rightarrow\vec{x}(t)\text{ or }\vec{r}(t)
$$
Can represent movement in #physics 
# Differentiation Properties
All basic differentiation properties hold, including product rule for scalar multiplication, [[Dot Product]], and [[Cross Product]]
> [!corollary]
> Constant Radius Curve
> $$
> \begin{align*}
\|\vec{r}(t)\|=r\\
\implies\vec{r}\cdot \vec{r}=\|\vec{r}\|^{2}=r^{2}\\
\implies\frac{d}{dt}(\vec{r}\cdot \vec{r})=\frac{d}{dt}(r^{2})=0\\
\implies\vec{r}\cdot \vec{v}+\vec{v}\cdot \vec{r}=0\\
\implies\vec{r}\cdot \vec{v}=0\\
\therefore \vec{v}\perp\vec{r} \lor \vec{v}=\vec{0}
\end{align*}$$

> [!corollary]
> Constant Speed Curve
> $$
\begin{align*}
\|\vec{v}(t)\|=c\\
\implies\vec{v}\cdot \vec{v}=\|\vec{v}\|^{2}=c^{2}\\
\implies\frac{d}{dt}(\vec{v}\cdot \vec{v})=\frac{d}{dt}(c^{2})=0\\
\implies\vec{v}\cdot \vec{a}+\vec{v}\cdot \vec{a}=0\\
\implies\vec{a}\cdot \vec{v}=0\\
\therefore \vec{a}\perp\vec{v} \lor \vec{a}=\vec{0}
\end{align*}
$$
# Increments
$$
\begin{align*}
\vec{r}(t)=\langle x(t),y(t)\rangle,f(x,y):\\
\Delta f\cong \frac{ \partial f }{ \partial x }\Delta x+\frac{ \partial f }{ \partial y }\Delta y\\
\frac{df}{dt}=\frac{ \partial f }{ \partial x } \frac{dx}{dt}+\frac{ \partial f }{ \partial y } \frac{dy}{dt}\\
f(x,y,z):\\
\frac{df}{dt}=\frac{ \partial f }{ \partial x } \frac{dx}{dt}+\frac{ \partial f }{ \partial y } \frac{dy}{dt}+\frac{ \partial f }{ \partial z } \frac{dz}{dt}
\end{align*}
$$