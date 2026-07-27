import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", ""]);
  const otpRef = useRef([]);
  const handleKeyDown = (e, ind) => {
    debugger;
    console.log("Block key", e?.key);
    if(e.key == 'ArrowRight'){
        if (ind < 2) otpRef.current[ind + 1].focus();
    } else if (e.key == 'ArrowLeft') {
        if (ind > 0)  otpRef.current[ind - 1].focus();
    }
    if (e.key === "Backspace") {
      if (ind > 0) {
        otpRef.current[ind - 1].focus();
      }
      setOtp((prev) => {
        let newOtp = [...prev];
        newOtp[ind] = "";
        return newOtp;
      });
    } else if ("0123456789".includes(e.key)) {
      if (otp[ind] == "") {
        setOtp((prev) => {
          let newOtp = [...prev];
          newOtp[ind] = e.key;
          return newOtp;
        });
        if (ind < 2) otpRef.current[ind + 1].focus();
      }
    }
  };
  return (
    <MainCntr>
      {otp.map((el, ind) => {
        return (
          <input
            type="number"
            value={otp[ind]}
            ref={(ref) => (otpRef.current[ind] = ref)}
            maxLength={1}
            onKeyDown={(e) => handleKeyDown(e, ind)}
          />
        );
      })}
    </MainCntr>
  );
}

const MainCntr = styled.div`
  width: 15rem;
  height: 4rem;
  background-color: aliceblue;
  display: flex;
  gap: 1rem;
  input {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
