---
tags:
  - math/calc
  - math/linear-algebra
---
In [[Vector Space|linear space]] $V$, assigns a scalar $\langle f,g \rangle$ to any pair of elements $f,g\in V$, which for all $f,g,h\in V$ and scalars $c$:
1. $\langle f,g \rangle=\langle g,f \rangle$ (symmetric)
2. $\langle f,g+h \rangle=\langle f,g \rangle+\langle f,h \rangle$ and $\langle f+g,h \rangle=\langle f,h \rangle+\langle g,h \rangle$ (distributive)
3. $\langle cf,g \rangle=c\langle f,g \rangle$ (associative-ish)
4. $\langle f,f \rangle=\|f\|^{2}\geq 0$, which =0 only if $f$ is zero element (positive definiteness)
A [[Vector Space|linear space]] with an inner product is called an inner product space or normed linear space
# Functions
For functions $f,g$ defined on $[a,b]$:
$$
\langle f,g \rangle = K\int_{a}^{b} f(t)g(t)\, dt,K\in \mathbb{R}
$$
## Algebraic Properties
Same as [[Dot Product#Algebraic Properties]]
1. $\langle g,f \rangle=\langle f,g \rangle$ (symmetric/commutative)
2. $\langle f+g,h \rangle=\langle f,h \rangle+\langle g,h \rangle$, $\langle f,g+h \rangle=\langle f,g \rangle+\langle f,h \rangle$ (distributive)
3. $c\langle f,g \rangle=\langle cf,g \rangle=\langle f,cg \rangle$ (distributive/associative)
4. $\langle f,f \rangle=K\int_{a}^{b} (f(t))^{2}\, dt=\|f\|^{2}\geqslant0$
## Norm
$\|f\|$ called the norm
$$
\|f\|^{2}=\langle f,f \rangle =K \int_{a}^{b} (f(t))^{2}\, dx
$$
## [[Orthogonality]]
If $f,g$ are nonzero elements, they are [[Orthogonality|orthogonal]] if $\langle f,g \rangle=0$
A set of elements $\{f_{1},f_{2},\cdots,f_{n}\}$ orthonormal if each has [[#Norm]] 1 and any pair is [[Orthogonality|orthogonal]]
## Square Summable
Often functions restricted to such that
$$
\|f\|^{2}=\langle f,f \rangle =\int_{a}^{b} [f(t)]^{2} \, dt
$$
is finite
Denoted by $L^{2}([a,b])$
In the space, $|\langle f,g \rangle|<\|f\|\|g\|$ and $\|f+g\|\leq\|f\|+\|g\|$
## [[Orthogonal Projection|Projection]]
$$
\text{Proj}_{n}(f)=\langle f,f_{1} \rangle f_{1}+\langle f,f_{2} \rangle f_{2}+\cdots+\langle f,f_{n} \rangle f_{n}
$$