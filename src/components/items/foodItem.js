import element from '../commons/element';

const foodItem = ({ imagePath, price:  prc,  name}) => {
  const Item = new element().create('div').class('col-lg-3 my-2');
  const foodItem = new element().create('div').class('d-flex flex-column foodItem p-2');
  const image = new element().create('img').class('image');
  image.element().setAttribute('src', imagePath);
  image.appendTo(foodItem.element());
  const title = new element().create('h4').class('text-center');
  new element().createText(name).appendTo(title.element());
  const price = new element().create('span').class('text-center');
  new element().createText(prc).appendTo(price.element());
  title.appendTo(foodItem.element());
  price.appendTo(foodItem.element());
  foodItem.appendTo(Item.element());
  return Item;
}

export default foodItem;