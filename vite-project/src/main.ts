import './style.css';
import Hello from './hello';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = Hello("Daniel");
