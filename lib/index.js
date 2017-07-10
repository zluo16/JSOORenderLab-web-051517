
// function listListener(){
//   $('button').on("click", function(){
//     let name = $('#name').val()
//     let price = $('#price').val()
//     let item = new Item(name, price)
//     $('.list').append(`<li class="item">${item.name} - ${item.price}  <a href="#" class="add-cart">Add to cart</a></li>`)
//     $('#name').val('')
//     $('#price').val('')
//     $('.add-cart').on('click', function() {
//       $('#cart').append(`<li class="item">${item.name} - ${item.price} </li>`)
//     })
//   })
// }
$(function() {
  const list = new List()
  const cart = new Cart()
  addToList(list)
  addToCart(list, cart)
})

function addToCart(list, cart) {
  $('.list').on('click', '.add-cart', function() {
    let item = list.items[parseInt(this.id)]
    cart.addItem(item)
    $('#cart').html(cart.render())
  })
}

function addToList(list) {
  $('button').on('click', function() {
    let name = $('#name').val()
    let price = $('#price').val()
    list.addItem(name, price)
    $('.list').html(list.render())
    $('#name').val()
    $('#price').val()
  })

}
