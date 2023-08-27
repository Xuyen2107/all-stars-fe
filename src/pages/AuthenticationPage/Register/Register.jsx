import { useFormik } from "formik";
import useLogin from "../../../hooks/useLogin.js";
import * as Yup from "yup";
import Input from "../../../components/Input/Input.jsx";
import Button from "../../../components/Button/Button.jsx";

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  email: Yup.string()
    .email("Email does not valid")
    .required("Email is required"),
  password: Yup.string().min(6).required(),
});

const Register = () => {
  const { loading, error, onSubmit } = useLogin();
  const { values, handleSubmit, handleChange, isValid, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: "",
    },
    onSubmit: (values) => onSubmit(values),
    validationSchema: RegisterSchema,
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div>
          <Input
            labelName="Fullname"
            id="fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors?.fullname && (
            <p className="text-red-500 text-sm mt-1 ">{errors.fullname}</p>
          )}
        </div>

        <div>
          <Input
            labelName="Email"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1 ">{errors.email}</p>
          )}
        </div>
        <div>
          <Input
            labelName="Password"
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors?.password && (
            <p className="text-red-500 text-sm mt-1 ">{errors.password}</p>
          )}
        </div>
        {error && <p className="to-red-600">{error}</p>}
        <Button className="w-full mt-5" type="submit" disabled={!isValid}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
