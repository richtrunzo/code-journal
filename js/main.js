var $avatarInput = document.querySelector('.avatar');
var $imagePlaceholder = document.querySelector('.image-placeholder');

$avatarInput.addEventListener('input', function (event) {
  var $avatarValue = $avatarInput.value;
  $imagePlaceholder.src = $avatarValue;

});

var $form = document.querySelector('form');
var $username = document.querySelector('.username');
var $fullName = document.querySelector('.full-name');
var $location = document.querySelector('.location');
var $bio = document.querySelector('.bio');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.username = $username.value;
  data.profile.fullName = $fullName.value;
  data.profile.location = $location.value;
  data.profile.avatarUrl = $avatarInput.value;
  data.profile.bio = $bio.value;
  $form.reset();
});
