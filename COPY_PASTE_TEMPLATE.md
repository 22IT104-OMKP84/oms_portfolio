# 📋 EmailJS Template - Ready to Copy & Paste

## 🎯 Quick Copy Sections

---

## 1️⃣ SUBJECT LINE
Copy this exactly:

```
Contact Form: {{subject}}
```

---

## 2️⃣ EMAIL CONTENT (Plain Text Version)
Copy everything below this line:

```
You have a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to respond to {{from_name}}.
```

---

## 3️⃣ REPLY-TO FIELD
In EmailJS template settings, find "Reply-To" and enter:

```
{{reply_to}}
```

---

## 📝 Step-by-Step Instructions

### Step 1: Open EmailJS Dashboard
1. Go to: **https://dashboard.emailjs.com/**
2. Log in to your account

### Step 2: Edit Your Template
1. Click **"Email Templates"** in the left sidebar
2. Find and click on: **template_2kpo1dh**
3. Click the **"Edit"** button

### Step 3: Paste Subject
1. Find the **"Subject"** field
2. Delete any existing content
3. Paste: `Contact Form: {{subject}}`

### Step 4: Paste Content
1. Find the **"Content"** or **"Message"** field (usually a large text area)
2. Delete any existing content
3. Paste the entire content block from section 2️⃣ above

### Step 5: Configure Reply-To
1. Scroll down in the template editor
2. Look for:
   - **"Settings"** section
   - **"Advanced Options"**
   - **"Reply-To"** field
   - Or **"Headers"** section
3. Find the **"Reply-To"** field
4. Enter: `{{reply_to}}`
5. If Reply-To field doesn't exist, look for "Headers" and add: `Reply-To: {{reply_to}}`

### Step 6: Save & Publish
1. Click **"Save"** button
2. Make sure the template shows as **"Published"** (not "Draft")
3. Status should be green/active

### Step 7: Test
1. Go to your website
2. Fill out the contact form
3. Submit it
4. Check your email inbox
5. Click "Reply" - it should use the visitor's email!

---

## 🎨 Alternative: HTML Version (Better Formatting)

If you want a nicely formatted email, use this HTML version instead:

### SUBJECT:
```
Contact Form: {{subject}}
```

### CONTENT (HTML):
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
    New Contact Form Message
  </h2>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 5px 0;"><strong>From:</strong> {{from_name}}</p>
    <p style="margin: 5px 0;"><strong>Email:</strong> {{from_email}}</p>
    <p style="margin: 5px 0;"><strong>Subject:</strong> {{subject}}</p>
  </div>
  
  <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
    <p style="white-space: pre-wrap; line-height: 1.6; color: #374151;">{{message}}</p>
  </div>
  
  <p style="color: #6b7280; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    💬 Reply directly to this email to respond to {{from_name}}.
  </p>
</div>
```

### REPLY-TO:
```
{{reply_to}}
```

**Note:** Make sure your template editor supports HTML. Look for an "HTML" or "Rich Text" toggle.

---

## ✅ Verification Checklist

After pasting, verify:
- [ ] Subject contains: `Contact Form: {{subject}}`
- [ ] Content includes all variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Reply-To field contains: `{{reply_to}}`
- [ ] Template is saved
- [ ] Template is Published (not Draft)
- [ ] Test email works correctly

---

## 🔧 Troubleshooting

**Problem:** Can't find Reply-To field
- **Solution:** Look for "Settings" → "Headers" → Add custom header: `Reply-To: {{reply_to}}`

**Problem:** Variables not working
- **Solution:** Make sure you use double curly braces: `{{variable}}` (not single braces)

**Problem:** Email looks plain
- **Solution:** Use the HTML version above for better formatting

**Problem:** Reply-To not working
- **Solution:** Make sure template is Published, not just saved

---

## 📧 Expected Result

After configuration, when someone submits your contact form:

**You'll receive an email:**
- **From:** omkpatel110@gmail.com (your service email)
- **To:** omkpatel110@gmail.com (your email)
- **Reply-To:** visitor@example.com (visitor's email - you can reply directly!)
- **Subject:** Contact Form: [their subject]
- **Content:** Their message with all details

**When you click "Reply":**
- It will automatically use the visitor's email address
- You can respond directly to them!

---

**That's it! Copy and paste the sections above into your EmailJS template. 🚀**

