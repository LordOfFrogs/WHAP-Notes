---
tags:
  - math/calc
---
>[!Definition]
>$\lim_{ x \to a }f(x)=L$ if given an error bound $\varepsilon>0$, there is a precision $\delta>0$ such that whenever $0<|x-a|<\delta$, then $|f(x)-L|<\varepsilon$

>[!Definition]
>$\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)=L$ if given an error bound $\varepsilon>0$, there is a precision $\delta>0$ such that whenever $0<d((x,y),\ (x_{0},y_{0}))<\delta$, then $|f(x,y)-L|<\varepsilon$

# Proving Multivariate Limits
Prove the definition
$$
\begin{align*}
d((x,y),(x_{0},y_{0}))\text{ small}\implies |f(x,y)-L|\text{ small}\\
|f(x,y)-L|\leq Ad((x,y),(x_{0},y_{0})),A\in\mathbb{R}\ (A\delta=\varepsilon)
\end{align*}
$$