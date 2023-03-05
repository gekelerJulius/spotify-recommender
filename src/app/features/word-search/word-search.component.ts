import { Component, ElementRef, ViewChild } from "@angular/core";
import { InputService } from "../../shared/services/input/input.service";
import { Subscription } from "rxjs";
import { SpotifyService } from "../../shared/services/spotify/spotify.service";

@Component({
  selector: "app-word-search",
  templateUrl: "./word-search.component.html",
  styleUrls: ["./word-search.component.scss"],
})
export class WordSearchComponent {
  constructor(
    private inputService: InputService,
    private spotifyService: SpotifyService
  ) {
    this.subscriptions = [
      this.inputService.confirmed$.subscribe(() => {
        this.searchInput?.nativeElement?.blur();
      }),
    ];
  }

  @ViewChild("searchInput") searchInput:
    | ElementRef<HTMLInputElement>
    | undefined;
  subscriptions: Subscription[] = [];
  searchResult: string = "";

  async onInputBlur($event: HTMLInputElement): Promise<void> {
    const value = $event.value;
  }
}
