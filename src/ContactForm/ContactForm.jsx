import React from "react";
import { useState } from "react";
import "./ContactForm.css";
import { MdEmail } from "react-icons/md";
import { FaUniversity, FaQuestion } from "react-icons/fa";
function ContactForm() {
  const [step, setStep] = useState(1);
  const [buttonText, setButtonText] = useState("Επόμενο");
  const [position, setPosition] = useState(33.33);
  return (
    <section id="contact-page">
      <form action="">
        <div
          className="inputs-info"
          style={{ transform: `translateX(${position}%)` }}
        >
          <div className="step">
            <MdEmail className="icon"></MdEmail>
            <h1>Επκοινωνία</h1>
            <p>Επικοινωνίστε μαζί μας αν ενδιαφέρεστε να μπείτε στην ομάδα.</p>
            <input type="email" placeholder={"Email"} />
          </div>
          <div className="step">
            <FaUniversity className="icon"></FaUniversity>
            <h1>Σπουδές</h1>
            <p>Πείτε μας που σπουδάζετε και σε ποιο τμήμα.</p>
            <input type="text" placeholder={"Π.χ. Τμήμα Ψηφιακών Συστημάτων"} />
          </div>
          <div className="step">
            <FaQuestion className="icon"></FaQuestion>
            <h1>Ενδιαφέροντα</h1>
            <p>Παρακαλώ πείτε μας τι αντικείμενο σας ενδιαφέρει.</p>
            <textarea type="text" placeholder={"Π.χ. Web development"} />
          </div>
        </div>
        <button
          className="next"
          type={step === 3 ? "submit" : "button"}
          onClick={(e) => {
            if (position > -33.33) {
              e.preventDefault();
              setStep(step + 1);
              setPosition(position - 33.33);
              if (step === 2) {
                setButtonText("Αποστολή");
              }
            }
          }}
        >
          {buttonText}
        </button>
        <div className="dots">
          <div
            className="dot"
            style={
              step === 1
                ? { backgroundColor: "var(--primary)" }
                : { backgroundColor: "#adadad" }
            }
          ></div>
          <div
            className="dot"
            style={
              step === 2
                ? { backgroundColor: "var(--primary)" }
                : { backgroundColor: "#adadad" }
            }
          ></div>
          <div
            className="dot"
            style={
              step === 3
                ? { backgroundColor: "var(--primary)" }
                : { backgroundColor: "#adadad" }
            }
          ></div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
