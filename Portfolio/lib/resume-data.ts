export const resumeData = {
  name: "Yashaswini Kulal",
  title: "Data Science Engineer",
  location: "Mangalore, India",
  email: "yashaswini310@gmail.com",
  phone: "+91 6361013914",
  summary:
    "Data Science Engineer with strong proficiency in SQL, Python, and Machine Learning fundamentals. Experience in data validation, testing, and working with Snowflake and dbt to ensure data accuracy. Skilled in analyzing datasets and supporting data-driven decision-making through reliable data insights.",

  experiences: [
    {
      company: "Technomers",
      role: "Data Science Engineer",
      period: "Feb 2024 – Feb 2026",
      location: "Mangalore",
      description: "Worked on a client project for Util-Assist focused on smart meter data management and analytics. Built and deployed DBT models in Snowflake to resolve data gaps and improve data quality through structured preprocessing and automation.",
      achievements: [
        "Improved reporting efficiency by 30% for Util-Assist smart meter project",
        "Built and deployed DBT models improving data completeness by 20%",
        "Applied machine learning models improving predictive accuracy by 20%",
        "Improved data quality by 25% through structured preprocessing and cleaning",
        "Reduced manual data collection time by 60% through automation and web scraping",
        "Optimized SQL queries, reducing analysis time by 30%",
        "Performed regression testing and data validation for production systems",
        "Mentored junior team members on data best practices"
      ],
    },
    {
      company: "Vaidik Edu Services",
      role: "Subject Matter Expert",
      period: "Sep 2023 – Jan 2024",
      location: "Noida",
      description: "Provided statistical analysis and hypothesis testing solutions. Guided students in applying statistical models to real-world datasets.",
      achievements: [
        "Provided statistical analysis and hypothesis testing solutions",
        "Guided students in applying statistical models to real-world datasets",
      ],
    },
    {
      company: "Numentrix Consultancy",
      role: "Data Analyst Intern",
      period: "May 2023 – Jul 2023",
      location: "Bangalore",
      description: "Cleaned and transformed datasets using Excel and SQL. Performed complex joins and data manipulation and built Tableau dashboards to visualize industry performance metrics.",
      achievements: [
        "Cleaned and transformed datasets using Excel and SQL",
        "Performed complex joins and data manipulation using SQL",
        "Built Tableau dashboards to visualize industry performance metrics",
        "Delivered actionable insights for fabric industry optimization",
      ],
    },
    {
      company: "Codelab Systems",
      role: "Data Science Intern",
      period: "Oct 2022 – Nov 2022",
      location: "Mangalore, Karnataka",
      description: "Engaged in exploratory data analysis (EDA), dataset cleaning, and model development using machine learning techniques. Assisted in model evaluation to improve prediction accuracy and performance.",
      achievements: [
        "Engaged in exploratory data analysis (EDA), dataset cleaning, and model development",
        "Assisted in model evaluation to improve prediction accuracy and performance",
      ],
    },
  ],

  skills: {
    "Programming & Tools": [
      "SQL",
      "Python",
      "Excel",
      "Snowflake",
      "DBT",
      "Tableau",
      "Power BI",
    ],
    "Data Engineering": [
      "Data Analysis",
      "Data Cleaning",
      "Web Scraping",
    ],
    "Data Science": [
      "Machine Learning",
      "Statistics",
      "EDA",
      "Data Visualization",
    ],
    "Soft Skills": [
      "Collaboration",
      "Communication",
      "Problem Solving",
      "Mentoring",
    ],
  },

  certifications: [
    {
      name: "Data Science Math Skills",
      issuer: "Coursera",
    },
    {
      name: "Tableau for beginners",
      issuer: "Great Learning",
    },
    {
      name: "Predictive Modeling and Analysis",
      issuer: "Great Learning",
    },
    {
      name: "Basics of Exploratory Data Analysis",
      issuer: "Great Learning",
    },
    {
      name: "Hypothesis Testing",
      issuer: "Great Learning",
    },
    {
      name: "Data Science Foundation",
      issuer: "Great Learning",
    },
  ],

  education: [
    {
      degree: "MSc. Big Data Analytics",
      institution: "St. Aloysius College (autonomous)",
      period: "Nov 2021 – Aug 2023",
      location: "Mangalore",
      gpa: "8.02",
    },
    {
      degree: "BSc. Statistics, Mathematics, Physics",
      institution: "St. Aloysius College (autonomous)",
      period: "Jun 2018 – Sep 2021",
      location: "Mangalore",
      gpa: "7.14",
    },
  ],

  social: {
    linkedin: "https://linkedin.com/in/yashaswini-kulal-b82407250",
    github: "https://github.com",
    email: "yashaswini310@gmail.com",
  },

  projects: [
    {
      title: "Real-time Data Pipeline",
      description:
        "Built a real-time data pipeline using Kafka, Python, and Snowflake to process 100K+ events daily with 99.9% uptime.",
      technologies: ["Kafka", "Python", "Snowflake", "DBT"],
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Developed ML model to predict customer churn with 87% accuracy, helping company retain 10K+ customers annually.",
      technologies: ["Python", "Scikit-learn", "SQL", "Tableau"],
    },
    {
      title: "Automated Data Quality Monitoring",
      description:
        "Created automated data quality checks using Python and SQL to monitor 50+ data sources in real-time.",
      technologies: ["Python", "SQL", "Airflow", "Slack API"],
    },
  ],
}

export type ResumeData = typeof resumeData
