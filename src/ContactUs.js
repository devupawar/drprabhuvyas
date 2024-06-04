import React, { useState } from 'react';
import './Contactus.css';
import { ImLocation2, ImMobile2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const branches = [
  {
    branch: "Mumbai",
    hospitalname: "Sexologist Prabhu Vyas : Sexologist | Erectile Dysfunction Treatment | Sexologist in Mumbai | Sex Clinic in Parel",
    address: "OVI Diagnostic Centre, 12/8A, Kohinoor Mill Compound Mahatma Jyotiba Phule Marg Near Sharda Talkies, Naigaon, Dadar East, Mumbai, Maharashtra 400014",
    phone: "+919822548780",
    email: "contact@clinicname.com",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1630427434234!2d72.84358807485866!3d19.01253588217896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee5633a37fb%3A0xb9198be1051e4dca!2sSexologist%20Prabhu%20Vyas%20%3A%20Sexologist%20%7C%20Erectile%20Dysfunction%20Treatment%20%7C%20Sexologist%20in%20Mumbai%20%7C%20Sex%20Clinic%20in%20Parel!5e0!3m2!1sen!2sin!4v1716186079582!5m2!1sen!2sin"  },
  {
    branch: "Pune",
    hospitalname: "Sexologist Prabhu Vyas-Super Speciality Sexology Clinic",
    address: "Laxminarayan Talkies, Modi Plaza, Waghanna Clinic, 3rd, Swargate Chowk, Pune, Maharashtra 411037",
    phone: "+919822548780",
    email: "branch2@clinicname.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.723868304304!2d73.85507087484491!3d18.496162882592674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0109a47080f%3A0x5a611ed55c78f08b!2sLaxminarayan%20Theatre!5e0!3m2!1sen!2sin!4v1716186381757!5m2!1sen!2sin" 
   },
  {
    branch: "Jalgoan",
    hospitalname: "Dr. Prabhu Vyas(Ram Total Body Check Up and Matrimonial Check Up)",
    address: "Road, opp. Bhaskar Market Road, behind Chandan Eye Hospital, Pratap Nagar, Jalgaon, Maharashtra 425001",
    phone: "+919822548780",
    email: "contact@clinicname.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.777170890629!2d75.55823757476853!3d21.001567488712904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fc0b707556b%3A0xc8600183684250a5!2sSexologist%20Prabhu%20Vyas%20-%20Erectile%20Dysfunction%20Treatment%20%7C%20Sex%20Clinic%20%7C%20Sexologist%20in%20Jalgaon!5e0!3m2!1sen!2sin!4v1716108773708!5m2!1sen!2sin"
  }
];

const ContactUs = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <p className='branchhead'>{t('branch')}</p>
      <div className="contact-content">
        {selectedBranch && (
          <div className="contact-left">
            <iframe
              title="Clinic Location"
              src={selectedBranch.mapSrc}
              width="100%"
              height="110%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        )}
        <div className="contact-right">
          <div className="branch-selector">
            {branches.map((branch, index) => (
              <button
                key={index}
                onClick={() => setSelectedBranch(branch)}
                className={`branch-button ${selectedBranch?.branch === branch.branch ? 'active' : ''}`}
              >
                {branch.branch}
              </button>
            ))}
          </div>
          {selectedBranch && (
            <>
              <p className="contact-right-head">CONTACT INFORMATION</p>
              <p className="Clinic-Name"><strong><FaHospital /></strong> {selectedBranch.hospitalname}</p>
              <p className="contact-right-para"><strong><ImLocation2 /> : </strong> {selectedBranch.address}</p>
              <p className="contact-right-para"><strong><ImMobile2 /> : </strong> {selectedBranch.phone}</p>
              <p className="contact-right-para"><strong><MdEmail /> : </strong> {selectedBranch.email}</p>
            </>
          )}
        </div>
      </div>
      <div className="copyright-section">
        <p>&copy; {new Date().getFullYear()} <span className='chospital'>Sexologist Dr Prabhu Vyas</span>. All Rights Reserved By <a className='marketingagency' href='https://wa.link/53j56t'>Shree Digital Marketing Agency</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
