import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBNavbar light  style={{background:"grey"}}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
            <img  style={{height:'4rem',color:'black'}} src="https://home.yafreeka.com/assets/imgs/logos/monst-logo.png" alt="" />
     
        </MDBNavbarBrand>
       
      </MDBContainer>
    </MDBNavbar>
  );
}