


function submit() {
  // $('.order-btn_close').click(function (e) {
  //   e.preventDefault();
  //   // $('body').removeClass('body-active-menu');
  //   $('.order-overlay').removeClass('order-overlay_open');
  //   $('body').removeClass('disabled-onepage-scroll-order');
  //   $('.message').remove();
  // });
  const btn = document.querySelector('.order-btn');
  const modal = document.querySelector('.js-modal');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    $('#mail-form').submit();
    modal.classList.remove('active');
  });
  // $('.order-btn').click(function (e) {
  //   e.preventDefault();
  //   $('#mail-form').submit();
  //
  // });
  let submitForm = function (ev) {
    ev.preventDefault();
    const form = $(ev.target),
      data = form.serialize(),
      url = form.attr('action');

    let request = $.ajax({
      type: 'POST',
      url: url,
      data: data,
      dataType: 'JSON'
    });

    request.done(function (msg) {
      let mes = msg.mes,
        status = msg.status;
      if (status === 'OK') {
        // $('.order-overlay__text').append('<p class="message">' + mes + '</p>');
        alert(mes);
      } else {
        // $('.order-overlay__text').append('<p class="message">' + mes + '</p>');
        alert(mes);
      }
    });
    request.fail(function (jqXHR, textStatus) {
      alert("Request failed:" + textStatus);
    });
  };
  $('#mail-form').on('submit', submitForm);




}

export {submit};




