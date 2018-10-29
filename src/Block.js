import React, { memo } from "react";
export default memo(props => (
  <div className={props.classes.join(" ")}>{props.value}</div>
));
