CURRYING AND PARTIAL APPLICATION
======

* Currying is the process of transforming an m-ary function (that is, a function of aritym ) into a sequence of m unary functions, each of which receives on argument of
the original function, from left to right. Upon being called with an argument, each
function produces the next one in the sequencem, and the last one does the actual
calculations.

* Partial application is the idea of providing n arguments to a m-ary function,
being n less than or equal to m, to transform it into a function with (m-n)
parameters. Each time you provide some arguments, a new function is produced, with 
smaller arity. When you provide the last arguments, the actual calculations are performed.

* Partial currying is a mixture of both preceding ideas: you provide n arguments
(from left to right) to a m-ary function and you produce a new function of arity
(m-n). When this new function receives some other arguments, also from left to right,
it will produce yet another function. When the last parameters are provided, function
produces the correct calculations.

CURRYING
======

Currying is a device that enables you to only work with single variable functions
even if you need a multiple variable one.

DEALING WITH MANY PARAMETERS
======

The idea of currying, by itself, is simple. If you need a function with, say, three
parameters, instead of writing (with arrow functions) something like the following:

```javascript

const make3 = (a, b, c) => String(100 * a + 10 * b + c);

```

You can have a sequence of functions, each with a single parameter:


```javascript

const make3curried = a => b => c => String(100 * a + 10 * b + c);

```


