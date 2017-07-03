$(function() {
    const list = new List()
    const cart = new Cart()
    addListItem(list)
    moveListItemToCart(list, cart)
});

function addListItem(list){
  $('button').on("click", function(){
    let $name = $('.name').val()
    let $price = $('.price').val()
    list.addItem($name, $price)
    $('.list').html(list.render())
    $('.name').val('')
    $('.price').val('')
  })
}

function moveListItemToCart(list, cart){
  $('.list').on("click", ".add-cart", function(event){
    event.preventDefault();
    let $name = $(event.target).data().name
    let $price = $(event.target).data().price
    list.removeItem($name, $price)
    $('.list').html(list.render())
    cart.addItem($name, $price)
    $('.cart').html(cart.render())
  })
}
