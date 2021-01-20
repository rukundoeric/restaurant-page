import Element from '../commons/element';

const container = new Element().create('div').class('container p-3 tab-pane').id('contact');
const contact = new Element().create('div').class('d-flex flex-column');
const email = new Element().create('h5').class('text-center');
new Element().createText('Email: westresto50@gmail.com').appendTo(email.element());
const phone = new Element().create('h5').class('text-center');
new Element().createText('Phone: +250 723 343 345').appendTo(phone.element());

email.appendTo(contact.element());
phone.appendTo(contact.element());
contact.appendTo(container.element());

export default container;