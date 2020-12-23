/* 

Content of Object
1)a story to illustrate recursion
2)Why Use Recursion
3)Understanding Call Stack


1)Here is a nice story to understand what the recursion is!
👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻
Once upon a time there was Martin a little boy named Martin.

This was a way back before there were computers back when there was wizards in our world there were

wizard totalist and alchemist's And there's this little boy named Martin who was training with them.

And there was an angry dragon named the dragon and he happened to look like the new Dragon emoji.

So one day Martin is talking to to some wizard and this wizard gives him a task.

The Wizard says I need you to go talk to the dragon and I'm going to give you a list of numbers and

I need you to come back and tell me if any of the numbers on that list are odd and they didn't have

computers.

And they for some reason were unable to do this on their own that needed the help of the Dragon.

So Martin goes up with his list of numbers you can see it here.

And he says Excuse me Mr. dragon can you tell me if any of these numbers in the list are odd.

And the dragon is not in a very good mood.

He's a little hungry it's been a while since he had something to eat.

So he's angry and he says I'm sorry boy only tell you if the first number in that list is odd.

So he's not super angry.

He doesn't immediately burn him alive and eat him.

Instead he just says sort of grumpily.

I'll only tell you the first number in that list is odd and Martin is very upset because he doesn't

want to fail his task he says I need to know if any of the numbers are odd not just the first one.

And the dragon is even angrier.

And he says Sorry I only tell you if the first number is odd.

That's my final offer that's all I'll do.

So then the boy has a little bit of a think hmm what could he do.

And Martin comes up with a solution.

He goes to the dragon and he says OK fine.

What about the first number in this list and he gives from the whole list and the dragon says that's

not odd It's even as we can see.

Then Martin comes back and he says all right what about the first number in this other different list.

It's not odd.

He does it again.

What about this number.

The first number in this list is that God and the dragon says it's not odd.

And the dragon is getting pretty bored.

And then finally he says what about this number in this list the first number.

There's only one number left.

It's not odd.

And then finally Martin comes back one more time.

What about the first number and this list and it's an empty list and the dragon is very upset.

He says there's an empty list you moron.

There isn't a number in there.

How could anything be even or odd.

There's nothing in there.

And then Martin triumphantly says Ah.

So all the numbers are even in that list.

And then the dragon says I never said that.

I only told you if the first number of a list was odd.

So then Martin gets out of a pen or pencil.

I guess a quill.

Or maybe just a stick in the dirt.

There we go and he starts drawing.

And he says well I gave you this first long list.

You said the first number was not odd.

Then I gave you this shorter list and you said the first number was not odd.

Then it gave you this other list.

You said the first number was not odd that they give you this list.

He said the first number is not odd that they give you this empty list and you got really mad at me

but you said that there's nothing in there to be either even or odd.

So I can conclude that there's no odds in this list.

There's no odds not less no odds not one and not one.

And finally there are no odds in the entire first list that I asked you about.

So no not and the dragon says Oh congratulations boy you have discovered recursion is very condescending



--------------------------------------------------------------

2)Why Use Recursion
Iterative loops don't have to rely on the call stack to store all their data, which means that when data gets large, they don't immediately run the risk of a stack overflow. Recursive functions do. Plus, if a loop is going to continue infinitely, it's much more obvious than if a recursive function is.

git
Recursion is a process calls itself!(A function calls itself in our case!)

We have been using recursion constantly in web dev projects. For example, JSON.parse / JSON.stringify are written recursively! another example document.getElementById and DOM traversal algorithms are written recursively

After undertanding the Call Stack below!

writing recursive function is keep pushing same function onto the call stack!



Example of recurive code---geme plan is invoking the same function with a different input until youreach the base case.

function countDownNaive(num) {
  for (let i = num; i > 0; i--) {    <--this is a function how i do without recursion
    console.log(i);
  }
}

function countDown(number) {
  if (number <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(number);
  number--;
  countDown(number);
}

countDown(10);




--------------------------------------------------------------


3) Understanding Call Stack

It is highly important to understand what happend when we call a function behind the seen!

In almost all programing languages, there is a built in data structure that manages what happens when functions are invoked! There is a special order, in other words!
So, the sequence itself can be considered or named call stack!

Call Stack is stack data structure. So, stack is anouther data structure. The way or sequence of calling each stack in programming languages is calleed "Call Stack"

what happens when a function invoked!?
- Anytime a function is invoked. It is placed(pushed) on the top of the call stack!
- When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)



*/
