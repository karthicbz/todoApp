import '../styles/style.css';
import { createElement, divPacker } from './element_creator';
import todayImage from '../assets/today.svg';
import weekImage from '../assets/week.svg';
import monthImage from '../assets/month.svg';
import myList from '../assets/myList.svg';
import allNotes from '../assets/allNotes.svg';
import addCircle from '../assets/add_circle.svg';
import emptyImage from '../assets/empty.png';
import addButtonImage from '../assets/addButton.png';
import { storageFunction, populate, remover } from './listItemPopulator';
import { renderContainer } from './containerPopulator';
import { renderFormContainer } from './formContainerPopulator';

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
container.appendChild(createElement('div', null, 'listItemContainer', null));
container.appendChild(createElement('div', null, 'notesContainer', null));
container.appendChild(createElement('div', null, 'formContainer', null));
content.appendChild(container);

const newListInput = document.getElementById('newListInput');
const addListItemButton = document.querySelector('#content>#sidebar>#newListInputContainer>#addListItemButton');
const newListItems = document.getElementById('newListItems');
// const valuesOfNewListItem = document.querySelectorAll('#newListItems>div');

const mainContainer = document.querySelector('#content>#container');
const listItemContainer = document.querySelector('#container>#listItemContainer');

const formContainer = document.querySelector('#content>#container>#formContainer');

function createForm(){
    const formElements = renderFormContainer.createFormElements();
    for(let i=0; i<formElements.length; i++){
        formContainer.appendChild(formElements[i]);
    }
}

const renderListItem=(element, value)=>{
    if(value > 0){
        element.setAttribute('style', 'display: flex;');
    }else{
        element.removeAttribute('style');
    } 
}

addListItemButton.addEventListener('click', ()=>{
    newListItems.innerHTML = '';
    const newListItemValues = storageFunction.storeValues(newListInput.value);
    for(let i=0; i<newListItemValues.length; i++){
        newListItems.appendChild(newListItemValues[i]);

    }
    newListInput.value = '';
    renderListItem(newListItems, newListItems.childNodes.length);
});

newListItems.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.value === 'close')
    {
        newListItems.innerHTML = '';
        const newListItemValues = remover.removeItem(e.target.id);
        for(let i=0; i<newListItemValues.length; i++){
            newListItems.appendChild(newListItemValues[i]);

        }
        renderListItem(newListItems, newListItems.childNodes.length);
    }else{
        listItemContainer.setAttribute('style', 'display: block');
        listItemContainer.innerHTML = '';
        // console.log(e.target.parentNode);
        listItemContainer.appendChild(renderContainer.elements(e.target.textContent.replace('×', '')));
        listItemContainer.appendChild(createElement('img', null, null, null, addButtonImage, null));
    }
});

function loadOnStart(){
    // console.log(populate.populateValues());
    const newListItemValues = populate.populateValues();
    newListItems.innerHTML = '';
    for(let i=0; i<newListItemValues.length; i++){
        newListItems.appendChild(newListItemValues[i]);

    }
    renderListItem(newListItems, newListItems.childNodes.length);
}

loadOnStart();
createForm();