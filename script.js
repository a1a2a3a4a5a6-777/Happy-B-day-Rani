/**
 * ============================================================================
 * Happy Birthday, My Special Person ❤️🎂
 * Complete Interactive Story, Animations & Sound Synthesis Engine
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
   EASILY EDITABLE BIRTHDAY CONFIGURATION
   ---------------------------------------------------------------------------- */
const birthdayConfig = {
  name: "My Special Person",
  nickname: "Cutie ❤️",
  birthDate: "2026-08-09",
  message: `Dear You,

Today is not just another day...

It's the day someone incredibly special came into this world.

I hope your smile never fades,
your dreams keep getting bigger,
and every year brings you more happiness than the last.

Thank you for being the wonderful, radiant soul that you are.

Happy Birthday. ❤️`,
  secretPassword: "LOVE",
  song: "assets/song.mp3",
  
  memories: [
    {
      title: "Our Favorite Laughs",
      date: "Jan 2026",
      caption: "The day we couldn't stop laughing!",
      note: "Every laugh with you is a memory I cherish deeply.",
      svgColor: "#ff3366"
    },
    {
      title: "Sunset Walk",
      date: "Feb 2026",
      caption: "Watching colors fade into twilight.",
      note: "The sky was beautiful, but my eyes were on you.",
      svgColor: "#9d4edd"
    },
    {
      title: "Cozy Coffee Moments",
      date: "Mar 2026",
      caption: "Warm drinks & warm hearts.",
      note: "Hours felt like minutes whenever we talked.",
      svgColor: "#ffd700"
    },
    {
      title: "Starry Night Wishes",
      date: "Apr 2026",
      caption: "Counting stars together.",
      note: "I wished upon a star, and here you are.",
      svgColor: "#ff85a2"
    },
    {
      title: "Little Adventures",
      date: "May 2026",
      caption: "Exploring new paths.",
      note: "Every place becomes magical when you're there.",
      svgColor: "#3a86ef"
    },
    {
      title: "Today's Celebration",
      date: "Today",
      caption: "Here's to making infinite more memories!",
      note: "May this year bring you all the love in the world.",
      svgColor: "#ff3366"
    }
  ],

  reasons: [
    { title: "Your Smile 😊", icon: "😊", text: "Your smile brightens up even the darkest day in an instant!" },
    { title: "Your Kindness ❤️", icon: "❤️", text: "The gentle warmth and care you show to everyone is truly inspiring." },
    { title: "Your Energy ✨", icon: "✨", text: "Your enthusiasm makes every small moment feel like a grand adventure." },
    { title: "Your Laugh 😂", icon: "😂", text: "Hearing your genuine laugh is easily my favorite sound in the world." },
    { title: "Your Presence 🌸", icon: "🌸", text: "Just knowing you are near brings a sense of calm and pure joy." },
    { title: "Simply You 🫶", icon: "🫶", text: "Because nobody else in the universe could ever compare to you!" }
  ],

  futureDreams: [
    { title: "More Smiles 😊", text: "May every single morning give you a brand new reason to smile." },
    { title: "More Adventures 🗺️", text: "To exploring new places, tasting new foods, and making core memories." },
    { title: "More Dreams 🌙", text: "May all your secret wishes and big goals come to life effortlessly." },
    { title: "More Success 🏆", text: "Cheering for all your victories and proud moments along the way." },
    { title: "More Happiness ✨", text: "Wishing you a heart filled with endless peace, warmth, and love." },
    { title: "Beautiful Memories 📸", text: "To filling countless more photo albums with happiness together." }
  ],

  gifts: [
    {
      icon: "💌",
      title: "Love Note Token",
      body: "You bring so much joy, light, and warmth into the world! Never stop shining your beautiful smile.",
      openedIcon: "💖"
    },
    {
      icon: "🌹",
      title: "Virtual Bouquet Pass",
      body: "A million virtual roses for the most wonderful, radiant person. May your life always bloom with happiness!",
      openedIcon: "💐"
    },
    {
      icon: "📖",
      title: "Golden Memory Voucher",
      body: "Redeemable for 100 endless smile moments, cozy chats, stargazing talks, and spontaneous adventures together!",
      openedIcon: "🌟"
    },
    {
      icon: "🎁",
      title: "Grand Birthday Wish Pass",
      body: "Redeem one huge, unrestricted birthday wish anytime! Valid forever with infinite love and cheers.",
      openedIcon: "👑"
    }
  ]
};

/* ----------------------------------------------------------------------------
   GLOBAL APP STATE & AUDIO SYNTHESIZER
   ---------------------------------------------------------------------------- */
