const profiles = [
  {
    id: 1,
    name: "Ada Okechukwu",
    degree: "B.Sc. Computer Science",
    jobDescription: "Frontend Developer building responsive UI with React.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0Q0d4Un89fFnPpMcrdBKUXPNRGKZ3xddg&s",
    status: "Entry-Level"
  },
  {
    id: 2,
    name: "Tobi Ayodele",
    degree: "B.Eng. Software Engineering",
    jobDescription: "Backend Developer specializing in Node.js and Express.",
    image: "https://www.dtcc.edu/media/dtcc-website/content-assets/images/hero-images/design_engineering_mechanical.jpg",
    status: "Mid-Level"
  },
  {
    id: 3,
    name: "Chioma Nwankwo",
    degree: "B.Sc. Information Technology",
    jobDescription: "Data Analyst working with Python and Power BI.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQSSgczuN-PHiPj8JthaMxbd-CxBOnba2_z2-Z8_iIhdafAMVWXIXIy4P321dGQEyVgA&usqp=CAU",
    status: "Entry-Level"
  },
  { 
    id: 4,
    name: "Jude Abiola",
    degree: "M.Sc. Artificial Intelligence",
    jobDescription: "Machine Learning Engineer focused on NLP applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OY_zn3-X1pGWID2L7Z8zG69RHRKscqZgyzwgOFhGaEpfCwCesr26dkTEKyKzydJH5AM&usqp=CAU",
    status: "Senior"
  },
  {
    id: 5,
    name: "Fatima Yusuf",
    degree: "B.Sc. Software Engineering",
    jobDescription: "Mobile App Developer building cross-platform apps with Flutter.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfM6DAk5e4TkKa09wraSP2Tv2cetDoSE9xVmhkcq2cL42wP2VSUA9F0BXDKg-qYT_Prk&usqp=CAU",
    status: "Mid-Level"
  },
  {
    id: 6,
    name: "Ifeanyi Okoro",
    degree: "B.Sc. Computer Engineering",
    jobDescription: "DevOps Engineer managing CI/CD pipelines and cloud services.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFg9fS5VD33gGz4Mka6q02OA09ilNE3R2Hw&s",
    status: "Senior"
  },
  {
    id: 7,
    name: "Zainab Lawal",
    degree: "B.Sc. Cybersecurity",
    jobDescription: "Cybersecurity Analyst focused on penetration testing and risk audits.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5H-Gicz0__3ermMgmWlzE8bVYc892PZqRg&s",
    status: "Mid-Level"
  },
  {id: 8,
    name: "Michael Eze",
    degree: "B.Sc. Computer Science",
    jobDescription: "Full Stack Developer working with MERN stack.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJSMfG3h_Kbxrqim0kY1mC0n-O9s5CJ-QmQ&s",
    status: "Entry-Level"
  },
  {
    id: 9,
    name: "Blessing Umeh",
    degree: "M.Sc. Data Science",
    jobDescription: "Data Scientist creating predictive models and dashboards.",
    image: "https://www.nu.edu/wp-content/uploads/2024/12/09-Desktop-Hero-BS-Manu-Desgn-Engrng-923x420-1.jpg?resize=923%2C420",
    status: "Senior"
  },
  {
    id: 10,
    name: "David Onuoha",
    degree: "B.Sc. Electrical & Electronics",
    jobDescription: "Embedded Systems Engineer developing IoT solutions.",
    image: "https://www.shutterstock.com/image-photo/over-shoulder-shot-engineer-working-260nw-1515843725.jpg",
    status: "Mid-Level"
  },
  {
    name: "Linda Nwachukwu",
    degree: "B.Sc. Software Engineering",
    jobDescription: "QA Engineer performing automated and manual testing.",
    image: "https://media.istockphoto.com/id/1182697690/photo/beautiful-male-computer-engineer-and-scientists-create-neural-network-at-his-workstation.jpg?s=612x612&w=0&k=20&c=3A1_tDbyO3IF9aUv2LJprdTz1C-P5dYdpFu4J4wWcOg=",
    status: "Entry-Level"
  },
  {
    name: "Chinedu Obi",
    degree: "B.Sc. Computer Science",
    jobDescription: "Cloud Engineer working with AWS and Kubernetes.",
    image: "https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4=",
    status: "Mid-Level"
  },
  {
    name: "Yetunde Afolabi",
    degree: "B.Sc. Mathematics",
    jobDescription: "Data Engineer building ETL pipelines with Apache Spark.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu51LChrhGPt9kJBIKYdQPBP7yIrlclmd4pA5ikKYjrcaep0m_8ln3HA6yW2BGuLXtkjQ&usqp=CAU",
    status: "Mid-Level"
  },
  {
    name: "Samson Okafor",
    degree: "B.Sc. Information Systems",
    jobDescription: "Business Analyst translating business needs into tech specs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu51LChrhGPt9kJBIKYdQPBP7yIrlclmd4pA5ikKYjrcaep0m_8ln3HA6yW2BGuLXtkjQ&usqp=CAU",
    status: "Senior"
  },
  {
    name: "Uchenna Nduka",
    degree: "M.Sc. Robotics",
    jobDescription: "Robotics Engineer designing intelligent automation systems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtrtyQV4Y8SiRyl09BTFjKauymk5cEMhlt2DwWdWeY9xC9Nyv_tkwesP3ERHp0oNVo14&usqp=CAU",
    status: "Senior"
  },
  {
    name: "Efe Okojie",
    degree: "B.Sc. Computer Science",
    jobDescription: "UI/UX Designer creating user-centered interfaces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtrtyQV4Y8SiRyl09BTFjKauymk5cEMhlt2DwWdWeY9xC9Nyv_tkwesP3ERHp0oNVo14&usqp=CAU",
    status: "Entry-Level"
  },
  {
    name: "Kemi Olaniyan",
    degree: "B.Sc. Computer Engineering",
    jobDescription: "Software Engineer working on large-scale backend systems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5-w8AR_l5JhIizOB4KfRUBROFK7xp2wlaYLiNV8ABDcLve206Ahh29IhWk9QjKmwaHs&usqp=CAU",
    status: "Mid-Level"
  },
  {
    name: "Emeka Uba",
    degree: "PhD. Computer Science",
    jobDescription: "AI Researcher focused on reinforcement learning and robotics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZAe7oe5ucJ3GUcPz-1OxdK7c0WIvu0oAfWsDHflCprU7hREqYfhBxPX4ZIqJPCqMcdo&usqp=CAU",
    status: "Senior"
  },
  {
    name: "Ngozi Okoro",
    degree: "B.Sc. Information Tech",
    jobDescription: "Technical Writer creating developer documentation and guides.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvkJellB2_utX5DvfKoLRULDYWrUiQ_e_5H5RIGTYqus9Qk_Dhp-FtSx02vpFIjmty_Y&usqp=CAU",
    status: "Entry-Level"
  },
  {
    name: "Tunde Adebayo",
    degree: "B.Sc. Computer Science",
    jobDescription: "Game Developer building 2D/3D games with Unity and C#.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kH2LyIu9ramdr7JfOXpLJQOgnRSqPXGsxeESxmUf2fOpSzInYVo3KfwqU7sHtdK1CnQ&usqp=CAU",
    status: "Mid-Level"
  }
];

export default profiles;