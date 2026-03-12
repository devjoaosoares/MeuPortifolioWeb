const buttonPicture = document.getElementById('profile-pic');
  const dialog = document.querySelector('dialog');

  buttonPicture.addEventListener('click', () => {
      dialog.showModal();
  });