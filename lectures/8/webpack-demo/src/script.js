import module from './module.js';
import './public/style.css';

if (module?.sum?.foo?.bar) {
    console.log('something');
}

console.log(module.sum(1, 2));
