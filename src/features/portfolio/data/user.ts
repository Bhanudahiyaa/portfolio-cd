import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Bhanu ",
  lastName: "Pratap Singh",
  displayName: "Bhanu P. S. Dahiya",
  username: "bhanu-dahiya",
  gender: "male",
  pronouns: "he/him",
  bio: "I build, yes i really do",
  flipSentences: [
    "I build, yes i really do",
    "Software Engineer",
    "Taking startups from 0 to 1",
    "Open Source Contributor",
    "Shitposter",
  ],
  address: "New Delhi, India",
  age: 21,
  college: "MAIT'27",
  phoneNumber: "KzkxIDk0MTYyOTM3NTc=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YmhhbnVkYWhpeWE4QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://69ftw.site",
  resumeUrl:
    "https://drive.google.com/file/d/1o9TbDL1hQBCibAGo7C6onqJ4R2hXeN73/view?usp=sharing",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Zineps",
      website: "https://zineps.com",
      experienceId: "zineps",
    },
    {
      title: "Founding Engineer",
      company: "Actory AI",
      website: "https://actory.ai",
      experienceId: "actory",
    },
  ],
  about: `
I’m Bhanu Pratap Singh Dahiya, a 21 year old software engineer from India who likes building efficient, scalable, and intuitive products. I’m currently a Software Engineer at Zineps and a Founding Engineer at Actory AI, working across full-stack product engineering, backend systems, infrastructure, and early stage startup execution.
`,
  avatar: "/images/avatar-light.jpg?v=2",
  avatarVariants: {
    lightOff: "/images/avatar-light.jpg?v=2",
    lightOn: "/images/avatar-light.jpg?v=2",
    darkOff: "/images/avatar-dark.jpg?v=2",
    darkOn: "/images/avatar-dark.jpg?v=2",
  },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "India",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
