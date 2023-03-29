import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const NotMatch = (props: Props) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/description')
  }, []);
  return <div>NotMatch</div>;
};

export default NotMatch;
