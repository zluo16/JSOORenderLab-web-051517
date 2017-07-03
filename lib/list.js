class List {
  constructor(){
    this.items = []
  }

  addItem(name, price){
    const item = new Item(name, price)
    this.items.push(item)
  }

  removeItem(name, price){
    this.items = this.items.filter(item => {return item.name !== name && item.price !== price})
  }

  render(){
    return this.items.map(item => item.renderListItem() ).join('')
  }

}
