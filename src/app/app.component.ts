import { Component, Input } from '@angular/core';
import { Listing } from './Listing'
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() lData:Listing;

  constructor(private rService:RedditService) { }

  ngOnInit(): void {
    this.rService.getResult().subscribe(

      (data: Listing)=>
        this.lData=data

    );
  }
}
