import "../styles/Template.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2pdf from "html2pdf.js";
import {
  faEnvelope,
  faHouse,
  faPhone,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

function Templatedoc() {
  const location = useLocation();

  const prescriptionData = location.state;

  if (!prescriptionData) {
    return <center>No prescription data found.</center>;
  }

  const {
    comp_name,
    comp_address,
    comp_phone,
    comp_email,
    logo,
    services,
    gender,
    recp_name,
    recp_address,
    recp_no,
    date1,
    time1,
    employee,
    items,
  } = prescriptionData;

  const prescriptionNo =
    "RX-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(Math.random() * 10000);

  const downloadPDF = () => {
    const element = document.querySelector(".prescription");

    const opt = {
      margin: 0,
      filename: `${prescriptionNo}.pdf`,
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  const createPDF = async () => {
    const element = document.querySelector(".prescription");

    const html = element.outerHTML;

    try {
      const response = await fetch(
        "http://localhost:5000/api/pdf/generate-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            html: html,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save PDF");
      }

      alert("PDF Saved");
    } catch (error) {
      console.error(error);
      alert("Failed to save PDF");
    }
  };

  return (
    <>
      <div className="invoice-actions">
        <button onClick={downloadPDF}>Download PDF</button>
      </div>

      <div className="prescription">
        {/* HEADER */}
        <div className="invoice-header">
          <div className="company">
            <div className="logo2">
              {logo && (
                <img
                  src={URL.createObjectURL(logo)}
                  alt="Clinic Logo"
                />
              )}

              <div className="desc">
                <h1>{comp_name}</h1>
                <h4>{services}</h4>
              </div>
            </div>

            <div className="contact_info">
              <p>
                <FontAwesomeIcon icon={faHouse} /> {comp_address}
              </p>

              <p>
                <FontAwesomeIcon icon={faPhone} /> {comp_phone}
              </p>

              <p>
                <FontAwesomeIcon icon={faEnvelope} /> {comp_email}
              </p>
            </div>
          </div>

          <div className="invoice-title">
            <h2>PRESCRIPTION</h2>
          </div>
        </div>

        {/* BODY */}
        <div className="invoice_body">

          {/* PATIENT + PRESCRIPTION INFORMATION */}
          <div className="invoice-row">

            <div className="bill-to">
              <h3>Patient Details</h3>

              <p>
                <strong>Name:</strong> {gender} {recp_name}
              </p>

              <p>
                <strong>Address:</strong> {recp_address}
              </p>

              <p>
                <strong>Contact:</strong> {recp_no}
              </p>
            </div>

            <div className="invoice-info">
              <p>
                <strong>Prescription No:</strong> {prescriptionNo}
              </p>

              <p>
                <strong>Date:</strong> {date1}
              </p>

              <p>
                <strong>Time:</strong> {time1}
              </p>

              <p>
                <strong>Doctor:</strong> {employee}
              </p>
            </div>

          </div>

          {/* MEDICINES */}
          <div className="medicine-section">
            <h3>Medicines</h3>

            <table className="invoice-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Medicine Name</th>
                  <th>Days</th>
                  <th>Time of Day</th>
                  <th>Instructions</th>
                </tr>
              </thead>

              <tbody>
                {items &&
                  items.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{item.medicineName}</td>

                      <td>{item.days}</td>

                      <td>{item.timeOfDay}</td>

                      <td>{item.instructions}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* NON-MEDICAL INSTRUCTIONS */}
          {/* <div className="non-medical-section">
            <h3>Non-Medical Instructions</h3>

            <p>
              {nonMedicalInstructions ||
                "No additional instructions provided."}
            </p>
          </div> */}

          {/* DOCTOR SIGNATURE */}
          <div className="doctor-signature">
            <FontAwesomeIcon icon={faUserDoctor} />

            <p>
              <strong>{employee}</strong>
            </p>

            <p>Doctor's Signature</p>
          </div>

        </div>

        {/* FOOTER */}
        <footer>
          <h1>Get well soon ❤️</h1>
        </footer>
      </div>
    </>
  );
}

export default Templatedoc;