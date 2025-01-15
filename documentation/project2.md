# Next.js Authentication, Component System, and Annotation Support

## Problem Statement

The goal of this project is to create a web application that integrates **Auth.js** for user authentication, provides a **generic component system** for composable widgets, and supports **annotations** for commenting, tagging, or adding notes to any component.

### Task 1: Authentication with Auth.js

#### Problem Statement:
Implement authentication in a Next.js application using **Auth.js** for both **credentials-based login** (username and password) and **OTP-based login** (OTP sent to emails matching specified patterns). Additionally, configure session management with a validity period for user sessions.

#### Features:
1. **Credentials-based Login**:
   - Users can log in using a **username** and **password**.
   
2. **OTP-based Login**:
   - Users can log in using an **OTP** sent to their email address.
   - The OTP is only sent to emails that match specified patterns (e.g., `@domain.com`).

3. **Session Management**:
   - Sessions will have a configurable validity period.
   - After the session expires, users will need to log in again.

4. **Exit Criteria**:
   - Successful authentication through credentials or OTP.
   - Session expires after the specified period.

#### Implementation Steps:
1. **Initialize Next.js Application**:
   - Set up a Next.js application using `create-next-app`.
   
2. **Install Auth.js**:
   - Install the **Auth.js** package and integrate it into the Next.js application for handling user authentication.
   
3. **Implement Login Features**:
   - Set up the login system with both **username/password** and **OTP-based** login.
   
4. **Configure Session Management**:
   - Use **Auth.js**'s session management features to configure session expiry.

#### Example Code Snippet:
```javascript
import { NextAuth } from "next-auth";

export const authOptions = {
  providers: [
    // Credentials Provider for username and password
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Validate username and password
        const user = await validateUser(credentials.username, credentials.password);
        if (user) {
          return user;
        }
        return null;
      }
    }),
    // OTP Provider (Email-based OTP)
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // Session validity for 24 hours
  },
};
