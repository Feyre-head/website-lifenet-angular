import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./layout/main/main.component').then(m => m.MainComponent),
                children: [
                    {
                        path: 'home',
                        loadComponent: () =>
                            import('./content/home/home.component').then(m => m.HomeComponent)
                    },
                    {
                        path: 'about',
                        loadComponent: () =>
                            import('./content/about/about.component').then(m => m.AboutComponent)
                    },
                    {
                        path: 'plans',
                        loadComponent: () =>
                            import('./content/plans/plans.component').then(m => m.PlansComponent)
                    }
                ]
            }
        ]
    },
    {
        path: 'politica_privacidade',
        loadComponent: () =>
            import('./content/politica-privacidade/politica-privacidade.component').then(
                m => m.PoliticaPrivacidadeComponent
            )
    }
];
