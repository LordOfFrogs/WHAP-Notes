---
tags:
  - math/calc
aliases:
  - MUC
---
Used for finding a particular solution to an [[Linear ODE#Homogeneous|inhomogeneous]] [[linear ODE]]
Given [[Ordinary Differential Equation|ODE]]:
1. Suppose some solution with undetermined coefficients ([[#Common forms of step 1]])
2. Calculate $\frac{dx}{dt}$ and substitute into [[Ordinary Differential Equation|ODE]]
3. Solve for coefficients, giving a particular solution
Does not always work
# Common forms of step 1
$$
\begin{align*}
x=at+b\\
x=P_{n}(t) \text{ (polynomial of order $n$)}\\
x=Ae^{\omega x} \text{ ($\omega$ is some predetermined coefficient)}\\
x=a\sin \omega t+b\sin \omega t\\
\text{Can also be written as: } x=A\cos(\omega t-\phi)\\
=\sqrt{ a^{2}+b^{2} }\cos\left( \omega t-\tan^{-1}\left( \frac{b}{a} \right) \right)
\end{align*}
$$
