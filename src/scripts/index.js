import '../styles/style.css';
import { createElement, divPacker } from './element_creator';
import todayImage from '../assets/today.svg';
import weekImage from '../assets/week.svg';
import monthImage from '../assets/month.svg';
import myList from '../assets/myList.svg';
import allNotes from '../assets/allNotes.svg';
import addCircle from '../assets/add_circle.svg';
import { storageFunction } from './listItemPopulator';

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
const addListItemButton = document.querySelector('#content>#sidebar>#newListInputContainer>#addListItemButton');
const newListItems = document.getElementById('newListItems');
const newListItemContainer = document.querySelectorAll('#newListItems>div');

addListItemButton.addEventListener('click', ()=>{
    newListItems.innerHTML = '';
    const newListItemValues = storageFunction.storeValues(newListInput.value);
    for(let i=0; i<newListItemValues.length; i++){
        newListItems.appendChild(newListItemValues[i]);

    }
    newListInput.value = '';
    if(newListItemContainer.length >= 0){
        newListItems.setAttribute('style', 'display: flex;');
    }  
});