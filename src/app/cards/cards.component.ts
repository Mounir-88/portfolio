import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Output() openDetailsEvent = new EventEmitter<Project>();

  projects: Project[] = [
    {
      title: 'MMT',
      description: 'I developed a Mario-themed money transfer system called Mario Money Transfer (MMT) using Django. The goal of this project was to test and enhance my skills in Django. MMT includes several features, such as an employee page, a customer page, and a clear admin interface through Django\'s admin panel.',
      video: 'MMT Video - Made with Clipchamp.mp4',
      repoLink: 'https://github.com/Mounir-88/MMT'
    },
    {
      title: 'Champions League',
      description: 'I developed a website focused on the 2023 Champions League, starting from the round of 16. The goal of this website was to gather, manage, and organize data. It provides comprehensive information about the tournament, including match details, team statistics, and key highlights.',
      video: 'Champions League Video - Made with Clipchamp.mp4',
      repoLink: 'https://github.com/Mounir-88/Champions-League'
    },
    {
      title: 'AM Market',
      description: 'This website project aimed to test my skills in web development. I used HTML, CSS, JavaScript, PHP, and SQL. It was my first website, and I was learning the basics at the time. Unfortunately, I no longer have access to the code, as it was an old project I completed several years ago.',
      video: 'AM Market Video - Made with Clipchamp.mp4'
    },
    {
      title: 'RSP',
      description: 'The goal of this project was to apply image processing concepts, so I developed a game called "RSP" (Rock, Paper, Scissors), where the camera detects hand gestures and provides the results accordingly.',
      video: 'RSP Video.mp4',
      repoLink: 'https://github.com/Mounir-88/Rock-Paper-Scissors'
    },
    {
      title: 'Madame Sensitive',
      description: 'The goal of this project was to apply machine learning and data mining techniques. I developed "Madame Sensitive," a sentiment analysis tool, and added a feature that demonstrates how the data can be processed and interpreted.',
      video: 'Madame Sensitive.mp4'
    },
    {
      title: 'LaceUp',
      description: 'LaceUp was my final year project, developed in a team of 4. I built the entire mobile application using Flutter and served as the Scrum Master. LaceUp is a platform that simplifies organizing and joining sports games. I managed sprints, assigned tasks, and implemented features like venue creation, event management, and more.',
      video: 'LaceUp.mp4',
    }    
  ];  

  openDetails(project: Project) {
    this.openDetailsEvent.emit(project);
  }
}
