# Global Exchange Landing Page

A mobile-first React + Vite landing page based on the supplied Global Exchange brief.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Conversion links
- Telegram: https://t.me/globalexhange
- Apply Now: https://surl.li/cwvkae

All Chat on Telegram buttons open the supplied Telegram profile. Telegram username links do not automatically prefill a message; visitors can start the conversation in Telegram.

## Meta Pixel
Add your Meta Pixel base code and Pixel ID in `index.html` or through your tag manager. The app calls `fbq('track', 'Contact')` for Telegram clicks and `fbq('track', 'Lead')` for Apply Now clicks if `fbq` is available. Configure consent handling appropriate to your audience and jurisdiction.

## Before publishing
This is a front-end starter, not a verification of the advertised financial service. The minimum deposit, provider relationships, market access, payment methods, leverage, tax claims and regulatory status require independent documentary and legal verification. The page intentionally does not promote the unverified 500X, 0% tax, Angadiya or crypto-payment claims. Do not accept or direct deposits until the recipient, payment route and legal permissibility have been checked.

Replace or add Privacy Policy and Terms pages with accurate, approved business documents before production launch.
