// ─── DATA ──────────────────────────────────────────────────────────────────

const subjects = ['Software Engineering', 'Human-Computer Interaction', 'Database Systems', 'Calculus 101', 'Computer Networks', 'Information Technology'];

const questions = [
  { id: 1, title: 'What is a use case diagram and how do I draw one?', body: 'I need to draw a use case diagram for my assignment but I am confused about actors and relationships. Can someone walk me through it?', subject: 'Software Engineering', author: 'Manubi Thanyani', answers: 1, votes: 3, createdAt: '13 minutes ago' },
  { id: 2, title: 'How does agile differ from waterfall methodology?', body: 'I understand the basics but need help understanding when to use each one in real projects. Any real-world examples would help.', subject: 'Software Engineering', author: 'Thabo Sithole', answers: 0, votes: 2, createdAt: '1 hour ago' },
  { id: 3, title: 'What is the difference between usability and user experience?', body: 'My lecturer mentioned these are related but different concepts. Can someone explain the key differences with examples?', subject: 'Human-Computer Interaction', author: 'Lesedi Khumalo', answers: 2, votes: 5, createdAt: 'about 13 hours ago' },
  { id: 4, title: 'How do I normalize a database to 3NF?', body: 'I understand 1NF and 2NF but I am struggling with the concept of transitive dependency in 3NF normalization.', subject: 'Database Systems', author: 'Amara Dlamini', answers: 2, votes: 4, createdAt: '1 day ago' },
  { id: 5, title: 'Can someone explain heuristic evaluation vs usability testing?', body: 'I know both are usability methods but I need help understanding when to use each and what the trade-offs are.', subject: 'Human-Computer Interaction', author: 'Sipho Ndlovu', answers: 3, votes: 7, createdAt: '2 days ago' },
];

const questionAnswers = {
  1: [{ id: 1, author: 'Prof. James Dlamini', initials: 'JD', role: 'Lecturer', content: 'Great question! A use case diagram is a type of UML behavioral diagram that describes the interaction between users (actors) and the system. Start by identifying the actors (who interacts with the system), then list the use cases (what they do), and draw lines between them to show relationships. The system boundary is drawn as a rectangle around all use cases.', time: '10 minutes ago', isAccepted: true }],
  3: [
    { id: 1, author: 'Dr. Sarah Mokoena', initials: 'SM', role: 'Lecturer', content: 'Usability refers to how effectively, efficiently and satisfactorily a user can interact with a system to achieve their goals. UX (User Experience) is broader — it encompasses everything the user thinks, feels, and experiences before, during, and after using a product. Usability is a component of UX.', time: '12 hours ago', isAccepted: true },
    { id: 2, author: 'Thabo Sithole', initials: 'TS', role: 'Student', content: 'A simple way to remember: usability is about whether people CAN use it. UX is about whether people WANT to use it and how they feel while doing so.', time: '11 hours ago', isAccepted: false },
  ],
  4: [
    { id: 1, author: 'Prof. James Dlamini', initials: 'JD', role: 'Lecturer', content: 'To reach 3NF, first ensure your table is in 2NF (no partial dependencies on composite keys). Then remove transitive dependencies — this means every non-key attribute must depend only on the primary key, not on another non-key attribute.', time: '22 hours ago', isAccepted: true },
    { id: 2, author: 'Manubi Thanyani', initials: 'MT', role: 'Student', content: 'I found it helpful to draw a dependency diagram first. List all functional dependencies, then work through removing partial and transitive ones step by step.', time: '20 hours ago', isAccepted: false },
  ],
  5: [
    { id: 1, author: 'Dr. Sarah Mokoena', initials: 'SM', role: 'Lecturer', content: 'Heuristic evaluation involves experts reviewing your interface against 10 established usability principles (Nielsen\'s heuristics). Usability testing involves real users performing tasks. Use heuristic evaluation early and cheaply; use usability testing to validate with actual users.', time: '1 day ago', isAccepted: true },
    { id: 2, author: 'Lesedi Khumalo', initials: 'LK', role: 'Student', content: 'Heuristic is faster and cheaper, usability testing gives you real data from real users. For our POE, we can use heuristic evaluation to find issues first.', time: '1 day ago', isAccepted: false },
    { id: 3, author: 'Sipho Ndlovu', initials: 'SN', role: 'Student', content: 'Also — heuristic evaluation can be done without users at all, which is great when you don\'t have access to participants yet.', time: '23 hours ago', isAccepted: false },
  ],
};

const materials = [
  { id: 1, title: 'UML Diagrams Reference Guide', type: 'notes', subject: 'Software Engineering', author: 'Prof. James Dlamini', createdAt: '13 minutes ago', description: 'Quick reference for all UML diagram types including use case, class, sequence, and activity diagrams.', icon: 'book', color: 'green', size: '1.2 MB' },
  { id: 2, title: 'Software Engineering Fundamentals - Notes', type: 'notes', subject: 'Software Engineering', author: 'Prof. James Dlamini', createdAt: '13 minutes ago', description: 'Detailed notes on SDLC models, requirements engineering, and software design patterns.', icon: 'file', color: 'blue', size: '2.4 MB' },
  { id: 3, title: 'HCIN6222 Past Exam Paper 2023', type: 'past-paper', subject: 'Human-Computer Interaction', author: 'Dr. Sarah Mokoena', createdAt: '13 minutes ago', description: 'Full past exam paper from 2023 with model answers to help prepare for assessments.', icon: 'pdf', color: 'red', size: '890 KB' },
  { id: 4, title: 'Usability Evaluation Methods - Slides', type: 'slides', subject: 'Human-Computer Interaction', author: 'Dr. Sarah Mokoena', createdAt: '13 minutes ago', description: 'Presentation slides covering heuristic evaluation, cognitive walkthroughs, and usability testing methods.', icon: 'slides', color: 'orange', size: '3.1 MB' },
  { id: 5, title: 'HCIN6222 Lecture Notes - Week 1: Introduction to HCI', type: 'notes', subject: 'Human-Computer Interaction', author: 'Dr. Sarah Mokoena', createdAt: '13 minutes ago', description: 'Comprehensive notes covering the basics of Human-Computer Interaction as a discipline.', icon: 'file', color: 'blue', size: '1.8 MB' },
  { id: 6, title: 'Database Normalization Guide', type: 'notes', subject: 'Database Systems', author: 'Prof. James Dlamini', createdAt: '2 days ago', description: 'Step-by-step guide to normalizing relational databases from 1NF through BCNF with worked examples.', icon: 'book', color: 'green', size: '2.0 MB' },
  { id: 7, title: 'Introduction to IT Systems', type: 'notes', subject: 'Information Technology', author: 'Prof. James Dlamini', createdAt: '3 days ago', description: 'Core concepts in Information Technology including hardware, software, networks and security.', icon: 'file', color: 'blue', size: '1.5 MB' },
  { id: 8, title: 'Calculus 101 Formula Sheet', type: 'slides', subject: 'Calculus 101', author: 'Dr. A. Mkhize', createdAt: '5 days ago', description: 'Quick reference formula sheet covering derivatives, integrals, and limits for the exam.', icon: 'slides', color: 'orange', size: '450 KB' },
];

const tutorials = [
  { id: 1, title: 'Writing User Stories in Agile Development', subject: 'Software Engineering', author: 'Prof. James Dlamini', createdAt: '1 day ago', description: 'Learn how to write effective user stories that capture requirements clearly for agile sprints.', duration: '18 min', thumbnail: '#7A9A6A', views: 120 },
  { id: 2, title: 'How to Conduct a Heuristic Evaluation', subject: 'Human-Computer Interaction', author: 'Dr. Sarah Mokoena', createdAt: '1 day ago', description: 'Step-by-step guide to evaluating a system\'s usability using Nielsen\'s 10 heuristics.', duration: '24 min', thumbnail: '#5A8AA0', views: 98 },
  { id: 3, title: 'Entity-Relationship Diagrams Explained', subject: 'Database Systems', author: 'Prof. James Dlamini', createdAt: '3 days ago', description: 'Complete walkthrough of ER diagrams including entities, attributes, and relationships with examples.', duration: '31 min', thumbnail: '#8A7A60', views: 145 },
  { id: 4, title: 'Introduction to UX Research Methods', subject: 'Human-Computer Interaction', author: 'Dr. Sarah Mokoena', createdAt: '5 days ago', description: 'Overview of qualitative and quantitative research methods used in UX design practice.', duration: '20 min', thumbnail: '#9A6A7A', views: 87 },
  { id: 5, title: 'SQL Joins and Queries — Beginner to Advanced', subject: 'Database Systems', author: 'Prof. James Dlamini', createdAt: '6 days ago', description: 'Practical tutorial covering INNER, LEFT, RIGHT and FULL joins with real database examples.', duration: '35 min', thumbnail: '#6A8A78', views: 201 },
  { id: 6, title: 'UML Class Diagrams from Scratch', subject: 'Software Engineering', author: 'Prof. James Dlamini', createdAt: '1 week ago', description: 'Build a full UML class diagram from a requirements specification. Covers inheritance, aggregation, and composition.', duration: '28 min', thumbnail: '#7A6A9A', views: 167 },
];

