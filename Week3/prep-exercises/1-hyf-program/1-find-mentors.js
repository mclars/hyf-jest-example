import { modules, students, mentors, classes } from "./hyf.js";
/**

General code improvements:
- built in methods vs for-loops
- utility functions
  - what is lodash?

Q: Do we install jest and import funtions or whatever they are such as test(), toBe(), at the beginning of our code? Or what is the set up to include testing capability, specifically jest.
1. write a test
  - install jest
  - what is jest? 
 

Q: 2-) We cant reassign a value if we declare a variable with const. but we can redeclare with  same name with const like this:
const x = 2
console.log(x) // 2
const x = 5
console.log(x) // 5
is this okay do?


2. Lets write a test



Q: What is a good practice, to write tests before code, or to write code then tests?
- does anyone have an opinion here?
- 
Q: In web development field, is writing unit tests a job of a front-end developer or another programmer?

- 

Q: Why actually do we need to write unit tests and spend more time to do it  while we can check debugging or looking logs of our code ?
- "complexity grows exponentially" - what does this mean?


Q: How's replacing mentors by anytext not affecting the output of the code (it's still working) so what's the logic behind this ?

3. How can we validate the findMentors input?
4. How can we test our validation?
 */

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
export const possibleMentorsForModule = (moduleName) =>  {
  if (!moduleName) throw new Error('No module name provided')
  const possibleMentors = mentors.filter((mentor) => {
    return mentor.canTeach.includes(moduleName)
  })
  const namesOfPossibleMentors = possibleMentors.map((possibleMentor) => {
    return possibleMentor.name
  })
  return namesOfPossibleMentors

}

function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
      console.log(outerVariable); // 'I am outside!'
  }

  innerFunction();
}

outerFunction();


function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
      console.log(outerVariable); // 'I am outside!'
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); // 'I am outside!'

  // TODO complete this function
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // TODO complete this function
};
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));
