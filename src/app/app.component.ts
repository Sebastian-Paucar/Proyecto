import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AvatarModule,
    AvatarGroupModule,
    ReactiveFormsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'MackroComponents';
  ngOnInit() {
    this.primengConfig.ripple = true;
}

}
