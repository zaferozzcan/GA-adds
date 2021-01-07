// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.


for (let i = 0; i < 100; i++) {
    if (i > 20 && i % 2 == 0) {

        console.log(i, "Not Weird");
    } else if (i % 2 == 0 && (i <= 20 && i >= 6)) {

        console.log(i, "Weird");
    } else if (i % 2 == 0 && (i <= 5 && i >= 2)) {

        console.log(i, "Not Weird");
    } else {

        console.log(i, "Weird");
    }
}