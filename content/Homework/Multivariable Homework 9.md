---
tags:
  - math/calc
due: 2023-11-11
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW9-2023.pdf)
# Problem 1
$$
\begin{align*}
\int_{0}^{1} \int_{0}^{1} xy\sqrt{x^{2}+y^{2}}\, dx\, dy\\
=\int_{0}^{1} \left.\frac{1}{3}y\left( x^{2}+y^{2} \right)^{\frac{3}{2}}\right|_{x=0}^{x=1}\, dy \\
=\frac{1}{3}\int_{0}^{1} y(1+y^{2})^{\frac{3}{2}}-y^{4}\, dy \\
=\frac{1}{3}\left( \frac{1}{5}(1+y^{2})^{\frac{5}{2}}-\frac{1}{5}y^{5} \right)\biggr|_{0}^{1}=\frac{1}{3}\left( \frac{1}{5}\left( 2^{\frac{5}{2}} \right)-\frac{1}{5} \right)-\frac{1}{15}\\
=\frac{4\sqrt{2}}{15}-\frac{1}{15}-\frac{1}{15}=\fbox{$\frac{4\sqrt{2}-2}{15}$}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
\iint_{R} \frac{x}{1+xy}\, dA, R=[0,1]\times[0,1]\\
=\int_{0}^{1} \int_{0}^{1} \frac{x}{1+xy}\,dy \,dx\\
=\int_{0}^{1} \ln|1+xy|\biggr|_{y=0}^{y=1}\, dx \\
=\int_{0}^{1} \ln(1+x)\,dx \\
=(1+x)\ln(1+x)-(1+x)\biggr|_{0}^{1}\\
=\fbox{$2\ln2-1$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
\iint_{D} \frac{y}{x^{5}+1}\, dA,D=\{(x,y)|0\leq x\leq1,0\leq y\leq x^{2}\}\\
=\int_{0}^{1} \int_{0}^{x^{2}} \frac{y}{x^{5}+1}\, dy\, dx \\
=\int_{0}^{1}\left( \frac{y^{2}}{2x^{5}+2} \right)_{y=0}^{y=x^{2}}\, dx \\
=\int_{0}^{1} \frac{x^{4}}{2x^{5}+2}\, dx\\
=\frac{1}{10}\ln(2x^{5}+2)\biggr|_{0}^{1}=\fbox{$\frac{1}{10}\ln2$}
\end{align*}
$$
# Problem 4
![[Multivariable Homework 9 2023-11-08 09.44.14.excalidraw]]
$$
\begin{align*}
\iint \sqrt{4-y^{2}}\, dA\\
=\int_{0}^{2}\int_{0}^{2y} \sqrt{4-y^{2}}\, dx \, dy \\
=\int_{0}^{2} 2y\sqrt{4-y^{2}}\, dy\\
=-\frac{2}{3}(4-y^{2})^{\frac{3}{2}}\biggr|_{0}^{2}=\fbox{$\frac{16}{3}$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
V=2\iint \sqrt{r^{2}-y^{2}}\, dA\\
=2\int_{-r}^{r}\int_{-\sqrt{r^{2}-y^{2}}}^{\sqrt{r^{2}-y^{2}}}\sqrt{r^{2}-y^{2}}\, dx \, dy \\
=2\int_{-r}^{r}2r^{2}-2y^{2}\, dy\\
=4\left( yr^{2}-\frac{1}{3}y^{3} \right)_{-r}^{r}=8r^{3} - \frac{8}{3}r^{3}=\fbox{$\frac{16}{3}r^{3}$}
\end{align*}
$$
# Problem 6
![[Multivariable Homework 9 2023-11-08 10.12.22.excalidraw]]
$$
\begin{align*}
\int_{0}^{\sqrt{\pi}}\int_{0}^{x}\cos(x^{2})\, dy\, dx\\
=\int_{0}^{\sqrt{\pi}}x\cos(x^{2})\, dx\\
=\frac{1}{2}\sin(x^{2})\biggr|_{0}^\sqrt{\pi}=\fbox{$0$}
\end{align*}
$$
# Problem 7
![[Multivariable Homework 9 2023-11-08 10.17.28.excalidraw]]
$$
\begin{align*}
\int_{0}^{1}\int_{0}^{y}e^{\frac{x}{y}}\, dx \, dy\\
=\int_{0}^{1}ey-y\, dy \\
=\fbox{$\frac{e-1}{2}$}
\end{align*}
$$
# Problem 8
$$
\begin{align*}
r=\sqrt{x^{2}+y^{2}}\\
\implies \iint_{R}r\sqrt{4-r^{2}}\,dA\\
R=\left\{ (r,\theta)|r^{2}\leq4,-\frac{\pi}{2}\leq\theta\leq \frac{\pi}{2} \right\}\\
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\int_{0}^{2}r\sqrt{4-r^{2}}\, dr\, d\theta\\
=-\frac{1}{3}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}(4-r^{2})^{\frac{3}{2}}\biggr|_{0}^{2}\, d\theta\\
=\frac{8}{3}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}1\, d\theta \\
=\fbox{$\frac{8}{3}\pi$}
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\iint_{R}6-2x^{2}-2y^{2}\,dA,R=\{(x,y)|x^{2}+y^{2}\leq3,x\geq0,y\geq0\}\\
r=\sqrt{x^{2}+y^{2}}\\
\implies 2\iint_{R}r(3-r^{2})\,dA,R=\left\{ (r,\theta)|r^{2}\leq3,0\leq\theta\leq \frac{\pi}{2} \right\}\\
=2\int_{0}^{\frac{\pi}{2}}\int_{0}^{\sqrt{3}}3r-r^{3}\, dr \, d\theta\\
=2\int_{0}^{\frac{\pi}{2}} \frac{3}{2}r^{2}-\frac{r^{4}}{4}\biggr|_{0}^{\sqrt{3}}\, d\theta \\
=2\int_{0}^{\frac{\pi}{2}} \frac{9}{4}\, d\theta \\
=\fbox{$\frac{9}{4}\pi$}
\end{align*}
$$
# Problem 10
## a)
$$
\begin{align*}
V=2\iint_{R}r\sqrt{r_{2}^{2}-r^{2}}\,dA,R=\{(r,\theta)|r_{1}\leq r\leq r_{2},-\pi\leq\theta\leq\pi\}\\
=2\int_{-\pi}^{\pi}\int_{r_{1}}^{r_{2}}r\sqrt{r_{2}^{2}-r^{2}}\, dr \, d\theta \\
=\frac{2}{3}\int_{-\pi}^{\pi}(r_{2}^{2}-r_{1}^{2})^{\frac{3}{2}}\, d\theta\\
=\fbox{$\frac{4}{3}(r_{2}^{2}-r_{1}^{2})^{\frac{3}{2}}\pi$}
\end{align*}
$$
## b)
$$
\begin{align*}
r_{1}^{2}+h^{2}=r_{2}^{2}\\
\implies \frac{h}{2}=\sqrt{r_{2}^{2}-r_{1}^{2}}\\
\implies V=\frac{4}{3}\pi\left( \frac{h}{2} \right)^{3}\\
\implies V=\fbox{$\frac{\pi}{6} h^{3}$}
\end{align*}
$$
# Problem 11
![[Multivariable Homework 9 2023-11-08 13.08.19.excalidraw]]
$$
\begin{align*}
A=2\iint_{R_{1}}r\,dA+2\iint_{R_{2}}r\,dA,\\
R_{1}=\left\{ (r,\theta)|3\cos\theta\leq r\leq1+\cos\theta, \frac{\pi}{3}\leq\theta\leq \frac{\pi}{2} \right\},\\
R_{2}=\left\{  (r,\theta)|0\leq r\leq1+\cos\theta, \frac{\pi}{2}\leq\theta\leq\pi  \right\}\\
=2\int_{\frac{\pi}{3}}^{\frac{\pi}{2}}\int_{3\cos\theta}^{1+\cos\theta} r\, dr \, d\theta+2\int_{\frac{\pi}{2}}^{\pi} \int_{0}^{1+\cos\theta} r\, dr \, d\theta \\
=\int_{\frac{\pi}{3}}^{\frac{\pi}{2}} 1+2\cos\theta-8\cos^{2}\theta\, d\theta+\int_{\frac{\pi}{2}}^{\pi} 1+2\cos\theta+\cos^{2}\theta\, d\theta \\
\cos^{2}\theta=\frac{\cos2\theta+1}{2}\\
\implies \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} 2\cos\theta-4\cos2\theta-3\, d\theta+\int_{\frac{\pi}{2}}^{\pi} \frac{3}{2}+2\cos\theta+\frac{1}{2}\cos2\theta\, d\theta\\
=(2\sin\theta-2\sin2\theta-3\theta)\biggr|_{\frac{\pi}{3}}^{\frac{\pi}{2}}+\left( \frac{3}{2}\theta+2\sin\theta+\frac{1}{4}\sin2\theta \right)\Biggr|_{\frac{\pi}{2}}^{\pi}\\
=2-\frac{3\pi}{2}-\sqrt{3}+\sqrt{3}+\pi+\frac{3}{2}\pi-\frac{3}{4}\pi-2\\
=\fbox{$\frac{\pi}{4}$}
\end{align*}
$$
# Problem 12
## a)
$$
\begin{align*}
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^{2}+y^{2})}\, dy\, dx\\
=\iint_{\mathbb{R}^{2}} re^{-r^{2}}\, dA=\lim_{ a \to \infty } \int_{0}^{2\pi} \int_{0}^{a} re^{-r^{2}}\, dr\, d\theta\\
=\lim_{ a \to \infty } -\frac{1}{2}\int_{0}^{2\pi} e^{-a^{2}}-1\, d\theta\\
=\lim_{ a \to \infty } \pi-\pi e^{-a^{2}}=\fbox{$\pi$}
\end{align*}
$$
## b)
$$
\begin{align*}
\lim_{ a \to \infty } \int_{-a}^{a} \int_{-a}^{a} e^{-(x^{2}+y^{2})}\, dy\, dx =\pi\\
=\lim_{ a \to \infty } \int_{-a}^{a} e^{-x^{2}}\int_{-a}^{a} e^{-y^{2}}\, dy\, dx \\
=\lim_{ a \to \infty } \int_{-a}^{a} e^{-x^{2}}\, dx \int_{-a}^{a} e^{-y^{2}}\, dy\\
\implies \fbox{$\int_{-\infty}^{\infty} e^{-x^{2}} \, dx\int_{-\infty}^{\infty} e^{-y^{2}} \, dy=\pi  $}
\end{align*}
$$
## c)
$$
\begin{align*}
\int_{-\infty}^{\infty} e^{-x^{2}} \, dx=\int_{-\infty}^{\infty} e^{-y^{2}} \, dy \\
\implies \left( \int_{-\infty}^{\infty} e^{-x^{2}} \, dx \right)^{2}=\pi\\
\implies \fbox{$\int_{-\infty}^{\infty} e^{-x^{2}} \, dx=\sqrt{\pi} $} 
\end{align*}
$$
## d)
$$
\begin{align*}
\int_{-\infty}^{\infty} e^{-\frac{x^{2}}{2}} \, dx =\int_{-\infty}^{\infty} e^{-\left( \frac{x}{\sqrt{2}} \right)^{2}} \, dx\\
= \sqrt{2}\int_{-\infty}^{\infty} e^{-u^{2}} \, du =\fbox{$\sqrt{2\pi}$}
\end{align*}
$$
# Problem 13
$$
\begin{align*}
\iint_{x^{2}+y^{2}\leq4} x+y+x^{2}+y^{2}\, dy\, dx\\
=\int_{-\pi}^{\pi} \int_{0}^{2} r(r\cos\theta+r\sin\theta+r^{2})\, dr\, d\theta \\
=\int_{-\pi}^{\pi} \frac{8}{3}\cos\theta+\frac{8}{3}\sin\theta+4 \,d\theta\\
=8\pi+\frac{64}{3}(\sin\theta-\cos\theta\biggr|_{-\pi}^{\pi}) =\fbox{$8\pi$}
\end{align*}
$$
# Problem 14
$$
\begin{align*}
m=\iint_{D}\rho(x,y)\,dA\\
\bar{x}_{cm}=\frac{\iint_{D} x\rho(x,y)\,dA}{\iint_{D}\rho(x,y)\,dA}=\frac{\iint x^{3}\,dA}{\iint x^{2}\,dA}\\
\bar{y}_{cm}=\frac{\iint_{D} y\rho(x,y)\,dA}{\iint_{D}\rho(x,y)\,dA}=\frac{\iint yx^{2}\,dA}{\iint x^{2}\,dA}\\
D=\{ (x,y)|0\leq x\leq2,x\leq y\leq6-2x \}\\
\int_{0}^{2} \int_{x}^{6-2x} x^{3}\, dy\, dx = \int_{0}^{2} 6x^{3}-3x^{4}\, dx\\
=24-\frac{96}{5}=\frac{24}{5}\\
\int_{0}^{2} \int_{x}^{6-2x} x^{2}\, dy \, dx =\int_{0}^{2} 6x^{2}-3x^{3}\, dx \\
=16-12=4\implies \fbox{Mass $=4$}\\
\int_{0}^{2} \int_{x}^{6-2x} yx^{2}\, dy \, dx =\frac{1}{2}\int_{0}^{2} (6-2x)^{2}x^{2}-x^{4}\, dx \\
=\frac{1}{2}\int_{0}^{2} 36x^{2}-24x^{3}+3x^{4}\, dx =48-48+\frac{48}{5}=\frac{48}{5}\\
\implies \bar{x}_{cm}=\frac{6}{5},\bar{y}_{cm}=\frac{12}{5}\\
\implies \fbox{Center of Mass $=\left( \frac{6}{5}, \frac{12}{5} \right)$}
\end{align*}
$$
# Problem 15
$$
\begin{align*}
\sigma(x,y)=k(x^{2}+y^{2})\\
D=\left\{  (x,y)|x^{2}+y^{2}\leq1,x\geq0,y\geq0  \right\}\\
\implies \sigma(r,\theta)=kr^{2},\\
D=\left\{  (r,\theta)|r^{2}\leq1,0\leq\theta\leq \frac{\pi}{2}  \right\}\\
m=\int_{0}^{\frac{\pi}{2}}\int_{0}^{1}kr^{3}\, dr \, d\theta\\
=\frac{k}{4}\int_{0}^{\frac{\pi}{2}}1\, d\theta =\frac{k\pi}{8}\\
\bar{x}_{cm}=\frac{8}{k\pi}\iint kx(x^{2}+y^{2})\,dA\\
=\frac{8}{\pi}\int_{0}^{1}\int_{0}^{\sqrt{1-x^{2}}}x(x^{2}+y^{2})\, dy\, dx \\
=\frac{8}{\pi}\int_{0}^{1}x^{3}\sqrt{1-x^{2}}+\frac{x}{3}(1-x^{2})^{\frac{3}{2}}\, dx\\
=-\frac{8}{\pi}\int \left( \frac{1-u}{2} \right)\sqrt{u}+\frac{1}{6}u^{\frac{3}{2}} \, du\biggr|_{x=0}^{x=1}\\
=-\frac{8}{\pi}\left( \frac{1}{3}(1-x^{2})^{\frac{3}{2}}-\frac{1}{5}(1-x^{2})^{\frac{5}{2}}+\frac{1}{15}(1-x^{2})^{\frac{5}{2}} \right)_{0}^{1}\\
=\frac{8}{\pi}\left( \frac{1}{3}-\frac{1}{5}+\frac{1}{15} \right)=\frac{8}{5\pi}\\
\bar{y}_{cm}=\frac{8}{k\pi}\int_{0}^{1}\int_{0}^{\sqrt{1-y^{2}}}ky(x^{2}+y^{2})\, dx\, dy=\bar{x}_{cm}\\
\implies \fbox{Center of mass $=\left( \frac{8}{5\pi}, \frac{8}{5\pi} \right)$}
\end{align*}
$$