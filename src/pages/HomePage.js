import React from 'react';
import Form from "@rjsf/material-ui";
import TestForm from "../formSchemas/test.json"
import { Storage } from 'aws-amplify';

function HomePage() {

  const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);
  Storage.list()
    .then(result=>console.log(result))

    
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
