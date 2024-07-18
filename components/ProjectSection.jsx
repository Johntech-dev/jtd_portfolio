'use client'
import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import { motion, inView, useInView, animate, easeIn } from 'framer-motion';

const ProjectSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once:true});

    const cardVariant = {
        initial: {y:50, opacity:0},
        animate: {y:0, opacity:1},
        transition: {easeIn}
    }
  const ProjectData = [
    {
      id: 1,
      title: 'Ecommerce-Ui',
      description: 'At the HNG Internship, I developed the user interface of an eCommerce website as part of a series of tasks assigned to enhance our practical skills. This role involved creating intuitive and visually appealing shopping experiences, designing and implementing responsive layouts, optimizing page load times, and ensuring a seamless user journey from product browsing to checkout. I collaborated closely with the Ui/Ux team to integrate dynamic content and improve overall site performance.',
      image: 'project1.png',
      projecturl: "https://ecommerce-ui-sandy-pi.vercel.app/",
      githuburl: "https://github.com/Johntech-dev/Ecommerce-Ui",
      tag: ["All", "web"],
    },
    {
      id: 2,
      title: 'Foodi Resturant',
      description: 'I developed a website named Foodie using React.js and Tailwind CSS, focused on providing a delightful user experience for food enthusiasts. The website features a responsive design and a user-friendly interface. I also integrated Firebase for login and sign-up authentication, ensuring secure and seamless access for users. This project involved implementing various features such as dynamic content display, user profile management, and real-time data updates.',
      image: 'project2.png',
      tag: ["All", "web"],
      projecturl: "https://foodie-khaki.vercel.app/",
      githuburl: "https://github.com/Johntech-dev/foodie",
    },
    {
      id: 3,
      title: 'Disney Clone',
      description: 'I developed a design clone, which allowed me to enhance my skills in frontend development. During this project, I learned how to fetch and handle APIs effectively. This experience improved my understanding of asynchronous JavaScript and data manipulation, as well as how to integrate external data sources into a web application seamlessly.',
      image: 'project3.png',
      projecturl: "https://youtube-disney-clone-ruby.vercel.app/",
      githuburl: "https://github.com/Johntech-dev/youtube-disney-clone",
      tag: ["All", "web"],
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'I created a portfolio website using React.js and Tailwind CSS, showcasing my skills in frontend development. The website features a responsive design, easy navigation, and a customizable color scheme. I also implemented a blog section using Markdown and a content management system, ensuring that the website remains up-to-date with my latest projects.',
      image: 'project5.png',
      projecturl: "https://johntec.netlify.app/",
      githuburl: "https://github.com/Johntech-dev/portfolio",
      tag: ["All", "web"],
    },
    {
      id: 5,
      title: 'Johntechdev Portfolio',
      description: 'I created a portfolio website using Next.js and Tailwind CSS, showcasing my skills in frontend development. The website features a responsive design, easy navigation, and a customizable color scheme. I also implemented a blog section using Markdown and a content management system, ensuring that the website remains up-to-date with my latest projects.',
      image: 'project4.png',
      projecturl: "https://johntechdev.vercel.app/",
      githuburl: "https://github.com/Johntech-dev/jtd_portfolio",
      tag: ["All", "web"],
    },
  ]

  return (
    <div ref={ref} className='mt-10 mb-10'>
      <div className='mt-9 mb-9'>
        <h2 className='text-[30px] text-white'>Project Section</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          ProjectData.map(project => (
            <motion.div variants={cardVariant} initial="initial" animate={isInView ? "animate" : "initial"} key={project.id} className='flex flex-col bg-[#0C0C0C99] border border-blue-900 p-6 rounded-lg'>
              <img src={project.image} alt={project.title} width={300} height={200} className='rounded-md' />
              <h3 className='text-xl font-bold text-white mt-4'>{project.title}</h3>
              <p className='text-sm text-white mt-2'>{project.description}</p>
              <div className='float-left flex gap-10  mt-3 text-white text-lg'>
                <a href={project.projecturl}>
               <FaExternalLinkAlt />
              </a>
              <a href={project.githuburl}>
              <FaGithub />
              </a>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectSection
