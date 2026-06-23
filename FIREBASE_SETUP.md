# Firebase Authentication Setup Guide for TITANSPORTS

This guide will help you set up Firebase Authentication for your TITANSPORTS website.

## Prerequisites
- A Google account
- Access to the Firebase Console (https://console.firebase.google.com/)

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `titansports-website`
4. Accept the Firebase terms
5. Choose or create a Google Analytics account (optional)
6. Click "Create project"
7. Wait for project creation to complete
8. Click "Continue" when project is ready

## Step 2: Enable Authentication

1. In your Firebase project, go to "Build" → "Authentication"
2. Click "Get Started"
3. Enable the following sign-in methods:
   - **Email/Password**: Click enable, then click "Save"
   - **Google**: Click enable, then click "Save"
   - (Optional) Add other providers as needed

## Step 3: Set up Firestore Database

1. Go to "Build" → "Firestore Database"
2. Click "Create database"
3. Choose a location (select closest to your users)
4. Start in "Test mode" for development
5. Click "Create"

## Step 4: Get Firebase Configuration

1. Go to Project Settings (gear icon near "Project Overview")
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Enter app name: `titansports-web`
5. Register the app
6. Copy the Firebase configuration object (it looks like this):

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 5: Update Firebase Configuration File

1. Open `js/firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Step 6: Configure Firestore Security Rules

1. Go to Firestore Database → Rules tab
2. Update rules for development (allow read/write for authenticated users):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## Step 7: Create First Admin User

### Option A: Via Firebase Console
1. Go to Authentication → Users
2. Click "Add user"
3. Enter email and password
4. Click "Add user"
5. Note the user ID (UID)

### Option B: Via Registration Page
1. Open your website in a browser
2. Go to `register.html`
3. Register a new account
4. Note the user ID from Firebase Console

## Step 8: Set Admin Role

1. Go to Firestore Database → Data
2. Navigate to `users` collection
3. Find your user document (by UID)
4. Add a field:
   - Field name: `role`
   - Field type: `string`
   - Value: `admin`
5. Click "Save"

## Step 9: Test Authentication

### Test User Registration
1. Open `register.html` in your browser
2. Fill in the registration form
3. Click "Create Account"
4. Check your email for verification link
5. Verify your email

### Test User Login
1. Open `login.html` in your browser
2. Enter your credentials
3. Click "Sign In"
4. You should be redirected to the home page

### Test Admin Access
1. Login with your admin account
2. Try to access `admin-enhanced.html`
3. You should be able to access the admin panel

### Test Non-Admin Access
1. Create a regular user account (without admin role)
2. Try to access `admin-enhanced.html`
3. You should be redirected to home page with error message

## Step 10: Configure Google Sign-In (Optional)

1. Go to Project Settings → General
2. Scroll down to "Your apps"
3. Click on your web app
4. Scroll to "SDK setup and configuration"
5. Click the "Google" provider in the sign-in methods
6. Add your domain to authorized domains:
   - `localhost` (for development)
   - Your production domain
7. Save the configuration

## Security Best Practices

### For Production
1. Change Firestore rules to be more restrictive
2. Enable email verification (required)
3. Set up proper error handling
4. Use environment variables for sensitive data
5. Enable App Check for additional security

### Example Production Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /orders/{orderId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

## Troubleshooting

### Common Issues

**"Firebase is not defined"**
- Ensure Firebase SDK scripts are loaded before your custom scripts
- Check that `firebase-config.js` is loaded correctly

**"Permission denied" errors**
- Check Firestore security rules
- Ensure user is authenticated
- Verify user has proper role for admin access

**Email verification not working**
- Check email provider settings in Firebase Console
- Ensure email templates are configured
- Check spam folder

**Google Sign-In not working**
- Verify Google provider is enabled
- Check authorized domains configuration
- Ensure OAuth consent screen is configured

## Additional Features Implemented

The authentication system includes:
- ✅ Email/password authentication
- ✅ Google social login
- ✅ Password reset functionality
- ✅ Email verification
- ✅ User profile management
- ✅ User dashboard
- ✅ Admin panel protection
- ✅ Session management
- ✅ Navigation state management

## Next Steps

1. Test all authentication features thoroughly
2. Set up proper error monitoring
3. Configure email templates for verification and password reset
4. Add additional security measures for production
5. Consider implementing two-factor authentication
6. Set up user analytics

## Support

If you encounter any issues:
- Check Firebase Console for error logs
- Review browser console for JavaScript errors
- Verify all configuration values are correct
- Ensure all Firebase SDK versions are compatible

## Documentation Links

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/rules)
