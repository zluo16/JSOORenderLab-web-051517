class List {
  constructor(){
    this.items = []
  }

  addItem(name, price){
    const item = new Item(name, price)
    this.items.push(item)
  }

  render(){
    return this.items.map(item => item.render() ).join('')
  }

}