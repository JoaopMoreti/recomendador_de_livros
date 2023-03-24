function recomendar() {
  const recomendação = document.querySelector('div#recomenda')
  const select = document.getElementsByName('radio_genero')
  let genero_escolhido = ''
  let img1 = document.createElement('img')
  img1.setAttribute('id', 'capa')/* .setAttribute('atributo','valor ou conteúdo que irá ficar dentro do atributo') tambem é possivel usar o setAttribute('atributo','valor/conteudo') desse jeito para criar um atributo e colocar algo dentro dele   ') */
  let img2 = document.createElement('img')
  img2.setAttribute('id', 'capa')
  let img3 = document.createElement('img')
  img3.setAttribute('id', 'capa')
  let img4 = document.createElement('img')
  img4.setAttribute('id', 'capa')

  if (select[0].checked) { /* o nomedavariavel[nº].checked serve para indicarmos que será realizado algo com o valor que foi selecionado  */
    genero_escolhido = 'fantasia'
    img1.setAttribute('src', './imagens/harry.jpg') /* .setAttribute('atributo','valor ou conteúdo que irá ficar dentro do atributo') tambem é possivel usar o setAttribute('atributo','valor/conteudo') desse jeito para criar um atributo e colocar algo dentro dele   ') */
    img2.setAttribute('src','./imagens/narnia.jpg')
    img3.setAttribute('src','./imagens/percy.jpg')
    img4.setAttribute('src','./imagens/tmi.png')
  } else if (select[1].checked) {
    genero_escolhido = 'ficção cientifica'
    img1.setAttribute('src', './imagens/blade.jpg')
    img2.setAttribute('src','./imagens/eurobo.jpg')
    img3.setAttribute('src','./imagens/Jogos-Vorazes.jpg')
    img4.setAttribute('src','./imagens/ancilar.jpg')
  } else if (select[2].checked){
    genero_escolhido = 'terror'
    img1.setAttribute('src','./imagens/dracula.jpg')
    img2.setAttribute('src','./imagens/coisa.jpg')
    img3.setAttribute('src','./imagens/cthulhu.jpg')
    img4.setAttribute('src','./imagens/frank.jpg')
  } else if (select[3].checked){
    genero_escolhido = 'criminal'
    img1.setAttribute('src','./imagens/ninguem.jpg')
    img2.setAttribute('src','./imagens/giz.jpg')
    img3.setAttribute('src','./imagens/sherlock.jpg')
    img4.setAttribute('src','./imagens/silencio.png')
  } else if (select[4].checked){
    genero_escolhido = 'romantico'
    img1.setAttribute('src','./imagens/verdadeiros.jpg')
    img2.setAttribute('src','./imagens/preconceito.jpg')
    img3.setAttribute('src','./imagens/diario.jpg')
    img4.setAttribute('src','./imagens/estrelas.png')
  } else if (select[5].checked){
    genero_escolhido = 'nao-ficcao'
    img1.setAttribute('src','./imagens/calcuta.jpg')
    img2.setAttribute('src','./imagens/fisica.jpg')
    img3.setAttribute('src','./imagens/jornada.png')
    img4.setAttribute('src','./imagens/gastronomia.jpg')
  }
  recomendação.innerHTML = `Para ${genero_escolhido} recomendamos os seguintes titulos:`
  recomendação.appendChild(img1)
  recomendação.appendChild(img2)
  recomendação.appendChild(img3)
  recomendação.appendChild(img4)
}
