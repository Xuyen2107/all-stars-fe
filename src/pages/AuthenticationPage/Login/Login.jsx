import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import useLogin from "../../../hooks/useLogin.js";
import Input from "../../../components/Input/Input.jsx";
import Button from "../../../components/Button/Button.jsx";
import styles from "./Login.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email does not valid")
    .required("Email is required"),

  password: Yup.string().required(),
});

const Login = () => {
  const { loading, error, onSubmit } = useLogin();
  const { values, handleSubmit, handleChange, isValid, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => onSubmit(values),
    validationSchema: LoginSchema,
  });

  return (
    <div className={styles.login}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-purple-500">
          Login your account
        </h2>

        <Input
          labelName="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          err={errors.email}
        />

        <Input
          labelName="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          err={errors.password}
        />

        {error && <p className="to-red-600">{error}</p>}
        <Button
          className="mt-5 cursor-pointer"
          type="submit"
          disabled={!isValid}
        >
          {loading ? "Loading..." : "Login"}
        </Button>

        <div className="columns-1 mt-4 ">
          <div className="flex gap-1 mt-2">
            <p className="text-white">Forgot password?</p>
            <NavLink
              className="text-purple-500 hover:text-purple-600"
              to="/forgot-password"
            >
              Click here
            </NavLink>
          </div>
          <div className="flex gap-1 mt-2">
            <p className="text-white">You don't have account?</p>
            <NavLink
              className="text-purple-500 hover:text-purple-600"
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
