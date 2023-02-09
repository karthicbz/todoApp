import { createElement, divPacker } from './element_creator';

const renderContainer = (()=>{
    const elements = (listItem)=>{
        return createElement('div', null, listItem, null);
    }

    const makeTodo = (values)=>{
        const container = [];
        for(let key in values){
            const todoItem = divPacker([['input', null, key, 'checkbox'], ['p', null, null, key], ['button', null, null, 'Details'], 
            ['button', null, null, 'Edit'], ['span', null, null, `${'&times;'}`]], null, key);
            container.push(todoItem);
        }
        return container;
    }

    const lengthOfObject = (name)=>{
        const listItems = JSON.parse(localStorage.getItem('listItemValues'));
        return Object.keys(listItems[name]).length;
    }
    return {elements, lengthOfObject, makeTodo};
})();

export {renderContainer};