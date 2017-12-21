import { Routes, RouterModule } from '@angular/router';
import { ZipCodeComponent } from './zip-code/zip-code.component';
 
const v1Routes: Routes = [
    {path: 'zip-code', component: ZipCodeComponent },
   
        // data: { securityAction: 'incometax' },
        // canActivate: [SecurityGuard],
        // canActivateChild: [SecurityGuard],
        // children: [
        //     { path: 'depreciation', component: DepreciationComponent, children: depreciationRoutes,
        //         data: {securityAction: 'incometax.depreciation'} },
        //     { path: 'dashboard', component: ITDashbardComponent },
        //     { path: 'partnership', component: PartnershipComponent,
        //         data: {securityAction: 'administration.partnership'} },
        //     { path: 'disguised-sale', component: DisguisedSaleComponent },
        //     { path: 'like-kind-exchange', component: LikeKindExchangeComponent },
        //     { path: 'partnership-detail', component: PartnershipCrudComponent,
        //         data: {securityAction: 'administration.partnership'}, canDeactivate: [CanDeactivateGuard] },
        //     { path: 'case-management', component: CaseManagementComponent },
        //     { path: 'associate-asset-properties', component: AssociateAssetPropertiesComponent },
        //     { path: 'drop-down', component: PartnershipDropDownComponent, canDeactivate: [CanDeactivateGuard]  },
        //     { path: 'technical-termination', component: TechnicalTerminationComponent },
        //     { path: 'termination', component: TerminationComponent },
        //     { path: 'allocation', component: AllocationsComponent },
        //     { path: 'distributions', component: DistributionsComponent },
        //     { path: 'tax-optimization/forecast-scenario', component: ForecastScenarioComponent },
        //     { path: 'tax-optimization/build-scenario', component: BuildScenarioComponent },
        //     { path: 'tax-optimization/scenario-results/:caseId', component: ScenarioResultsComponent },
        //     { path: 'tax-optimization/forecast/:caseId', component: ForecastComponent },
        //     { path: 'drop-down-detail', component: DropDownDetailComponent },
        //     { path: 'asset-detail', component: AssetDetailComponent },
        //     { path: 'drop-down-detail', component: DropDownDetailComponent },
        //     { path: 'transaction-detail', component: TransactionDetailComponent },
        //     { path: 'asset-detail', component: AssetDetailComponent },
        //     { path: 'review-allocation', component: ReviewAllocationComponent },
        //     { path: 'disguised-sale-detail', component: DisguisedSaleDetailComponent },
        //     { path: 'like-kind-exchange-detail', component: LikeKindExchangeDetailComponent },
        //     { path: 'technical-termination-detail', component: TechnicalTerminationDetailComponent },
        //     { path: 'termination-detail', component: TerminationDetailComponent },
        //     { path: 'tax-optimization/tax-projection/:timeLine', component: TaxProjectionComponent},
        //     { path: 'tax-optimization/tax-manager', component: TaxManagerComponent},
        //     { path: 'tax-optimization', component: TaxOptimizationConfigurationWizardComponent},
        //     { path: 'book-allocation-group', component: BookAllocationGroupComponent},
        //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        // ]
    
];

export const V1Routing = RouterModule.forChild(v1Routes);
