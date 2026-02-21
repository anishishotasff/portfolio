const config = {
  title: "Anish Debnath | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Anish, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Anish, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Anish",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Anish Debnath",
  email: "anishdebnath15@gmail.com",
  site: "https://AnishDebnath.site",

  // for github stars button
  githubUsername: "Anish-Debnath",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/anish_ishotasf",
    linkedin: "https://www.linkedin.com/in/anishishotasfff",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/anishishotasff",
  },
};
export { config };
