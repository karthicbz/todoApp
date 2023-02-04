const createElement = (tagName, className=null, idName=null, text=null, src=null, alt=null)=>{
    if(tagName === 'input'){
        return elementCreator.formElementCreator(tagName, className, idName, text);
    }else if(tagName !== 'img'){
        return elementCreator.creator(tagName, className, idName, text);
    }
    else{
        return elementCreator.imageElementCreator(tagName, src, alt);
    }
}

const divPacker = (values, className=null, idName=null)=>{
    const element = document.createElement('div');
    if(className !== null){
        element.classList.add(className);
    }
    if(idName !== null){
        element.setAttribute('id', `${idName}`);
    }
    values.forEach(value=>{
        const [tagName, className, idName, text, src, alt] = value;
        element.appendChild(createElement(tagName, className, idName, text, src, alt));
    });
    return element;
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
        if(tagName !== 'input'){
            if(text !== null){
                element.textContent = text;
            }
        }else{
            element.type = text;
        }
        return element;
    }

    const imageElementCreator = (tagName, src, alt)=>{
        const element = document.createElement(tagName);
        if(alt !== null){
            element.alt = alt;
        }
        if(src !== null){
            element.src = src;
        }
        return element;
    }

    const formElementCreator = (tagName, className, idName, type)=>{
        const element = creator(tagName, className, idName, type);
        return element;
    }

    return {creator, imageElementCreator, formElementCreator};
})();

export {createElement, divPacker};