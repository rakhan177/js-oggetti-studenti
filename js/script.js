/*Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

// 1° parte

// dichiarazione variabili:
var studenti;
var studenteUtente = {};
var nome;
var cognome;
var eta;

// creo oggetto studente
var studente = {
  'nome': 'Matteo',
  'cognome': 'Meago',
  'eta': 32,
}

console.log('Proprietà studente:');

// ciclo oggetto studente per stampare proprietà
for(var key in studente){
  console.log('proprietà: ' + key + ', valore: ' + studente[key]);
}

// 2° parte

// creo arrayStudenti con oggetti studente
var arrayStudenti = [
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

console.log('Proprietà arrayStudenti:');

// ciclo arrayStudenti
for(var x = 0; x < arrayStudenti.length; x++){
  // ad ogni incremento apro ciclo for in che stampa proprietà oggetto
  for(var key2 in arrayStudenti[x]){
    console.log('proprietà: ' + key2 + ', valore: ' + arrayStudenti[x][key2])
  }
}

// 3° parte

// chiedo nome studente e verifico
nome = prompt('Inserisci nome studente.');
while(!isNaN(nome)){
  nome = prompt('Inserisci lettere please ;)...Nome?');
}

// chiedo cognome studente e verifico
cognome = prompt('Inserisci cognome studente.');
while(!isNaN(cognome)){
  cognome = prompt('Inserisci lettere please ;)...Cognome?');
}

// chiedo eta studente e verifico
eta = Number(prompt('Inserisci età studente.'));
while(isNaN(eta) || eta < 6 || eta >= 80){
  eta = Number(prompt('Inserisci un numero veritiero ;)'));
}

// assegno i prompt alle proprieta dell' oggetto
studenteUtente.nome = nome;
studenteUtente.cognome = cognome;
studenteUtente.eta = eta;

// pusho il nuovo oggetto nell' arrayStudenti
arrayStudenti.push(studenteUtente);

console.log('Proprietà Studente scelto dall\' utente:');
// ciclo studente utente e stampo proprietà:
for(var key3 in studenteUtente){
  console.log('proprietà: ' + key3 + ', valore: ' + studenteUtente[key3])
}

// ristampo tutti gli oggetti di arrayStudenti
console.log('arrayStudenti completo:')
for(var x = 0; x < arrayStudenti.length; x++){
  for(var key2 in arrayStudenti[x]){
    console.log('proprietà: ' + key2 + ', valore: ' + arrayStudenti[x][key2])
  }
}
