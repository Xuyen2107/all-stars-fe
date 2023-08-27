import { useFormik } from "formik";

import Input from "../../../components/Input/Input.jsx";
import useLogin from "../../../hooks/useLogin.js";
import Button from "../../../components/Button/Button.jsx";

const Login = () => {
  const { loading, error, onSubmit } = useLogin();
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Input
          labelName="Email"
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          labelName="Password"
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {error && <p className="to-red-600">{error}</p>}

        <div className="mt-4 ">
          <Button className="w-full" type="submit">
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
