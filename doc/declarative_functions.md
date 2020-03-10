TRANSFORMATIONS
======

The first set of operations we are going to consider is working on an array
and process it. The base of a function to produce some results. There are 
several possible results: 

* single value with reduce();
* a new array with map() but the array has the same cardinality;
* a new array with a different cardinality with filter();
* or any result with forEach();


REDUCING AN ARRAY TO A VALUE
======

In FP language, we speak of folding operations:

* .reduce() is foldl (for fold left)
* .reduceRight() foldr. (for fold right)

In Category Theory terms, both operations are catamorphisms: the reduction
of all the values in a container down to a single result.

*Why should you try to always use .reduce() or .reduceRight(), instead of loops??*

* All the aspects of loop control are automatically taken care of, so you dont even
  have the possibility of a, say, off by one mistake.

* The initialization and handling of the result values are also done implicitly.

* And, unless you work really hard at being impure and modifying the original array,
  your code will be side-effects free



WRAPPING FUNCTIONS
=======

Lets consider some higher-order functions that provide a wrapper around other
functions, to enhance it in some way, but without altering its original
objective. In terms of design patterns, we cloud also speak of decorator.
Tgus pattern is based on the concept of adding some behavior to an object
without affecting other objects. 




