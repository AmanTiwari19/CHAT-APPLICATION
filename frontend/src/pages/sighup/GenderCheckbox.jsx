import React from "react";

function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