let currentSectionIndex = 0;
const sectionIds = [
  'welcome-section',
  'stage-section',
  'cake-section',
  'bouquet-section',
  'music-section',
  'letter-section',
  'book-section',
  'gallery-section',
  'reasons-section',
  'games-section',
  'gifts-section',
  'secret-section',
  'dreams-section',
  'tree-section',
  'surprise-section',
  'final-gift-section',
  'final-screen-section'
];

let audioCtx = null;
let bgMusicElement = null;
let isMusicPlaying = false;
let isAudioSynthPlaying = false;
let synthTimer = null;

// Initialize Web Audio Context
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Web Audio Sound Effects Synthesizer
function playSynthSound(type) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'chime') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.6);
      });
    } else if (type === 'confetti') {
      const bufferSize = ctx.sampleRate * 0.3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(3000, ctx.currentTime + 0.3);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start();
    } else if (type === 'flip') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    }
  } catch (e) {
    console.log("Audio synth error", e);
  }
}

// Background Romantic Melodic Synthesizer Fallback
function startMelodicSynth() {
  if (isAudioSynthPlaying) return;
  isAudioSynthPlaying = true;
  const ctx = getAudioContext();

  const melodyNotes = [
    261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00, 329.63,
    293.66, 349.23, 440.00, 493.88, 523.25, 392.00, 329.63, 261.63
  ];
  let noteIdx = 0;

  function playNextNote() {
    if (!isAudioSynthPlaying) return;
    const freq = melodyNotes[noteIdx];
    noteIdx = (noteIdx + 1) % melodyNotes.length;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.8);

    synthTimer = setTimeout(playNextNote, 600);
  }
  playNextNote();
}

function stopMelodicSynth() {
  isAudioSynthPlaying = false;
  if (synthTimer) clearTimeout(synthTimer);
}

/* ----------------------------------------------------------------------------
   PRELOADER INITIALIZATION
   ---------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloader-bar');
  const percentText = document.getElementById('preloader-percent');
  const textElem = document.getElementById('preloader-text');

  const messages = [
    "Preparing Something Special...",
    "Loading Memories...",
    "Loading Love...",
    "Preparing Your Surprise...",
    "Almost Ready..."
  ];

  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + '%';
    percentText.textContent = progress + '%';

    const msgIndex = Math.floor((progress / 100) * (messages.length - 1));
    textElem.textContent = messages[msgIndex];

    if (progress >= 100) {
      clearInterval(interval);
      playSynthSound('chime');
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.getElementById('top-bar').classList.add('visible');
        startTypewriterText();
      }, 600);
    }
  }, 35);
}

/* ----------------------------------------------------------------------------
   TYPEWRITER EFFECT ON WELCOME SCREEN
   ---------------------------------------------------------------------------- */
function startTypewriterText() {
  const target = document.getElementById('typewriter-text');
  const textToType = "I made something special for you. Are you ready?";
  let charIdx = 0;

  function typeChar() {
    if (charIdx < textToType.length) {
      target.textContent += textToType.charAt(charIdx);
      charIdx++;
      setTimeout(typeChar, 70);
    }
  }
  typeChar();
}

/* ----------------------------------------------------------------------------
   CUSTOM CURSOR & AMBIENT PARTICLE CANVAS
   ---------------------------------------------------------------------------- */
