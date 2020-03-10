THINKING RECURSIVELY
========

The key to solving problems recursibely is assmuing that you already have a function
that does whatever you need, and just call it normally. Actually, it is quite
appropriate: to solve a problem with recursion, you must first solve the problem.
So what you need to do is:

1. Assume you already have an appropriate function to solve your problem
2. Then, see how the big problem can be solved by soling one (or more) smaller problems
3. Solve those problems by using the imagined function from step1.
4. Decide what are your base cases, simple enough that they be solved directly,
   not requiring any more calls.



There are three usual methods for solving problems by applying recursion:

* Decrease and conquer is the simplest case, in which solving a problem directly
  depends on solving a single, simple case of itself

* Divide and conquer is more general approach. The idea is to try to divide your problem
  into two or more smaller versions, solve them recursively, abd use such solutions to solve original problem. The only difference between decrease and conquere, you have to
  solve two or more other problems instead of only one.

* Dynamic programming can be seen as a variant of divide and conquer basically, you 
  solve a complex problem by breaking it into a set of somewhat simpler versions of
  the same problem and solving each in order. However, a key idea in this strategy
  is to store previously found solutions, so whenever you find yourself needing, again,
  the solution to a simpler case, you wont directly apply recursion, but rather use
  the stored result and avoid unnecessary repeated calculations
