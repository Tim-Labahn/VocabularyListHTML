const vocabularyList = [];

function addToList() {
  /** @ts-expect-error @type HTMLInputElement*/
  const nameInput = document.getElementById('newVocName');
  /** @ts-expect-error @type HTMLInputElement*/
  const definitionInput = document.getElementById('newVocDef');
  vocabularyList.push({ name: nameInput.value, definition: definitionInput.value });
  showList();
}
function showList() {
  const list = document.querySelector('.VocabularyList');
  if (list) {
    list.innerHTML = '';
    for (let i = 0; i < vocabularyList.length; i++) {
      //--------------------------------------
      const tr = document.createElement('tr');
      const deftd = document.createElement('td');
      const deltd = document.createElement('td');
      const edittd = document.createElement('td');
      const nametd = document.createElement('td');
      const delButton = document.createElement('button');
      const editButton = document.createElement('button');
      //--------------------------------------
      delButton.onclick = () => deleteVocabulary(i);
      editButton.onclick = () => editVocabulary(i);
      delButton.innerText = 'Delete';
      editButton.innerText = 'Edit';
      nametd.innerHTML = vocabularyList[i].name;
      deftd.innerHTML = vocabularyList[i].definition;
      list.appendChild(tr);
      tr.appendChild(nametd);
      tr.appendChild(deftd);
      tr.appendChild(deltd);
      tr.appendChild(edittd);
      deltd.appendChild(delButton);
      edittd.appendChild(editButton);
    }
  }
}
function deleteVocabulary(position) {
  // let delPosition = 0;
  vocabularyList.splice(position, 1);
  showList();
}
function editVocabulary(position) {
  // let delPosition = 0;
  vocabularyList.splice(position, 1);
  showList();
}
