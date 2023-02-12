const processor = (()=>{
    const details = JSON.parse(localStorage.getItem('listItemValues'));
    const storeValues = (itemName, values)=>{
        // const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        details[itemName][values['title']] = values;
        localStorage.setItem('listItemValues', JSON.stringify(details));
    }

    const retrieveValues = (itemName1, itemName2=null)=>{
        // const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        if(itemName2 === null){
            return details[itemName1];
        }else{
            return details[itemName1][itemName2];
        }
    }

    const removeTodo = (parentItem, childItem)=>{
        delete details[parentItem][childItem];
        localStorage.setItem('listItemValues', JSON.stringify(details));
    }

    const modifyTodo = (listItemName, todoListName, values)=>{
        // console.log(`listitemname: ${listItemName}\ntodoListName: ${todoListName}\nvalues: ${values}`);
        details[listItemName][todoListName] = values;
        localStorage.setItem('listItemValues', JSON.stringify(details));
    }


    return {storeValues, retrieveValues, removeTodo, modifyTodo};
})();

export {processor};