class List {
  constructor() {
    this.items = []
  }

  addItem(name, price) {
    let item = new Item(name, price)
    this.items.push(item)
  }

  render() {
    let rendered = []
    this.items.forEach(function(item, i) {
      rendered.push(`<li>${item.name} - $${item.price} <a href="#" class="add-cart" id="${i}">Add to Cart</a> </li>`)
    })
    return rendered.join("")
  }
}
