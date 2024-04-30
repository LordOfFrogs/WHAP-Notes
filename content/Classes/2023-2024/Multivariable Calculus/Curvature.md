---
tags:
  - math/calc
---
Measures the "tightness" of a [[Parameterized Curve]]
Using s as [[Arc Length]], $\vec{T}$ as [[Unit Tangent Vector]], and $\vec{v}$ as [[Velocity Vector]]
$$
\begin{align*}
s=\text{arc length as parameter}\\
\left\|\frac{d\vec{T}}{ds}\right\|=\kappa&\quad\text{(curvature)}\\
\frac{d}{dt}[\vec{T}(s(t))]=\vec{T}'(s(t)) \frac{ds}{dt}\\
=\vec{T}'(s(t))\|\vec{v}(t)\|\\
\implies \vec{T}'(t)=\frac{d\vec{T}}{ds}\|\vec{v}\|\\
\implies \frac{d\vec{T}}{ds}=\frac{\vec{T}'(t)}{\vec{v}}\\
\implies \fbox{$\kappa=\frac{\|\vec{T}'(t)\|}{\|\vec{v}\|}$}
\end{align*}
$$
# Radius of Curvature
Imagine a circle with radius R and a [[Parameterized Curve]] that traces the circle with angular momentum $\omega$
Uses $\vec{v}$ as [[Velocity Vector]], $\vec{a}$ as [[Acceleration Vector]]
$$
\begin{align*}
\vec{r}=\langle R\cos \omega t,R\sin \omega t\rangle\\
=R\langle\cos \omega t, \sin \omega t\rangle\\
\implies \vec{v}=R\omega\langle-\sin \omega t,\cos \omega t\rangle\\
\implies \|\vec{v}\|=R\omega\\
\vec{a}=-R\omega^{2}\langle\cos \omega t,\sin \omega t\rangle\\
a=R\omega^{2}\\
\vec{T}=\langle-\sin \omega t,\cos \omega t\rangle\\
\kappa=\frac{\vec{T}'}{\|\vec{v}\|}=\frac{\omega}{R\omega}=\frac{1}{R}\\
\therefore R=\frac{1}{\kappa}
\end{align*}
$$
Can be measured for non-circular curves by calculating [[Curvature]]
Imagine drawing a circle that fits nicely against the curve called the osculating circle