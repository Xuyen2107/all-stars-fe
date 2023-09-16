import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../../components/Input/Input.jsx";
import Button from "../../../components/Button/Button.jsx";
import styles from "./Register.module.css";
import useSignup from "../../../hooks/useSigup.js";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Email does not valid")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^0\d{9}$/, "not")
    .required(),
  password: Yup.string().min(6).required(),
});

const Register = () => {
  const { loading, err, onSubmit } = useSignup();
  const { values, handleSubmit, handleChange, isValid, errors, getFieldProps } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        phone: "",
        password: "",
      },
      onSubmit: (values) => onSubmit(values),
      validationSchema: RegisterSchema,
    });

  return (
    <div className={styles.register}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-purple-500">
          Register to make friends
        </h2>

        <Input
          labelName="Full Name"
          type="text"
          name="username"
          {...getFieldProps("username")}
          err={errors.username}
        />

        <Input
          labelName="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          err={errors.email}
        />

        <Input
          labelName="Phone Number"
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          err={errors.phone}
        />

        <Input
          labelName="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          err={errors.password}
        />

        {err && <p className="to-red-600">{err}</p>}
        <Button
          className="mt-5 cursor-pointer"
          type="submit"
          disabled={!isValid}
        >
          {loading ? "Loading..." : "Sign up"}
        </Button>

        <div className="flex gap-1 mt-2">
          <p className="text-white">You have account?</p>
          <NavLink
            className="text-purple-500 hover:text-purple-600"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
