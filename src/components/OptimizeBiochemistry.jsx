import React from "react";
import starxl from "../assets/img/svg/StarXL.svg";
import starSM from "../assets/img/svg/StarSM.svg";
import eyeXL from "../assets/img/svg/EyeXL.svg";
import eyeSm from "../assets/img/svg/eyeSM.svg";

function OptimizeBiochemistry() {
  return (
    <>
      <section className=" py-5 position-relative overflow-hidden">
        <div className=" z_index1 green_layer_Optmz Green_Layer_Commn position-absolute"></div>
        <div
          className=" container position-relative border_rounded_Custom"
          style={{ backgroundColor: " #162321" }}>
          <img
            src={starxl}
            alt="err"
            className="starXl_optim position-absolute "
          />
          <img
            src={starSM}
            alt="err"
            className="starXl2_optim position-absolute "
          />
          <img
            src={starSM}
            alt="err"
            className="starXl3_optim position-absolute "
          />
          <img
            src={eyeXL}
            alt="err"
            className="eyeXl_optim position-absolute "
          />
          <img
            src={eyeSm}
            alt="err"
            className="eyeSM_optim position-absolute "
          />
          <div className=" text-center py-5 position-relative z_index3">
            <h2 className=" heading-common mt-xl-3">Optimize Biochemistry</h2>
            <p
              style={{ maxWidth: "587px", lineHeight: "160%" }}
              className=" peragraph_common mx-auto mb-5 pt-1 mt-2">
              Lectus adipiscing pulvinar et praesent justo libero luctus tortor.
              A semper feugiat non dui ut egestas eu. Euismod eu fames ante in
              vestibulum duis in odio. Amet pharetra mauris at pellentesque.
              Netus libero nulla eu id.
            </p>
            <span className=" d-inline-block position-relative z_index1 ">
              <a className=" common_btn " href="">
                Book Call
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default OptimizeBiochemistry;
