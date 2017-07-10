class Cart {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  render() {
    $('#cart').empty()
    let rendered = []
    this.items.forEach(item => {
      rendered.push(`<li>${item.name} - $${item.price} <a href="#" class="remove-from-cart" id="${i}">Remove from Cart</a> </li>`)
    })
    return rendered.join("")
  }

}
