import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, Smile, Coffee, Music, Sun, Moon, X, Mail, Play } from 'lucide-react';

// Images
const heroImage = "/assets/images/alicia.png";

const chipImage = "/assets/images/ch.png";
const hazImage = "/assets/images/hazel.png";
const nanImage = "/assets/images/nandu.png";
const athImage = "/assets/images/athulya.png";
const aliImage = "/assets/images/alisha.png";
const aarImage = "/assets/images/aarya.png";
const apaImage = "/assets/images/aparna.png";

const m1 = "/assets/images/m1.jpg";
const m2 = "/assets/images/m2.jpeg";
const m3 = "/assets/images/m3.jpg";
const m4 = "/assets/images/m4.jpg";
const m5 = "/assets/images/m5.jpg";
const m6 = "/assets/images/m6.jpg";
const m7 = "/assets/images/m7.jpg";
const m8 = "/assets/images/m8.jpg";
const m9 = "/assets/images/m9.jpg";
const m10 = "/assets/images/m10.jpg";
const m11 = "/assets/images/m11.jpg";
const m12 = "/assets/images/m12.jpg";
const m13 = "/assets/images/m13.jpg";
const m14 = "/assets/images/m14.jpg";
const m15 = "/assets/images/m15.jpg";
const m16 = "/assets/images/m16.jpg";
const m17 = "/assets/images/m17.jpg";
const m18 = "/assets/images/m18.jpg";
const m19 = "/assets/images/m19.jpg";
const m20 = "/assets/images/m20.jpg";
const m21 = "/assets/images/m21.jpg";
const m22 = "/assets/images/m22.jpg";
const m23 = "/assets/images/m23.jpg";
const m24 = "/assets/images/m24.jpg";
const m25 = "/assets/images/m25.jpg";
const m26 = "/assets/images/m26.jpg";
const m27 = "/assets/images/m27.jpg";
const m28 = "/assets/images/m28.jpg";

const m29 = "/assets/images/m29.jpg";
const m30 = "/assets/images/m30.jpg";
const m31 = "/assets/images/m31.jpg";
const m32 = "/assets/images/m32.jpg";
const m33 = "/assets/images/m33.jpg";

// Audio
const cAudio = "/assets/audio/chippy.mp3";
const nAudio = "/assets/audio/nandana.mp3";
const aAudio = "/assets/audio/aarya.mp3";
const hAudio = "/assets/audio/hazel.mp3";
const aliAudio = "/assets/audio/alisha.mp3";
const athAudio = "/assets/audio/athulya.mp3";
const apaAudio = "/assets/audio/aparna.mp3";
// Videos
const v1 = "/assets/video/v1.mp4";
const v2 = "/assets/video/v2.mp4";
const v3 = "/assets/video/v3.mp4";
const v4 = "/assets/video/v4.mp4";
const v5 = "/assets/video/v5.mp4";
const v6 = "/assets/video/v6.mp4";
const v7 = "/assets/video/v7.mp4";
const v8 = "/assets/video/v8.mp4";
const v9 = "/assets/video/v9.mp4";
const v10 = "/assets/video/v10.mp4";
const v11 = "/assets/video/v11.mp4";
const v12 = "/assets/video/v12.mp4";
const v13 = "/assets/video/v13.mp4";
const v14 = "/assets/video/v14.mp4";
const v15 = "/assets/video/v15.mp4";
const v16 = "/assets/video/v16.mp4";
const v17 = "/assets/video/v17.mp4";
const v18 = "/assets/video/v18.mp4";

