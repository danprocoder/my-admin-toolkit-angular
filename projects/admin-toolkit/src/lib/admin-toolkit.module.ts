import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './app/container/container.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { TopnavComponent } from './app/topnav/topnav.component';
import { SidebarMenuItemComponent } from './app/sidebar-menu-item/sidebar-menu-item.component';
import { SidebarMenuComponent } from './app/sidebar-menu/sidebar-menu.component';
import { BrandComponent } from './app/brand/brand.component';
import { CardComponent } from './components/card/card.component';
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
import { TableComponent } from './components/table/table.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableColumnComponent } from './components/table-column/table-column.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { GraphComponent } from './components/graph/graph.component';
import { BoardListsComponent } from './board-lists/board-lists.component';
import { PanelFooterComponent } from './components/panel-footer/panel-footer.component';
import { AvatarListComponent } from './widgets/avatar-list/avatar-list.component';
import { RouterModule } from '@angular/router';
import { FeatherIconModule } from './feather-icon/feather-icon.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DraggableDirective } from './draggable.directive';
import { DropTargetDirective } from './directives/drag-and-drop/drop-target.directive';
import { IssueListComponent } from './widgets/issue/issue-list/issue-list.component';
import { IssueListCardComponent } from './widgets/issue/issue-list-card/issue-list-card.component';
import { IssueListHeaderComponent } from './widgets/issue/issue-list-header/issue-list-header.component';
import { IssueListHeaderTextComponent } from './widgets/issue/issue-list-header-text/issue-list-header-text.component';
import { IssueListFooterComponent } from './widgets/issue/issue-list-footer/issue-list-footer.component';
import { ScrollToDirective } from './directives/scroll-to/scroll-to.directive';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    ContainerComponent,
    SidebarComponent,
    TopnavComponent,
    SidebarMenuItemComponent,
    SidebarMenuComponent,
    BrandComponent,
    CardComponent,
    TopnavRightMenuItemComponent,
    TopnavNotificationComponent,
    ContentComponent,
    DropdownDirective,
    TopnavUserDropdownComponent,
    RowComponent,
    ColComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent,
    TableComponent,
    TableHeadComponent,
    TableRowComponent,
    TableColumnComponent,
    DataTableComponent,
    GraphComponent,
    BoardListsComponent,
    AvatarListComponent,
    DropdownComponent,
    DraggableDirective,
    DropTargetDirective,
    IssueListComponent,
    IssueListCardComponent,
    IssueListHeaderComponent,
    IssueListHeaderTextComponent,
    IssueListFooterComponent,
    ScrollToDirective,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatherIconModule
  ],
  exports: [
    DropdownDirective,
    DraggableDirective,
    DropTargetDirective,
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
    ColComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent,
    CardComponent,
    TableComponent,
    TableHeadComponent,
    TableRowComponent,
    TableColumnComponent,
    DataTableComponent,
    GraphComponent,
    AvatarListComponent,
    DropdownComponent,
    IssueListComponent,
    IssueListCardComponent,
    IssueListHeaderComponent,
    IssueListHeaderTextComponent,
    IssueListFooterComponent,
    ScrollToDirective,
    PaginationComponent
  ]
})
export class AdminToolkitModule { }
