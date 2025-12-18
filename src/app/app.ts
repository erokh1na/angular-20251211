import {Component} from '@angular/core';
import {Header} from './main-components/header/header';

@Component({
    selector: 'app-root',
    // selector: 'div#root',
    imports: [Header],
    templateUrl: './app.html',
    // template: '<h1>Нихао</h1>',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = 'angular-20251211';
    protected readonly imgSrc = './favicon.ico';

    onClick(event: Event) {
        console.log('Clicked', event);
    }

    onKeyDown(event: Event) {
        console.log('onKeyDown', event);
    }
}
