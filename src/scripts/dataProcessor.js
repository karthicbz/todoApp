const processor = (()=>{
    const storeValues = (listItemChild, values)=>{
        const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        listItem[listItemChild][values['title']] = values;
        localStorage.setItem('listItemValues', JSON.stringify(listItem));
    }
    return {storeValues};
})();

export {processor};