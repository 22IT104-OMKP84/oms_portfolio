# Configure Reply-To in EmailJS Template

## Problem
Currently, emails show the same "From" and "To" address (your email). This makes it hard to reply directly to visitors.

## Solution
Configure your EmailJS template to use the "Reply-To" header. This way:
- **From:** Will be your service email (required by email security)
- **Reply-To:** Will be the visitor's email (so you can reply directly)
- **To:** Your email (omkpatel110@gmail.com)

## Step-by-Step Configuration

### Step 1: Go to EmailJS Dashboard
1. Visit [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Log in to your account

### Step 2: Edit Your Template
1. Go to **Email Templates** in the left sidebar
2. Find and click on your template: `template_2kpo1dh`
3. Click **Edit**

### Step 3: Configure Reply-To Header
1. Look for the **Settings** or **Advanced** section in the template editor
2. Find the **Reply-To** field
3. Enter: `{{reply_to}}` or `{{from_email}}`
4. This will set the Reply-To header to the visitor's email address

### Step 4: Update Template Content (Optional but Recommended)
Make sure your template includes the visitor's information clearly:

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

### Step 5: Save and Publish
1. Click **Save**
2. Make sure the template is **Published** (not just saved as draft)
3. The status should show as "Published"

### Step 6: Test
1. Go to your website
2. Fill out the contact form with a test email
3. Submit it
4. Check your email inbox
5. When you click "Reply", it should automatically use the visitor's email address

## Alternative: If Reply-To Field is Not Available

If your EmailJS template editor doesn't have a Reply-To field, you can:

### Option 1: Use EmailJS Settings
1. In the template editor, look for **Settings** or gear icon
2. Check for **Headers** or **Advanced Options**
3. Add a custom header: `Reply-To: {{reply_to}}`

### Option 2: Update Template Settings
1. Some EmailJS templates have a "Reply-To" option in the service settings
2. Go to **Email Services** → Your service (`service_co2eiqk`)
3. Check if there's a Reply-To configuration option

### Option 3: Use Template Variables in Subject
At minimum, make sure your template clearly shows the visitor's email:

**Subject:** `New Contact: {{from_name}} <{{from_email}}> - {{subject}}`

This way, even if Reply-To doesn't work, you'll see the visitor's email clearly.

## How It Works After Configuration

**Before (Current):**
- From: omkpatel110@gmail.com
- To: omkpatel110@gmail.com
- Reply-To: (not set, defaults to From)

**After (Fixed):**
- From: omkpatel110@gmail.com (service email - required)
- To: omkpatel110@gmail.com (your email)
- Reply-To: visitor@example.com (visitor's email - you can reply directly!)

## Verification

After configuring:
1. Send a test message from your contact form
2. Check the received email
3. Click "Reply" - it should show the visitor's email in the "To" field
4. If it works, you're all set!

## Important Notes

- The "From" address will always be your service email (this is required by email security protocols)
- The "Reply-To" header is what makes it easy to reply to visitors
- Some email clients may show "Reply-To" differently, but clicking "Reply" should work correctly
- Make sure your template is **Published** after making changes

## Still Having Issues?

If Reply-To doesn't appear to work:
1. Check that you saved and published the template
2. Try sending a test email and check the email headers
3. Some email providers may handle Reply-To differently
4. You can always manually copy the visitor's email from the message body

