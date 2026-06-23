# Firebase Authentication Testing Guide

## Testing Checklist

### 1. Firebase Configuration Test
- [ ] Open browser console (F12)
- [ ] Navigate to any page with Firebase SDK
- [ ] Check for "Firebase initialized successfully" message
- [ ] Check for "Firebase auth persistence enabled" message
- [ ] Verify no Firebase initialization errors in console

### 2. User Registration Test
- [ ] Navigate to `register.html`
- [ ] Fill in registration form:
  - Full Name: Test User
  - Email: test@example.com
  - Password: test123456
  - Confirm Password: test123456
- [ ] Click "Create Account"
- [ ] Check for success message
- [ ] Check email inbox for verification link
- [ ] Click verification link
- [ ] Try to login with verified credentials

### 3. User Login Test
- [ ] Navigate to `login.html`
- [ ] Enter email: test@example.com
- [ ] Enter password: test123456
- [ ] Click "Sign In"
- [ ] Should be redirected to `index.html`
- [ ] Check browser console for "User is authenticated" message
- [ ] Verify navigation shows Dashboard and Profile links
- [ ] Verify Login and Register links are hidden

### 4. Google Sign-In Test
- [ ] Navigate to `login.html`
- [ ] Click "Sign in with Google"
- [ ] Complete Google authentication flow
- [ ] Should be redirected to `index.html`
- [ ] Check if user profile was created in Firestore

### 5. Password Reset Test
- [ ] Navigate to `forgot-password.html`
- [ ] Enter email: test@example.com
- [ ] Click "Send Reset Link"
- [ ] Check for success message
- [ ] Check email inbox for reset link
- [ ] Click reset link and set new password
- [ ] Try to login with new password

### 6. Profile Management Test
- [ ] Login to account
- [ ] Navigate to `profile.html`
- [ ] Check if profile data loads correctly
- [ ] Update profile information
- [ ] Click "Save Changes"
- [ ] Verify changes were saved
- [ ] Test password change functionality

### 7. Dashboard Test
- [ ] Login to account
- [ ] Navigate to `dashboard.html`
- [ ] Check if dashboard loads correctly
- [ ] Verify user information is displayed
- [ ] Test navigation links

### 8. Admin Access Test
- [ ] Create admin user in Firebase Console
- [ ] Set user role to 'admin' in Firestore
- [ ] Login with admin credentials
- [ ] Navigate to `admin-enhanced.html`
- [ ] Should be able to access admin panel
- [ ] Logout and try with non-admin user
- [ ] Should be denied access

### 9. Authentication Protection Test
- [ ] Logout from account
- [ ] Try to access `index.html` directly
- [ ] Should be redirected to `login.html`
- [ ] Try to access `profile.html` directly
- [ ] Should be redirected to `login.html`
- [ ] Try to access `dashboard.html` directly
- [ ] Should be redirected to `login.html`

### 10. Navigation State Test
- [ ] Logout from account
- [ ] Check navigation shows Login and Register links
- [ ] Check Dashboard and Profile links are hidden
- [ ] Login to account
- [ ] Check navigation shows Dashboard and Profile links
- [ ] Check Login and Register links are hidden

## Common Issues and Solutions

### Issue: "Firebase is not defined"
**Solution:** Ensure Firebase SDK scripts are loaded before your custom scripts. Check script order in HTML files.

### Issue: "Firebase already initialized"
**Solution:** The Firebase config now handles this with `!firebase.apps.length` check. This should be resolved.

### Issue: "Permission denied" errors
**Solution:** Check Firestore security rules in Firebase Console. Ensure rules allow authenticated users to read/write.

### Issue: Email verification not working
**Solution:** 
- Check email provider settings in Firebase Console
- Verify email templates are configured
- Check spam folder
- Ensure email verification is enabled in Firebase Auth settings

### Issue: Google Sign-In not working
**Solution:**
- Verify Google provider is enabled in Firebase Console
- Check authorized domains configuration
- Ensure OAuth consent screen is configured
- Check browser console for specific error messages

### Issue: Redirect loops
**Solution:** Check authentication logic in navigation scripts. Ensure proper handling of authenticated vs non-authenticated states.

### Issue: Navigation not updating
**Solution:** Ensure `navigation-auth.js` is loaded after Firebase SDK. Check browser console for JavaScript errors.

## Console Messages to Look For

### Success Messages:
- "Firebase initialized successfully"
- "Firebase already initialized"
- "Firebase auth persistence enabled"
- "User is authenticated: [email]"
- "User is not authenticated, redirecting to login"

### Error Messages to Investigate:
- "Firebase initialization error"
- "Error enabling auth persistence"
- "Authentication error"
- "Permission denied"
- "Firebase is not defined"

## Testing in Different Browsers

Test the authentication system in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge (if available)

## Testing on Mobile Devices

Test the authentication system on:
- [ ] Mobile browser (Chrome/Safari)
- [ ] Different screen sizes
- [ ] Touch interactions

## Performance Testing

- [ ] Test authentication speed
- [ ] Check page load times with Firebase SDK
- [ ] Verify offline functionality (if enabled)

## Security Testing

- [ ] Test with invalid credentials
- [ ] Test with expired tokens
- [ ] Test session persistence
- [ ] Verify protected routes are secure

## Next Steps After Testing

1. Fix any issues found during testing
2. Optimize performance if needed
3. Add additional error handling
4. Implement proper logging
5. Set up monitoring for production
6. Configure email templates
7. Add additional security measures
