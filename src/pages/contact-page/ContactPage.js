import faceLogo from '../../assets/images/logo-facebookpng-32202.png'
import {Hero} from '../../components/hero'
import classes from './ContactPage.module.css'
function ContactPage() {
  return (
    <div>
      <Hero heading='Kontakt' />
      <div className={classes.box}>
        <div className={classes.info}>
          <div>
            <h2 className={classes.h2}>Frizerski salon "Savin Frizeraj"</h2>
            <address style={{ marginTop: '20px' }}>
              Bulevar Slobodana Jovanovića 7 <br /> Novi Sad 21000
            </address>
            <p style={{ marginTop: '20px' }}>Telefon: 069 3090021</p>
            <p style={{ marginTop: '20px' }}>Društvene mreže</p>
            <a
              rel='noreferrer'
              href='https://www.facebook.com/savin.frizeraj/'
              target='_blank'
            >
              <img className={classes.fb} alt='facebookLogo' src={faceLogo} />
            </a>
          </div>

          <div className={classes.hours}>
            <h3>Radno vreme</h3>
            <div className={classes.workingHours}>
              <ul className={classes.ul}>
                <li className={classes.closed}>Ponedeljak</li>
                <li>Utorak</li>
                <li>Sreda</li>
                <li>Cetvrtak</li>
                <li>Petak</li>
                <li>Subota</li>
                <li>Nedelja</li>
              </ul>

              <ul className={classes.ulSec}>
                <li className={classes.closed}>ZATVORENO</li>
                <li>08:00-20:00</li>
                <li>08:00-20:00</li>
                <li>08:00-20:00</li>
                <li>08:00-20:00</li>
                <li>08:00-20:00</li>
                <li>10:00-18:00</li>
              </ul>
            </div>
          </div>
        </div>

        <iframe
          className={classes.iframe}
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3340.2807296321416!2d19.804295893319242!3d45.25122847860891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd5dc3ea25a8f5c7!2z0KHQsNCy0LjQvSDRhNGA0LjQt9C10YDQsNGY!5e0!3m2!1ssr!2srs!4v1675783644863!5m2!1ssr!2srs'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          title='Savin Frizeraj'
        ></iframe>
      </div>
    </div>
  )
}

export default ContactPage
