import Layout from '../../Components/Layout'
import './Home.css'

function Home() {

    return (
        <Layout>
            <section id="about-section">
                <h2>Hey World, I'm Samuel!</h2>
                <div className="headshot">
                    <picture>
                        <source
                            // srcset="public/webp/perfil.webp"
                            srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689604/gfcnvdxputtxar1dkn8w.png"
                            type="image/webp"/>
                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689604/gfcnvdxputtxar1dkn8w.png" alt="perfil"/>
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
                        making videos, watching anime, and lifting weights! immersive digital spaces and tailored 3D
                        experiences, we make it easy for you to connect with
                        new audiences, boost enga
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
                    <div
                    // #swiperRef=""
                    className="swiper card-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Floppy Fish" />
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
                            <div className="swiper-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Floppy Fish" />
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
                            <div className="swiper-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Floppy Fish" />
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
                            <div className="swiper-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Floppy Fish" />
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
                            <div className="swiper-slide">
                                <a href="https://github.com/sduncanv" target="_blank" className="project-box">
                                    <picture>
                                        <source srcSet="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" type="image/webp" />
                                        <img src="https://res.cloudinary.com/dntqwynta/image/upload/v1740689416/g0fadudoppa4u05s3o3c.webp" alt="Floppy Fish" />
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
            <div className="divider"></div>
            <section id="skills-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    <i className="fa-brands fa-python"></i>
                    <i className="fa-brands fa-git-alt"></i>
                    <i className="fa-brands fa-github-alt"></i>
                    <i className="fa-solid fa-database"></i>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                </div>
            </section>
            <div className="divider"></div>
            {/*
            <section id="leave-message-section">
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