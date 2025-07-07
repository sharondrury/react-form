import Dropzone from "./Dropzone";
import { useState } from "react";
import "./styles.css";

const Homepage = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const hideFields = () => {
    setIsVisible(false);
  };

  const handleValidation = () => {
    const formFields = { ...fields };
    const formErrors = {};
    let formIsValid = true;
    const namePattern = /^[a-zA-Z]+$/;
    // const usernamePattern = /^[a-zA-Z]+$/;
    const usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9@]+$/;

    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "This field cannot be empty";
    } else if (!formFields["name"].match(namePattern)) {
      formIsValid = false;
      formErrors["name"] = "Only letters and spaces can be used";
    }

    //Email
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "This field cannot be empty";
    } else {
      let lastAtPos = formFields["email"].lastIndexOf("@");
      let lastDotPos = formFields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formFields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formFields["email"] = "Email is not valid";
      }
    }

    // Username;
    if (!formFields["username"]) {
      formIsValid = false;
      formErrors["username"] = "This field cannot be empty";
    }

    if (typeof formFields["username"] !== "undefined") {
      if (!formFields["username"].match(usernamePattern)) {
        formIsValid = false;
        formErrors["username"] = "Only letters, numbers and @ can be used";
      }
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted successfully!");
      hideFields(); // Hide the fields after successful submission
    } else {
      alert("Form has errors.");
    }
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFilesChange = (files) => {
    setUploadedFiles(files);
  };

  const avatarFile =
    uploadedFiles && uploadedFiles.length > 0 ? uploadedFiles[0] : null;

  return (
    <>
      <section className="background-images">
        <div className="line-image"></div>
        <div className="bottom-left-image"></div>
        <div className="top-right-image"></div>
      </section>
      {isVisible && (
        <section className="section-container">
          <div className="main-container">
            <div className="heading-container">
              <h1>Your Journey to Coding Conf</h1>
              <h1>2025 Starts Here!</h1>
              <h2>
                Secure your spot at next year's biggest coding conference.
              </h2>
            </div>
          </div>

          <div className="form-container">
            <div>
              <form onSubmit={contactSubmit}>
                <section className="form-container-main">
                  <Dropzone
                    className="drop-zone"
                    onFilesChange={handleFilesChange}
                  />
                  <label>
                    Full name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={fields["name"]}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Joe Egg"
                  />
                  <span className="error">{errors["name"]}</span>
                  <label>
                    Email address<sup>*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={fields["email"]}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="joeegg@gmail.com"
                  />
                  <span className="error">{errors["email"]}</span>

                  <label>Github username</label>
                  <input
                    type="text"
                    name="address"
                    value={fields["username"]}
                    onChange={(e) => handleChange("username", e.target.value)}
                    placeholder="@yourusername"
                  />
                  <span className="error">{errors["username"]}</span>
                </section>

                <button
                  className="generate-button"
                  id="submit"
                  value="Submit"
                  onClick={contactSubmit}
                >
                  Generate My Ticket
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
      {!isVisible && (
        <section className="ticket-generated-container">
          <div className="main-container">
            <div className="heading-container">
              <h1>Congrats, {fields.name}!</h1>
              <h1>Your ticket is ready</h1>
              <p>We've emailed your ticket to</p>
              <p>
                <span className="email-color">{fields.email}</span> and will
                send updates in
              </p>
              <p>the run up to the event.</p>
            </div>
          </div>
          <div className="ticket-container">
            <div className="ticket">
              <div className="your-details">
                <div className="conf-details">
                  <div>
                    <div className="logo"></div>
                  </div>
                  <div className="date">
                    <p>31 Jan, 2025 / London UK</p>
                  </div>
                </div>
                <div className="your-details-container-with-avatar">
                  <div>
                    {avatarFile ? (
                      <div className="avatar-display">
                        <img
                          src={avatarFile.preview}
                          alt="User avatar"
                          className="avatar-image"
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "10%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ) : (
                      <div className="avatar-placeholder">
                        <p>No avatar uploaded</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <h1>{fields.name}</h1>
                    <div className="email-and-icon">
                      <div className="github-icon"></div>
                      <p>{fields.username}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="random-text">
                <h1>#{getRandomInt(1, 2000)}</h1>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Homepage;
