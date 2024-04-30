---
tags:
  - math/linear-algebra
aliases:
  - Vector Spaces
  - General Linear Space
  - General Linear Spaces
---
A [[vector]] space $V$ is a set, with addition and scaling of element defined for all elements of the set, that is closed under addition and scaling, contains a zero element (0), and satisfies the following axioms:
For all $f,g,h\in V$ and scalars $c,c_{1},c_{2}$
1. $(f+g)+h=f+(g+h)$ (additive associativity)
2. $f+g=g+f$ (additive commutativity)
3. $f+0=f$ (additive identity)
4. $f+(-f)=0$ (additive inverse)
5. $c(f+g)=cf+cg$ (scalar distributive)
6. $(c_{1}+c_{2})f=c_{1}f+c_{2}f$ ([[vector]] distributive)
7. $c_{1}(c_{2}f)=(c_{1}c_{2})f$ (multiplicative pseudo-associativity)
8. $1f=f$ (multiplicative identity)
# Examples
- [[Rn]] is a vector space
- Any [[subspace]] of [[Rn]] is a vector space
- The [[Complex Number|complex numbers]] can be viewed as a real vector space without defining multiplication
- $\mathbb{R}^{m\times n}=M(m,n)= m\times n$ [[Matrix|matrices]] with real entries is a real vector space without defining product
- $F(\mathbb{R},\mathbb{R})=F(\mathbb{R})=\{ \text{functions }f:\mathbb{R}\to\mathbb{R}\text{ with domain }\mathbb{R} \}$ is a real vector space where $(f+g)(x)=f(x)+g(x),(cf)(x)=c(f(x))$
- $P_{n}=\{ \text{real polynomimals of degree }\leq n \}=\{ a_{0}+a_{1}x+\cdots a_{n}x^{n}:a_{0},a_{1},\cdots,a_{n}\in\mathbb{R} \}$ is a real vector space
- 