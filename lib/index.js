$(function() {
    const list = new List()
    const cart = new Cart()
    addListItem(list)
    moveListItemToCart(list, cart)
});

function addListItem(list){
  $('button').on("click", function(){
    let name = $('#name').val()
    let price = $('#price').val()
    list.addItem(name, price)
    $('.list').html(list.render())
    $('#name').val('')
    $('#price').val('')
  })
}

function moveListItemToCart(list, cart){
  $('.list').on("click", ".add-cart", function(event){
    event.preventDefault();
    let itemName = $(event.target).data().name
    let itemPrice = $(event.target).data().price
    list.removeItem(itemName, itemPrice)
    $('.list').html(list.render())
    cart.addItem(itemName, itemPrice)
    $('.cart').html(cart.render())
  })
}
