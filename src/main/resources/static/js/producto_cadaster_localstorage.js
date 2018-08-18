//Fazendo armazenamento local
if (window.localStorage) {
  var textLivro = document.getElementById('livro');
  var textAutor = document.getElementById('autor');
  var textAno = document.getElementById('anopublicacao');
  var textIsbn = document.getElementById('isbn');
  //checar checkbox;

  var elForm = document.getElementById('submit');

  var elCheckDoacao = document.getElementById('checkdoacao');
  var elCheckTroca = document.getElementById('checktroca');
  var elCheckVenda = document.getElementById('checkvenda');        // Message

//
  textLivro.value = localStorage.getItem('livro');
  textAutor.value = localStorage.getItem('autor');
  textAno.value = localStorage.getItem('anopublicacao');
  textIsbn.value = localStorage.getItem('isbn');

  elForm.addEventListener('click', function functionName() {
    localStorage.setItem('livro', textLivro.value);
    localStorage.setItem('autor', textAutor.value);
    localStorage.setItem('anopublicacao', textAno.value);
    localStorage.setItem('isbn', textAno.value);

    if (elCheckDoacao.checked) {
        localStorage.setItem('anuncio', elCheckDoacao.value);
    }else if (elCheckTroca.checked) {
        localStorage.setItem('anuncio', elCheckTroca.value);
    }else {
      localStorage.setItem('anuncio', elCheckVenda.value);
    }
  },false);

}
