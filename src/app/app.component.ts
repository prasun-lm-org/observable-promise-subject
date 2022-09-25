import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  myObservable: any;
  myPromise: any;
  mySubject: any;
  mySubscription: any;

  create() {
    this.myObservable = new Observable<any>(observer => {
      console.log("Observable has created");
      //observer.next("Observable has emitted 1");
      //observer.next("Observable has emitted 2");
      //observer.next("Observable has emitted 3");
      // setInterval(() => {
      //    observer.next("Observable is emitting data");
      //  }, 1000);
      // setTimeout(() => {
      //   observer.next("Observable is emitting data");
      // }, 5000);
      observer.next("Observable has emitted");
      setInterval(() => {
        observer.next(Math.floor(Math.random() * 99) + 1);
      }, 3000);
    });

    this.myPromise = new Promise<string>(resolve => {
      console.log("Promise has created");
      // resolve("Promise has emitted 1");
      // resolve("Promise has emitted 2");
      // resolve("Promise has emitted 3");
      // setInterval(() => {
      //   resolve("Promise is emitting data");
      // }, 1000);
      // setTimeout(() => {
      // resolve("Promise is emitting data");
      // }, 5000);
      resolve("Promise has emitted");
    });

    this.mySubject = new Subject<any>();
    console.log("Subject has created");
    
    // this.mySubject.next("Subject has emitted");

    // this.myPromise.then(data => {
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   this.myObservable.subscribe(data => {
    //     console.log(data);
    //   });
    // }, 0);

  }

  execute() {
    this.mySubscription = this.myObservable.subscribe(data => {
      console.log("-----------"+data+"-----------");
    });

    this.myObservable.subscribe(data => {
      console.log("-----------"+data+"-----------");
    });

    this.myPromise.then(data => {
      console.log(data);
    });

    this.mySubject.subscribe(data => {
      console.log("____________"+data+"____________");
    });

    this.mySubject.subscribe(data => {
      console.log("____________"+data+"____________");
    });
    this.mySubject.next("Subject has emitted");
    setInterval(() => {
      this.mySubject.next(Math.floor(Math.random() * 99) + 1);
    }, 3000);
  }

  cancel() {
    this.mySubscription.unsubscribe();
  }

}
