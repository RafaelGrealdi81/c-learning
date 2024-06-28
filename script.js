document.addEventListener('DOMContentLoaded', function() {
    loadContent('home');
});

function loadContent(page) {
    let content = '';
    switch(page) {
        case 'home':
            content = `
                <div class="banner"></div>
                <div class="description">
                    <h2>Welcome to the C++ Tutorial App</h2>
                    <p>Learn C++ programming with our easy to follow tutorials!</p>
                </div>
                <div class="tutorials-table">
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('intro')">Introduction to C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>An introduction to C++ programming language.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('variables')">Variables in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about variables in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('loops')">Loops in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about loops in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('functions')">Functions in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about functions in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('classes')">Classes in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about classes in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('inheritance')">Inheritance in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about inheritance in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('polymorphism')">Polymorphism in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about polymorphism in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('templates')">Templates in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about templates in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('stl')">Standard Template Library (STL)</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about STL in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td><a href="#" onclick="loadTutorial('exceptions')">Exception Handling in C++</a></td>
                                    </tr>
                                    <tr>
                                        <td>Learn about exception handling in C++.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="testimonials">
                    <h3>What Our Users Say</h3>
                    <div class="testimonial-item">
                        <p>"This app is amazing! I learned C++ so quickly!" - Jane Doe</p>
                    </div>
                    <div class="testimonial-item">
                        <p>"The tutorials are very clear and easy to follow." - John Smith</p>
                    </div>
                </div>
                <div class="faq">
                    <h3>Frequently Asked Questions</h3>
                    <div class="faq-item">
                        <p><strong>Q:</strong> How do I start learning?</p>
                        <p><strong>A:</strong> Just click on one of the tutorial topics above to get started.</p>
                    </div>
                    <div class="faq-item">
                        <p><strong>Q:</strong> Is this app free?</p>
                        <p><strong>A:</strong> Yes, all the tutorials are free to use.</p>
                    </div>
                </div>
            `;
            break;
        case 'profile':
            content =`
                <h2>Profile</h2>
                <div class="profile-info">
                    <div class="profile-header">
                        <img src="images/profile.jpg" alt="">
                        <h3>Rafael grealdi</h3>
                    </div>
                    <div class="profile-bio">
                        <p>Hi, I'm rafael, a passionate software developer with over 5 years of experience in building web applications. I specialize in frontend development and have a keen interest in learning new technologies.</p>
                    </div>
                    <div class="profile-skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Vue.js</li>
                            <li>Node.js, Express</li>
                            <li>MongoDB, MySQL</li>
                            <li>Git, GitHub</li>
                        </ul>
                    </div>
                    <div class="profile-projects">
                        <h3>Projects</h3>
                        <ul>
                            <li><a href="https://github.com/your-repo/project1" target="_blank">Project 1</a> - A web application for managing tasks.</li>
                            <li><a href="https://github.com/your-repo/project2" target="_blank">Project 2</a> - A real-time chat application.</li>
                            <li><a href="https://github.com/your-repo/project3" target="_blank">Project 3</a> - An e-commerce website.</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
        case 'about':
            content =`
                <h2>About Us</h2>
                <div class="about-us">
                    <div class="about-description">
                        <p>We are a dedicated team passionate about teaching C++ through interactive tutorials. Our mission is to make learning C++ accessible and fun for everyone.</p>
                        <p>Since our inception, we have aimed to create the best learning resources for C++ enthusiasts around the world.</p>
                    </div>
                    <div class="team-section">
                        <h3>Our Team</h3>
                        <div class="team-member">
                            <img src="images/team-member1.jpg" alt="Team Member 1">
                            <p><strong>John Doe</strong> - Lead Developer</p>
                        </div>
                        <div class="team-member">
                            <img src="images/team-member2.jpg" alt="Team Member 2">
                            <p><strong>Jane Smith</strong> - Content Creator</p>
                        </div>
                    </div>
                    <div class="milestones">
                        <h3>Our Journey</h3>
                        <ul>
                            <li>2020: App Idea Conceived</li>
                            <li>2021: First Version Released</li>
                            <li>2022: Reached 10,000 Users</li>
                            <li>2023: Launched Advanced Tutorials</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
        case 'developer':
            content =`
                <h2>Developer Info</h2>
                <div class="developer-info">
                    <div class="developer-description">
                        <p>This app was developed by a team of passionate software engineers and educators who believe in the power of open-source learning. Our goal is to provide high-quality educational resources for everyone.</p>
                    </div>
                    <div class="tech-stack">
                        <h3>Technology Stack</h3>
                        <ul>
                            <li>Frontend: HTML, CSS, JavaScript</li>
                            <li>Backend: Node.js, Express</li>
                            <li>Database: MongoDB</li>
                            <li>Version Control: Git</li>
                        </ul>
                    </div>
                    <div class="project-history">
                        <h3>Project History</h3>
                        <p>The project started in 2020 with the idea of making C++ learning accessible to all. Since then, we've released multiple versions, added advanced tutorials, and grown our user base significantly.</p>
                    </div>
                    <div class="contact-info">
                        <h3>Contact Us</h3>
                        <p>If you have any questions or feedback, feel free to reach out to us:</p>
                        <ul>
                            <li>Email: rafaelgrealdi81@gmail.com</li>
                            <li>GitHub: <a href="https://github.com/your-repo" target="_blank">github.com/your-repo</a></li>
                        </ul>
                    </div>
                </div>
            `;
            break;
    }
    document.getElementById('main-content').innerHTML = content;
}

function loadTutorial(topic) {
    fetch(`tutorials/${topic}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading tutorial:', error);
            document.getElementById('main-content').innerHTML = '<p>Sorry, the tutorial could not be loaded.</p>';
        });
}
