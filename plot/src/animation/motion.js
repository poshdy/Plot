export const NavCon = {
  show: {
    transition: {
      staggerChildren: 0.45,
      duration: 0.6,
    },
  },
};

export const NavItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

export const transition = {duration:0.6 , ease: [0.43 , 0.13 , 0.23 , 0.96]}

export const discoverContainer = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
export  const discoverItem = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const container = {
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};
export const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const itemtwo = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.5,
      type: "spring",
    },
  },
};