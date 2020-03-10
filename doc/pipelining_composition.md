CONNECTING FUNCTIONS - PIPELINING AND COMPOSITION
========

In this chapter, we will go to the core of FP and see how to create sequences 
of function calls, so their combination will produce a more complex result out of
several simpler components.

* PIPELINING a way to join functions together in similiar waya to UNIX/LINUX pipes
* CHAINING, which may be considered a variant of pipelining, but restricted to objects
* COMPOSING which is a classic operation with its origins in basic computer theory

Along the way, we will be touching on related concepts, such as the following:

* POINTFREE STYLE which is often used with pipelining and composition
* DEBUGGING of composed or piped functions, for which we'll whip up some tools
* TESTING of composed or piped functions, which wont prove to be hight complexity


PIPELINING
========

Pipelining and composition are techniques for setting up functions to work in sequence,
so the output from a function becomes the input to the next function.
There are two ways of looking at this: from a computer point of view and from a
mathematical point of view.

PIPELINING in UNIX/LINUX
========

In Unix/Linux, the execution of a command and passing its output as an input to a secondcommand, whose output will yet the input of a third command, and so on, is called 
pipeline. 

1. Make each program do one thing well. To do a new job, build a fresh rather than
   complicating old programs by adding new features.

2. Expect the output of every program to become the input to another, as yet unkown
   ,program.


COMPOSING
========

Composing is quite similar to pipelining, but has its roots in mathematical theory.
The concept of composition is simple - a sequence of function calls, in which the 
output of one function is the input for the next one - but the order is reversed
from the one in pipelining. In the latter, the first function to be applied is the
leftmost one, but in composition, you start with the rightmost one.

When you define the composition of, say, three functions. The aritiy of the first 
function can be anything but the other functions must be unary.
