class Item{
  constructor(name, price){
    this.name = name
    this.price = price
  }

  renderListItem(){
    let template = `<li class="item">${this.name} - ${this.price}</li>`
    template += `<a href="#" data-name="${this.name}" data-price="${this.price}"`
    template += `class="add-cart">Add to cart</a><br>`
    return template
  }

  renderCartItem(){
    return `<li>${this.name} - ${this.price}</li>`
  }



}
