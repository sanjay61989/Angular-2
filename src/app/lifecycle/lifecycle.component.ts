import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  
  name:any;
  changeLog: any;
  constructor() {
    console.log("constructor called");    
   }
  ngOnChanges(changes:SimpleChanges) { 
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log(this.changeLog);    
  }
  ngOnInit() { 
    console.log("on init called");
  }
  ngDoCheck() { 
    console.log("do check called");
  }
  ngAfterContentInit() { 
    console.log("after content init called");
  }
  ngAfterContentChecked() { 
    console.log("after content checked called");
  }
  ngAfterViewInit() { 
    console.log("after view init called");
  }
  ngAfterViewChecked() { 
    console.log("after view checked called");
  }
  ngOnDestroy() { 
    console.log("on destroy called");
  }
}
