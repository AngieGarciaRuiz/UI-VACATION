import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-avatars',
    imports: [MatCardModule, MatIconModule, MatButtonModule],
    templateUrl: './avatars.component.html',
    styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent {}