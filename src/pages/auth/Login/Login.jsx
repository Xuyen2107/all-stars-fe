import CustomInput from "../../../components/layouts/CustomInput/CustomInput.jsx";
import LoginHook from "./LoginHook.js";

const Login = () => {
   const { loading, error, formik } = LoginHook();
   const { handleSubmit, handleChange, values } = formik;
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <h4>Hello</h4>
            <CustomInput
               labelName="Email"
               type="email"
               id="email"
               name="email"
               value={values.email}
               onChange={handleChange}
            />
            <CustomInput
               labelName="Password"
               type="password"
               id="password"
               name="password"
               value={values.password}
               onChange={handleChange}
            />
            {error && <p className="to-red-600">{error}</p>}
            <button type="submit">{loading ? "Loading..." : "Login"}</button>
         </form>
      </div>
   );
};

export default Login;
