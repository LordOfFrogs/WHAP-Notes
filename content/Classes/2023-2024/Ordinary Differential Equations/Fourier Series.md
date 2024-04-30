---
tags:
  - math/calc
---
>[!Theorem (Fourier)]
>Suppose $f(t)$ is [[periodic]] with base period $2\pi$ and continuous except for a finite number of jump discontinuities. Then $f(t)$ may be represented by a (convergent) Fourier Series:
>$$
>f(t)\sim \frac{a_{0}}{2}+\sum_{n=1}^{\infty}(a_{n}\cos nt+b_{n}\sin nt)
>$$
>where: $a_{0}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\,dt,\qquad a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\cos nt\,dt\qquad b_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\sin nt\,dt$
>The numbers ${a_{0},a_{1},b_{1},\cdots,a_{n},b_{n},\cdots}$ are called Fourier coefficients of the function $f(t)$
>This representation is an equality at all points of continuity of $f(t)$. At any discontinuity $t=a$, the series converges to the average of $f(a^{-})$ and $f(a^{+})$

If $f$ is even, $b_{n}=0$ for all n
If $f$ is odd, $a_{n}=0$ for all n
# Derivation
In $L^{2}([-\pi,\pi])$ with [[Inner Product]] $\langle f,g \rangle=\frac{1}{\pi}\int_{-\pi}^{\pi} f(t)g(t)\, dt$
Call $T_{n}=\text{Span}\left\{ \frac{1}{\sqrt{2}},\cos t,\sin t,\cos2t,\sin2t,\cdots,\cos nt,\sin nt \right\}$ (orthonormal collection of $2n+1$ functions)[^1]
$$
f_{n}=\text{Proj}_{T_{n}}f=\left\langle  \frac{f,1}{\sqrt{2}}  \right\rangle \frac{1}{\sqrt{2}}+\langle f,\cos t \rangle \cos t+\langle f,\sin t \rangle \sin t+\cdots+\langle f,\cos nt \rangle \cos nt+\langle f,\sin nt \rangle \sin nt
$$
Is the nth order Fourier approximation
Expressing in terms of [[Integral|integrals]],
$$
f_{n}=\frac{1}{2}\left[ \frac{1}{\pi}\int_{-\pi}^{\pi} f(t) \, dt  \right]+\left[ \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos t \, dt  \right]\cos t+\left[ \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin t \, dt  \right]\sin t+\cdots+\left[ \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos nt \, dt  \right]\cos nt+\left[ \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin nt \, dt  \right]\sin nt
$$
Which can then be used to derive the Fourier coefficients
## Approximation
$$
f=(f-f_{n})+f_{n},\ f_{n}\in T_{n},(f-f_{n})\in T_{n}^{\perp}
$$
Where $(f-f_{n})$ is [[Orthogonality|orthogonal]] to $f_{n}$, in the [[orthogonal complement]] of $T_{n}$
Analogue of Pythagorean Theorem gives:
$$
\|f\|^{2}=\|f-f_{n}\|^{2}+\|f_{n}\|^{2}
$$
With some analysis,
$$
\lim_{ n \to \infty } \|f-f_{n}\|^{2}=0\implies\lim_{ n \to \infty } \|f_{n}\|^{2}=\|f\|^{2}
$$
# Manipulation
Can be shifted, scaled, differentiated, integrated to produce other Fourier series
## Different Period
For function $f(t)$ with period $2L$ and fundamental interval $[-L,L]$, change variables
Let $u=\frac{\pi t}{L}, g(u)=f\left( \frac{Lu}{\pi} \right)$, so $g$ has period $2\pi$ and fundamental interval $[-\pi,\pi]$
Series for $g(u)$:
$$
\begin{align*}
g(u)\sim \frac{a_{0}}{2}+\sum_{n=1}^{\infty}(a_{n}\cos nu+b_{n}\sin nu)\\
a_{0}=\frac{1}{\pi}\int_{-\pi}^{\pi} g(u) \, du = \frac{1}{L}\int_{-L}^{L} f(t) \, dt\\
a_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi} g(u)\cos nu \, du = \frac{1}{L}\int_{-L}^{L} f(t)\cos\left( \frac{n\pi t}{L} \right) \, dt\\
b_{n}=\frac{1}{\pi}\int_{-\pi}^{\pi} g(u)\sin nu \, du = \frac{1}{L}\int_{-L}^{L} f(t)\sin\left( \frac{n\pi t}{L} \right) \, dt 
\end{align*}
$$

[^1]: See [[Span]]