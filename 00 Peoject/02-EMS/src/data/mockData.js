export const employees = [
  { id: 1, name: "Hare Krishna",    email: "hk@hk.com",   phone: "+91 98765 43210", dept: "Management",  role: "CEO & Founder",   status: "active",   salary: 250000, joined: "2020-01-01", avatar: "HK", avColor: "av-blue",   location: "Gandhinagar",   manager: "Board of Directors",  skills: ["Leadership","Strategy","Public Speaking"] },
  { id: 2, name: "Aryan Mehta",     email: "aryan.mehta@ems.io",    phone: "+91 98765 43211", dept: "Marketing",    role: "Marketing Lead",     status: "active",   salary: 72000,  joined: "2021-07-20", avatar: "AM", avColor: "av-teal",   location: "Delhi",     manager: "Hare Krishna", skills: ["SEO","Content","Analytics"] },
  { id: 3, name: "Kavya Patel",     email: "kavya.patel@ems.io",    phone: "+91 98765 43212", dept: "HR",           role: "HR Manager",         status: "leave",    salary: 68000,  joined: "2020-11-05", avatar: "KP", avColor: "av-purple", location: "Pune",      manager: "Rahul Gupta",  skills: ["Recruitment","Training","Policy"] },
  { id: 4, name: "Dhruv Singh",     email: "dhruv.singh@ems.io",    phone: "+91 98765 43213", dept: "Engineering",  role: "DevOps Engineer",    status: "active",   salary: 88000,  joined: "2023-01-10", avatar: "DS", avColor: "av-green",  location: "Bangalore", manager: "Amit Khanna",  skills: ["AWS","Docker","Kubernetes"] },
  { id: 5, name: "Ritika Joshi",    email: "ritika.joshi@ems.io",   phone: "+91 98765 43214", dept: "Design",       role: "UI/UX Designer",     status: "active",   salary: 76000,  joined: "2022-08-22", avatar: "RJ", avColor: "av-pink",   location: "Hyderabad", manager: "Kavya Patel",  skills: ["Figma","Sketch","CSS"] },
  { id: 6, name: "Kuldip Roy",      email: "kuldip.roy@ems.io",     phone: "+91 98765 43215", dept: "Finance",      role: "Finance Analyst",    status: "inactive", salary: 64000,  joined: "2021-04-18", avatar: "KR", avColor: "av-amber",  location: "Kolkata",   manager: "Rahul Gupta",  skills: ["Excel","Tally","SAP"] },
  { id: 7, name: "Sneha Kulkarni",  email: "sneha.k@ems.io",        phone: "+91 98765 43216", dept: "Engineering",  role: "Backend Developer",  status: "active",   salary: 84000,  joined: "2022-06-01", avatar: "SK", avColor: "av-teal",   location: "Pune",      manager: "Hare Krishna", skills: ["Python","Django","PostgreSQL"] },
  { id: 8, name: "Rahul Gupta",     email: "rahul.gupta@ems.io",    phone: "+91 98765 43217", dept: "Management",   role: "VP Operations",      status: "active",   salary: 140000, joined: "2019-09-01", avatar: "RG", avColor: "av-red",    location: "Mumbai",    manager: "CEO",          skills: ["Strategy","Leadership","Ops"] },
  { id: 9, name: "Amit Khanna",     email: "amit.khanna@ems.io",    phone: "+91 98765 43218", dept: "Engineering",  role: "Tech Lead",          status: "active",   salary: 112000, joined: "2020-02-14", avatar: "AK", avColor: "av-blue",   location: "Bangalore", manager: "Rahul Gupta",  skills: ["Architecture","React","Go"] },
  { id:10, name: "Pooja Yadav",     email: "pooja.yadav@ems.io",    phone: "+91 98765 43219", dept: "Marketing",    role: "Content Strategist", status: "leave",    salary: 58000,  joined: "2023-05-11", avatar: "PY", avColor: "av-purple", location: "Delhi",     manager: "Aryan Mehta",  skills: ["Writing","Blogging","CMS"] },
  { id:11, name: "Vikram Nair",     email: "vikram.nair@ems.io",    phone: "+91 98765 43220", dept: "Design",       role: "Graphic Designer",   status: "active",   salary: 61000,  joined: "2023-03-20", avatar: "VN", avColor: "av-green",  location: "Chennai",   manager: "Ritika Joshi", skills: ["Photoshop","Illustrator","Canva"] },
  { id:12, name: "Meera Iyer",      email: "meera.iyer@ems.io",     phone: "+91 98765 43221", dept: "Finance",      role: "Accountant",         status: "active",   salary: 55000,  joined: "2022-11-08", avatar: "MI", avColor: "av-amber",  location: "Hyderabad", manager: "Kuldip Roy",   skills: ["Tally","GST","Payroll"] },
];

