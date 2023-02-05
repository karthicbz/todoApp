import '../styles/style.css';
import { createElement, divPacker } from './element_creator';
import todayImage from '../assets/today.svg';
import weekImage from '../assets/week.svg';
import monthImage from '../assets/month.svg';
import myList from '../assets/myList.svg';
import allNotes from '../assets/allNotes.svg';
import addCircle from '../assets/add_circle.svg';

const content = document.getElementById('content');

const sidebar = createElement('div', null, 'sidebar', null);
sidebar.appendChild(divPacker([['img', null, null, null, todayImage, null], ['p', null, 'today', 'Today', null, null]]));
sidebar.appendChild(divPacker([['img', null, null, null, weekImage, null], ['p', null, 'week', 'This Week', null, null]]));
sidebar.appendChild(divPacker([['img', null, null, null, monthImage, null],['p', null, 'all-tasks', 'All Tasks', null, null]]));
sidebar.appendChild(divPacker([['img', null, null, null, myList, null],['p', null, 'my-lists', 'My Lists', null, null]], null, 'myListContainer'));
sidebar.appendChild(divPacker([['input', null, 'newListInput', 'text'],['img', null, 'addListItemButton', null, addCircle, null]], null, 'newListInputContainer'));
sidebar.appendChild(createElement('div', null, 'newListItems', null));
sidebar.appendChild(divPacker([['img', null, null, null, allNotes, null],['p', null, 'notes', 'Notes', null, null]]));
content.appendChild(sidebar);
const container = createElement('div', null, 'container', null);
content.appendChild(container);

const newListInput = document.getElementById('newListInput');
const addListItemButton = document.getElementById('addListItemButton');
const listItemValues = {};

addListItemButton.addEventListener('click', ()=>{
    // console.log(newListInput.value);
    // const  newListItemContainer = document.querySelectorAll('#newListItems>div');
    // const newListItems = document.getElementById('newListItems');
    // newListItems.appendChild(divPacker([['div', null, null, `${newListInput.value}`],['span', 'close', `${newListInput.value}`, `${'&times;'}`, null, null]], null, `${newListInput.value}`));
    listItemValues[`${newListInput.value}`] = {};
    localStorage.setItem('listItemValues', JSON.stringify(listItemValues));
    console.log(JSON.parse(localStorage.getItem('listItemValues')));
    newListInput.value = '';
    // if(newListItemContainer.length >= 0){
    //     newListItems.setAttribute('style', 'display: flex;');
    // }
});