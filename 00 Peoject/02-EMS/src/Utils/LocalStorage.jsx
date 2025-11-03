const employees = [
  {
    id: 1,
    firstName: "dhruv",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design homepage layout",
        taskDescription: "Create the wireframe and layout for the homepage.",
        taskDate: "2025-10-28",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client feedback review",
        taskDescription:
          "Go through client feedback and prepare response points.",
        taskDate: "2025-10-29",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug fixing round 1",
        taskDescription: "Fix priority 1 bugs in the dashboard module.",
        taskDate: "2025-10-30",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "aryan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries to improve performance in reports.",
        taskDate: "2025-10-25",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Unit testing setup",
        taskDescription: "Implement Jest setup for new service modules.",
        taskDate: "2025-10-27",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Documentation update",
        taskDescription: "Update API documentation for v2.0 release.",
        taskDate: "2025-10-31",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Team sync",
        taskDescription: "Weekly team catch-up on project progress.",
        taskDate: "2025-10-26",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "kuldip",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Research competitor pricing",
        taskDescription: "Analyze competitor product pricing models.",
        taskDate: "2025-10-23",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Prepare presentation deck",
        taskDescription: "Design slides for upcoming client pitch.",
        taskDate: "2025-10-29",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Social media campaign plan",
        taskDescription: "Outline the November campaign schedule.",
        taskDate: "2025-10-30",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "krishna",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Onboard new intern",
        taskDescription: "Guide intern through the initial project setup.",
        taskDate: "2025-10-22",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Code review - API module",
        taskDescription: "Review PRs related to authentication and routes.",
        taskDate: "2025-10-28",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Security audit checklist",
        taskDescription: "Create an updated checklist for next quarter audit.",
        taskDate: "2025-10-31",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Performance review meeting",
        taskDescription: "Attend performance evaluation with manager.",
        taskDate: "2025-10-24",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "kavya",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Server migration",
        taskDescription: "Assist in migration from AWS EC2 to Azure.",
        taskDate: "2025-10-27",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "System backup verification",
        taskDescription: "Ensure all data backups completed successfully.",
        taskDate: "2025-10-28",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Incident report follow-up",
        taskDescription: "Document and close recent incident tickets.",
        taskDate: "2025-10-29",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Priya",
    email: "priya@gmail.com",
    password: "123",
  },
];

  // localStorage.setItem("employees", JSON.stringify(employees));
  // localStorage.setItem("admin", JSON.stringify(admin)); 

export const setLocalStorages = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorages = () => {
  const emp = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { emp, admin };
};
