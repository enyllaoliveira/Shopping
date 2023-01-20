 let cardGroup = document.getElementsByClassName('card-group')[0]
 
 let itensCart = [
    {
        titulo: 'celular',
        imagem: './assets/celular.png',
        preco: 500,
    },
    {
        titulo: 'capinhas',
        imagem: './assets/capinhas.png',
        preco: 20,
    },
    {
        titulo: 'fones',
        imagem: './assets/fones.png',
        preco: 30,
    }
 ]

 function mountCart() {
    for(let i = 0; i < itensCart.length; i++) {
      console.log(itensCart[i])
      let card = document.createElement('div')
      card.classList.add('card')
      cardGroup.appendChild(card)
    }
 }
 mountCart()