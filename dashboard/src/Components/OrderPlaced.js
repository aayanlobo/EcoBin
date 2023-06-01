import React from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

import "../Style/style.css";

const OrderPlaced = () => {
  return (
    <>
      {/* <div id="myModal" class="modal fade"> */}
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header">
            <div className="icon-box">
              <i className="material-icons">
                <CheckIcon />
              </i>
            </div>
            <h4 className="modal-title w-100">Awesome!</h4>
          </div>
          <div className="modal-body">
            <p className="text-center">
              Your booking has been confirmed. Check your email for detials.
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success btn-block" data-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default OrderPlaced;
