import element from '../commons/element';

const container = new element().create('div').class('tab-pane active container p-3').id('home');
const home = new element().create('div').class('d-flex home_content justify-content-center align-items-center');
const h2 = new element().create('h2').class('text-center welcome-text');
new element().createText('Welcome to West-Food').appendTo(h2.element());

h2.appendTo(home.element());
home.appendTo(container.element());

export default container;