import React from "react";
import { isAdmin, isEmployee } from "../../Utils/roles";

/**
 * RoleGuard Component
 * Only renders its children if the user satisfies the explicitly required role.
 */
export default function RoleGuard({ user, requireRole, fallback = null, children }) {
  if (!user) return fallback;

  if (requireRole === "admin" && isAdmin(user)) {
    return <>{children}</>;
  }

  if (requireRole === "employee" && isEmployee(user)) {
    return <>{children}</>;
  }

  return fallback;
}
