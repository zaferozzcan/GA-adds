/*
Data Structures are collection of values, the relationship among them, and the functions or operations that can be applied to the data!
Different ways of storing data, in other words!

****** WHY SO MANY ? ******
Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used!


****** WHY CARE ? ******

----First of all the more time you spend as a developer the more likely you'll need to use one of these
more advanced data structures.
Usually there's a time and every developer's life when using an array for every single possible problem
just doesn't cut it.

You might need something more efficient.
You might need something to express a different relationship.
You might be working with more complicated data that isn't linear and you needed another way of storing
it.

There's many situations where this can come up or you might be working with an API or a library that
gives you like a database for example that returns a graph graph representation and you need to understand
what the heck a graph is.

----Also another reason worth knowing that you've already worked with many data structures probably unknowingly.
So if you have ever worked with the Dom in javascript you've manipulated and interacted with a tree.
*/

class Student {
  constructor(firstName, lastName) {
    this.name = firstName;
    this.last = lastName;
  }
}

const s1 = new Student("Zafer", "Ozcan");

class Teacher {
  constructor() {
    this.name = "Teacher1";
  }
  setName(name) {
    this.name = name;
  }
}
const t1 = new Teacher();

t1.setName("Zafer");

console.log(t1.name);
