import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets:Array<any>;

  constructor() { 
    this.tickets = new Array<Ticket>();
    this.tickets = [
      {
        _id:1,
        dni:34983895,
        precioReal:50,
        tipoEspectador:"local",
        fechaCobro:new Date().getTime(),
        precioCobrado:0
      }
    ]
  }

  getIdDisponible(){
    var maxid: number;
    maxid = 0;
    for ( var i = 0; i < this.tickets.length;i++){
    if(maxid < this.tickets[i]._id){
    maxid = this.tickets[i]._id;
    }
    };
    return (maxid + 1);
    }

  crearTicket(ticket: Ticket){
    ticket._id=this.getIdDisponible();
    this.tickets.push(ticket);
  }

  eliminarTicket(ticket: Ticket){
    this.tickets.pop();
  }

  actualizarTicket(ticket: Ticket){
    
  }

  obtenerTicket(id:number){
    let ticket:Ticket = new Ticket();
    let indexTicket:number = this.tickets.findIndex(tkt => (tkt._id == id));
    ticket = this.tickets[indexTicket];
    return ticket;
  }

  obtenerTodos(){
    return this.tickets;
  }


}
