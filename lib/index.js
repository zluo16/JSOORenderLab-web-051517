$(function() {
    listListener()
});

function listListener(){
  $('button').on("click", function(){
    let $name = $('.name').val()
    let $price = $('.price').val()
    $('.list').append(`<li>${$name} - ${$price}`)
  })
}
