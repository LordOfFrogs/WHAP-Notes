---
tags:
  - math/calc
---
Laplace transform of function $f(t)$:
$$
\Huge \mathscr{L}[f(t)]=F(s)=\int_{0^{-}}^{\infty} e^{-st}f(t)\,dt 
$$
Where complex variable s is such that $\text{Re}(s)\gg0$
$e^{-st}$ is called the [[integral]] kernel
Laplace transform is [[Linearity|Linear]]
# Properties
## [[Heaviside Function]]
$$
\begin{align*}
\mathscr{L}[1]=\mathscr{L}[u(t)]=\int_{0}^{\infty} e^{-st}\,dt = \frac{1}{s}\\
\mathscr{L}[u_{a}(t)] = \frac{e^{-as}}{s}
\end{align*}
$$
## $f(t)=t$
$$
\mathscr{L}[t]=\int_{0}^{\infty} te^{-st}\,dt= \frac{1}{s^{2}}
$$
## $f(t)=t^{n}$
$$
\mathscr{L}[t^{n}]=\frac{n!}{s^{n+1}}
$$
## s-derivative Rule
$$
\begin{align*}
\mathscr{L}[tf(t)]=-F'(s)\\
\mathscr{L}[t^{n}f(t)]=(-1)^{n}F^{(n)}(s)
\end{align*}
$$
## $f(t)=e^{rt}$
$$
\mathscr{L}[e^{rt}]=\frac{1}{s-r}
$$
## s-shift rule
$$
\mathscr{L}[e^{rt}f(t)]=F(s-r)
$$
## t-shift rule
$$
\mathscr{L}[f_{a}(t)]=\mathscr{L}[f(t-a)]=e^{-as}F(s)
$$
## t-derivative Rule
$$
\begin{align*}
\mathscr{L}[f'(t)]=sF(s)-f(0^{-})\\
\mathscr{L}[f''(t)]=s^{2}F(s)-sf(0^{-})-f'(0^{-})\\
\mathscr{L}[f^{(n)}(t)]=s^{n}F(s)-s^{n-1}f(0^{-})-s^{n-2}f'(0^{-})-\cdots-f^{(n-1)}(0^{-})
\end{align*}
$$
### Special Case - Rest Initial Conditions
$$
\begin{align*}
f(0)=0,f'(0)=0,\cdots ,f^{(n)}(0)=0\\
\mathscr{L}[f'(t)]=sF(s)\\
\mathscr{L}[f''(t)]=s^{2}F(s)\\
\vdots\\
\mathscr{L}[f^{(n)}(t)]=s^{n}F(s)
\end{align*}
$$
## [[Heaviside Function#Delta Function|Delta Function]]
$$
\begin{align*}
\mathscr{L}[\delta(t)]=1\\
\mathscr{L}[\delta_{a}(t)]=e^{-as}
\end{align*}
$$
## Sines and cosines
$$
\begin{align*}
\mathscr{L}[\cos(\omega t)]=\frac{s}{s^{2}+\omega^{2}}\\
\mathscr{L}[\sin(\omega t)]=\frac{\omega}{s^{2}+\omega^{2}}
\end{align*}
$$
# For [[Ordinary Differential Equation|ODE]]s:
1. Transform the entire equation
2. Solve algebraically
3. Make into form that can be transformed back (often do partial fractions)
4. Reverse transform