// Confetti Component
const Confetti = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: ['#FFB6C1', '#FFD700', '#87CEEB', '#98FB98', '#DDA0DD'][piece.id % 5],
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = ({ name, heroImage }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden px-8 py-16">
      <Confetti />

      <div className="z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left px-4">
          <div className="animate-bounce-slow mb-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 dancing-script">
              Happy Birthday
            </h1>

            <h2 className="text-5xl md:text-6xl font-bold text-purple-600 mb-8 dancing-script">
              {name}!
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 italic font-light pacifico max-w-md">
            "Today is your day to sparkle brighter than ever ✨"
          </p>

          <div className="mt-12 flex justify-center md:justify-start gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — FIXED SPACING + CLEAN FLOATING IMAGE */}
        <div className="flex justify-center md:justify-end px-4">
          {heroImage ? (
            <img
              src={heroImage}
              alt={name}
              className="w-90 h-90 md:w-[550px] md:h-[550px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
            />
          ) : (
            <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                Add hero image URL in config
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};


const ModalConfetti = () => {
  const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: ['#FFB6C1', '#FFD700', '#87CEEB', '#98FB98', '#DDA0DD'][piece.id % 5],
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};
const LetterModalFullScreenPhoto = ({ isOpen, onClose, letter }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen && letter.audio) {
      audioRef.current
        .play()
        .catch(() => console.log("Autoplay blocked"));
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isOpen, letter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">

      {/* === LEFT FULLSCREEN IMAGE === */}
      {letter.photo && (
        <img
          src={letter.photo}
          alt="Background"
          className="
            absolute inset-0 
            w-full h-full 
            object-contain     /* ensures image fills */
            object-left 
            z-12
          "
        />
      )}

      {/* darken slightly so modal readable */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* === CONFETTI === */}
      <ModalConfetti />

      {/* === RIGHT SIDE MODAL === */}
      <div
        className="
          relative
          bg-white 
          rounded-3xl 
          shadow-2xl 
          max-w-xl 
          w-[90%]
          max-h-[85vh]
          overflow-y-auto
          z-20
          animate-bounce-in
          md:ml-[40%]     /* push modal to right on big screens */
        "
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-t-3xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Mail className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-bold text-white dancing-script">
              From {letter.from}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Letter Content */}
        <div className="p-8">
          <p className="text-lg text-gray-700 leading-relaxed font-['Kalam'] whitespace-pre-line">
            {letter.message}
          </p>

          {/* Auto-play voice message */}
          {letter.audio && (
            <audio ref={audioRef} src={letter.audio} autoPlay className="hidden" />
          )}

          <div className="mt-6 text-right">
            <p className="text-purple-600 font-medium pacifico">💝 {letter.from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// // Letter Box Modal
// const LetterModal = ({ isOpen, onClose, letter }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
//       <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-bounce-in">
//         <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-t-3xl flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Mail className="w-8 h-8 text-white" />
//             <h3 className="text-2xl font-bold text-white dancing-script">From {letter.from}</h3>
//           </div>
//           <button
//             onClick={onClose}
//             className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>
//         </div>
//         <div className="p-8">
//           <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
//             {letter.message}
//           </p>
//           <div className="mt-6 text-right">
//             <p className="text-purple-600 font-medium pacifico">💝 {letter.from}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Friend Letters Section
const FriendLetters = ({ letters }) => {
  const [openLetter, setOpenLetter] = useState(null);

  const boxColors = [
    'from-pink-400 to-pink-600',
    'from-purple-400 to-purple-600',
    'from-blue-400 to-blue-600',
    'from-yellow-400 to-yellow-600',
    'from-green-400 to-green-600',
    'from-red-400 to-red-600',
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-600 dancing-script">
            Letters From Friends 💌
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg pacifico">
            Click each box to read heartfelt messages!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {letters.map((letter, index) => (
              <button
                key={index}
                onClick={() => setOpenLetter(letter)}
                className={`relative bg-gradient-to-br ${boxColors[index % boxColors.length]} 
                  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 
                  transform hover:scale-105 hover:-rotate-2 group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Mail className="w-12 h-12 text-white mx-auto mb-3" />
                <p className="text-white font-bold text-2xl dancing-script">{letter.from}</p>
                <div className="mt-4 text-white text-sm opacity-80 pacifico">
                  Click to open
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <LetterModalFullScreenPhoto
        isOpen={openLetter !== null}
        onClose={() => setOpenLetter(null)}
        letter={openLetter || {}}
      />
    </>
  );
};

// Letter-Shaped Wish Boxes
const LetterWishBoxes = ({ letter, wishes }) => {
  const letterPatterns = {
    A: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
    ],
    S: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
    M: [
      [1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
    ],
  };

  const pattern = letterPatterns[letter.toUpperCase()] || letterPatterns.A;
  const colors = [
    'bg-pink-200 hover:bg-pink-300',
    'bg-purple-200 hover:bg-purple-300',
    'bg-blue-200 hover:bg-blue-300',
    'bg-yellow-200 hover:bg-yellow-300',
    'bg-green-200 hover:bg-green-300',
  ];

  let wishIndex = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-4 text-purple-600 dancing-script">
          Achooti’s Awards
        </h2>
        <p className="text-center text-2xl text-gray-600 mb-12 pacifico">
          Hover for Achooti-level truths
        </p>
        <div className="flex justify-center">
          <div className="inline-block">
            {pattern.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2 mb-2 justify-center">
                {row.map((cell, colIndex) => {
                  const boxSize = "w-30 h-30 md:w-30 md:h-30"; // Box size variable
                  if (cell === 1) {
                    const wish = wishes[wishIndex % wishes.length];
                    wishIndex++;
                    const color = colors[wishIndex % colors.length];
                    return (
                      <div
                        key={colIndex}
                        className={`${boxSize} ${color} 
                        rounded-lg shadow-md cursor-pointer transition-all duration-300 
                        transform hover:scale-110 hover:rotate-3 hover:shadow-xl 
                        flex items-center justify-center group relative`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                          <span className="text-xs text-center font-medium text-gray-700">
                            {wish}
                          </span>
                        </div>
                        <Heart className="w-6 h-6 text-white group-hover:opacity-0 transition-opacity" />
                      </div>
                    );
                  }
                  // Match empty cells to box size for alignment
                  return <div key={colIndex} className={`${boxSize}`} />;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

// Short Videos Component
const ShortVideos = ({ videos = [], layout = 'grid' }) => {
  // layout can be 'grid' or 'carousel' in future; for now use a responsive grid
  const videoRefs = useRef([]);

  useEffect(() => {
    // Clean up: pause videos when component unmounts
    return () => {
      videoRefs.current.forEach(v => {
        try { v && v.pause(); } catch { }
      });
    };
  }, []);

  const handleMouseEnter = (index) => {
    const v = videoRefs.current[index];
    if (v) {
      v.muted = true;
      v.play().catch(() => { });
    }
  };

  const handleMouseLeave = (index) => {
    const v = videoRefs.current[index];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const togglePlay = (index) => {
    const v = videoRefs.current[index];
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => { });
    } else {
      v.pause();
    }
  };

  if (!videos.length) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-600 dancing-script">
          Short Video Moments 🎬
        </h2>
        <p className="text-center text-gray-600 mb-8 pacifico">
          Hover a clip to preview, click to play/pause.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                onClick={() => togglePlay(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') togglePlay(idx); }}
              >
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={vid.src}
                  poster={vid.poster}
                  className="w-full h-100 object-cover"
                  loop
                  playsInline
                  preload="metadata"
                />
                {/* overlay play icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white bg-opacity-30 rounded-full p-3 backdrop-blur-sm">
                    <Play className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 font-medium">{vid.caption || 'A sweet moment'}</p>
                {vid.credit && <p className="text-sm text-gray-400 mt-1">— {vid.credit}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Memory Carousel
const MemoryCarousel = ({ memories }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % memories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [memories.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-600 dancing-script">
          Memory Lane 💫
        </h2>
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center p-8">
            <div className="text-center animate-fade-in">
              {memories[current].image ? (
                <div className="mb-4">
                  <img
                    src={memories[current].image}
                    alt={memories[current].caption}
                    className="max-h-64 mx-auto rounded-2xl shadow-lg object-cover"
                  />
                </div>
              ) : (
                <div className="text-6xl mb-4">{memories[current].emoji}</div>
              )}
              <p className="text-xl md:text-2xl font-medium text-gray-700 pacifico">
                {memories[current].caption}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 py-6">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-purple-600 w-8' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



// Interactive Balloon Pop
const BalloonPop = () => {
  const [balloons, setBalloons] = useState(
    Array.from({ length: 9 }, (_, i) => ({ id: i, popped: false }))
  );
  const [revealedWish, setRevealedWish] = useState(null);

  const wishes = [
    "May you get all dreams you shouting everyday 😌✨",
    "Always be our chapri queen, only you having that kannapi taste 🤣",
    "Don’t stop calling us Ooola, we enjoying only that 😭😂",
    "Never stop us from kaliyakaling you and sollley, full-time entertainment 😌🔥",
    "Stay shy but still full chaos energy 💥😎",
    "Soft heart ok… but roasting power keep max 💘",
    "Continue your airhead moments, free comedy for us 😂",
    "Be overconfident but cute always, only you can 😏🌸",
    "Keep disappearing like kannapi ghost, but still unforgettable 😌💖"
  ];


  const popBalloon = (id) => {
    setBalloons(prev => prev.map(b => b.id === id ? { ...b, popped: true } : b));
    setRevealedWish(wishes[id]);
    setTimeout(() => setRevealedWish(null), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-600 dancing-script">
          Pop a Balloon! 🎈
        </h2>
        <p className="text-xl text-gray-600 mb-12 pacifico">
          Click each balloon to reveal a special wish!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ml-30 mb-12">
          {balloons.map((balloon) => (
            <button
              key={balloon.id}
              onClick={() => !balloon.popped && popBalloon(balloon.id)}
              disabled={balloon.popped}
              className={`transform transition-all duration-300 ${balloon.popped ? 'scale-0 opacity-0' : 'hover:scale-110 animate-float'
                }`}
              style={{ animationDelay: `${balloon.id * 0.2}s` }}
            >
              <div className={`w-24 h-32 rounded-full ${['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400'][balloon.id]
                } shadow-lg relative`}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              </div>
            </button>
          ))}
        </div>
        {revealedWish && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-bounce-in">
            <p className="text-2xl font-medium text-purple-600 font-[kalam]">{revealedWish}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const PolaroidWall = ({ polaroids }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-600 dancing-script">
          Polaroid Memories 📸
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg pacifico">
          Captured moments of joy and laughter
        </p>

        {/* 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {polaroids.map((polaroid, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                transform: `rotate(${[-2, 2, -3, 3, -1, 1][index % 6]}deg)`,
              }}
            >
              <div className="bg-white p-4 pb-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-0">
                {polaroid.image ? (
                  <img
                    src={polaroid.image}
                    alt={polaroid.caption}
                    className="w-full h-64 object-cover mb-4"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 mb-4 flex items-center justify-center">
                    <p className="text-gray-400 text-center px-4">Add image URL</p>
                  </div>
                )}
                <p className="text-center text-gray-700 font-medium pacifico text-sm">
                  {polaroid.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Final Message
const FinalMessage = ({ message, from }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-20 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 opacity-30"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6 dancing-script">
                A Special Message
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-['Kalam'] text-center">
              {message}
            </p>
            <p className="text-right text-xl font-medium text-purple-600 pacifico">
              With love, {from} 💝
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const config = {
    name: "Alicia", // Friend's name
    letter: "A", // Letter shape
    heroImage: heroImage,
    wishes: [
      "Vikaram illatha jeevi",
      "Ultrapromax motivational speaker",
      "Chapri Queen",
      "\"Ippo karayuvo\" expression",
      "Premium level confidence",
      "Master in DIGC (disappearing in group chats)",
      "Soft-hearted",
      "Sympathetic",
      "Fashionable person",
      "Compassionate",
      "Overthinker",
      "Strong-minded",
      "Padippi",
      "Ottabhudhi",
      "Alan Solleyde Achutti + Baby",
      "Trustworthy",
      "Peak dedication",
      "Honestly one of the best friend anyone could ask for"
    ]


    ,
    shortVideos: [
      // Add short video URLs (mp4/webm) and optional poster images and captions here
      {
        src: v1,
        poster: "", // optional poster image
        caption: "",
        credit: "",
      },
      {
        src: v2,
        poster: "",
      },
      {
        src: v3,
        poster: "",
      },
      {
        src: v4,
        poster: "",
      },
      {
        src: v5,
        poster: "",
      },
      {
        src: v6,
        poster: "",
      },
      {
        src: v7,
        poster: "",
      },
      {
        src: v8,
        poster: "",
      },
      {
        src: v9,
        poster: "",
      },
      {
        src: v10,
        poster: "",
      },
      {
        src: v11,
        poster: "",
      },
      {
        src: v12,
        poster: "",
      },
      {
        src: v13,
        poster: "",
      },
      {
        src: v14,
        poster: "",
      },
      {
        src: v15,
        poster: "",
      },
      {
        src: v16,
        poster: "",
      },
      {
        src: v17,
        poster: "",
      },
      {
        src: v18,
        poster: "",
      },
    ],
    friendLetters: [

      {
        from: "Hazel",
        message: `🪦 loading… 21% complete ✅ 

Happie b'day💀🍰🫂`,
        audio: hAudio,
        photo: hazImage
      },
      {
        from: "Aarya",
        message: `Happy Birthday! 🎉❤️
Wishing you a year filled with happiness, good health, and all the love you truly deserve. I hope this special day brings you lots of joy and beautiful moments. Enjoy your day to the fullest!`,
        audio: aAudio,
        photo: aarImage
      },
      {
        from: "Athulya",
        message: `Dear Loki,

Happy birthday to you!
You’re honestly such a good friend to me. Whenever I needed someone, you were there — listening to all my dramas and staying with me without even realizing how much comfort you were giving. I don’t say it often, but it really means a lot.

And next year, let’s try to be a little less clumsy and not jump into problems and then blame unluckiness for everything. We’ll get better, slowly. And yes — one day we are definitely going for that movie date to watch Zootopia. And we’ll have that pizza date too, just like the Domino’s run after Speridian.`,
        audio: athAudio,
        photo: athImage
      },
      {
        from: "Alisha",
        message: `I love you for all that you are, all that you have been and all that you will be.🌸

Othiri othiri sneham❤️❤️
Kore kore mwuhaa 😘😘

To my vikaramilatha priyapetta suhruthinu 

 *Happy birthday dearoli* 💖💖

You will find  your dreaming job👷‍♀️ soon
Kore kore Santhosham and cash 💸 undaakatte ninakk in ur whole life 🫂🫂🫂🫂
  
Kittunnathellaam enikkum ninakum paathi 👉👈`,
        audio: aliAudio,
        photo: aliImage
      },
      {
        from: "Nandana",
        message: `😘Happy Birthday Babe 💌 
You may always have that vikaram less, calm, expressionless face, but you understand me even before I say a word.😇
You notice even my smallest insecurities, without me explaining.
No matter how quiet you are, your presence means a lot to us bonitazzz.❤️
Hmmmmm, and yes… I’ll keep annoying you forever, even if you are vikaram less 🤭😏
Wishing you all the best, and may all your dreams come true.✨
I don’t know whether on your next birthday we’ll all be together, but no matter where you are or what position you reach, you’ll always be our introvert chakkara. Don’t ever forget us 🤍🥹
Always greatful for having you in my life....our lives.
HAPPY BIRTHDAY CHAKKAREEEEEE😘❤️✨🎉`,
        audio: nAudio,
        photo: nanImage
      },
      {
        from: "Chippy",
        message: `
Hello Alicia,  
Happy birthday to you☺️.  
I am so happy that I got you as my friend. It’s something precious because only a few people get such an opportunity in this 🌎.

I would like to mention some swabhavams of yours — you are good, extremely motivating, trustworthy, loyal, etc.  
I am sorry because I know some of my words might have hurt you 🙂. Please forgive me. Even if I deshyappedal, please don't stop talking to me or texting me.

Because I see you as a friend who understands my loneliness. Most of the time my voice is prabhangathil alinju pokal 😁, but it’s you who notices me. I don’t know if you’ll understand, but when you do that my heart says “Oo Alicia, thank you so much 🥹”.

One more thing — it’s me who always makes fun of you and Solley. Please don’t take anything seriously 🙂.  
If anything I said in the past hurt you, I am truly sorry. I am not perfect 😔. I am talkative and have no bhodham sometimes while talking. Maybe chelapo elavareyum chiripikan njan ningade enthelum kaliyikkum… ath ninakku vishamam aayitundakam.

If that happened, I’m sorry. I never intended to hurt you.

So let me conclude.  
God bless you.  
May all your aagrahangal come true 🙌🏻.  
Appo seri ❤️`,
        audio: cAudio,
        photo: chipImage
      },
      {
        from: "Aparna",
        "message": "Hey Alicia,\n\nHappy Birthday to the most unstable but still high‑performance human processor I ever seen.\n\nOutside calm ah, but inside your background tasks always running at 300% CPU.\nOverthinking module never sleeps — even when you sleep.\nPower-saving mode also doesn’t work on you 😪.\n\nYour face UI also permanently stuck on one expression:\n\nif (emotion == undefined) return \"ippo karayuvo?\";\n\nSoft-hearted kernel, but your confidence OS runs on one custom ROM — sometimes premium, sometimes beta testing, sometimes full system crash, nobody knows.\n\nCommunication system also works like weak WiFi:\n- Signal full, reply not delivered.\n- DIGC (Disappearing In Group Chats) — your most powerful feature.\n- Even WhatsApp servers look at you and say, “Bro why she vanish again?”\n\nAnd let’s not forget your 5G pride software:\n- Always flexing “enikku 5G und” like you are walking mobile tower.\n- Hotspot kodukkunnathil world record — but reply speed still 2G demo version.\n- Portable network provider ah, but brain network sometimes “No Service”.\n\nSome additional system behaviours:\n- Your default response engine only has two outputs: “ok hmm”\n- Even if we send one 14-page essay with full emotion + diagram + appendix, still output = ok hmm.\n- NLP model dead or what?\n\n- Power nap module too powerful — You close eyes for 5 minutes, suddenly REM sleep v4.0 activated.\n- Deep sleep within 0.2 seconds — world fastest boot‑to‑hibernate champion.\n\n- Motivation API is one-directional: You give motivation to everyone, push notifications, life advice, TED talk everything.\n- But when it comes to yourself? Error 404: Motivation Not Found.\n\nPersonality-wise, you are a full-stack bundle:\n- Frontend: cute, calm, fashionable\n- Backend: chaos + overheating warnings\n- Database: feelings stored in uncompressed RAW format\n- API: mood-based response time\n- Security: trustworthy; encrypted heart\n- Processor: sometimes slow, but execution power = 100% dedication\n- Battery: always 2% but still alive\n- Camera: crying filter auto-enabled\n- Network: 5G outside, Edge (E) inside\n\nEven with bugs, random crashes, and emotional updates… you still function better than 90% of the humans alive.\n\nHonestly, one of the best friend modules any system can install.\n\nThis year I hope you get:\n- Less RAM usage (overthinking delete pls)\n- Stable emotions v2.0\n- More happiness bandwidth\n- Bug-free confidence upgrade\n- Zero drama notifications\n- Normal sleep cycle patch\n- And network stability (mental + mobile)\n\nHappy Birthday, Alicia!\nContinue being our limited-edition, half-bug half-genius build.\nNever change the chaotic firmware — it's iconic.\n\n",
        audio: apaAudio,
        photo: apaImage
      }

    ],
    polaroids: [

      { image: m17, caption: "Making memories 📸" },

      { image: m23, caption: "Making memories 📸" },
      { image: m25, caption: "Making memories 📸" },
      { image: m28, caption: "Making memories 📸" },
      { image: m24, caption: "Making memories 📸" },

      { image: m19, caption: "Making memories 📸" },
      { image: m20, caption: "Making memories 📸" },
      { image: m18, caption: "Making memories 📸" },
      { image: m6, caption: "Making memories 📸" },
      { image: m7, caption: "Making memories 📸" },

      { image: m10, caption: "Making memories 📸" },
      { image: m11, caption: "Making memories 📸" },
      { image: m15, caption: "Making memories 📸" },
      { image: m16, caption: "Making memories 📸" },

      { image: m32, caption: "Making memories 📸" },
      { image: m21, caption: "Making memories 📸" },

      { image: m14, caption: "Making memories 📸" },
      { image: m1, caption: "Making memories 📸" },
      { image: m29, caption: "Making memories 📸" },


      { image: m33, caption: "Making memories 📸" },

      { image: m2, caption: "Making memories 📸" },
      { image: m8, caption: "Making memories 📸" },
      { image: m9, caption: "Making memories 📸" },
      { image: m30, caption: "Making memories 📸" },
      { image: m31, caption: "Making memories 📸" },


      { image: m3, caption: "Making memories 📸" },
      { image: m4, caption: "Making memories 📸" },
      { image: m5, caption: "Making memories 📸" },
      { image: m22, caption: "Making memories 📸" },

      { image: m12, caption: "Making memories 📸" },
      { image: m13, caption: "Making memories 📸" },

      { image: m26, caption: "Making memories 📸" },

      { image: m27, caption: "Making memories 📸" },









    ],

    finalMessage: `On this special day ah, I just want to tell you one thing… having you in my life is like getting free comedy show everyday 😭🤣. You with your soft heart, shy face, overthinking brain, chapri vibes and achooti talks… all together making my life fully entertainment package. 

Thank you for all the laughs, the random disappearings, the weird advices, the airhead moments and the unnecessary overconfidence you carrying like award 🏆😌. 

I hope this year give you all the things you dreaming and shouting about. Stay same chaos-but-cute person ok. 

Happy Birthday, my one and only kannapi chapri queen! 🎂✨`,
    from: "Your Best Friend"

  };

  return (
    <div className="font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Pacifico&display=swap');
        
        .dancing-script {
          font-family: 'Dancing Script', cursive;
        }
        
        .pacifico {
          font-family: 'Pacifico', cursive;
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>

      <Hero name={config.name} heroImage={config.heroImage} />
      <LetterWishBoxes letter={config.letter} wishes={config.wishes} />

      {/* Short videos inserted after wishes */}
      <ShortVideos videos={config.shortVideos} />

      <FriendLetters letters={config.friendLetters} />



      <PolaroidWall polaroids={config.polaroids} />
      <BalloonPop />
      <FinalMessage message={config.finalMessage} from={config.from} />
    </div>
  );
}
