# Happy Birthday, My Special Person ❤️🎂

A cinematic, interactive, emotional, and romantic digital birthday surprise story built with vanilla HTML5, CSS3, and JavaScript.

---

## ✨ Features

- **01. Romantic Preloader**: Animated progress bar with glowing hearts, rose petals, stars, and cycling warm messages.
- **02. Cinematic Welcome Page**: Dreamy gradients with interactive typing effect and glowing enter button.
- **03. Interactive Velvet Curtains**: Realistic curtain pull animation that opens into the birthday room.
- **04. Birthday Stage**: Bunting banners, fairy lights, custom name header, and glowing candles.
- **05. Interactive Cake & Candles**: Clickable candles with flame flicker, extinguishing smoke, Web Audio sound effects, and fireworks explosion!
- **06. Virtual Bouquet 💐**: Interactive flower bouquet with blooming animation, fragrance particles, and hidden message notes on each flower.
- **07. Music Player 🎵**: Glassmorphic album card, play/pause controls, time stamps, seek slider, and automatic Web Audio melodic synthesizer fallback!
- **08. Love Letter 💌**: Interactive envelope opening with flap rotation and handwritten typewriter letter reveal.
- **09. 3D Memory Flip-Book 📖**: Interactive book with page turning animation, page sound rustle, and multi-chapter memory story.
- **10. Polaroid Memory Gallery 📸**: Polaroid cards with 3D tilt hover, lightbox modal zoom, captions, and full-screen Cinema Slideshow mode.
- **11. "Reasons You Are Special" ❤️**: Interactive 3D flippable heart cards revealing personalized compliments.
- **12. Birthday Arcade 🎮**: 3 mini-games including Catch Hearts (canvas game), Pop Balloons, and Memory Match.
- **13. Surprise Gift Boxes 🎁**: Bouncing gift boxes that shake open with confetti and unique rewards.
- **14. Secret Password Vault 🔐**: Password protection unlocking a secret romantic message (Default code: `LOVE`).
- **15. Future Dreams 🌙**: Floating wish cards for the coming year.
- **16. Magical Wish Tree 🌳 & Time Capsule ⏳**: Interactive tree that grows glowing leaves as you make wishes, plus a digital time capsule note seal.
- **17. Grand Finale & Fireworks**: Massive fireworks explosion, giant glowing gift box reveal, and twin hearts floating into a starry night sky.
- **18. Custom Glowing Cursor**: Floating heart trail and sparkle cursor effects for desktop.

---

## 🛠️ How to Customize Birthday Content

All personalized text, messages, photos, and music are managed inside the top configuration object in **`script.js`**:

```javascript
const birthdayConfig = {
  name: "Her Name",
  nickname: "Cutie ❤️",
  birthDate: "2026-08-09",
  message: `Dear You, ...`, // Your custom handwritten letter
  secretPassword: "LOVE", // Change secret vault code here
  song: "assets/song.mp3", // Path to your favorite song
  memories: [ ... ], // Array of photos, dates, and captions
  reasons: [ ... ], // Array of reasons why they are special
  futureDreams: [ ... ] // Array of future wishes
};
```

---

## 📂 Project Structure

```
├── index.html        # Main HTML structure and section containers
├── style.css         # Complete design system, glassmorphism, animations & mobile responsiveness
├── script.js        # Core story logic, canvas particle engine, and Web Audio synthesizer
├── README.md         # Documentation & customization guide
└── assets/
    ├── song.mp3      # Optional local audio file for background song
    ├── memories/     # Optional photo folder for polaroid gallery
    └── images/       # Optional custom background graphics
```

---

## 🚀 Running the App

This application runs natively in any standard browser or Node/Vite web server.

1. Simply open `index.html` in your browser, OR
2. Run `npm run dev` to serve via Vite dev server at `http://localhost:3000`

Made with love ❤️
