---
tags:
  - math/calc
---
Of a [[Generalized Function]] $f(t)=f_{r}(t)+f_{s}(t)$
$$
f'(t)=\begin{Bmatrix}
f'_{r}(t) & \text{regular part} \\
f'_{s}(t) & \text{singular part}
\end{Bmatrix}
$$
With [[Regular Function|regular]] part $f_{r}'(t)$ and the [[Singularity Function|singular]] part $f_{s}'(t)$ given by
$$
f'_{s}(t)=\sum(f(a^{+})-f(a^{-}))\delta(t-a),a\in\text{singular part}
$$
Where $\delta$ is the [[Delta Function]]
formally,
$$
\lim_{ h \to 0^{+} } (f(a+h)-f(a-h))\delta(t-a)\{a|a\in D(f)\setminus D(f'_{r})\}
$$
Where $D(f)$ is the domain of f