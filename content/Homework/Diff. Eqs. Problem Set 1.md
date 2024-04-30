---
tags:
  - math/calc
due: 2023-09-15
course: "[[Ordinary Differential Equations]]"
status: Complete
---
[Link](http://math.rwinters.com/E21c/homework/PS1-2023.pdf)
# Problem 1
[[Direction Field|Slope Field]]:
![[Diff. Eqs. Problem Set 1 2023-09-08 09.56.13.excalidraw]]
[[Separable ODE|Solution:]]
$$
\begin{align*}\\
& \frac{dy}{dx}=2-y, y(0)=0\\
\implies & \frac{1}{2-y}dy=1dx\\
\implies & \int \frac{1}{2-y}dy=\int 1dx\\
\implies & -\ln|2-y|=x+C\\
\implies & |2-y|=e^{-x+C}\\
\implies & y=2-Ae^{-x}\\
& 0 = 2-Ae^{0}\\
\implies & A=2\\
\implies & \fbox{$y=2-2e^{-x}$}
\end{align*}
$$
# Problem 2
M: amount of medicine (mg)
t: time in hours
$$
\begin{align*}
& \frac{dM}{dt} = kM, k<0, \\
\implies & M(t)=M_{0}e^{kt}\\
& M(5)=\frac{1}{2}M_{0}\\
\implies & M_{0}e^{5k}=\frac{1}{2}M_{0} \\
& M(1)=M_{0}e^{k}=(50\text{ mg/kg})(60\text{ kg}) = 300\text{ mg}\\
\implies & e^{k}=\frac{300}{M_{0}}\implies e^{5k}=\left(\frac{300}{M_{0}}\right)^{5}\\
\implies & \frac{1}{2}=\left(\frac{300}{M_{0}}\right)^{5}\\
\implies & \frac{1}{2}(M_{0})^{5}=300^{5}\\
\implies & \fbox{$M_{0}=345\text{ mg}$}
\end{align*}
$$
# Problem 3
t: time since it began to snow in hours
$t_p$: time the plow set off
x: distance travelled by plow in miles
A: accumulation of snow
R: rate at which snow falls
$$
\begin{align*}
& \frac{dA}{dt}=R\\
\implies & A=Rt\\
& x(t_{p})=0, x(t_{p}+1)=2, x(t_{p}+3)=4\\
& \frac{dx}{dt}\propto\frac{1}{A}=\frac{C_{0}}{Rt} \implies \fbox{a) $\frac{dx}{dt}=\frac{C_{1}}{t}$}\\
\implies & x=\int \frac{C_{1}}{t} dt\\
\implies & x(t)={C_{1}}\ln t+C_{2}\\\\
& \text{Solve system:}\\
& \begin{cases}
0=C_{1}\ln(t_{p}) + C_{2}\\
2=C_{1}\ln(t_{p}+1) + C_{2}\\
4=C_{1}\ln(t_{p}+3) + C_{2}
\end{cases}\\\\
& 2=C_{1}\ln(t_{p}+1)-C_{1}\ln(t_{p})\\
& 4=C_{1}\ln(t_{p}+3) - C_{1}\ln(t_{p})\\
\implies & 2\ln(t_{p}+1)-2\ln(t_{p})=\ln(t_{p}+3)-\ln(t_{p})\\
\implies & 2\ln(t_{p}+1)=\ln(t_{p}+3)+\ln(t_{p})\\
\implies & (t_{p}+1)^{2} = (t_{p}+3)(t_{p})\\
\implies & t_{p}^{2}+2t_{p}+1=t_{p}^{2}+3t_{p}\implies \fbox{$t_{p}=1$}
\end{align*}
$$
**b) So, the snow started at 6:00 AM**
# Problem 4
$$
\begin{align*}
& \frac{ds}{dt}=-\left(\frac{s\text{ g}}{100\text{ L}}\right)\left(5\frac{\text{L}}{\text{min}}\right)\\
\implies & \fbox{a) $\frac{ds}{dt}=-\frac{s}{20}, s(0)=25$}\\
\implies & \ln s=-\frac{t}{20}+C\\
\implies & s(t)=Ce^{-\frac{t}{20}}\\
& 25=Ce^{0}\implies C=25\\
& s(t)=25e^{-\frac{t}{20}}\\
& 1=25e^{-\frac{t}{20}}\\
\implies & \fbox{b) $t=-20\ln \frac{1}{25}\approx 64\text{ min}$}
\end{align*}
$$
# Problem 5
$$
\begin{align*}
\frac{dc}{dt} = \frac{(10\text{ L/min})(10\text{ g/L})}{100000\text{ L}}\\
\implies \frac{dc}{dt} = \frac{1}{1000}\text{ g/L/min}\\\\
c(t)=\frac{t}{1000}+C, c(0)=0\\
\implies  \fbox{b) $c(t)=\frac{t}{1000}$}
\end{align*}
$$
![[Diff. Eqs. Problem Set 1 2023-09-08 17.29.08.excalidraw]]
# Problem 6
$$
\begin{align*}
& \frac{dx}{dt} = 2t+x\\
& \frac{dx}{dt} - x = 2t\\
\text{Homogeneous: } & \frac{dx}{dt}-x=0\\
& \int\frac{1}{x}dx = \int 1 dt\\
\implies & \ln|x|=t+C\\
\implies & x_{h}=Ae^{t}\\
\text{Suppose } & x_{p}=at+b\\
\implies & \frac{dx}{dt}=a\\
\implies & a-(at+b)=a-b-at = 2t\\
& a=-2,b=-2\\
\implies & x_{p}=-2t-2\\
\implies & x=x_{h}+x_{p}=\fbox{a) $Ae^{t}-2t-2$}\\
& -2=Ae^{(0)}-2(0)-2\implies A=0\\
\implies & \fbox{b) $x(t)=-2t-2$}
\end{align*}
$$
