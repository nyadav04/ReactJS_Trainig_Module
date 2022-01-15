import React, { forwardRef } from "react";

function InputForm(props, ref) {
  return <input type="text" ref={ref} placeholder="Enter text" />;
}

export default forwardRef(InputForm);
