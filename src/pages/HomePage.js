import React from 'react';
import Form from "@rjsf/material-ui";
import TestForm from "../formSchemas/test.json"

function HomePage() {
  const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);

  return (
    <>
        <Form schema={TestForm} onSubmit={onSubmit}>
          <div />
          <button type="submit">Submit</button>
        </Form>
    </>
  );
}

export default HomePage;
