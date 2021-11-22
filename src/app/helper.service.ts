import { Inject, Injectable } from '@angular/core';

@Injectable()
export class TasksLogic {
  printUniqueCharacters(arrayInput){
    for()
  }


  probabilityOfPalindrome(str) {
    let probOfPalindrome = str;
    let occurance = new Map();
    let splittedString = probOfPalindrome.split('');
    splittedString.forEach((ele) => {
      if (occurance.has(ele)) {
        let repeatedTimes = occurance.get(ele);
        occurance.set(ele, repeatedTimes + 1);
      } else {
        occurance.set(ele, 1);
      }
    });
    let oddValues = 0;
    for (let [key, value] of occurance) {
      if (value % 2 !== 0) {
        oddValues++;
      }
    }
    console.log(
      oddValues > 1
        ? 'yes it is not possoble'
        : `Possible for a palindrome for word ${probOfPalindrome}`
    );
  }
}
