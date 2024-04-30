---
tags:
  - math/calc
due: 2023-11-04
course: "[[Multivariable Calculus]]"
status: Complete
---
[Link](http://math.rwinters.com/E21a/homework/HW8-2023.pdf)
# Problem 1
$$
\begin{align*}
f(x,y,z)=3x-y-3z\\
g(x,y,z)=x+y-z=0\\
h(x,y,z)=x^{2}+2z^{2}=1\\
\overrightarrow{\nabla f }=\lambda_{1}\overrightarrow{\nabla g }+\lambda_{2}\overrightarrow{\nabla h }\\
\implies 3=\lambda_{1}+2\lambda_{2}x,\\
-1=\lambda_{1},\\
-3=-\lambda_{1}+4\lambda_{2}z\\
x+y-z=0,\\
x^{2}+2z^{2}=1\\
\implies x=\frac{2}{\lambda_{2}},z=-\frac{1}{\lambda_{2}}\\
\implies \frac{4}{\lambda_{2}^{2}}+\frac{2}{\lambda_{2}^{2}}=1\implies\lambda_{2}=\pm\sqrt{6}\\
\implies x=\pm\frac{\sqrt{6}}{3},z=\mp\frac{\sqrt{6}}{6}\\
\implies y=\mp\frac{\sqrt{6}}{2}\\
f\left( \frac{\sqrt{6}}{3}, -\frac{\sqrt{6}}{2},-\frac{\sqrt{6}}{6} \right)=2\sqrt{6}\\
f\left( -\frac{\sqrt{6}}{3},\frac{\sqrt{6}}{2}, \frac{\sqrt{6}}{6} \right)=-2\sqrt{6}\\
\implies \fbox{$-2\sqrt{6}$ min, $2\sqrt{6}$ max}
\end{align*}
$$
# Problem 2
$$
\begin{align*}
f(x,y)=2x^{2}+3y^{2}-4x-5\\
x^{2}+y^{2}\leq16\\
\overrightarrow{\nabla f }=0\\
\implies 4x-4=0,6y=0\\
\implies (1,0)\\
f(1,0)=-7\\
g(x,y)=x^{2}+y^{2}=16\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies 4x-4=2\lambda x,\\
6y=2\lambda y\\
x^{2}+y^{2}=16\\
\implies \lambda=3\implies x=-2\\
\implies y=\pm2\sqrt{3}\\
f(-2,2\sqrt{3})=47\\
f(-2,-2\sqrt{3})=47\\
\implies \fbox{min: $-7$ @ $(1,0)$, max: $47$ @ $(-2,\pm2\sqrt{3})$}
\end{align*}
$$
# Problem 3
$$
\begin{align*}
P=bL^{\alpha}K^{1-\alpha}\\
mL+nK=p
\end{align*}
$$
## a)
$$
\begin{align*}
P(L,K)=bL^{\alpha}K^{1-\alpha}\\
C(L,K)=mL+nK=p\\
\overrightarrow{\nabla P }=\lambda\overrightarrow{\nabla C }\\
\implies \alpha bL^{\alpha-1}K^{1-\alpha}=\lambda m,\\
(1-\alpha)bL^{\alpha}K^{-\alpha}=\lambda n\\
mL+nK=p\\
\text{Let }L=\frac{\alpha p}{m}, K=\frac{(1-\alpha)p}{n}\\
mL+nK=p\\
\implies \alpha p+(1-\alpha)p=p\checkmark\\
\alpha bL^{\alpha-1}K^{1-\alpha}=\lambda m\\
\implies\alpha b\left( \frac{\alpha p}{m} \right)^{\alpha-1}\left( \frac{(1-\alpha)p}{n} \right)^{1-\alpha}=\lambda m\\
\implies \lambda=\frac{\alpha^{\alpha}b(1-\alpha)^{1-\alpha}}{m^{\alpha}n^{1-\alpha}}\\
(1-\alpha)bL^{\alpha}K^{-\alpha}=\lambda n\\
\implies (1-\alpha)b\left( \frac{\alpha p}{m} \right)^{\alpha}\left( \frac{(1-\alpha)p}{n} \right)^{-\alpha}=\frac{\alpha^{\alpha}b(1-\alpha)^{1-\alpha}}{m^{\alpha}n^{-\alpha}}\\
\implies \frac{\alpha^{\alpha}b(1-\alpha)^{1-\alpha}}{m^{\alpha}n^{-\alpha}}=\frac{\alpha^{\alpha}b(1-\alpha)^{1-\alpha}}{m^{\alpha}n^{-\alpha}}\checkmark
\end{align*}
$$
## b)
$$
\begin{align*}
C(L,K)=mL+nK\\
P(L,K)=bL^{\alpha}K^{1-\alpha}=Q\\
\overrightarrow{\nabla C }=\lambda\overrightarrow{\nabla P }\\
\implies m=\lambda\alpha bL^{\alpha-1}K^{1-\alpha},\\
n=\lambda(1-\alpha)bL^{\alpha}K^{-\alpha}\\
bL^{\alpha}K^{1-\alpha}=Q\\
\implies m=\frac{\lambda\alpha Q}{L}\implies L=\frac{\lambda\alpha Q}{m},\\
n=\frac{\lambda(1-\alpha)Q}{K}\implies K=\frac{\lambda(1-\alpha)Q}{n}\\
\implies \lambda(1-\alpha)b\left( \frac{\lambda\alpha Q}{m} \right)^{\alpha}\left( \frac{\lambda(1-\alpha)Q}{n} \right)^{-\alpha}=n\\
\implies \frac{\lambda b(1-\alpha)^{1-\alpha}\alpha^{\alpha}}{m^{\alpha}n^{-\alpha}}=n\\
\implies \lambda=\frac{m^{\alpha}n^{1-\alpha}}{b(1-\alpha)^{1-\alpha}\alpha^{\alpha}}\\
\implies L=\frac{m^{\alpha}n^{1-\alpha}}{b(1-\alpha)^{1-\alpha}\alpha^{\alpha}} \frac{\alpha Q}{m}=\frac{m^{\alpha-1}n^{1-\alpha}\alpha^{1-\alpha}Q}{b(1-\alpha)^{1-\alpha}}\\
K=\frac{m^{\alpha}n^{1-\alpha}}{b(1-\alpha)^{1-\alpha}\alpha^{\alpha}} \frac{(1-\alpha)Q}{n}=\frac{m^{\alpha}n^{-a}Q}{b(1-\alpha)^{-\alpha}\alpha^{a}}\\
\implies \fbox{$L=\frac{Q}{b}\left( \frac{n\alpha}{m(1-\alpha)} \right)^{1-\alpha}$},\\
\fbox{$K=\frac{Q}{b}\left( \frac{m(1-\alpha)}{n\alpha} \right)^{\alpha}$}
\end{align*}
$$
# Problem 4
$$
\begin{align*}
P(x,y,z)=x+y+z=p\\
s=\frac{P}{2},A(x,y,z)=\sqrt{s(s-x)(s-y)(s-z)}\\
=\sqrt{\frac{x+y+z}{2}\left( \frac{x+y+z}{2} -x\right)\left( \frac{x+y+z}{2} -y\right)\left( \frac{x+y+z}{2} -z\right)}\\
=\sqrt{\frac{x+y+z}{2}\left( \frac{y+z-x}{2} \right)\left( \frac{x+z-y}{2} \right)\left( \frac{x+y-z}{2} \right)}\\
=\frac{1}{4}\sqrt{(x+y+z)(y+z-x)(x+z-y)(x+y-z)}\\
\overrightarrow{\nabla A }=\lambda\overrightarrow{\nabla P }\\
\implies \frac{x(-x^{2}+y^{2}+z^{2})}{2\sqrt{(x+y+z)(y+z-x)(x+z-y)(x+y-z)}}=\lambda\\
\frac{y(x^{2}-y^{2}+z^{2})}{2\sqrt{(x+y+z)(y+z-x)(x+z-y)(x+y-z)}}=\lambda\\
\frac{z(x^{2}+y^{2}-z^{2})}{2\sqrt{(x+y+z)(y+z-x)(x+z-y)(x+y-z)}}=\lambda\\
x+y+z=p\\
\text{Let }x=y=z\text{ (equilateral)}\\
\implies 3x=p\implies x=\frac{p}{3},\\
2\sqrt{(x+y+z)(-x+y+z)(x-y+z)(x+y-z)}=2\sqrt{(3x)(2x)(2x)(2x)}\\
=4x^{2}\sqrt{6}\\
\implies A_{x}=\frac{x(-x^{2}+x^{2}+x^{2})}{4x^{2}\sqrt{6}}=\frac{x}{2\sqrt{6}}\\
=A_{y}=A_{z}=\lambda\\
\implies \fbox{$x=y=z$ solves system and $\therefore$ maximizes area}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
V(x,y,z)=xyz\\
A(x,y,z)=2yz+2xz+2xy=1500\\
L(x,y,z)=4(x+y+z)=200\\
\overrightarrow{\nabla V }=\lambda_{1}\overrightarrow{\nabla A }+\lambda_{2}\overrightarrow{\nabla L }\\
\implies yz=\lambda_{1}(2z+2y)+4\lambda_{2},\\
xz=\lambda_{1}(2x+2z)+4\lambda_{2},\\
xy=\lambda_{1}(2x+2y)+4\lambda_{2}\\
2yz+2xz+2xy=1500\\
4(x+y+z)=200\\
\implies x,y,z=\frac{50}{3}\pm \frac{5\sqrt{10}}{3}, \frac{50}{3}\pm \frac{5\sqrt{10}}{3}, \frac{50}{3}\mp \frac{10\sqrt{10}}{3}\\
\text{Solved by calculator, no particular order}\\
\implies V(x,y,z)=\left( \frac{50}{3}\pm\frac{5\sqrt{10}}{3} \right)^{2}\left( \frac{50}{3}\mp\frac{10\sqrt{10}}{3} \right)\\
=\frac{125}{27}(10\pm\sqrt{10})^{2}(10\mp2\sqrt{10})\\
=\frac{125}{27}(110\pm20\sqrt{10})(10\mp2\sqrt{10})\\
=\frac{2500}{27}(11\pm2\sqrt{10})(5\mp\sqrt{10})\\
=\frac{2500}{27}(35\mp11\sqrt{10}\pm10\sqrt{10})\\
=\frac{2500}{27}(35\mp\sqrt{10})\\
\implies \fbox{Min volume: $\frac{2500}{27}(35-\sqrt{10})\approx 2948$},\\
\fbox{Max volume: $\frac{2500}{27}(35+\sqrt{10})\approx 3534$}
\end{align*}
$$
# Problem 6
## a)
![[Multivariable Homework 8 2023-11-02 09.04.06.excalidraw]]
## b)
$$
\begin{align*}
f(x,y,z)=z\\
g(x,y,z)=z^{2}-x^{2}-y^{2}=0\\
h(x,y,z)=4x-3y+8z=5\\
\overrightarrow{\nabla f }=\lambda_{1}\overrightarrow{\nabla g }+\lambda_{2}\overrightarrow{\nabla h }\\
\implies 0=-2\lambda_{1}x+4\lambda_{2},\\
0=-2\lambda_{1}y-3\lambda_{2},\\
1=2\lambda_{1}z+8\lambda_{2}\\
z^{2}-x^{2}-y^{2}=0\\
4x-3y+8z=5\\
\implies 1=2\lambda_{1}z+4\lambda_{1}x,\\
0=-6\lambda_{1}x-8\lambda_{1}y,\\
3=6\lambda_{1}z-16\lambda_{1}y\\
\implies x=-\frac{4}{3}y\\
\implies -\frac{16}{3}y-3y+8z=5\\
\implies z=\frac{5}{8}+\frac{25}{24}y\\
\implies \left( \frac{5}{8}+\frac{25}{24}y \right)^{2}-\left( -\frac{4}{3}y \right)^{2}-y^{2}=0\\
\implies \frac{25}{64}+\frac{125}{96}y+\frac{625}{576}y^{2}-\frac{16}{9}y^{2}-y^{2}=0\\
\implies \left( \frac{625}{576}-\frac{25}{9} \right)y^{2}+\frac{125}{96}y+\frac{25}{64}=0\\
\implies -\frac{325}{192}y^{2}+\frac{125}{96}y+\frac{25}{64}=0\\
\implies -13y^{2}+10y+3=0\\
\implies (13y+3)(-y+1)=0\\
\implies y=-\frac{3}{13},1\\
\implies z=\frac{5}{13},\frac{5}{3}\\
\implies x=\frac{4}{13},-\frac{4}{3}\\
\implies \fbox{High point: $\left( -\frac{4}{3},1, \frac{5}{3} \right)$, Low point: $\left( \frac{4}{13}, -\frac{3}{13}, \frac{5}{13} \right)$}
\end{align*}
$$
# Problem 7
![[Multivariable Homework 8 2023-11-02 09.49.25.excalidraw]]
$$
\begin{align*}
\vec{n}_\text{plane}=\vec{u}=\langle 2,3,1 \rangle\\
f(x,y,z)=9x^{2}+36y^{2}+4z^{2}=36\\
\vec{n}_\text{ellipse} = \vec{v}= \overrightarrow{\nabla f } \\
=\langle 18x, 72y, 8z \rangle \\
\vec{u}\parallel\vec{v}\implies c(\vec{u})=\vec{v}\\
\implies 2c=18x,\\
3c=72y,\\
c=8z,\\
9x^{2}+36y^{2}+4z^{2}=36\\
\implies 9x=24y=8z\implies x=\frac{8}{3}y=\frac{8}{9}z\\
\implies z=3y\\
\implies 9\left( \frac{8}{3}y \right)^{2}+36y^{2}+4(3y)^{2}=36\\
\implies 64y^{2}+36y^{2}+36y^{2}=36\\
\implies 34y^{2}=9\implies y=\frac{3}{\sqrt{34}}\\
x=\frac{8}{\sqrt{34}}\\
z=\frac{9}{\sqrt{34}}\\
\implies \fbox{$\left( \frac{4\sqrt{34}}{17}, \frac{3\sqrt{34}}{34}, \frac{9\sqrt{34}}{34} \right)$}
\end{align*}
$$
# Problem 8
## a)
$$
\begin{align*}
f(x_{1},\cdots,x_{n},y_{1},\cdots,y_{n})=\sum_{i=1}^{n}x_{i}y_{i}\\
g(x_{1},\cdots,x_{n},y_{1},\cdots,y_{n})=\sum_{i=1}^{n}x_{i}^{2}=1\\
h(x_{1},\cdots,x_{n},y_{1},\cdots,y_{n})=\sum_{i=1}^{n}y_{i}^{2}=1\\
\overrightarrow{\nabla f }=\lambda_{1}\overrightarrow{\nabla g }+\lambda_{2}\overrightarrow{\nabla h }\\
\implies \langle y_{1},\cdots,y_{n},x_{1},\cdots,x_{n} \rangle\\
=\lambda_{1}\langle 2x_{1},\cdots,2x_{n},0,\cdots\rangle+\lambda_{2}\langle 0,\cdots,2y_{1},\cdots,2y_{n} \rangle\\
\sum x_{i}^{2}=1\\
\sum y_{i}^{2}=1\\
\implies y_{i}=2\lambda_{1} x_{i},\\
x_{i}=2\lambda_{2}y_{i}\\
\implies \sum x_{i}^{2}=4\lambda_{1}^{2}\sum y_{i}^{2}=1,\\
\sum y_{i}^{2}=4\lambda_{2}^{2}\sum x_{i}^{2}=1\\
\implies \lambda_{1},\lambda_{2}=\pm\frac{1}{2}\\
\lambda_{1},\lambda_{2}=\frac{1}{2}\\
\implies \sum x_{i}y_{i}=1\\
\lambda_{1},\lambda_{2}=-\frac{1}{2}\\
\implies \sum x_{i}y_{i}=-1\\
\implies \fbox{Max: $1$, Min: $-1$}
\end{align*}
$$
## b)
$$
\begin{align*}
x_{i}=\frac{a_{i}}{\sqrt{\sum a_{j}^{2}}},y_{i}=\frac{b_{i}}{\sqrt{\sum b_{j}^{2}}}\\
\implies \sum x_{i}^{2}=\sum \frac{a_{i}^{2}}{\sum a_{j}^{2}}=\frac{\sum a_{i}^{2}}{\sum a_{j}^{2}}=1,\\
\sum y_{i}^{2}=\sum \frac{b_{i}^{2}}{\sum b_{j}^{2}}=\frac{\sum b_{i}^{2}}{\sum b_{j}^{2}}=1\\
\implies \max\left( \sum x_{i}y_{i} \right)=1\\
\implies \max\left( \sum \frac{a_{i}b_{i}}{\sqrt{\sum a_{j}^{2}}\sqrt{\sum b_{j}^{2}}} \right)=1\\
\implies \fbox{$\sum a_{i}b_{i}\leq \sqrt{\sum a_{j}^{2}}\sqrt{\sum b_{j}^{2}}$}
\end{align*}
$$
# Problem 9
$$
\begin{align*}
\begin{array}{r}
\text{Box:}\\
V(x,y,z)=xyz\\
S(x,y,z)=2yz+2xz+xy=36\\
\overrightarrow{\nabla V }=\lambda\overrightarrow{\nabla S }\\
\implies yz=\lambda(2z+y)\\
xz=\lambda(x+2z)\\
xy=\lambda(2x+2y)\\
2yz+2xz+xy=36\\
\implies \lambda=\frac{yz}{2z+y}\\
\implies xz=\frac{yz}{2z+y}(x+2z)\\
\implies 2z+y=y\left( 1+\frac{2z}{x} \right)\\
\implies 2z+y=\frac{2zy}{x}+y\\
\implies x=y\\
\implies y^{2}=\frac{4y^{2}z}{2z+y}
\implies y=2z\\
\implies 12z^{2}=36\\
\implies z=\sqrt{3}\\
\implies x=y=2\sqrt{3}\\
\implies V_{max}=12\sqrt{3}\approx 20.78
\end{array}
\qquad\begin{array}{r}
\text{Cylinder:}\\
V(r,h)=\pi r^{2}h\\
S(r,h)=\pi r^{2}+2\pi rh=36\\
\overrightarrow{\nabla V }=\lambda\overrightarrow{\nabla S }\\
\implies 2\pi rh=\lambda(2\pi r+2\pi h),\\
\pi r^{2}=\lambda(2\pi r)\\
\pi r^{2}+2\pi rh=36\\
\implies \lambda=\frac{rh}{r+h}\\
\implies \pi r^{2}=\frac{2\pi r^{2}h}{r+h}\\
\implies r+h=2h\implies h=r\\
\implies \pi r^{2}+2\pi r^{2}=36\\
\implies r=2\sqrt{\frac{3}{\pi}},h=2\sqrt{\frac{3}{\pi}}\\
\implies V_{max}=24\sqrt{\frac{3}{\pi}}\approx 23.45\\\\\\\\\\
\end{array}\\
24\sqrt{\frac{3}{\pi}}-12\sqrt{3}\approx 23.45-20.78\approx2.67\\
\implies \fbox{The cylinder is larger by $12\sqrt{\frac{6}{\pi}}-12\sqrt{3}\approx2.67$ cubic units}
\end{align*}
$$
# Problem 10
## a)
$$
\begin{align*}
f(x,y)=(x+5)^{2}+(y+3)^{2}+(x-8)^{2}+y^{2}+x^{2}+(y-7)^{2}\\
=x^{2}+10x+25+y^{2}+6y+9+x^{2}-16x+64+y^{2}+x^{2}+y^{2}-14y+49\\
=3x^{2}+3y^{2}-6x-8y+147\\
\overrightarrow{\nabla f }=0\\
\implies 6x-6=0\implies x=1,\\
6y-8=0\implies y=\frac{4}{3}\\
\implies \fbox{The dog should sit at $\left( 1, \frac{4}{3} \right)$}
\end{align*}
$$
## b)
Same point, $\left( 1, \frac{4}{3} \right)$ because it is within the range of the leash
## c)
Not within range of leash, so leash it taut
$$
\begin{align*}
f(x,y)=3x^{2}+3y^{2}-6x-8y+147\\
g(x,y)=x^{2}+y^{2}=1\\
\overrightarrow{\nabla f }=\lambda\overrightarrow{\nabla g }\\
\implies 6x-6=2x\lambda,\\
6y-8=2y\lambda\\
x^{2}+y^{2}=1\\
\implies \lambda=3-\frac{3}{x}\\
\implies 6y-8=6y-\frac{6y}{x}\\
\implies 6y=8x\implies y=\frac{4}{3}x\\
\implies x^{2}+\frac{16}{9}x^{2}=1\\
\implies x^{2}=\frac{9}{25}\implies x=\frac{3}{5}\\
\implies \fbox{The dog should sit at $\left( \frac{3}{5}, \frac{4}{5} \right)$}
\end{align*}
$$
# Problem 11
$$
p(x,y)=500x^{0.7}y^{0.5}, c(x,y)=35x+16y
$$
## a)
$$
\begin{align*}
p(x,y)=40000\\
\overrightarrow{\nabla c }=\lambda\overrightarrow{\nabla p }\\
\implies 35=350x^{-0.3}y^{0.5}\lambda,\\
16=250x^{0.7}y^{-0.5}\lambda\\
500x^{0.7}y^{0.5}=40000\\
\implies \lambda=\frac{x^{0.3}}{10y^{0.5}}\\
\implies 16=\frac{25x}{y}\\
\implies y=\frac{25}{16}x\\
\implies 500x^{0.7}\left( \frac{25}{16}x \right)^{0.5}=40000\\
\implies \left( \frac{5}{4} \right)x^{1.2}=80
\implies x^{1.2}=64\\
\implies x=32\\
\implies y=50\\
\implies c(x,y)=1920\\
\implies \fbox{32 units labor and 50 units capital, with cost of \$1920}
\end{align*}
$$
## b)
$$
\begin{align*}
c(x,y)=4800\\
\overrightarrow{\nabla p }=\lambda\overrightarrow{\nabla c }\\
\implies 350x^{-0.3}y^{0.5}=35\lambda,\\
250x^{0.7}y^{-0.5}=16\lambda\\
35x+16y=4800\\
\implies \lambda=\frac{10y^{0.5}}{x^{0.3}}\\
\implies 250x^{0.7}y^{-0.5}=160y^{0.5}x^{-0.3}\\
\implies x=\frac{16}{25}y\\
\implies \frac{112}{5}y+16y=4800\\
\implies \frac{192}{5}y=4800\\
\implies y=125\\
\implies x=80\\
\implies p(80,125)=500(80)^{0.7}(125)^{0.5}\\
= 50000(2)^{\frac{4}{5}}\sqrt[5]{5}\approx120112\\
\implies \fbox{80 units labor, 125 units capital producing around 120112 lollipops}
\end{align*}
$$
# Problem 12
$$
\begin{align*}
P(x,y,z)=30x^{0.2}y^{0.5}z^{0.5}=9600\\
C(x,y,z)=32x+32y+8z\\
\overrightarrow{\nabla C }=\lambda\overrightarrow{\nabla P }\\
\implies 32=6\lambda x^{-0.8}y^{0.5}z^{0.5},\\
32=15\lambda x^{0.2}y^{-0.5}z^{0.5},\\
8=15\lambda x^{0.2}y^{0.5}z^{-0.5}\\
30x^{0.2}y^{0.5}z^{0.5}=9600\\
\implies 4=\frac{z}{y}\implies z=4y\\
\implies 1=\frac{2y}{5x}\implies x=\frac{2}{5}y\\
\implies 30\left( \frac{2}{5}y \right)^{0.2}y^{0.5}(4y)^{0.5}=9600\\
\implies 2\left( \frac{2}{5} \right)^{0.2}y^{1.2}=320\\
\implies y^{1.2}=160\left( \frac{5}{2} \right)^{0.2}\\
\implies y=\sqrt[1.2]{160\left( \frac{5}{2} \right)^{0.2}}=80\\
\implies x=32,z=320\\
\implies \fbox{$(x,y,z)=(32,80,320)$ meets production at lowest possible cost}
\end{align*}
$$
# Problem 13
## a)
$$
\begin{align*}
m=n=2\\
z=x+2y^{2}\\
R=[0,2]\times[0,4]
\end{align*}
$$
![[Multivariable Homework 8 2023-11-03 10.06.53.excalidraw]]
$$
2+4+6+8=\fbox{20}
$$
## b)
![[Multivariable Homework 8 2023-11-03 10.26.39.excalidraw]]
$$
2\left( \frac{5}{2}+\frac{7}{2}+\frac{37}{2}+\frac{39}{2} \right)=\fbox{88}
$$
# Problem 14
![[Multivariable Homework 8 2023-11-03 10.33.15.excalidraw]]
$$
V=\frac{1}{2}(5)(5)(3)=\fbox{$\frac{75}{2}$}
$$