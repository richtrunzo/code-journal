var $avatarInput = document.querySelector('.avatar');
var $imagePlaceholder = document.querySelector('.image-placeholder');

$avatarInput.addEventListener('input', function (event) {
  var $avatarValue = $avatarInput.value;
  $imagePlaceholder.src = $avatarValue;

});

var $form = document.querySelector('.form-one');
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
  viewSwap('profile');
});

function profileRender(view) {
  var profile = document.createElement('div');
  profile.setAttribute('class', 'view');
  profile.setAttribute('data-view', 'profile');
  // var header = document.createElement('header');
  // profile.appendChild(header);
  // var codeJournal = document.createElement('h3');
  // var codeJournalText = document.createTextNode('Code Journal');
  // codeJournal.appendChild(codeJournalText);
  // header.appendChild(codeJournal);
  var rowOne = document.createElement('div');
  rowOne.setAttribute('class', 'row-one row-one-profile');
  profile.appendChild(rowOne);
  var colOne = document.createElement('div');
  colOne.setAttribute('class', 'col-one-row-one');
  rowOne.appendChild(colOne);

  var profileName = document.createElement('h3');
  profileName.setAttribute('class', 'profile-header');
  var profileNameText = document.createTextNode(data.profile.fullName);
  profileName.appendChild(profileNameText);

  colOne.appendChild(profileName);

  var image = document.createElement('img');
  image.setAttribute('class', 'image-placeholder profileimage');
  image.src = data.profile.avatarUrl;

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
  var usernameText = document.createTextNode(data.profile.username);
  username.appendChild(usernameText);
  profileUser.appendChild(username);

  var profileLocation = document.createElement('div');
  profileLocation.setAttribute('class', 'profilelocation');
  colTwo.appendChild(profileLocation);

  var locationIcon = document.createElement('i');
  locationIcon.setAttribute('class', 'fas fa-compass');
  profileLocation.appendChild(locationIcon);

  var locationName = document.createElement('p');
  var locationNameText = document.createTextNode(data.profile.location);
  locationName.appendChild(locationNameText);
  profileLocation.appendChild(locationName);

  var profileBio = document.createElement('div');
  profileBio.setAttribute('class', 'profilebio');
  colTwo.appendChild(profileBio);

  var bioText = document.createElement('p');
  var bioTextGraf = document.createTextNode(data.profile.bio);
  bioText.appendChild(bioTextGraf);
  profileBio.appendChild(bioText);

  var button = document.createElement('button');
  var link = document.createElement('a');
  var linkText = document.createTextNode('EDIT');
  link.appendChild(linkText);
  link.setAttribute('data-view', 'edit-profile');
  link.setAttribute('href', '#');
  link.setAttribute('class', 'edit-button');
  button.setAttribute('class', 'edit-button');
  button.appendChild(link);
  colTwo.appendChild(button);

  return profile;
}

var $view = document.querySelectorAll('.view');

function viewSwap(view) {
  if ($view[0].getAttribute('data-view') === view) {
    $view[0].className = 'view';
    $view[1].className = 'view hidden';
    $view[1].innerHTML = '';
    $view[2].className = 'view hidden';
    $view[3].className = 'view hidden create-entry';
  } else if ($view[1].getAttribute('data-view') === view) {
    $view[0].className = 'view hidden';
    $view[1].className = 'view';
    $view[2].className = 'view hidden';
    $view[3].className = 'view hidden create-entry';
    $view[1].appendChild(profileRender(data));
    $username.value = data.profile.username;
    $fullName.value = data.profile.fullName;
    $imagePlaceholder.src = data.profile.avatarUrl;
    $location.value = data.profile.location;
    $bio.value = data.profile.bio;
  } else if ($view[2].getAttribute('data-view') === view) {
    $view[0].className = 'view hidden';
    $view[1].className = 'view hidden';
    $view[1].innerHTML = '';
    $view[2].className = 'view';
    $view[3].className = 'view hidden create-entry';
  } else if ($view[3].getAttribute('data-view') === view) {
    $view[0].className = 'view hidden';
    $view[1].className = 'view hidden';
    $view[1].innerHTML = '';
    $view[2].className = 'view hidden';
    $view[3].className = 'view create-entry';
  }
  data.view = event;
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (data.profile.username === 'username') {
    viewSwap('edit-profile');
  } else {
    viewSwap('profile');
  }
});

var $link = document.getElementsByTagName('a');

document.addEventListener('click', function (event) {
  if (event.target === $link[0] && $view[1].className !== 'view' && data.profile.username !== 'username') {
    viewSwap('profile');
  } else if (event.target === $link[2] && event.target.className !== 'create-button') {
    viewSwap('edit-profile');
  } else if (event.target === $link[1] && data.profile.username !== 'username') {
    viewSwap('entries');
  } else if (event.target === $link[2] && event.target.className === 'create-button') { viewSwap('create-entry'); }
});

var $entryImageInput = document.querySelector('.entry-image-input');
var $entryImage = document.querySelector('.entry-image');

$entryImageInput.addEventListener('input', function (event) {
  var $entryValue = $entryImageInput.value;
  $entryImage.src = $entryValue;
});

// var $entrySave = document.querySelector('.entry-save');

var $formEntry = document.querySelector('.form-two');
var $titleInput = document.querySelector('.title-input');
var $notes = document.querySelector('.notes-text');

$formEntry.addEventListener('submit', function (event) {
  var entryData = {
    entryImage: 'image-url',
    entryTitle: 'entry-title',
    notes: 'notes'
  };
  entryData.entryImage = $entryImageInput.value;
  entryData.entryTitle = $titleInput.value;
  entryData.notes = $notes.value;
});
