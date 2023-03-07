 let cardGroup = document.getElementsByClassName('card-group')[0]
 let itensFormated = []

 let itensCart = [
    {
        titulo: 'Celular',
        imagem: './assets/celular.png',
        preco: 500,
    },
    {
        titulo: 'Capinhas',
        imagem: './assets/capinhas.png',
        preco: 20,
    },
    {
        titulo: 'Fones',
        imagem: './assets/fones.png',
        preco: 30,
    }
 ]

 function mountItens() {
    for(let i = 0; i < itensCart.length; i++) {
      let carde = document.createElement('div')
      carde.classList.add('card')
      cardGroup.appendChild(carde)

      let text = document.createElement('span')
      text.innerText = itensCart[i].titulo
      text.classList.add('titulo')
      carde.appendChild(text)

      let img = document.createElement('img')
      img.src = itensCart[i].imagem
      img.classList.add('imagem')
      carde.appendChild(img)

      let price = document.createElement('span')
      price.innerText = `R$ ${itensCart[i].preco},00`
      price.classList.add('preco')
      carde.appendChild(price)

      let btn = document.createElement('button')
      btn.addEventListener('click', function() { 
      addItem(itensCart[i]) // está chamando a função / addItem é o nome da função
      })
      btn.innerText = 'Adicionar'
      carde.appendChild(btn)    
    }

 }
 mountItens() // invocando a função 
  function addItem(item) { // está criando a função - o "item" é pra relacionar com o AddItem
  if (localStorage.getItem('carrinho')) {
    console.log('existe')
  } else {
    console.log("nao-existe")

  }
//     itensFormated.push(item)
//   console.log(item)
//   localStorage.setItem('carrinho', JSON.stringify(itensFormated));
  }
