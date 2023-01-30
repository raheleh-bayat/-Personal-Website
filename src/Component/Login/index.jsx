import { useState ,useEffect} from "react";
import "./login.css";

export const Login =()=>{
  const initialValues = {email:"", password:""};
  const[formValues, setFormValue]=useState(initialValues);
  const[formErrors, setFormErrors]=useState({});
  const[isSubmit, setIsSubmit]=useState(false);
  const handleChange= (ev) => {
    const {name, value}= ev.target;
    setFormValue({...formValues , [name]:value})
    console.log(formValues);
  }

  const hanhleSubmit =(ev) => {
    ev.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true );
  }
  useEffect(()=>{
    console.log(formErrors); 
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const Validate = (values) => {
    const errors ={};
    const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    if(!values.email){
    errors.email ="email is required";
    }else if(!regex.test(values.email)){
      errors.email ="this is not a valid email format!";
    }

    if(!values.password){
      errors.password ="password is required";
      }else if(values.password < 4){
        errors.password ="password must be more than 4 characters! ";
      }else if(values.password > 10){
        errors.password ="password cant not exceed more than 10 characters! ";
      }
      return errors;
  }
    return(
        <div>
          {Object.keys(formErrors).length === 0 && isSubmit ? <div className="ui message success ">signed is successfully </div>
           : (

              <pre>{JSON.stringify(formValues, undefined , 2)}</pre>
          )}
         
        <form className="form-login animate" onSubmit={hanhleSubmit} >
        <div className="form-group form-inner">
          <label for="exampleInputEmail1">Email address</label>
          <input 
          type="text" 
          name="email"
          class="form-control" 
          aria-describedby="emailHelp" 
          placeholder="Enter email" 
           value={formValues.email}
           onChange={handleChange}
           />
        </div>
        <p className="form-error">{formErrors.email}</p>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input 
          type="text"
            name="password"
            class="form-control" 
            placeholder="Password" 
             value={formValues.password}
             onChange={handleChange}
             />
        </div>
        <p className="form-error">{formErrors.password}</p>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}
