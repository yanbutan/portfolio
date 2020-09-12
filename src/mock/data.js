import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Yan',
  subtitle: `I'm an aspiring software engineer.`,
  cta: 'About me',
  pta: 'Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a final year Information Systems student at the National University of Singapore. 
  I enjoy learning new technology and applying them through internship, school or personal projects. My interests currently lie in
  web development and the projects listed below are a testament to this.`,
  paragraphTwo: `Apart from development, I enjoy playing floorball, jamming to songs on my guitar, learning new languages and exploring new cultures.
                 I used to play for a floorball club with my friends and did occasional performances on my guitar for school events.`,
  paragraphThree: `Check out my resume and reach out to me if you like what you see!`,
  resume: 'https://drive.google.com/file/d/1oqAeZzzeBv9fhlGpAS3nCB6gDRjh6VCZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bifrost.png',
    title: 'Bifrost Dataset Search',
    info:
      'A dataset consolidation site that makes it easy for data scientists, developers and engineers everywhere to find the data you need!',
    info2: `Web development project that I did for my summer internship company, Bifrost AI.`,
    url: 'https://datasets.bifrost.ai',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'prupru.png',
    title: 'Pruaffinity',
    info: 'An all in one platform for life insurance purchase and management.',
    info2:
      'Capstone project I worked on with 5 other teammates and an external client over a period of 4 months. To try out the live site, use these credentials , username: sylvest and password: password.',
    url: 'https://kepston.herokuapp.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gistomondo.png',
    title: 'Gistomondo',
    info:
      'Simple web application listing all of the latest gists from github. User can also see his or her own gists by clicking on My Gists on the header and logging in through github.',
    info2: 'A take home assignment that I did for an internship interview.',
    url: 'https://gistomondo.netlify.app',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ynaung6995@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'linkedin.com/in/yan-nyein-aung-025a15184',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yanbutan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
