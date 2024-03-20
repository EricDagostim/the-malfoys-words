import { Component } from '@angular/core';
import { WordInputComponent } from '../../../components/word-input/word-input/word-input.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    WordInputComponent
  ],
  templateUrl: './index.component.html',  
})
export class IndexComponent {

}
