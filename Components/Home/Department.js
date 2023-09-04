import React from "react";

const Department = () => {
  return (
    <div className="mb-5 px-3 mt-4 mt-md-0">
      <div className="secondary-bg-color department text-center rounded  shadow-sm pt-5 pb-4 px-4">
        <img
          src="/department-icon.png"
          alt="Department Icn"
          width="100"
          className="custon-top w-50 rounded-circle mb-3"
        />
        <h4 className="department-heading mb-0 paragraph-color mb-3">
          Center Treatment
        </h4>
        <p className="primary-color text-decoration-underline">Find Service</p>
      </div>
    </div>
  );
};

export default Department;
