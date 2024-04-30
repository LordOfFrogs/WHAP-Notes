---
tags:
  - math/linear-algebra
aliases:
  - RREF
  - Row-Echelon Form
---
# Properties
- Every nonzero row has a leading 1
- The leading 1s shift one or more columns to the right as you descend the rows
- Any column containing a leading 1 has 0s elsewhere in that column (clean)
- Any all-zero rows are located at the bottom of the [[matrix]]
# [[Matrix]] Representation
For starting [[matrix]] $\mathbf{A}$ where $\text{rref}(\mathbf{A})=\mathbf{U}$, the $n$th [[Elementary Row Operations|row operation]] can be represented by [[matrix]] $\mathbf{B}_{n}$ where
$$
\mathbf{B}_{n}\cdots\mathbf{B}_{2}\mathbf{B}_{1}\mathbf{A}=\mathbf{U}
$$
And, if $\mathbf{B}_{n}\cdots\mathbf{B}_{2}\mathbf{B}_{1}=\mathbf{B}$, $\mathbf{BA}=\mathbf{U}$
$$
\mathbf{B}^{-1}=\mathbf{L}\implies \mathbf{A}=\mathbf{B}^{-1}\mathbf{U}=\mathbf{LU}
$$
The row space ([[subspace]] from the row [[Vector|vectors]] of $\mathbf{A}$) is the same for $\mathbf{A}$ and $\mathbf{U}$