const discussions = [
  { id: 1, title: 'Tips for the POE assignment - Part 2', subject: 'Human-Computer Interaction', author: 'Thabo Sithole', authorInitials: 'TS', replies: 1, createdAt: '13 minutes ago', excerpt: 'Does anyone have tips for approaching Part 2 of the POE? I want to make sure my website properly reflects the usability principles we learned in class...', isGroup: false },
  { id: 2, title: 'Best resources for learning UML diagrams?', subject: 'Software Engineering', author: 'Lesedi Khumalo', authorInitials: 'LK', replies: 1, createdAt: '13 minutes ago', excerpt: 'I\'m finding UML diagrams really difficult to understand from the textbook alone. Has anyone found good YouTube videos or interactive tools...', isGroup: false },
  { id: 3, title: 'Study group for HCIN6222 mid-semester test', subject: 'Human-Computer Interaction', author: 'Manubi Thanyani', authorInitials: 'MT', replies: 2, createdAt: '13 minutes ago', excerpt: 'I\'m looking for people to form a study group for the upcoming mid-semester test. We could meet on campus or use this platform\'s study room...', isGroup: true },
  { id: 4, title: 'Prof. Dlamini: New material — UML Diagrams Reference', subject: 'Software Engineering', author: 'Prof. James Dlamini', authorInitials: 'JD', replies: 4, createdAt: 'about 13 hours ago', excerpt: 'I have uploaded a new UML Diagrams Reference Guide to the study materials section. Please download it before the next lecture...', isGroup: false },
];

const discussionReplies = {
  1: [
    { id: 1, author: 'Amara Dlamini', initials: 'AD', role: 'Student', content: 'I think the key is to focus on the user research part. Make sure your website follows at least 5 of Nielsen\'s heuristics and document your evaluation clearly.', time: '10 minutes ago' },
  ],
  2: [
    { id: 1, author: 'Prof. James Dlamini', initials: 'JD', role: 'Lecturer', content: 'I recommend the Lucidchart YouTube channel for UML diagrams. They have excellent visual explanations for all diagram types. Also check draw.io for practice.', time: '5 minutes ago' },
  ],
  3: [
    { id: 1, author: 'Sipho Ndlovu', initials: 'SN', role: 'Student', content: 'I\'m interested! Can we meet on Tuesday after the 2pm lecture? The library study room should be available.', time: '8 minutes ago' },
    { id: 2, author: 'Lesedi Khumalo', initials: 'LK', role: 'Student', content: 'Tuesday works for me. Should we use the library study room or should we use the Lounge. Study Room feature?', time: '6 minutes ago' },
  ],
  4: [
    { id: 1, author: 'Manubi Thanyani', initials: 'MT', role: 'Student', content: 'Thank you Prof! I downloaded it already. The section on sequence diagrams is very helpful for the current assignment.', time: '12 hours ago' },
    { id: 2, author: 'Thabo Sithole', initials: 'TS', role: 'Student', content: 'Downloaded and read through it. Can you explain the section on component diagrams more in the next lecture?', time: '11 hours ago' },
    { id: 3, author: 'Prof. James Dlamini', initials: 'JD', role: 'Lecturer', content: 'Of course, I\'ll dedicate 20 minutes to that in Thursday\'s lecture. Come with specific questions.', time: '10 hours ago' },
    { id: 4, author: 'Amara Dlamini', initials: 'AD', role: 'Student', content: 'Great! I also have questions about deployment diagrams — will you cover those too?', time: '9 hours ago' },
  ],
};

const studyGroups = [
  { id: 1, name: 'HCIN6222 Mid-Term Study Group', subject: 'Human-Computer Interaction', members: 5, maxMembers: 10, host: 'Manubi Thanyani', description: 'Preparing for the mid-semester test together. We meet Tuesdays after the 2pm lecture.', isJoined: false },
  { id: 2, name: 'SE Notes & Assignment Help', subject: 'Software Engineering', members: 3, maxMembers: 8, host: 'Prof. James Dlamini', description: 'Official study room for Software Engineering students. Lecturer monitored.', isJoined: true },
  { id: 3, name: 'Database Normalization Workshop', subject: 'Database Systems', members: 4, maxMembers: 6, host: 'Thabo Sithole', description: 'Working through normalization exercises together from 1NF to BCNF.', isJoined: false },
];

const groupMessages = [
  { author: 'Prof. James Dlamini', initials: 'JD', content: 'Welcome to the SE Study Room. Post your questions here and we\'ll work through them together.', time: '2 days ago', isMe: false },
  { author: 'Thabo Sithole', initials: 'TS', content: 'Thanks Prof! I\'m struggling with the activity diagrams. Can someone share a good example?', time: '1 day ago', isMe: false },
  { author: 'Me', initials: 'MT', content: 'I found a great example in the UML Reference Guide Prof uploaded. Check the study materials section!', time: '1 day ago', isMe: true },
  { author: 'Lesedi Khumalo', initials: 'LK', content: 'That guide is really helpful. The swimlane diagram explanation is exactly what I needed.', time: '23 hours ago', isMe: false },
];

const conversations = [
  { id: 1, name: 'Prof. James Dlamini', initials: 'JD', lastMsg: 'Please review the UML assignment before Thursday.', time: '2h ago', messages: [
    { from: 'me', text: 'Hi Prof, I had a question about the latest assignment.' },
    { from: 'them', text: 'Please review the UML assignment before Thursday.' },
  ]},
  { id: 2, name: 'Dr. Sarah Mokoena', initials: 'SM', lastMsg: 'Good question about heuristics — I\'ll cover it in class.', time: '1d ago', messages: [
    { from: 'me', text: 'Dr. Mokoena, can you clarify the difference between the first and second heuristic?' },
    { from: 'them', text: 'Good question about heuristics — I\'ll cover it in class.' },
  ]},
  { id: 3, name: 'Thabo Sithole', initials: 'TS', lastMsg: 'Are you joining the study group on Tuesday?', time: '2d ago', messages: [
    { from: 'them', text: 'Are you joining the study group on Tuesday?' },
  ]},
  { id: 4, name: 'Lesedi Khumalo', initials: 'LK', lastMsg: 'Thanks for your help with the diagram!', time: '3d ago', messages: [
    { from: 'them', text: 'Thanks for your help with the diagram!' },
    { from: 'me', text: 'No problem, good luck with the submission!' },
  ]},
  { id: 5, name: 'Amara Dlamini', initials: 'AD', lastMsg: 'Did you finish the database assignment?', time: '5d ago', messages: [
    { from: 'them', text: 'Did you finish the database assignment?' },
  ]},
];

const activityItems = [
  { id: 1, actor: 'Thabo Sithole', action: 'New discussion:', content: 'Tips for the POE assignment - Part 2', subject: 'Human-Computer Interaction', time: 'about 13 hours ago', type: 'discussion', targetId: 1 },
  { id: 2, actor: 'Lesedi Khumalo', action: 'New discussion:', content: 'Best resources for learning UML diagrams?', subject: 'Software Engineering', time: 'about 13 hours ago', type: 'discussion', targetId: 2 },
  { id: 3, actor: 'Manubi Thanyani', action: 'New discussion:', content: 'Study group for HCIN6222 mid-semester test', subject: 'Human-Computer Interaction', time: 'about 13 hours ago', type: 'discussion', targetId: 3 },
  { id: 4, actor: 'Prof. James Dlamini', action: 'New material:', content: 'UML Diagrams Reference Guide', subject: 'Software Engineering', time: 'about 13 hours ago', type: 'material', targetId: 1 },
  { id: 5, actor: 'Manubi Thanyani', action: 'Asked a question:', content: 'What is a use case diagram and how do I draw one?', subject: 'Software Engineering', time: 'about 13 hours ago', type: 'question', targetId: 1 },
];

// ─── STATE ──────────────────────────────────────────────────────────────────

let state = {
  page: 'landing',
  isLoggedIn: false,
  user: { name: 'Manubi Thanyani', role: 'Student', initials: 'MT', email: 'st10462424@vcconnect.edu.za', course: 'Bachelor of IT', year: '2nd Year', subjects: ['Software Engineering', 'Human-Computer Interaction', 'Database Systems'] },
  authTab: 'login',
  materialFilter: 'all',
  materialSubjectFilter: '',
  materialSearch: '',
  questionFilter: '',
  subjectFilter: '',
  tutorialSearch: '',
  tutorialSubjectFilter: '',
  activeConversation: null,
  questionData: [...questions],
  discussionData: [...discussions],
  studyGroupData: [...studyGroups],
  selectedQuestion: null,
  selectedDiscussion: null,
  activeModal: null,
  modalData: {},
  darkMode: false,
  activeStudyGroup: 2,
  historyItems: [...activityItems],
};

// ─── ROUTER ─────────────────────────────────────────────────────────────────

function navigate(page, opts = {}) {
  Object.assign(state, opts);
  state.page = page;
  render();
  window.scrollTo(0, 0);
}

// ─── SVG ICONS ───────────────────────────────────────────────────────────────

const icons = {
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  forum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  materials: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  tutorials: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  discussions: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  messages: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  studyroom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4"/></svg>`,
  about: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  signout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  question: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.9)"/><polygon points="10,8 17,12 10,16" fill="#1C1A18"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  filetext: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function logoHTML() {
  return `<div class="logo"><div class="logo-icon">${icons.logo}</div><span>Lounge<span class="logo-dot">.</span></span></div>`;
}

