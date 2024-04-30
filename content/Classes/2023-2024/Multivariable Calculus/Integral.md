---
tags:
  - math/calc
aliases:
  - Integrate
  - Integrals
  - Integration
---
# Single Integral
Typically in [[R2]]
$$
\int_{a}^{b} f(x)\,dx 

$$
Represents signed area under a curve (positive above x-axis, negative below)
Also can represent another accumulating quantity over a single variable
## Reimann Sums
### 1. Partition Domain
Into intervals of $\Delta x_{i}$, where maximum interval is $|\Delta|$
### 2. Approximate
$$
\Delta A_{i}\cong f(c_{i})\Delta x_{i}
$$
### 3. Sum
$$
\sum_{i=1}^{n}\Delta A_{i}\cong \sum_{i=1}^{n}f(c_{i})\Delta x_{i}
$$
### 4. Limit
$$
\lim_{ |\Delta| \to 0 } \left( \sum_{i=1}^{n}f(c_{i})\Delta x_{i} \right)=\int_{a}^{b} f(x)\,dx 
$$
# Double Integral
Typically in [[R3]]
$$
\iint_{D}f(x,y)\,dA
$$
Represents signed volume under a graph on domain D
Can represent other quantities accumulated over a domain in [[R2]] (often an area)
Simply eg. $\text{Area}(D)=\iint_{D}dA$
Can be rewritten when the domain is a rectangle from $(a,c)$ to $(b,d)$ as
$$
\int_{a}^{b} \int_{c}^{d} f(x,y)\,dy \,dx 
$$
## Average
$$
\bar{f}=\frac{1}{\text{area}(D)}\iint_{D} f(x,y)\,dA
$$
## Weighted Average
$$
\bar{f}_{wtd}=\frac{\iint_{D} f(x,y)\sigma(x,y)\,dA}{\iint_{D} \sigma(x,y)\,dA}
$$
## Reimann Sums
### 1. Partition Domain
Divide 2D domain $D$ into uniformly small pieces of area $\Delta A_{i}$
Define mesh of the partition to be $|\Delta|=\underset{1\leq i\leq n}{\max}(\text{diameter}(D_{i}))$
### 2. Approximate
$$
\Delta V_{i}\cong f(x_{i},y_{i})\Delta A_{i}
$$
### 3. Sum
$$
\sum_{i=1}^{n}\Delta V_{i}\cong \sum_{i=1}^{n} f(x_{i},y_{i})\Delta A_{i}
$$
### 4. Limit
$$
\lim_{ |\Delta| \to 0 } \left( \sum_{i=1}^{n}f(x_{i},y_{i})\Delta A_{i} \right)=\iint_{D} f(x,y)\,dA
$$
## Evaluation ([[Fubini Theorem]])
$$
\iint_{D}f(x,y)\,dA=\int_{a}^{b}\int_{g(x)}^{h(x)}f(x,y) \,dy\,dx = \int_{c}^{d}\int_{k(x)}^{l(x)}f(x,y) \,dx\,dy 
$$
## [[Polar Coordinates]]
For $f(x,y)$ in [[Cartesian Coordinates]]
$$
\iint_{D}f(x,y)\,dA=\int_{\alpha}^{\beta} \int_{g(\theta)}^{h(\theta)} f(r\cos\theta,r\sin\theta)r\,dr \,d\theta
$$
Or, in [[Polar Coordinates]]
$$
\iint_{D}f(r,\theta)\,dA=\int_{\alpha}^{\beta} \int_{g(\theta)}^{h(\theta)} f(r,\theta)r\,dr \,d\theta
$$
# Triple Integral
$$
\iiint_{B} f(x,y,z)\, dV
$$
## Density Function
For object in domain $B\in$ [[R3]]
$$
\text{Mass}(B)=\iiint_{B}dm=\iiint_{B}\sigma(x,y,z)\,dV
$$
## Average
$$
\bar{f}=\frac{1}{\text{Volume}(B)}\iiint_{B} f(x,y,z)\, dV
$$
## Evaluation ([[Fubini Theorem]] applies)
$$
\iiint_{B}f(x,y,z)\, dV=\int_{a}^{b}\int_{g(x)}^{h(x)}\int_{k(x,y)}^{l(x,y)} f(x,y,z)\, dz\, dy\, dx 
$$
## [[Cylindrical Coordinates]]
$$
dV=r\, dz\, dr\, d\theta
$$
## [[Spherical Coordinates]]
$$
dV=\rho^{2}\sin \phi\, d\rho\, d\phi\, d\theta
$$
## Reimann Sums
### 1. Partition Domain
Divide 3D domain $B$ into uniformly small pieces of volume $\Delta V_{i}$
Define mesh of the partition to be $|\Delta|=\underset{1\leq i\leq n}{\max}(\text{diameter}(B_{i}))$
### 2. Approximate
$$
\Delta m_{i}\cong f(x_{i},y_{i},z_{i})\Delta B_{i}
$$
### 3. Sum
$$
\sum_{i=1}^{n}\Delta m_{i}\cong \sum_{i=1}^{n} f(x_{i},y_{i},z_{i})\Delta V_{i}
$$
### 4. Limit
$$
\lim_{ |\Delta| \to 0 } \left( \sum_{i=1}^{n}f(x_{i},y_{i},z_{i})\Delta V_{i} \right)=\iiint_{B} f(x,y,z)\,dV
$$