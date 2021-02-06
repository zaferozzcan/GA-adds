// picture = ["abc", "ded"];

// // function addBorder(picture) {
// //   let borderLen = picture[0].length + 2;
// //   let top = "*".repeat(borderLen);
// //   let bottom = "*".repeat(borderLen);

// //   return [top, ...picture.map((item) => `*${item}*`), bottom];
// // }

// let addBorder = (picture) => [
//   picture[0].replace(/./g, "*") + "**",
//   ...picture.map((arr) => `*${arr}*`),
//   picture[0].replace(/./g, "*") + "**",
// ];

// console.log(addBorder(picture));

function areSimilar(a, b) {
  const ad = a.filter((v, i) => v != b[i]);
  console.log(ad);
  const bd = b.filter((v, i) => v != a[i]);
  return (
    ad.length == 0 || (ad.length == 2 && ad.join("") == bd.reverse().join(""))
  );
}

console.log(areSimilar([1, 1, 2], [1, 2, 1]));

let a = [1, 1, 2];
let b = [1, 2, 1];

let ax = a.filter((item, index) => item != b[index]);
let bx = b.filter((item, index) => item != a[index]);

console.log(ax.join("") == bx.reverse().join("") ? true : false);
