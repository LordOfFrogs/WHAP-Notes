---
tags:
  - math/calc
aliases:
  - Gauss' Theorem
---
For closed surface $S$ in [[R3]] that contains solid region $B$ oriented by outward [[Unit Normal Vector]] $\vec{n}$,
$\vec{F}=\langle P,Q,R \rangle$ is a [[Vector Field]] ^464790
$$
\oiint_{S=\partial B}F_{n}\, dS=\oiint_{S=\partial B}\vec{F}\cdot\vec{n}\, dS=\boxed{ \oiint_{S=\partial B}\vec{F}\cdot d\vec{S}=\iiint_{B}\text{div}(\vec{F})\, dV }
$$

^f67ef0

Provides interpretation of [[Divergence]] as a source density - how much "stuff" is flowing outward
Also equals the net [[Integration Over A Surface#Flux|flux]] outward ^e709ca
# Proof
Partition region $B$ into cells $\{ B_{k} \}$ with boundary $S_{k}=\partial B_{k}$
For each cell:
$$
\frac{1}{\Delta V_{k}}\oiint_{S_{k}} \vec{F}\cdot d\vec{S}\cong(\text{div}\vec{F})(\vec{x}_{k})\implies \oiint_{S_{k}}\vec{F}\cdot d\vec{S}\cong(\text{div}\vec{F})(\vec{x}_{k})\Delta V_{k}
$$
Sum:
$$
\sum_{k}\oiint\vec{F}\cdot d\vec{S}\cong \sum_{k}(\text{div}\vec{F})(\vec{x}_{k})\Delta V_{k}
$$
Two adjacent cells cancel, so only remaining flux is passing out of boundary, so
$$
\oiint_{S=\partial B}\vec{F}\cdot d\vec{S}=\sum_{k}\oiint_{S_{k}}\vec{F}\cdot d\vec{S}\cong \sum_{k}(\text{div}\vec{F})(\vec{x}_{k})\Delta V_{k}
$$
As mesh $|\Delta|$ gets smaller, limit to:
$$
\oiint_{S=\partial B}\vec{F}\cdot d\vec{S}=\lim_{ |\Delta| \to 0 } \left( \sum_{k}(\text{div}\vec{F})(\vec{x}_{k})\Delta V_{k} \right)=\iiint_{B}(\text{div}\vec{F})(\vec{x})\, dV
$$
In other words, divergence theorem is an [[Integral]] version of the [[Divergence#Geometric Definition]]