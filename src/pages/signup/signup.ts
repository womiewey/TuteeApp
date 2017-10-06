import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http, Headers, RequestOptions} from '@angular/http';
import { RemoteserviceProvider } from '../../providers/remoteservice/remoteservice';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [RemoteserviceProvider]
})
export class SignupPage {
  password:any;
  first_name:any;
  last_name:any;
  email:any;
  username:any;
  contact_number:any;
  num:any;
  value:any;
  number:any;
  constructor(private remoteService : RemoteserviceProvider, public navctrl: NavController, public http: Http){
   
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.initialize();
    this.initialize();
    this.initialize();
    this.initialize();
    
  }
  login(){
    this.navctrl.popToRoot();
  }
  info(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let data = {
      password:this.password,
      first_name:this.first_name,
      last_name:this.last_name,
      email:this.email,
      username:this.username
    };
  
    this.http.post('http://127.0.0.1:8000/tutorial/accounts/', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
          console.log(res.json());
      }, (err) => {
          console.log(err);
      });

      this.postProfile();
    
  }
  initialize(){
    this.remoteService.loadaccounts().subscribe(

              data=>{       
                  // this.value=data.length+1;
                  
                  
                  var x =data.length;
                    for(var i=0,x=data.length;i++;){
                      this.value=data[i].id;
                      console.log("number" + this.value);
                      return() => this.value;
                      
                                  
                                  
                              }
                  },
              err => {
                  console.log(err);
              },
              () => console.log('Done')
              
          )
          ;
          
  }
  type(){
    this.remoteService.loadaccounts().subscribe(

              data=>{       
                  this.value=data.length+1;
                  console.log("number" + this.value);
                  return() => this.value;
                  },
              err => {
                  console.log(err);
              },
              () => console.log('Done')
              
          )
          ;
          this.info();
  }
  postProfile(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let data = {
      
      "user": this.value,
      "type": "tutee",
      "contact_number": this.contact_number
    };
    
    console.log('value' + this.value);
    this.http.post('http://127.0.0.1:8000/tutorial/userprofile/', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
          console.log(res.json());
      }, (err) => {
          console.log(err);
      });
    this.navctrl.popToRoot();
  }
}
