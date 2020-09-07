import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


 const firebaseConfig={
    apiKey: "AIzaSyCRIQozSW14fEBAFhHoMLH2QDRwiii10Hs",
    authDomain: "apppruebafb.firebaseapp.com",
    databaseURL: "https://apppruebafb.firebaseio.com",
    projectId: "apppruebafb",
    storageBucket: "apppruebafb.appspot.com",
    messagingSenderId: "961620170516",
    appId: "1:961620170516:web:c13c576b4b185584679401"
  }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


