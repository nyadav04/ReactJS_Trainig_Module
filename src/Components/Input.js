import React, { forwardRef }from "react";
const Input = (props, ref) => (
  <input ref={ref} {...props} type="text" />
)

export default forwardRef(Input);