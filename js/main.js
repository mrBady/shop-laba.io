// Массив КАТАЛОГА товаров
let catalogArr = [
   {
      title: "iPhone 14 Pro",
      price: 1100,
      desc: "Смартфон Apple iPhone 14 Pro 128GB",
      img: "img/1.jpg",
   },
   {
      title: "iPhone 14 Pro",
      price: 1100,
      desc: "Смартфон Apple iPhone 14 Pro 128GB",
      img: "img/1.jpg",
   },
   {
      title: "iPhone 14 Pro",
      price: 1100,
      desc: "Смартфон Apple iPhone 14 Pro 128GB",
      img: "img/1.jpg",
   },
   {
      title: "iPhone 14 Pro",
      price: 1100,
      desc: "Смартфон Apple iPhone 14 Pro 128GB",
      img: "img/1.jpg",
   },
   {
      title: "iPhone 14 Pro",
      price: 1100,
      desc: "Смартфон Apple iPhone 14 Pro 128GB",
      img: "img/1.jpg",
   },
   {
      title: "iPhone 14 Pro",
      price: 1100,
      desc: "Смартфон Apple iPhone 14 Pro 128GB",
      img: "img/1.jpg",
   },
   {
      title: "AirPods Pro asda",
      price: 300,
      desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
      img: "img/2.jpg",
   },
   {
      title: "AirPods Pro asda",
      price: 300,
      desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
      img: "img/2.jpg",
   },
   {
      title: "AirPods Pro asda",
      price: 300,
      desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
      img: "img/2.jpg",
   },
   {
      title: "AirPods Pro asda",
      price: 300,
      desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
      img: "img/2.jpg",
   },
   {
      title: "AirPods Pro asda",
      price: 300,
      desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
      img: "img/2.jpg",
   },
   {
      title: "Чехол iPhone 14 Pro",
      price: 40,
      desc: "Чехол для Apple iPhone 14 Pro - желтый",
      img: "img/3.jpg",
   },
   {
      title: "Чехол iPhone 14 Pro",
      price: 40,
      desc: "Чехол для Apple iPhone 14 Pro - желтый",
      img: "img/3.jpg",
   },
   {
      title: "Чехол iPhone 14 Pro",
      price: 40,
      desc: "Чехол для Apple iPhone 14 Pro - желтый",
      img: "img/3.jpg",
   },
   {
      title: "Чехол iPhone 14 Pro",
      price: 40,
      desc: "Чехол для Apple iPhone 14 Pro - желтый",
      img: "img/3.jpg",
   },
];

let shopArr = []
// Функция создания карточки с товаром 
function createCardItem(catalog){
   let itemWrapper = document.createElement("div")
   let imageWrapper = document.createElement("div")
   let image = document.createElement("img")
   let titleItem = document.createElement("h3")
   let descriptionItem = document.createElement("p")
   let priceItem = document.createElement("div")
   let buttonAdd = document.createElement("button")

   itemWrapper.classList.add("cards-product__card-item", "card-item")
   imageWrapper.classList.add("card-item__img")
   
   titleItem.classList.add("card-item__title")
   descriptionItem.classList.add("card-item__description")
   priceItem.classList.add("card-item__price")
   buttonAdd.classList.add("card-item__button-add")


   buttonAdd.type = "button"
   image.alt = "Изображение товара"

   image.src = catalog.img
   titleItem.textContent = catalog.title
   descriptionItem.textContent = catalog.desc
   priceItem.textContent = catalog.price +" $"
   buttonAdd.textContent = "+ В корзину"

   buttonAdd.onclick = function(){
      shopArr.push(catalog)
      renderCard(shopArr)
   }
   //==========
   document.querySelector(".catalog__product-cards").append(itemWrapper)
   itemWrapper.append(imageWrapper,titleItem,descriptionItem,priceItem,buttonAdd)
   imageWrapper.append(image)

   return itemWrapper;
}

// Функция для создания рендера католога
let productsCatalog = document.querySelector(".catalog__product-cards") 

// Функция отрисовки КАТАЛОГА
function renderCatalog(arr) {
  productsCatalog.innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    productsCatalog.append(createCardItem(arr[i]))
  }
}

// Отрисовка КАТАЛОГА при первой загрузке страницы
renderCatalog(catalogArr)

// Клик для img для открытие карзины и списка
let imgTag = document.querySelector(".shopping-cart__button-card");
let img = document.getElementById("img-hover");
let item = document.querySelector(".shopping-cart__list");
let buttonBay = document.querySelector(".shopping-cart__button-bay")
let cardList = document.querySelector(".shopping-cart__cards-list")

imgTag.addEventListener('click', function () {
   if (item.classList.contains("hiden")) {
      img.src = 'img/close.svg'; // Изменяем на новое изображение при клике
      item.classList.remove("hiden");
      item.classList.add("open");
      buttonBay.classList.add("open");
      buttonBay.classList.remove("hiden");
   } else {
      img.src = 'img/basket.svg'; // Восстанавливаем исходное изображение при следующем клике
      item.classList.remove("open");
      item.classList.add("hiden");
      buttonBay.classList.add("hiden");
      buttonBay.classList.remove("open");
   }
});
// Функция создания списка покупок 
function createShopItem(index, catalog){
   let listItem = document.createElement("li")
   let imageWrapper = document.createElement("div")
   let image = document.createElement("img")
   let textWrapper = document.createElement("div")
   let titleItem = document.createElement("h3")
   let descriptionItem = document.createElement("p")
   let priceItem = document.createElement("div")
   let buttonRemove = document.createElement("button")

   listItem.classList.add("list__item","item")
   imageWrapper.classList.add("item__img")
   textWrapper.classList.add("item__text")
   titleItem.classList.add("item__title")
   descriptionItem.classList.add("item__description")
   priceItem.classList.add("item__price")
   buttonRemove.classList.add("item__button-remove")

   image.src = catalog.img
   titleItem.textContent = catalog.title
   priceItem.textContent = catalog.price +" $"
   buttonRemove.textContent = "Удалить"
   buttonRemove.onclick = function(){
      shopArr.splice(index, 1)
      renderCard(shopArr) // Запускаем перерисовку корзины
   }


   listItem.append(imageWrapper,textWrapper,buttonRemove)
   imageWrapper.append(image)
   textWrapper.append(titleItem,priceItem)

   return listItem
}

let shopCatalog = document.querySelector(".shopping-cart__list") 
// Рендер корзины 
function renderCard(arr){
   shopCatalog.innerHTML = ""
   if (arr.length === 0){
      emptyList = document.createElement("li")
      emptyList.classList.add("list__empty")
      emptyList.textContent = "Товаров нет в корзине"
      buttonBay.remove()
   
      shopCatalog.append(emptyList)
      return emptyList
   }else{
      cardList.append(buttonBay);
   }

   let totalPrice = 0

   for (let i = 0; i < arr.length; i++) {
      shopCatalog.append(createShopItem(i, arr[i]))

      totalPrice = totalPrice + arr[i].price
   }
   buttonBay.textContent = `Заказать ${totalPrice}`
}
buttonBay.onclick = function(){
   alert("Отдел в разработке)")
}

renderCard(shopArr)