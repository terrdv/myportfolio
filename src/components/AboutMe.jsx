import '../css/AboutMe.css'

function AboutMe() {
    return (
        <div className="abt">
            <div className="head">
                <img className="pic" src="/images/td.jpeg" alt="Terrence David Headshot"/>
                <h2>Terrence David</h2>
            </div>
            <div className="text">
                <h2 className="tdvheader">
                    About Me
                </h2>
                <p>Hey, I'm Terrence David! I am a second year Computer Science and Statistics student at The University of British Columbia. I'm interested in web development, software development and machine learning. My best programming languages are Python, Java and JavaScript!
                </p>
            </div>
        </div>
    )
}

export default AboutMe