# EmailJS Setup Instructions

Your contact form is now ready to send emails! Follow these simple steps to configure EmailJS:

## Step 1: Create a Free EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

   **Subject:** `Contact Form: {{subject}}`
   
   **Content:**
   ```
   You have a new message from your portfolio website!
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Reply directly to this email to respond to {{from_name}}.
   ```

4. **IMPORTANT - Configure Reply-To:**
   - In the template editor, find **Settings** or **Advanced Options**
   - Look for **Reply-To** field
   - Enter: `{{reply_to}}` or `{{from_email}}`
   - This allows you to reply directly to visitors!

5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key**

## Step 5: Update Your Code

Open `script.js` and replace these placeholders:

1. **Line 85:** Replace `"YOUR_PUBLIC_KEY"` with your actual Public Key
   ```javascript
   emailjs.init("your-actual-public-key-here");
   ```

2. **Line 119:** Replace `'YOUR_SERVICE_ID'` with your Service ID
   ```javascript
   'your-service-id-here',
   ```

3. **Line 120:** Replace `'YOUR_TEMPLATE_ID'` with your Template ID
   ```javascript
   'your-template-id-here',
   ```

## Step 6: Test Your Form

1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the message!

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **Error messages?** Make sure all IDs are correctly copied (no extra spaces)
- **Still having issues?** Check the EmailJS console in your dashboard for error logs

## Example of Final Code

After setup, your `script.js` should look like this (with your actual values):

```javascript
emailjs.init("abc123xyz789"); // Your Public Key

const response = await emailjs.send(
  'service_abc123',  // Your Service ID
  'template_xyz789', // Your Template ID
  {
    from_name: formData.user_name,
    from_email: formData.user_email,
    subject: formData.subject,
    message: formData.message,
    to_email: formData.to_email
  }
);
```

That's it! Your contact form will now automatically send you emails when someone submits a message.

