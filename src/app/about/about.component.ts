import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sections = [
    {
      title: 'Experience',
      items: ['Internship at Interphase (4 months)'],
      open: false
    },
    {
      title: 'Education',
      items: [
        'Bachelor of Computer Science with a Minor in Mathematics - Beirut Arab University',
        'CGPA: 3.88/4'
      ],
      open: false
    },
    {
      title: 'Latest Projects',
      items: [
        'LaceUp (Final Year Project) - Scrum Master',
        'Tech Stack: Azure, Flutter, MEAN Stack'
      ],
      open: false
    },
    {
      title: 'Skills',
      items: [
        'Programming Languages & Frameworks: Java, C++, Django, Python, HTML, CSS, JavaScript, PHP, SQL, C#, Scheme, Prolog, Ruby, Angular, TypeScript, Flutter, MEAN Stack, Azure',
        'Strong proficiency in Algorithms and Problem Solving'
      ],
      open: false
    },
    {
      title: 'Contact Me',
      items: [
        'mounirhaffar@outlook.com',
      ],
      open: false
    }
  ];  

  toggleSection(section: any) {
    section.open = !section.open;
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'Mounir_CV.pdf';
    link.click();
  }

  downloadSectionData(section: any) {
    const sectionName = section.title;
    const link = document.createElement('a');
    link.href = `${sectionName}.pdf`;
    link.download = `${sectionName}.pdf`;
    link.click();
  }
}
