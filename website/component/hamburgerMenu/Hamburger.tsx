import { motion, useCycle } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { MenuToggle } from './MenuToggle';
import { bentoMenu } from '../../userdata/UserData';
import Link from 'next/link';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const liVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const HamburgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      className={`nav-container ${isOpen ? 'open fixed' : 'closed'}`}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className='background' variants={sidebar} />
      <motion.ul variants={ulVariants} className={`ul-container ${isOpen ? 'open ul-container-open' : 'closed'}`}>
        {bentoMenu.map((item, idx) => (
          <motion.li
            className='list-item'
            variants={liVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={idx}
          >
            <Link href={item.link}>
              <div className='listItem' onClick={() => toggleOpen()}>
                {item.title}
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
