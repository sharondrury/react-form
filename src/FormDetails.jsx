// import { useState } from "react";
// import TicketSubmitted from "./TicketSubmitted";

// const FormDetails = () => {
//   const [fields, setFields] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isVisible, setIsVisible] = useState(true);

//   const hideFields = () => {
//     setIsVisible(false);
//   };

//   const handleValidation = () => {
//     const formFields = { ...fields };
//     const formErrors = {};
//     let formIsValid = true;
//     const namePattern = /^[a-zA-Z]+$/;
//     // const usernamePattern = /^[a-zA-Z]+$/;
//     // const usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9@]+$/;

//     //Name
//     if (!formFields["name"]) {
//       formIsValid = false;
//       formErrors["name"] = "This field cannot be empty";
//     } else if (!formFields["name"].match(namePattern)) {
//       formIsValid = false;
//       formErrors["name"] = "Only letters and spaces can be used";
//     }

//     //Email
//     if (!formFields["email"]) {
//       formIsValid = false;
//       formErrors["email"] = "This field cannot be empty";
//     } else {
//       let lastAtPos = formFields["email"].lastIndexOf("@");
//       let lastDotPos = formFields["email"].lastIndexOf(".");

//       if (
//         !(
//           lastAtPos < lastDotPos &&
//           lastAtPos > 0 &&
//           formFields["email"].indexOf("@@") == -1 &&
//           lastDotPos > 2 &&
//           fields["email"].length - lastDotPos > 2
//         )
//       ) {
//         formIsValid = false;
//         formFields["email"] = "Email is not valid";
//       }
//     }

//     //Username
//     // if (!formFields["username"]) {
//     //   formIsValid = false;
//     //   formErrors["username"] = "This field cannot be empty";
//     // }

//     // if (typeof formFields["username"] !== "undefined") {
//     //   if (!formFields["username"].match(usernamePattern)) {
//     //     formIsValid = false;
//     //     formErrors["username"] = "Only letters, numbers and @ can be used";
//     //   }
//     // }

//     setErrors(formErrors);
//     return formIsValid;
//   };

//   const handleChange = (field, value) => {
//     setFields({
//       ...fields,
//       [field]: value,
//     });
//   };

//   const contactSubmit = (e) => {
//     e.preventDefault();
//     if (handleValidation()) {
//       alert("Form submitted successfully!");
//       hideFields(); // Hide the fields after successful submission
//     } else {
//       alert("Form has errors.");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={contactSubmit}>
//         {isVisible && (
//           <section className="form-container-main">
//             <label>
//               Full Name1<sup>1</sup>
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={fields["name"]}
//               onChange={(e) => handleChange("name", e.target.value)}
//               placeholder="Joe Egg"
//             />
//             <span className="error">{errors["name"]}</span>
//             <label>Email address</label>
//             <input
//               type="email"
//               name="email"
//               value={fields["email"]}
//               onChange={(e) => handleChange("email", e.target.value)}
//               placeholder="joeegg@gmail.com"
//             />
//             <span className="error">{errors["email"]}</span>

//             {/* <label>Github username</label>
//           <input
//             type="text"
//             name="address"
//             value={fields["username"]}
//             onChange={(e) => handleChange("username", e.target.value)}
//             placeholder="@yourusername"
//           /> */}

//             {/* <div className="mt-4">
//               {!isVisible && (
//                 <div className="text-green-600 font-bold text-center">
//                   Form submitted successfully! Fields are now hidden.
//                 </div>
//               )}
//             </div> */}

//             {/* <div>{!isVisible && <TicketSubmitted />}</div> */}
//           </section>
//         )}

//         <div>
//           {!isVisible && (
//             <div>
//               <div>
//                 <h1>Does this work {fields.name}</h1>
//               </div>
//               {/* <TicketSubmitted /> */}
//             </div>
//           )}
//         </div>

//         <button
//           className="btn btn-lg pro"
//           id="submit"
//           value="Submit"
//           onClick={contactSubmit}
//         >
//           Generate My Ticket
//         </button>
//       </form>
//     </>
//   );
// };

// export default FormDetails;
