# Contact Form Troubleshooting Guide

If you're getting an error when submitting the contact form, follow these steps:

## Step 1: Check Browser Console
1. Open your website
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Try submitting the form
5. Look for any error messages - they will help identify the issue

## Step 2: Verify EmailJS Configuration

### Check Your EmailJS Template Variables
Your EmailJS template must have these exact variable names:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (optional, for reference)

**To check/fix:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Open your template (`template_rm5lv6e`)
4. Make sure it uses these variable names exactly as shown above
5. **Important:** Click **Save** and make sure the template is **Published**

### Check Your Email Service
1. Go to **Email Services** in EmailJS dashboard
2. Make sure your service (`service_co2eiqk`) is **Active**
3. Verify it's connected to your email account

### Verify Your IDs
Double-check these in your EmailJS dashboard:
- **Public Key:** `uoDsefYekCeJcsWmJ` (in Account → General)
- **Service ID:** `service_co2eiqk` (in Email Services)
- **Template ID:** `template_2kpo1dh` (in Email Templates)

## Step 3: Common Issues & Solutions

### Issue: "Template not found" or "Service not found"
**Solution:** 
- Verify the Service ID and Template ID are correct
- Make sure there are no extra spaces when copying
- Ensure the template is published

### Issue: "Invalid template variables"
**Solution:**
- Check that your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Variable names are case-sensitive

### Issue: "Email service not connected"
**Solution:**
- Go to Email Services in dashboard
- Reconnect your email account
- Make sure the service is active

### Issue: "Rate limit exceeded"
**Solution:**
- Free tier allows 200 emails/month
- Wait or upgrade your plan

## Step 4: Test the Configuration

1. Open browser console (F12)
2. Try submitting the form
3. Check the console for:
   - "Sending email with params:" - shows what data is being sent
   - Any error messages with details

## Step 5: Alternative - Use Formspree (If EmailJS doesn't work)

If EmailJS continues to have issues, you can use Formspree as an alternative:

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form endpoint
4. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Quick Checklist

- [ ] EmailJS account is active
- [ ] Service ID is correct: `service_co2eiqk`
- [ ] Template ID is correct: `template_2kpo1dh`
- [ ] Template is published
- [ ] Template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Email service is connected and active
- [ ] Public key is correct: `uoDsefYekCeJcsWmJ`
- [ ] No errors in browser console

## Still Having Issues?

Check the browser console for the specific error message and:
1. Note the exact error text
2. Check EmailJS dashboard for any warnings
3. Verify all IDs are correct
4. Make sure your email service is properly connected

