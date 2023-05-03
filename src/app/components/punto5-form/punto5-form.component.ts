import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5-form',
  templateUrl: './punto5-form.component.html',
  styleUrls: ['./punto5-form.component.css']
})
export class Punto5FormComponent implements OnInit {

  ticket!:Ticket;
  accion:string = "new";

  constructor(private ticketService: TicketService, 
    private router:Router, private activatedRoute:ActivatedRoute) {
      this.ticket=new Ticket();
  }

  aplicarDescuento(){
    if(this.ticket.tipoEspectador=="L"){
      this.ticket.precioCobrado = this.ticket.precioReal - (this.ticket.precioReal*0.20);
    }
    return this.ticket.precioCobrado;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params[this.ticket._id] == "0"){
      this.accion = "new";
      }else{
      this.accion = "update";
      this.cargarTicket(params[this.ticket._id]);
      }
      });
  }

  public enviarTicket(){
    console.log("Enviando ...");
    this.ticketService.crearTicket(this.ticket);
    this.router.navigate(['punto5']);
    this.ticket.precioCobrado=this.aplicarDescuento();
    this.ticket = new Ticket();

    }

  public cargarTicket(id:number){
    this.ticket = this.ticketService.obtenerTicket(id);
    }

}
