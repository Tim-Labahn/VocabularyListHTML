function displayMessage() {
  /** @ts-expect-error @type HTMLInputElement*/
  let themsg = document.getElementById('newVocName');
  let input = document.getElementById('showinputhere');
  if (input) {
    if (themsg) {
      input.innerHTML = themsg.value;
    } else {
      input.innerHTML = 'No message set';
    }
  }
}