function initCursorAndCanvas() {
  const cursorDot = document.getElementById('cursor-dot');
  
  // Custom cursor movement (desktop)
  if (window.innerWidth > 768) {
    cursorDot.style.display = 'block';
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';

      if (Math.random() < 0.2) {
        spawnParticle(e.clientX, e.clientY, 'heart');
      }
    });

    document.querySelectorAll('button, .polaroid-card, .flip-card, .candle').forEach(elem => {
      elem.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
      elem.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
    });
  }

  // Ambient Canvas Setup
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleTypes = ['❤️', '✨', '🌹', '🌸', '⭐'];

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 18 + 12,
      symbol: particleTypes[Math.floor(Math.random() * particleTypes.length)],
      vx: (Math.random() - 0.5) * 0.8,
      vy: -Math.random() * 1.2 - 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.02
    });
  }

  function spawnParticle(x, y, forcedSymbol) {
    particles.push({
      x: x,
      y: y,
      size: Math.random() * 16 + 10,
      symbol: forcedSymbol === 'heart' ? '❤️' : particleTypes[Math.floor(Math.random() * particleTypes.length)],
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 2 - 0.5,
      alpha: 1,
      rotation: 0,
      vRot: (Math.random() - 0.5) * 0.05
    });
    if (particles.length > 80) particles.shift();
  }

  window.spawnCanvasBurst = function(x, y) {
    for (let i = 0; i < 25; i++) {
      spawnParticle(x || width / 2, y || height / 2, 'heart');
    }
  };

  function renderCanvas() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;

      if (p.y < -30) {
        p.y = height + 30;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.font = `${p.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.symbol, 0, 0);
      ctx.restore();
    });

    requestAnimationFrame(renderCanvas);
  }
  renderCanvas();
}

/* ----------------------------------------------------------------------------
   STORY SECTION NAVIGATION
   ---------------------------------------------------------------------------- */
function updateStoryTracker() {
  const fill = document.getElementById('story-progress-fill');
  const text = document.getElementById('story-step-text');

  const total = sectionIds.length;
  const currentNum = currentSectionIndex + 1;
  const percent = (currentNum / total) * 100;

  fill.style.width = percent + '%';
  text.textContent = `${currentNum.toString().padStart(2, '0')} / ${total}`;
}

function goToSection(index) {
  if (index < 0 || index >= sectionIds.length) return;

  const currentSection = document.getElementById(sectionIds[currentSectionIndex]);
  const targetSection = document.getElementById(sectionIds[index]);

  if (currentSection) {
    currentSection.classList.remove('active');
  }

  currentSectionIndex = index;
  updateStoryTracker();

  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playSynthSound('flip');
  }
}

window.goToNextSection = function() {
  goToSection(currentSectionIndex + 1);
};

/* ----------------------------------------------------------------------------
   WELCOMING & CURTAINS FLOW
   ---------------------------------------------------------------------------- */
function setupWelcomeAndCurtains() {
  document.getElementById('enter-surprise-btn').addEventListener('click', () => {
    playSynthSound('chime');
    const curtainsSection = document.getElementById('curtains-section');
    curtainsSection.classList.add('active');
  });

  document.getElementById('open-curtains-btn').addEventListener('click', () => {
    playSynthSound('confetti');
    window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);

    const curtainsSection = document.getElementById('curtains-section');
    curtainsSection.classList.add('open');

    setTimeout(() => {
      curtainsSection.classList.remove('active');
      goToSection(1); // Stage Section
    }, 1800);
  });
}

/* ----------------------------------------------------------------------------
   CAKE & CANDLES LOGIC
   ---------------------------------------------------------------------------- */
let extinguishedCount = 0;

window.extinguishCandle = function(candleElem) {
  if (candleElem.classList.contains('extinguished')) return;
  candleElem.classList.add('extinguished');
  extinguishedCount++;
  playSynthSound('pop');

  if (extinguishedCount >= 3) {
    onAllCandlesExtinguished();
  }
};

window.extinguishAllCandles = function() {
  document.querySelectorAll('.candle').forEach(c => {
    if (!c.classList.contains('extinguished')) {
      c.classList.add('extinguished');
    }
  });
  extinguishedCount = 3;
  onAllCandlesExtinguished();
};

function onAllCandlesExtinguished() {
  const statusElem = document.getElementById('wish-status');
  statusElem.textContent = "Wish Granted ❤️";

  playSynthSound('confetti');
  window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 3);

  document.getElementById('after-cake-btn').style.display = 'inline-flex';
}

/* ----------------------------------------------------------------------------
   VIRTUAL BOUQUET 💐
   ---------------------------------------------------------------------------- */
const flowerNotes = [
  "You bring sunshine into every single day! 🌹",
  "Your kindness makes the world so much softer. 🌷",
  "May your heart always bloom with endless happiness. 🌸",
  "You are loved more than words can ever express. 🌺",
  "Never forget how extraordinary and unique you are! 🌻"
];

window.bloomBouquet = function() {
  const wrapper = document.getElementById('bouquet-wrapper');
  wrapper.classList.add('bloomed');
  playSynthSound('chime');
  window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);

  document.getElementById('bouquet-msg').style.opacity = '1';
};

window.openFlowerNote = function(index) {
  playSynthSound('chime');
  const modal = document.getElementById('flower-note-modal');
  document.getElementById('flower-note-body').textContent = flowerNotes[index];
  modal.classList.add('active');
};

window.closeFlowerNote = function() {
  document.getElementById('flower-note-modal').classList.remove('active');
};

/* ----------------------------------------------------------------------------
   MUSIC PLAYER 🎵
   ---------------------------------------------------------------------------- */
function initMusicPlayer() {
  bgMusicElement = new Audio(birthdayConfig.song);

  bgMusicElement.addEventListener('timeupdate', () => {
    const curr = bgMusicElement.currentTime;
    const dur = bgMusicElement.duration || 150;
    const seekSlider = document.getElementById('song-seek');
    if (dur) {
      seekSlider.value = (curr / dur) * 100;
    }

    document.getElementById('song-time-curr').textContent = formatTime(curr);
    document.getElementById('song-time-dur').textContent = formatTime(dur);
  });

  bgMusicElement.addEventListener('error', () => {
    console.log("Local audio file not found, synth fallback active.");
  });

  document.getElementById('audio-toggle-btn').addEventListener('click', () => {
    toggleSongPlay();
  });
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

window.toggleSongPlay = function() {
  const card = document.getElementById('music-card');
  const btn = document.getElementById('song-play-btn');

  if (!isMusicPlaying) {
    isMusicPlaying = true;
    card.classList.add('playing');
    btn.textContent = '❚❚';

    bgMusicElement.play().catch(() => {
      startMelodicSynth();
    });
  } else {
    isMusicPlaying = false;
    card.classList.remove('playing');
    btn.textContent = '▶';

    bgMusicElement.pause();
    stopMelodicSynth();
  }
};

window.seekSong = function(val) {
  if (bgMusicElement.duration) {
    bgMusicElement.currentTime = (val / 100) * bgMusicElement.duration;
  }
};

/* ----------------------------------------------------------------------------
   LOVE MESSAGE LETTER 💌
   ---------------------------------------------------------------------------- */
let letterOpened = false;
let typeLetterTimer = null;

window.openEnvelope = function() {
  if (letterOpened) return;
  letterOpened = true;

  playSynthSound('flip');
  const envWrapper = document.getElementById('envelope-wrapper');
  if (envWrapper) envWrapper.classList.add('open');

  const skipBtn = document.getElementById('skip-letter-btn');
  if (skipBtn) skipBtn.style.display = 'inline-flex';

  setTimeout(() => {
    const letterPaper = document.getElementById('letter-paper');
    if (letterPaper) letterPaper.classList.add('slide-out');

    // Typewriter effect for love letter
    const target = document.getElementById('letter-text');
    const fullText = birthdayConfig.message;
    let idx = 0;

    function typeLetter() {
      if (idx < fullText.length) {
        if (target) target.innerHTML = fullText.substring(0, idx).replace(/\n/g, '<br>');
        idx++;
        typeLetterTimer = setTimeout(typeLetter, 30);
      } else {
        finishLetter();
      }
    }
    typeLetter();
  }, 800);
};

window.skipLetterWriting = function() {
  if (!letterOpened) {
    letterOpened = true;
    const envWrapper = document.getElementById('envelope-wrapper');
    if (envWrapper) envWrapper.classList.add('open');
    const letterPaper = document.getElementById('letter-paper');
    if (letterPaper) letterPaper.classList.add('slide-out');
  }

  if (typeLetterTimer) {
    clearTimeout(typeLetterTimer);
    typeLetterTimer = null;
  }

  const target = document.getElementById('letter-text');
  if (target) {
    target.innerHTML = birthdayConfig.message.replace(/\n/g, '<br>');
  }

  finishLetter();
};

function finishLetter() {
  typeLetterTimer = null;
  const skipBtn = document.getElementById('skip-letter-btn');
  if (skipBtn) skipBtn.style.display = 'none';
  const afterBtn = document.getElementById('after-letter-btn');
  if (afterBtn) afterBtn.style.display = 'inline-flex';
}

/* ----------------------------------------------------------------------------
   VIRTUAL 3D MEMORY BOOK 📖
   ---------------------------------------------------------------------------- */
let currentBookPage = 0;
const bookPages = [
  { chapter: "Chapter 1 — The Beginning", title: "A Beautiful Start 🌟", body: "Every great story starts with a spark. The moment you came into this world, it got a little brighter, warmer, and sweeter." },
  { chapter: "Chapter 2 — Memories", title: "A Beautiful Memory 📸", body: "Looking back at all our favorite conversations and adventures, every moment stands out like a shining gem." },
  { chapter: "Chapter 3 — Admiration", title: "Things I Love About You ❤️", body: "Your genuine warmth, your inspiring passion, your gentle heart, and the effortless way you make everyone smile." },
  { chapter: "Chapter 4 — Uniqueness", title: "What Makes You Special 🌸", body: "You listen with real care, you speak with sweetness, and you radiate a positivity that transforms everything." },
  { chapter: "Chapter 5 — Favorites", title: "Favorite Moments ✨", body: "From simple quiet coffees to loud joyful laughs, every second spent with you becomes an instant favorite." },
  { chapter: "Chapter 6 — Promises", title: "A Little Promise 🤝", body: "To always cheer for you, always celebrate your happiness, and always stand by you through every chapter." },
  { chapter: "Chapter 7 — The Future", title: "Future Dreams 🌙", body: "Here's to new journeys, bigger dreams, endless laughter, and a lifetime of extraordinary stories yet to be written." }
];

function renderBookPage() {
  const container = document.getElementById('book-page-container');
  const p = bookPages[currentBookPage];

  container.innerHTML = `
    <div class="page-content active">
      <div class="page-number">${p.chapter}</div>
      <h3 class="page-title">${p.title}</h3>
      <p class="page-body">${p.body}</p>
    </div>
  `;

  document.getElementById('book-page-indicator').textContent = `Page ${currentBookPage + 1} / ${bookPages.length}`;
}

window.nextBookPage = function() {
  if (currentBookPage < bookPages.length - 1) {
    currentBookPage++;
    playSynthSound('flip');
    renderBookPage();
  }
};

window.prevBookPage = function() {
  if (currentBookPage > 0) {
    currentBookPage--;
    playSynthSound('flip');
    renderBookPage();
  }
};

/* ----------------------------------------------------------------------------
   MEMORY GALLERY 📸 & LIGHTBOX
   ---------------------------------------------------------------------------- */
function renderMemoryGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  birthdayConfig.memories.forEach((mem, idx) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.onclick = () => openLightbox(idx);

    // Dynamic SVG art placeholder generator
    const svgData = `
      <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#140c1e"/>
        <circle cx="100" cy="100" r="60" fill="${mem.svgColor}" opacity="0.3"/>
        <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="30">${mem.title.includes('Coffee') ? '☕' : mem.title.includes('Walk') ? '🌅' : '❤️'}</text>
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="12" font-family="serif">${mem.title}</text>
      </svg>
    `;
    const svgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgData);

    card.innerHTML = `
      <div class="polaroid-img-box">
        <img src="${mem.img || svgUrl}" class="polaroid-img" alt="${mem.caption}" />
      </div>
      <div class="polaroid-caption">${mem.caption}</div>
      <div class="polaroid-date">${mem.date}</div>
    `;
    grid.appendChild(card);
  });
}

window.openLightbox = function(idx) {
  const mem = birthdayConfig.memories[idx];
  const modal = document.getElementById('lightbox-modal');

  const svgData = `
    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#140c1e"/>
      <circle cx="200" cy="200" r="120" fill="${mem.svgColor}" opacity="0.4"/>
      <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="60">${mem.title.includes('Coffee') ? '☕' : mem.title.includes('Walk') ? '🌅' : '❤️'}</text>
      <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="20" font-family="serif">${mem.title}</text>
    </svg>
  `;
  const svgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgData);

  document.getElementById('lightbox-img').src = mem.img || svgUrl;
  document.getElementById('lightbox-caption').textContent = mem.caption + " — " + mem.note;
  document.getElementById('lightbox-date').textContent = mem.date;

  modal.classList.add('active');
  playSynthSound('chime');
};

window.closeLightbox = function(e) {
  if (e.target.id === 'lightbox-modal') {
    document.getElementById('lightbox-modal').classList.remove('active');
  }
};
window.closeLightboxDirect = function() {
  document.getElementById('lightbox-modal').classList.remove('active');
};

/* ----------------------------------------------------------------------------
   REASONS YOU ARE SPECIAL ❤️
   ---------------------------------------------------------------------------- */
function renderReasons() {
  const grid = document.getElementById('reasons-grid');
  grid.innerHTML = '';

  birthdayConfig.reasons.forEach(r => {
    const flipCard = document.createElement('div');
    flipCard.className = 'flip-card';
    flipCard.onclick = () => {
      flipCard.classList.toggle('flipped');
      playSynthSound('flip');
    };

    flipCard.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="reason-icon">${r.icon}</div>
          <div class="reason-title">${r.title}</div>
          <span style="font-size: 0.8rem; color: var(--gold); margin-top: 8px;">(Click to reveal)</span>
        </div>
        <div class="flip-card-back">
          <p style="font-size: 1.05rem; line-height: 1.6; color: var(--cream);">${r.text}</p>
        </div>
      </div>
    `;
    grid.appendChild(flipCard);
  });
}

