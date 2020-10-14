import { Component, OnInit, Input } from '@angular/core';
import { PostDetails } from '../Listing';


@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  @Input() listing:PostDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
