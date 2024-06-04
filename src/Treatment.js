import React from 'react';
import './Treatment.css'; // Ensure you create this CSS file for styles
import napusakata from './images/napusakata.jpg';
import kamishukranu from './images/kamishukranunchisankya.jpg';
import irectiledisinfection from './images/erectail.jpg';
import shighrapatan from './images/shighrapatan.jpg';
import nightfall from './images/nightfall.jpg';
import spermatorrea from './images/Spermatorrhoea.jpg';
import laingik from './images/laingikichhakamihone.jpg';
import laingikkamjori from './images/langikkamjori.jpg';
import penileimplant from './images/penileimplant.jpg';
import { useTranslation } from 'react-i18next';

const Treatment = () => {
  const { t } = useTranslation();
  return (
    <div className="treatment">
      <main className="treatment-main">
        <p className="treatment-head">{t('treatment-head')}</p>
        <p className="treatment-para">{t('treatment-para')}</p>
        <div className="treatment-cards">
          <div className="treatment-card">
            <img className="treatment-img" src={napusakata} alt="नपुंसकता" />
            <p className="treatment-name">{t('treatment-name1')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={irectiledisinfection} alt="इरेक्टाइल डिसफंक्शन" />
            <p className="treatment-name">{t('treatment-name2')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={shighrapatan} alt="शीघ्रपतन" />
            <p className="treatment-name">{t('treatment-name3')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={laingik} alt="लैंगिक इच्छा कमी होणे" />
            <p className="treatment-name">{t('treatment-name4')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={spermatorrea} alt="स्पर्मेटोरिया (धातू जाणे)" />
            <p className="treatment-name">{t('treatment-name5')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={laingikkamjori} alt="लैंगिक कमजोरी" />
            <p className="treatment-name">{t('treatment-name6')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={kamishukranu} alt="कमी शुक्राणूंची संख्या" />
            <p className="treatment-name">{t('treatment-name7')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={nightfall} alt="नाईट फॉल किंवा वेट ड्रीम्स" />
            <p className="treatment-name">{t('treatment-name8')}</p>
          </div>
          <div className="treatment-card">
            <img className="treatment-img" src={penileimplant} alt=" लिंग-रोपण" />
            <p className="treatment-name">{t('treatment-name9')}</p>
          </div>
        </div>
        {/* <div className="video-section">
          <h2 className="video-section-head">{t('video')}</h2>
          <div className="video-grid">
            <div className="video-card">
              <iframe width="100%" height="200" src="https://www.youtube.com/watch?v=rR0toHMCYNg" frameBorder="0" allowFullScreen title="Video 1"></iframe>
            </div>
            <div className="video-card">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/videoid2" frameBorder="0" allowFullScreen title="Video 2"></iframe>
            </div>
            <div className="video-card">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/videoid3" frameBorder="0" allowFullScreen title="Video 3"></iframe>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default Treatment;
