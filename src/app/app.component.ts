import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { TasksLogic } from './helper.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  list: any;
  constructor(private http: HttpClient, private tasksLogic: TasksLogic) {}
  ngOnInit(): void {
    /* API call */
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => (this.list = data));
    /* Palindrom */
    let a = 'malayalam';
    let output = a.split('');
    let outPutReverse = [];

    let stringInput = 'English';
    let stringInputToArray = stringInput.split('');

    for (let i = stringInputToArray.length; i >= 0; i--) {
      outPutReverse.push(stringInputToArray[i]);
    }

    console.log('Reverese a string', outPutReverse.join(''));

    // possiblity of Palindrome
    this.tasksLogic.probabilityOfPalindrome('aab');
    this.tasksLogic.printUniqueCharacters
  }
  name = 'Angular ' + VERSION.major;
}
