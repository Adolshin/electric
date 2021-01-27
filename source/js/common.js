
function toggleClass(sourse, target) {
  const em = document.querySelector(sourse);
  const el = document.querySelector(target);
  em.addEventListener('click', function () {
    el.classList.toggle('active');
  });
}

function removeClass(sourse, target) {
  const em = document.querySelector(sourse);
  const el = document.querySelector(target);
  em.addEventListener('click', function () {
    el.classList.remove('active');
  });
}

function addClass(source, target) {
  const em = document.querySelectorAll(source);
  const el = document.querySelector(target);
  em.forEach(function (item){
    item.addEventListener('click', function () {
      el.classList.add('active');
    });
  });
}

function scrollToAnchor(source, target) {
  const em = document.querySelector(source);
  const el = document.querySelector(target);
  let elemOffset = el.getBoundingClientRect().top;
  let pageOffset = document.documentElement.getBoundingClientRect().top;
  em.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({top: elemOffset - pageOffset - 400, behavior: 'smooth'});
  });

}

// let Scroll = (el) => {
//     const item = el.getAttribute('class');
//
//     window.scrollTo({top: top - offset, behavior: 'smooth'});
//
// };
// console.log(this.parentElement);
// Scroll(this);

export {toggleClass, removeClass, addClass, scrollToAnchor};