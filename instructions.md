
## To host your angular project again
1. cd frontend/portfolio
2. Make necessary changes
3. ng build
4. firebase deploy --only hosting


## To deploy firebase functions from backend folder.

1. cd backend
2. put your project name from firebase and put it in .firebaserc
3. firebase deploy --only functions
4. During deployment it would ask for neon connection string which must be taken from neon.tech ( make sure to create your neon database first and add your project there ) 
Note: For deploying firebase functions you must upgrade project from spark to blaze. For you must add a billing account. Use the QR mode when prompted which would set a autopay in your phonepe or google. no amount will be charged unless you become really famous.



## SQL queries to create database and populate data in Neon: 

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(100) NOT NULL,
    highlight VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (name, type, highlight, description) VALUES
(
    'Surfboard Payments',
    'KYB Project for Global Companies',
    '85% reduction in onboarding time',
    'Successfully spearheaded a KYB project that revolutionized the onboarding process for global companies by implementing automation.'
),
(
    'Chikpuk',
    'Quick Commerce Application',
    '20% increase in sales',
    'Developed a quick commerce marketplace platform with world-class UI/UX and scalable infrastructure for multiple merchants.'
),
(
    'Elegance',
    'Salon Management ERP',
    '30% increase in first-time clients',
    'Comprehensive billing software with appointment booking, subscription management and dual-interface solution.'
),
(
    'Wild Eye',
    'Agriculture and Forest Development',
    'Mitigating animal raids on crops',
    'Project aiming to resolve human-wildlife conflicts and prevent animal accidents on railway lines.'
);

## For final integration of firebase functions to Angular
1. Create a web app in Firebase project.
2. This gives you a config details which you must replace in frontend/portfolio/src/app/app.config.ts line 8-15
3. Give npm i in frontend/portfolio
4. Give ng serve in frontend/portfolio to check locally. 
5. Follow guide "## To modify the existing angular project and redeploy the latest code" at the top to host the latest code to firebase.
