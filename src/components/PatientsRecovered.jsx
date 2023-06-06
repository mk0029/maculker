import React from "react";
import Recover__ from "../assets/img/png/Recover.png";
import TextArrow from "../assets/img/svg/Arrowpatint.svg";
import Eyepos from "../assets/img/svg/EYEPOS.svg";
import Goglepos from "../assets/img/svg/GoogelsPos.svg";

function PatientsRecovered() {
  return (
    <>
      <section className=" py-5">
        {" "}
        <div className="py-lg-4 py-xxl-5">
          {" "}
          <div className=" container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6 h-100 ">
                <div className=" position-relative z_index1">
                  <div
                    style={{ maxWidth: "207px" }}
                    className="box_Patint_Pis1 position-absolute rounded-3 d-flex gap-xl-4 gap-3 p-2 ">
                    <img src={Eyepos} alt="" />
                    <h5 className=" ff_poppins fw-normal fs_md opacity_07  text__lightwhite mb-0">
                      Macular Degeneration
                    </h5>
                  </div>
                  <div
                    style={{ maxWidth: "207px" }}
                    className="box_Patint_Pis2 position-absolute px-3 py-4 rounded-3">
                    <div className="d-flex gap-2 align-items-center">
                      <img src={Goglepos} alt="" />
                      <h5 className="mb-0  ff_poppins fw-semibold fs_md  text__lightwhite">
                        Patient Recover
                      </h5>
                    </div>
                    <p className=" ff_poppins fw-normal fs_md opacity_09  text__lightwhite">
                      We are using an injection to stop the growth factor of
                      Retina
                    </p>
                  </div>
                  <img className="Homing_Method" src={Recover__} alt="" />
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="">
                  <div className=" position-relative d-inline-block">
                    <img
                      className=" position-absolute d-none d-md-block Arrow_Pat z_index0"
                      src={TextArrow}
                      alt=""
                    />{" "}
                    <h2
                      style={{ lineHeight: "130%" }}
                      className=" heading-common mb-3 pb-1 position-relative z_index1">
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
                  <span className=" d-inline-block pt-md-4 pt-3 mt-xl-3">
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
