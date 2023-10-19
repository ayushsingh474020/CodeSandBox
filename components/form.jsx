import React from "react";

function Form() {
  return (
    <form action="/" method="post">
      <input type="text" name="city" id="city" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
