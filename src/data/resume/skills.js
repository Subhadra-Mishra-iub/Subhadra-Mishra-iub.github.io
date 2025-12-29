const skills = [
  // Languages
  { title: 'Python', competency: 5, category: ['Languages', 'Programming Languages'] },
  { title: 'Java', competency: 5, category: ['Languages', 'Programming Languages'] },
  { title: 'JavaScript', competency: 4, category: ['Languages', 'Programming Languages', 'Web Development'] },
  { title: 'TypeScript', competency: 4, category: ['Languages', 'Programming Languages', 'Web Development'] },
  { title: 'C/C++', competency: 3, category: ['Languages', 'Programming Languages'] },
  { title: 'SQL', competency: 4, category: ['Languages', 'Databases'] },
  { title: 'R', competency: 3, category: ['Languages', 'Data Science'] },
  { title: 'HTML5', competency: 4, category: ['Languages', 'Web Development'] },
  { title: 'CSS', competency: 4, category: ['Languages', 'Web Development'] },
  { title: 'Shell Scripting', competency: 3, category: ['Languages', 'Tools'] },

  // Backend & Cloud
  { title: 'REST APIs', competency: 4, category: ['Backend', 'Web Development'] },
  { title: 'Node.js', competency: 4, category: ['Backend', 'Web Development'] },
  { title: 'Django', competency: 3, category: ['Backend', 'Python'] },
  { title: 'Flask', competency: 3, category: ['Backend', 'Python'] },
  { title: 'AWS', competency: 4, category: ['Cloud', 'DevOps'] },
  { title: 'ECS', competency: 3, category: ['Cloud', 'AWS'] },
  { title: 'EC2', competency: 3, category: ['Cloud', 'AWS'] },
  { title: 'S3', competency: 3, category: ['Cloud', 'AWS'] },
  { title: 'IAM', competency: 3, category: ['Cloud', 'AWS', 'Security'] },
  { title: 'Docker', competency: 4, category: ['Cloud', 'DevOps', 'Tools'] },
  { title: 'Kubernetes', competency: 3, category: ['Cloud', 'DevOps'] },
  { title: 'Terraform', competency: 3, category: ['Cloud', 'DevOps'] },

  // Systems & Infrastructure
  { title: 'Distributed Systems', competency: 3, category: ['Systems'] },
  { title: 'Concurrency', competency: 3, category: ['Systems'] },
  { title: 'Scalability', competency: 3, category: ['Systems'] },
  { title: 'Load Balancing', competency: 3, category: ['Systems', 'DevOps'] },
  { title: 'Monitoring', competency: 4, category: ['Systems', 'DevOps'] },
  { title: 'Logging', competency: 4, category: ['Systems', 'DevOps'] },
  { title: 'Linux', competency: 4, category: ['Operating Systems', 'Tools'] },
  { title: 'Unix', competency: 3, category: ['Operating Systems', 'Tools'] },
  { title: 'Nginx', competency: 3, category: ['Systems', 'DevOps'] },

  // Data & Analytics
  { title: 'PostgreSQL', competency: 4, category: ['Databases', 'Data Engineering'] },
  { title: 'MySQL', competency: 4, category: ['Databases', 'Data Engineering'] },
  { title: 'MongoDB', competency: 3, category: ['Databases', 'NoSQL'] },
  { title: 'ETL', competency: 3, category: ['Data Engineering'] },
  { title: 'NoSQL', competency: 3, category: ['Databases'] },
  { title: 'Dask', competency: 3, category: ['Big Data', 'Data Engineering', 'Python'] },
  { title: 'Pandas', competency: 5, category: ['Data Science', 'Data Engineering', 'Python'] },
  { title: 'Power BI', competency: 3, category: ['Data Visualization', 'Tools'] },
  { title: 'Tableau', competency: 3, category: ['Data Visualization', 'Tools'] },
  { title: 'Query Optimization', competency: 4, category: ['Databases', 'Data Engineering'] },

  // Security & Networking
  { title: 'TCP/IP', competency: 3, category: ['Networking', 'Security'] },
  { title: 'DNS', competency: 3, category: ['Networking'] },
  { title: 'HTTP', competency: 4, category: ['Networking', 'Web Development'] },
  { title: 'Encryption', competency: 3, category: ['Security'] },
  { title: 'Firewalls', competency: 3, category: ['Security'] },
  { title: 'IDS/IPS', competency: 3, category: ['Security'] },
  { title: 'OAuth2.0', competency: 3, category: ['Security', 'Web Development'] },
  { title: 'Compliance', competency: 3, category: ['Security'] },

  // QA & Tooling
  { title: 'Pytest', competency: 4, category: ['QA', 'Testing', 'Python'] },
  { title: 'Selenium', competency: 3, category: ['QA', 'Testing'] },
  { title: 'Automated Testing', competency: 4, category: ['QA', 'Testing'] },
  { title: 'GitHub Actions', competency: 4, category: ['CI/CD', 'DevOps', 'Tools'] },
  { title: 'Jenkins', competency: 3, category: ['CI/CD', 'DevOps'] },
  { title: 'Agile', competency: 4, category: ['Methodologies'] },
  { title: 'Jira', competency: 3, category: ['Tools', 'Methodologies'] },

  // Web Development
  { title: 'React', competency: 4, category: ['Web Development', 'Javascript'] },
  { title: 'Next.js', competency: 4, category: ['Web Development', 'Javascript'] },
  { title: 'Express.js', competency: 3, category: ['Backend', 'Web Development'] },
  { title: 'Tailwind', competency: 3, category: ['Web Development'] },
];

// Map skills to remove duplicates and combine categories
const uniqueSkills = skills.reduce((acc, skill) => {
  const existing = acc.find((s) => s.title === skill.title);
  if (existing) {
    existing.category = [...new Set([...existing.category, ...skill.category])];
  } else {
    acc.push(skill);
  }
  return acc;
}, []).map((skill) => ({ ...skill, category: skill.category.sort() }));

export { uniqueSkills as skills };

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#ffa500',
  '#9b59b6',
  '#16a085',
];

const categories = [...new Set(uniqueSkills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories };
