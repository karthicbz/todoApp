const createElement = (tagName, className=null, idName=null, text=null, src=null, alt=null)=>{
    if(tagName !== 'img'){
        return elementCreator.creator(tagName, className, idName, text);
    }
    else{
        return elementCreator.imageElementCreator(tagName, src, alt);
    }
}

const divPacker = (values)=>{
    const element = document.createElement('div');
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
        if(text !== null){
            element.textContent = text;
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

    return {creator, imageElementCreator};
})();

export {createElement, divPacker};