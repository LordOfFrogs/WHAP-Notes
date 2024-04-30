---
tags:
  - math/calc
due: 2023-12-15
course: "[[Multivariable Calculus]]"
status: Complete
---
# Scratch work 1:
![[Multivariable Homework 12 2023-12-10 00.09.48.excalidraw|500]]
# Tried examples: 
![[Multivariable Homework 12 2023-12-10 21.28.40.excalidraw|600]]
# Scratch Work 2:
![[Multivariable Homework 12 2023-12-11 22.30.25.excalidraw|800]]
# Final solution:
$$
\begin{align*}
\vec{x}_{1}(\theta)\text{ and }\vec{x}_{2}(\theta)\text{ trace out the endpoints of segment L of length I with midpoint }\vec{m}(\theta)\\
\text{L runs over the boundary of $\Omega$ with area $A_{\Omega}$, $\vec{m}$ tracing out $\Gamma$ with area $A_{\Gamma}$}\\
\frac{1}{2}(\vec{x}_{1}+\vec{x}_{2})=\vec{m}\\
\implies \left\| \frac{1}{2}(\vec{x}_{1}+\vec{x}_{2}) \right\|^{2}=\|\vec{m}\|^{2}\\
\implies \|\vec{m}\|^{2}=\frac{1}{4}\|\vec{x}_{1}+\vec{x}_{2}\|^{2}=\frac{1}{4}(\vec{x}_{1}+\vec{x}_{2})\cdot(\vec{x}_{1}+\vec{x}_{2})\\
=\frac{1}{4}(\|\vec{x}_{1}\|^{2}+\|\vec{x}_{2}\|^{2}+2\vec{x}_{1}\cdot\vec{x}_{2})\\
\|\vec{x}_{1}-\vec{x}_{2}\|=I\\
\implies \|\vec{x}_{1}-\vec{x}_{2}\|^{2}=I^{2}\\
\implies I^{2}=(\vec{x}_{1}-\vec{x}_{2})\cdot(\vec{x}_{1}-\vec{x}_{2})\\
=\|\vec{x}_{1}\|^{2}+\|\vec{x}_{2}\|^{2}-2\vec{x}_{1}\cdot\vec{x}_{2}\\
\implies \|\vec{m}\|^{2}+\frac{I^{2}}{4}=\frac{1}{4}(\|\vec{x}_{1}\|^{2}+\|\vec{x}_{2}\|^{2}+2\vec{x}_{1}\cdot\vec{x}_{2})+\frac{I^{2}}{4}\\
\implies \|\vec{m}\|^{2}+\frac{I^{2}}{4}=\frac{1}{2}\|\vec{x}_{1}\|^{2}+\frac{1}{2}\|\vec{x}_{2}\|^{2}\\
\implies \frac{1}{2}\|\vec{m}\|^{2}=\frac{1}{4}\|\vec{x}_{1}\|^{2}+\frac{1}{4}\|\vec{x}_{2}\|^{2}-\frac{I^{2}}{8} &\quad(*)\\
\text{By Green's Theorem: }A=\frac{1}{2}\oint x\, dy-y\, dx\\
(\text{Parameterize $x$ and $y$ with respect to $\theta$})=\frac{1}{2}\int_{0}^{2\pi} x(\theta)\dot{y}(\theta)-y(\theta)\dot{x}(\theta)\, d\theta \\
\text{Let }x=r(\theta)\cos\theta,y=r(\theta)\sin\theta\\
\implies A=\frac{1}{2}\int_{0}^{2\pi} r\cos\theta(r'\sin\theta+r\cos\theta)-r\sin\theta(r'\cos\theta-r\sin\theta)\, d\theta\\
=\frac{1}{2}\int_{0}^{2\pi} rr'\cos\theta\sin\theta+r^{2}\cos^{2}\theta-rr'\cos\theta\sin\theta+r^{2}\sin^{2}\theta\, d\theta\\
=\frac{1}{2}\int_{0}^{2\pi} r^{2}(\sin ^{2}\theta+\cos ^{2}\theta)\, d\theta\\
\implies A=\frac{1}{2}\int_{0}^{2\pi} (r(\theta))^{2}\, d\theta\\
r(\theta)=\|\vec{m}(\theta)\|\implies A_{\Gamma}=\frac{1}{2}\int_{0}^{2\pi} \|\vec{m}\|^{2}\, d\theta\\
r(\theta)=\|\vec{x}_{1}(\theta)\|\implies A_{\Omega}=\frac{1}{2}\int_{0}^{2\pi} \|\vec{x}_{1}\|^{2}\, d\theta \\
r(\theta)=\|\vec{x}_{2}(\theta)\|\implies A_{\Omega}=\frac{1}{2}\int_{0}^{2\pi} \|\vec{x}_{2}\|^{2}\, d\theta \\
(*)\implies \frac{1}{2}\int_{0}^{2\pi} \|\vec{m}\|^{2}\, d\theta=\frac{1}{2}\left( \frac{1}{2}\int_{0}^{2\pi} \|\vec{x}_{1}\|^{2}\, d\theta  \right)+\frac{1}{2}\left( \frac{1}{2}\int_{0}^{2\pi} \|\vec{x}_{2}\|^{2}\, d\theta  \right)-\int_{0}^{2\pi} \frac{I^{2}}{8}\, d\theta\\
\implies A_{\Gamma}=\frac{1}{2}A_{\Omega}+\frac{1}{2}A_{\Omega}-\frac{\pi}{4}I^{2}\\
\implies \boxed{ A_{\Gamma}=A_{\Omega}-\frac{\pi}{4}I^{2} }
\end{align*}
$$