$(function() {
    addListItem()
    //removeListItem()
    //addToCart()
});

function addListItem(){
  const list = new List()
  $('button').on("click", function(){
    let $name = $('.name').val()
    let $price = $('.price').val()
    list.addItem($name, $price)
    $('.list').html(list.render())
    $('.name').val('')
    $('.price').val('')
  })
}

/*function removeListItem(){
  
}

function addToCart(){
 
}*/
