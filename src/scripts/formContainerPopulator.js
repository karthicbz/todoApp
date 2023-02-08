import { createElement, divPacker } from './element_creator';

const renderFormContainer = (()=>{
    const createFormElements = ()=>{
        const priorityValues = ['Low', 'Medium', 'High'];
        const elements = [];
        elements.push(createElement('input', null, 'title', 'text'));
        elements.push(createElement('input', null, 'description', 'text'));
        elements.push(divPacker([['p', null, null, 'Schedule'], ['input', null, 'date', 'date']], null, 'datePicker'));

        const priorityBox = createElement('div', null, 'priorityContainer', null);
        const priorityLabel = document.createElement('label');
        priorityLabel.htmlFor = 'priority';
        priorityLabel.textContent = 'Priority';
        
        const prioritySelect = document.createElement('select');
        prioritySelect.setAttribute('id', 'priority');
        prioritySelect.setAttribute('name', 'priority');

        priorityValues.forEach(value=>{
            const priorityOption = document.createElement('option');
            priorityOption.value = value;
            priorityOption.textContent = value;
            prioritySelect.appendChild(priorityOption);
        });
        priorityBox.appendChild(priorityLabel);
        priorityBox.appendChild(prioritySelect);
        elements.push(priorityBox);
        elements.push(createElement('button', null, 'addTodo', 'Add To Do'));
        return elements;
    }
    return {createFormElements};
})();

export {renderFormContainer};