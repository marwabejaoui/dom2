let plusBtn = document.getElementsByClassName("btn-plus");
for(let plus of plusBtn){
    plus.addEventListener('click', function () {
        plus.nextElementSibling.value++;
        total()
    });
}

 let minusBtn = document.getElementsByClassName("btn-minus");
 for (let minus of minusBtn) {
     minus.addEventListener('click', function () {
         if (minus.previousElementSibling.value > 0) {
             minus.previousElementSibling.value--;
             total()
         }
     });
}
 

function total() {
    let productPrice = document.getElementsByClassName("product-price");
    let productQuantity = document.getElementsByClassName("quantity");
    let totalPrice = document.getElementById('prixtotal')
 
    let sum = 0;
    for (let i = 0; i < productPrice.length; i++) {
        sum += productPrice[i].innerText * productQuantity[i].value;
    }
    return totalPrice.innerText = sum;

}
let deleteBtn = document.querySelectorAll('.delete-btn');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
      deleteBtn[i].parentElement.parentElement.remove();
      total();
    });
}
let likeBtn = document.querySelectorAll('.like-btn');
let heartIcon = document.querySelectorAll('.like');
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function () {
    if (heartIcon[i].style.fill === 'black') {
     heartIcon[i].style.fill  = 'red';
    }
    else {
      heartIcon[i].style.fill  = 'black';
    }
  });
}