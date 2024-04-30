---
tags:
  - math/calc
---
# Constant Coefficients
$$
\begin{align*}
D^{n}+a_{n-1}D^{n-1}+\cdots+a_{1}D+a_{0}I=p(D)\\
p(D)[x(t)]=q(t)\\
\end{align*}
$$
## Find [[Linear ODE#Homogeneous|Homogenous]] solutions
Seek $e^{rt}$
$$
\begin{align*}
D(e^{rt})=re^{rt}\\
D^{2}(e^{rt})=r^{2}e^{rt}\\
\vdots\\
D^{n}(e^{rt})=r^{n}e^{rt}\\
\implies \underbrace{(r^{n}+a_{n-1}r^{n+1}+\cdots+r)}_{\text{Characteristic polynomial}}e^{rt}=0\\
\text{Distinct roots}\implies x_{h}(t)=c_{1}e^{r_{1}t}+c_{2}e^{r_{2}t}+\cdots+c_{n}e^{r_{n}t}\\
\end{align*}
$$
Gives all solutions
### Repeated Roots
For a root $r$ of multiplicity $k$, include solutions $e^{rt},te^{rt},t^{2}e^{rt},\cdots,t^{k}e^{rt}$
## Proof
Prove that [[span]] $\{e^{r_{1}t},e^{r_{2}t}\cdots,e^{r_{n}t}\}$
Given [[First Order ODE#Initial Value Problem (IVP)|IVP]]:
$$
\begin{align*}
\begin{Bmatrix}
f_{1}(t_{0})c_{1}+f_{2}(t_{0})c_{2}+\cdots+f_{n}(t_{0})c_{n}+x_{p}(t_{0})&=x_{h}(t_{0})+x_{p}(t_{0}) \\
f_{1}'(t_{0})c_{1}+f_{2}'(t_{0})c_{2}+\cdots+f_{n}'(t_{0})c_{n}+x'_{p}(t_{0})&=x'_{h}(t_{0})+x'_{p}(t_{0}) \\
\vdots \\
f_{1}^{(n-1)}(t_{0})c_{1}+f^{(n-1)}_{2}(t_{0})c_{2}+\cdots+f^{(n-1)}_{n}(t_{0})c_{n}+x^{(n-1)}_{p}(t_{0})&=x^{(n-1)}_{h}(t_{0})+x^{(n-1)}_{p}(t_{0})
\end{Bmatrix}\\
\implies \begin{bmatrix}
f_{1}(t_{0}) & f_{2}(t_{0}) & \cdots & f_{n}(t) \\
f'_{1}(t_{0}) & f'_{2}(t_{0}) & \cdots & f'_{n}(t_{0}) \\
\vdots & \vdots & \cdots & \vdots \\
f_{1}^{(n-1)}(t_{0}) & f_{2}^{(n-1)}(t_{0}) & \cdots & f_{n}^{(n-1)}(t_{0})
\end{bmatrix}
\begin{bmatrix}
c_{1} \\
c_{2} \\
\vdots \\
c_{n}
\end{bmatrix}
=\begin{bmatrix}
x(t_{0})-x_{p}(t_{0}) \\
x'(t_{0})-x_{p}'(t_{0}) \\
\vdots \\
x^{(n-1)}(t_{0})-x_{p}^{(n-1)}(t_{0})
\end{bmatrix}
\end{align*}
$$
Which is true if the [[Wronskian Determinant]] is nonzero