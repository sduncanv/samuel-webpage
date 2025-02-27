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
                            <li>🔹 <span className="hide-on-small">Programming languages: </span> Python, PHP, C++, JavaScript</li>
                            <li>🔹 <span className="hide-on-small">Frameworks and technologies: </span>Flask, FastAPI, ReactJS</li>
                            <li>🔹 <span className="hide-on-small">DevOps and tools: </span>AWS (Lambdas, S3, SQS, SNS), Git, Bash/Zsh, Linux</li>
                            <li>🔹 <span className="hide-on-small">Automation and hardware: </span>electronics, robotics, microcontrollers</li>
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
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>First Project</h4>
                                        <h4>February 27, 2025</h4>
                                    </div>
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    roots 2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    </p>
                                </a>
                            </div>
                            <div className="project-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>First Project</h4>
                                        <h4>February 27, 2025</h4>
                                    </div>
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    roots 2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    </p>
                                </a>
                            </div>
                            <div className="project-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>First Project</h4>
                                        <h4>February 27, 2025</h4>
                                    </div>
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    roots 2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    </p>
                                </a>
                            </div>
                            <div className="project-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>First Project</h4>
                                        <h4>February 27, 2025</h4>
                                    </div>
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    roots 2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    </p>
                                </a>
                            </div>
                            <div className="project-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Project image" />
                                    </picture>
                                    <div>
                                        <h4>First Project</h4>
                                        <h4>February 27, 2025</h4>
                                    </div>
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    roots 2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
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
                </div>
            </section>
            <section id='education'>
                <h2 className='section-h2'>Education</h2>
                <div>
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