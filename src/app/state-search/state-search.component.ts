import { Component, OnInit } from '@angular/core';
//import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
//import {map, startWith} from 'rxjs/operators';
import { FetchStatesService } from '../fetch-states.service';
import { State } from '../state';

@Component({
  selector: 'app-state-search',
  templateUrl: './state-search.component.html',
  styleUrls: ['./state-search.component.css']
})
export class StateSearchComponent implements OnInit {
  constructor(private basicservice_instance: FetchStatesService) { }
 
  ngOnInit() {
    //this.fetchstatedetails();
        
//    this.filteredOptions = this.myControl.valueChanges
 //     .pipe(
   //     startWith(''),
 //       map(val => this.filter(val))
  //    );

  }

 
  //arrState: State [] ;
  //t: State[]=[];
  
 
  //myControl: FormControl = new FormControl();
  //  options = [
  //  'One',
  //  'Two',
  //  'Three'
  // ];
   //shoptions =[];
   //filteredOptions: Observable<string[]>;

  
  /*fetchstatedetails(){
    this.basicservice_instance.getStateDetails().subscribe(arrState => this.arrState = arrState);
    for(var i = 0; i <= 3; i++)
  {
    this.t[i] = this.arrState[i];
     
    //this.options.push(this.arrState[i].name);
    //this.shoptions[i] = this.arrState[i].name;
    //this.options[i] = i+'';
  }
  }*/
  /*filter(val: string): string[] {
      return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }*/

}
