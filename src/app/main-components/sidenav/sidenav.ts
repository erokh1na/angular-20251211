import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ElementRef,
    viewChild,
} from '@angular/core';
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
    // public readonly sidenavOpened = model(false);

    // private readonly drawerComponent = viewChild<MatDrawer>('drawer');
    private readonly drawerComponent = viewChild.required<MatDrawer>(MatDrawer);
    private readonly drawerElementRef = viewChild.required<MatDrawer, ElementRef<unknown>>(
        MatDrawer,
        {read: ElementRef},
    );

    private readonly divContentElement = contentChild<ElementRef>('divElement');

    public toggle(): void {
        this.drawerComponent().toggle();

        console.log(this.drawerElementRef());
        console.log(this.divContentElement());
    }
}
