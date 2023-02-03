const createElement = (tagName, className=null, idName=null, text=null, src=null, alt=null)=>{
    if(tagName !== 'img'){
        return elementCreator.creator(tagName, className, idName, text);
    }
    else{
        return elementCreator.imageElementCreator();
    }
}

const elementCreator = (()=>{
    const creator = (tagName, className, idName, text)=>{
        const element = document.createElement(tagName);
        if(className !== null){
            element.classList.add(className);
        }
        if(idName !== null){
            element.setAttribute('id', `${idName}`);
        }
        if(text !== null){
            element.textContent = text;
        }
        return element;
    }

    const imageElementCreator = (tagName, alt, src)=>{
        const element = document.createElement(tagName);
        if(alt !== null){
            element.alt = alt;
        }
        if(src !== null){
            element.src = src;
        }
    }

    return {creator, imageElementCreator};
})();

export {createElement};