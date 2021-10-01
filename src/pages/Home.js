/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => (
  <Route path="/">
    <div className="container">
      <h1>Welcome to our page!</h1>
      <p>
      It is important to be aware of the character of the sources for the study of the history of mathematics.
      The history of Mesopotamian and Egyptian mathematics is based on the extant original documents written by scribes. 
      Although in the case of Egypt these documents are few, they are all of a type and leave little doubt that Egyptian mathematics was, on the whole, 
      elementary and profoundly practical in its orientation. For Mesopotamian mathematics, on the other hand, there are a large number of clay tablets, 
      which reveal mathematical achievements of a much higher order than those of the Egyptians. The tablets indicate that the Mesopotamians had a great deal of remarkable mathematical knowledge, 
      although they offer no evidence that this knowledge was organized into a deductive system. Future research may reveal more about the early development of mathematics in Mesopotamia or about its influence on Greek mathematics, 
      but it seems likely that this picture of Mesopotamian mathematics will stand.Ancient mathematical sources

      </p>
    </div>
  </Route>
);
export default Home;
