/*Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

// 1° esercizio

var studente = {
  'nome': 'Matteo',
  'cognome': 'Meago',
  'eta': 32,
}

console.log('Proprietà studente:');

for(var key in studente){
  console.log('proprietà: ' + key + ', valore: ' + studente[key]);
}

// 2° esercizio

var arrayStudenti = [
  // 1° studente
  {
    'nome': 'Luigi',
    'cognome': 'Gennari',
  },{
    'nome': 'Paolo',
    'cognome': 'Rossi',
  },{
    'nome': 'Marco',
    'cognome': 'Verdi',
  },
];

var studenti;

console.log('Proprietà arrayStudenti:');

for(var x = 0; x < arrayStudenti.length; x++){
  studenti = arrayStudenti[x];
  for(var key2 in studenti){
    console.log('proprietà: ' + key2 + ', valore: ' + studenti[key2])
  }
}

// 3° esercizio

var studenteUtente = {};

studenteUtente.nome = prompt('Inserisci nome studente.');
studenteUtente.cognome = prompt('Inserisci cognome studente.');
studenteUtente.eta = prompt('Inserisci eta studente.');
arrayStudenti.push(studenteUtente);

console.log('Proprietà studente scelto dall\' utente:');

for(var key3 in studenteUtente){
  console.log('proprietà: ' + key3 + ', valore: ' + studenteUtente[key3])
}
