
PURE FUNCTIONS
=======

Pure functions can be considered pure if they satisfy two conditions:

1: Given the same argument, the function always calculates and returns the same result!
2: When calculating the result, the function does not cause any observable side effect!

Also we might invoke the software design principle and remind ourselves that a function
should only do one thing and nothing but that thing. If a function does something else
and has some hidden functionality we as developers wont predict the output and make
things harder for us as developers.




REFERENTIAL TRANSPARENCY
=======

In mathematics, Referential Transparency is the property that lets you replace an
expression with its value, and not change the results of whatever you have been doing.

(var x = 2 * 3 + 1) === (var x = 7)

All arithmetic expressions are referntial transparent. 
Expressions involving I/O are not transparent,give results cannot be known until
they are executed. Same with date- or random number functions.





SIDE EFFECTS
=======

Side effects are defined as some change in state, or some interaction with outside
elements that occurs during the execution of some calculations or process.
A bit like collateral damage-- some unintended consequences for a given action.

Examples for side effects

* Changing global variables.
* Mutating objects received as arguments.
* Doing any kind of I/O, such as showing an alert message or loggins some text.
* Working with, and changing, the filesystem.
* Updating a database.
* Calling a web service.
* Quering or modifying the Dom.
* Triggering any external process.
* Calling a function that causes the side effect (Impurity is contagious)



GLOBAL STATE
=======

The usage of non-local variables, sharing a global state with other parts of the programm. The function that does that automatically becomes impure. Only if youre global
variables are declared constant, which implies that they cannot be changed the function
using the in their local scope become pure.




INNER STATE
=======

Just like we programmed our thatManyTimes function using the IIFE pattern we are changing the innerstate in the count variable. So every time it gets called the count function
changes. So the innerstate of the function changes. thus giving a different result when
they are called. The usage of internal state, is why FPers consider that using
objects is potentially bad.




ARGUMENT MUTATION
======


There is a possibility that an impure function will modify its arguments. This implies
that any modification to the parameretes of the function, will effect and actual
modification of the original object or array. 
Basically if a function use an argument and this argument is somehow changed the function result will also changed. Thus we always need to be working on the copy of the argument. Declare them as const !.




ADVANTAGES OF PURE FUNCTIONS
====

The main advantage of using pure functions, derives from the fact that they dont have 
any side effects. When you call a pure function, you need not worry about anything, outdie of which arguzments you are passsing to it. Also you can be sure that you cannot
cause any problems or break anything else, because the function will only work with 
whatever you give it, and not wioth outside sources.




ORDER OF EXECUTION
======

Another way of looking at what we have been saying in this chapter, is the
consideration that pure functions can be called robust. You know that their execution
in whichever order wont ever have any sort of impact on the system. This idea may be
extended further: you could evaluate pure functions in parallel, resting assured that
results wouldt vary from what you would get in a single-threaded execution.



MEMOIZATION
======

Since the output of a pure function is always the same you can cache the functions
results and avoid a possibly costly re-calculation. This process which implies 
evaluating an expression only the first time, and caching the result for later calls,
is called memoization.


AVOIDING THE USAGE OF STATE
======

With regard to the usage of global state --both getting and setting it-- the solution
is well known. The key to this is:

* Provide whatever is needed of the global state to the function, as arguments

* If the function needs to update the state, it shall not do it directly but rather
  produce a new version of the state, and return it

* It will be the reponsibility of the caller to take the returned state, if any and
  update the global state

This is the technique that Redux uses for its reducers. The signature for a reducer
is (previousState, action) => newState meaning that it takes a state and an action
as parameters, and return a new state as the result. Most specifically, the reducer
is not supposed to simple change the previousState argument, which must remain
untouched.


IS YOUR FUNCTION PURE?
======

Can you ensure that a function is actually pure?
Here is an example to show how difficult this task can be.

This function looks pure doesnt it?

const sum3 = (x, y, z) => x + y + z;

But what if x,y,z are Math.random() functions? Suddenly the function becomes impure!


TESTING PURE FUNCTIONS
======

Most of your unit tests coud be simply:

* Call the function with a given set of arguments

* Verify that the results match what you expected


TESTING PURIFIED FUNCTIONS
======

Same as with pure functions but you will now also have to test if the new state
matches your expectations.


TESTING IMPURE FUNCTIONS
======

SINCE THE RESULTS WONT BE PREDICATBLE, WE CAN CHECK FOR PROPERTIES OF ITS OUTPUT!



































