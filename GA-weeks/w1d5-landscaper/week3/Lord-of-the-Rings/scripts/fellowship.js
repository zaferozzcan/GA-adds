console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  var section = $("<section>")
  section.attr("id", "middle-eart")
  // console.log(document.body)


  // 2. append the section to the body of the DOM.
  $("body").append(section)
  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)
  for (let index = 0; index < lands.length; index++) {


    //   3b. gives each land article an `id` tag of the corresponding land name
    var article = $("<article>")
    article.attr("id", lands[index]);
    section.append(article)
    //   3c. includes an h1 with the name of the land inside each land article
    var articleH1 = $("<h1>")
    article.append(articleH1)
    //   3d. appends each land to the middle-earth section
    articleH1.text(lands[index]);
    console.log(document.body)
  };
}


// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  var ulHobbits = $("<ul>")
  ulHobbits.addClass("ulTheShire")
  $("#The-Shire").append(ulHobbits)



  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop

  for (let index = 0; index < hobbits.length; index++) {
    var li = $("<li>").attr("id", "hobbit")
    li.text(hobbits[index])
    ulHobbits.append(li)
  }

  // 3. also, give each hobbit (`li`) a class of "hobbit"

  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  $("#The-Shire").append(ulHobbits)
}
// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  var ringDiv = $("<div>")
  ringDiv.attr("id", "the-ring")

  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  $("li")[0].append(ringDiv)

<<<<<<< HEAD
=======
    // 1. create an empty div with an id of 'the-ring'
    var ringDiv = $("<div>")
    ringDiv.attr("id", "the-ring")
>>>>>>> 2fb73afbf810cb903f0ee27e43e2a905703c40b1

  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

<<<<<<< HEAD
};
=======
    $("li")[0].append(ringDiv)


    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
>>>>>>> 2fb73afbf810cb903f0ee27e43e2a905703c40b1

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {


  // 1. display an unordered list of baddies in Mordor
  var ulBaddie = $("<ul>")
  $("#Mordor").append(ulBaddie)

  // 2. give each of the baddies a class of "baddy"    
  for (let index = 0; index < baddies.length; index++) {
    var li = $("<li>").addClass("baddy")
    li.text(baddies[index])
    ulBaddie.append(li)
  }

  // 3. remember to append the ul to Mordor


  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 4 complete - Made the Baddies"..
}
// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor

  var aside = $("<aside>");
  $("#Mordor").after(aside)

  // 2. display an unordered list of buddies in the aside
  var ulBuddies = $("<ul>")
  aside.append(ulBuddies)

  // 3. give each of the buddies a class of "buddy"

  for (let index = 0; index < buddies.length; index++) {
    var li = $("<li>").addClass("buddy")
    li.text(buddies[index])
    ulBuddies.append(li)
  }
  // 4. don't forget to append them to the aside

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  var element = $(".ulTheShire").detach()

  $("#Rivendell").append(element)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  var budStrider = $(".buddy").eq(3);
  budStrider.text("Aragorn")

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  var divFellow = $("<div>")
  divFellow.attr("id", "the-fellowship");

  // 2. add an h1 with the text 'The Fellowship' to this new div
  var h1Fellow = $("<h1>")
  h1Fellow.text("The Fellowship")
  divFellow.append(h1Fellow)
  // 3. append the fellowship to middle-earth
  $("#middle-earth").append(divFellow)

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  var elementBud = $(".buddy").detach()
  var elementHobit = $("#hobit").detach()

  $("#the-fellowship").append(elementBud)
  $("#the-fellowship").append(elementHobit)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White'
  let element = $(".buddy").eq(0)

  element.text("Gandalf the White")
  element.addClass("the-white")

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("the horn of gondor has been blown")

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $(".buddy").eq(4).css("text-decoration", "linethrough")

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  $(".baddy").eq(2).remove()

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  var frodo = $("#hobbit").eq(0).detach()
  var sam = $("hobbit").eq(1).detach()

  $("#Mordor").append(frodo)
  $("#Mordor").append(sam)

  // 2. add a div with an id of 'mount-doom' to Mordor
  var divMonth = $("<div>")
  divMonth.attr("id", "mount-doom")
  $("#Mordor").append(divMonth)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  var gollumDiv = $("<div>")
  gollumDiv.addClass("gollum")
  $("#Mordor").append(gollumDiv)

  // 2. Move the ring from Frodo and give it to Gollum
  var ring = $("#the-ring")
  $(".gollum").append(ring)

  // 3. Move Gollum into Mount Doom
  var gol = $(".gollum").detach()
  $("#mount-doom").append(gol)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $(".gollum").remove()
  $("#the-ring").remove();

  // 2. remove all the baddies from the DOM
  $(".baddy").remove()

  // 3. Move all the hobbits back to the shire
  var hobs = $("#hobbit").detach()
  $("#The-Shire").append(hobs)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(() => {


  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
})
  ;