/* ----------------------------------------------------------------------------
   MINI GAMES 🎮
   ---------------------------------------------------------------------------- */
let game1Score = 0;
let game1Canvas, game1Ctx;
let game1Basket = { x: 200, width: 70, height: 15 };
let fallingHearts = [];

function initMiniGames() {
  // Game 1: Catch Hearts Canvas
  game1Canvas = document.getElementById('game-canvas');
  if (game1Canvas) {
    game1Ctx = game1Canvas.getContext('2d');

    game1Canvas.addEventListener('mousemove', (e) => {
      const rect = game1Canvas.getBoundingClientRect();
      game1Basket.x = e.clientX - rect.left - game1Basket.width / 2;
    });
    game1Canvas.addEventListener('touchmove', (e) => {
      const rect = game1Canvas.getBoundingClientRect();
      if (e.touches[0]) {
        game1Basket.x = e.touches[0].clientX - rect.left - game1Basket.width / 2;
      }
    });

    setInterval(() => {
      if (document.getElementById('game-panel-0').classList.contains('active')) {
        fallingHearts.push({
          x: Math.random() * (game1Canvas.width - 20) + 10,
          y: 0,
          speed: Math.random() * 2 + 1.5
        });
      }
    }, 900);

    function runGame1Loop() {
      if (document.getElementById('game-panel-0').classList.contains('active')) {
        game1Ctx.clearRect(0, 0, game1Canvas.width, game1Canvas.height);

        // Draw Basket
        game1Ctx.fillStyle = '#ffd700';
        game1Ctx.fillRect(game1Basket.x, game1Canvas.height - 20, game1Basket.width, game1Basket.height);

        // Draw Hearts
        fallingHearts.forEach((h, idx) => {
          h.y += h.speed;
          game1Ctx.font = '20px sans-serif';
          game1Ctx.fillText('❤️', h.x, h.y);

          // Catch Check
          if (h.y >= game1Canvas.height - 30 && h.x >= game1Basket.x && h.x <= game1Basket.x + game1Basket.width) {
            fallingHearts.splice(idx, 1);
            game1Score++;
            playSynthSound('pop');
            document.getElementById('game1-status').textContent = `Hearts Caught: ${game1Score} / 10`;

            if (game1Score >= 10) {
              document.getElementById('game1-status').textContent = "You caught my heart ❤️!";
            }
          }
        });
      }
      requestAnimationFrame(runGame1Loop);
    }
    runGame1Loop();
  }

  // Game 2: Pop Balloons
  const balloonsField = document.getElementById('balloons-field');
  let poppedCount = 0;

  function spawnBalloon() {
    if (!balloonsField) return;
    const b = document.createElement('div');
    b.className = 'pop-balloon';
    b.style.left = Math.random() * 80 + 10 + '%';
    b.style.backgroundColor = ['#ff3366', '#ffd700', '#9d4edd', '#ff85a2', '#3a86ef'][Math.floor(Math.random() * 5)];
    b.textContent = '🎈';

    b.onclick = () => {
      playSynthSound('pop');
      poppedCount++;
      document.getElementById('game2-status').textContent = `Balloons Popped: ${poppedCount}`;
      b.remove();
    };

    balloonsField.appendChild(b);
    setTimeout(() => { if (b.parentNode) b.remove(); }, 6000);
  }
  setInterval(() => {
    if (document.getElementById('game-panel-1').classList.contains('active')) {
      spawnBalloon();
    }
  }, 1200);

  // Game 3: Memory Match
  const memorySymbols = ['❤️', '🌹', '🎂', '💐', '✨', '🧿', '❤️', '🌹', '🎂', '💐', '✨', '🧿'];
  memorySymbols.sort(() => Math.random() - 0.5);

  const memGrid = document.getElementById('memory-grid');
  let flippedCards = [];
  let matchedCount = 0;

  if (memGrid) {
    memGrid.innerHTML = '';
    memorySymbols.forEach((sym, idx) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.symbol = sym;
      card.dataset.index = idx;

      card.onclick = () => {
        if (card.classList.contains('flipped') || flippedCards.length >= 2) return;

        card.classList.add('flipped');
        card.textContent = sym;
        playSynthSound('flip');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            playSynthSound('chime');
            matchedCount++;
            document.getElementById('game3-status').textContent = `Matches Found: ${matchedCount} / 6`;
            flippedCards = [];

            if (matchedCount >= 6) {
              document.getElementById('game3-status').textContent = "Perfect! You know the memories ❤️";
            }
          } else {
            setTimeout(() => {
              flippedCards.forEach(c => {
                c.classList.remove('flipped');
                c.textContent = '';
              });
              flippedCards = [];
            }, 800);
          }
        }
      };
      memGrid.appendChild(card);
    });
  }
}

