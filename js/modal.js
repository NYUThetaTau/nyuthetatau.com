(function() {
  'use strict';
  var dialogImages = document.querySelectorAll('.dialog-image');
  [].forEach.call(dialogImages, function(dialogImage) {
    var dialog = document.querySelector('.dialog-' + dialogImage.id);
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogImage.addEventListener('click', function() {
       dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
    .addEventListener('click', function() {
      dialog.close();
    });
  });
}());
