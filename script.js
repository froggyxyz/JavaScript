const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (item) => {
  return `<div class="goods-item"><h3>${item.title}</h3><p>${item.price}</p></div>`;
};

const renderGoodsList = (list = [{ title: 'Not found', price: '###' }]) => {
  document.querySelector('.goods-list').innerHTML = list
    .map((item) => renderGoodsItem(item))
    .join('');
};

renderGoodsList(goods);
