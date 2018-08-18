
var xhr = new XMLHttpRequest();

xhr.onload = function() {
  var response = xhr.responseXML;
  var livro = response.getElementsByTagName('detalhe');
  var list, newListHTML;
  lista = document.createElement('ul');



  for (var i = 0; i < livro.length; i++) {


	var item, container,image, paragrafeHTML, newline;
  var newParagrafeHTML, newConteinerHTML, newItemHTML, controleHTML,newListHTML;//variaveis para manipular o acordeal da descricao;

	item = document.createElement('li');
	container = document.createElement('div');
	container.className = 'event';
  //---------------------acordeao--------------------//
  //craição dos eleementos para manipular o acordea
  newParagrafeHTML = document.createElement('p');
  newConteinerHTML = document.createElement('div');
  newConteinerHTML.className ='accordion-panel';
  newItemHTML = document.createElement('li');
  controleHTML = document.createElement('button');
  controleHTML.className = 'accordion-control';
  controleHTML.appendChild(document.createTextNode('Descrição'));
  newListHTML = document.createElement('ul');
  newListHTML.className = 'accordion';

  newParagrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'descricao')));
  newConteinerHTML.appendChild(newParagrafeHTML);
  newItemHTML.appendChild(controleHTML);
  newItemHTML.appendChild(newConteinerHTML);
  newListHTML.appendChild(newItemHTML);
//caregando imagem no conteiner
    image = document.createElement('img');
    image.setAttribute('src', getNodeValue(livro[i], 'map'));
    image.setAttribute('alt', getNodeValue(livro[i], 'autor'));
    container.appendChild(image);
//criando elemento html no DOM
    paragrafeHTML = document.createElement('p');
    newline1 = document.createElement('br');
	  newLine2 = document.createElement('br');
    newline3 = document.createElement('br');
    newline4 = document.createElement('br');
    newline5 = document.createElement('br');
    newline6 = document.createElement('br');
//criando um no de texto com com dados do autor
    paragrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'autor')));
    paragrafeHTML.appendChild(newline1);
//criando um no de texto com com dados do titulo
    paragrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'titulo')));
    paragrafeHTML.appendChild(newLine2);
//criando um no de texto com com dados da data
    paragrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'date')));
    container.appendChild(paragrafeHTML);
    paragrafeHTML.appendChild(newline3);
    paragrafeHTML.appendChild(newline4);
//criando um no de texto com com dados do categoria
    paragrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'categoria')));
    container.appendChild(paragrafeHTML);
    paragrafeHTML.appendChild(newline5);
//criando um no de texto com com dados do anuncio
    paragrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'anuncio')));
    container.appendChild(paragrafeHTML);
    paragrafeHTML.appendChild(newline6);
////criando um no de texto com com dados do codigo
    paragrafeHTML.appendChild(document.createTextNode(getNodeValue(livro[i], 'codigo')));
//carregando o paragrafo no conteiner
    container.appendChild(paragrafeHTML);
//carregando a acao no conteiner
    doacao = document.createElement('img');
    doacao.setAttribute('id', 'doacao');
    doacao.setAttribute('src', getNodeValue(livro[i], 'acao'));
    doacao.setAttribute('alt', getNodeValue(livro[i], 'autor'));
    container.appendChild(doacao);

    //addciona a nova lista ao conteiner;
        container.appendChild(newListHTML);

//carregando o conteiner no item da lista;
	  item.appendChild(container); //-------------------> Aqui que vai ter que ser carregada uma nova lista que aramazenará o acordeao;
//carregando o item na lista;
	  lista.appendChild(item);
//carregando a subarvore DOM no html;
    document.getElementById('content').appendChild(lista);

  }

  function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }
};

xhr.open('GET', 'data/dados.xml', true);
xhr.send(null);
