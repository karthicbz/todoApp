const processor = (()=>{
    const storeValues = (itemName, values)=>{
        const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        listItem[itemName][values['title']] = values;
        localStorage.setItem('listItemValues', JSON.stringify(listItem));
    }

    const retrieveValues = (itemName)=>{
        const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        return listItem[itemName];
    }
    return {storeValues, retrieveValues};
})();

export {processor};