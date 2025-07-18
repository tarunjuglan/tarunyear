import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LoveLetter.css";

const loveNotes = [
  "A very happy first love anniversary to my giccha ❤️",
  "Today we completed one whole of togetherness 💖",
  "everyday of this wonderful year has been the memorable day of my life🌍",
  "it is the most important day of my life as this day gave me you ☀️",
  "In yours arms i feel very happy and just being with you✨",
  "You're my kuchu puchu mera gichha h tuu  🎶",
  "I'd choose you over a lifetime of extra sleep 😴❤️",
  "din raat subhe shyam srif tu yaad ata h meri penguin 💕",
  "You're my everythinh my bacha my chotu mera pyra bacha  🛋️",
  "You're the missing piece I never knew I needed 🧩",
  "Holding your hand makes everything feel right 🤝",
  "You're the dream I never want to wake up from 🌙",
  "Even on my worst days, you make everything better 💖",
  "You're my happy place, no matter where we are 🏡",
  "I'd rather be with you in the rain than anywhere else in the sun ☔",
  "Every love song suddenly makes sense because of you 🎵",
  "You make my world brighter just by being in it 🌟",
  "You're not just my love, you're my best friend too you are my giccha my bebe 💞",
];


export default function LoveLetter() {
  const [message, setMessage] = useState("Click below for a love note!");

  return (
    <div className="love-letter">
      <div className="love-letter-card">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="love-message"
        >
          {message}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setMessage(loveNotes[Math.floor(Math.random() * loveNotes.length)])
          }
          className="love-button"
        >
          Get a Love Note ❤️
        </motion.button>
      </div>
    </div>
  );
}
