import { style, animate, trigger, transition, state } from '@angular/animations';

export const EnterLeaveAnimation = trigger('EnterLeave', [
    transition(':enter', [
        style({transform: 'translateY(25%)', opacity: 0, position: 'absolute'}),
        animate('300ms ease-in-out', style({transform: 'translateY(0)', opacity: 1, position: 'relative'}))
    ]),
    transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1, position: 'relative'}),
        animate('300ms ease-in-out', style({transform: 'translateY(25%)', opacity: 0, position: 'absolute'}))
    ])
])
