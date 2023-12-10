import { Outlet } from "react-router";
// import { motion } from "framer-motion";
import classes from './HomePage.module.css';
import { useNavigate } from 'react-router';
export default function HomePage() {
  const navigate = useNavigate();
  let isLoggedIn = localStorage.getItem("isLoggedIn") || false;

  const MediformChangeHandler = () => {
    isLoggedIn = localStorage.getItem("isLoggedIn") || false;
    if (!isLoggedIn) {
      navigate('/login');
    }
    else {
      navigate('./addMedication');
    }
  };
  const MedidataChangeHandler = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('./medicationData');
    }
  }

  return (
    <div className={"container d-flex align-items-center "} style={{ width: '100vw', flexDirection: 'column' }}>
      <Outlet />
      <br />
      <div className={classes.box1}>
      <div className={classes.some} onClick={MediformChangeHandler}>Add Medication</div>
      <div className={classes.some} onClick={MedidataChangeHandler} >Medication Data</div>
      </div>
      <div className={classes.box}><body>

<header>
    <h1>Welcome to MedTracker: Your Trusted Medication Tracker & Reminder App! 🌟</h1>
    <p>Your Health, Our Priority 🌟</p>
</header>

<section>
    <h2>Why Choose MedTracker? 🤔</h2>
    <ul>
        <li><strong>Seamless Medication Tracking:</strong> Effortlessly keep track of your medications, dosages, and schedules in one central hub. Say goodbye to missed doses and confusion! 💊</li>
        <li><strong>Personalized Reminders:</strong> Receive timely reminders, ensuring you never forget to take your medication. Customize alerts to suit your schedule and preferences. ⏰</li>
        <li><strong>Health Insights at Your Fingertips:</strong> Gain valuable insights into your medication adherence and health patterns. Our analytics help you make informed decisions about your well-being. 📊</li>
        <li><strong>User-Friendly Interface:</strong> MedTracker boasts an intuitive design for easy navigation. Whether you're tech-savvy or a first-time app user, managing your medications has never been this simple. 📱</li>
        <li><strong>Privacy & Security:</strong> Your health information is precious. Rest assured, MedTracker prioritizes the security and privacy of your data, adhering to the highest industry standards. 🔒</li>
        <li><strong>Connect Anywhere, Anytime:</strong> Access your medication information and set reminders from your smartphone, tablet, or computer. MedTracker adapts to your lifestyle, keeping you in control wherever you go. 🌐</li>
        <li><strong>Collaborate with Healthcare Providers:</strong> Share your medication history with healthcare professionals seamlessly. MedTracker facilitates communication, ensuring everyone involved in your care is on the same page. 👩‍⚕👨‍⚕</li>
        <li><strong>Beyond Medication Tracking:</strong> MedTracker is more than just a medication reminder app; it's your health companion. We are committed to supporting you on your journey to a healthier, happier life. 🌈</li>
    </ul>
</section>

<section>
    <h2>Download MedTracker Today! 🎁</h2>
    <p>Take the first step towards a healthier, more organized life. Download MedTracker now and experience the difference in medication management. Your health matters, and MedTracker is here to make it simpler and more enjoyable. 🚀</p>
    <p><strong>For a Healthier Tomorrow, Start Today with MedTracker! 👩‍⚕👨‍⚕</strong></p>
       </section>

</body></div>
    </div>
  );
}
