import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CountdownComponent } from "./countdown/countdown.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: CountdownComponent },
  { path: "home", component: HomeComponent },
  { path: "countdown", component: CountdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
