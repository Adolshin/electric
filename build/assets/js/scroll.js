function scroll1() {
  let pageOffset = document.documentElement.getBoundingClientRect().top;

  function delta() {
    let pageOffsetNew = document.documentElement.getBoundingClientRect().top;
    let deltaY = pageOffsetNew - pageOffset;
    pageOffset = pageOffsetNew;
    return deltaY;
  }
  const section = document.querySelector('.js-fixed');
  const row = document.querySelectorAll('.js-fixed-row');
  const title = document.querySelector('.js-title');
  const windowHeight = document.documentElement.clientHeight;
  let elemOffset = Array.from(row).map(function (item) {
    let elemOffset = item.getBoundingClientRect().top;
    return(elemOffset);
  });
  let deltaScale = Array(9).fill(1);
  row.forEach(function (item, index){
    if (index > 0 && index < 8) {
      item.style.opacity = 0;
    }
  });
  function counterScroll (elem) {
    let deltaY = delta();
    // eslint-disable-next-line no-console
    // console.log(deltaY);
    elem.forEach(function (item, index, array) {
      let elemOffsetScroll = item.getBoundingClientRect().top;
      if (elemOffset[8] <= windowHeight/2 - 140) {
        let deltaTr = elemOffset[8] - (windowHeight/2 - 140);
        title.style.transform = 'translate3d(0,' + deltaTr + 'px,0)';
        elem[8].style.opacity = 1;
      } else {
        title.style.transform = 'translate3d(0,0,0)';
      }
      if (elemOffset[index] - elemOffset[index + 1] > -560 && elemOffset[index] - elemOffset[index + 1] < 0 && index !== 8) {
        let prev = array[index-1];
        let current = array[index];
        let next = array[index+1];
        let nextnext = array[index+2];
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
        deltaScale[index] += deltaY/10000;
        // console.log(deltaScale);
        if (deltaScale[index] > 0.95 && deltaScale[index] < 1) {
          current.style.transform = 'scale(' + deltaScale[index] + ')';
        } else if (deltaScale[index] <= 0.95) {
          current.style.transform = 'scale(0.95)';
          deltaScale[index] = 0.95;
        } else if (deltaScale[index] >=  1) {
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
  counterScroll (row);
  window.addEventListener('scroll', function (e){
    counterScroll(row);
  }, {passive: true});
}

export{scroll1};
