"use client"
import React, { useState } from "react";
import VehicalSection from "../vehicalSection";
import InspectedForm from "../inspectedForm";

const MainSection: React.FC = () => {
  const [vehicalType, setVehicalType] = useState<string>("");

  const handleType = (val: string) => {
    setVehicalType(val);
  };
  
  return (
    <div>
      <VehicalSection setSelectVehical={handleType} />
      <InspectedForm vehicalType={vehicalType} />
    </div>
  );
};

export default MainSection;
