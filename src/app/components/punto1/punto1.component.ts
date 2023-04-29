import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  //producto:Producto;
  productos: Array<Producto>;
  arrayCarrito!: Array<Producto>;

  constructor() { 
    //this.producto = new Producto();
    this.productos = new Array<Producto>();
    //this.agregarAlCarrito(this.producto);
    this.productos.push(new Producto("Notebook ASUS","Notebook ASUS X515EA 15.6 FHD Core I3 1115G4 4GB 256GB SSD NVMe Freedos","assets/img/notebook.jpg",210000));
    this.productos.push(new Producto("Monitor LG","Monitor LG LED 24'' 24MP400-B 75Hz IPS FHD FreeSync HDMI","assets/img/monitor.jpg",58000));
    this.productos.push(new Producto("Gabinete Thermaltake","Gabinete Thermaltake V200 Tempered Glass RGB  Edition Mid Tower ATX","assets/img/gabinete.jpg",45050));
    this.productos.push(new Producto("Disco SSD Kingstone 480 GB","Disco Sólido SSD Kingston 480GB A400 500MB/s","assets/img/disco_ssd_480.jpg",20200));
    this.productos.push(new Producto("Silla Gamer","Silla Gamer Checkpoint FIFA MT-2000 Qatar","assets/img/silla_gamer.jpg",121400));
    this.productos.push(new Producto("Memoria DDR4 32GB","Memoria KingDian DDR4 32GB 2666MHz SODIMM Notebook","assets/img/memoria_ram.jpg",41600));
    this.arrayCarrito = new Array<Producto>();
  }

  agregarAlCarrito(producto:Producto){
   
    this.arrayCarrito.push(producto);
    console.log(producto);
  }

  obtenerTotal(){
    let total = 0;
    for(let elementos of this.arrayCarrito){
      total+=elementos.precio;
    }
    return total;
  }

  ngOnInit(): void {
  }

}
