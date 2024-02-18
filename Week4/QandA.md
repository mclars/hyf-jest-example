### Rustam
:technologist:  2 days ago
Don't fully understand how environment loss works. There are two objects:
```javascript
const movies = {
  id: 1,
  titles: ["Terminator", "Aliens", "Titanic"],
  showTitles() {
    this.titles.forEach((title) => {
      console.log(this.id, title);
      this.id++;
    });
  },
};
const films = {
  id: 1,
  titles: ["Terminator", "Aliens", "Titanic"],
  showTitles: () => {
    console.log(this.titles);
  },
};
```
Why everything is displayed normally in movies, but undefined in films.


### Rasha.
  2 days ago
What is the difference between a Factory Function and a Constructor in JavaScript?
:+1:
1



### Ibrahim Sahin
  1 day ago
```javascript
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.stop();
```
When I run this code, I get the object from the image. Why are this two functions methods looks different. Do they have different uses?
image.png
 
image.png


### Hailemariam
  1 day ago
When do we use this keyword most of the time besides in constructor finctions?


### Hana
  1 day ago
what is the best way to "hide" secret data like passwords, closures or this new thing from this week #
- in the db
- encryption
- jwt

### Mohammed Gumaan
  24 hours ago
What is the difference between Classes and Prototypes, and when to use each?


### Rustam
:technologist:  23 hours ago
Why here function displays 'object':
```javascript
function foo() {
  console.log(3, typeof this);
}

const result = foo();
```

while here function displays 'undefined':
```javascript
'use strict';

function foo() {
  console.log(3, typeof this);
}

const result = foo();
```

### Ibrahim Sahin
  23 hours ago
@Rustam
 first one also returns undefined for me :sweat_smile: (edited) 


### Lidya Tesfamariam
  23 hours ago
@Rustam
  I think it because of strict mode. this has some differences between strict mode and non-strict mode.
MDN Web DocsMDN Web Docs
Strict mode - JavaScript | MDN
JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

:+1:
2



### Rustam
:technologist:  23 hours ago
@Ibrahim Sahin
 that's strange. Maybe you have some configurations that convert all code to 'use strict'


### Ibrahim Sahin
  23 hours ago
@Rustam
 edit: okay so in browser it returns object but in node it doesnt. in here “this” refers to global/window object. and I guess ‘use strict’ doesnt like that. I guess this is already built in node so it returns undefined instead of global anyway (edited) 
:+1:
1



### Bereket
  22 hours ago
How’s it preferable to use the  “this” keyword in Regular functions than arrow functions to explicitly control its value


### Lidya Tesfamariam
  21 hours ago
How  can we prevent discrepancies  using ''this'' keyword when running code in different environments like a browser versus Node.js


### Ibrahim Sahin
  21 hours ago
is the only use difference between
Wallet.prototype.newMethod
and
Wallet.newMethod
is memory efficiency?


### Ahmet Dogan
  21 hours ago
In what condition we are going to use classes instead of factories in javascript? Actually why do we need other ways to create Objects other than Classes? (edited) 


### Ibrahim Sahin
  20 hours ago
@Rustam
 In your first question. you used arrow function in the second object. arrow functions dont have “this”. thats why it’s undefined. word this here is also global/window.
it explains at the very beginning of this page:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions