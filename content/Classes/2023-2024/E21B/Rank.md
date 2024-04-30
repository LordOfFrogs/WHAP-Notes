---
tags:
  - math/linear-algebra
---
The number of leading 1s in the [[Reduced Row-Echelon Form|RREF]] of a [[matrix]]
In [[System of Linear Equations|systems of equations]], number of variables able to be solved
Rank + Number of parameters = Number of variables
Also defined as $\text{rank}(\mathbf{A})\equiv\dim(\text{im}\ \mathbf{A})$ or the [[Dimension]] of the [[Image]]
# Properties
For $m\times n$ [[matrix]] $\mathbf{A}$
- $rank(\mathbf{A})\leq n$ because each column can have no more than one leading 1 in the [[Reduced Row-Echelon Form|RREF]]
- $rank(\mathbf{A})\leq m$ because each row can have no more than one leading 1 in the [[Reduced Row-Echelon Form|RREF]]
- $rank(\mathbf{A})\leq\min(m,n)$ follows
- If $[\mathbf{A\ |\ b}]$ is augmented [[matrix]] and [[Reduced Row-Echelon Form|RREF]] has leading 1 in its last column, the system is inconsistent ($rank(\text{RREF}[\mathbf{A\ |\ b}])=1+rank(\text{RREF}[\mathbf{A}])$)
- If a [[System of Linear Equations|System]] is consistent and $rank=n$, unique solution
- If [[System of Linear Equations|System]] is consistent and $rank=k<n$, then requires $n-k$ parameters