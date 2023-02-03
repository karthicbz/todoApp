/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/element_creator.js":
/*!****************************************!*\
  !*** ./src/scripts/element_creator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "divPacker": () => (/* binding */ divPacker)
/* harmony export */ });
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
    console.log(values);
    values.forEach(value=>{
        // for(let key in value){
        //     element.appendChild(createElement(value[key]))
        // }
        console.log(value);
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element_creator */ "./src/scripts/element_creator.js");



const content = document.getElementById('content');

const sidebar = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', null, 'sidebar', null);
// sidebar.appendChild(createElement('p', null, 'today', 'Today'));
sidebar.appendChild((0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.divPacker)([['img', null, null, null, '../assets/today1.png', null], ['p', null, 'today', 'Today', null, null]]));
sidebar.appendChild((0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', null, 'week', 'This Week'));
sidebar.appendChild((0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', null, 'all-tasks', 'All Tasks'));
sidebar.appendChild((0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', null, 'my-lists', 'My Lists'));
sidebar.appendChild((0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', null, 'notes', 'Notes'));

content.appendChild(sidebar);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jN2E1OTc5MTRmM2EwNDY3YjMxYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7OztVQ2xERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNnQzs7QUFFN0Q7O0FBRUEsZ0JBQWdCLCtEQUFhO0FBQzdCO0FBQ0Esb0JBQW9CLDJEQUFTO0FBQzdCLG9CQUFvQiwrREFBYTtBQUNqQyxvQkFBb0IsK0RBQWE7QUFDakMsb0JBQW9CLCtEQUFhO0FBQ2pDLG9CQUFvQiwrREFBYTs7QUFFakMsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/MjM5NCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3NjcmlwdHMvZWxlbWVudF9jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lLCBjbGFzc05hbWU9bnVsbCwgaWROYW1lPW51bGwsIHRleHQ9bnVsbCwgc3JjPW51bGwsIGFsdD1udWxsKT0+e1xuICAgIGlmKHRhZ05hbWUgIT09ICdpbWcnKXtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDcmVhdG9yLmNyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gZWxlbWVudENyZWF0b3IuaW1hZ2VFbGVtZW50Q3JlYXRvcih0YWdOYW1lLCBzcmMsIGFsdCk7XG4gICAgfVxufVxuXG5jb25zdCBkaXZQYWNrZXIgPSAodmFsdWVzKT0+e1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlPT57XG4gICAgICAgIC8vIGZvcihsZXQga2V5IGluIHZhbHVlKXtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh2YWx1ZVtrZXldKSlcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IFt0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdGV4dCwgc3JjLCBhbHRdID0gdmFsdWU7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdGV4dCwgc3JjLCBhbHQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgZWxlbWVudENyZWF0b3IgPSAoKCk9PntcbiAgICBjb25zdCBjcmVhdG9yID0gKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0KT0+e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgaWYoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGlkTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpZE5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGV4dCAhPT0gbnVsbCl7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZUVsZW1lbnRDcmVhdG9yID0gKHRhZ05hbWUsIHNyYywgYWx0KT0+e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgaWYoYWx0ICE9PSBudWxsKXtcbiAgICAgICAgICAgIGVsZW1lbnQuYWx0ID0gYWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmKHNyYyAhPT0gbnVsbCl7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0b3IsIGltYWdlRWxlbWVudENyZWF0b3J9O1xufSkoKTtcblxuZXhwb3J0IHtjcmVhdGVFbGVtZW50LCBkaXZQYWNrZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGRpdlBhY2tlciB9IGZyb20gJy4vZWxlbWVudF9jcmVhdG9yJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IHNpZGViYXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCAnc2lkZWJhcicsIG51bGwpO1xuLy8gc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywgbnVsbCwgJ3RvZGF5JywgJ1RvZGF5JykpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChkaXZQYWNrZXIoW1snaW1nJywgbnVsbCwgbnVsbCwgbnVsbCwgJy4uL2Fzc2V0cy90b2RheTEucG5nJywgbnVsbF0sIFsncCcsIG51bGwsICd0b2RheScsICdUb2RheScsIG51bGwsIG51bGxdXSkpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywgbnVsbCwgJ3dlZWsnLCAnVGhpcyBXZWVrJykpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywgbnVsbCwgJ2FsbC10YXNrcycsICdBbGwgVGFza3MnKSk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCBudWxsLCAnbXktbGlzdHMnLCAnTXkgTGlzdHMnKSk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCBudWxsLCAnbm90ZXMnLCAnTm90ZXMnKSk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9