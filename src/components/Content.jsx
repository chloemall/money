import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const Content = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const handleClick1 = (e) => {
    e.preventDefault();
    if (show1) {
      setShow1(false);
    } else {
      setShow1(true);
    }
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (show2) {
      setShow2(false);
    } else {
      setShow2(true);
    }
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    if (show3) {
      setShow3(false);
    } else {
      setShow3(true);
    }
  };
  const handleClick4 = (e) => {
    e.preventDefault();
    if (show4) {
      setShow4(false);
    } else {
      setShow4(true);
    }
  };
  return (
    <div>
      <h2>PRIVACY POLICY FOR YAFREEKA APP</h2>
      <h4 style={{ fontWeight: "700" }}>1. INTRODUCTION</h4>
      <hr />
      <p>
      Welcome to Yafreeka. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our app. By downloading, accessing, or using our app, you consent to the practices described in this Privacy Policy.
      </p>
      <hr />
      <div className="first">
        <h4 style={{ fontWeight: "700" }}>2. INFORMATION WE COLLECT</h4>
       
       
        {/* <div className="positioning">
          {show1 ? (
            <>
              <p onClick={handleClick1}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick1}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick1}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick1}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show1 && ( */}
          <p style={{ textDecoration: "dotted" }}> 
 2.1. Information You Provide: We may collect personal information that you provide directly to us when using our app. This may include:
 Account Information: When you create an account, we may collect your username, email address, and password.
 Profile Information: You may choose to provide additional information such as your name, profile picture, and other details to personalize your experience.
 Content: Any content you upload, post, or share on the app, including videos, comments, and messages.</p>
<p>2.2. Usage Information: We may automatically collect information about your usage of the app, including:
 Usage Logs: Details about how you interact with the app, including the content you view, your search queries, and interactions with other users.3. How We Use Your Information
We may use the information collected for various purposes, including:
 Providing and improving the app's functionality and user experience.
 Personalizing content and recommendations based on your preferences.
 Communicating with you about updates, promotions, and user support.
 Analyzing app usage and trends to enhance our services.
 Detecting and preventing fraudulent or abusive activities.
 Complying with legal obligations.

          </p>
        {/* )} */}

        <hr />
      </div>

      <div className="first">
        <h4 style={{ fontWeight: "700" }}>3. SHARING YOUR INFORMATION</h4>
       
          <p style={{ textDecoration: "dotted" }}>
  We may share your personal information in the following circumstances:
<h6>- With other users as part of the app's functionality.</h6>
- With third-party service providers that assist in app operation and analytics.
<h6>- When required by law or to protect our rights and safety.</h6>
<h6>- In the event of a merger, acquisition, or sale of assets, where your information may be transferred.</h6>

          </p>
        {/* )} */}

        <hr />
      </div>

      <div className="first">
        <h4 style={{ fontWeight: "700" }}>4. YOUR CHOICES</h4>
       
          <p style={{ textDecoration: "dotted" }}>
   You have the following choices regarding your personal information
<h6>- You can review and update your account information at any time.</h6>
<h6>- You can opt out of receiving promotional emails from us.</h6>
<h6>- You can delete your account and associated data, subject to certain legal obligations.</h6>

          </p>
        {/* )} */}
        <hr />
      </div>


      <div className="first">
        <h4 style={{ fontWeight: "700" }}>6. SECURITY</h4>
        <h6>
        We implement reasonable measures to protect your information but cannot guarantee absolute security. You are responsible for keeping your account credentials confidential.
        </h6>
       

        <hr />
      </div>
      <div className="first">
        <h4 style={{ fontWeight: "700" }}>7. CHILDREN'S PRIVACY
</h4>
        <h6>
        Our app is not intended for users under the age of 13. If you believe we have collected information from a child under 13, please contact us to have it removed.
        </h6>
       

        <hr />
      </div>
      <div className="first">
        <h4 style={{ fontWeight: "700" }}>8. CONTACT US</h4>
        <h6>
        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at Contact Email Address.
        </h6>
       

        <hr />
      </div>
           
            
      <div>
        <h4 style={{ fontWeight: "700" }}>9. CHANGES TO THIS PRIVACY POLICY</h4>
        <p>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes through the app or by other means.

        </p>
      </div>
      <hr />
    </div>
  );
};

export default Content;
