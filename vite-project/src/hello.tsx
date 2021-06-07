import { h } from 'preact';

export default function Hello(name: string){
    return (
        <div class="name">
            <p>{name}</p>
        </div>
    );
}