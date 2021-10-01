import Person from "./Person.ts";
import './style.scss';

let albus = new Person("Albus", "Dumbledore");
let wrapper = document.getElementById('wrapper');

wrapper.innerHTML = `<p>${albus.message()}</p>`;