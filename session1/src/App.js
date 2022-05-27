
import ChartBar from './Homeworks/Session01/ChartBar'
import Skill from './Homeworks/Session01/Skill'
import SocialBlock from './Homeworks/Session01/SocialCard';
import ChartColumn from './Homeworks/Session01/ChartColumn';
import Person from './Homeworks/Session01/Person';

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';

library.add(far, fab);

function App() {

  const bios1 = [
    {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
    {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'B+'},
    {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'MCA'},
    {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Chiago'},
  ];

  const bios2 = [
    {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
    {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'O+'},
    {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Scotch'},
    {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Texas'},
  ];
  const bios3 = [
    {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
    {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'AB'},
    {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Slyline'},
    {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'New York'},
  ];
  const bios4 = [
    {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
    {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'B-'},
    {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Havart'},
    {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Chiago'},
  ];

  const contact1 = [
    {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#E54D4C', type: 'Email', content: 'alex@gmail.com'},
    {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#4AC25E', type: 'Phone', content: '+84988777666'},
  
  ];
  const contact2 = [
    {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#2DB8CD', type: 'Email', content: 'alex@gmail.com'},
    {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#619CEC', type: 'Phone', content: '+84988777666'},
  
  ];
  const contact3 = [
    {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#F78153', type: 'Email', content: 'alex@gmail.com'},
    {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#FCD518', type: 'Phone', content: '+84988777666'},
  
  ];
  const contact4 = [
    {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#CB79E7', type: 'Email', content: 'alex@gmail.com'},
    {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#FE60E8', type: 'Phone', content: '+84988777666'},
  
  ];

  
  return (
    <div className="App" >
      <h1 className='h1'>Homework Session1</h1>
      <div className="section">
        <div className="section__title">ChartBar1 - Component</div>
        <div className="section__body">
          <ChartBar labelText="Banwidth" labelBg="#E54D4C" percentBg="#F75354" percent={20} />
          <ChartBar labelText="Storage" labelBg="#2DB8CD" percentBg="#31C8DD" percent={45} />
          <ChartBar labelText="Users" labelBg="#4AC25E" percentBg="#51D567" percent={70} />
          <ChartBar labelText="Visittor" labelBg="#E9C318" percentBg="#FCD518" percent={50} />
          <ChartBar labelText="Emails" labelBg="#BB70D5" percentBg="#CB79E7" percent={45} />
          <ChartBar labelText="Basic" labelBg="#EB59D6" percentBg="#FE60E8" percent={80} />
          <ChartBar labelText="Others" labelBg="#5890DA" percentBg="#619CEC" percent={37} />
          </div>
      </div>
      
      <div className="section">
        <div className="section__title">Skills - Component</div>
        <div className="section__body">
        <Skill icon="fa-brands fa-html5" name="Html" bg="#51D567" percent={60} />
        <Skill icon="fa-brands fa-css3" name="Css"  bg="#F75354" percent={50} />
        <Skill icon="fa-brands fa-php" name="PHP"  bg="#31C8DD" percent={30} />
        <Skill icon="fa-brands fa-node" name="Nodejs" bg="#FCD518" percent={70} />
        <Skill icon="fa-brands fa-react" name="ReactJs"  bg="#CB79E7" percent={40} />
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
          <div className="blockChart__wraper">
            <ChartColumn text="Today Vistor" total={24599} unit='' percentstages={[20, 45, 30, 80, 75]}/>
            <ChartColumn text="Yesterday Vistor" total={15699} unit='' percentstages={[20, 45, 30, 80, 75]}/>
            <ChartColumn text="Total Download" total={124599} unit='' percentstages={[20, 45, 30, 80, 75]}/>
            <ChartColumn text="Current Income" total={54599} unit='' percentstages={[20, 45, 30, 80, 75]}/>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__title">Person - Component</div>
        <div className="section__body">
          <div className="blockPerson__wraper">
            <Person avatar='avatars/ayo-ogunseinde-1.jpg' name='Robot Partison' alt='Robot Partison' job='Developing' biosArr= {bios1} contactArr = {contact1} />
            <Person avatar='avatars/ayo-ogunseinde-2.jpg' name='Jame Smith' alt='Jame Smith' job='Designer' biosArr= {bios2} contactArr = {contact2} />
            <Person avatar='avatars/ayo-ogunseinde-3.jpg' name='Tom Hanks' alt='Tom Hanks' job='Designer' biosArr= {bios3} contactArr = {contact3} />
            <Person avatar='avatars/ayo-ogunseinde-4.jpg' name='Silvester Stalin' alt='Silvester Stalin' job='Tesing' biosArr= {bios4} contactArr = {contact4} />
           
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
