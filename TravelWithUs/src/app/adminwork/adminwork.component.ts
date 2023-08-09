import { Component, OnInit } from '@angular/core';
import { user } from '../models/User.models';
import { AdminactionService } from 'src/service/adminaction.service';

@Component({
  selector: 'app-adminwork',
  templateUrl: './adminwork.component.html',
  styleUrls: ['./adminwork.component.css']
})
export class AdminworkComponent implements OnInit {

  card: user[] = [];
  cards: user = {
    userId: 0,
    userName: '',
    userEmail: '',
    password: '',
    role: '',
    status: ''
  };

  constructor(private cardservice: AdminactionService) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardservice.getAlladmins()
      .subscribe(
        response => {
          this.card = response;
          console.log(response);
        }
      );
  }
statusOptions=['Active','InActive'];
  onSubmit() {
    if (this.cards.userId === 0) {
      this.cardservice.addadmins(this.cards)
        .subscribe(
          response => {
            this.getAllCards();
          }
        );
    } else {
      this.UpdateCard(this.cards);
    }
  }

  PopulateCard(card: user) {
    this.cards = card;
  }

  deletecard(id: number) {
    this.cardservice.deletemethod(id)
      .subscribe(
        response => {
          this.getAllCards();
        }
      );
  }

  UpdateCard(crmd: user) {
    this.cardservice.Updateadmins(crmd)
      .subscribe(
        response => {
          this.getAllCards();
        }
      );
  }

  
  
}
