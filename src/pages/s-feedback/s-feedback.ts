import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { RemoteserviceProvider } from '../../providers/remoteservice/remoteservice';
/**
 * Generated class for the SFeedbackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-s-feedback',
  templateUrl: 's-feedback.html',
  providers: [RemoteserviceProvider]
})
export class SFeedbackPage {
  message:any;
  name:any;
  email: any;
  constructor(private remoteService : RemoteserviceProvider, public navctrl: NavController, public http: Http){
    
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SFeedbackPage');
  }
  feedback(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let data = {
        name: this.name,
        email: this.email,
        message: this.message
    };
  
    this.http.post('http://cabonagua.pythonanywhere.com/tutorial/feedback/', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
          console.log(res.json());
      }, (err) => {
          console.log(err);
      });
    this.navctrl.popToRoot();
  }
}
