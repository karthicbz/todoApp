import '../styles/style.css';
import { createElement } from './element_creator';

const content = document.getElementById('content');

const sidebar = createElement('div', null, 'sidebar', null);
sidebar.appendChild(createElement('p', null, 'today', 'Today'));
sidebar.appendChild(createElement('p', null, 'week', 'This Week'));
sidebar.appendChild(createElement('p', null, 'all-tasks', 'All Tasks'));
sidebar.appendChild(createElement('p', null, 'my-lists', 'My Lists'));
sidebar.appendChild(createElement('p', null, 'notes', 'Notes'));

content.appendChild(sidebar);
const image = document.createElement('img');
image.src = '../assets/today.svg';
content.appendChild(image);