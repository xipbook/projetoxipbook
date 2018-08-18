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

  textLivro.addEventListener('input', function () {
      localStorage.setItem('livro', textLivro.value);
  }, false);

  textAutor.addEventListener('input', function () {
      localStorage.setItem('autor', textAutor.value);
  }, false);

  textAno.addEventListener('input', function () {
      localStorage.setItem('anopublicacao', textAno.value);
  }, false);

  textIsbn.addEventListener('input', function () {
      localStorage.setItem('isbn', textAno.value);
  }, false);

  elForm.addEventListener('click', function functionName() {
    if (elCheckDoacao.checked) {
        localStorage.setItem('anuncio', elCheckDoacao.value);
    }else if (elCheckTroca.checked) {
      localStorage.setItem('anuncio', elCheckTroca.value);
    }else {
      localStorage.setItem('anuncio', elCheckVenda.value);
    }
  },false);

}
