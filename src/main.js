const vocabularyList = [];

function addToList() {
  /** @ts-expect-error @type HTMLInputElement*/
  const nameInput = document.getElementById('newVocName');
  /** @ts-expect-error @type HTMLInputElement*/
  const definitionInput = document.getElementById('newVocDef');
  vocabularyList.push({ name: nameInput.value, definition: definitionInput.value });
  renderList();
}
function renderList(postionToEdit) {
  const list = document.querySelector('.VocabularyList');
  if (list) {
    list.innerHTML = '';
    for (let i = 0; i < vocabularyList.length; i++) {
      //--------------------------------------
      const tr = document.createElement('tr');
      const deltd = document.createElement('td');
      const deftd = document.createElement('td');
      const nametd = document.createElement('td');
      //--------------------------------------
      list.appendChild(tr);
      tr.appendChild(nametd);
      tr.appendChild(deftd);
      tr.appendChild(deltd);
      if (postionToEdit !== i) {
        const edittd = document.createElement('td');
        const delButton = document.createElement('button');
        const editButton = document.createElement('button');
        delButton.onclick = () => deleteVocabulary(i);
        editButton.onclick = () => editVocabulary(i);
        delButton.innerText = 'Delete';
        editButton.innerText = 'Edit';
        nametd.innerHTML = vocabularyList[i].name;
        deftd.innerHTML = vocabularyList[i].definition;
        deltd.appendChild(delButton);
        edittd.appendChild(editButton);
        tr.appendChild(edittd);
      } else {
        const newName = document.createElement('input');
        const newDefinition = document.createElement('input');
        newName.className = 'newName';
        newName.value = vocabularyList[i].name;
        newDefinition.value = vocabularyList[i].definition;
        newDefinition.className = 'newDefinition';
        nametd.appendChild(newName);
        deftd.appendChild(newDefinition);
        const safeButton = document.createElement('button');
        safeButton.onclick = () => safeEdit(i);
        safeButton.innerText = 'Safe';
        deltd.appendChild(safeButton);
      }
    }
  }
}
function deleteVocabulary(position) {
  vocabularyList.splice(position, 1);
  renderList();
}
function editVocabulary(position) {
  renderList(position);
}
function safeEdit(position) {
  /** @ts-expect-error @type HTMLInputElement*/
  const newNameInput = document.querySelector('.newName');
  /** @ts-expect-error @type HTMLInputElement*/
  const newDefinitionInput = document.querySelector('.newDefinition');
  if (newNameInput.value === '' || newDefinitionInput.value === '') return;
  vocabularyList[position].name = newNameInput.value;
  vocabularyList[position].definition = newDefinitionInput.value;
  renderList();
}
function search()