window.switchGameTab = function(index) {
  document.querySelectorAll('.game-tab-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
  document.querySelectorAll('.game-panel').forEach((panel, idx) => {
    panel.classList.toggle('active', idx === index);
  });
};

/* ----------------------------------------------------------------------------
   SURPRISE GIFT BOXES 🎁
   ---------------------------------------------------------------------------- */
const giftSurprises = [
  {
    icon: "💌",
    title: "Love Note Token",
    body: "You bring so much joy, light, and warmth into the world! Never stop shining your beautiful smile.",
    openedIcon: "💖"
  },
  {
    icon: "🌹",
    title: "Virtual Bouquet Pass",
    body: "A million virtual roses for the most wonderful, radiant person. May your life always bloom with happiness!",
    openedIcon: "💐"
  },
  {
    icon: "📖",
    title: "Golden Memory Voucher",
    body: "Redeemable for 100 endless smile moments, cozy chats, stargazing talks, and spontaneous adventures together!",
    openedIcon: "🌟"
  },
  {
    icon: "🎁",
    title: "Grand Birthday Wish Pass",
    body: "Redeem one huge, unrestricted birthday wish anytime! Valid forever with infinite love and cheers.",
    openedIcon: "👑"
  }
];

window.openGiftBox = function(index) {
  const giftsList = (typeof birthdayConfig !== 'undefined' && birthdayConfig.gifts && birthdayConfig.gifts.length) ? birthdayConfig.gifts : giftSurprises;
  if (index < 0 || index >= giftsList.length) return;
  const gift = giftsList[index];

  // Sound and particle burst
  playSynthSound('confetti');
  playSynthSound('chime');
  window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);

  // Update gift card UI on page
  const iconElem = document.getElementById(`gift-icon-${index}`);
  const statusElem = document.getElementById(`gift-status-${index}`);
  const boxElem = document.getElementById(`gift-box-${index}`);

  if (iconElem) iconElem.textContent = gift.openedIcon || "💖";
  if (statusElem) {
    statusElem.textContent = "Opened ✨";
    statusElem.style.color = "var(--gold)";
  }
  if (boxElem) boxElem.classList.add('opened');

  // Populate Gift Modal
  const modal = document.getElementById('gift-modal');
  const modalIcon = document.getElementById('gift-modal-icon');
  const modalTitle = document.getElementById('gift-modal-title');
  const modalBody = document.getElementById('gift-modal-body');

  if (modalIcon) modalIcon.textContent = gift.icon || "🎁";
  if (modalTitle) modalTitle.textContent = gift.title || "Surprise Unlocked! 🎉";
  if (modalBody) modalBody.textContent = gift.body || "A special gift just for you!";

  if (modal) {
    modal.style.display = 'block';
    // Force reflow for smooth scale-in transition
    void modal.offsetWidth;
    modal.classList.add('active');
  }
};

