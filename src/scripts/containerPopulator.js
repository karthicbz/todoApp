import { createElement, divPacker } from './element_creator';

const renderContainer = (()=>{
    const elements = (listItem)=>{
        return createElement('div', null, listItem, null);
    }

    const lengthOfObject = (name)=>{
        const listItems = JSON.parse(localStorage.getItem('listItemValues'));
        return Object.keys(listItems[name]).length;
    }
    return {elements, lengthOfObject};
})();

export {renderContainer};