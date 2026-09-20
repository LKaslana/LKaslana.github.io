'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const navigationLinks = [...document.querySelectorAll('nav a')];
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href')));
const translations = {
  'zh-CN': {
    skip: '跳至正文', homeLabel: 'Yangcheng Li，返回简介', navLabel: '主导航', personalLabel: '个人信息',
    profile: '简介', research: '研究', projectsNav: '项目', experienceNav: '经历',
    bjut: '北京工业大学', ucd: 'University College Dublin（UCD）', programme: '物联网工程（中外合作办学）',
    vision: '计算机视觉', embodied: '具身智能', contact: '联系方式',
    bio: 'Yangcheng Li，目前就读于北京工业大学与 University College Dublin（UCD）合作办学的物联网工程专业。研究兴趣包括计算机视觉与具身智能。',
    paperHeading: '论文进展', paperStatus: '论文正在撰写中，尚未投稿。',
    projects: '项目与作品', bridgeLink: 'BridgeHPE（GitHub）', accessRequired: '需访问权限',
    experience: '教育与经历', education: '教育经历', educationDate: '2024.09 — 至今',
    internship: '实习经历', company: '云峰基金', role: '投资部实习生', backToTop: '回到顶部',
    description: 'Yangcheng Li 的个人主页。北京工业大学与 University College Dublin（UCD）中外合作办学，物联网工程专业。研究兴趣为计算机视觉与具身智能。'
  },
  en: {
    skip: 'Skip to content', homeLabel: 'Yangcheng Li, back to profile', navLabel: 'Main navigation', personalLabel: 'Personal information',
    profile: 'Profile', research: 'Research', projectsNav: 'Projects', experienceNav: 'Experience',
    bjut: 'Beijing University of Technology', ucd: 'University College Dublin (UCD)', programme: 'Internet of Things Engineering (joint programme)',
    vision: 'Computer Vision', embodied: 'Embodied Intelligence', contact: 'Contact',
    bio: 'I am studying Internet of Things Engineering through the joint programme offered by Beijing University of Technology and University College Dublin (UCD). My research interests include computer vision and embodied intelligence.',
    paperHeading: 'Paper status', paperStatus: 'Paper in preparation; not yet submitted.',
    projects: 'Projects', bridgeLink: 'BridgeHPE (GitHub)', accessRequired: 'Access required',
    experience: 'Education and experience', education: 'Education', educationDate: '2024.09 — Present',
    internship: 'Internship', company: 'Yunfeng Capital', role: 'Intern, Investment Department', backToTop: 'Back to top',
    description: 'Yangcheng Li — Internet of Things Engineering, joint programme at Beijing University of Technology and University College Dublin (UCD). Research interests: computer vision and embodied intelligence.'
  }
};
const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'zh-CN';
try {
  const savedLanguage = localStorage.getItem('site-language');
  if (savedLanguage === 'en' || savedLanguage === 'zh-CN') currentLanguage = savedLanguage;
} catch { /* The site remains usable when browser storage is unavailable. */ }

function applyLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-label]').forEach(element => {
    element.setAttribute('aria-label', copy[element.dataset.i18nLabel]);
  });
  document.querySelector('meta[name="description"]').content = copy.description;
  languageToggle.textContent = language === 'en' ? '中文' : 'English';
  languageToggle.lang = language === 'en' ? 'zh-CN' : 'en';
  languageToggle.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
  updateNavigation();
}
languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'zh-CN' : 'en';
  applyLanguage(currentLanguage);
  try { localStorage.setItem('site-language', currentLanguage); } catch { /* Optional preference only. */ }
});
applyLanguage(currentLanguage);
languageToggle.hidden = false;

function updateNavigation() {
  const boundary = document.querySelector('.site-header').getBoundingClientRect().height + 24;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= boundary) activeSection = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
    activeSection = sections[sections.length - 1];
  }
  for (const link of navigationLinks) {
    if (link.hash === '#' + activeSection.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
  }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
