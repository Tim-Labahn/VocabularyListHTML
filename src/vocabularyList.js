const prompt = require('prompt-sync')({ sigint: true });

const vocabularyList = [];
//-------------------------------------------------------------------------
function showList(arr) {
  console.log('Inventory stores:', arr.length, 'items');
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1 + '.', arr[i].word, '-', arr[i].definition);
  }
}

function addNewVocable(word, definition) {
  vocabularyList.push({ word, definition });
}

//----------------------------------------------------------------------
while (true) {
  console.log('-------------------------------------------------------------------');
  console.log('Your options: A- add, D- delete, S- Show list, C- Change definition');
  const event = prompt('What is your choice?').toUpperCase();

  if (event === 'A') {
    let name = prompt('What do you wanna add?');
    let definition = prompt('What is the definition?');
    addNewVocable(name, definition);
  } else if (event === 'S') {
    showList(vocabularyList);
  } else if (event === 'D') {
    showList(vocabularyList);
    let deleteItem = prompt('Enter the name of what you want to delete?');
    // let index = findWordIndex(deleteItem);

    let index = vocabularyList.findIndex((a, i) => a.word === deleteItem || i + 1 === +deleteItem);
    if (index !== -1) {
      vocabularyList.splice(index, 1);
    } else {
      console.log('Word is not found in the vocabulary list.');
    }
  } else if (event === 'C') {
    showList(vocabularyList);
    let changeItem = prompt('Enter the name of what you want to Change?');
    let index = vocabularyList.findIndex((a, i) => a.word === changeItem || i + 1 === +changeItem);
    if (index !== -1) {
      let name = prompt('What do you wanna Name it?');
      let definition = prompt('What is the definition?');
      vocabularyList[index] = { word: name, definition: definition };
    } else {
      console.log('Word not found in the vocabulary list.');
    }
  } else {
    console.log('Invalid choice. Please try again.');
  }
}
