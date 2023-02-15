const {format} = require('date-fns');
// const daysToWeek = require('date-fns/daysToWeeks');
var getDate = require('date-fns/getDate');
var add = require('date-fns/add')

const processor = (()=>{
    const details = JSON.parse(localStorage.getItem('listItemValues'));
    const storeValues = (itemName, values)=>{
        const details = JSON.parse(localStorage.getItem('listItemValues'));
        // const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        details[itemName][values['title']] = values;
        localStorage.setItem('listItemValues', JSON.stringify(details));
    }

    const retrieveValues = (itemName1, itemName2=null)=>{
        const details = JSON.parse(localStorage.getItem('listItemValues'));
        // const listItem = JSON.parse(localStorage.getItem('listItemValues'));
        if(itemName2 === null){
            return details[itemName1];
        }else{
            return details[itemName1][itemName2];
        }
    }

    const removeTodo = (parentItem, childItem)=>{
        const details = JSON.parse(localStorage.getItem('listItemValues'));
        delete details[parentItem][childItem];
        localStorage.setItem('listItemValues', JSON.stringify(details));
    }

    const modifyTodo = (listItemName, todoListName, values)=>{
        // console.log(`listitemname: ${listItemName}\ntodoListName: ${todoListName}\nvalues: ${values}`);
        const details = JSON.parse(localStorage.getItem('listItemValues'));
        details[listItemName][todoListName] = values;
        localStorage.setItem('listItemValues', JSON.stringify(details));
    }

    const getTodayTodoList = ()=>{
        const today = format(new Date(), 'yyyy-MM-dd');
        const getAllDetails = JSON.parse(localStorage.getItem('listItemValues'));
    
        Object.keys(getAllDetails).forEach(listItem=>{
            Object.keys(getAllDetails[listItem]).forEach(todoItem=>{
                if(!Object.values(getAllDetails[listItem][todoItem]).includes(today)){
                    delete getAllDetails[listItem][todoItem];
                }
            });
        });
        return getAllDetails;
    }

    const getWeekTodoList = ()=>{
        const week = []
        for(let i=0; i<7; i++){
            week.push(format(add.default(new Date(), {days: i,}), 'yyyy-MM-dd'));
        }

        const getAllDetails = JSON.parse(localStorage.getItem('listItemValues'));
        Object.keys(getAllDetails).forEach(listItem=>{
            Object.keys(getAllDetails[listItem]).forEach(todoItem=>{
                if(!week.includes(getAllDetails[listItem][todoItem]['schedule'])){
                    delete getAllDetails[listItem][todoItem];
                }
            });
        });

        return getAllDetails;
    }


    return {storeValues, retrieveValues, removeTodo, modifyTodo, getTodayTodoList, getWeekTodoList, details};
})();

export {processor};