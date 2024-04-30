---
tags:
  - math
  - math/number-theory
---
[Link](https://i0g878.a2cdn1.secureserver.net/wp-content/uploads/2024/01/PROMYS_2024_Application-Boston.pdf)
# Problem 1
**Work:**
![[Problem 1]]
**Formally:**
For any $n$ with $k$ factors, the the unit fraction $\frac{1}{n}$ can be written in as the sum of two unit fractions in $2k-1$ ways because,
For some positive integer $a$, one fraction can be $\frac{1}{n+a}$, and then other must be $\frac{1}{n}-\frac{1}{n+a}=\frac{n-n+a}{n(n+a)}=\frac{a}{n(n+a)}$, which, to be a unit fraction, $a$ must be either a factor of $n$ or $n+a$, and $a$ can only be a factor of $n+a$ if $a$ is a factor of $n$. Therefore, $a$ must be a factor of $n$.
For each factor $a$ of $n$, the fractions can be reversed to produce an additional combination, except for the case when $a=n$, where they are equal.
So, for the lowest $k-1$ factors, each has 2 combinations that work while for the final factor $a=n$, there is only one, giving $2(k-1)+1=2k-1$

From this, follows that for $n=11$ with 2 factors, there are $2(2)-1=3$ ways, so no additional than what was listed
And, for $n=60$ with 12 factors, $2(12)-1=23$ ways
# Problem 2
![[PROMYS 2024 Problem Set 2024-02-07 21.20.59.excalidraw]]
Used Desmos for quick computations and visualization:
![[Pasted image 20240207221534.png|300]]
## a)
The sequence: 5, -3, 2, -1, 1, ... alternates for first 5
The sequence: 55, -34, 21, -13, 8, -5, 3, -2, 1, -1, ... alternates for first 10
## b)
For a given integer $n$, the next number in the sequence to maximize the alternation is the integer closest to $-\frac{n}{\varphi}$ where $\varphi$ is the golden ratio.
This is because, for a sequence that starts with $n, m$, it follows with:
$$
n, m, n+m, n+2m, 2n+3m, 3n+5m, 5n+8m, 8n+13m,\dots F_{k}n+F_{k+1}m
$$
Where $F_{k}$ is the $k^{th}$ Fibonacci number.
To maximize the number of alternations, the goal is to have the series alternate around 0, which must mean
$$
\begin{align*}
\lim_{ k \to \infty } F_{k}n+F_{k+1}m=0\implies\lim_{ k \to \infty } \frac{F_{k+1}m}{F_{k}n}=-1\\
\implies \frac{m}{n}\lim_{ k \to \infty } \frac{F_{k+1}}{F_{k}}=-1\\
\implies \frac{m}{n}\varphi=-1\implies \boxed{ m=-\frac{n}{\varphi} }
\end{align*}
$$
For some small numbers, because they need to be integers, the rounding on this causes suboptimal solutions (for example $n=4$, which works best with $m=-3$ but $-\frac{n}{\varphi}\approx-2.472$ which rounds to $m=-2$)

For $n=8$, $m=-5$, which forms 8, -5, 3, -2, 1, -1, 0, ...
For $n=10$, $m=-6$, giving 10, -6, 4, -2, 2, 0, ...
# Problem 3
$$
\begin{align*}
H_{1}=10^{5},F_{1}=1\\
H_{n}=n\cdot10^{5}\\
F_{n+1}=\frac{n+1}{n}F_{n}+1\\
F_{n+2}=\frac{n+2}{n+1}F_{n+1}+1=\left( \frac{n+2}{n+1} \right)\left( \frac{n+1}{n}F_{n}+1 \right)+1\\
=\frac{n+2}{n}F_{n}+\frac{n+2}{n+1}+1\\
F_{n+3}=\frac{n+3}{n+2}F_{n+2}+1=\frac{n+3}{n+2}\left(\frac{n+2}{n}F_{n}+\frac{n+2}{n+1}+1\right)+1\\
=\frac{n+3}{n}F_{n}+\frac{n+3}{n+1}+\frac{n+3}{n+2}+1\\
F_{n+k}=\frac{n+k}{n}F_{n}+(n+k)\sum_{m=1}^{k} \frac{1}{n+m}\\
n=1\implies F_{k+1}=(k+1)F_{1}+(k+1)\sum_{m=1}^{k} \frac{1}{1+m}\\
=(k+1)\sum_{m=0}^{k} \frac{1}{m+1}\\
H_{n}-F_{n}=n\cdot10^{5}-n\sum_{m=0}^{n-1} \frac{1}{m+1}\\
\leq0 \Longleftrightarrow \sum_{m=0}^{n-1} \frac{1}{m+1}\geq 10^{5}\text{ for some }n\\
\sum_{m=0}^{n-1} \frac{1}{m+1}\equiv \sum_{k=1}^{n} \frac{1}{k} = \text{harmonic series, which is divergent}\\
\text{so, for sufficiently large }n, \sum_{m=0}^{n-1} \frac{1}{m+1}\geq 10^{5}\implies H_{n}-F_{n}\leq0\\
\therefore \fbox{The flea will catch the hare}
\end{align*}
$$
# Problem 4
![[PROMYS 2024 Problem Set 2024-02-08 10.11.13.excalidraw]]
Hypothesis: Choosing transcendental numbers with a transcendental ratio to each other as coordinates allows any arbitrary number of lattice points to be contained simply by expanding around center, because no two lattice points can be equidistant

Proof by contradiction: Take the transcendental ordered pair $(e, e+1)$, with a circle around it that includes $n$ lattice points. Assume that expanding the radius to include more lattice points must add 2 (or more) lattice points, which would mean that the circle cannot contain $n+1$ lattice points. For this to be true, two (or more) distinct points $(x_{1},y_{1})$ and $(x_{2}, y_{2})$ must be equidistant from the center:
$$
\begin{align*}
\sqrt{(x_{1}-e)^{2}+(y_{1}-e-1)^{2}}=\sqrt{(x_{2}-e)^{2}+(y_{2}-e-1)^{2}}\\
\implies (x_{1}-e)^{2}+(y_{1}-e-1)^{2}=(x_{2}-e)^{2}+(y_{2}-e-1)^{2}\\
\implies x_{1}^{2}-2ex_{1}+e^{2}+y_{1}^{2}-2(e+1)y_{1}+(e+1)^{2}=x_{2}^{2}-2ex_{2}+e^{2}+y_{2}^{2}-2(e+1)y_{2}+(e+1)^{2}\\
\implies 2ex_{2}-2ex_{1}+2(e+1)y_{2}-2(e+1)y_{1}=x_{2}^{2}+y_{2}^{2}-x_{1}^{2}-y_{1}^{2}\\
\implies e(2x_{2}-2x_{1}+2y_{2}-2y_{1})+(2y_{2}-2y_{1})=x_{2}^{2}-x_{1}^{2}+y_{2}^{2}-y_{1}^{2}\\
\implies e(2x_{2}-2x_{1}+2y_{2}-2y_{1})=x_{2}^{2}-x_{1}^{2}+y_{2}^{2}-y_{1}^{2}-2y_{2}+2y_{1}
\end{align*}
$$
["Applying any non-constant single-variable algebraic function to a transcendental argument yields a transcendental value"](https://en.wikipedia.org/wiki/Transcendental_number#Properties)
Because $e$ is transcendental, multiplying by some integer must be also transcendental, which contradicts how $x_{2}^{2}-x_{1}^{2}+y_{2}^{2}-y_{1}^{2}-2y_{2}+2y_{1}\in\mathbb{Z}$ (because all coordinates are integers)

Therefore, expanding a circle centered at $(e,e+1)$ must enclose only one lattice point at a time, which, if it starts with only one, means that the circle include an arbitrary number of lattice points by choosing some radius.
This technique should work for any pair $(a,f(a)+b)$ where $a$ is transcendental and $f(x)$ is a non-constant algebraic function and $b$ is an algebraic number
# Problem 5
![[PROMYS 2024 Problem Set 2024-02-08 13.19.58.excalidraw]]