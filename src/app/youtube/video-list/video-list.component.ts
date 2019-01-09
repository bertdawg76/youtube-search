import {Component, OnInit, Input} from '@angular/core';
import { trigger,style,transition,animate,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
    animations: [
        trigger('listAnimation', [
            transition('* => *', [
                query(':enter', style({ opacity: 0 }), {optional: true}),
                query(':enter', [
                    style({ opacity: 0 }),
                    stagger(30, [
                        animate('0.3s', style({ opacity: 1 }))
                    ], )
                ], {optional: true})
            ])
        ])
    ]
})
export class VideoListComponent implements OnInit {
    @Input() videos;

    constructor() {}

    ngOnInit() {}
}
