var $avatarInput = document.querySelector('.avatar');
var $imagePlaceholder = document.querySelector('.image-placeholder');

$avatarInput.addEventListener('input', function (event) {
  var $avatarValue = $avatarInput.value;
  $imagePlaceholder.src = $avatarValue;

});
