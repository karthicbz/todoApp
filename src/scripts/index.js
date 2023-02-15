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
import { processor } from './dataProcessor';

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
container.appendChild(createElement('div', null, 'formBackground', null));
content.appendChild(container);

const newListInput = document.getElementById('newListInput');
const addListItemButton = document.querySelector('#content>#sidebar>#newListInputContainer>#addListItemButton');
const newListItems = document.getElementById('newListItems');
// const valuesOfNewListItem = document.querySelectorAll('#newListItems>div');

const mainContainer = document.querySelector('#content>#container');
const listItemContainer = document.querySelector('#container>#listItemContainer');

const formContainer = document.querySelector('#content>#container>#formContainer');

const formBackground = document.querySelector('#container>#formBackground');

const closeForm = document.querySelector('#container>#formContainer>#closeForm');

const weekTodoList = document.querySelector('#content>#sidebar>div:nth-child(2)');

const allTodoList = document.querySelector('#content>#sidebar>div:nth-child(3)');

// const listItemContainer = document.querySelector('#container>#listItemContainer');
let currentListId;
let editMode = false;
let currentTodoItem;

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
    if(newListInput.value !== ''){
        newListItems.innerHTML = '';
        const newListItemValues = storageFunction.storeValues(newListInput.value);
        for(let i=0; i<newListItemValues.length; i++){
            newListItems.appendChild(newListItemValues[i]);

        }
        newListInput.value = '';
        renderListItem(newListItems, newListItems.childNodes.length);
    }else{
        alert('text should not be empty');
    }
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
        removeFormBackground();
        listItemContainer.setAttribute('style', 'display: flex');
        listItemContainer.innerHTML = '';
        // console.log(e.target.parentNode);
        listItemContainer.appendChild(renderContainer.elements(e.target.textContent.replace('×', '')));
        listItemContainer.appendChild(createElement('img', null, null, null, addButtonImage, null));
        displayListItemContainerChild(e.target.textContent.replace('×', ''));
    }
});

listItemContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        currentListId = e.target.parentNode.childNodes[0].id;
        formContainer.setAttribute('style', 'display: flex;');
        formBackground.setAttribute('style', 'display: block;');
    }else if(e.target.textContent === 'Details'){
        const todoDetails = e.target.parentNode.parentNode.childNodes[1];
        const parentItem = e.target.parentNode.parentNode.parentNode.id;
        const childItem = e.target.parentNode.id;
        const allTodoDetails = document.querySelectorAll('#container>#listItemContainer>div>.todo');
        allTodoDetails.forEach(details=>{
            details.querySelector('.todoDetails').textContent = '';
            details.querySelector('.todoDetails').classList.remove('showPadding');
            details.querySelector('div').classList.remove('addShadow');
        });
        e.target.parentNode.classList.add('addShadow');
        todoDetails.classList.add('showPadding');
        const processedDetails = renderContainer.displayTodoDetails(parentItem, childItem);
        processedDetails.forEach(details=>{
            todoDetails.appendChild(details);
        });
    }else if(e.target.tagName === 'SPAN'){
        const parentItem = document.querySelector('#container>#listItemContainer>div');
        console.log(parentItem);
        const childItem = e.target.parentNode.id;
        // renderContainer.removeTodo(parentItem.id, childItem);
        processor.removeTodo(parentItem.id, childItem);
        displayListItemContainerChild(parentItem.id);
    }else if(e.target.textContent === 'Edit'){
        formContainer.setAttribute('style', 'display: flex;');
        formBackground.setAttribute('style', 'display: block;');
        currentListId = document.querySelector('#container>#listItemContainer>div').id;
        currentTodoItem = e.target.parentNode.id;

        editMode = true;
        populateForm(currentListId, currentTodoItem);
    }else if(e.target.type === 'checkbox'){
        const details = JSON.parse(localStorage.getItem('listItemValues'));
        Object.keys(details).forEach(listItem=>{
            Object.keys(details[listItem]).forEach(todoItem=>{
                // console.log(Object.values(details[listItem][todoItem]));
                if(Object.values(details[listItem][todoItem]).includes(e.target.id)){
                    if(Object.keys(details[listItem][todoItem]).includes('state')){
                        delete details[listItem][todoItem]['state'];
                        localStorage.setItem('listItemValues', JSON.stringify(details));
                        e.target.parentNode.querySelector('p').classList.remove('strike');
                    }else{
                        details[listItem][todoItem]['state'] = 'checked';
                        localStorage.setItem('listItemValues', JSON.stringify(details));
                        e.target.parentNode.querySelector('p').classList.add('strike');
                    }
                }
            })
        })
        // e.target.parentNode.querySelector('p').classList.toggle('strike');
    }
});

