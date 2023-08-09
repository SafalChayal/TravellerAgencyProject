import { Component,OnInit } from '@angular/core';
import { AdminactionService } from 'src/service/adminaction.service';
import { Gallery } from '../models/gallery.models';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  doc : Gallery[]=[];
  constructor(private tourservice :AdminactionService){}
  ngOnInit(): void {
    this.tourservice.getImages().subscribe((res: any[])=>{
      this.doc = res; 

    });
  }

}
