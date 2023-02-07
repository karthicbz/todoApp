import { createElement, divPacker } from './element_creator';

const renderContainer = (()=>{
    const elements = (listItem)=>{
        return createElement('div', null, listItem, listItem);
    }
    return {elements};
})();

export {renderContainer};