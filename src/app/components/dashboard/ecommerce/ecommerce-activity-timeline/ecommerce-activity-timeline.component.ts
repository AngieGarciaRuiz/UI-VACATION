import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-ecommerce-activity-timeline',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './ecommerce-activity-timeline.component.html',
    styleUrls: ['./ecommerce-activity-timeline.component.scss']
})
export class EcommerceActivityTimelineComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}