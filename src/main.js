const vocabularyList = [];

function addToList() {
  /** @ts-expect-error @type HTMLInputElement*/
  const nameInput = document.getElementById('newVocName');
  /** @ts-expect-error @type HTMLInputElement*/
  const definitionInput = document.getElementById('newVocDef');

  vocabularyList.push({ name: nameInput.value, definition: definitionInput.value });
  // showList();
}

function showList() {
  const list = document.querySelector('.VocableList');
  if (list) {
    const tr = document.createElement('tr');
    if (tr) {
      list.appendChild(tr);
      for (let i = 0; i < vocabularyList.length; i++) {
        const td = document.createElement('td');
        td.innerHTML = vocabularyList[1].name + vocabularyList[1].definition;
        tr.appendChild(td);
      }
    }
  }
}
