import "./App.css";

export default function App() {
  function copyToClipBoard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied the text: " + text);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

  return (
    <main className="container">
      {/* profile-pic  */}
      <div className="profile-pic-container">
        <img
          className="profile-pic"
          src="./public/assets/Profile-pic.png"
          alt="Profile-Pic"
        />
      </div>
      {/* name  */}
      <div className="items name">
        <p className="name-1">Hello 👋🏻 I&apos;m</p>
        <h1 className="name-2">Paras Yadav</h1>
        <p className="name-3">Front-end/React Developer</p>
      </div>
      {/* language  */}
      <div className="items language">
        <h1>Language</h1>
        <div className="language-divider">
          <div className="language-item">
            <p>English</p>
            <div className="progress progress1">
              <div
                className="progress-value"
                style={{ animationName: "load1" }}
              ></div>
            </div>
          </div>
          <div className="language-item">
            <p>Hindi</p>
            <div className="progress progress2">
              <div
                className="progress-value"
                style={{ animationName: "load2" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* education */}
      <div className="items education">
        <h1>Education</h1>
        <div className="education-container">
          <div className="education-boxes first-box-education">
            <h2>2024</h2>
            <br />
            <p>React Course</p>
            <p>
              Learn the basics of modern React by solving 140+ interactive
              coding challenges
            </p>
            <br />
            <p>scrimba</p>
          </div>
          <div className="education-boxes second-box-education">
            <h2>2021-24</h2>
            <br />
            <p>
              completed my bachelor&apos;s in Computer Application with a CGPA
              of 7.2
            </p>
            <br />
            <p>IPU University</p>
          </div>
          <div className="education-boxes third-box-education">
            <h2>2009-21</h2>
            <br />
            <p>
              I completed my schooling from a public school in Vikaspuri, Delhi
            </p>
            <br />
            <p>New Delhi Public School</p>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="items skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <p>Html</p>
          <p>Css</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Github</p>
          <p>node.js</p>
          <p>MongoDB</p>
          <p>postman</p>
        </div>
      </div>
      {/* chat */}
      <div className="items chat">
        <h1>Let&apos;s chat! I&apos;m ready to work on exciting projects</h1>

        <p>
          <span
            className="chat-copy"
            onClick={() => copyToClipBoard("parasyadav9540@gmail.com")}
          >
            parasyadav9540@gmail.com
          </span>
          |
          <span
            className="chat-copy"
            onClick={() => copyToClipBoard("+91 7678409380")}
          >
            +91 7678409380
          </span>
        </p>
      </div>
    </main>
  );
}
