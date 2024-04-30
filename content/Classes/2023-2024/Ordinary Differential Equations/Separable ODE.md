---
tags:
  - math/calc
---
An [[Ordinary Differential Equation|ODE]] in which the derivative can be separated such that
$$
\frac{dx}{dt}=F(x,y) \rightarrow p(x) dx = p(t) dt
$$
# Solving
1. Separate variables ^980168
2. [[Integral|Integrate]] both sides
3. Solve for initial condition if given ([[First Order ODE#Initial Value Problem (IVP)|IVP]])
$$
\begin{align*}
& \frac{dx}{dt}=F(x,y) \rightarrow p_{1}(x) dx = p_{2}(t) dt\\
\implies & \int p_{1}(x)dx=\int p_{2}(t)dt\\
\implies & P_{1}(x)=P_{2}(t)+C\\
& \text{Given x(a)=b,}\\
& C=P_{1}(b)-P_{2}(a)
\end{align*}
$$
