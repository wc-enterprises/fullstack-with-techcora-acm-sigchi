import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css',
})
export class WorkshopComponent {
  // Personal Information
  personalInfo = {
    name: 'Abin Paul',
    title: 'Entrepreneur / Software Engineer',
    age: 25,
    gender: 'Male',
    location: 'Chennai, India',
    email: 'abinmec@techcoracorp.com',
    interests:
      "I'm interested in the intersection of development, AI, and human creativity.",
  };

  // Social Links
  socialLinks = {
    github: 'APabinec',
    linkedin: 'abin-paul-b64708194',
    enterprises: 'tec-enterprises',
  };

  // Skills
  skills = [
    'Problem Solving',
    'Software Development',
    'Team Building',
    'Communication',
    'Leadership & Mentoring',
    'Strategic Planning',
    'Risk Management',
    'Networking',
  ];

  // Tech Stack
  techStack = {
    development: [
      'Angular',
      'React',
      'HTML, CSS & JavaScript',
      'TypeScript',
      'NestJS',
      'Firebase',
      'Tailwind',
      'Git',
    ],
  };

  // Summary Points
  summary = [
    'Self-driven individual who is obsessed with creating quality software products.',
    'Very good at mentoring and building a team.',
    'Excellent communication and collaboration skills.',
    'Well-versed in programming fundamentals and frameworks including NestJS and Angular.',
    'Founder of Techcora Corporation Pvt Ltd., a company dedicated to building impactful software projects for the Indian market.',
    'Trained 50+ final and pre-final year college students on programming basics and introduced them to full-stack development, many of whom have gone on to secure positions at top companies such as Zoho, Accenture, and Ideas2It.',
  ];

  // Education
  education = [
    {
      degree: 'BE - EEE',
      institution: 'SSN College (Anna)',
      year: '2018-2022',
    },
    {
      degree: '12',
      institution: 'St.Thomas Golden (92%)',
      year: '2016-2018',
    },
    {
      degree: '10',
      institution: 'St.Thomas Guduvr (92%)',
      year: '2015-2016',
    },
  ];

  // Experience
  experience = [
    {
      company: 'Surfboard Payments',
      role: 'Fin-tech company revolutionizing payment industry',
      period: '',
      highlight:
        'Build a generic KYB(Know Your Business) project to onboard global companies.',
      description: [
        'Successfully spearheaded a KYB (Know Your Business) project that revolutionized the onboarding process for global companies. Achieved an outstanding 85% reduction in onboarding time by implementing automation, streamlining the process from 30 minutes to just 5 minutes.',
        'Integrated Khata payment method into the payment options offering, enhancing the user experience by providing a seamless and efficient payment process. This integration involved extensive API coordination, ensuring compatibility and smooth transactions for customers.',
        'Involved in the successful development of the checkout layer, which involved the efficient handling of debit/credit point-of-sale (POS) systems and managing transaction records of customers using our products.',
        'Skilled at working with different digital ID verification systems and company data providers. Possess a deep understanding of API integration and continually work to broaden my knowledge and skill set in this area.',
        'Successfully recruited and led a team of 4 graduates straight out of college. Provided effective mentorship resulting in one team member being promoted to the role of team lead.',
        'Experienced in utilizing Linear, Notion, and Asana for effective project management. Possess a deep understanding of project management best practices and am constantly seeking ways to enhance my skills and deliver exceptional results.',
        'Proficiently utilized NestJS, TypeScript and SQL to develop and deliver successful projects. Adept at leveraging these technologies to optimize performance, streamline processes, and enhance user experience.',
      ],
    },
    {
      company: 'Techcora Corporation',
      role: 'Software Development Company',
      period: '',
      highlight:
        'Building Wild Eye product which can be useful for agriculture and forest development.',
      description: [
        'Focused on the Wild Eye project aiming to mitigate animal raids on crops, resolve human-wildlife conflicts, and prevent animal accidents on railway lines.',
        'Training interested candidates in software engineering fundamentals by regularly conducting 6-week internship programs. 50+ students have benefited from this so far.',
      ],
    },
    {
      company: 'Chikpuk',
      role: 'Quick Commerce Application',
      period: '',
      highlight: '20% increase in sales in the first six months',
      description: [
        'Developed and launched "Chikpuk," a quick commerce marketplace platform that increased merchant sales by 20% within the first six months.',
        'Engineered a highly scalable infrastructure, enabling seamless onboarding of multiple merchants and supporting rapid business expansion.',
        'Designed and implemented a world-class UI/UX, leading to exceptional user satisfaction and positive feedback.',
        'Utilized data-driven strategies to optimize product listings and promotions, enhancing visibility and driving sales growth.',
        'Integrated advanced analytics tools to monitor performance metrics, facilitating informed decision-making and continuous improvement.',
        'Collaborated cross-functionally with marketing and operations teams to align platform features with business objectives, resulting in cohesive and effective strategies.',
        'Ensured robust security measures and compliance standards, safeguarding user data and maintaining platform integrity.',
        'Led a team of developers and designers, fostering a collaborative environment that encouraged innovation and excellence.',
        'Implemented agile methodologies, reducing development cycles and accelerating time-to-market for new features.',
        'Received accolades from stakeholders for delivering a transformative solution that significantly boosted merchant engagement and revenue.',
      ],
    },
    {
      company: 'Elegance',
      role: 'Salon billing, appointments and subscriptions ERP',
      period: '',
      highlight: '30% increase in first-time clients and more.',
      description: [
        'Developed a comprehensive billing software tailored for a salon client, enhancing operational efficiency and client satisfaction.',
        'Integrated customer subscription management, enabling the salon to offer and monitor membership plans seamlessly.',
        'Implemented employee performance tracking, allowing for effective monitoring of staff targets and productivity.',
        'Designed an intuitive appointment booking system, streamlining scheduling for both clients and staff.',
        'Public Web Application: Showcases available services, facilitating easy online bookings and providing clients with up-to-date information.',
        'Administrative Dashboard: Empowers salon management to oversee appointments, manage services, and monitor business efficiently.',
        'Ensured real-time synchronization between the public site and dashboard, maintaining consistent and accurate information across platforms.',
        'Revenue Growth: Salon have experienced up to a 20% increase in overall revenue, attributed to streamlined operations and enhanced customer engagement.',
        'Customer Retention: Client retention rates have improved by approximately 25%, thanks to personalized follow-ups and exclusive promotions facilitated by the software.',
        'Appointment Management: Automated reminders have resulted in a 25% reduction in no-show appointments, optimizing scheduling efficiency.',
        'New Client Acquisition: Targeted marketing efforts have led to a 30% increase in first-time clients, expanding the customer base significantly.',
        'Operational Efficiency: Integration of Point-of-Sale (POS) systems has contributed to a 15% boost in revenue by streamlining transactions and improving financial tracking.',
      ],
    },
  ];

  loading = false;
  error: string | null = null;

  constructor(private functions: Functions) {}

  ngOnInit() {
    this.fetchProjects();
  }

  projects: any[] = [];

  fetchProjects() {
    this.loading = true;
    this.error = null;

    const getProjectsFunction = httpsCallable(this.functions, 'getProjects');

    getProjectsFunction({})
      .then((result: any) => {
        if (
          result.data &&
          result.data.success &&
          Array.isArray(result.data.data)
        ) {
          this.projects = result.data.data;
        } else {
          this.error = 'Received invalid data format from server';
          console.error('Invalid data format:', result);
        }
      })
      .catch((error) => {
        this.error = `Error fetching projects: ${error.message}`;
        console.error('Error fetching projects:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
