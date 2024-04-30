---
tags:
  - math/calc
due: 2023-11-18
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW10-2023.pdf)
# Problem 1
$$
\begin{align*}
\iiint_{E}y\,dV,E=\{ (x,y,z)|x,y,z>0, 2x+2y+z\leq4 \}\\
=\iiint_{E}y\, dx\, dy\, dz\\
=\int_{0}^{2} \int_{0}^{2-x} \int_{0}^{4-2x-2y} y\, dz \, dy \, dx\\
=\int_{0}^{2} \int_{0}^{2-x} 4y-2xy-2y^{2}\, dy \, dx \\
=\int_{0}^{2} 2(2-x)^{2}-x(2-x)^{2}-\frac{2}{3}(2-x)^{3}\, dx \\
=\int_{0}^{2} 8-8x+2x^{2}-4x+4x^{2}-x^{3}-\frac{16}{3}+8x-4x^{2}+\frac{2}{3}x^{3}\, dx \\
=\int_{0}^{2} -\frac{1}{3}x^{3}+2x^{2}-4x+\frac{8}{3}\, dx\\
=-\frac{4}{3}+\frac{16}{3} -8+\frac{16}{3}=\fbox{$\frac{4}{3}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\iiint_{T}xyz\,dV\\
T=\text{Tetrahedron }\{(0,0,0),(1,0,0),(1,1,0),(1,0,1)\}\\
\text{Plane: }x-y-z=0\\
\int_{0}^{1} \int_{0}^{x}\int_{0}^{x-y} xyz\, dz  \, dy \, dx \\
=\int_{0}^{1} \int_{0}^{x} \frac{xy(x-y)^{2}}{2}\, dy\, dx \\
=\frac{1}{2}\int_{0}^{1} \int_{0}^{x} x^{3}y-2x^{2}y^{2}+xy^{3}\, dy\, dx\\
=\frac{1}{2}\int_{0}^{1} \frac{x^{5}}{2}-\frac{2}{3}x^{5}+\frac{1}{4}x^{5}\, dx \\
=\frac{1}{24}\int_{0}^{1} x^{5}\, dx \\
=\fbox{$\frac{1}{144}$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\iiint_{E}z\,dV\\
=\int_{0}^{1} \int_{0}^{3x} \int_{0}^{\sqrt{9-y^{2}}} z\, dz \, dy \, dx \\
=\frac{1}{2}\int_{0}^{1} \int_{0}^{3x} 9-y^{2}\, dy \, dx \\
=\frac{1}{2}\int_{0}^{1} 27x-9x^{3}\, dx\\
=\frac{27}{4}-\frac{9}{8}=\fbox{$\frac{45}{8}$}
\end{align*}
$$
# Problem 4
$$
\begin{align*}
x=y^{2}+z^{2},x=16\\
\\
x=x\\
y=r\cos \theta\\
z=r\sin \theta\\
dV=r\, dx\, dr\, d\theta\\
\int_{0}^{2\pi} \int_{0}^{16} \int_{0}^{\sqrt{x}} r\, dr \, dx \, d\theta \\
=\frac{1}{2}\int_{0}^{2\pi} \int_{0}^{16} x\, dx \, d\theta\\
=\int_{0}^{2\pi} 64\, d\theta\\
=\fbox{$128\pi$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\text{Mass}=\iiint_{E}4\,dV\
=\int_{-1}^{1} \int_{0}^{1-y^{2}}\int_{0}^{1-z} 4\, dx \, dz \, dy\\
=\int_{-1}^{1} \int_{0}^{1-y^{2}} 4-4z\, dz \, dy\\
=\int_{-1}^{1} 4-4y^{2}-2(1-y^{2})^{2}\, dy\\
=\int_{-1}^{1} 4-4y^{2}-2+4y^{2}-2y^{4}\, dy\\
=4-\frac{4}{5}=\fbox{Mass: $\frac{16}{5}$}\\
\text{Center of Mass}=\left( \frac{\iiint_{E}4x\, dV}{\text{Mass}},\frac{\iiint_{E}4y\, dV}{\text{Mass}},\frac{\iiint_{E}4z\, dV}{\text{Mass}} \right)\\
\bar{x}_{cm}=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} \int_{0}^{1-z} 4x\, dx \, dz \, dy\\
=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} 2(1-z)^{2}\, dz \, dy \\
=\frac{5}{8}\int_{-1}^{1} \int_{0}^{1-y^{2}} 1-2z+z^{2}\, dz \, dy\\
=\frac{5}{8}\int_{-1}^{1} 1-y^{2}-(1-y^{2})^{2}+\frac{1}{3}(1-y^{2})^{3}\, dy\\
=\frac{5}{24}\int_{-1}^{1} 3-3y^{2}-3+6y^{2}-3y^{4}+1-3y^{2}+3y^{4}-y^{6}\, dy  \\
=\frac{5}{24}\int_{-1}^{1} 1-y^{6}\, dy\\
=\frac{5}{12}-\frac{5}{84}=\frac{5}{14}\\
\bar{y}_{cm}=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} \int_{0}^{1-z} 4y\, dx \, dz \, dy\\
=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} 4y(1-z)\, dz \, dy \\
=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} y-yz\, dz \, dy\\
=\frac{5}{16}\int_{-1}^{1} y(1-y^{2})-\frac{y}{2}(1-y^{2})^{2}\, dy\\
=\frac{5}{8}\int_{-1}^{1} 2y-2y^{3}-y+2y^{3}-y^{5}\, dy  \\
=\frac{5}{8}\int_{-1}^{1} y-y^{5}\, dy\\
=0\\
\bar{z}_{cm}=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} \int_{0}^{1-z} 4z\, dx \, dz \, dy\\
=\frac{5}{16}\int_{-1}^{1} \int_{0}^{1-y^{2}} 4z(1-z)\, dz \, dy \\
=\frac{5}{4}\int_{-1}^{1} \int_{0}^{1-y^{2}} z-z^{2}\, dz \, dy\\
=\frac{5}{4}\int_{-1}^{1} \frac{1}{2}(1-y^{2})^{2}-\frac{1}{3}(1-y^{2})^{3}\, dy\\
=\frac{5}{24}\int_{-1}^{1} 3-6y^{2}+3y^{4}-2+6y^{2}-6y^{4}+2y^{6}\, dy  \\
=\frac{5}{24}\int_{-1}^{1} 1-3y^{4}+2y^{6}\, dy\\
=\frac{5}{12}+\frac{5}{42}-\frac{1}{4}=\frac{2}{7}\\
\implies \fbox{Center of mass: $\left( \frac{5}{14}, 0, \frac{2}{7} \right)$}
\end{align*}
$$
# Problem 6
Spherical coordinates
$$
\begin{align*}
x=\rho\cos\theta\sin \phi\\
y=\rho\sin\theta\sin \phi\\
z=\rho\cos \phi\\
dV\,= \rho^{2}\sin \phi\\
\text{Hemisphere: }r^{2}\leq1,0\leq\phi\leq \frac{\pi}{2},0\leq\theta\leq2\pi\\
\delta(\rho,\phi,\theta)=\rho
\end{align*}
$$
## a)
$$
\begin{align*}
\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \int_{0}^{1} \rho^{3}\sin \phi\, d\rho \, d\phi \, d\theta\\
=\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \frac{1}{4}\sin \phi\, d\phi \, d\theta\\
=\int_{0}^{2\pi} \frac{1}{4}\, d\theta\\
\implies \fbox{Mass: $\frac{\pi}{2}$}   
\end{align*}
$$
## b)
$$
\begin{align*}
\bar{z}_{cm}=\frac{2}{\pi}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \int_{0}^{1} \rho^{4}\cos \phi\sin \phi\, d\rho \, d\phi \, d\theta\\
=\frac{2}{5\pi}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \cos \phi\sin \phi\, d\phi \, d\theta\\
=\frac{1}{5\pi}\int_{0}^{2\pi} 1\, d\theta\\
=\frac{1}{5}\\
\fbox{Center of Mass: $\left( 0,0, \frac{2}{5} \right)$}  
\end{align*}
$$
## c)
$$
\begin{align*}
r=\rho\sin \phi\\
I_{z}=\iiint \rho^{5}\sin^{3}\phi\, d\rho\, d\phi\, d\theta \\
=\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \int_{0}^{1} \rho^{5}\sin^{3}\phi\, dx \, d\phi \, d\theta \\
=\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \frac{1}{6}\sin^{3}\phi\, d\phi \, d\theta \\
\int \sin ^{3}\phi\, d\phi=\int (1-\cos ^{2}\phi)\sin \phi\, d\phi\\
u=\cos \phi \implies d\phi=-\frac{du}{\sin \phi} \\
\implies \int u^{2}-1\, du=\frac{\cos^{3}\phi}{3}-\cos \phi+c\\
\implies I_{z}=\int_{0}^{2\pi} \frac{1}{9}\, d\theta \\
\implies \fbox{$I_{z}=\frac{2}{9}\pi$}
\end{align*}
$$
# Problem 7
$$
\begin{align*}
x=r\cos\theta\\
y=r\sin\theta\\
z=z\\
dV=r\, dr\, dz\, d\theta\\
\iiint_{E}x\, dV\\
=\int_{0}^{2\pi} \int_{2}^{3} \int_{0}^{r\cos\theta+r\sin\theta+5} r^{2}\cos\theta\, dz \, dr \, d\theta\\
=\int_{0}^{2\pi} \int_{2}^{3} r^{3}\cos ^{2}\theta+r^{3}\cos\theta\sin\theta+5r^{2}\cos\theta\, dr \, d\theta \\
=\int_{0}^{2\pi} \frac{r^{4}}{4}\cos^{2}\theta+\frac{r^{4}}{4}\cos\theta\sin\theta+\frac{5}{3}r^{3}\cos\theta\biggr|_{2}^{3}\, d\theta \\
=\int_{0}^{2\pi} \frac{65}{4}(\cos^{2}\theta+\cos\theta\sin\theta)+\frac{127}{5}\cos\theta\, d\theta \\
=\frac{65}{8}\left( \theta+\sin\theta \cos\theta-\cos^{2}\theta \right)+\frac{127}{5}\sin\theta\biggr|_{0}^{2\pi}\\
=\fbox{$\frac{65}{4}\pi$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
V=\int_{0}^{2\pi} \int_{0}^{1} \int_{-\sqrt{4-r^{2}}}^{\sqrt{4-r^{2}}} r\, dz \, dr \, d\theta \\
=\int_{0}^{2\pi} \int_{0}^{1} 2r\sqrt{4-r^{2}}\, dr \, d\theta \\
=\int_{0}^{2\pi} \frac{16}{3}-2\sqrt{3}\, d\theta\\
=\fbox{$\frac{32}{3}\pi-4\pi\sqrt{3}$} 
\end{align*}
$$
# Problem 9
$$
\begin{align*}
x^{2}+y^{2}+z^{2}\leq a^{2}\\
\implies \rho^{2}\leq a^{2}\implies \rho\leq a\\
\sigma(\rho)=k\rho\sin \phi\\
\text{Mass}=\int_{0}^{2\pi} \int_{0}^{\pi} \int_{0}^{a} k\rho^{3}\sin^{2} \phi\, d\rho \, d\phi \, d\theta \\
=\frac{ka^{4}}{4}\int_{0}^{2\pi} \int_{0}^{\pi} \sin^{2} \phi\, d\phi \, d\theta\\
=\frac{\pi}{8}ka^{4}\int_{0}^{2\pi} 1\, d\theta \\
=\fbox{$\frac{\pi^{2}}{4} ka^{4}$}
\end{align*}
$$
# Problem 10
$$
\begin{align*}
V=\int_{0}^{2\pi} \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \int_{0}^{2} \rho^{2} \sin \phi\, d\rho \, d\phi \, d\theta\\
=\int_{0}^{2\pi} \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \frac{8}{3}\sin \phi\, d\phi \, d\theta\\
=\int_{0}^{2\pi} \frac{4}{3}\sqrt{2}\, d\theta \\
=\fbox{$\frac{8}{3}\pi\sqrt{2}$}
\end{align*}
$$
# Problem 11
## a)
$$
\begin{align*}
\sigma(\rho)=k\rho\\
\rho\leq a\\
\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \int_{0}^{a} k\rho^{3}\sin \phi\, d\rho \, d\phi \, d\theta \\
=\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \frac{ka^{4}}{4}\sin \phi\, d\phi \, d\theta \\
=\int_{0}^{2\pi} \frac{ka^{4}}{4}\, d\theta\\
=\fbox{$\frac{1}{2}\pi ka^{4}$}
\end{align*}
$$
## b)
$$
\begin{align*}
\bar{z}_{cm}=\frac{2}{\pi a^{4}}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \int_{0}^{a} \rho^{4} \cos \phi\sin\phi\, d\rho \, d\phi \, d\theta \\
=\frac{2a}{5\pi} \int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \cos \phi\sin \phi\, d\phi \, d\theta \\
=\frac{a}{5\pi}\int_{0}^{2\pi} 1\, d\theta\\
= \frac{2a}{5}\\
\implies \fbox{Center of mass: $\left( 0,0, \frac{2a}{5} \right)$}
\end{align*}
$$
## c)
$$
\begin{align*}
r^{2}=x^{2}+y^{2}=\rho^{2}\sin^{2} \phi\\
I_{z}=\iiint_{H}\sigma \rho^{4}\sin^{3}\phi\, d\rho\, d\phi\, d\theta \\
=k\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \int_{0}^{a} \rho^{5}\sin^{3}\phi\, d\rho \, d\phi \, d\theta \\
=\frac{ka^{6}}{6}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{2}} \sin^{3}\phi\, d\phi \, d\theta\\
\int \sin ^{3}\phi\, d\phi=\frac{\cos^{3}\phi}{3}-\cos \phi+c\\
\implies I_{z}=\frac{1}{6}ka^{6}\int_{0}^{2\pi} \frac{2}{3}\, d\theta \\
=\fbox{$I_{z}=\frac{2}{9}\pi ka^{6}$}
\end{align*}
$$
# Problem 12
$$
\begin{align*}
V=\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{4}} \int_{0}^{1} \rho^{2}\sin \phi\, d\rho \, d\phi \, d\theta \\
=\frac{1}{3}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{4}} \sin \phi\, d\phi \, d\theta \\
=\int_{0}^{2\pi} \frac{1}{3}-\frac{\sqrt{2}}{6}\, d\theta \\
=\fbox{Volume: $\frac{2}{3}\pi-\frac{\sqrt{2}}{3}\pi$}\\
\bar{z}=\frac{1}{\frac{2}{3}\pi-\frac{\sqrt{2}}{3}\pi}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{4}} \int_{0}^{1} \rho^{3}\cos \phi\sin \phi\, d\rho \, d\phi \, d\theta\\
=\frac{3}{8\pi-4\pi\sqrt{2}}\int_{0}^{2\pi} \int_{0}^{\frac{\pi}{4}} \cos \phi\sin \phi\, d\phi \, d\theta \\
=\frac{3}{32\pi-16\pi\sqrt{2}}\int_{0}^{2\pi} 1\, d\theta \\
=\frac{3}{16-8\sqrt{2}}=\frac{3\sqrt{2}}{16}+\frac{3}{8}\\
\implies \fbox{Centroid: $\left( 0,0,\frac{3\sqrt{2}}{16}+\frac{3}{8} \right)$}
\end{align*}
$$