export const attendanceData = [
  { date: "2026-03-14", name: "Hare Krishna",   avatar: "HK", avColor: "av-blue",   dept: "Management",  checkIn: "08:45 AM", checkOut: "07:30 PM", hours: "10h 45m", status: "Present" },
  { date: "2026-03-14", name: "Aryan Mehta",    avatar: "AM", avColor: "av-teal",   dept: "Marketing",   checkIn: "09:20 AM", checkOut: "06:00 PM", hours: "8h 40m", status: "Present" },
  { date: "2026-03-14", name: "Kavya Patel",    avatar: "KP", avColor: "av-purple", dept: "HR",          checkIn: "—",        checkOut: "—",        hours: "—",      status: "Leave"   },
  { date: "2026-03-14", name: "Dhruv Singh",    avatar: "DS", avColor: "av-green",  dept: "Engineering", checkIn: "10:12 AM", checkOut: "07:00 PM", hours: "8h 48m", status: "Late"    },
  { date: "2026-03-14", name: "Ritika Joshi",   avatar: "RJ", avColor: "av-pink",   dept: "Design",      checkIn: "09:01 AM", checkOut: "05:55 PM", hours: "8h 54m", status: "Present" },
  { date: "2026-03-14", name: "Kuldip Roy",     avatar: "KR", avColor: "av-amber",  dept: "Finance",     checkIn: "—",        checkOut: "—",        hours: "—",      status: "Absent"  },
  { date: "2026-03-14", name: "Sneha Kulkarni", avatar: "SK", avColor: "av-teal",   dept: "Engineering", checkIn: "08:55 AM", checkOut: "06:02 PM", hours: "9h 07m", status: "Present" },
  { date: "2026-03-14", name: "Rahul Gupta",    avatar: "RG", avColor: "av-red",    dept: "Management",  checkIn: "09:30 AM", checkOut: "07:30 PM", hours: "10h 0m", status: "Present" },
  { date: "2026-03-14", name: "Amit Khanna",    avatar: "AK", avColor: "av-blue",   dept: "Engineering", checkIn: "09:00 AM", checkOut: "06:00 PM", hours: "9h 00m", status: "Remote"  },
  { date: "2026-03-14", name: "Pooja Yadav",    avatar: "PY", avColor: "av-purple", dept: "Marketing",   checkIn: "—",        checkOut: "—",        hours: "—",      status: "Leave"   },
  { date: "2026-03-14", name: "Vikram Nair",    avatar: "VN", avColor: "av-green",  dept: "Design",      checkIn: "09:10 AM", checkOut: "05:45 PM", hours: "8h 35m", status: "Present" },
  { date: "2026-03-14", name: "Meera Iyer",     avatar: "MI", avColor: "av-amber",  dept: "Finance",     checkIn: "09:45 AM", checkOut: "06:30 PM", hours: "8h 45m", status: "Late"    },
];

export const leaveRequests = [
  { id: 1, name: "Kavya Patel",  avatar: "KP", avColor: "av-purple", dept: "HR",          type: "Sick Leave",    from: "2026-03-12", to: "2026-03-16", days: 5, reason: "Medical treatment and recovery",  status: "Approved" },
  { id: 2, name: "Pooja Yadav", avatar: "PY", avColor: "av-purple", dept: "Marketing",   type: "Casual Leave",  from: "2026-03-14", to: "2026-03-15", days: 2, reason: "Personal work",                   status: "Approved" },
  { id: 3, name: "Dhruv Singh", avatar: "DS", avColor: "av-green",  dept: "Engineering", type: "Annual Leave",  from: "2026-03-20", to: "2026-03-24", days: 5, reason: "Family vacation",                 status: "Pending"  },
  { id: 4, name: "Aryan Mehta", avatar: "AM", avColor: "av-teal",   dept: "Marketing",   type: "Casual Leave",  from: "2026-03-25", to: "2026-03-25", days: 1, reason: "Personal appointment",            status: "Pending"  },
  { id: 5, name: "Meera Iyer",  avatar: "MI", avColor: "av-amber",  dept: "Finance",     type: "Sick Leave",    from: "2026-03-18", to: "2026-03-19", days: 2, reason: "Fever and rest",                  status: "Rejected" },
  { id: 6, name: "Vikram Nair", avatar: "VN", avColor: "av-green",  dept: "Design",      type: "Annual Leave",  from: "2026-04-01", to: "2026-04-05", days: 5, reason: "Festival holidays",               status: "Pending"  },
];

