// Role-based Access Control Utilities

export const ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
};

/**
 * Check if the user has admin privileges
 * @param {Object} user 
 * @returns {boolean}
 */
export const isAdmin = (user) => {
  return user?.role === ROLES.ADMIN;
};

/**
 * Check if the user has employee privileges
 * @param {Object} user 
 * @returns {boolean}
 */
export const isEmployee = (user) => {
  return user?.role === ROLES.EMPLOYEE;
};

/**
 * Filter navigation items based on user role
 * @param {Array} navItems 
 * @param {Object} user 
 * @returns {Array} List of allowed navigation items
 */
export const getVisibleNav = (navItems, user) => {
  if (isAdmin(user)) return navItems;
  
  // Custom transformations for Employee role
  return navItems.filter(item => !["employees", "reports"].includes(item.id))
    .map(item => {
      if (item.id === "payroll") return { ...item, label: "My Payslip", icon: "file-text" };
      return item;
    });
};

/**
 * Verify if the user is authorized for the given page route
 * @param {string} pageRoute 
 * @param {Object} user 
 * @returns {boolean}
 */
export const canAccessPage = (pageRoute, user) => {
  if (isAdmin(user)) return true;
  const restrictedPages = ["employees", "reports"];
  return !restrictedPages.includes(pageRoute);
};
