import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // @ViewChild(Cock) serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput);
    // console.log(nameInput.value);
    console.log(this.serverContentInput);

    const event1 = {serverName: nameInput.value,
                    serverContent: this.serverContentInput.nativeElement.value};

                    this.serverCreated.emit(event1);

  }

  onAddBlueprint() {
    // this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.serverContentInput.nativeElement.value});

  }



}
