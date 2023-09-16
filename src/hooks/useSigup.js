import { useState } from "react";
import authAPI from "../apis/authAPI";
import { Navigate, useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      setErr(null);
      const res = await authAPI.register(values);
      console.log("res:", res);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setErr(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, err, onSubmit };
};
export default useSignup;
