let itens = JSON.parse(localStorage.getItem('carrinho'))
let itensContainer = document.getElementsByClassName('itens-container')[0]

if (itens === null || itens.length === 0) {
  setTextEmpty()
} else {
  loudCar()
}

function setTextEmpty() {
  itensContainer.innerText = "Seu carrinho está vazio"
}

function loudCar() {
for(let i = 0; i < itens.length; i++) {
    let div = document.createElement('div')
    div.classList.add('item')
    let hr = document.createElement('hr')
    let img = document.createElement('img')
      img.src = itens[i].imagem
      img.classList.add('img-cart')

      let text = document.createElement('span')
      text.innerText = itens[i].titulo
      text.classList.add('text-cart')

      let price = document.createElement('span')
      price.innerText = 'R$ ' + itens[i].preco + ',00'
      price.classList.add('price-cart')

      let quant = document.createElement('div')
      quant.classList.add('quant-group')

      let btn = document.createElement('button')
      btn.textContent = '-'
      btn.classList.add('btn-quant')
      btn.addEventListener('click', function(){updateQuant(false,i)})  
      quant.appendChild(btn)


      let valor = document.createElement('span')
      valor.classList.add('valor-quant')
      valor.innerText = itens[i].quantidade
      quant.appendChild(valor)

      let btn2 = document.createElement('button')
      btn2.textContent = '+'
      btn2.classList.add('btn-quant')
      btn2.addEventListener('click', function(){updateQuant(true,i)})  
      quant.appendChild(btn2)

      let sum = (itens[i].preco * itens[i].quantidade)

      let total = document.createElement('span')
      total.classList.add('valor-total')
      total.textContent = 'R$' + sum + ',00'

      let imgTrash = document.createElement('img')
        imgTrash.src = 'trash.png'
        imgTrash.classList.add('imgTrash-cart')
      imgTrash.addEventListener('click', function() {
        deleteItem(i)
      })   

      div.appendChild(img) 
      div.appendChild(text) 
      div.appendChild(price)
      div.appendChild(quant)    
      div.appendChild(total)
      div.appendChild(imgTrash) 
      itensContainer.appendChild(hr) 
      itensContainer.appendChild(div)
}                          
}

function deleteItem(item) {
  itens.splice(item, 1)
    document.getElementsByClassName('item')[item].style.display = 'none';
    document.getElementsByTagName('hr')[item].style.display = 'none';    
    localStorage.setItem('carrinho', JSON.stringify(itens)) 
    if (itens.length === 0) {
      setTextEmpty()
    }
}

function updateQuant(isSum, item) {
  let value = Number(document.getElementsByClassName('valor-quant')[item].innerText) 

  if(isSum) {
    value +=1
    itens[item].quantidade +=1
    document.getElementsByClassName('valor-quant')[item].innerText = value
    total = (itens[item].preco * itens[item].quantidade)
    document.getElementsByClassName('valor-total')[item].innerText = "R$ " + total + " ,00"

    localStorage.setItem('carrinho', JSON.stringify(itens))
  } else if(value <= 1) {
    deleteItem(item)
  }
  else {
    value -=1
    itens[item].quantidade -=1
    document.getElementsByClassName('valor-quant')[item].innerText = value
    total = (itens[item].preco * itens[item].quantidade)
    document.getElementsByClassName('valor-total')[item].innerText = "R$ " + total + " ,00"
    localStorage.setItem('carrinho', JSON.stringify(itens))  }
}

