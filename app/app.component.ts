import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NewCalc';
  toshow = ''
  currentvalue = ''

write(value:any)
  {
if(this.currentvalue=='0'){this.currentvalue = value}
if (this.currentvalue !='0') 
{this.currentvalue =this.currentvalue + value}
this.toshow=this.currentvalue
  }
equals()
{
  this.toshow = eval(this.currentvalue)
  this.currentvalue = this.toshow
  
}
clear(){
this.currentvalue = '';
this.toshow = '0'}
back(){
  this.currentvalue = this.currentvalue.slice(0, -1)
  this.toshow = this.currentvalue
  if(this.toshow ==''){ this.toshow ='0'}
 

}
}
