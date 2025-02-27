import Layout from '../../Components/Layout'

import './Home.css'

function Home() {

    return (
        <Layout>
            <section id="about-section">
                <h2>Hey World, I'm Samuel!</h2>
                <div className="headshot">
                    <picture>
                        <source srcset="public/webp/headshot.webp" type="image/webp"/>
                        <img src="public/headshot.png" alt="headshot"/>
                    </picture>
                </div>
                <div className="bio">
                    <p>
                        We help your brand thrive in the virtual world.
                        Through immersive digital spaces and tailored 3D
                        experiences, we make it easy for you to connect with
                        new audiences, boost engagement, and stay relevant in a
                        shifting digital landscape.!
                    </p>
                    <br/>
                    <p>
                        Outside of career and academics, I enjoy playing volleyball,
                        making videos, watching anime, and lifting weights!
                    </p>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/zamuelduncan/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    {/* <a href="https://www.youtube.com/" target="_blank">
                        <i className="fa-brands fa-square-youtube"></i>
                    </a> */}
                    <a href="https://www.linkedin.com/in/sduncanv/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/sduncanv" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </section>
            <div className="divider"></div>
            <section id="projects-section">
                <h2>Projects</h2>

                <div className="project-subsection">
                    {/* <h3>Software</h3> */}
                    <div
                    // #swiperRef=""
                    className="swiper card-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcset="public/webp/floppy-fish.webp" type="image/webp" />
                                        <img src="public/floppy-fish.png" alt="Floppy Fish" />
                                    </picture>
                                    <h4>First Project</h4>
                                    {/* <h5><em>Java</em></h5> */}
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. popular belief, Lorem Ipsum is not simply random text. It has
                                    roots
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="project-subsection">
                    <h3>Design</h3>
                    <div
                    // #swiperRef=""
                    className="swiper card-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="https://hibinolab.com/" target="_blank" className="project-box">
                                    <picture>
                                        <source srcset="public/webp/tissue-patch-1.webp" type="image/webp" />
                                        <img src="public/tissue-patch-1.png" alt="Tissue Patch" />
                                    </picture>
                                    <h4>3D Bioprinted Mold</h4>
                                    <h5><em>OnShape, Lumen X Bioprinter</em></h5>
                                    <p>Designed a mold for research lap to reduce cell usage while maintaining tissue patch functionality.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            <div className="divider"></div>
            <section id="skills-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    <i className="fa-brands fa-python"></i>
                    <i className="fa-brands fa-java"></i>
                    <i className="fa-brands fa-swift"></i>
                    <i className="fa-brands fa-figma"></i>
                    <i className="fa-brands fa-git-alt"></i>
                    <i className="fa-brands fa-github-alt"></i>
                    <i className="fa-solid fa-database"></i>
                    <i className="devicon-r-plain"></i>
                    <i className="devicon-c-plain-wordmark"></i>
                </div>
            </section>
            <div className="divider"></div>
            {/* <section id="leave-message-section">
                <h2>Leave a Message!</h2>
                <p>coming soon :</p>
            </section> */}
            <footer>
                <p>&copy; <span id="year"></span> Samuel Duncan. All Rights Reserved.</p>
            </footer>
        </Layout >
    )
}

export default Home