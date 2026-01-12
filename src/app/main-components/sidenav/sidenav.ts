import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    imports: [MatDrawer, MatDrawerContainer, MatButton],
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidenav {
    // public readonly sidenavOpened = input(false);

    // public readonly sidenavOpenedChange = output<boolean>();

    public readonly sidenavOpened = model(false);

    // public sidenavOpened = false
    // public readonly sidenavOpened = signal(false)

    // constructor() {
    //     setTimeout(() => {
    //         // this.sidenavOpened = true
    //         this.sidenavOpened.set(true)
    //     }, 3000);
    // }
}
