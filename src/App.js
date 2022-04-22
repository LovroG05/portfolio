import './App.css';
import LazyHero from 'react-lazy-hero';
import { UserCard } from 'react-ui-cards';
import { Container, Row, Col } from 'react-grid-system';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <LazyHero imageSrc="https://unsplash.it/2000/1000" opacity="0.5" color="#262626">
        <h1 class='hello text'>Hello!</h1>
        <h2 class="text">I'm Lovro Govekar</h2>
      </LazyHero>
      <div class="centereddiv">
        <h3 class="text paragraph-heading">About me</h3>
        <p class="paragraph text">I'm a software developer and a student of the Vegova Ljubljana gymnasium, 2nd grade. I have been programming since I was 12 years old.</p>
      </div>
      <div class="container">
        <UserCard 
          float 
          href="https://github.com/LovroG05"
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://avatars.githubusercontent.com/u/73135477?v=4'
          name="Lovro Govekar"
          positionName="Student"
          className='usercard'
          >

        </UserCard>
        
      </div>
      <div>
        <SocialIcon url="https://twitter.com/LovroG05" className='icon'/>
        <SocialIcon url="https://github.com/LovroG05" className='icon' bgColor='#fff'/>
        <SocialIcon url="https://www.instagram.com/lovro1st/" className='icon'/>
        <SocialIcon url="https://www.reddit.com/user/Lovro1st" className='icon'/>
        <SocialIcon url="https://gitlab.com/LovroG05" className='icon'/>
        <SocialIcon url="https://www.linkedin.com/in/lovro-govekar-531939232/" className='icon'/>
      </div>
      <div>
        <h3 class="text paragraph-heading">Portfolio</h3>
        <Container className='cards'>
          <Row>
            <Col className='container'>
              <UserCard 
                float 
                href="https://github.com/LovroG05/UniKlaud"
                header='https://i.imgur.com/w5tX1Pn.jpg'
                avatar='https://github.com/LovroG05/UniKlaud/blob/master/images/logo.png?raw=true'
                name="Uniklaud"
                positionName="Run your clouds in RAID."
                className='usercard'
                >

              </UserCard>
            </Col>
            <Col className='container'>
              <UserCard 
                float 
                href="https://github.com/LovroG05/projekt-avtopaskal"
                header='https://gitlab.com/mineburgers08/images/-/raw/main/arduino.jpg'
                avatar='https://gitlab.com/mineburgers08/images/-/raw/main/asm.png'
                name="Projekt-avtopaskal"
                positionName="AVR Assembly 16x2 display driver for 328p"
                className='usercard'
                >

              </UserCard>
            </Col>
            <Col className='container'>
              <UserCard 
                float 
                href="https://github.com/LovroG05/gpxStravaFaker"
                header='https://gitlab.com/mineburgers08/images/-/raw/main/strava.jpg'
                avatar='https://github.com/LovroG05/gpxStravaFaker/blob/master/stravafake.png?raw=true'
                name="Strava Activity Faker"
                positionName="A script for changing the date and time of a Strava .gpx file"
                className='usercard'
                >

              </UserCard>
            </Col>
            <Col className='container'>
              <UserCard 
                float 
                href="https://github.com/LovroG05/turtle-miner"
                header='https://gitlab.com/mineburgers08/images/-/raw/main/cc1.png'
                avatar='https://gitlab.com/mineburgers08/images/-/raw/main/ccturtle.png'
                name="Turtle miner"
                positionName="A lua script for Computercraft"
                className='usercard'
                >

              </UserCard>
            </Col>
            <Col className='container'>
              <UserCard 
                float 
                href="http://bewiesen.ml/#/"
                header='https://gitlab.com/mineburgers08/images/-/raw/main/code.jpg'
                avatar='https://gitlab.com/mineburgers08/images/-/raw/main/deutschland.png'
                name="Bewiesen"
                positionName="App and website for studying German made in Flutter"
                className='usercard'
                >

              </UserCard>
            </Col>
            <Col className='container'>
              <UserCard 
                float 
                href="https://github.com/LovroG05/portfolio"
                header='https://gitlab.com/mineburgers08/images/-/raw/main/slo.png'
                avatar='https://avatars.githubusercontent.com/u/73135477?v=4'
                name="Portfolio"
                positionName="The source code of this website"
                className='usercard'
                >

              </UserCard>
            </Col>
            <Col className='container'>
              <UserCard 
                float 
                href="https://github.com/LovroG05/busscheduler"
                header='https://www.lpp.si/sites/www.jhl.si/files/20160507_131337.jpg'
                avatar='https://github.com/LovroG05/BusCloud-App/blob/master/assets/icons/icon.png?raw=true'
                name="BusCloud backend"
                positionName="Flask backend for a bus finder app, made as a personal project. Doesn't work anymore due to an API being shut down."
                className='usercard'
                >

              </UserCard>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="bottompadding">
        <h3 class="text paragraph-heading">Contact me</h3>
        <p class="paragraph text">lovro.govekar at gmail.com</p>
        <p class="paragraph text">lovro.govekar at pm.me</p>
        
      </div>
    </div>
  );
}

export default App;
