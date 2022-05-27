
import ChartBar1 from './Components/ChartBar1'
import Profile from './Components/Profile';
import SocialBlock from './Components/SocialBlock';
import ChartColumn from './Components/ChartColumn';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
library.add(far, fab);

function App() {
  return (
    <div className="App" >
      <h1 className='h1'>Homework Session1</h1>
      <div className="section">
        <div className="section__title">ChartBar1 - Component</div>
        <div className="section__body">
          <ChartBar1 labelText="Banwidth" labelBg="#E54D4C" percentBg="#F75354" percent={20} />
          <ChartBar1 labelText="Storage" labelBg="#2DB8CD" percentBg="#31C8DD" percent={45} />
          <ChartBar1 labelText="Users" labelBg="#4AC25E" percentBg="#51D567" percent={70} />
          <ChartBar1 labelText="Visittor" labelBg="#E9C318" percentBg="#FCD518" percent={50} />
          <ChartBar1 labelText="Emails" labelBg="#BB70D5" percentBg="#CB79E7" percent={45} />
          <ChartBar1 labelText="Basic" labelBg="#EB59D6" percentBg="#FE60E8" percent={80} />
          <ChartBar1 labelText="Others" labelBg="#5890DA" percentBg="#619CEC" percent={37} />
          </div>
      </div>
      
      <div className="section">
        <div className="section__title">Skills - Component</div>
        <div className="section__body">
        <Profile icon="fa-brands fa-html5" name="Html" bg="#51D567" percent={60} />
        <Profile icon="fa-brands fa-css3" name="Css"  bg="#F75354" percent={50} />
        <Profile icon="fa-brands fa-php" name="PHP"  bg="#31C8DD" percent={30} />
        <Profile icon="fa-brands fa-node" name="Nodejs" bg="#FCD518" percent={70} />
        <Profile icon="fa-brands fa-react" name="ReactJs"  bg="#CB79E7" percent={40} />
        </div>
      </div>
      
      <div className="section">
        <div className="section__title">SocialBlock - Component</div>
        <div className="section__body">
          <SocialBlock />
          </div>
      </div>

      <div className="section">
        <div className="section__title">ChartColumn - Component</div>
        <div className="section__body">
          <ChartColumn />
        </div>
      </div>

    </div>
  );
}

export default App;
