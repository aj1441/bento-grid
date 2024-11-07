
import Stars from './assets/illustration-five-stars.png';
import SocialLinks from './assets/illustration-multiple-platforms.png';
import Calander from './assets/illustration-consistent-schedule.png';
import PostBarChart from './assets/illustration-schedule-posts.png';
import FollowerBarChart from './assets/illustration-grow-followers.png';
import Avitars from './assets/illustration-audience-growth.png';
import CreatePost from './assets/illustration-create-post.png';
import AiChat from './assets/illustration-ai-content.png';
import './App.css';

function App() {
  return (
      <div className= "grid-container">
        <div className="grid-item box1">
          <h1>Social Media <span className="mobile-break"><span className="yellow-style">10x </span><br/><span className="italic-style">Faster</span> with</span> AI</h1>
          <img className="star" src={Stars} alt="five gold stars"></img>
          <p>Over 4,000 5-star reiews</p>
          </div>
        <div className="grid-item box2">
          <img className="social-links" src={SocialLinks} alt="Social Media Links"></img>
          <h3>Manage multiple accounts and platforms</h3>
        </div>
        <div className="grid-item box3">
        <h3>Maintain a consistent posting schedule</h3>
          <img className="calander" src={Calander} alt="Calander Image"></img>
        </div>
        <div className="grid-item box4">
        <h3>Schedule to social media</h3>
          <img className="bar-chart" src={PostBarChart} alt="bar chart of best time to post on social media"></img>
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className="grid-item box5">
         <img className="follower-bar-chart" src={FollowerBarChart} alt="bar chart of social media follwers growth"></img>
          <h2>Grow followers with non-stop content.</h2>
        </div>
        <div className="grid-item box6">
        <h1>{">"} 56%</h1>
        <p>faster audience growth</p>
          <img className="avitars" src={Avitars} alt="3 circles with avitar charaters in them"></img>
        </div>
        <div className="grid-item box7">
        <h2>Creat and schedule content<span className="purple-style">quicker.</span></h2>
          <img className="create-post" src={CreatePost} alt="img of create post button"></img>
        </div>
        <div className="grid-item box8">
        <h2>Write your <span className="tablet-break">conent using AI.</span></h2>
          <img className="ai-chat" src={AiChat} alt="image of an AI chat box"/>
        </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      </div>
  );
}

export default App;
