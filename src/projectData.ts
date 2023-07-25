import {v4 as uuidv4} from 'uuid';
import { Project as project } from './model/ProjectModel';

export let ecom: project = {
    id : uuidv4(),
    name : 'E-commerce Application',
    details : 'A rudimentary E-commerce web application.',
    technologies : ['NodeJS','React','React-Redux','Express','MongoDB','Axios']
}

export let PS: project = {
    id : uuidv4(),
    name : 'Performance Science Application (University Project)',
    details : 'The web application I developed combines the power of machine learning to analyze and predict teacher performance across various environmental factors. Utilizing the Laravel and Django frameworks, the application seamlessly integrates with a Django backend, allowing for precise predictions of teacher performance throughout an entire semester while considering specific phenomena.',
    technologies : ['Laravel','Python','Google Colab','Django', 'JavaScript']
}
