import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  palabras = ["monitor","teclado","gabinete","raton","disco","televisor","programa","pantalla","memoria","sistema"];
  palabraRandom!:string;

  constructor() {}

  obtenerPalabraRandom(){
    this.palabraRandom = this.palabras[Math.floor(Math.random()*this.palabras.length)];
    console.log(this.palabraRandom);
    return this.palabraRandom;
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
