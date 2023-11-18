import React, { Component } from 'react'
import './styles.css'
import localization from '../../Localization'

class Footer extends Component {

  componentDidMount ()  {
    global.Donation.Button({
      env:'production',
      hosted_button_id:'KPCM4DEVQPM5G',
      image: {
      src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
      alt:'Donate with PayPal button',
      title:'PayPal - The safer, easier way to pay online!',
      }
      }).render('#donate-button');
  }

  render() {
    return (
      <div className="footer-root">
        <div className="footer-background">
          <div className="footer-content-wrapper">
            <p className="footer-text">{localization.betaDisclaimer}<a target="_blank" href="breakingtheviciouscycle.info">breakingtheviciouscycle.info</a></p>
            <div className="footer-links-left">
              <p><a rel="noopener noreferrer" target="_blank" href="http://breakingtheviciouscycle.info/" className="footer-link">{localization.SCD_en_website}</a></p>
              <p><a rel="noopener noreferrer" target="_blank" href="https://www.scd-fi.info/" className="footer-link">{localization.SCD_fi_website}</a></p>
              <p><a rel="noopener noreferrer" target="_blank" href="http://www.scdrecipe.com/medical-journal-articles/list" className="footer-link">{localization.SCD_studies}</a></p>
              <div id="donate-button-container">
                <div id="donate-button"></div>
              </div>

            </div>
            <div className="footer-links-right">
              <p><a rel="noopener noreferrer" target="_blank" href="https://specificcarbohydratedietassociation.org/" className="footer-link">{localization.SCD_association}</a></p>
              <p><a rel="noopener noreferrer" target="_blank" href="https://specificcarbohydratedietassociation.org/scd-facebook-communities" className="footer-link">{localization.SCD_communities}</a></p>
              <p><a rel="noopener noreferrer" href="mailto:scd.app.contact@gmail.com" className="footer-link">{localization.emailUs}</a></p>
            </div>
            <p className="footer-copyright">Copyright © Valtteri Laine 2018</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
