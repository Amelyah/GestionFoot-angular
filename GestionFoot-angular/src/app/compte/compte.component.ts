import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  person : any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader()

        reader.onload = (ev: any) => {
            this.person.photo = ev.target.result
        }
        reader.readAsDataURL(event.target.files[0])

    }
}





}
