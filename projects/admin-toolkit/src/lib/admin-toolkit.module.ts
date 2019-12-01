import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './app/container/container.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { TopnavComponent } from './app/topnav/topnav.component';
import { SidebarMenuItemComponent } from './app/sidebar-menu-item/sidebar-menu-item.component';
import { SidebarMenuComponent } from './app/sidebar-menu/sidebar-menu.component';
import { BrandComponent } from './app/brand/brand.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { TopnavNotificationComponent } from './widgets/topnav-notification/topnav-notification.component';
import { ContentComponent } from './app/content/content.component';
import { TopnavRightMenuItemComponent } from './app/topnav-right-menu-item/topnav-right-menu-item.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { TopnavUserDropdownComponent } from './widgets/topnav-user-dropdown/topnav-user-dropdown.component';
import { RowComponent } from './components/row/row.component';
import { ColComponent } from './components/col/col.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelHeaderComponent } from './components/panel-header/panel-header.component';
import { PanelBodyComponent } from './components/panel-body/panel-body.component';

@NgModule({
  declarations: [
    ContainerComponent,
    SidebarComponent,
    TopnavComponent,
    SidebarMenuItemComponent,
    SidebarMenuComponent,
    BrandComponent,
    CardComponent,
    CardHeaderComponent,
    TopnavRightMenuItemComponent,
    TopnavNotificationComponent,
    ContentComponent,
    DropdownDirective,
    TopnavUserDropdownComponent,
    RowComponent,
    ColComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContainerComponent,
    SidebarComponent,
    TopnavComponent,
    SidebarMenuItemComponent,
    SidebarMenuComponent,
    BrandComponent,
    TopnavRightMenuItemComponent,
    TopnavNotificationComponent,
    TopnavUserDropdownComponent,
    ContentComponent,
    RowComponent,
    ColComponent
  ]
})
export class AdminToolkitModule { }
