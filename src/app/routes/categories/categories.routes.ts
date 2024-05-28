import { Routes } from '@angular/router';
import { NewCategoryPageComponent } from './management/new-category-page/new-category-page.component';
import { EditCategoryPageComponent } from './management/edit-category-page/edit-category-page.component';
import { CategoryTableListGroupComponent } from '../../features/categories/components/category-table-list-group/category-table-list-group.component';
import { DeleteCategoryComponent } from '../../features/categories/components/delete-category/delete-category.component';
import { CanDeactivateGuard } from '../../features/categories/guards/can-deactivate.guard';
import { EditCategoryFormComponent } from '../../features/categories/components/edit-category-form/edit-category-form.component';

export const categoriesRoutes: Routes = [
  {
    path: 'categories/management/new',
    component: NewCategoryPageComponent,
  },
  {
    path: 'categories/management/edit/:id',
    component: EditCategoryFormComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'categories/management/edit/:id',
    component: EditCategoryPageComponent,
  },
  {
    path: 'categories/management/delete/:id',
    component: DeleteCategoryComponent,
  },
  {
    path: 'categories/table',
    component: CategoryTableListGroupComponent,
  },
];
