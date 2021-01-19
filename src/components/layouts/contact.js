import element from '../commons/element';

const container = new element().create('div').class('container p-3 tab-pane').id('contact');
const contact = new element().create('div').class('d-flex flex-column');
const email = new element().create('h5').class('text-center');
new element().createText('Email: westresto50@gmail.com').appendTo(email.element());
const phone = new element().create('h5').class('text-center');
new element().createText('Phone: +250 723 343 345').appendTo(phone.element());

email.appendTo(contact.element());
phone.appendTo(contact.element());
contact.appendTo(container.element());

export default container;