import { useContext, useState } from "react";
import AuthContext from "../context/authContext/authContext";
import authAPI from "../apis/authAPI";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { handleLogin } = useContext(AuthContext);

  const onSubmit = async (values) => {
    console.log("🚀 ~ file: useLogin.js:10 ~ onSubmit ~ values:", values);

    try {
      setLoading(true);
      setError(null);
      const response = await authAPI.login(values);
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      await handleLogin();
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, onSubmit };
};

export default useLogin;
