import { HomeComponent } from './home/home.component';

import { BookComponent } from './book/book.component';
import { StatusComponent } from './status/status.component';
import { ApplylistComponent } from './applylist/applylist.component';
import { NotFoundComponent} from './notfound/notfound.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';

export const AppRoutes: any = [
    { path: "", component: HomeComponent },

    { path: "book", component: BookComponent },
    { path: "status", component: StatusComponent },
    { path: "aplylst", component: ApplylistComponent },
    { path: "404", component: NotFoundComponent},
    { path: "terms", component: TermsComponent},
    { path: "policy", component: PolicyComponent},
    {path: '**', redirectTo: '/404'}
];

export const AppComponents: any = [
    HomeComponent,
];