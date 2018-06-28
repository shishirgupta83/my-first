import { Component, OnInit } from '@angular/core';
import { FetchStatesService } from '../fetch-states.service';
import { State } from '../state';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.css']
})
export class StateCardComponent implements OnInit {

  stringo :string[] = [];
  arrState: State []=[];
  myControl: FormControl = new FormControl();
  options :string[] = [] 
  filteredOptions: Observable<string[]>;
  
  constructor(private basicservice_instance: FetchStatesService) { }
  
  ngOnInit() {
  this.basicservice_instance.getStateDetails().subscribe(karrState => this.arrState = karrState);
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  setup(): void {
    var j = 0;
      for (j=0;j<=3;j++){
        //this.options[j] = this.zanny(''+j);
        this.options[j] = this.arrState[j].location;
        
      }
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onEnter(value: string) { 
    
    }

}