window.closeGiftModal = function() {
  const modal = document.getElementById('gift-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
};

/* ----------------------------------------------------------------------------
   SECRET PASSWORD SURPRISE 🔐
   ---------------------------------------------------------------------------- */
window.checkSecretPassword = function() {
  const inputElem = document.getElementById('secret-pass-input');
  const val = inputElem ? inputElem.value.trim().toUpperCase() : '';
  const target = document.getElementById('secret-reveal-msg');

  if (val === birthdayConfig.secretPassword) {
    playSynthSound('chime');
    window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);

    target.style.display = 'block';
    target.innerHTML = `
      <div style="font-size: 2rem; margin-bottom: 10px;">💖 ✨ 💖</div>
      <h3 style="font-family: var(--font-serif); color: var(--gold);">Secret Unlocked!</h3>
      <p style="font-size: 1.1rem; color: var(--cream); margin-top: 10px;">
        "No matter where life takes us, you will always be one of the sweetest blessings in my story."
      </p>
    `;
  } else {
    target.style.display = 'block';
    target.innerHTML = `
      <div style="color: var(--c-rose); font-weight: 500; margin-top: 10px;">
        Incorrect code! Try "LOVE" ❤️
      </div>
    `;
    playSynthSound('pop');
  }
};

/* ----------------------------------------------------------------------------
   FUTURE DREAMS & WISHES 🌙
   ---------------------------------------------------------------------------- */
