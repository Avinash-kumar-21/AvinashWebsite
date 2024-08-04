import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import PieChartComponent from './components/PieChartComponent';
import OtherComponent from './components/OtherComponent';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Section title="Projects">
      <p>Evaluation Application Web App:</p>
      <ul>
        <li>Technologies Used: .NET Core, Web API, MVC, Microsoft SQL Server, HTML, CSS, JavaScript.</li>
        <li>Features: Authentication, Student Role Management, Exam Management, Student Interface.</li>
      </ul>
      <p>Blog Web App:</p>
      <ul>
        <li>Technologies Used: .NET Core Web API (backend), React (frontend), Microsoft SQL Server.</li>
        <li>Features: User Authentication, Blog Management, User Profile, Responsive Design.</li>
      </ul>
      <p>To-Do Application with React and Local Storage:</p>
      <ul>
        <li>Features: Users can add, delete, and update tasks. Tasks are stored securely in local storage. Responsive design.</li>
      </ul>
    </Section>
    <Section title="Graphs">
      <PieChartComponent />
    </Section>
    <Section title="Other UI Elements">
      <OtherComponent />
    </Section>
    <Section title="Education">
      <p>B. Tech - Computer Science & Engineering (8.79) - Siksha 'O' Anusandhan University, Bhubaneswar (Pursuing)</p>
      <p>HSC - CBSE (88.8%) - D.A.V Kapildev Public School, Ranchi (May 2020)</p>
      <p>SSC - CBSE (90.3%) - D.A.V Kapildev Public School, Ranchi (May 2018)</p>
    </Section>
    <Section title="Achievements / Extra-Curricular Activities">
      <ul>
        <li>Organized Inter University Community Radio Events</li>
        <li>Participated in Hackathon organized by hack club ITER</li>
        <li>Member of RedCross</li>
      </ul>
    </Section>
    <Section title="Leadership Skills">
      <ul>
        <li>Led a team during my internship to develop a project from scratch to a finished product.</li>
        <li>Head Boy, D.A.V Kapildev Public School (2017-2018)</li>
        <li>Group Leader, Contributed to social initiatives and community development projects (NSS).</li>
      </ul>
    </Section>
    <Section title="Certifications">
      <ul>
        <li>Foundational C# with Microsoft Certification</li>
        <li>SQL (Basic) Certificate</li>
      </ul>
    </Section>
    <Section title="Technical Skills">
      <p>Java, .NET Core, SQL, HTML, CSS, JavaScript, C#, React, Python</p>
    </Section>
    <Section title="Languages Known">
      <p>English, Hindi</p>
    </Section>
    <Footer />
  </div>
);

export default App;
