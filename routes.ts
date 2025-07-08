/**
 * An array of routes accessible to the public which will not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes accessible to the public which will require authentication
 * & will redirect users to the  /settings
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The API for authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiPrefix = "/api/auth";

/**
 * Default route after the user logs in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
