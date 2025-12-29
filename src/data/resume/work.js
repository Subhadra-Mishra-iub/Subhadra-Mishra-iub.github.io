/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Handshake AI Solutions LLC',
    position: 'AI Research Fellow (MOVE Fellowship)',
    url: '',
    startDate: '2025-08-01',
    summary: 'Evaluating LLM outputs and developing structured workflows for data validation, logging, and metrics review to improve model consistency and reliability.',
    highlights: [
      'Evaluated LLM outputs within an established evaluation pipeline by generating prompts and analyzing predefined parameters to identify failures, regressions, and edge cases, improving consistency and reliability',
      'Developed structured workflows for data validation, logging, and metrics review that surfaced edge cases earlier and made model comparison easier to debug, analyze, and tune for performance',
    ],
  },
  {
    name: 'WTIU/WFIU (PBS/NPR)',
    position: 'Broadcast Systems Engineer & Production Data Analyst',
    url: 'https://wtiu.org',
    startDate: '2024-06-01',
    summary: 'Maintain 99.9% uptime across 5 channels by managing distributed master-control systems and building data pipelines for QA checks and reporting.',
    highlights: [
      'Maintained 99.9% uptime across 5 channels by managing distributed master-control systems (NControl, BlackMagic, NGest) and configuring proactive monitoring and fault detection for live traffic',
      'Built Python + Power BI pipelines analyzing 150+ daily events to automate QA checks, flag anomalies in schedules and logs, and improve reporting accuracy and operational visibility for engineers',
      'Enhanced incident response using SLO-based monitoring (ProTrack/XPlorer/NView), reducing MTTR through faster alert triage, root-cause analysis, and clear handoff to on-call engineering staff',
    ],
  },
  {
    name: 'Indiana University Bloomington',
    position: 'Graduate Teaching Assistant — Security for Networked Systems',
    url: 'https://luddy.indiana.edu',
    startDate: '2024-08-01',
    endDate: '2024-12-01',
    summary: 'Led labs for 100+ students on cryptography, IDS/IPS, protocol analysis, and secure system design.',
    highlights: [
      'Led labs for 100+ students on cryptography, IDS/IPS, protocol analysis, and secure system design, guiding students through debugging, incident simulations, and performance trade-off discussions',
    ],
  },
  {
    name: 'MyEdMaster, LLC',
    position: 'Software Developer',
    url: '',
    startDate: '2024-06-01',
    endDate: '2024-08-01',
    summary: 'Optimized backend SQL queries and API endpoints, improving data retrieval by 20% and stabilizing CI/CD pipelines.',
    highlights: [
      'Optimized backend SQL queries, API endpoints, and React components supporting product development, improving data retrieval and UI responsiveness by 20%',
      'Improved build reliability by refining Git workflows and stabilizing CI/CD pipelines with GitHub Actions, increasing deployment consistency by 25% across test and production environments',
    ],
  },
  {
    name: 'Bartleby Technologies Pvt. Ltd.',
    position: 'Senior Technical SME',
    url: 'https://www.bartleby.com',
    startDate: '2019-07-01',
    endDate: '2023-05-01',
    summary: 'Developed Pytest automation frameworks and optimized PostgreSQL schemas, improving release quality by 40% and decision turnaround by 30%.',
    highlights: [
      'Developed Pytest automation frameworks for UI/API validation, enabling parallelized execution, richer coverage of edge cases, and improving release quality by 40% for core learner workflows',
      'Designed optimized PostgreSQL schemas and SQL workflows for analytics and reporting, reducing latency, simplifying dashboards, and improving decision turnaround by 30% for operations teams',
      'Built scalable Node.js onboarding systems automating account setup for 300+ users, integrating role-based permissions and configuration checks, and improving setup time and reliability by 50%',
    ],
  },
];

export default work;
