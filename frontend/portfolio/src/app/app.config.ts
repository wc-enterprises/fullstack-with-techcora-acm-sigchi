import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
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
