
import './Certificate.css'
import  certificate from './images/certificate.jpeg'
import  certificate1 from './images/certificate1.jpeg'
import  certificate2 from  './images/certificate2.jpeg'
import  certificate3 from './images/certificate3.jpeg'
import  certificate4 from './images/certificate4.jpeg'
import  certificate5 from './images/certificate5.jpeg'
import  certificate6 from './images/certificate6.jpeg'
import  certificate7 from './images/certificate7.jpeg'
import  certificate8 from './images/certificate8.jpeg'
import { useTranslation } from 'react-i18next';

const Certificate = () => {
  const { t } = useTranslation();
  return (
    <div className="certificate-container">
      <p className="certificate-container-p">{t('certificate')}</p>
      <div className="certificate-list">
        <img className="certificate-list-img" src={certificate} alt="Certificate" />
        <img className="certificate-list-img" src={certificate1} alt="Certificate1" />
        <img className="certificate-list-img" src={certificate2} alt="Certificate2" />
        <img className="certificate-list-img" src={certificate3} alt="Certificate3" />
        <img className="certificate-list-img" src={certificate4} alt="Certificate4" />
        <img className="certificate-list-img" src={certificate5} alt="Certificate5" />
        <img className="certificate-list-img" src={certificate6} alt="Certificate6" />
        <img className="certificate-list-img" src={certificate7} alt="Certificate7" />
        <img className="certificate-list-img" src={certificate8} alt="Certificate8" />

        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Certificate;
