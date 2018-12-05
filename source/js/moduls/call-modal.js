// Для всех внктренних страниц, где только модалка перезвона
import {openModal} from './modal.js';

const callModal = document.querySelector('.modal--сall');
const callLinks = document.querySelectorAll('.btn-call');

openModal(callLinks, callModal);