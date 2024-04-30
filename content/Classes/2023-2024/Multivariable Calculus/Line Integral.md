---
tags:
  - math/calc
aliases:
  - Work Integral
title links: "[[Integral]]"
---
Essentially to [[Integration Along A Curve]], but as a [[Vector]]
$$
\int_{C} \vec{F}\cdot\, d\vec{r}=\int_{C}\vec{F}_{T}\, ds=\int_{C}\vec{F}\cdot\vec{v}\, dt   
$$
Where $C$ is a curve, $\vec{F}$ is some [[Vector Field]], $\vec{r}$ is a [[Parameterized Curve]], $\vec{v}$ is its [[Velocity Vector]], and $\vec{F}_{T}$ is the [[Unit Tangent Vector|tangential]] [[Orthogonal Projection|component]] of $\vec{F}$ to $\vec{r}$
Can also be done as individual components too
# Fundamental Theorem of Line Integrals
Let $C$ be a smooth [[Parameterized Curve]] given by $\vec{r}(t)$ on $a\leq t\leq b$
$\vec{F}=\overrightarrow{\nabla V }$ where $V(\vec{x})$ is a differentiable function ("potential function") whose [[gradient]] $\vec{F}$ is continuous on $C$
$$
\int_{C}\vec{F}\cdot\, d\vec{r}=\int_{C}\overrightarrow{\nabla V }\cdot\, d\vec{r}=V(\vec{r}(b))-V(\vec{r}(a))=V(end)-V(start) 
$$
Says that work done by [[Vector Field#Conservative Vector Field]] along path is the potential difference