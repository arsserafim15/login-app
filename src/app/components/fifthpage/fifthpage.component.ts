import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-dashboard',
    standalone: false,

    templateUrl: './fifthpage.component.html',
    styleUrl: './fifthpage.component.css'
})
export class FifthpageComponent {
    constructor(private _router: Router) {

    }
    LogOut() {
        this._router.navigate(['/login']);
        console.log('you successfully logged out...');
    }
}