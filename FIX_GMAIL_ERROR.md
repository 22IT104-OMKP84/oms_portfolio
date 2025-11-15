# Fix Gmail Authentication Error

## Error: "Gmail_API: Request had insufficient authentication scopes"

This error occurs when your Gmail service in EmailJS doesn't have the proper permissions to send emails.

## Solution: Reconnect Gmail Service

### Step 1: Go to EmailJS Dashboard
1. Visit [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Log in to your account

### Step 2: Reconnect Gmail Service
1. Go to **Email Services** in the left sidebar
2. Find your service (`service_co2eiqk`)
3. Click on it to open settings
4. Click **Reconnect** or **Disconnect and Reconnect**
5. You'll be redirected to Google to authorize
6. **IMPORTANT:** Make sure to grant ALL requested permissions
7. Check all the permission boxes that appear
8. Complete the authorization process

### Step 3: Verify Service Status
1. After reconnecting, make sure the service shows as **Active**
2. The status should be green/active

### Step 4: Test Again
1. Go back to your website
2. Try submitting the contact form again
3. It should work now!

## Alternative Solution: Use a Different Email Service

If Gmail continues to have issues, you can use:

### Option 1: Outlook/Office 365
1. In EmailJS, add a new service
2. Choose **Outlook** or **Office 365**
3. Connect your Microsoft account
4. Update the Service ID in `script.js`

### Option 2: SendGrid (Recommended for Production)
1. Sign up at [SendGrid](https://sendgrid.com/) (free tier available)
2. Create an API key
3. In EmailJS, add SendGrid as a service
4. Enter your SendGrid API key
5. Update the Service ID in `script.js`

### Option 3: Use SMTP Service
1. In EmailJS, add a new service
2. Choose **SMTP**
3. Enter your email provider's SMTP settings:
   - **Gmail SMTP:**
     - Host: smtp.gmail.com
     - Port: 587
     - Username: your-email@gmail.com
     - Password: Use an App Password (not your regular password)
     - Security: TLS

## How to Create Gmail App Password (If using SMTP)

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** → **2-Step Verification** (must be enabled)
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Use this password in EmailJS SMTP settings

## Quick Fix Checklist

- [ ] Reconnected Gmail service in EmailJS
- [ ] Granted all requested permissions
- [ ] Service shows as Active
- [ ] Tested form submission
- [ ] Checked browser console for new errors

## Still Having Issues?

If the error persists after reconnecting:
1. Try disconnecting the service completely
2. Wait a few minutes
3. Reconnect it fresh
4. Make sure you're using the same Google account
5. Consider switching to SendGrid or SMTP for more reliability

