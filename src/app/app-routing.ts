import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    // default route
    { path: '', redirectTo: 'zip-code', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);