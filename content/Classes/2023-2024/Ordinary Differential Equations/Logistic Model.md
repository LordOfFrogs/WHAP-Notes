---
tags:
  - math/calc
aliases:
  - Logistic Growth
---
Limited population growth
$$
\frac{1}{P} \frac{dP}{dt}=k\left(1- \frac{P}{L}\right)
$$

^0e34b6

P - population
k - growth rate
L - limiting capacity

2 special [[Direction Field#^543a3d|isoclines]] where $\frac{dP}{dt}=0$: $P(t)=0$ or $P(t)=L$
Correspond to equilibria
L is a [[Equilibrium#Stable Equilibrium|stable equilibrium]], while 0 is an [[Equilibrium#Unstable Equilibrium|unstable equilibrium]]
![[5cbb382cc7a53196a402172da5c2fed32c2134ff 1.png]]
# Solution:
$$
x(t)=\frac{Lx_{0}}{x_{0}+(L-x_{0})e^{-kt}}
$$