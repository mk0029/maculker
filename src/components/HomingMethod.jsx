import React from "react";
import Homing from "../assets/img/png/HOmin_Metho.png";
import CheckMArk from "../assets/img/svg/CheckMark.svg";
function HomingMethod() {
  return (
    <>
      <section className="py-5 position-relative">
        <div className="Green_Layer_Commn green_layer_pos_homing position-absolute"></div>
        <div className="container">
          <div className="py-xl-5 py-lg-4 mt-xxl-4">
            {" "}
            <div className="row flex-column-reverse flex-lg-row justify-content-between align-items-center">
              <div className="col-lg-6 mt-4 mt-lg-0">
                <h2 className="text-white fs_3x2l fw-medium ff_jakarta te pb-3 mb-1">
                  The HOMING Method{" "}
                </h2>
                <p
                  style={{ maxWidth: "558px" }}
                  className="peragraph_common text-white">
                  We will start by taking a detailed medical history, including
                  any symptoms you may be experiencing. They will ask about your
                  family history of eye diseases and other medical conditions.
                </p>
                <div className="d-flex gap-2 border_bottom_checkMark_Parent d-inline-block mt-3 pt-2 ">
                  <img className="CheckMArk pe-1" src={CheckMArk} alt="" />
                  <div className="pb-3 ">
                    <h3 className="ff_jakarta fw_med fs_md text-white mb-2 ">
                      Medical History - Patient Portal
                    </h3>
                    <p className="peragraph_common mb-1">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 border_bottom_checkMark_Parent d-inline-block mt-3 pt-2 ">
                  <img className="CheckMArk pe-1" src={CheckMArk} alt="" />
                  <div className="pb-3 ">
                    <h3 className="ff_jakarta fw_med fs_md text-white mb-2 ">
                      Lab Test (Insurance Covered){" "}
                    </h3>
                    <p
                      style={{ maxWidth: "451px" }}
                      className="peragraph_common mb-1">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In purus aliquam mauris
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2  mt-3 pt-2 ">
                  <img className="CheckMArk pe-1" src={CheckMArk} alt="" />
                  <div className="pb-3 ">
                    <h3 className="ff_jakarta fw_med fs_md text-white mb-2 ">
                      Customized Macular Program Report{" "}
                    </h3>
                    <p
                      style={{ maxWidth: "451px" }}
                      className="peragraph_common mb-1">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In purus aliquam mauris{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5 ms-xl-5 position-relative">
                  <div className="box_homig_img_bottom position-absolute z_index0"></div>
                  <img
                    style={{ width: "390" }}
                    src={Homing}
                    alt=""
                    className="Homing_Method position-relative z_index2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomingMethod;
