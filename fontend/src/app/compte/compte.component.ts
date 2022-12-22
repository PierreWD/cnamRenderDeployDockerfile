import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../_classes/Profile';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  submited:Boolean;
  profile:Profile;
  name:String ='';
  prenom:String ='';
  adresse:String ='';
  CP:String='' ;
  Email:String ='';
  Ville:String ='';
  Tel:String ='';
  Civilite:String ='--';
  Password:String ='';
  Password2:String ='';
  Login:String ='';
  pays:String ='';

  ngOnInit() {

  }

  constructor() {
    this.profile=new Profile("","","","","","","","","","","");
    this.submited=false;
  }


  submit(){   
    console.log("submit")
    if(this.name==''||this.prenom==''||this.Login==''||this.Password==''||this.Password2==''){
      alert("Les champs obligatoires ne sont pas complets")
    }else{
      if(this.Password==this.Password2){
        this.profile=new Profile(this.name,this.prenom,this.adresse,this.Civilite,this.Email,this.Ville,this.Tel,this.Civilite,this.Password,this.Login,this.pays);
        this.submited=true;
      }else{
        alert("les deux mots de passe de sont pas identiques")
      }   
    }
  }
}
