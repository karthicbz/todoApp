import { createElement, divPacker } from './element_creator';

const listItemValues = {};

const storageFunction = (()=>{
    const storeValues = (input)=>{
        if(localStorage.getItem('listItemValues')){
            const values = JSON.parse(localStorage.getItem('listItemValues'));
            values[input] = {};
            localStorage.setItem('listItemValues', JSON.stringify(values));
            return populate.populateValues();
        }else{
            listItemValues[input] = {};
            localStorage.setItem('listItemValues', JSON.stringify(listItemValues));
            return populate.populateValues();
        }
    }
    return {storeValues};
})();

const populate = (()=>{
    const populateValues = ()=>{
        const newListItems = [];
        const parsedValues = JSON.parse(localStorage.getItem('listItemValues'));
        for(let key in parsedValues){
            newListItems.push(divPacker([['div', null, null, key],['span', 'close', key, `${'&times;'}`, null, null]], null, key));
        }
        return newListItems;
    }
    return {populateValues};
})();

export {storageFunction};