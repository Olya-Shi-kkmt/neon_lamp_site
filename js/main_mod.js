const shoppingCartButton = document.querySelector('#cart-button');
         modalWindow = document.querySelector('.modal_2');
         closeButton = document.querySelector('.close');
         OtmenaButton = document.querySelector('.button-otmena');
         var i =1;
         var order_price = 0;
const shoppingCartButton_log = document.querySelector('#cart-button_1');
         modalWindow_log = document.querySelector('.modal_1');
         closeButton_log = document.querySelector('.close_1');

     rollYgorMinus = document.querySelector('#roll_ygor_minus');
     rollYgorPlus = document.querySelector('#roll_ygor_plus');

     kaliforniaMinus = document.querySelector('#kalifornia_minus');
     kaliforniaPlus = document.querySelector('#kalifornia_plus');
     
     okinavaMinus = document.querySelector('#okinava_minus');
     okinavaPlus = document.querySelector('#okinava_plus');
     
     chezarMinus = document.querySelector('#chezar_minus');
     chezarPlus = document.querySelector('#chezar_plus');
     
     iasaiMakiMinus = document.querySelector('#iasai_maki_minus');
     iasaiMakiPlus = document.querySelector('#iasai_maki_plus');

     roll_s_krevetkoiMinus = document.querySelector('#roll_s_krevetkoi_minus');
     roll_s_krevetkoiPlus = document.querySelector('#roll_s_krevetkoi_plus');

 /*Счётчик блюд*/    
rollYgorMinus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("roll_ygor").innerText);
     if (i != 0){
          i--;  
     }
     document.getElementById('roll_ygor').innerText = i;
     OrderPrice()
});
rollYgorPlus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("roll_ygor").innerText);
     i++;
     document.getElementById('roll_ygor').innerText = i;
     OrderPrice()
});

kaliforniaMinus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("kalifornia").innerText);
     if (i != 0){
          i--;  
     }
     document.getElementById('kalifornia').innerText = i;
     OrderPrice()
});
kaliforniaPlus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("kalifornia").innerText);
     i++;
     document.getElementById('kalifornia').innerText = i;
     OrderPrice()
});

chezarMinus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("chezar").innerText);
     if (i != 0){
          i--;  
     }
     document.getElementById('chezar').innerText = i;
     OrderPrice()
});
chezarPlus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("chezar").innerText);
     i++;
     document.getElementById('chezar').innerText = i;
     OrderPrice()
});

okinavaMinus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("okinava").innerText);
     if (i != 0){
          i--;  
     }
     document.getElementById('okinava').innerText = i;
     OrderPrice()
});
okinavaPlus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("okinava").innerText);
     i++;
     document.getElementById('okinava').innerText = i;
     OrderPrice()
});

iasaiMakiMinus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("iasai_maki").innerText);
     if (i != 0){
          i--;  
     }
     document.getElementById('iasai_maki').innerText = i;
     OrderPrice()
});
iasaiMakiPlus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("iasai_maki").innerText);
     i++;
     document.getElementById('iasai_maki').innerText = i;
     OrderPrice()
});

roll_s_krevetkoiMinus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("roll_s_krevetkoi").innerText);
     if (i != 0){
          i--;  
     }
     document.getElementById('roll_s_krevetkoi').innerText = i;
     OrderPrice()
});
roll_s_krevetkoiPlus.addEventListener('click', function (event) {
     i = parseInt(document.getElementById("roll_s_krevetkoi").innerText);
     i++;
     document.getElementById('roll_s_krevetkoi').innerText = i;
     OrderPrice()
});
/* 
Лист блюд

0 рол с угрём 250
1 калифорния 390
2 окинава 450
3 цезарь 600
4 ясаи маки 300
5 рол с креветкой 550
*/

/*Подсчёт общей суммы заказа*/
function OrderPrice(){
     order_price = 250*document.getElementById("roll_ygor").innerText+
                    390*document.getElementById("kalifornia").innerText+
                    450*document.getElementById("okinava").innerText+
                    600*document.getElementById("chezar").innerText+
                    300*document.getElementById("iasai_maki").innerText+
                    550*document.getElementById("roll_s_krevetkoi").innerText;
     document.getElementById('Price').innerText = String(order_price) + ' ₽';
}

/*Просто */
makeOrder = document.querySelector('#make_order');
makeOrder.addEventListener('click', function (event) {
     alert("Спасибо за предзаказ! Ваш заказ будет выполнен, когда заработает сервис.")
});

/*модальное окно корзины*/
shoppingCartButton.addEventListener('click', function (event) {
     modalWindow.classList.add('modal-active')
});

OtmenaButton.addEventListener('click', function (ev) {
     modalWindow.classList.remove('modal-active')
});
closeButton.addEventListener('click', function (ev) {
     modalWindow.classList.remove('modal-active')
});


shoppingCartButton_log.addEventListener('click', function (event) {
    modalWindow_log.classList.add('modal-active')
});

closeButton_log.addEventListener('click', function (ev) {
    modalWindow_log.classList.remove('modal-active')
});