export const payrollData = [
  { id: 1, name: "Hare Krishna",   avatar: "HK", avColor: "av-blue",   dept: "Management",  role: "CEO & Founder",  basic: 150000, hra: 60000, allowances: 40000, deductions: 0, net: 250000, status: "Paid"    },
  { id: 2, name: "Aryan Mehta",    avatar: "AM", avColor: "av-teal",   dept: "Marketing",   role: "Marketing Lead",    basic: 72000, hra: 28800, allowances: 9000,  deductions: 21640, net: 88160,  status: "Paid"    },
  { id: 3, name: "Kavya Patel",    avatar: "KP", avColor: "av-purple", dept: "HR",          role: "HR Manager",        basic: 68000, hra: 27200, allowances: 8500,  deductions: 19960, net: 83740,  status: "Paid"    },
  { id: 4, name: "Dhruv Singh",    avatar: "DS", avColor: "av-green",  dept: "Engineering", role: "DevOps Engineer",   basic: 88000, hra: 35200, allowances: 11000, deductions: 27060, net: 107140, status: "Pending" },
  { id: 5, name: "Ritika Joshi",   avatar: "RJ", avColor: "av-pink",   dept: "Design",      role: "UI/UX Designer",    basic: 76000, hra: 30400, allowances: 9500,  deductions: 23120, net: 92780,  status: "Paid"    },
  { id: 6, name: "Kuldip Roy",     avatar: "KR", avColor: "av-amber",  dept: "Finance",     role: "Finance Analyst",   basic: 64000, hra: 25600, allowances: 8000,  deductions: 18880, net: 78720,  status: "Paid"    },
  { id: 7, name: "Sneha Kulkarni", avatar: "SK", avColor: "av-teal",   dept: "Engineering", role: "Backend Developer", basic: 84000, hra: 33600, allowances: 10500, deductions: 25580, net: 102520, status: "Pending" },
  { id: 8, name: "Rahul Gupta",    avatar: "RG", avColor: "av-red",    dept: "Management",  role: "VP Operations",     basic: 140000,hra: 56000, allowances: 20000, deductions: 48800, net: 167200, status: "Paid"    },
];

export const recentActivity = [
  { id: 1, type: "join",    text: "Vikram Nair joined the Design team",              time: "2 hours ago"  },
  { id: 2, type: "leave",   text: "Kavya Patel's leave request was approved",        time: "4 hours ago"  },
  { id: 3, type: "payroll", text: "March payroll processed for 8 employees",         time: "Yesterday"    },
  { id: 4, type: "task",    text: "Performance review cycle started for Q1 2026",    time: "2 days ago"   },
  { id: 5, type: "alert",   text: "Kuldip Roy marked absent for 3 consecutive days", time: "3 days ago"   },
  { id: 6, type: "policy",  text: "Updated WFH policy published by HR",              time: "1 week ago"   },
];

export const departmentStats = [
  { dept: "Engineering", count: 4, percent: 33, color: "#1d4ed8" },
  { dept: "Marketing",   count: 2, percent: 17, color: "#0d9488" },
  { dept: "HR",          count: 1, percent: 8,  color: "#9333ea" },
  { dept: "Design",      count: 2, percent: 17, color: "#ec4899" },
  { dept: "Finance",     count: 2, percent: 17, color: "#d97706" },
  { dept: "Management",  count: 1, percent: 8,  color: "#dc2626" },
];

export const monthlyAttendance = [
  { month: "Sep", present: 88, absent: 5,  leave: 7  },
  { month: "Oct", present: 91, absent: 3,  leave: 6  },
  { month: "Nov", present: 85, absent: 7,  leave: 8  },
  { month: "Dec", present: 80, absent: 10, leave: 10 },
  { month: "Jan", present: 90, absent: 4,  leave: 6  },
  { month: "Feb", present: 87, absent: 6,  leave: 7  },
  { month: "Mar", present: 83, absent: 8,  leave: 9  },
];

export const performanceData = [
  { name: "Hare Krishna",   score: 98, dept: "Management" },
  { name: "Aryan Mehta",    score: 85, dept: "Marketing"   },
  { name: "Kavya Patel",    score: 88, dept: "HR"          },
  { name: "Dhruv Singh",    score: 90, dept: "Engineering" },
  { name: "Ritika Joshi",   score: 94, dept: "Design"      },
  { name: "Sneha Kulkarni", score: 87, dept: "Engineering" },
  { name: "Rahul Gupta",    score: 96, dept: "Management"  },
];
