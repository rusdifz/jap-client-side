import { useState } from "react";
import { useSelector } from "react-redux";
// import { selectProperties } from "../redux/features/propertySlice";
import { selectOffices } from "@/redux/features/officeSlice";

const UseOffice = () => {
  const [offices, setOffices] = useState(useSelector(selectOffices));
  return {
    offices,
    setOffices,
  };
};

export default UseOffice;
