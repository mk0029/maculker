import React from "react";
import Recover__ from "../assets/img/png/Recover.png";
import TextArrow from "../assets/img/svg/Arrowpatint.svg";

function PatientsRecovered() {
  return (
    <>
      <section className=" py-5">
        {" "}
        <div className="py-lg-4 py-xxl-5">
          {" "}
          <div className=" container">
            <div className="row justify-content-between align-items-center">
              <div className="col-5 h-100 ">
                <div className="">
                  <img className="Homing_Method" src={Recover__} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <div className=" position-relative d-inline-block">
                    <img
                      className=" position-absolute Arrow_Pat"
                      src={TextArrow}
                      alt=""
                    />{" "}
                    <h2
                      style={{ lineHeight: "130%" }}
                      className=" heading-common mb-3 pb-1">
                      More than 50% patients recovered
                    </h2>
                  </div>
                  <p
                    style={{ maxWidth: "555px" }}
                    className="  ff_poppins fw-normal fs_md opacity_07  text__lightwhite">
                    In 2013, We conducted a test with 365 dry and wet AMD
                    patients. In this test recovery rate of patients is 48% of
                    dry AMD and 60% of wet AMD. Another patient named Paddy, was
                    suffering from dry AMD and temporary vision loss. Our
                    strategies cured her and now she is living happily.
                  </p>
                  <span className=" d-inline-block pt-4 mt-3">
                    <a className=" common_btn" href="">
                      Book Call
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PatientsRecovered;
