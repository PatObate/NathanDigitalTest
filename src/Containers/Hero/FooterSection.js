import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterOption,
  FooterOptions,
} from "../../styled-components/FooterElements";

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterOptions>
        <FooterOption>Privacy Policy</FooterOption>
        <FooterOption>|</FooterOption>
        <FooterOption>Privacy Policy</FooterOption>
      </FooterOptions>
      <FooterContent>
        *Banking services provided by Coastal Community Bank, Member FDIC,
        pursuant to license by Mastercard International Inc. <br />
        Nathan Digital account is FDIC-insured up to $250,000 per depositor
        through Coastal Community Bank, Member FDIC. <br />
        **If you are not a U.S. citizen, you can apply with your passport and
        U.S. Visa. Please note: you must submit an SSN once you receive one. If
        you are a U.S. citizen, SSN is required to open a bank account. <br />
        *** Double cashback bonus (through 12/2022)
        <br />
        <br />
        Please see www.nathandigital.com/terms-and-conditions#creditrnb for
        terms and conditions. Some exclusions apply. <br />
        Please see www.nathandigital.com/terms-and-conditions for terms and
        conditions. <br />
        This benefit is provided by MasterCard. Benefits are subject to terms,
        conditions and limitations, including limitations on the amount of
        coverage. Please see the terms and conditions.‍ <br />
        Nathan Digital estimated annual value <br /> Nathan Digital product
        comparisons <br />
        Nathan Digital Secured Credit Card Graduation Terms: By completing
        milestones customers increase the likelihood and speed you become
        unsecured however Sable will consider additional factors for graduation.
        Meeting all milestones does not guarantee graduation to an unsecured
        credit card. The <br />
        Sable Graduation program may be paused or discontinued at any time, at
        which time all customers will be notified. <br />† Nathan Digital
        Remittance Best Rate Guarantee Terms
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterSection;
