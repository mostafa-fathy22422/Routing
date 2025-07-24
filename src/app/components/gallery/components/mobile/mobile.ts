import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-mobile',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './mobile.html',
  standalone: true,
  styleUrl: './mobile.css'
})
export class Mobile {

}
