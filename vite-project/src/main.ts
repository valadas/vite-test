import './style.css';
import Hello from './hello';
import { render } from 'preact';

const app = document.querySelector<HTMLDivElement>('#app')!

render(Hello("Daniel"), app);
