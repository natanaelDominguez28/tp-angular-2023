import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {

  tickets: Array<Ticket>;
  constructor(private ticketService: TicketService, private router:Router) { 
    this.tickets = new Array<Ticket>();
    this.getTickets();
  }

  getTickets(){
    this.tickets = this.ticketService.obtenerTodos();
  }

  agregarTicket():void{
    //redireccionara a al formulario
    this.router.navigate(['punto5-form', 0]);
  }

  elegirTicket(ticket: Ticket):void{
    this.router.navigate(["punto5-form", ticket._id])
  }

  borrarTicket(ticket:Ticket):void{
    this.ticketService.eliminarTicket(ticket);
  }

  ngOnInit(): void {
  }

}
