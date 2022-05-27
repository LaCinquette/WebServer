const signOutButton = document.getElementById('signout');
signOutButton.addEventListener("click", () => {
  fetch('/auth/signout', {
    method: 'POST',
  }).then((res) => {
    console.log(res);
    location.reload();
  });
})