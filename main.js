(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if(window.innerWidth > 1024){
      OffElements();
    }
  })

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function OffElements(){
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document)
