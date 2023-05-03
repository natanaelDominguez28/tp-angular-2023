import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  palabras = ["monitor","teclado","gabinete","raton","disco","televisor","programa","pantalla","memoria","sistema"];
  errores:number = 0;
  aciertos:number = 0;
  iteraciones:number = 0;
  opciones!:number;
  respuesta!:number;
  palabraRandom:string=" ";
  tarea!:string;
  mensaje!:string;

  constructor() {}

  jugar(){
    this.obtenerPalabraRandom();
    this.obtenerOpcionRandom();
    this.iteraciones++;
  }

  comprobar(){
    if(this.opciones==1){
      if(this.respuesta==this.contarVocales()){
        this.aciertos++;
        this.mensaje = "CORRECTO :D!!!"
      }else{
        this.errores++;
        this.mensaje = "RESPONDISTE MAL :("
      }
    }
    if(this.opciones==2){
      if(this.respuesta==this.contarConsonantes()){
        this.aciertos++;
        this.mensaje = "CORRECTO :D!!!"
      }else{
        this.errores++;
        this.mensaje = "RESPONDISTE MAL :("
      }
    }
    if(this.opciones==3){
      if(this.respuesta==this.totalLetras()){
        this.aciertos++;
        this.mensaje = "CORRECTO :D!!!"
      }else{
        this.errores++;
        this.mensaje = "RESPONDISTE MAL :("
      }
    }
    if(this.opciones==4){
      if(this.respuesta==this.totalSilabas()){
        this.aciertos++;
        this.mensaje = "CORRECTO :D!!!"
      }else{
        this.errores++;
        this.mensaje = "RESPONDISTE MAL :("
      }
    }
  }

  obtenerPalabraRandom(){
    this.palabraRandom = this.palabras[Math.floor(Math.random()*this.palabras.length)];
    console.log(this.palabraRandom);
    return this.palabraRandom;
  }

  obtenerOpcionRandom(){
    this.opciones = Math.floor(Math.random()*4)+1;
    if(this.opciones==1){
      this.tarea="cuántas vocales tiene?"
    }
    if(this.opciones==2){
      this.tarea="cuántas consonantes tiene?"
    }
    if(this.opciones==3){
      this.tarea="cuántas letras tiene?"
    }
    if(this.opciones==4){
      this.tarea="cuántas sílabas tiene?"
    }
    console.log(this.opciones);
    console.log(this.tarea);
    return this.tarea;
  }

  esVocal(letra:string):boolean{
    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')
      return true;
    else
      return false;
  }

  contarVocales(){
    let vocales:number=0;
    for(let i=0;i<this.palabraRandom.length;i++){
      if(this.esVocal(this.palabraRandom[i])==true){
        vocales++;
      }
    }
    //console.log(vocales);
    return vocales;
  }

  contarConsonantes(){
    let consonantes:number=0;
    for(let i=0;i<this.palabraRandom.length;i++){
      if(this.palabraRandom[i]>'a' && this.palabraRandom[i]<='z' && this.esVocal(this.palabraRandom[i])==false){
        consonantes++;
      }
    }
    //console.log(consonantes);
    return consonantes;
  }

  totalLetras(){
    return this.palabraRandom.length;
  }

  totalSilabas(){
    return this.contarVocales();
  }

  ngOnInit(): void {
  }

}
