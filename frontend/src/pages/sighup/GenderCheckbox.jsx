import React from "react";

function GenderCheckbox({onCheckboxChange,selectedGender}) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender==="male"?"selected":""}`}>
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            checked={selectedGender=='male'}
            onChange={()=>onCheckboxChange('male')}
           
            className="checkbox  checkbox-info"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender==="female"?"selected":""}`}>
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            checked={selectedGender=='female'}
            onChange={()=>onCheckboxChange('female')}
           
            className="checkbox checkbox-info"
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
