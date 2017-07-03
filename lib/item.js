class Item{
  constructor(name, price){
    this.name = name
    this.price = price
  }

  render(){
    let template = `<li class="item">${this.name} - ${this.price}</li>`
    template += `<a href="#" class="add-cart">Add to cart</a><br>`
    return template
  }

}