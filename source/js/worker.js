import {openModal} from './moduls/modal.js';

const callModal = document.querySelector('.modal--сall');
const callLinks = document.querySelectorAll('.btn-call');

openModal(callLinks, callModal);