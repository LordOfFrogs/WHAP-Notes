---
tags:
  - math/calc
aliases:
  - Equilibria
---
Given [[Autonomous ODE]] $\frac{dx}{dt}=F(x)$, $x_{0}$ is an equilibrium if $F(x_{0})=0$. $x(t)=x_{0}$ will also be a solution to the [[Ordinary Differential Equation|ODE]] with initial condition $x(0)=x_{0}$
# Stable Equilibrium
For all initial conditions around $x_{0}$:
$$
\lim_{ t \to \infty }[x(t)]=0 
$$
# Unstable Equilibrium
If not [[#Stable Equilibrium]]
# Semistable Equilibrium
[[#Stable Equilibrium]] from one side, [[#Unstable Equilibrium]] from the other
# Derivative test
Use linear approximation:
$$
\begin{align*}
F(x)\cong F(x_{0})+F'(x_{0})(x-x_{0})=F'(x_{0})(x-x_{0})\\
u=x-x_{0}\\
\frac{du}{dt}=\frac{d}{dt}(x-x_{0})=\frac{dx}{dt}\\
\implies \frac{du}{dt}\cong F'(x_{0})(x-x_{0})=F'(x_{0})u
\end{align*}
$$
$F'(x_{0})>0$: [[#Unstable Equilibrium]]
$F'(x_{0})<0$: [[#Stable Equilibrium]]
$F'(x_{0})=0$: Inconclusive
# Phase Line
Used to analyze equilibria
![[1200px-Phase_line_example.svg.png|500]]