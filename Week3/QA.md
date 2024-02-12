# Q & A session

The third week is all about more complex JavaScript topics. By now the trainees should have the basics down, so expect some tougher questions. Expect questions about:

- Higher Order Functions
- _Closures_
- The Debugger (both browser/vscode) and how to debug functions

We have noticed that Closures are tough for the trainees, so try to spend any time you have spare on that topic. Also try to keep using the debugger to show what happens line by line!


## Questions

### Rasha.
  1 day ago
As i understand set are smiler to arrays , so what is better to use ?
:+1:
1



### Hana
  1 day ago
What is a good practice, to write tests before code, or to write code then tests?


### Hailemariam
  1 day ago
Do we install jest and import funtions or whatever they are such as test(), toBe(), at the beginning of our code? Or what is the set up to include testing capability, specifically jest.


### Ibrahim Sahin
  22 hours ago
1-) While watching the videos linked on HYF curriculum I do hear words/concepts such as stacks, pointing etc. Do we need to get familiar with such concepts as JS developers? is not understanding them correctly would effect our jobs?
2-) We cant reassign a value if we declare a variable with const. but we can redeclare with  same name with const like this:
const x = 2
console.log(x) // 2
const x = 5
console.log(x) // 5
is this okay do? (edited) 
:+1:
1



### Mohammed Gumaan
  22 hours ago
In web development field, is writing unit tests a job of a front-end developer or another programmer?
:+1:
2



### Lidya Tesfamariam
  19 hours ago
Is nested function the same with closure?
:+1:
1



### Ahmet Dogan
  19 hours ago
Why actually do we need to write unit tests and spend more time to do it  while we can check debugging or looking logs of our code ?
:+1:
1



### Bereket
  19 hours ago
How's replacing mentors by anytext not affecting the output of the code (it's still working) so what's the logic behind this ?
mentors.PNG
 
mentors.PNG


### Ibrahim Sahin
  19 hours ago
@Bereket
 anyText is parameter for the arrow function. you used the .filter on mentors array. and filter runs for the every element of mentors. in this case you name the parameter anyText.
const doubler = anyText => anyText * 2 

console.log(doubler(3)) // 6
same as this.
 function doubler(anyText){
return anyText * 2 }

console.log(doubler(3)) // 6
or this.
when it comes to filter/map etc. I think many people just uses e or element instead of a full variable name. you don’t use this again anywhere outside of this scope. But don’t take my word for this. :scared: (edited) 
:+1:
1






