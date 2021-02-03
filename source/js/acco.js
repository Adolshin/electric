function acco() {
  let acco = document.querySelectorAll('.js-acco');
  acco.forEach(function (item) {
    let accoItem = item.querySelectorAll('.js-acco-item');

    accoItem.forEach(function (item) {

      item.children[0].addEventListener('click', function () {
        item.classList.toggle('active');
      });
    });
  });
}
export{acco};