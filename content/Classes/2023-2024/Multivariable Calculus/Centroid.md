---
tags:
  - math/calc
---
For some region D in [[R2]], the centroid is the center of mass assuming uniform density
Defined by point $(\bar{x},\bar{y})$ where
$$
\bar{x}=\frac{1}{\text{area}(D)}\iint_{D}x\,dA,\bar{y}=\frac{1}{\text{area}(D)}\iint_{D}y\,dA
$$
Or for region $B$ in [[R3]]:
$$
\bar{x}=\frac{1}{\text{Volume}(B)}\iiint_{B}x\, dV,\bar{y}=\frac{1}{\text{Volume}(D)}\iiint_{B}y\, dV, \bar{z}=\frac{1}{\text{Volume}(B)}\iiint_{B}z\, dV
$$
# Center of Mass
#physics 
Weighted centroid
For [[R2]], with given mass density function $\sigma(x,y)$, center of mass is $(\bar{x}_{cm},\bar{y}_{cm})$, with
$$
\bar{x}_{cm}=\frac{\iint_{D}x\sigma(x,y)\,dA}{\iint_{D}\sigma(x,y)\,dA},\bar{y}_{cm}=\frac{\iint_{D}y\sigma(x,y)\,dA}{\iint_{D}\sigma(x,y)\,dA}
$$
For [[R3]]:
$$
\bar{x}_{cm}=\frac{\iiint_{B}x\sigma(x,y,z)\, dV}{\iiint_{B}\sigma(x,y,z)\, dV}, \bar{y}_{cm}=\frac{\iiint_{B}y\sigma(x,y,z)\, dV}{\iiint_{B}\sigma(x,y,z)\, dV}, \bar{z}_{cm}=\frac{\iiint_{B}z\sigma(x,y,z)\, dV}{\iiint_{B}\sigma(x,y,z)\, dV}
$$