import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}


@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             NoopAnimationsModule,
             MaterialModule.forRoot(),
             AngularFireModule.initializeApp(firebaseConfig)
           ],
  declarations: [ AppComponent,
                  
                ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
