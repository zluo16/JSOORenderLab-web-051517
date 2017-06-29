$(function() {
    listListener()
});

function listListener(){
  $('button').on("click", function(){
    let $name = $('.name').val()
    let $price = $('.price').val()
    $('.list').append(`<li class="item">${$name} - ${$price}</li><a href="#" class="add-cart">Add to cart</a><br>`)
    $('.name').val('')
    $('.price').val('')
  })
}
