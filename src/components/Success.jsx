import React from "react";
import Bg_succes from "../assets/img/png/bg_Succes.png";

function Success() {
  return (
    <>
      <div style={{ backgroundColor: "#16211E " }} className="py-3">
        {" "}
        <section className=" py-md-5 py-4 position-relative">
          <img
            className=" img_ScreenShot_Success position-absolute end-0  top-0 h-100"
            src={Bg_succes}
            alt="err"
          />
          <div className="py-lg-5 ">
            {" "}
            <div className=" container">
              <div className="  py-4 px-4">
                {" "}
                <div className="px-sm-3 px-2 py-3 col-xl-5 col-lg-6 col-sm-10 position-relative z_index2 bg_box_Succes">
                  {" "}
                  <h2 className=" heading-common px-2">
                    Success: Strive, Thrive, and Shine
                  </h2>
                  <p className=" peragraph_common pt-md-3 pt-2 pb-lg-5 pb-4 mb-0 px-2">
                    When it comes to achieving success, there are certain
                    qualities that can help you reach your goals. Had it not
                    been for our success in many patients we may never have
                    pursued macular degeneration
                  </p>
                  <span className=" ps-2 d-inline-block mb-4">
                    {" "}
                    <a href="" className=" d-inline-block square_btn">
                      Learn More
                    </a>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Success;
