class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  calculatePrice() {
    let sum = 0;
    this.goods.forEach((good) => {
      sum += good.price;
    });
    return sum;
  }
  render() {
    let listHtml = '';
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

class cartItem {}
class cartList {}

const list = new GoodsList();
list.fetchGoods();
list.render();

// const goods = [
//   { title: 'Shirt', price: 150 },
//   { title: 'Socks', price: 50 },
//   { title: 'Jacket', price: 350 },
//   { title: 'Shoes', price: 250 },
// ];

// const renderGoodsItem = (item) => {
//   return `<div class="goods-item"><h3>${item.title}</h3><p>${item.price}</p></div>`;
// };

// const renderGoodsList = (list = [{ title: 'Not found', price: '###' }]) => {
//   document.querySelector('.goods-list').innerHTML = list
//     .map((item) => renderGoodsItem(item))
//     .join('');
// };

// renderGoodsList(goods);
