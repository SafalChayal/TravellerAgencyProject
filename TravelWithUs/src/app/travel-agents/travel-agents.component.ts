import { Component, OnInit } from '@angular/core';
import { TravellingAgent } from '../models/travelligent-agent.model'; 
import { TravelDataService } from 'src/service/travel-data.service';

@Component({
  selector: 'app-travel-agents',
  templateUrl: './travel-agents.component.html',
  styleUrls: ['./travel-agents.component.css']
})
export class TravelAgentsComponent implements OnInit {
  travelingAgents: TravellingAgent[] = [];

  constructor(private travelDataService: TravelDataService) { }

  ngOnInit() {
    this.loadTravelingAgents();
  }

  loadTravelingAgents() {
    this.travelDataService.getTravelingAgents().subscribe(
      (agents: TravellingAgent[]) => {
        this.travelingAgents = agents;
        console.log(this.travelingAgents);
      },
      (error) => {
        console.error('Error fetching traveling agents:', error);
      }
    );
  }
}
