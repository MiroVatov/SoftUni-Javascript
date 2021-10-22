function notify(message) {

  let divNotification = document.getElementById('notification');
  divNotification.textContent = message;
  divNotification.style.display = "block";

  function hideMessage(e) {
    e.target.style.display = 'none';
  }

  divNotification.addEventListener('click', hideMessage);
}

