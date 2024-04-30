---
tags:
  - physics
  - math/calc
---
Moment of inertia as "point mass" $M$ located at distance $R$ from axis of rotation is
$$
I=MR^{2}
$$
Can be thought of as "rotational mass" as it measures resistance to rotational acceleration about a given axis
For not a point mass, can use [[Integral#Triple Integral|triple integral]] to calculate as:
Moments of inertia $(I_{x},I_{y},I_{z})$ relative to [[Coordinates|coordinate]] axes of region $B$ in [[R3]] with mass density function $\sigma(x,y,z)$
$$
\begin{align*}
I_{x}=\iiint_{B}R_{x}^{2}\,dm=\iiint_{B}(y^{2}+z^{2})\,dm=\iiint_{B}(y^{2}+z^{2})\sigma(x,y,z)\,dV\\
I_{y}=\iiint_{B}R_{y}^{2}\,dm=\iiint_{B}(x^{2}+z^{2})\,dm=\iiint_{B}(x^{2}+z^{2})\sigma(x,y,z)\,dV\\
I_{z}=\iiint_{B}R_{z}^{2}\,dm=\iiint_{B}(x^{2}+y^{2})\,dm=\iiint_{B}(x^{2}+y^{2})\sigma(x,y,z)\,dV
\end{align*}
$$