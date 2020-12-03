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
  data.profile.username = $username.value;
  data.profile.fullName = $fullName.value;
  data.profile.location = $location.value;
  data.profile.avatarUrl = $avatarInput.value;
  data.profile.bio = $bio.value;
  $form.reset();
  $imagePlaceholder.src = 'images/placeholder-image-square.jpg';
});

function profileData(event) {
  var profile = document.createElement('div');
  var header = document.createElement('header');
  profile.appendChild(header);
  var codeJournal = document.createElement('h3');
  var codeJournalText = document.createTextNode('Code Journal');
  codeJournal.appendChild(codeJournalText);
  header.appendChild(codeJournal);
  var rowOne = document.createElement('div');
  rowOne.setAttribute('class', 'row-one row-one-profile');
  profile.appendChild(rowOne);
  var colOne = document.createElement('div');
  colOne.setAttribute('class', 'col-one-row-one');
  rowOne.appendChild(colOne);

  var profileName = document.createElement('h3');
  profileName.setAttribute('class', 'profile-header');

  colOne.appendChild(profileName);

  var image = document.createElement('img');
  image.setAttribute('class', 'image-placeholder profileimage');

  colOne.appendChild(image);
  var colTwo = document.createElement('div');
  colTwo.setAttribute('class', 'col-two-row-one');
  rowOne.appendChild(colTwo);

  var profileUser = document.createElement('div');
  profileUser.setAttribute('class', 'profileuser');
  colTwo.appendChild(profileUser);
  var userIcon = document.createElement('i');
  userIcon.setAttribute('class', 'far fa-user');
  profileUser.appendChild(userIcon);

  var username = document.createElement('p');
  profileUser.appendChild(username);

  var profileLocation = document.createElement('div');
  profileLocation.setAttribute('class', 'profilelocation');
  colTwo.appendChild(profileLocation);

  var locationIcon = document.createElement('i');
  locationIcon.setAttribute('class', 'fas fa-compass');
  profileLocation.appendChild(locationIcon);

  var locationName = document.createElement('p');
  profileLocation.appendChild(locationName);

  var profileBio = document.createElement('div');
  profileBio.setAttribute('class', 'profilebio');
  colTwo.appendChild(profileBio);

  var bioText = document.createElement('p');
  profileBio.appendChild(bioText);

  return profile;
}
profileData();

var $view = document.querySelectorAll('.view');

function viewSwap(event) {
  if ($view[0].getAttribute('data-view') === event) {
    $view[0].className = 'view';
    $view[1].className = 'view hidden';
  } else if ($view[1].getAttribute('data-view') === event) {
    $view[1].className = 'view';
    $view[0].className = 'view hidden';
  }
  data.view = event;
}

viewSwap();
