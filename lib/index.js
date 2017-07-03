$(function() {
    const list = new List()
    addListItem(list)
    removeListItem(list)
    //addToCart()
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

function removeListItem(list){
  console.log(list)
  $('.list').on("click", ".add-cart", function(event){
    event.preventDefault();
    let $name = $(event.target).data().name
    let $price = $(event.target).data().price
    list.removeItem($name, $price)
    $('.list').html(list.render())
  })
}

/*function addToCart(){

}*/
