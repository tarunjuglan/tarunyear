import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

// Import timeline images
import phto1 from "../timeline/phto1.jpeg";
import phto2 from "../timeline/phto2.jpeg";
import phto3 from "../timeline/phto3.jpeg";
import phto4 from "../timeline/phto4.jpeg";
import phto5 from "../timeline/phto5.jpeg";
import phto6 from "../timeline/phto6.jpeg";
import phto7 from "../timeline/phto7.jpeg";
import phto8 from "../timeline/phto8.jpeg";
import phto9 from "../timeline/phto9.jpeg";

const timelineData = [
  {
    date: 'June 2024',
    title: 'Our first ride alone❤️ before our relationship',
    description: 'Mai apko hassa ra tha aap merse gussa the kyu krra click photo😅',
    image: phto1
  },
  {
    date: 'July 2024',
    title: 'when we ride in rain for first time😚',
    description: 'Ham dono pura beegh gye the us time kitna mzza aya tha best moment tha😚',
    image: phto2
  },
  {
    date: 'august 2024',
    title: 'Cyling in the morning💗',
    description: 'kitna mzza ata tha yr subha subha apke sth kitna acha lgta tha💗',
    image: phto3
  },
  {
    date: 'september 2024',
    title: 'First movie together💖',
    description: 'kitna axha lga tha us din mai movie se jadha srif apkon dekh ra tha💖',
    image: phto4
  },
  {
    date: 'october 2024',
    title: 'A kiss to remember💋',
    description: 'the moment i fell you like that what the hell is going on my body rongte khde ho gye the 😅 ',
    image: phto5
  },
  {
    date: 'november 2024',
    title: 'Tha dosa date😅',
    description: 'mzza aya tha dosa kha k but apka tho pet ek gol gappe mai bhr gya tha dos bhi mujhe khana pda tha😅',
    image: phto6
  },
  {
    date: 'January 2025',
    title: 'The magic moment',
    description: 'kutta mujhe kiss nhi krta uss din ki mere bache ne mujhe kitna mst lga Tha 😅💓',
    image: phto7
  },
  {
    date: 'February 2025',
    title: 'kunjapuri visit',
    description: 'kunjapuri ki thandi hawa, mandir ki shanti,aur apka saath wo pal - yaadgar the  kitna cute lgra tha mera bacha mera kuchu puchu💓',
    image: phto8
  },
  {
    date: 'march 2025',
    title: 'A perfect Click at the perfect spot🫀',
    description: 'hamari favorite jagah mai ye photo or aap kitne pyree lgre meri jaan mera giccha 💓',
    image: phto9
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    x: -50
  },
  visible: { 
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const dotVariants = {
  hidden: { 
    scale: 0,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="timeline-dot"
            variants={dotVariants}
          ></motion.div>
          <motion.div 
            className="timeline-card"
            variants={cardVariants}
          >
            <div className="timeline-date">{item.date}</div>
            <h3>{item.title}</h3>
            <div className="timeline-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
