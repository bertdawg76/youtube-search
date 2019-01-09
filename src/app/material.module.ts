import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatToolbarModule,
} from "@angular/material";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports:[
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatToolbarModule,
    ],
    exports:[
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatToolbarModule,
    ],
    declarations:[],
    providers:[]
})

export class MaterialModule {}