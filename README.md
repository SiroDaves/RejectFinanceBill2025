# Reject the 🇰🇪 Finance Bill 2025 ✊🏾

This is a simple Next.js web app that allows users to reject the 2025 Kenyan Finance Bill with one click — or customize the message in their own words.

## 🚀 Features

- One-click letter rejection system
- Editable message text
- Sends email using Gmail SMTP
- Simple and fast setup

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SiroDaves/RejectFinanceBill2025.git
cd RejectFinanceBill2025
````

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (preferably version 18+), then run:

```bash
npm install
# or
yarn install
```

---

## ✉️ Setup Gmail SMTP

This app uses Gmail to send emails. For security, you **must** enable 2-Factor Authentication (2FA) on your Gmail account and create an **App Password**.

### Step-by-Step Instructions:

1. Go to [Google Account Settings](https://myaccount.google.com/).
2. Navigate to **Security**.
3. Under **"Signing in to Google"**, enable **2-Step Verification** if it’s not already enabled.
4. After enabling, you’ll see an option called **App passwords** — click it.
5. Generate a new app password:

   * Select **App**: "Mail"
   * Select **Device**: Choose "Other" and name it something like `FinanceBillApp`
   * Google will give you a 16-character password. Copy it.

### Add Environment Variables

Copy a `.env.example` and rename it to `.env.local` file in the root of the project:

```env
EMAIL_PASSKEY=your-email@gmail.com
EMAIL_ADDRESS=your-app-password
RECIPIENT_EMAIL=the-recipient-email
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ Never commit `.env.local` to version control!

---

## ▶️ Running the App

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to start using the app.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

MIT License

---

## Let ours voices be heard. Reject the Finance Bill 2025!.