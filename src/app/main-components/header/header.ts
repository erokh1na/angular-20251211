import {Component, input, output} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';

interface ApplicationConfig {
    title: string;
    imgSrc: string;
}

// function createApplicationInput() {
//     return input.required<ApplicationConfig>();
// }

@Component({
    selector: 'app-header',
    imports: [MatToolbar, MatIcon, MatIconButton],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    // public readonly title = input<string>('');
    // public readonly title = input<string>('', {});
    // public readonly title = input<number, string>(undefined, {
    //     alias: 'myTitle',
    //     transform: (value: string): number => Number(value),
    // });

    // public readonly title = input<string>();
    // public readonly title = input.required<string>();
    // public readonly imgSrc = input.required<string>();

    // public readonly applicationConfig = createApplicationInput();
    // public readonly applicationConfig = input.required<ApplicationConfig>({alias: 'config'})
    public readonly applicationConfig = input.required<ApplicationConfig>();

    // public readonly menuClick = output({alias: 'menuOpen'});
    // public readonly menuClick = output<void>();
    public readonly menuClick = output<Event>();

    // typeof value
    // protected readonly count = signal<number | null>(0);
    // protected readonly count = signal(0, {equal: (a, b) => a === b});
    // protected readonly count = signal(0, {equal: (a, b) => true});
    // protected readonly count = signal(0);
    // protected readonly doubleCount = computed(() => {
    //     console.log('Computed calculated');

    //     return this.count() * 2
    // });
    // doubleCountComputedConsumer = {
    //      update: () => {
    //          doubleCountSignal.invalidCache();
    //      }
    // }

    // protected readonly user = computed(...);
    // userComputedConsumer = {
    //      update: () => {
    //          userSignal.invalidCache();
    //      }
    // };

    // protected readonly doubleCountFn = () => {
    //     console.log('Cb calculated');

    //     return this.count() * 2
    // };

    constructor() {
        // const title = this.title();
        // console.log(this.count());
        // this.count.set(1);
        // console.log(this.count());
        // this.count.set(this.count() + 1);
        // console.log(this.count());
        // this.count.update((currentCount) => currentCount + 1);
        // console.log(this.count());
        // ------------------------------------------------------------
        // console.log('count', this.count());
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // // console.log('doubleCount', this.doubleCountFn());
        // // console.log('doubleCount', this.doubleCountFn());
        // this.count.update((currentCount) => currentCount + 1);
        // console.log('count', this.count());
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // // console.log('doubleCount', this.doubleCountFn());
        // // console.log('doubleCount', this.doubleCountFn());
        // this.count.update((currentCount) => currentCount + 1);
        // console.log('doubleCount', this.doubleCount());
        // console.log('doubleCount', this.doubleCount());
        // ------------------------------------------------------------------------------------
        // const showCount = signal(false);
        // const count = signal(0);
        // const conditionalCount = computed(() => {
        //     console.warn('Computed calculated');
        //     return showCount() ? `The count: ${count()}` : `Nothing`;
        // });
        // console.log(conditionalCount()); // Deps: showCount | calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Show count: true');
        // showCount.set(true);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log(conditionalCount()); // Deps: showCount, count | no calc
        // console.log(conditionalCount()); // Deps: showCount, count | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log('Show count: false');
        // showCount.set(false);
        // console.log(conditionalCount()); // Deps: showCount | calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // ------------------------------------------------------------------------------------
    }

    onMenuClick(event: Event) {
        this.menuClick.emit(event);

        // this.menuClick.emit();
        // this.menuClick.subscribe((outputEvent) => {
        //     console.log('Output emited', outputEvent);
        // });
    }
}
