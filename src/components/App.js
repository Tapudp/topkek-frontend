import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Categories</span>
        <span>Download</span>
        <span>Logout</span>
      </header>

      <div className="maincols">
        <div className="contentcol">
          <div className="status">
            <div>Gucci Status: offline</div>
            <a href="#">Click Here To Join topkek Discord</a>
          </div>
          <div className="topics">
            <div className="topicsec">
              <p>sectionName ;conditional</p> {/* will be conditional* */}
              <h3>Announcements</h3>
              <p>Official announcements.</p>
              <span>message ; chat</span>
            </div>
            <div className="topicsec">
              <p>sectionName ;conditional</p> {/* will be conditional* */}
              <h3>Trading</h3>
              <p>Place to request services, trade cdkeys, items, etc..</p>
              <span>message ; chat</span>
            </div>
            <div className="topicsec">
              <p>Diablo ll; conditional</p> {/* will be conditional* */}
              <h3>General</h3>
              <p>
                General forum talk goes here. Related to Diablo II and topkek
                forum..
              </p>
              <span>message ; chat</span>
            </div>
            <div className="topicsec">
              <p>Development ;conditional</p> {/* will be conditional* */}
              <h3>Game Hacking</h3>
              <p>Anything related to exploiting or game hacking.</p>
              <span>message ; chat</span>
            </div>
          </div>
        </div>

        <div className="howdy">
          <div className="registercard">
            <div>Howdy, Stranger!</div>
            <p>
              It looks like you're new here. If you want to get involved, click
              one of these buttons! ;conditional
            </p>
            <div className="authbtn">
              <button type="submit" style={{ backgroundColor: "green" }}>
                Sign In
              </button>
              <button type="submit">Register</button>
            </div>
          </div>
          <div className="categorycard">
            <span>Categories</span>
            <span>Recent Categories</span>
            <span>Activity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