function renderFutureDreams() {
  const grid = document.getElementById('dreams-grid');
  grid.innerHTML = '';

  birthdayConfig.futureDreams.forEach(d => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.style.textAlign = 'center';
    card.style.padding = '25px';

    card.innerHTML = `
      <h3 style="font-family: var(--font-serif); color: var(--gold); margin-bottom: 10px;">${d.title}</h3>
      <p style="font-size: 1rem; color: var(--cream);">${d.text}</p>
    `;
    grid.appendChild(card);
  });
}

/* ----------------------------------------------------------------------------
   WISH TREE 🌳 & TIME CAPSULE ⏳
   ---------------------------------------------------------------------------- */
let treeWishesCount = 1;

function drawWishTree() {
  const canvas = document.getElementById('tree-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Trunk
  ctx.fillStyle = '#4a2c11';
  ctx.fillRect(190, 180, 20, 100);

  // Foliage
  ctx.fillStyle = '#ff85a2';
  ctx.beginPath();
  ctx.arc(200, 140, 80, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ff3366';
  ctx.beginPath();
  ctx.arc(160, 160, 60, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffd700';
  ctx.beginPath();
  ctx.arc(240, 160, 60, 0, Math.PI * 2);
  ctx.fill();

  // Glowing Leaves / Wish tags
  for (let i = 0; i < treeWishesCount + 5; i++) {
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px sans-serif';
    ctx.fillText('✨', 140 + (i * 18) % 120, 100 + (i * 22) % 100);
  }
}

window.addWishToTree = function() {
  treeWishesCount++;
  playSynthSound('chime');
  drawWishTree();
  document.getElementById('wish-tree-counter').textContent = `Wishes on the Tree: ${treeWishesCount}`;
};

window.sealTimeCapsule = function() {
  const inputElem = document.getElementById('capsule-text');
  const text = inputElem ? inputElem.value : '';
  const statusElem = document.getElementById('capsule-status');

  if (!text.trim()) {
    if (statusElem) {
      statusElem.style.display = 'block';
      statusElem.style.color = 'var(--c-rose)';
      statusElem.textContent = 'Please write a quick message before sealing!';
    }
    return;
  }
  playSynthSound('chime');
  window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);
  if (statusElem) {
    statusElem.style.display = 'block';
    statusElem.style.color = 'var(--gold)';
    statusElem.innerHTML = 'TIME CAPSULE SEALED! ⏳🔐<br><small style="color: var(--c-cream);">Your note has been locked in the stars for next year!</small>';
  }
};

/* ----------------------------------------------------------------------------
   FINAL SURPRISE & CINEMA SLIDESHOW
   ---------------------------------------------------------------------------- */
window.unlockFinalSurpriseSection = function() {
  goToSection(14); // Surprise Section
};

window.triggerGrandFireworks = function() {
  playSynthSound('confetti');
  window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);

  document.getElementById('final-surprise-initial').style.display = 'none';
  document.getElementById('final-surprise-reveal').style.display = 'block';
};

window.goToFinalGiftSection = function() {
  goToSection(15);
};

window.openGiantGift = function() {
  playSynthSound('confetti');
  window.spawnCanvasBurst(window.innerWidth / 2, window.innerHeight / 2);

  document.getElementById('giant-gift-box').style.display = 'none';
  document.getElementById('giant-gift-hint').style.display = 'none';
  document.getElementById('giant-gift-content').style.display = 'block';
};

window.goToFinalScreenSection = function() {
  goToSection(16);
};

/* Fullscreen Slideshow Cinema */
function initCinemaSlideshow() {
  const btn = document.getElementById('slideshow-toggle-btn');
  const modal = document.getElementById('slideshow-fullscreen');
  const imgElem = document.getElementById('slideshow-img');
  let slidesIdx = 0;
  let timer = null;

  btn.onclick = () => {
    modal.style.display = 'flex';
    playSynthSound('chime');

    function showSlide() {
      const mem = birthdayConfig.memories[slidesIdx];
      const svgData = `
        <svg width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#140c1e"/>
          <circle cx="250" cy="250" r="160" fill="${mem.svgColor}" opacity="0.4"/>
          <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="80">${mem.title.includes('Coffee') ? '☕' : mem.title.includes('Walk') ? '🌅' : '❤️'}</text>
          <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="26" font-family="serif">${mem.title}</text>
        </svg>
      `;
      imgElem.src = mem.img || ('data:image/svg+xml;utf8,' + encodeURIComponent(svgData));

      slidesIdx = (slidesIdx + 1) % birthdayConfig.memories.length;
    }
    showSlide();
    timer = setInterval(showSlide, 3500);
  };

  window.closeSlideshow = () => {
    modal.style.display = 'none';
    if (timer) clearInterval(timer);
  };
}

/* ----------------------------------------------------------------------------
   INITIALIZATION ON DOM LOAD
   ---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Set configured name in title header
  document.getElementById('birthday-greeting-name').textContent = `Happy Birthday, ${birthdayConfig.nickname} ❤️`;

  initPreloader();
  initCursorAndCanvas();
  setupWelcomeAndCurtains();
  initMusicPlayer();
  renderBookPage();
  renderMemoryGallery();
  renderReasons();
  initMiniGames();
  renderFutureDreams();
  drawWishTree();
  initCinemaSlideshow();
  updateStoryTracker();
});
