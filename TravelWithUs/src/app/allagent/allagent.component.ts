import { Component,OnInit } from '@angular/core';
import { TravellingAgent } from '../models/travelligent-agent.model';
import { AdminactionService } from 'src/service/adminaction.service';

@Component({
  selector: 'app-allagent',
  templateUrl: './allagent.component.html',
  styleUrls: ['./allagent.component.css']
})
export class AllagentComponent implements OnInit {

  doc:TravellingAgent[]=[];
  constructor(private adminser:AdminactionService){}
ngOnInit(): void {
      this.adminser.getAgents().subscribe((res: any[])=>{
        this.doc = res; 

      })
}
}
