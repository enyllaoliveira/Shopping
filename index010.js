 let cardGroup = document.getElementsByClassName('card-group')[0]
 let itensFormated = []

 let products = [
    {
        id: 1,
        titulo: 'Celular',
        imagem: './assets/celular.png',
        preco: 500,
        quantidade: 1
    },
    {
        id:2,
        titulo: 'Capinhas',
        imagem: './assets/capinhas.png',
        preco: 20,
        quantidade: 1
    },
    {
        id:3,
        titulo: 'Fones',
        imagem: './assets/fones.png',
        preco: 30,
        quantidade: 1
    }
 ]

 function mountItens() {
    for(let i = 0; i < products.length; i++) {
      let carde = document.createElement('div')
      carde.classList.add('card')
     
      let text = document.createElement('span')
      text.innerText = products[i].titulo
      text.classList.add('titulo')
      carde.appendChild(text)

      let img = document.createElement('img')
      img.src = products[i].imagem
      img.classList.add('imagem')
      carde.appendChild(img)

      let price = document.createElement('span')
      price.innerText = `R$ ${products[i].preco},00`
      price.classList.add('preco')
      carde.appendChild(price)

      let btn = document.createElement('button');
      btn.addEventListener('click', function() { 
      addItem(products[i]); // está chamando a função / addItem é o nome da função
      btn.innerText = "Adicionado ao carrinho"
      })
      btn.innerText = 'Adicionar' 
      carde.appendChild(btn)    
      cardGroup.appendChild(carde) 
    }
 }


 mountItens() // invocando a função - está montando cada card e adicionando como o filho do cardGroup (linha 54)


  function addItem(itemCart) { // está criando a função - o "item" é pra relacionar com o AddItem - o item é um parâmetro da funçao que fica disponível p todo escopo de AddItem
    let itensClicados = [itemCart] 
    if (localStorage.getItem('carrinho')) {
      let getItensLocalStorage = JSON.parse(localStorage.getItem('carrinho'))
      let existe = getItensLocalStorage.findIndex(item => item.id === itemCart.id)
    if (existe != -1) {
      getItensLocalStorage[existe].quantidade += 1
    } else {
      getItensLocalStorage = [...getItensLocalStorage, itemCart]
    }
      localStorage.setItem('carrinho', JSON.stringify(getItensLocalStorage))
      /* VERIFICAR SE ITEM QUE ESTÁ SENDO CLICADO É IGUAL AO EXISTENTE NO CARRINHO*/
      } else {
      localStorage.setItem('carrinho', JSON.stringify(itensClicados)) 
    }
  }

  

