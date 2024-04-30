---
tags:
  - math/calc
aliases:
  - Signal-systems
---
For [[Linear ODE]]
$\frac{d^{n}x}{dt^{n}}+p_{n-1}(t) \frac{d^{n-1}x}{dt^{n-1}}+\cdots+p_{1}(t) \frac{dx}{dt}+p_{0}(t)x=q(t)$
Think of left-hand side as "system", right hand side as input/signal
The solution ($x(t)$) is the "response"
# Examples:
## Banking
$$
\begin{align*}
\frac{dx}{dt}=Ix\\
\frac{dx}{dt}=I(t)x\\
\frac{dx}{dt}-I(t)x=0\\
\end{align*}
$$
$I$ is interest rate (can be function of time)
Forms [[First Order ODE|first order]], [[Linear ODE#Homogeneous|homogeneous]], [[linear ODE]]
$$
\begin{align*}
\frac{dx}{dt}=Ix+q(t)\\
\frac{dx}{dt}-Ix=q(t)
\end{align*}
$$
System: what the bank does
Input/signal: Rate of input from deposits/withdrawals
Response: solution, how much money you have as a function of time
## [[Isaac Newton|Newton]]'s Law of Cooling (diffusion)
$x(t)$: internal temperature (response)
$y(t)$: ambient/external temperature (input)
k: coupling constant (related to insulation)
$$
\begin{align*}
\frac{dx}{dt} = k(y-x), k>0\\
\frac{dx}{dt}+kx=ky\\
\text{Homogeneous: } \frac{dx}{dt}+kx=0
\end{align*}
$$
Homogeneous form is when the ambient temp. is constant at 0
## Hooke's Law
#physics 
Mass-Spring-Damper System
F: applied force
x: displacement of mass from equilibrium
k: spring constant that corresponds to stiffness of spring
With [[Newton's 2nd Law]]:
$$
\begin{align*}
F=m \frac{d^{2}x}{dt^{2}}=-kx\\
\frac{d^{2}x}{dt^{2}}+\frac{k}{m}x=0
\end{align*}
$$
[[First Order ODE|First order]], [[Linear ODE#Homogeneous|homogeneous]], constant coefficient [[linear ODE]]
$F_{f}=-cv$: friction force
With friction:
$$
\begin{align*}
F=-kx-cv+F_{ext}(t)\\
m \frac{d^{2}x}{dt^{2}}=-kt-c \frac{dx}{dt}+F_{ext}(t)\\
\frac{d^{2}x}{dt^{2}}+\frac{c}{m} \frac{dx}{dt}+\frac{k}{m}x=q(t)\\
\ddot{x}+\frac{c}{m}\dot{x}+\frac{k}{m}x=q(t)
\end{align*}
$$
System: Everything to the left
Input: q(t) external force
Response: x(t)
# Zero State Response
If $x(t_{0})=0$ and $\dot{x}(t_{0})=0$, referred to as zero state
A solution to an [[First Order ODE#Initial Value Problem (IVP)|IVP]] with given conditions is the zero state response
# Zero Input Response
The solution to [[Linear ODE#Homogeneous|homogeneous]] [[Linear ODE]]
# ZSR+ZIR
For any equation $T[x(t)]=q(t)$ with initial conditions $x(t_{0})=x_{0},x'(t_{0})=\dot{x}_{0},\cdots,x^{(n-1)}(t_{0})=x^{(n-1)}_{0}$:
$$
x(t)=\text{ZIR}+\text{ZSR}
$$
Where ZIR solves $T[x(t)]=0$ with initial conditions
and ZSR solves $T[x(t)]=q(t)$ with conditions set to rest ($x(t_{0})=0,x'(t_{0})=0,\cdots,x^{(n-1)}(t_{0})=0$)
Useful when used with [[Laplace Transform]]
# Typology of Inputs
1. Polynomial - [[Method of Undetermined Coefficients]]
2. $ae^{rt}$ - [[Exponential Response Formula]] or [[Resonant Response Formula]]
3. $a\cos \omega t$ or $b\sin \omega t$ - [[Method of Undetermined Coefficients]] or [[Complex Variable Methods#Complex Replacement|Complex Replacement]] with [[Exponential Response Formula|ERF]] or [[Resonant Response Formula|RRF]]
4. $e^{rt}q(t)$ - [[Method of Undetermined Coefficients|MUC]] or [[Exponential Shift Rule|ESR]]
# Frequency Response
For $p(D)x=q(t)=ky(t)$ with $y=y_{cx}=e^{i\omega t}$
The response (solution) has the form $H(\omega)e^{i\omega t}$ where $H(\omega)$ is given by [[Exponential Response Formula|ERF]] (if fails, complex gain is infinite)
Then with $y=A\cos(\omega t),x_{p}=g\cos(\omega t-\phi)$ where $g=|H(\omega)|$ (gain) and $\phi=-\text{Arg}(H(\omega))$ (phase lag)
So $x_{p}=\left\lvert\frac{k}{p(i\omega)}\right\rvert\cos\left( \omega t+\text{Arg}\left( \frac{k}{p(i\omega)} \right) \right)$
# Discontinuous Input
$$
\begin{align*}
\dot{x}+kx=q(t)=\begin{Bmatrix}0 & t<0\\1 & 0\leq t\le1\\0 & t>1\end{Bmatrix}\\
x_{h}=ce^{-kt}\\
v(t)=e^{kt}\\
\frac{d}{dt}(e^{kt}x)=\begin{Bmatrix}0 & t<0\\ e^{kt} & 0\leq t\le1\\0 & t>1\end{Bmatrix}\\
\end{align*}
$$
And then solve
# Harmonic Response to [[Periodic]] Inputs
Couple [[Fourier Series]] representation of periodic input with linearity, produces series representations to time-independent [[Linear ODE]]s
Solve terms individually for each $n$ using complex replacement
## Resonance
If input is expanded into a [[Fourier Series]], sometimes only a single term responsible for resonance
Will cause a term in the [[Fourier Series]] to be undefined, so recalculate that term specifically to solve