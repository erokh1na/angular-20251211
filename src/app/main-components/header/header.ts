import {Component} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    imports: [MatToolbar, MatIcon, MatIconButton],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    protected readonly title = 'angular-20251211';
    protected readonly imgSrc = './favicon.ico';
}
