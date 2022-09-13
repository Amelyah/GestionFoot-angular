import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Compte } from '../model';
import { CompteHttpService } from './compte-http.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private compteHttpService : CompteHttpService) { }

  formCompte: Compte;
  auth : AuthService = this.authService;

  ngOnInit(): void {
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      console.log(fileList[0].name);

      let imgPreview = document.getElementById('imagePreview');
      imgPreview.style.backgroundImage = "url('../../assets/medias/img/"+fileList[0].name+"')";
      console.log(imgPreview.style.backgroundImage);
      imgPreview.style.backgroundRepeat = "no-repeat";
      imgPreview.style.backgroundSize = "50px 50px";
      imgPreview.style.backgroundPosition = "center";
    }
}

  afficheLogin() : string {
    //return localStorage.getItem('login');
    return this.authService.compte.login;
  }

  afficheEmail() : string {
    if(this.authService.compte.email == null){
      return "Aucun email renseigné";
    }
    return this.authService.compte.email;

   /* if(localStorage.getItem('email') == null){
      return "Aucun email renseigné";
    }
    return localStorage.getItem('email');*/
  }

  afficheHasEquipe() : string {
    if(this.authService.compte.hasEquipe == true){
      return "Oui";
    }
    return "Non";
  }
    /*if(localStorage.getItem('hasEquipe') == 'true'){
      return "Oui";
    }
    return "Non";
  }*/

  edit(id: number) {
    this.compteHttpService.findById(id).subscribe(resp => {
      this.formCompte = resp;
    });
  }

  save() {
    this.compteHttpService.save(this.formCompte);
    this.authService.compte = this.formCompte;
    this.cancel();
  }

  cancel() {
    this.formCompte = null;
  }

}
