---
tags:
  - math/calc
aliases:
  - System of Differential Equations
  - System of ODEs
---
Can define system of [[First Order ODE|first order]] [[Linear ODE]]s on [[Rn]] ($\{ x_{1},x_{2},\cdots,x_{n} \}$) by [[Velocity Vector]] [[Vector Field|field]]
$$
\begin{Bmatrix}
\frac{dx_{1}}{dt}=f_{1}(x_{1},\cdots,x_{n}) \\
\vdots \\
\frac{dx_{n}}{dt}=f_{n}(x_{1},\cdots,x_{n})
\end{Bmatrix}
$$
Along [[Parameterized Curve]] $\vec{x}(t)$ with initial condition $\vec{x}(0)=\vec{x}_{0}$
The set of all solution curves is called the **flow** of the dynamical system
# Linear Continuous Dynamical System
A system of the form
$$
\begin{Bmatrix}
\frac{dx_{1}}{dt}=a_{11}x_{1}+\cdots+a_{1n}x_{n} \\
\vdots \\
\frac{dx_{n}}{dt}=a_{n1}x_{1}+\cdots+a_{nn}x_{n}
\end{Bmatrix}
$$
If $\vec{x}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix}$, then 
$$
\frac{d\vec{x}}{dt}=\begin{bmatrix}
\frac{dx_{1}}{dt} \\
\vdots \\
\frac{dx_{n}}{dt}
\end{bmatrix}
=\begin{bmatrix}
a_{11}x_{1}+\cdots+a_{1n}x_{n} \\
\vdots \\
a_{n1}x_{1}+\cdots+a_{nn}x_{n}
\end{bmatrix}
=\begin{bmatrix}
a_{11} & \cdots  & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{nn}
\end{bmatrix}
\begin{bmatrix}
x_{1} \\ \vdots \\ x_{n}
\end{bmatrix}
=\mathbf{A}\vec{x}
$$
## Uncoupled System
Derivatives of each variable does not depend on any other variables
$$
\begin{Bmatrix}
\frac{dx_{1}}{dt}=k_{1}x_{1} \\
\vdots \\
\frac{dx_{n}}{dt}=k_{n}x_{n}
\end{Bmatrix}
$$
Can be expressed as $\frac{d\vec{x}}{dt}=\mathbf{D}\vec{x}$ where (diagonal [[matrix]])
$$
\mathbf{D}=\begin{bmatrix}
k_{1} & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & k_{n}
\end{bmatrix}
$$
Gets solution
$$
\vec{x}(t)=\begin{bmatrix}x_{1}(t)\\ \vdots\\ x_{n}(t)\end{bmatrix}=\begin{bmatrix}
x_{1}(0)e^{k_{1}t} \\ \vdots \\ x_{n}(0)e^{k_{n}t}
\end{bmatrix}
=\begin{bmatrix}
e^{k_{1}t} & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & e^{k_{n}t}
\end{bmatrix}
\begin{bmatrix}x_{1}(0)\\ \vdots\\ x_{n}(0)\end{bmatrix}
$$
Where time-varying [[matrix]] is called the **evolution [[matrix]]**, called $[e^{t\mathbf{D}}]$
Then , solution to system is $\vec{x}(t)=[e^{t\mathbf{D}}]\vec{x}(0)$
## Coupled System
[[Matrix]] $\mathbf{A}$ is not diagonal, can be solved by changing [[coordinates]] relative to new [[basis]] of [[Eigenvector|eigenvectors]] so the [[matrix]] is diagonal
$$
\boxed{ \vec{x}(t)=\mathbf{S}[e^{t\mathbf{D}}]\mathbf{S}^{-1}\vec{x}(0)=[e^{t\mathbf{A}}]\vec{x}(0) }
$$
### [[Diagonalization|Diagonalizable]]
Use [[diagonalization]]
Gives solution
$$
\frac{d\vec{x}}{dt}=\mathbf{A}\vec{x}, \vec{x}(0)=\vec{x}_{0}\implies \vec{x}(t)=[e^{t\mathbf{A}}]\vec{x}(0)
$$
#### Without [[Matrix|Matrices]]
Seek solutions
$$
\vec{x}(t)=c_{1}(t)\vec{v}_{1}+c_{2}(t)\vec{v}_{2}
$$
Where $\mathscr{B}=\{ \vec{v}_{1}, \vec{v}_{2} \}$ are [[Eigenvector|Eigenvectors]]
Forms [[basis]] of new [[Coordinates|coordinate]] system of [[coordinates]] $c_{1},c_{2}$
Differentiate:
$$
\frac{d\vec{x}}{dt}=\frac{dc_{1}}{dt}\vec{v}_{1}+\frac{dc_{2}}{dt}\vec{v}_{2}=\mathbf{A}\vec{x}=\mathbf{A}(c_{1}\vec{v}_{1}+c_{2}\vec{v}_{2})=c_{1}\mathbf{A}\vec{v}_{1}+c_{2}\mathbf{A}\vec{v}_{2}=c_{1}\lambda_{1}\vec{v}_{1}+c_{2}\lambda_{2}\vec{v}_{2}
$$
So, $\frac{dc_{1}}{dt}=\lambda_{1}c_{1}, \frac{dc_{2}}{dt}=\lambda_{2}c_{2}$, which can be solved to give
$$
\vec{x}(t)=c_{1}(0)e^{\lambda_{1}t}\vec{v}_{1}+c_{2}(0)e^{\lambda_{2}t}\vec{v}_{2}=c_{1}e^{\lambda_{1}t}\vec{v}_{1}+c_{2}e^{\lambda_{2}t}\vec{v}_{2}
$$
Which can then be solved for initial conditions
#### Derivation With [[Matrix|Matrices]]
System $\displaystyle\frac{d\vec{x}}{dt}=\mathbf{A}\vec{x}=\mathbf{S}\mathbf{D}\mathbf{S}^{-1}\vec{x}$ where $\mathbf{S}$ is diagonal [[matrix]] of [[Eigenvalue|Eigenvalues]]:
$$
\frac{d\vec{u}}{dt}=\begin{bmatrix}
\lambda_{1} & \cdots  & 0 \\
\vdots  & \ddots  & \vdots \\
0  & \cdots  & \lambda_{n}
\end{bmatrix}\vec{u}
$$
Multiplying by $\mathbf{S}^{-1}$:
$$
\mathbf{S}^{-1} \frac{d\vec{x}}{dt}=\frac{d(\mathbf{S}^{-1}\vec{x})}{dt}=\mathbf{D}(\mathbf{S}^{-1}\vec{x})
$$
Rewrite $\vec{u}=\mathbf{S}^{-1}\vec{x}=[\vec{x}]_\mathscr{B}$ where $\mathscr{B}$ is the new [[basis]], so system becomes
$$
\frac{d\vec{u}}{dt}=\mathbf{D}\vec{u}
$$
Solved by
$$
\vec{u}(t)=[e^{t\mathbf{D}}]\vec{u}(0)
$$
Going back to original [[coordinates]] ($\vec{x}=\mathbf{S}\vec{u}$):
$$
\vec{x}(t)=\mathbf{S}[e^{t\mathbf{D}}]\vec{u}(0)=\mathbf{S}[e^{t\mathbf{D}}]\mathbf{S}^{-1}\vec{x}(0)
$$
Denote evolution [[matrix]] for system in original [[coordinates]] as $[e^{t\mathbf{A}}]$
Gives solution
$$
\vec{x}(t)=\mathbf{S}[e^{t\mathbf{D}}]\mathbf{S}^{-1}\vec{x}(0)=[e^{t\mathbf{A}}]\vec{x}(0)
$$
### Complex [[Eigenvalue]]
$$
\begin{align*}
\lambda=a+ib,\bar{\lambda}=a-ib\\
\mathbf{A}\vec{w}=\lambda\vec{w},\mathbf{A}\hat{w}=\bar{\lambda}\hat{w}\\
\vec{w}=\vec{u}+i\vec{v},\hat{w}=\vec{u}-i\vec{v}\\
\implies \mathscr{B}=\{ \vec{v},\vec{u} \}\\
\implies \vec{x}(t)=\mathbf{S}[e^{t\mathbf{B}}]\mathbf{S}^{-1}\vec{x}(0)=\boxed{ e^{at}\mathbf{S}\begin{bmatrix}
\cos bt & -\sin bt \\
\sin bt & \cos bt
\end{bmatrix}\mathbf{S}^{-1}\vec{x}(0) }
\end{align*}
$$
If $a>0$, spirals away from origin
#### Using [[Eigenvector|Eigenvectors]] as [[Basis]]
$$
\begin{align*}
\vec{w}=\vec{u}+i\vec{v},\hat{w}=\vec{u}-i\vec{v}\implies\begin{Bmatrix}
\mathbf{A}\vec{w}=\lambda\vec{w} \\
\mathbf{A}\hat{w}=\bar{\lambda}\hat{w}
\end{Bmatrix}\\
\implies \mathscr{B}=\{ \vec{w},\hat{w} \}\implies \mathbf{S}=[\vec{w}\quad \hat{w}]\\
[\mathbf{A}]_{\mathscr{B}}=\mathbf{S}^{-1}\mathbf{A}\mathbf{S}=\mathbf{D}=\begin{bmatrix}
\lambda & 0 \\
0 & \bar{\lambda}
\end{bmatrix}
\end{align*}
$$
And proceed as [[#Diagonalizable]]
#### Using Real [[Basis]]
$$
\begin{align*}
\begin{Bmatrix}
\mathbf{A}(\vec{u}+i\vec{v})=\mathbf{A}+i\mathbf{A}\vec{v}=(a+ib)(\vec{u}+i\vec{v})=(a\vec{u}-b\vec{v})+i(b\vec{u}+a\vec{v}) \\
\mathbf{A}(\vec{u}-i\vec{v})=\mathbf{A}-i\mathbf{A}\vec{v}=(a-ib)(\vec{u}-i\vec{v})=(a\vec{u}-b\vec{v})-i(b\vec{u}+a\vec{v})
\end{Bmatrix}\\
\implies \begin{cases}
\mathbf{A}\vec{u}=a\vec{u}-b\vec{v} \\
\mathbf{A}\vec{v}=b\vec{u}+a\vec{v}
\end{cases}\\
\mathscr{B}=\{ \vec{v},\vec{u} \}\implies \mathbf{S}=[\vec{v}\quad \vec{u}]\\
\implies[\mathbf{A}]_\mathscr{B}=\mathbf{S}^{-1}\mathbf{A}\mathbf{S}=\mathbf{B}=\begin{bmatrix}
a & -b \\
b & a
\end{bmatrix}\\
\implies [e^{t\mathbf{B}}]=e^{at}\begin{bmatrix}
\cos bt & -\sin bt \\
\sin bt & \cos bt
\end{bmatrix}
\end{align*}
$$
### Repeated [[Eigenvalue]]
$$
\mathbf{B}=\begin{bmatrix}
\lambda & 1 \\
0 & \lambda
\end{bmatrix}\implies [e^{t\mathbf{B}}]=\begin{bmatrix}
e^{\lambda t} & te^{\lambda t} \\
0 & e^{\lambda t}
\end{bmatrix}
$$
#### General Method
Find [[Eigenvector#Generalized Eigenvectors]], use for [[basis]]
$$
\begin{align*}
\vec{x}=u_{1}\vec{v}_{1}+u_{2}\vec{v}_{2}+\cdots+u_{n}\vec{v}_{n}\\
\begin{cases}
\mathbf{A}\vec{v}_{1}=\lambda\vec{v}_{1},\\
\mathbf{A}\vec{v}_{2}=\vec{v}_{1}+\lambda\vec{v}_{2},\\
\vdots \\
\mathbf{A}\vec{v}_{n}=\vec{v}_{n-1}+\lambda\vec{v}_{n}
\end{cases}\\
\implies\frac{d\vec{x}}{dt}=\vec{v}_{1} \frac{du_{1}}{dt}+\vec{v}_{2} \frac{du_{2}}{dt}+\cdots+\vec{v}_{n} \frac{du_{n}}{dt}\\
=\mathbf{A}\vec{x}=\mathbf{A}(u_{1}\vec{v}_{1}+u_{2}\vec{v}_{2}+\cdots+u_{n}\vec{v}_{n})\\
=u_{1}\lambda\vec{v}_{1}+u_{2}(\vec{v}_{1}+\lambda\vec{v}_{2})+\cdots+u_{n}(\vec{v}_{n-1}+\lambda\vec{v}_{n})\\
=\vec{v}_{1}(u_{1}\lambda+u_{2})+\vec{v}_{2}(u_{2}\lambda+u_{3})+\cdots+\vec{v}_{n}(u_{n}\lambda)\\
\implies \frac{d\vec{u}}{dt}=\begin{bmatrix}
\lambda & 1 & 0 & 0 & \cdots & 0 \\
0 & \lambda & 1 & 0 & \cdots & 0 \\
0 & 0 & \lambda & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & 0 & \cdots & \lambda
\end{bmatrix}\vec{u}\\
\implies [\mathbf{A}]_{\mathcal{B}}=\mathbf{SAS}^{-1}=\mathbf{B}=\begin{bmatrix}
\lambda & 1 & 0 & \cdots & 0 \\
0 & \lambda & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & \lambda
\end{bmatrix}\\
\end{align*}
$$
# Nonautonomous Systems
## Changing to autonomous
Of the form
$$
\frac{d\vec{x}}{dt}=\mathbf{A}\vec{x}+\vec{b}
$$
Which has equilibrium
$$
\frac{d\vec{x}}{dt}=\mathbf{A}\vec{x}+\vec{b}=\vec{0}\implies \mathbf{A}\vec{x}=-\vec{b}
$$
Solve for x (not always possible!):
$$
\vec{x}_{p}=-\mathbf{A}^{-1}\vec{b}
$$
[[Coordinates|Coordinate]] change:
$$
\begin{align*}
\vec{u}=\vec{x}-\vec{x}_{p}\implies \vec{x}=\vec{u}+\vec{x}_{p}\\
\implies \frac{d\vec{u}}{dt}=\frac{d\vec{x}}{dt}=\mathbf{A}(\vec{u}+\vec{x}_{p})+\vec{b}=\mathbf{A}\vec{u}
\end{align*}
$$
Which can then be solved as a [[#Linear Continuous Dynamical System]]
## Variation of Parameters
Similar to [[Variation of Parameters]] for [[First Order ODE]]s
$$
\frac{d\vec{x}}{dt}=\mathbf{A=P}(t)\vec{x}+\mathbf{F}(t)
$$
[[Linear ODE#Homogeneous|Homogeneous equation]]:
$$
\frac{d\vec{x}}{dt}=\mathbf{P}(t)\vec{x}\implies \vec{x}=\mathbf{M}(t)\vec{c}
$$
Where $\mathbf{M}(t)$ is the [[Fundamental Matrix]]
Vary parameters to get
$$
\vec{x}=\mathbf{M}\vec{v}\implies \vec{v}'(t)=[\mathbf{M}(t)]^{-1}\mathbf{F}(t)
$$
# Nonlinear Systems
Analyze [[Equilibrium|Equilibria]] and [[Nullcline|Nullclines]]
## Linear Approximation
$$
\begin{align*}
\frac{dx}{dt}=f(x,y)\cong f(a,b)+\frac{ \partial f }{ \partial x } (a,b)(x-a)+\frac{ \partial f }{ \partial y } (a,b)(y-b)\\
\implies \frac{d\vec{x}}{dt}=\mathbf{J}(\vec{a})(\vec{x}-\vec{a})\\
\vec{u}=\vec{x}-\vec{a}\implies \frac{d\vec{u}}{dt}=\mathbf{J}(\vec{a})\vec{u}
\end{align*}
$$
Where $\mathbf{J}$ is the [[Jacobian Matrix]]
If all [[Eigenvalue|Eigenvalues]] of $\mathbf{J}$ have negative real part, then $\vec{a}$ is a stable [[Equilibrium]]
If $\mathbf{J}$ has at least one [[Eigenvalue]] with positive real part, then $\vec{a}$ is not a stable equilibrium