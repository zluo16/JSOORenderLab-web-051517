$(function() {
    listListener()
});

function listListener(){
  $('button').on("click", function(){
    let name = $('#name').val()
    let price = $('#price').val()
    $('.list').append(`<li class="item">${name} - ${price}  <a href="#" class="add-cart">Add to cart</a></li>`)
    $('#name').val('')
    $('#price').val('')
  })
}
