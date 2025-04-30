import Layout from '../../Components/Layout'
import './Home.css'


function Home() {

    return (
        <Layout>
            <section id="about-me">
                <h2 className='section-h2'>Ey World, I'm Samuel!</h2>
                <div className="profile-picture">
                    <picture>
                        <source
                            srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689604/gfcnvdxputtxar1dkn8w.png"
                            type="image/webp"/>
                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689604/gfcnvdxputtxar1dkn8w.png" alt="profile"/>
                    </picture>
                </div>
                <div className="abstract">
                    <p>
                        Hello! I'm Samuel Duncan, a mechatronics engineer passionate about automation
                        and technological solutions development.
                    </p>
                    <br/>
                    <p>
                        I have 1.5 years of experience as a backend developer at Red5G, Barranquilla,
                        where I have worked with Python and PHP, implementing microservices in
                        AWS (Lambdas, S3, SQS, SNS, CloudWatch, among others) and developing scalable
                        backend architectures.
                    </p>
                    <br/>
                    <p>
                        I was also a research assistant at Purdue University, USA, for six months, where
                        I developed an application in Unity and C# for Microsoft HoloLens 2, enabling the
                        control of fluid power equipment through mixed reality. Additionally, I contributed
                        to the development and maintenance of Python servers for managing electronic components.
                    </p>
                    <br/>
                    <p>
                        Before specializing in software development and automation, I gained experience in
                        electromechanical maintenance, working as a technician and technologist in
                        electromechanical systems. I performed maintenance on mechanical and electrical
                        machinery and operated machining processes.
                    </p>
                    <br />
                    <div className="div-tech-skills">
                        <h3>Technical Skills:</h3>
                        <ul>
                            <li>🔹 <span className="hide-on-small">Programming languages: </span> Python, Golang, JavaScript | NodeJS</li>
                            <li>🔹 <span className="hide-on-small">Frameworks and technologies: </span>Flask, FastAPI, Revel</li>
                            <li>🔹 <span className="hide-on-small">DevOps and tools: </span>AWS (Lambdas, S3, SQS, SNS), Git, Bash/Zsh, Linux</li>
                            <li>🔹 <span className="hide-on-small">Frontend tools: </span>RectJS, ViteJS, Chakra UI</li>
                            <li>🔹 <span className="hide-on-small">Automation and hardware: </span>Electronics, robotics, microcontrollers</li>
                        </ul>
                    </div>
                    <br />
                    <p>
                        My goal is to continue growing in software development and automation, exploring
                        how technology can optimize processes and enhance the interaction between systems
                        and users.
                    </p>
                    <br />
                    <p>
                        Would you like to collaborate or learn more about my work? Feel free to reach
                        out! <a href="mailto:samuelduncanv@gmail.com" className="email-link">samuelduncanv@gmail.com</a>
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://www.instagram.com/zamuelduncan/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sduncanv/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/sduncanv" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </section>
            <section id="projects">
                <h2 className='section-h2'>Projects</h2>
                <div className="projects-sub">
                    <div
                    // #swiperRef=""
                    className="swiper">
                        <div className="swiper-wrapper">
                            <div className="project-slide">
                                <a className="project-box" href="https://samuelduncan.netlify.app/" target="_blank">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740856406/q4noaaa1h6ekwcpijjgm.jpg" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740856406/q4noaaa1h6ekwcpijjgm.jpg" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>Personal Portfolio</h4>
                                        <h4>Feb, 2025</h4>
                                    </div>
                                    <p>
                                        This project showcases my personal portfolio, highlighting my summary, projects, 
                                        skills, education, and social media links. It was built primarily with ReactJS, 
                                        leveraging HTML, CSS, and JavaScript to create a responsive experience. <a href="https://github.com/sduncanv/samuel-webpage" target="_blank">Github link</a>
                                    </p>
                                </a>
                            </div>
                            <div className="project-slide">
                                <a className="project-box" href="https://store-app-duncan.netlify.app/" target="_blank">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1745982199/Captura_de_pantalla_2025-04-29_214703_lxl8ug.png" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1745982199/Captura_de_pantalla_2025-04-29_214703_lxl8ug.png" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>Store Project</h4>
                                        <h4>April, 2025</h4>
                                    </div>
                                    <p>
                                        This project is a store application developed with ReactJS and Python. 
                                        It allows users to create an account, add products to their cart, and 
                                        manage their orders. The backend is built with Python, AWS and Mysql, 
                                        while the frontend is developed using ReactJS. <a href="https://github.com/sduncanv/store-front" target="_blank">Github link</a>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="my-skills">
                <h2 className='section-h2'>Skills</h2>
                <div className="my-skills-container">
                    <i className="fa-brands fa-python"></i>
                    <i className="fa-brands fa-git-alt"></i>
                    <i className="fa-brands fa-github-alt"></i>
                    <i className="fa-solid fa-database"></i>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fab fa-node"></i>
                    <i className="fas fa-terminal"></i>
                    <i className="fab fa-docker"></i>
                </div>
            </section>
            <section id='education'>
                <h2 className='section-h2'>Education</h2>
                <div>
                    <div className='education-slide'>
                        <h4>2025</h4>
                        <div>
                            <h3>Golang Development</h3>
                            <p>
                            In this series of courses taken on Codecademy, I learned about web development with Golang. 
                            I studied the use of data structures all the way through to building web servers. 
                            I also learned how to use the Revel framework.
                            </p>
                        </div>
                    </div>
                    <div className='education-slide'>
                        <h4>2025</h4>
                        <div>
                            <h3>Mechatronics Engineer</h3>
                            <p>
                                Responsible for designing, developing, and integrating automated 
                                systems by combining mechanics, electronics, and software. Specialized 
                                in optimizing industrial processes, maintaining intelligent systems, 
                                and implementing innovative technological solutions.
                            </p>
                        </div>
                    </div>
                    <div className='education-slide'>
                        <h4>2023</h4>
                        <div>
                            <h3>Technologist in Electromechanical Systems Management</h3>
                            <p>
                                Responsible for assisting in maintenance, supervising processes in 
                                metalworking and power generation, and supporting the design of 
                                electromechanical systems.
                            </p>
                        </div>
                    </div>
                    <div className='education-slide'>
                        <h4>2022</h4>
                        <div>
                            <h3>Course in Web Development Technologies</h3>
                            <p>
                                Focused on the use of essential tools and frameworks for building 
                                web applications, covering frontend and backend development, database 
                                management, and best coding practices.
                            </p>
                        </div>
                    </div>
                    <div className='education-slide'>
                        <h4>2021</h4>
                        <div>
                            <h3>Professional Technician in Electromechanical Maintenance</h3>
                            <p>
                                Responsible for operating machining processes and assisting in the 
                                maintenance, assembly, and repair of mechanical, electrical, and 
                                electromechanical systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*
            <section id="">
                <h2>Leave a Message!</h2>
                <p>coming soon :</p>
            </section>
            */}
            <footer>
                <p>&copy; <span id="year"></span> 2025 Samuel Duncan. All Rights Reserved.</p>
            </footer>
        </Layout >
    )
}

export default Home