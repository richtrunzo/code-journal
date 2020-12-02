/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: 'username',
    fullName: 'name',
    location: 'location',
    avatarUrl: 'url',
    bio: 'bio'
  },
  entries: []
};

var previousData = localStorage.getItem('user-information');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('user-information', dataJSON);
});
