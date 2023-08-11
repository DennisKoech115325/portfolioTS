import {v4 as uuidv4} from 'uuid';
import { Project as project } from './model/ProjectModel';
export let ecom: project = {
    id : uuidv4(),
    name : 'E-commerce Application',
    details : 'A rudimentary E-commerce web application built using the MERN stack, utilizing React-Redux for state management and Axios for data retrieval from the backend. <br /> The E-commerce web application allows users to perform CRUD operations on products, filter and sort products through products, add products to the cart, and change the quantity of products in the cart or remove products from the cart.',
    technologies : ['MongoDB','Express.js','React.js','Node.js','React-Redux','Axios'],
    link : 'https://github.com/DennisKoech115325/E-commerce'
}

export let PS: project = {
    id : uuidv4(),
    name : 'Performance Science Application (University Project)',
    details : 'The web application I developed combines the power of machine learning to analyze and predict teacher performance across various environmental factors. <br /> Utilizing the Laravel and Django frameworks, the application seamlessly integrates with a Django backend, allowing for precise predictions of teacher performance throughout an entire semester while considering specific phenomena.',
    technologies : ['Laravel','Python','Google Colab','Django', 'JavaScript'],
    link : 'https://github.com/DennisKoech115325/PERFORMANCE_SCIENCE'
}
