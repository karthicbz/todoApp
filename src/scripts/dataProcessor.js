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
    return {storeValues, retrieveValues};
})();

export {processor};