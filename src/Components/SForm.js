import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import './SForm.css';

const emptyFormValues = {
  name: "",
  email: "",
  PhoneNumber: "",
  StreetAddress: "",
  StreetAddress2: "",
  AddressCity: "",
  AddressStateProv: "",
  AddressZipPostal: "",
  VehicleMakeandModel: "",
  Year: "",
  Color: "",
  size: "",
  Condition: "",
  sPackage: "",
  rDate: "",
  rTime: "",
  addComments: ""
};

const emptyErrs = {
  name: "",
  email: "",
  PhoneNumber: "",
  StreetAddress: "",
  AddressCity: "",
  AddressStateProv: "",
  AddressZipPostal: "",
  VehicleMakeandModel: "",
  Year: "",
  Color: "",
  size: "",
  Condition: "",
  sPackage: "",
  rDate: "",
  rTime: ""
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Must enter name")
    .min(2, "name must be at least 2 characters"),

  email: yup
    .string()
    .email("Your email is invalid. Try again.")
    .required("Email is required"),

  PhoneNumber: yup
    .string()
    .required("Must enter phone number")
    .min(7, "Phone number must be at least 7 digits"),

 

  VehicleMakeandModel: yup
    .string()
    .required("This is required")
    .min(2, "This is required")
    .required(),

  Year: yup
    .string()
    .required("This is required")
    .min(4, "This is required")
    .required(),

  Color: yup
    .string()
    .required("This is required")
    .min(2, "This is required")
    .required(),

  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large", "Extra Large"])
    .required("Must choose one"),

  Condition: yup.string().required("Must choose one"),

  sPackage: yup.string().required("Must choose one"),

  requestDate: yup
    .string()
    .required("This is required")
    .min(7, "This is required"),
    
  requestTime: yup
    .string()
    .required("This is required")
    .min(3, "This is required"),
    
  addComments: yup.string().min(0, "")
});

export default function App(props) {
  const { values, submit, change, errors } = props;

  const [formValues, setFormValues] = useState("emptyFormValues");

  const [errs, setErrors] = useState("emptyErrs");

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    change(name, newValue);
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/LoveDetailingAppointments", formValues)
      .then((res) => {
        console.log(res.setFormValues(emptyFormValues));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {});
  }, [formValues]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errs, [name]: "" });
      })
      .catch((err) => setErrors({ ...errs, [name]: err.errors[0] }));
  };



  return (
    
    <form  className="SchedForm1" style={{color:'white'}} id="ScheduleForm" onSubmit={submit}>
      <div className="form-inputs">
        <h2>Personal Information</h2>
        <label>
          First & Last Name
          <input
            type="text"
            name="name"
            data-cy="form-inputs-fname"
            // value= "name1"
            change={onChange}
            placeholder=""
          />
        </label>

        <br></br>


        <br></br>

        <label>
          Email
          <input
            type="email"
            name="email"
            data-cy="form-inputs-email"
            change={onChange}
            // value="email"
            placeholder=""
          />
        </label>

        <br></br>
        <br></br>

        <label>
          Phone
          <input
            type="text"
            name="PhoneNumber"
            data-cy="form-inputs-phone"
            // value="pnumber"
            change={onChange}
            placeholder="000-000-0000"
          />
        </label>

        <br></br>

       
      </div>

      <div className="form-inputs">
        <h2>Service Information</h2>
        
        <label>
          Year
          <input
            type="text"
            name="Year"
            data-cy="form-inputs-Year"
            // value="year"
            change={onChange}
            placeholder="yyyy"
          />
        </label>
        

        <br></br>
        <br></br>

        <label>
          Vehicle Make 
          <input
            type="text"
            name="VehicleMake"
            data-cy="form-inputs-VehicleMake"
            // value="vmm"
            change={onChange}
            placeholder="Toyota"
          />
        </label>

        <br></br>
        <br></br>

        <label>
          Model
          <input
            type="text"
            name="Model"
            data-cy="form-inputs-Model"
            // value="vmm"
            change={onChange}
            placeholder="Corolla"
          />
        </label>

        <br></br>
        <br></br>


        <label>
          Color
          <input
            type="text"
            name="Color"
            data-cy="form-inputs-Color"
            // value="vcolor"
            change={onChange}
            placeholder=""
          />
        </label>
      </div>

      <div className="vehicleSize">
        <h3>Size Of Vehicle</h3>
        {/* <p>Required</p> */}
        <select  change={onChange} name="size" id="size-dropdown" value="size">
          <option value="">-Select A Size-</option>
          <option value="Small Car">Small Car</option>
          <option value="Medium Car">Medium Car</option>
          <option value="Crossover SUV">Crossover SUV</option>
          <option value="Truck">Truck</option>
        </select>
        {/* <p style={{ color: "red" }}>{errors.size}</p> */}
      </div>

      <div className="vehicleCondition">
        <h3>Condition Of Vehicle</h3>
        {/* <p>Required</p> */}
        <select
        
          change={onChange}
          name="Condition"
          id="Condition-dropdown"
          value="condition"
        >
          <option value="">-Select A Condition-</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
        {/* <p style={{ color: "red" }}>{errors.condition}</p> */}
      </div>

      <div className="ServicePackage">
        <h3>Choose A Service Package</h3>
        {/* <p>Required</p> */}
        <select
        
          change={onChange}
          name="sPackage"
          id="sPackage-dropdown"
          value="spackage"
        >
          <option value="">-Select A Service Package-</option>
          <option value="Standard Interior/Exterior Detail">Standard Interior/Exterior Detail</option>
          <option value="Full Interior/Exterior Detail">Full interior/Exterior Detail</option>
          <option value="Complete Interior/Exterior Protection">Complete Interior/Exterior Protection</option>
          <option value="Ceramic Coatings">Ceramic Coatings</option>
        </select>
        {/* <p style={{ color: "red" }}>{errors.spackage}</p> */}
      </div>

      <div className="form-inputs">
        {/* <label>
          Request a Date
          <input
            type="text"
            name="requestDate"
            data-cy="form-inputs-requestDate"
            // value="rDate"
            change={onChange}
            placeholder="Request Date"
          />
        </label>

        <br></br>

        <label>
          Request a Time
          <input
            type="text"
            name="requestTime"
            data-cy="form-inputs-requestTime"
            // value="rTime"
            change={onChange}
            placeholder="Request Time"
          />
        </label> */}

        <br></br>

        <label>
          Additional Comments
          <input
            type="text"
            name="addComments"
            data-cy="form-inputs-addComments"
            // value="addComment"
            change={onChange}
            placeholder="Additional Comments"
          />
        </label>
      </div>

        <div classsName="btnSubmit">
      <button 
      style={{color:'black'}} 
       class="btn btn-primary btn-lg btn-block text-center"
       type="submit"
        data-cy="btnSubmit"
        // value="btnSubmit"
        onSubmit={() => handleSubmit()}
      >
        Submit!
      </button>
      </div>
    </form>
    
  );
}
