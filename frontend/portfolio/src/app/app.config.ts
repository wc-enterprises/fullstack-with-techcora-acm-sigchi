import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMivoT-lNuaqF89z8-MrAvTo7Jny5DbtU",
  authDomain: "abin-portfolio-2-8ce30.firebaseapp.com",
  projectId: "abin-portfolio-2-8ce30",
  storageBucket: "abin-portfolio-2-8ce30.firebasestorage.app",
  messagingSenderId: "582451297295",
  appId: "1:582451297295:web:bf960914138c8bb321377a",
  measurementId: "G-0J94Q342Q7"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFunctions(() => {
      const functions = getFunctions();
      // Uncomment for local development
      // connectFunctionsEmulator(functions, 'localhost', 5001);
      return functions;
    }),
  ],
};
