import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',  
})
export class WordInputComponent implements OnInit {
  public word: any = {
    word: 'carro',
    wordLength: 5,
    wordArray: ['c', 'a', 'r', 'r', 'o'],
    wordArrayLength: 5,
    wordArrayIndex: 0,    
  }

  constructor(
  ){} 

  ngOnInit(): void {        
    this.focusOnInput();
  }
  
  focusOnInput(): void {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if ((input as HTMLInputElement).value.length === (input as HTMLInputElement).maxLength) {
          const next = inputs[index + 1] as HTMLInputElement;
          if (next) {
            next.focus();
          }
        }

        if ((input as HTMLInputElement).value.length === 0){
          const previous = inputs[index - 1] as HTMLInputElement;
          if (previous) {
            previous.focus();
          }
        }
      });
    });
  }

}
