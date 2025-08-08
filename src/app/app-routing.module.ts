import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { MainComponent } from "./layout/main/main.component";
import { HomeComponent } from "./content/home/home.component";
import { AboutComponent } from "./content/about/about.component";
import { PlansComponent } from "./content/plans/plans.component";
import { PoliticaPrivacidadeComponent } from "./content/politica-privacidade/politica-privacidade.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: '', component: MainComponent, children: [
                    { path: '#home', component: HomeComponent },
                    { path: '#about', component: AboutComponent},
                    { path: '#plans', component: PlansComponent}
                ]
            }
        ]
    },
    {
        path: 'politica_privacidade', component: PoliticaPrivacidadeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }