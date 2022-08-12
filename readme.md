## DOM

Structured represenstation of HTML documents. It allows JavaScript to access HTML elements and styles to manipulate them.

It is create by the browser when HTML codes loads.
DOM is not a part of Javascript. But rather it's a part of Web APIs.

## HOW JS WORKS

Features containing JS definition:

1. High-level
2. Garbage-collected: algorithm implemented inside JS engine which automatically removes old, unused objects.
3. Interpreted or Just-In-Time:
4. Multi-paradigm: multiple approaches to structure the JavaScript codes.(OOP,Procedural programming, Functional programming)
5. prototype-based object-oriented
6. First-class functions(functions are treated like variables. We can pass them into other functions, and even return them from functions)
7. Dynamic: dynamically-typed
8. Single-threaded
9. Non-blocking event loop

`JS engine`: program that executes JS code(the popular one is google's V8 engine.)

JS engine has `Call stack` and `heap`.

## SCOPING

How program's variables are organized and accessed.

`Lexical scoping` : scoping is controlled by placement of functions and blocks in the code.

`Scope`: space or environment in which a certain variable is declared.

Only let and const variables are restricted to the block scope. It means that a variable declared with `var` inside a block, can be accessed out of that scope.

Functions are also `block scoped` in strict mode.

NOTE: variables declared with var, are added to the window object. It means that they can be accessed using this keyword.

## HOISTING

makes some types of variables accessible and usable in the code before they are actually declared. `Variables are lifted to the top of their scope`

Let and const variables are not hoisted. We get an error if we try to access them.

# Temporal Dead Zone(TDZ)

It's a region of the scope in which the variable is defined but can't be used in any way.(`ReferenceError` happens)

## THIS

arrow functions use this of the surrounding object.

## DATA STRUCTURES

1. Arrays

- use when you need ordered list of values(might contain duplicates)
- use when you need to manipulate data

2. Sets

- use when you need to work with unique values
- use when need `high performance`
- use `to remove duplicates from the arrays`

3. Objects

- More tradtional key/value store
- Easier to write and access values with . and []

4. Maps

- Better performance

* keys can have any data types
* easy to iterate
* easy to compute size