function populateForm(item1, item2){
    const title = document.querySelector('#formContainer>#title');
    const description = document.querySelector('#formContainer>#description');
    const schedule = document.querySelector('#formContainer>#datePicker>#date');
    const priority = document.querySelector('#formContainer>#priorityContainer>#priority');

    const details = processor.retrieveValues(item1, item2);
    title.value = details['title'];
    description.value = details['description'];
    schedule.value = details['schedule'];
    priority.value = details['priority'];
    
}

formContainer.addEventListener('click', (e)=>{
    const title = document.querySelector('#formContainer>#title');
    const description = document.querySelector('#formContainer>#description');
    const schedule = document.querySelector('#formContainer>#datePicker>#date');
    const priority = document.querySelector('#formContainer>#priorityContainer>#priority');

    if(e.target.id === 'closeForm'){
        removeFormBackground()
        title.value = '';
        description.value = '';
        schedule.value = '';
    }else if(e.target.id === 'addTodo'){
        const values = {
            'title': `${title.value}`,
            'description': `${description.value}`,
            'schedule': `${schedule.value}`,
            'priority': `${priority.value}`,
        }
        removeFormBackground()
        // console.log(`title: ${title.value}, description: ${description.value}, schedule: ${schedule.value}, priority: ${priority.value}`);
        if(editMode === true){
            processor.modifyTodo(currentListId, currentTodoItem, values);
            editMode = false;
        }else{
            console.log(currentListId);
            processor.storeValues(currentListId, values);
        }
        // processor.storeValues(currentListId, values);
        title.value = '';
        description.value = '';
        schedule.value = '';
        displayListItemContainerChild(currentListId)

    }
});

document.querySelector('#sidebar>div:first-child').addEventListener('click', displayTodayTodoList);

weekTodoList.addEventListener('click', displayWeekTodoList);

allTodoList.addEventListener('click', ()=>{
    displayAllTodoList();
});

function displayTodayTodoList(){
    listItemContainer.setAttribute('style', 'display: flex');
    listItemContainer.innerHTML = '';
    listItemContainer.appendChild(renderContainer.elements('Today'));
    const todayTodoList = processor.getTodayTodoList();
    let empty = true;
    for(let key in todayTodoList){
        if(Object.keys(todayTodoList[key]).length !== 0){
            empty = false;
            displayListItemContainerChild(null, todayTodoList[key]);
        }
    }
    if(empty){
        displayListItemContainerChild(null, {});
    }
}

function displayWeekTodoList(){
    listItemContainer.setAttribute('style', 'display: flex');
    listItemContainer.innerHTML = '';
    listItemContainer.appendChild(renderContainer.elements('Week'));
    const weekTodoList = processor.getWeekTodoList();
    let empty = true;
    for(let key in weekTodoList){
        if(Object.keys(weekTodoList[key]).length !== 0){
            empty = false;
            displayListItemContainerChild(null, weekTodoList[key]);
        }
    }
    if(empty){
        displayListItemContainerChild(null, {});
    }
}

function displayAllTodoList(){
    listItemContainer.setAttribute('style', 'display: flex');
    listItemContainer.innerHTML = '';
    listItemContainer.appendChild(renderContainer.elements('AllTodo'));
    const allTodoList = JSON.parse(localStorage.getItem('listItemValues'));
    for(let key in allTodoList){
        if(Object.keys(allTodoList[key]).length !== 0){
            displayListItemContainerChild(null, allTodoList[key]);
        }
    }
}

function displayListItemContainerChild(listItem=null, todayItem = null){  //this one create todolist cards
    const listItemContainerChild = document.querySelector('#container>#listItemContainer>div');
    // listItemContainerChild.innerHTML = '';
    let todoItems;
    if(listItem !== null){
        listItemContainerChild.innerHTML = '';
        todoItems = renderContainer.makeTodo(processor.retrieveValues(listItem));
    }else{
        todoItems = renderContainer.displayTodayTodo(todayItem);
    }
    if(todoItems.length > 0){
        for(let i=0; i<todoItems.length; i++){
            listItemContainerChild.appendChild(todoItems[i]);
        }
    }else{
        listItemContainerChild.append(createElement('img', null, null, null, emptyImage, null));
    }
}

function loadOnStart(){
    // console.log(populate.populateValues());
    const newListItemValues = populate.populateValues();
    newListItems.innerHTML = '';
    for(let i=0; i<newListItemValues.length; i++){
        newListItems.appendChild(newListItemValues[i]);

    }
    renderListItem(newListItems, newListItems.childNodes.length);
    displayTodayTodoList();
}

function removeFormBackground(){
    formContainer.removeAttribute('style');
    formBackground.removeAttribute('style');
}

loadOnStart();
createForm();