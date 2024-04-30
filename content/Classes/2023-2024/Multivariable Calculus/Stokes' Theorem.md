---
tags:
  - math/calc
---
[[R3]] analog of [[Green's Theorem]]
For surface $S$ with [[Unit Normal Vector]] $\vec{n}$ and counterclockwise boundary curve $C=\partial S$, and that $\vec{F}=\langle P,Q,R \rangle$ is [[Vector Field]], ^1799ef
$$
\boxed{ \oint_{C=\partial S}\vec{F}\cdot d\vec{r}=\iint_{S}\text{curl}(\vec{F})\cdot d\vec{S} }=\iint_{S}[\text{curl}(\vec{F})\cdot\vec{n}]\, dS
$$

^f7e8c2

Also equals circulation of $\vec{F}$ around $C$
Provides interpretation of [[Curl]] as circulation density ^1db2f9
# Proof
Partition surface $S$ into uniformly small "patches" $\{ S_{k} \}$, with [[Unit Normal Vector|normal vector]] $\vec{n}$ and boundary $C_{k}=\partial S_{k}$ and sample point $\vec{x}_{k}$, then
$$
\frac{\oint_{C_{k}}\vec{F}\cdot d\vec{r}}{\Delta S_{k}}\cong (\text{curl}\vec{F})(\vec{x}_{k})\cdot \vec{n}\implies \oint_{C_{k}}\vec{F}\cdot d\vec{r}\cong (\text{curl}\vec{F})(\vec{x}_{k})\cdot \vec{n}\Delta S_{k}
$$
Limit to
$$
\oint_{C=\partial S}\vec{F}\cdot d\vec{r}=\lim_{ |\Delta| \to 0 } \left[ \sum_{k}(\text{curl}\vec{F})(\vec{x}_{k})\cdot \vec{n}\Delta S_{k} \right]=\iint_S \text{curl}\vec{F}\cdot d\vec{S}
$$