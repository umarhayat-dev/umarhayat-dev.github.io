
# EmailJS Setup Guide

To make the contact form work with static hosting (GitHub Pages, Netlify, etc.), follow these steps to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent via your portfolio contact form
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Contact Component
Replace the placeholder values in `client/src/components/sections/contact.tsx`:

```typescript
const EMAILJS_SERVICE_ID = "your_actual_service_id";
const EMAILJS_TEMPLATE_ID = "your_actual_template_id";
const EMAILJS_PUBLIC_KEY = "your_actual_public_key";
```

## 6. Test the Setup
1. Run your application
2. Fill out the contact form
3. Check your email for the submission

## Alternative Services

### Formspree
1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get form endpoint
3. Replace EmailJS code with a simple form POST to Formspree endpoint

### Netlify Forms
If hosting on Netlify:
1. Add `netlify` attribute to your form
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Form submissions will appear in Netlify dashboard

## Security Note
EmailJS public keys are safe to expose in client-side code. However, consider setting up domain restrictions in your EmailJS dashboard for added security.