function badgeFor(subject) {
  const colors = {
    'Software Engineering': 'badge-green',
    'Database Systems': 'badge-green',
    'Computer Networks': 'badge-green',
    'Human-Computer Interaction': 'badge-blue',
    'Calculus 101': 'badge-purple',
    'Information Technology': 'badge-orange',
  };
  const cls = colors[subject] || 'badge-blue';
  return `<span class="badge ${cls}">${subject}</span>`;
}

function materialIconHTML(mat) {
  const iconMap = { book: icons.book, file: icons.filetext, pdf: icons.filetext, slides: icons.monitor };
  const ico = iconMap[mat.icon] || icons.filetext;
  return `<div class="material-icon material-icon-${mat.color}">${ico}</div>`;
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function renderSidebar(active) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: icons.dashboard },
    { id: 'forum', label: 'Q&A Forum', icon: icons.forum },
    { id: 'materials', label: 'Materials', icon: icons.materials },
    { id: 'tutorials', label: 'Tutorials', icon: icons.tutorials },
    { id: 'discussions', label: 'Discussions', icon: icons.discussions },
    { id: 'study-room', label: 'Study Room', icon: icons.studyroom },
    { id: 'messages', label: 'Messages', icon: icons.messages },
    { id: 'history', label: 'Activity History', icon: icons.history },
  ];
  return `
    <aside class="sidebar">
      <div class="sidebar-logo-row">
        ${logoHTML()}
        <button class="dark-toggle" onclick="toggleDarkMode()" title="${state.darkMode ? 'Light mode' : 'Dark mode'}">
          ${state.darkMode ? icons.sun : icons.moon}
        </button>
      </div>
      <nav class="sidebar-nav">
        ${navItems.map(item => `
          <div class="nav-item ${active === item.id ? 'active' : ''}" onclick="navigate('${item.id}')">
            ${item.icon} ${item.label}
          </div>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-divider"></div>
        <div class="nav-item ${active === 'settings' ? 'active' : ''}" onclick="navigate('settings')">
          ${icons.settings} Settings
        </div>
        <div class="nav-item ${active === 'about' ? 'active' : ''}" onclick="navigate('about')">
          ${icons.about} About Lounge.
        </div>
        <div class="sidebar-user" onclick="navigate('profile')" style="cursor:pointer" title="View profile">
          <div class="user-avatar">${state.user.initials}</div>
          <div class="user-info">
            <div class="user-name">${state.user.name}</div>
            <div class="user-role">${state.user.role}</div>
          </div>
        </div>
        <div class="nav-item" onclick="doSignOut()">
          ${icons.signout} Sign Out
        </div>
      </div>
    </aside>`;
}

function renderMobileNav(active) {
  const items = [
    { id: 'dashboard', label: 'Home', icon: icons.dashboard },
    { id: 'forum', label: 'Q&A', icon: icons.forum },
    { id: 'materials', label: 'Materials', icon: icons.materials },
    { id: 'discussions', label: 'Discuss', icon: icons.discussions },
    { id: 'messages', label: 'Messages', icon: icons.messages },
  ];
  return `<nav class="mobile-nav">${items.map(i => `
    <div class="mobile-nav-item ${active === i.id ? 'active' : ''}" onclick="navigate('${i.id}')">
      ${i.icon}<span>${i.label}</span>
    </div>`).join('')}</nav>`;
}

function renderAppLayout(active, content) {
  return `
    <div class="app-layout">
      ${renderSidebar(active)}
      <div class="main-content">${content}</div>
    </div>
    ${renderMobileNav(active)}
    ${renderModals()}
    <div class="toast-container" id="toastContainer"></div>`;
}

// ─── MODALS ───────────────────────────────────────────────────────────────────

function renderModals() {
  return `
    <div class="modal-overlay ${state.activeModal ? 'open' : ''}" id="modalOverlay" onclick="handleOverlayClick(event)">
      <div class="modal" onclick="event.stopPropagation()">
        ${renderModalContent()}
      </div>
    </div>`;
}

function renderModalContent() {
  switch (state.activeModal) {
    case 'question': return renderQuestionModal();
    case 'upload': return renderUploadModal();
    case 'start-topic': return renderStartTopicModal();
    case 'video': return renderVideoModal();
    case 'create-group': return renderCreateGroupModal();
    case 'add-answer': return renderAddAnswerModal();
    default: return '';
  }
}

function renderQuestionModal() {
  return `
    <div class="modal-header">
      <h2>Ask a Question</h2>
      <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    </div>
    <p class="modal-subtitle">Be specific and clear. State what you've already tried.</p>
    <div class="form-group">
      <label class="form-label">Question Title</label>
      <input class="form-input" id="qTitle" placeholder="What would you like to know?">
    </div>
    <div class="form-group">
      <label class="form-label">Subject</label>
      <select class="form-select" id="qSubject">
        <option value="">Select subject...</option>
        ${subjects.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Details</label>
      <textarea class="form-textarea" id="qDetails" placeholder="Describe your question with as much detail as possible..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitQuestion()">Post Question</button>
    </div>`;
}

function renderUploadModal() {
  return `
    <div class="modal-header">
      <h2>Upload Material</h2>
      <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    </div>
    <p class="modal-subtitle">Share notes, slides, past papers or other resources with your classmates.</p>
    <div class="form-group">
      <label class="form-label">Title</label>
      <input class="form-input" id="uploadTitle" placeholder="e.g. Week 3 Lecture Notes">
    </div>
    <div class="form-group">
      <label class="form-label">Subject</label>
      <select class="form-select" id="uploadSubject">
        <option value="">Select subject...</option>
        ${subjects.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Type</label>
      <select class="form-select" id="uploadType">
        <option value="notes">Notes</option>
        <option value="slides">Slides</option>
        <option value="past-paper">Past Paper</option>
        <option value="book">Textbook Chapter</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <textarea class="form-textarea" id="uploadDesc" placeholder="Brief description of this material..." style="min-height:80px"></textarea>
    </div>
    <div class="upload-drop-zone" onclick="showToast('File selected','Ready to upload your document.')">
      ${icons.upload}
      <p>Click to select a file or drag and drop</p>
      <span>PDF, DOCX, PPTX supported — max 20 MB</span>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitUpload()">${icons.upload} Upload Material</button>
    </div>`;
}

function renderStartTopicModal() {
  return `
    <div class="modal-header">
      <h2>Start a Discussion</h2>
      <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    </div>
    <p class="modal-subtitle">Post a topic to start a conversation with your classmates or lecturers.</p>
    <div class="form-group">
      <label class="form-label">Topic Title</label>
      <input class="form-input" id="topicTitle" placeholder="What would you like to discuss?">
    </div>
    <div class="form-group">
      <label class="form-label">Subject</label>
      <select class="form-select" id="topicSubject">
        <option value="">Select subject...</option>
        ${subjects.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Message</label>
      <textarea class="form-textarea" id="topicBody" placeholder="Describe the topic in detail..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitTopic()">Post Discussion</button>
    </div>`;
}

function renderVideoModal() {
  const t = state.modalData.tutorial;
  if (!t) return '';
  return `
    <div class="modal-header">
      <h2>${t.title}</h2>
      <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    </div>
    <div class="video-player-wrap">
      <div class="video-player" style="background:${t.thumbnail}">
        <div class="video-player-inner">
          <div class="video-play-big">${icons.play}</div>
          <div class="video-overlay-info">
            <span>${icons.video} ${t.duration}</span>
            <span>${icons.eye} ${t.views} views</span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:0 4px 8px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:12px">
        <div>
          ${badgeFor(t.subject)}
          <p style="font-size:13px;color:var(--text-muted);margin-top:10px;line-height:1.6">${t.description}</p>
          <p style="font-size:12px;color:var(--text-muted);margin-top:8px">Uploaded by <strong style="color:var(--text)">${t.author}</strong> · ${t.createdAt}</p>
        </div>
      </div>
      <div class="modal-actions" style="margin-top:8px">
        <button class="btn btn-outline" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="showToast('Downloading...','The tutorial video is being prepared for download.')">
          ${icons.download} Download
        </button>
      </div>
    </div>`;
}

function renderCreateGroupModal() {
  return `
    <div class="modal-header">
      <h2>Create Study Group</h2>
      <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    </div>
    <p class="modal-subtitle">Start a new study group and invite classmates to join.</p>
    <div class="form-group">
      <label class="form-label">Group Name</label>
      <input class="form-input" id="groupName" placeholder="e.g. HCIN6222 Study Group">
    </div>
    <div class="form-group">
      <label class="form-label">Subject</label>
      <select class="form-select" id="groupSubject">
        <option value="">Select subject...</option>
        ${subjects.map(s => `<option value="${s}">${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Max Members</label>
      <select class="form-select" id="groupMax">
        <option value="5">5 members</option>
        <option value="8" selected>8 members</option>
        <option value="10">10 members</option>
        <option value="15">15 members</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <textarea class="form-textarea" id="groupDesc" placeholder="What is this group for?" style="min-height:80px"></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitCreateGroup()">Create Group</button>
    </div>`;
}

function renderAddAnswerModal() {
  return `
    <div class="modal-header">
      <h2>Add Your Answer</h2>
      <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    </div>
    <p class="modal-subtitle">Share your knowledge and help a fellow student.</p>
    <div class="form-group">
      <label class="form-label">Your Answer</label>
      <textarea class="form-textarea" id="answerText" placeholder="Write a clear, helpful answer. Include examples if possible." style="min-height:140px"></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitAnswer()">Post Answer</button>
    </div>`;
}

// ─── PAGES ────────────────────────────────────────────────────────────────────

function renderLanding() {
  return `
    <div class="landing">
      <nav class="landing-nav">
        ${logoHTML()}
        <div class="landing-nav-links">
          <a href="#features">Features</a>
          <a href="#" onclick="navigate('about')">About</a>
          <a href="#benefits">Benefits</a>
        </div>
        <div class="landing-nav-actions">
          <button class="btn btn-ghost" onclick="navigate('auth',{authTab:'login'})">Log In</button>
          <button class="btn btn-primary" onclick="navigate('auth',{authTab:'register'})">Get Started</button>
        </div>
      </nav>

      <section class="landing-hero">
        <div class="hero-tag">Student Academic Support Platform</div>
        <h1 class="hero-title">Your Academic Support,<br><span>All in One Place</span></h1>
        <p class="hero-subtitle">Lounge. connects students with lecturers and classmates through Q&A, study materials, tutorials, discussions and direct messaging — so you never have to struggle alone.</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" onclick="navigate('auth',{authTab:'register'})">Get Started Free ${icons.arrow}</button>
          <button class="btn btn-outline btn-lg" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">Explore Features</button>
        </div>
      </section>

      <div class="landing-stats">
        <div class="stat-item"><div class="stat-number">500+</div><div class="stat-label">Students Supported</div></div>
        <div class="stat-item"><div class="stat-number">1,200+</div><div class="stat-label">Questions Answered</div></div>
        <div class="stat-item"><div class="stat-number">300+</div><div class="stat-label">Study Materials</div></div>
        <div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">Lecturers Active</div></div>
      </div>

      <section class="features-section" id="features">
        <div class="section-header">
          <h2>Everything You Need to Succeed</h2>
          <p>Eight powerful features designed around the real challenges students face every day.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card"><div class="feature-icon feature-icon-orange">${icons.dashboard}</div><h3>Study Dashboard</h3><p>Get a personalised overview of your academic activity — questions, materials, tutorials and discussions all in one place.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-orange">${icons.forum}</div><h3>Ask Questions</h3><p>Post academic questions by subject and get answers from lecturers and fellow students any time of day.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-green">${icons.materials}</div><h3>Study Materials</h3><p>Upload and download lecturer notes, slides, past exam papers — all searchable by subject and type.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-blue">${icons.tutorials}</div><h3>Video Tutorials</h3><p>Watch and download step-by-step tutorial videos on difficult topics by subject and course.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-orange">${icons.discussions}</div><h3>Discussion Forum</h3><p>Start or join topic discussions with classmates. Share ideas and help each other succeed.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-green">${icons.studyroom}</div><h3>Study Rooms</h3><p>Create or join private study groups for collaborative learning. Chat with your group in a shared space.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-blue">${icons.messages}</div><h3>Direct Messages</h3><p>Send direct messages to lecturers or classmates for private academic support.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-orange">${icons.settings}</div><h3>Personalise</h3><p>Switch between light and dark mode, adjust preferences, and manage your academic profile.</p></div>
        </div>
      </section>

      <section class="about-section" id="benefits">
        <div class="about-inner">
          <div class="about-content">
            <h2>Built for Students, by a Student</h2>
            <p>As a student at university, I noticed how many students are afraid to ask questions during lectures — feeling shy, nervous, or scared of judgement. Others struggle after class with no easy way to reach their lecturer or find the right study material.</p>
            <p>Lounge. was created to solve exactly that. A calm, organised, and supportive platform where every student can get the help they need — at any time, from anywhere.</p>
            <button class="btn btn-primary" style="margin-top:8px" onclick="navigate('auth',{authTab:'register'})">Join the Platform ${icons.arrow}</button>
          </div>
          <div class="about-list">
            <h3>What students get</h3>
            <ul>
              ${['Ask questions privately — no more feeling shy in class','Access resources 24/7, even during exam time','Upload and download study materials freely','Communicate directly with lecturers','Collaborate with classmates in study groups','Watch and download tutorials at your own pace','Switch to dark mode for comfortable night studying','Track your full activity history on the platform'].map(item => `
                <li><div class="check-icon">${icons.check}</div>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <h2>Ready to take control of your studies?</h2>
        <p>Join Lounge. today — it's free, simple, and built to help you succeed.</p>
        <button class="btn-cta-white" onclick="navigate('auth',{authTab:'register'})">Create Your Account ${icons.arrow}</button>
      </section>

      <footer class="landing-footer">
        ${logoHTML()}
        <span>Student Academic Support Platform — HCIN6222 — ST10462424 Manubi Thanyani</span>
        <div class="footer-links">
          <a href="#" onclick="navigate('about')">About</a>
          <a href="#" onclick="navigate('auth',{authTab:'login'})">Log In</a>
          <a href="#" onclick="navigate('auth',{authTab:'register'})">Register</a>
        </div>
      </footer>
    </div>`;
}

function renderAuth() {
  const isLogin = state.authTab === 'login';
  return `
    <div class="auth-page">
      <a class="auth-back" onclick="navigate('landing')" style="cursor:pointer">${icons.back} Home</a>
      <div class="auth-logo">${logoHTML()}</div>
      <div class="auth-card">
        <div class="auth-tabs">
          <div class="auth-tab ${isLogin ? 'active' : ''}" onclick="setAuthTab('login')">Log In</div>
          <div class="auth-tab ${!isLogin ? 'active' : ''}" onclick="setAuthTab('register')">Register</div>
        </div>
        ${isLogin ? `
          <form onsubmit="handleLogin(event)">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input class="form-input" type="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <input class="form-input" type="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="btn-submit">Log In</button>
            <p style="text-align:center;font-size:12.5px;color:var(--text-muted);margin-top:16px">Don't have an account? <a href="#" onclick="setAuthTab('register')" style="color:var(--primary)">Register here</a></p>
          </form>
        ` : `
          <form onsubmit="handleRegister(event)">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input class="form-input" id="regName" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input class="form-input" type="email" id="regEmail" placeholder="Your email address" required>
            </div>
            <div class="form-group">
              <label class="form-label">Role</label>
              <select class="form-select" id="regRole">
                <option value="Student">Student</option>
                <option value="Lecturer">Lecturer</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <input class="form-input" type="password" placeholder="Create a password" required>
            </div>
            <button type="submit" class="btn-submit">Create Account</button>
          </form>
        `}
      </div>
    </div>`;
}

function renderDashboard() {
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Welcome back, ${state.user.name.split(' ')[0]} 👋</h1>
          <p>Here's what's happening in your courses today.</p>
        </div>
        <button class="btn btn-primary" onclick="openModal('question')">${icons.plus} Ask a Question</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card stat-card-clickable" onclick="navigate('forum')">
          <div class="stat-card-header"><span class="stat-card-label">Questions Asked</span><div class="stat-card-icon">${icons.question}</div></div>
          <div class="stat-card-value">${state.questionData.length}</div>
          <div class="stat-card-sub">Click to view Q&A Forum →</div>
        </div>
        <div class="stat-card stat-card-clickable" onclick="navigate('materials')">
          <div class="stat-card-header"><span class="stat-card-label">Study Materials</span><div class="stat-card-icon">${icons.materials}</div></div>
          <div class="stat-card-value">${materials.length}</div>
          <div class="stat-card-sub">Available to download →</div>
        </div>
        <div class="stat-card stat-card-clickable" onclick="navigate('tutorials')">
          <div class="stat-card-header"><span class="stat-card-label">Video Tutorials</span><div class="stat-card-icon">${icons.tutorials}</div></div>
          <div class="stat-card-value">${tutorials.length}</div>
          <div class="stat-card-sub">Watch recorded lessons →</div>
        </div>
        <div class="stat-card stat-card-clickable" onclick="navigate('discussions')">
          <div class="stat-card-header"><span class="stat-card-label">Discussions</span><div class="stat-card-icon">${icons.discussions}</div></div>
          <div class="stat-card-value">${state.discussionData.length}</div>
          <div class="stat-card-sub">Active threads →</div>
        </div>
      </div>
      <div class="dashboard-grid">
        <div class="activity-card">
          <h3>Recent Activity</h3>
          <p>The latest updates from your subjects</p>
          <div class="activity-list">
            ${activityItems.map(item => `
              <div class="activity-item activity-item-clickable" onclick="activityClick(${item.id})">
                <div class="activity-avatar">${icons.chat}</div>
                <div class="activity-body">
                  <div class="activity-text"><strong>${item.actor}</strong> ${item.action} <em>${item.content}</em></div>
                  <div style="margin-top:4px">${badgeFor(item.subject)}</div>
                </div>
                <div class="activity-time">${item.time}</div>
              </div>`).join('')}
          </div>
        </div>
        <div>
          <div class="quick-links-card">
            <h3>Quick Links</h3>
            <button class="quick-link-btn" onclick="openModal('question')">${icons.forum} Ask a Question</button>
            <button class="quick-link-btn" onclick="navigate('materials')">${icons.materials} Find Materials</button>
            <button class="quick-link-btn" onclick="navigate('tutorials')">${icons.tutorials} Watch Tutorials</button>
            <button class="quick-link-btn" onclick="navigate('messages')">${icons.messages} Message Lecturer</button>
            <button class="quick-link-btn" onclick="navigate('study-room')">${icons.studyroom} Study Rooms</button>
          </div>
          <div class="enrolled-card" style="margin-top:16px">
            <h3>Enrolled Subjects</h3>
            <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">
              ${state.user.subjects.map(s => `<div class="enrolled-subject">${badgeFor(s)}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return renderAppLayout('dashboard', content);
}

function renderForum() {
  const q = state.questionFilter.toLowerCase();
  const s = state.subjectFilter;
  const filtered = state.questionData.filter(item =>
    (!q || item.title.toLowerCase().includes(q) || item.body.toLowerCase().includes(q)) &&
    (!s || item.subject === s)
  );
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Q&A Forum</h1>
          <p>Ask questions and get help from lecturers and classmates</p>
        </div>
        <button class="btn btn-primary" onclick="openModal('question')">${icons.plus} Ask Question</button>
      </div>
      <div class="filter-bar">
        <div class="search-bar">
          <span class="search-icon">${icons.search}</span>
          <input type="search" placeholder="Search questions..." value="${state.questionFilter}" oninput="state.questionFilter=this.value;renderPage()">
        </div>
        <select class="form-select filter-select" onchange="state.subjectFilter=this.value;renderPage()">
          <option value="">All Subjects</option>
          ${subjects.map(s => `<option value="${s}" ${state.subjectFilter === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="results-count">${filtered.length} question${filtered.length !== 1 ? 's' : ''} found</div>
      <div>
        ${filtered.length === 0 ? `<div class="empty-state">${icons.forum}<p>No questions found. Be the first to ask!</p><button class="btn btn-primary" onclick="openModal('question')">Ask a Question</button></div>` :
        filtered.map(q => `
          <div class="question-card" onclick="navigate('question-detail',{selectedQuestion:${q.id}})">
            <div class="question-card-header">
              <div class="question-title">${q.title}</div>
              ${badgeFor(q.subject)}
            </div>
            <div class="question-body">${q.body}</div>
            <div class="question-meta">
              <div class="question-author">${q.author} · ${q.createdAt}</div>
              <div class="question-stats">
                <span class="answer-count">${icons.forum} ${q.answers} answer${q.answers !== 1 ? 's' : ''}</span>
                <span class="vote-count">${icons.star} ${q.votes}</span>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  return renderAppLayout('forum', content);
}

function renderQuestionDetail() {
  const q = state.questionData.find(x => x.id === state.selectedQuestion);
  if (!q) return renderForum();
  const answers = questionAnswers[q.id] || [];
  const content = `
    <div class="page-inner">
      <div class="back-link" onclick="navigate('forum')">${icons.back} Back to Forum</div>
      <div class="detail-card">
        <div class="detail-card-header">
          <h2>${q.title}</h2>
          ${badgeFor(q.subject)}
        </div>
        <p class="detail-body">${q.body}</p>
        <div class="detail-meta">
          <span>Asked by <strong>${q.author}</strong></span>
          <span>·</span>
          <span>${q.createdAt}</span>
          <span>·</span>
          <span>${icons.star} ${q.votes} votes</span>
        </div>
      </div>
      <div class="answers-header">
        <h3>${answers.length} Answer${answers.length !== 1 ? 's' : ''}</h3>
        <button class="btn btn-primary btn-sm" onclick="openModal('add-answer')">${icons.plus} Add Answer</button>
      </div>
      ${answers.length === 0 ? `
        <div class="empty-state-sm">
          <p>No answers yet — be the first to help!</p>
          <button class="btn btn-primary btn-sm" onclick="openModal('add-answer')">Write an Answer</button>
        </div>` :
        answers.map(a => `
          <div class="answer-card ${a.isAccepted ? 'answer-accepted' : ''}">
            ${a.isAccepted ? '<div class="accepted-tag">${icons.check} Accepted Answer</div>' : ''}
            <div class="answer-author">
              <div class="user-avatar" style="background:${a.role === 'Lecturer' ? '#5A7040' : 'var(--primary)'}">${a.initials}</div>
              <div>
                <div class="answer-author-name">${a.author} <span class="role-chip ${a.role === 'Lecturer' ? 'role-lecturer' : 'role-student'}">${a.role}</span></div>
                <div class="answer-author-time">${a.time}</div>
              </div>
            </div>
            <p class="answer-body">${a.content}</p>
          </div>`).join('')}
    </div>`;
  return renderAppLayout('forum', content);
}

function renderMaterials() {
  const f = state.materialFilter;
  const s = state.materialSubjectFilter;
  const q = state.materialSearch.toLowerCase();
  const filtered = materials.filter(m =>
    (f === 'all' || m.type === f) &&
    (!s || m.subject === s) &&
    (!q || m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q))
  );
  const typeOpts = [['all','All Types'],['notes','Notes'],['slides','Slides'],['past-paper','Past Papers']];
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Study Materials</h1>
          <p>Access, upload and download notes, past papers, and slides</p>
        </div>
        <button class="btn btn-primary" onclick="openModal('upload')">${icons.upload} Upload Material</button>
      </div>
      <div class="filter-bar">
        <div class="search-bar">
          <span class="search-icon">${icons.search}</span>
          <input type="search" placeholder="Search by title, description..." value="${state.materialSearch}" oninput="state.materialSearch=this.value;renderPage()">
        </div>
        <select class="form-select filter-select" onchange="state.materialSubjectFilter=this.value;renderPage()">
          <option value="">All Subjects</option>
          ${subjects.map(s => `<option value="${s}" ${state.materialSubjectFilter === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        <select class="form-select filter-select" onchange="state.materialFilter=this.value;renderPage()">
          ${typeOpts.map(([v,l]) => `<option value="${v}" ${state.materialFilter === v ? 'selected' : ''}>${l}</option>`).join('')}
        </select>
      </div>
      <div class="results-count">${filtered.length} material${filtered.length !== 1 ? 's' : ''} found</div>
      <div class="materials-grid">
        ${filtered.length === 0 ? `<div class="empty-state" style="grid-column:1/-1">${icons.materials}<p>No materials match your filters.</p></div>` :
        filtered.map(m => `
          <div class="material-card">
            <div class="material-card-top">
              ${materialIconHTML(m)}
              ${badgeFor(m.subject)}
            </div>
            <h3>${m.title}</h3>
            <div class="material-card-meta">
              <span>${m.author}</span>
              <span class="meta-dot"></span>
              <span>${m.createdAt}</span>
              <span class="meta-dot"></span>
              <span>${m.size}</span>
            </div>
            <p>${m.description}</p>
            <div class="material-card-actions">
              <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showToast('Opening material','${m.title.replace(/'/g,"\\'")} is opening for preview.')" style="flex:1">${icons.eye} View</button>
              <button class="btn btn-green btn-sm" onclick="event.stopPropagation();downloadMaterial(${m.id})" style="flex:1">${icons.download} Download</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  return renderAppLayout('materials', content);
}

function renderTutorials() {
  const q = state.tutorialSearch.toLowerCase();
  const s = state.tutorialSubjectFilter;
  const filtered = tutorials.filter(t =>
    (!q || t.title.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) &&
    (!s || t.subject === s)
  );
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Video Tutorials</h1>
          <p>Watch and download recorded lessons — searchable by course and topic</p>
        </div>
      </div>
      <div class="filter-bar">
        <div class="search-bar">
          <span class="search-icon">${icons.search}</span>
          <input type="search" placeholder="Search by title, subject..." value="${state.tutorialSearch}" oninput="state.tutorialSearch=this.value;renderPage()">
        </div>
        <select class="form-select filter-select" onchange="state.tutorialSubjectFilter=this.value;renderPage()">
          <option value="">All Subjects</option>
          ${subjects.map(s => `<option value="${s}" ${state.tutorialSubjectFilter === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="results-count">${filtered.length} tutorial${filtered.length !== 1 ? 's' : ''} found</div>
      <div class="tutorials-grid">
        ${filtered.length === 0 ? `<div class="empty-state" style="grid-column:1/-1">${icons.tutorials}<p>No tutorials match your search.</p></div>` :
        filtered.map(t => `
          <div class="tutorial-card" onclick="openVideoModal(${t.id})">
            <div class="tutorial-thumb" style="background:${t.thumbnail}">
              <div class="tutorial-play">${icons.play}</div>
              <div class="tutorial-duration">${t.duration}</div>
            </div>
            <div class="tutorial-body">
              ${badgeFor(t.subject)}
              <h3 style="margin-top:8px">${t.title}</h3>
              <p style="font-size:13px;color:var(--text-muted);margin-top:6px;line-height:1.5">${t.description}</p>
              <div class="tutorial-meta">
                <span>${t.author}</span>
                <span style="display:flex;align-items:center;gap:4px">${icons.eye} ${t.views}</span>
              </div>
              <div class="tutorial-actions">
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openVideoModal(${t.id})" style="flex:1">${icons.play} Watch</button>
                <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showToast('Downloading','${t.title.replace(/'/g,"\\'")} is downloading.')">${icons.download}</button>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  return renderAppLayout('tutorials', content);
}

function renderDiscussions() {
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Discussions</h1>
          <p>Start or join topic discussions with classmates and lecturers</p>
        </div>
        <button class="btn btn-primary" onclick="openModal('start-topic')">${icons.plus} Start Topic</button>
      </div>
      <div class="filter-bar">
        <div class="search-bar">
          <span class="search-icon">${icons.search}</span>
          <input type="search" placeholder="Search discussions..." oninput="filterDiscussions(this.value)">
        </div>
      </div>
      <div id="discussionList">
        ${state.discussionData.map(d => renderDiscussionCard(d)).join('')}
      </div>
    </div>`;
  return renderAppLayout('discussions', content);
}

function renderDiscussionCard(d) {
  return `
    <div class="discussion-card" onclick="navigate('discussion-detail',{selectedDiscussion:${d.id}})">
      <div class="reply-count-box">
        <div class="reply-count-num">${d.replies}</div>
        <div class="reply-count-label">Replies</div>
      </div>
      <div class="discussion-body">
        <div class="discussion-header">
          <div class="discussion-title">${d.title} ${d.isGroup ? '<span class="group-tag">Study Group</span>' : ''}</div>
          ${badgeFor(d.subject)}
        </div>
        <div class="discussion-excerpt">${d.excerpt}</div>
        <div class="discussion-meta">
          <div class="disc-avatar">${d.authorInitials}</div>
          <strong>${d.author}</strong>
          <span>·</span>
          <span>Started ${d.createdAt}</span>
        </div>
      </div>
    </div>`;
}

function renderDiscussionDetail() {
  const d = state.discussionData.find(x => x.id === state.selectedDiscussion);
  if (!d) return renderDiscussions();
  const replies = discussionReplies[d.id] || [];
  const content = `
    <div class="page-inner">
      <div class="back-link" onclick="navigate('discussions')">${icons.back} Back to Discussions</div>
      <div class="detail-card">
        <div class="detail-card-header">
          <h2>${d.title}</h2>
          ${badgeFor(d.subject)}
        </div>
        <p class="detail-body">${d.excerpt}</p>
        <div class="detail-meta">
          <div class="disc-avatar">${d.authorInitials}</div>
          <strong>${d.author}</strong>
          <span>·</span>
          <span>Started ${d.createdAt}</span>
        </div>
      </div>
      <div class="answers-header">
        <h3>${replies.length} Repl${replies.length !== 1 ? 'ies' : 'y'}</h3>
      </div>
      ${replies.length === 0 ? `<div class="empty-state-sm"><p>No replies yet — be the first to respond!</p></div>` :
        replies.map(r => `
          <div class="answer-card">
            <div class="answer-author">
              <div class="user-avatar" style="background:${r.role === 'Lecturer' ? '#5A7040' : 'var(--primary)'}">${r.initials}</div>
              <div>
                <div class="answer-author-name">${r.author} <span class="role-chip ${r.role === 'Lecturer' ? 'role-lecturer' : 'role-student'}">${r.role}</span></div>
                <div class="answer-author-time">${r.time}</div>
              </div>
            </div>
            <p class="answer-body">${r.content}</p>
          </div>`).join('')}
      <div class="reply-compose">
        <textarea class="form-textarea" id="replyText" placeholder="Write a reply..." style="min-height:90px"></textarea>
        <div style="display:flex;justify-content:flex-end;margin-top:10px">
          <button class="btn btn-primary" onclick="submitDiscussionReply(${d.id})">${icons.send} Post Reply</button>
        </div>
      </div>
    </div>`;
  return renderAppLayout('discussions', content);
}

function renderMessages() {
  const conv = state.activeConversation ? conversations.find(c => c.id === state.activeConversation) : null;
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Messages</h1>
          <p>Direct messages with lecturers and classmates</p>
        </div>
      </div>
      <div class="messages-layout">
        <div class="conversations-panel">
          <div class="conversations-header">
            <h3>Conversations</h3>
            <button class="btn-circle" onclick="showToast('New message','Select a contact to start a conversation.')" title="New message">${icons.plus}</button>
          </div>
          <div class="conversation-list">
            ${conversations.map(c => `
              <div class="conversation-item ${state.activeConversation === c.id ? 'active' : ''}" onclick="state.activeConversation=${c.id};renderPage()">
                <div class="conv-avatar">${c.initials}</div>
                <div class="conv-info">
                  <div class="conv-name">${c.name}</div>
                  <div class="conv-last">${c.lastMsg}</div>
                </div>
                <div class="conv-time">${c.time}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="message-panel">
          ${conv ? renderConversationView(conv) : `
            <div class="message-empty">
              ${icons.mail}
              <h3>Your Messages</h3>
              <p>Select a conversation from the left to start chatting</p>
            </div>`}
        </div>
      </div>
    </div>`;
  return renderAppLayout('messages', content);
}

function renderConversationView(conv) {
  return `
    <div style="display:flex;flex-direction:column;height:100%;width:100%">
      <div class="conv-view-header">
        <div class="conv-avatar">${conv.initials}</div>
        <div style="font-weight:600;font-size:14px">${conv.name}</div>
      </div>
      <div class="conv-messages">
        ${conv.messages.map(msg => `
          <div class="msg-row ${msg.from === 'me' ? 'msg-row-me' : ''}">
            ${msg.from !== 'me' ? `<div class="conv-avatar" style="width:28px;height:28px;font-size:10px">${conv.initials}</div>` : ''}
            <div class="msg-bubble ${msg.from === 'me' ? 'msg-bubble-me' : 'msg-bubble-them'}">${msg.text}</div>
          </div>`).join('')}
      </div>
      <div class="conv-input-row">
        <input class="form-input" id="msgInput_${conv.id}" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendMessage(${conv.id})" style="flex:1">
        <button class="btn btn-primary" onclick="sendMessage(${conv.id})">${icons.send}</button>
      </div>
    </div>`;
}

function renderStudyRoom() {
  const activeGroup = state.studyGroupData.find(g => g.id === state.activeStudyGroup && g.isJoined);
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Study Room</h1>
          <p>Join or create study groups — collaborate in real time with classmates</p>
        </div>
        <button class="btn btn-primary" onclick="openModal('create-group')">${icons.plus} Create Group</button>
      </div>
      <div class="study-room-layout">
        <div class="groups-panel">
          <h3 style="font-size:13px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;padding:0 0 12px">Available Groups</h3>
          ${state.studyGroupData.map(g => `
            <div class="group-card ${state.activeStudyGroup === g.id ? 'group-card-active' : ''}" onclick="state.activeStudyGroup=${g.id};renderPage()">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">
                <div class="group-name">${g.name}</div>
                ${g.isJoined ? '<span class="joined-badge">Joined</span>' : ''}
              </div>
              ${badgeFor(g.subject)}
              <div class="group-meta">${icons.studyroom} ${g.members}/${g.maxMembers} members · Hosted by ${g.host}</div>
              <p class="group-desc">${g.description}</p>
              ${!g.isJoined ? `<button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px" onclick="event.stopPropagation();joinGroup(${g.id})">Join Group</button>` :
                `<button class="btn btn-outline btn-sm" style="width:100%;margin-top:10px;color:var(--text-muted)" onclick="event.stopPropagation();leaveGroup(${g.id})">Leave Group</button>`}
            </div>`).join('')}
        </div>
        <div class="group-chat-panel">
          ${activeGroup ? renderGroupChat(activeGroup) : `
            <div class="message-empty">
              ${icons.studyroom}
              <h3>Join a Group</h3>
              <p>Join a study group to access its chat room and collaborate with other students</p>
            </div>`}
        </div>
      </div>
    </div>`;
  return renderAppLayout('study-room', content);
}

function renderGroupChat(group) {
  return `
    <div style="display:flex;flex-direction:column;height:100%">
      <div class="conv-view-header">
        <div class="group-avatar">${icons.studyroom}</div>
        <div>
          <div style="font-weight:600;font-size:14px">${group.name}</div>
          <div style="font-size:12px;color:var(--text-muted)">${group.members} members · ${group.subject}</div>
        </div>
      </div>
      <div class="conv-messages">
        ${groupMessages.map(m => `
          <div class="msg-row ${m.isMe ? 'msg-row-me' : ''}">
            ${!m.isMe ? `<div class="conv-avatar" style="width:28px;height:28px;font-size:10px">${m.initials}</div>` : ''}
            <div>
              ${!m.isMe ? `<div style="font-size:11px;color:var(--text-muted);margin-bottom:3px">${m.author}</div>` : ''}
              <div class="msg-bubble ${m.isMe ? 'msg-bubble-me' : 'msg-bubble-them'}">${m.content}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:3px;text-align:${m.isMe ? 'right' : 'left'}">${m.time}</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="conv-input-row">
        <input class="form-input" id="groupMsgInput" placeholder="Message the group..." onkeydown="if(event.key==='Enter')sendGroupMessage()" style="flex:1">
        <button class="btn btn-primary" onclick="sendGroupMessage()">${icons.send}</button>
      </div>
    </div>`;
}

function renderProfile() {
  const content = `
    <div class="page-inner">
      <div class="back-link" onclick="navigate('dashboard')">${icons.back} Back to Dashboard</div>
      <div class="profile-card">
        <div class="profile-avatar-lg">${state.user.initials}</div>
        <div class="profile-info">
          <h2>${state.user.name}</h2>
          <p class="profile-role">${state.user.role} · ${state.user.course || 'Bachelor of IT'} · ${state.user.year || '2nd Year'}</p>
          <p style="font-size:13px;color:var(--text-muted);margin-top:4px">${state.user.email}</p>
          <button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="showToast('Edit Profile','Profile editing coming soon.')">Edit Profile</button>
        </div>
      </div>
      <div class="profile-grid">
        <div class="profile-section-card">
          <h3>Enrolled Subjects</h3>
          <div class="enrolled-list">
            ${(state.user.subjects || ['Software Engineering', 'Human-Computer Interaction', 'Database Systems']).map(s => `
              <div class="enrolled-item">
                ${badgeFor(s)}
                <button class="btn btn-outline btn-sm" onclick="navigate('materials');state.materialSubjectFilter='${s}';renderPage()" style="margin-left:auto">Materials</button>
              </div>`).join('')}
          </div>
        </div>
        <div class="profile-section-card">
          <h3>My Activity</h3>
          <div class="profile-stats">
            <div class="profile-stat"><div class="profile-stat-val">${state.questionData.filter(q=>q.author===state.user.name).length}</div><div class="profile-stat-lbl">Questions Asked</div></div>
            <div class="profile-stat"><div class="profile-stat-val">${state.discussionData.filter(d=>d.author===state.user.name).length}</div><div class="profile-stat-lbl">Discussions</div></div>
            <div class="profile-stat"><div class="profile-stat-val">${state.studyGroupData.filter(g=>g.isJoined).length}</div><div class="profile-stat-lbl">Study Groups</div></div>
          </div>
        </div>
      </div>
    </div>`;
  return renderAppLayout('profile', content);
}

function renderSettings() {
  const content = `
    <div class="page-inner">
      <div class="page-header-left" style="margin-bottom:28px">
        <h1>Settings</h1>
        <p>Manage your preferences and account settings</p>
      </div>

      <div class="settings-section">
        <h3>Appearance</h3>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">Night Mode (Dark Theme)</div>
            <div class="setting-desc">Switch to a dark colour scheme — easier on the eyes when studying at night</div>
          </div>
          <button class="toggle-btn ${state.darkMode ? 'toggle-on' : ''}" onclick="toggleDarkMode()">
            <span class="toggle-knob"></span>
          </button>
        </div>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">Font Size</div>
            <div class="setting-desc">Adjust the text size for comfortable reading</div>
          </div>
          <select class="form-select" style="width:130px" onchange="changeFontSize(this.value)">
            <option value="13">Small</option>
            <option value="14" selected>Default</option>
            <option value="15">Large</option>
            <option value="16">Extra Large</option>
          </select>
        </div>
      </div>

      <div class="settings-section">
        <h3>Notifications</h3>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">New Answers</div>
            <div class="setting-desc">Notify me when someone answers my question</div>
          </div>
          <button class="toggle-btn toggle-on" onclick="this.classList.toggle('toggle-on');showToast('Setting saved','Notification preference updated.')">
            <span class="toggle-knob"></span>
          </button>
        </div>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">New Discussion Replies</div>
            <div class="setting-desc">Notify me when someone replies to a discussion I joined</div>
          </div>
          <button class="toggle-btn toggle-on" onclick="this.classList.toggle('toggle-on');showToast('Setting saved','Notification preference updated.')">
            <span class="toggle-knob"></span>
          </button>
        </div>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">New Materials</div>
            <div class="setting-desc">Notify me when a lecturer uploads new study materials</div>
          </div>
          <button class="toggle-btn" onclick="this.classList.toggle('toggle-on');showToast('Setting saved','Notification preference updated.')">
            <span class="toggle-knob"></span>
          </button>
        </div>
      </div>

      <div class="settings-section">
        <h3>Account</h3>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">Profile</div>
            <div class="setting-desc">View and edit your name, email and academic details</div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="navigate('profile')">Edit Profile</button>
        </div>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">Change Password</div>
            <div class="setting-desc">Update your account password</div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="showToast('Password reset','A password reset link has been sent to your email.')">Change</button>
        </div>
        <div class="setting-row">
          <div class="setting-info">
            <div class="setting-title">Sign Out</div>
            <div class="setting-desc">Sign out of your Lounge. account on this device</div>
          </div>
          <button class="btn btn-outline btn-sm" style="color:var(--primary);border-color:var(--primary)" onclick="doSignOut()">Sign Out</button>
        </div>
      </div>
    </div>`;
  return renderAppLayout('settings', content);
}

function renderAbout() {
  return `
    <div class="landing">
      <nav class="landing-nav">
        ${logoHTML()}
        <div class="landing-nav-links">
          <a href="#" onclick="navigate('landing')">Home</a>
          <a href="#" onclick="navigate('auth',{authTab:'login'})">Log In</a>
        </div>
        <div class="landing-nav-actions">
          <button class="btn btn-ghost" onclick="navigate('landing')">Back</button>
          <button class="btn btn-primary" onclick="navigate('auth',{authTab:'register'})">Get Started</button>
        </div>
      </nav>
      <div style="max-width:860px;margin:0 auto;padding:60px 48px">
        <div class="hero-tag" style="margin-bottom:20px">About Lounge.</div>
        <h1 style="font-size:42px;font-weight:800;margin-bottom:20px;line-height:1.15">A Platform Built for Students,<br><span style="color:var(--primary)">by a Student</span></h1>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:24px">Lounge. is a student academic support platform created as part of the HCIN6222 (Human-Computer Interaction) module at university. The platform was designed to solve a very real problem: students struggling to get academic support outside of lecture hours.</p>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:40px">Many students feel too shy or nervous to ask questions during lectures, and after class there's often no easy way to reach a lecturer or find the right study material. Lounge. provides a calm, organised, and inclusive digital space where every student can thrive.</p>

        <div class="features-grid" style="grid-template-columns:repeat(2,1fr);gap:18px;margin-bottom:48px">
          <div class="feature-card"><div class="feature-icon feature-icon-orange">${icons.question}</div><h3>Q&A Forum</h3><p>Students can post academic questions by subject and receive answers from lecturers and classmates.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-green">${icons.materials}</div><h3>Study Materials</h3><p>Upload and download notes, slides, and past papers — organised by subject and searchable.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-blue">${icons.tutorials}</div><h3>Video Tutorials</h3><p>Recorded explanations of difficult topics, organised by subject and available on demand.</p></div>
          <div class="feature-card"><div class="feature-icon feature-icon-orange">${icons.studyroom}</div><h3>Study Rooms</h3><p>Create or join collaborative study groups with a built-in group chat feature.</p></div>
        </div>

        <div style="background:var(--bg-card);border-radius:14px;padding:36px;border:1px solid var(--border);margin-bottom:36px">
          <h2 style="font-size:20px;font-weight:700;margin-bottom:8px">Developer</h2>
          <p style="font-size:14px;color:var(--text-muted)">Manubi Thanyani — ST10462424</p>
          <p style="font-size:14px;color:var(--text-muted);margin-top:4px">HCIN6222 — Human-Computer Interaction</p>
          <p style="font-size:14px;color:var(--text-muted);margin-top:4px">Bachelor of Information Technology</p>
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="navigate('auth',{authTab:'register'})">Get Started Free</button>
          <button class="btn btn-outline" onclick="navigate('landing')">Back to Home</button>
        </div>
      </div>
      <footer class="landing-footer">${logoHTML()}<span>ST10462424 Manubi Thanyani — HCIN6222</span><div class="footer-links"><a href="#" onclick="navigate('landing')">Home</a></div></footer>
    </div>`;
}

function renderHistory() {
  const content = `
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header-left">
          <h1>Activity History</h1>
          <p>A full record of activity across your subjects</p>
        </div>
      </div>
      <div class="activity-card" style="padding:0;overflow:hidden">
        <div style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
          <h3 style="font-size:15px;font-weight:600">All Activity</h3>
          <span style="font-size:12px;color:var(--text-muted)">${state.historyItems.length} events</span>
        </div>
        <div class="activity-list" style="padding:0 24px">
          ${state.historyItems.map(item => `
            <div class="activity-item activity-item-clickable" onclick="activityClick(${item.id})">
              <div class="activity-avatar">${icons[item.type === 'question' ? 'question' : item.type === 'material' ? 'materials' : 'discussions']}</div>
              <div class="activity-body">
                <div class="activity-text"><strong>${item.actor}</strong> ${item.action} <em>${item.content}</em></div>
                <div style="margin-top:4px;display:flex;gap:8px;align-items:center">${badgeFor(item.subject)}<span style="font-size:11.5px;color:var(--text-muted)">${item.time}</span></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  return renderAppLayout('history', content);
}

// ─── ACTIONS ────────────────────────────────────────────────────────────────

window.navigate = navigate;
window.setAuthTab = function(tab) { state.authTab = tab; renderPage(); };

window.toggleDarkMode = function() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark', state.darkMode);
  renderPage();
};

window.changeFontSize = function(size) {
  document.body.style.fontSize = size + 'px';
  showToast('Font size updated', 'The text size has been adjusted.');
};

window.handleLogin = function(e) {
  e.preventDefault();
  state.isLoggedIn = true;
  navigate('dashboard');
};

window.handleRegister = function(e) {
  e.preventDefault();
  const nameEl = document.getElementById('regName');
  const emailEl = document.getElementById('regEmail');
  const roleEl = document.getElementById('regRole');
  if (nameEl && nameEl.value) {
    const parts = nameEl.value.trim().split(' ');
    state.user.name = nameEl.value.trim();
    state.user.initials = parts.map(p => p[0]).join('').toUpperCase().slice(0, 2);
  }
  if (emailEl && emailEl.value) state.user.email = emailEl.value.trim();
  if (roleEl) state.user.role = roleEl.value;
  state.isLoggedIn = true;
  navigate('dashboard');
};

window.doSignOut = function() {
  state.isLoggedIn = false;
  navigate('landing');
};

window.openModal = function(type, data = {}) {
  state.activeModal = type;
  state.modalData = data;
  renderPage();
};

window.closeModal = function() {
  state.activeModal = null;
  state.modalData = {};
  renderPage();
};

window.handleOverlayClick = function(e) {
  if (e.target.id === 'modalOverlay') closeModal();
};

window.openVideoModal = function(tutorialId) {
  const t = tutorials.find(x => x.id === tutorialId);
  if (t) openModal('video', { tutorial: t });
};

window.submitQuestion = function() {
  const title = document.getElementById('qTitle')?.value?.trim();
  const subject = document.getElementById('qSubject')?.value?.trim();
  const details = document.getElementById('qDetails')?.value?.trim();
  if (!title) { showToast('Please add a title', 'A question title is required.'); return; }
  const newQ = {
    id: state.questionData.length + 100,
    title,
    body: details || 'No additional details provided.',
    subject: subject || 'General',
    author: state.user.name,
    answers: 0,
    votes: 0,
    createdAt: 'just now',
  };
  state.questionData.unshift(newQ);
  const event = { id: state.historyItems.length + 100, actor: state.user.name, action: 'Asked a question:', content: title, subject: subject || 'General', time: 'just now', type: 'question', targetId: newQ.id };
  state.historyItems.unshift(event);
  closeModal();
  showToast('Question posted!', 'Your question has been published to the Q&A Forum.');
  navigate('forum');
};

window.submitUpload = function() {
  const title = document.getElementById('uploadTitle')?.value?.trim();
  const subject = document.getElementById('uploadSubject')?.value?.trim();
  if (!title || !subject) { showToast('Fill in all fields', 'Title and subject are required.'); return; }
  closeModal();
  showToast('Material uploaded!', `"${title}" has been added to Study Materials.`);
};

window.submitTopic = function() {
  const title = document.getElementById('topicTitle')?.value?.trim();
  const subject = document.getElementById('topicSubject')?.value?.trim();
  const body = document.getElementById('topicBody')?.value?.trim();
  if (!title) { showToast('Add a title', 'A discussion title is required.'); return; }
  const newD = {
    id: state.discussionData.length + 100,
    title,
    subject: subject || 'General',
    author: state.user.name,
    authorInitials: state.user.initials,
    replies: 0,
    createdAt: 'just now',
    excerpt: body || 'No additional details.',
    isGroup: false,
  };
  state.discussionData.unshift(newD);
  closeModal();
  showToast('Discussion started!', 'Your topic has been published.');
  navigate('discussions');
};

window.submitAnswer = function() {
  const text = document.getElementById('answerText')?.value?.trim();
  if (!text) { showToast('Write an answer', 'An answer cannot be empty.'); return; }
  const q = state.questionData.find(x => x.id === state.selectedQuestion);
  if (q) {
    q.answers++;
    if (!questionAnswers[q.id]) questionAnswers[q.id] = [];
    questionAnswers[q.id].push({ id: Date.now(), author: state.user.name, initials: state.user.initials, role: state.user.role, content: text, time: 'just now', isAccepted: false });
  }
  closeModal();
  showToast('Answer posted!', 'Your answer has been published.');
  renderPage();
};

window.submitDiscussionReply = function(discId) {
  const text = document.getElementById('replyText')?.value?.trim();
  if (!text) { showToast('Write a reply', 'A reply cannot be empty.'); return; }
  const d = state.discussionData.find(x => x.id === discId);
  if (d) {
    d.replies++;
    if (!discussionReplies[discId]) discussionReplies[discId] = [];
    discussionReplies[discId].push({ id: Date.now(), author: state.user.name, initials: state.user.initials, role: state.user.role, content: text, time: 'just now' });
  }
  showToast('Reply posted!', 'Your reply has been published.');
  renderPage();
};

window.submitCreateGroup = function() {
  const name = document.getElementById('groupName')?.value?.trim();
  const subject = document.getElementById('groupSubject')?.value?.trim();
  const max = Number(document.getElementById('groupMax')?.value) || 8;
  const desc = document.getElementById('groupDesc')?.value?.trim();
  if (!name || !subject) { showToast('Fill in all fields', 'Group name and subject are required.'); return; }
  const newG = { id: state.studyGroupData.length + 100, name, subject, members: 1, maxMembers: max, host: state.user.name, description: desc || '', isJoined: true };
  state.studyGroupData.push(newG);
  state.activeStudyGroup = newG.id;
  closeModal();
  showToast('Study group created!', `"${name}" is ready. Share the group name with classmates.`);
  navigate('study-room');
};

window.joinGroup = function(id) {
  const g = state.studyGroupData.find(x => x.id === id);
  if (g) { g.isJoined = true; g.members++; state.activeStudyGroup = id; }
  showToast('Group joined!', `You have joined "${g?.name}". Welcome!`);
  renderPage();
};

window.leaveGroup = function(id) {
  const g = state.studyGroupData.find(x => x.id === id);
  if (g) { g.isJoined = false; g.members = Math.max(0, g.members - 1); }
  if (state.activeStudyGroup === id) state.activeStudyGroup = null;
  showToast('Group left', `You have left the group.`);
  renderPage();
};

window.sendMessage = function(convId) {
  const input = document.getElementById(`msgInput_${convId}`);
  const text = input?.value?.trim();
  if (!text) return;
  const conv = conversations.find(c => c.id === convId);
  if (conv) {
    conv.messages.push({ from: 'me', text });
    conv.lastMsg = text;
  }
  renderPage();
  setTimeout(() => {
    const el = document.getElementById(`msgInput_${convId}`);
    if (el) el.focus();
  }, 50);
};

window.sendGroupMessage = function() {
  const input = document.getElementById('groupMsgInput');
  const text = input?.value?.trim();
  if (!text) return;
  groupMessages.push({ author: state.user.name, initials: state.user.initials, content: text, time: 'just now', isMe: true });
  renderPage();
};

window.downloadMaterial = function(id) {
  const m = materials.find(x => x.id === id);
  showToast('Download started', `"${m?.title}" (${m?.size}) is being downloaded.`);
};

window.activityClick = function(itemId) {
  const item = activityItems.find(x => x.id === itemId);
  if (!item) return;
  if (item.type === 'question') navigate('question-detail', { selectedQuestion: item.targetId });
  else if (item.type === 'discussion') navigate('discussion-detail', { selectedDiscussion: item.targetId });
  else if (item.type === 'material') navigate('materials');
};

window.filterDiscussions = function(val) {
  const q = val.toLowerCase();
  const list = document.getElementById('discussionList');
  if (!list) return;
  const filtered = q ? state.discussionData.filter(d => d.title.toLowerCase().includes(q) || d.excerpt.toLowerCase().includes(q)) : state.discussionData;
  list.innerHTML = filtered.map(d => renderDiscussionCard(d)).join('');
};

window.showToast = function(title, message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<div class="toast-icon">${icons.check}</div><div class="toast-content"><h4>${title}</h4><p>${message}</p></div>`;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 4000);
};

window.renderPage = renderPage;

// ─── RENDER ──────────────────────────────────────────────────────────────────

function renderPage() {
  const app = document.getElementById('app');
  if (state.darkMode) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  switch (state.page) {
    case 'landing':            app.innerHTML = renderLanding(); break;
    case 'auth':               app.innerHTML = renderAuth(); break;
    case 'dashboard':          app.innerHTML = renderDashboard(); break;
    case 'forum':              app.innerHTML = renderForum(); break;
    case 'question-detail':    app.innerHTML = renderQuestionDetail(); break;
    case 'materials':          app.innerHTML = renderMaterials(); break;
    case 'tutorials':          app.innerHTML = renderTutorials(); break;
    case 'discussions':        app.innerHTML = renderDiscussions(); break;
    case 'discussion-detail':  app.innerHTML = renderDiscussionDetail(); break;
    case 'messages':           app.innerHTML = renderMessages(); break;
    case 'study-room':         app.innerHTML = renderStudyRoom(); break;
    case 'profile':            app.innerHTML = renderProfile(); break;
    case 'settings':           app.innerHTML = renderSettings(); break;
    case 'about':              app.innerHTML = renderAbout(); break;
    case 'history':            app.innerHTML = renderHistory(); break;
    default:                   app.innerHTML = renderLanding();
  }
}

function render() { renderPage(); }
renderPage();
