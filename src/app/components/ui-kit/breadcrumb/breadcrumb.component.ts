import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-breadcrumb',
    imports: [MatCardModule],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {}