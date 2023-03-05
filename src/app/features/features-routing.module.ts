import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WordSearchComponent } from "./word-search/word-search.component";

const routes: Routes = [{ path: "", component: WordSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
