import { Component, ViewChild, ElementRef} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollerModule } from 'primeng/scroller';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule,CardModule, CommonModule, BadgeModule, TabMenuModule, ButtonModule, SidebarModule, ScrollerModule, AvatarModule, AvatarGroupModule, ScrollPanelModule, AccordionModule, PanelMenuModule, MegaMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(){}
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
        {
            label: 'Informes',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },

        {
            label: 'Salir',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  sidebarVisible: boolean = true;
}

