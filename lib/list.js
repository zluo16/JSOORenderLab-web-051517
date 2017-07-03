class List {
  constructor(){
    this.items = []
  }

  addItem(name, price){
    const item = new Item(name, price)
    this.items.push(item)
  }

  removeItem(name, price){
    return this.items.filter(this.filterOut(name, price))
  }

  filterOut(name, price){
  for (var i = 0; i < this.items.length; i++){
    if(this.items[i].name === name && this.items[i].price === price){
      return false
    }
  }
  return true
}

  render(){
    return this.items.map(item => item.render() ).join('')
  }

}