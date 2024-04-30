---
tags:
  - math/calc
---
> [!definition]
> An nth order linear ordinary differential equation is an [[Ordinary Differential Equation|ODE]] of the form:
> $$
> \frac{d^{n}x}{dt^{n}}+p_{n-1}(t) \frac{d^{n-1}x}{dt^{n-1}}+\dots + p_{1}(t) \frac{dx}{dt}+ p_{0}(t)x=q(t)
> $$
> Where coefficient functions ($p(t)$) can be functions of $t$

Defined by [[Linearity|linear]] operator:
$$
\begin{align*}
& T=D^{n}+p_{n-1}(t)D^{n-1}+\cdots+p_{1}(t)D+p_{0}(t)I\\
& T[x]=q(t)
\end{align*}
$$
# Homogeneous
If $q(t)=0$ for all t, the equation is [[#Homogeneous]]
# Solving By [[Linearity]]
To find general solution $x(t)$:
1. Find all [[#homogeneous]] solutions $x_{h}(t)$ (set $q(t)=0$)
2. Find one [[#Homogeneous|inhomogeneous]] particular solution $x_{p}(t)$ (various methods, eg. [[method of undetermined coefficients]], [[variation of parameters]])
3. $x(t)=x_{h}(t)+x_{p}(t)$ (general solution)
4. Use initial conditions to determine any unknowns
## Proof
$$
\begin{align*}
& T[x(t)-x_p(t)]=T[x(t)]-T[x_{p}(t)]=q(t)-q(t)=0 \\
\implies & x(t)-x_{p}(t) \text{ is a homogeneous solution} \\
& x_{h}(t)=0, x(t)-x_{p}(t)=0\\
\implies & x(t)=x_{h}(t)+x_{p}(t)
\end{align*}
$$
# For [[Nth-Order ODE]]:
Suppose $x_{1}(t)$ solves $T(x)=q_{1}(t)$, $x_{2}(t)$ solves $T(x)=q_{2}(t)$ … $x_{k}(t)$ solves $T(x)=q_{k}(t)$
Solution for $T(x)=c_{1}q_{1}(t)+\cdots+c_{k}q_{k}(t)$ is $x(t)=c_{1}x_{1}(t)+\cdots+c_{k}x_{k}(t)$
## Example (using [[method of undetermined coefficients]]) ([[Diff. Eqs. Problem Set 1#Problem 6]])
$$
\begin{align*}
& \frac{dx}{dt} = 2t+x\\
& \frac{dx}{dt} - x = 2t\\
\text{Homogeneous: } & \frac{dx}{dt}-x=0\\
& \int\frac{1}{x}dx = \int 1 dt\\
\implies & \ln|x|=t+C\\
\implies & x_{h}=Ae^{t}\\
\text{Suppose } & x_{p}=at+b\\
\implies & \frac{dx}{dt}=a\\
\implies & a-(at+b)=a-b-at = 2t\\
& a=-2,b=-2\\
\implies & x_{p}=-2t-2\\
\implies & x=x_{h}+x_{p}=\fbox{$Ae^{t}-2t-2$}
\end{align*}
$$