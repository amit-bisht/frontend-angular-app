import { NgModule } from "@angular/core";
import { Routes,RouterModule, } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserNotFoundComponent } from "./user-not-found/user-not-found.component";
import { UserComponent } from "./user/user.component";
const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'user/:user-id',component:UserComponent},
    {path:'user-not-found',component:UserNotFoundComponent},
    {path:'page-not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'/page-not-found'}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}