import React from 'react'
const { motion } = require("framer-motion");


type Props = {}

function ExperienceCard({ }: Props) {

  const projects = [
    {
      id: 1,
      imgSrc : `https://cdn-ikpnonn.nitrocdn.com/waDtbKwbaGRAyvseWdfAzZVchgcglzdg/assets/images/source/rev-27b7d4b/ntslogistics.com/wp-content/uploads/2019/11/NTS-logo.svg`,
      title: 'Nationwide Transport Services',
      summary: 'As the team lead of a multidisciplinary marketing team of 8+ members—including designers, developers, and SEO specialists—I oversaw the deployment of scalable WordPress websites optimized for SEO, performance, and user experience. My leadership ensured seamless collaboration, resulting in websites that met high performance standards and achieved measurable SEO success.'
    },
    {
      id: 2,
      imgSrc : `https://www.codebyjm.com/convey-logo.png`,
      title: 'Convey Digital',
      summary: 'In my role managing enterprise-level WordPress websites, I led client meetings to understand needs, brainstorm solutions, and provide updates, ensuring alignment and strong relationships. I developed custom themes using PHP and JavaScript, adhering to company standards, and created internal documentation for consistency. I also crafted custom Gutenberg blocks that enhanced the editing experience, empowering clients to manage content easily. Collaborating with cross-functional teams, I helped drive cohesive digital strategies that achieved impactful client outcomes.'
    },
    {
      id: 3,
      imgSrc : `https://clx-website-assets.s3.us-east-1.amazonaws.com/logo.svg`,
      title: 'ClarityX DNA',
      summary: 'I worked closely with business owners to transform business needs into technical solutions, rebuilding the website with a focus on speed, SEO, and usability to empower non-technical teams and drive organic traffic growth. By enhancing site health and implementing SEO best practices, I achieved consistent month-over-month traffic growth and improved conversions. developed a custom client dashboard that provided detailed results and automated order updates, boosting user engagement and transparency. Additionally, I performed in-depth API testing and collaborated to troubleshoot and resolve technical issues efficiently.'
    },
    {
      id: 4,
      title: 'Atlas Digital',
      imgSrc : `https://www.codebyjm.com/atlas-logo.png`,
      summary: 'As the founder and developer at Atlas Digital, I independently managed all aspects of website development, from translating client needs into technical solutions to building high-performance, SEO-optimized sites that drive organic traffic growth. I implemented custom dashboards, enabling users to access real-time results and automated updates, enhancing transparency and engagement. My work included front-end and back-end development, API integration, and troubleshooting to deliver seamless, user-friendly experiences for clients, applying best practices in speed, usability, and conversion optimization.'
    }
  ]

  const renderProjects = () => {
    return projects.map(project => (
      <article 
      key={project.id} 
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] snap-center 
     p-12 md:p-10
        cursor-pointer transition-opacity duration-200ms overflow-hidden
        bg-[#292929] hover:opacity-100 opacity-40 dark:bg-[#292929] bg-gray-100 dark:text-gray-100 text-gray-900"
    >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-center' src={project.imgSrc} alt="" />


        <div className='px-0 md:px-10'>
          {/* <h4 className='text-4xl font-light'>Full Stack Development</h4> */}

          <p className='font-bold text-2xl mt-1'>{project.title}</p>

          <div className='flex space-x-2 my-2'>
            <p>{project.summary}</p>
          </div>

        </div>

      </article>
    ))
  }


  return (
    <>
      {renderProjects()}
    </>

  )
}

export default ExperienceCard