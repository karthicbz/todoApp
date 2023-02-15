import { createElement, divPacker } from './element_creator';
import { processor } from './dataProcessor';

const renderContainer = (()=>{
    const elements = (listItem)=>{
        return createElement('div', null, listItem, null);
    }

    const makeTodo = (values)=>{
        const container = [];
        for(let key in values){
            // console.log(Object.keys(values[key]));
            const todo = createElement('div', 'todo', null, null);
            if(Object.keys(values[key]).includes('state')){
                const todoItem = divPacker([['p', 'strike', null, key], ['button', null, null, 'Details'], 
            ['button', null, null, 'Edit'], ['span', null, null, `${'&times;'}`]], null, key);
                todo.appendChild(todoItem);
            }else{
                const todoItem = divPacker([['p', null, null, key], ['button', null, null, 'Details'], 
            ['button', null, null, 'Edit'], ['span', null, null, `${'&times;'}`]], null, key);
                todo.appendChild(todoItem);
            }
            const todoDetails = createElement('div', 'todoDetails', key, null);
            todo.appendChild(todoDetails);
            container.push(todo);
        }
        return container;
    }

    const displayTodoDetails = (parentItem, childItem)=>{
        const details =  processor.retrieveValues(parentItem, childItem);
        const detailsArray = [];
        // detailsArray.push(createElement('h1', null, null, details['title']));
        // detailsArray.push(createElement('span', null, 'closeDetails', `${'&times;'}`));
        detailsArray.push(divPacker([['p', null, null, 'List Item'], ['p', null, null, parentItem]]));
        detailsArray.push(divPacker([['p', null, null, 'Description'], ['p', null, null, details['description']]]));
        detailsArray.push(divPacker([['p', null, null, 'Schedule'], ['p', null, null, details['schedule']]]));
        detailsArray.push(divPacker([['p', null, null, 'Priority'], ['p', null, null, details['priority']]]));
        // detailsArray.push(createElement('span', null, 'closeDetails', `${'&times;'}`));
        return detailsArray;
    }

    const displayTodayTodo = (values)=>{
        const container = [];
        for(let key in values){
            const todo = createElement('div', 'todo', null, null);
            if(Object.keys(values[key]).includes('state')){
                const div = createElement('div', null, null, null);
                const checkbox = createElement('input', null, key, 'checkbox');
                checkbox.checked = true;
                div.appendChild(checkbox);
                const para1 = createElement('p', 'strike', null, values[key]['description']);
                div.appendChild(para1);
                const para2 = createElement('p', null, null, values[key]['schedule']);
                div.appendChild(para2);
                const priorityElement = createElement('p', null, null, values[key]['priority']);
                if(values[key]['priority'] === 'Low'){
                    priorityElement.classList.add('priority-green');
                }else if(values[key]['priority'] === 'Medium'){
                    priorityElement.classList.add('priority-orange');
                }else{
                    priorityElement.classList.add('priority-red');
                }
                div.appendChild(priorityElement);
                todo.appendChild(div);
            }else{
                const todoItem = divPacker([['input', null, key, 'checkbox'], ['p', null, null, values[key]['description']], ['p', null, null, values[key]['schedule']]]);
                const priorityElement = createElement('p', null, null, values[key]['priority']);
                if(values[key]['priority'] === 'Low'){
                    priorityElement.classList.add('priority-green');
                }else if(values[key]['priority'] === 'Medium'){
                    priorityElement.classList.add('priority-orange');
                }else{
                    priorityElement.classList.add('priority-red');
                }
                todoItem.appendChild(priorityElement);
                todo.appendChild(todoItem);
            }
            container.push(todo);
        }
        return container;
    }

    const lengthOfObject = (name)=>{
        const listItems = JSON.parse(localStorage.getItem('listItemValues'));
        return Object.keys(listItems[name]).length;
    }
    return {elements, lengthOfObject, makeTodo, displayTodoDetails, displayTodayTodo};
})();

export {renderContainer};