// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$(() => {
  //write your code here

  const $openBtn = $('#openModal');
  $openBtn.on('click', openModal);
  function openModal() {
    $modal.css('display', 'block');
  }

  const $modal = $('#modal');




  const $closeBtn = $('#close');
  $closeBtn.on('click', closeModal);
  function closeModal() {
    $modal.css('display', 'none');
  }

  setTimeout(openModal, 5000);




});
