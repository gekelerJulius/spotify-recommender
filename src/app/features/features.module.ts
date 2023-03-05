import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WordSearchComponent } from "./word-search/word-search.component";
import { SharedModule } from "../shared/shared.module";
import { FeaturesRoutingModule } from "./features-routing.module";

@NgModule({
  declarations: [WordSearchComponent],
  imports: [CommonModule, SharedModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
