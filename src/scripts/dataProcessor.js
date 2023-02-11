const processor = (()=>{
    const storeValues = (itemName, values)=>{
        const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        listItem[itemName][values['title']] = values;
        localStorage.setItem('listItemValues', JSON.stringify(listItem));
    }

    const retrieveValues = (itemName1, itemName2=null)=>{
        const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        if(itemName2 === null){
            return listItem[itemName1];
        }else{
            return listItem[itemName1][itemName2];
        }
    }

    const removeTodo = (parentItem, childItem)=>{
        const details = JSON.parse(localStorage.getItem('listItemValues'));
        delete details[parentItem][childItem];
        localStorage.setItem('listItemValues', JSON.stringify(details));
        // const details =  processor.retrieveValues(parentItem);
        // delete details[childItem];
        // console.log(details);
        // localStorage.setItem('listItemValues', JSON.stringify(details));
        // console.log(localStorage);
    }


    return {storeValues, retrieveValues, removeTodo};
})();

export {processor};