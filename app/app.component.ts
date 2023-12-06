import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NewCalc';
  toshow = '';
  currentvalue: any = '';
  valid: boolean = true;
  typecalc: string = '';
  sqaureroot: number = 25;

  listaImages = [];

  listaCalcolatrici = ['Normale', 'Scientifica', 'Bambini'];

  numeribambini = ['../assets/icon/zero.png','../assets/icon/uno.png','../assets/icon/due.png','../assets/icon/tre.png','../assets/icon/quattro.png','../assets/icon/cinque.png','../assets/icon/sei.png',
  '../assets/icon/sette.png','../assets/icon/otto.png','../assets/icon/nove.png','../assets/icon/più.png','../assets/icon/meno.png','../assets/icon/per.png','../assets/icon/diviso.png','../assets/icon/uguale.png']

  ngOninit() {
    if (this.valid == true) {
      this.typecalc = 'Normale';
    }
  }

  setValue(event: any) {
    this.typecalc=event.target.value
  }

  write(value: any) {
    if (this.currentvalue == '0') {
      this.currentvalue = value;
    }
    if (this.currentvalue != '0') {
      this.currentvalue = this.currentvalue + value;
    }
    this.toshow = this.currentvalue;
  }



  equals() {
    this.toshow = eval(this.currentvalue);
    this.currentvalue = this.toshow;
  }
  clear() {
    this.currentvalue = '';
    this.toshow = '0';
  }
  back() {
    this.currentvalue = this.currentvalue.slice(0, -1);
    this.toshow = this.currentvalue;
    if (this.toshow == '') {
      this.toshow = '0';
    }
  }
  pi() {
    this.currentvalue += Math.PI;
    this.toshow += 'π';
  }

  squareroots() {
    const radice: any = Math.sqrt(this.currentvalue);
    this.toshow = radice;
    this.currentvalue = radice;
  }
  square() {
    this.currentvalue += '** 2';
    this.toshow += '²';
  }
  percentage() {
    this.currentvalue += '/100*';
    this.toshow += '% of';
  }
}
