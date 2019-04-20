module.exports = {
  siteTitle: 'Li Chen | Software Engineer',
  siteDescription:
    'Li Chen is a software engineer based in Atlanta, GA who specializes in data engineering and analytics.',
  siteKeywords:
    'Li Chen, chen1649chenli, software engineer, data engineer, data visualization',
  siteUrl: 'https://lichen1649.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Li Chen',
  location: 'Atlanta, GA',
  email: 'chen1649chenli@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/chen1649chenli/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lichen1649/',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@bchiang7',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
