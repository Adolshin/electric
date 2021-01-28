(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _scroll = require('./scroll');

var _common = require('./common');

(0, _common.addClass)('.js-modal-open', '.js-modal');
(0, _common.removeClass)('.js-close', '.js-modal');
(0, _common.removeClass)('.js-overlay', '.js-modal');

(0, _common.toggleClass)('.js-burger', '.js-menu');

(0, _common.scrollToAnchor)('.anchor1', '#anchor1');

(0, _scroll.scroll1)();

},{"./common":2,"./scroll":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function toggleClass(sourse, target) {
  var em = document.querySelector(sourse);
  var el = document.querySelector(target);
  em.addEventListener('click', function () {
    el.classList.toggle('active');
  });
}

function removeClass(sourse, target) {
  var em = document.querySelector(sourse);
  var el = document.querySelector(target);
  em.addEventListener('click', function () {
    el.classList.remove('active');
  });
}

function addClass(source, target) {
  var em = document.querySelectorAll(source);
  var el = document.querySelector(target);
  em.forEach(function (item) {
    item.addEventListener('click', function () {
      el.classList.add('active');
    });
  });
}

function scrollToAnchor(source, target) {
  var em = document.querySelector(source);
  var el = document.querySelector(target);
  var elemOffset = el.getBoundingClientRect().top;
  var pageOffset = document.documentElement.getBoundingClientRect().top;
  em.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: elemOffset - pageOffset, behavior: 'smooth' });
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

exports.toggleClass = toggleClass;
exports.removeClass = removeClass;
exports.addClass = addClass;
exports.scrollToAnchor = scrollToAnchor;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function scroll1() {
  var pageOffset = document.documentElement.getBoundingClientRect().top;

  function delta() {
    var pageOffsetNew = document.documentElement.getBoundingClientRect().top;
    var deltaY = pageOffsetNew - pageOffset;
    pageOffset = pageOffsetNew;
    return deltaY;
  }
  var section = document.querySelector('.js-fixed');
  var row = document.querySelectorAll('.js-fixed-row');
  var title = document.querySelector('.js-title');
  var windowHeight = document.documentElement.clientHeight;
  var elemOffset = Array.from(row).map(function (item) {
    var elemOffset = item.getBoundingClientRect().top;
    return elemOffset;
  });
  var deltaScale = Array(9).fill(1);
  row.forEach(function (item, index) {
    if (index > 0 && index < 8) {
      item.style.opacity = 0;
    }
  });
  function counterScroll(elem) {
    var deltaY = delta();
    // eslint-disable-next-line no-console
    // console.log(deltaY);
    elem.forEach(function (item, index, array) {
      var elemOffsetScroll = item.getBoundingClientRect().top;
      if (elemOffset[8] <= windowHeight / 2 - 140) {
        var deltaTr = elemOffset[8] - (windowHeight / 2 - 140);
        title.style.transform = 'translate3d(0,' + deltaTr + 'px,0)';
        elem[8].style.opacity = 1;
      } else {
        title.style.transform = 'translate3d(0,0,0)';
      }
      if (elemOffset[index] - elemOffset[index + 1] > -560 && elemOffset[index] - elemOffset[index + 1] < 0 && index !== 8) {
        var prev = array[index - 1];
        var current = array[index];
        var next = array[index + 1];
        var nextnext = array[index + 2];
        if (index !== 0) {
          prev.style.opacity = 0;
        }
        current.style.opacity = 1;
        next.style.opacity = 1;
        // if (elemOffset[index] - elemOffset[index + 1] > - 400) {
        //   next.style.opacity = 1
        //   } else {
        //   next.style.opacity = 0;
        // }
        if (index <= 6) {
          nextnext.style.opacity = 0;
        }
        deltaScale[index] += deltaY / 10000;
        // console.log(deltaScale);
        if (deltaScale[index] > 0.95 && deltaScale[index] < 1) {
          current.style.transform = 'scale(' + deltaScale[index] + ')';
        } else if (deltaScale[index] <= 0.95) {
          current.style.transform = 'scale(0.95)';
          deltaScale[index] = 0.95;
        } else if (deltaScale[index] >= 1) {
          current.style.transform = 'scale(1)';
          deltaScale[index] = 1;
        }
        if (elemOffset[index] - elemOffset[index + 1] > -380) {
          current.style.filter = 'grayscale(1)';
        } else {
          current.style.filter = 'grayscale(0)';
        }
      }
      elemOffset[index] = elemOffsetScroll;
    });
  }
  counterScroll(row);
  window.addEventListener('scroll', function (e) {
    counterScroll(row);
  }, { passive: true });
}

exports.scroll1 = scroll1;

},{}]},{},[1])


//# sourceMappingURL=maps/app.js.map
