import React from "react";
import "../../scss/product.scss";
import arrow from "../../svgs/ProductSection/WhiteArrow.svg"
import {Link} from "react-router-dom"

const ProductSection = () => {
  return (
    <>
     <div className="product-container">
       <Link to="/" className="product-top">
         <img src={arrow} alt="arrow" className="product-arrow"/>
       <h1 className="product-header-main">
          Products
       </h1>
       </Link>
       <div
              className="product-details "
            >
              <div className="product-row">
                <div className="product-col">
                  <p className="product-header">CRM and Customer Experience</p>
                  <ul>
                    <li>Customer Data</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Sales</li>
                    <li>Service</li>
                  </ul>
                </div>
                <div className="product-col">
                  <p className="product-header">Human Capital Module</p>
                  <ul>
                    <li>Employee Experience Management</li>
                    <li>Core HR and Payroll with ESS</li>
                    <li>Talent Management</li>
                    <li>HR Analytics and Workforce Planning</li>
                    <li>Sales Performance Management</li>
                  </ul>
                </div>
              </div>
              <div className="product-row">
                <div className="product-col">
                  <p className="product-header">Financial Management</p>
                  <ul>
                    <li>Financial Planning and Analysis</li>
                    <li>Accounting and Financial Close</li>
                    <li>Treasury Management</li>
                    <li>Accounts Receivable, Billing and Revenue Management</li>
                    <li>
                      Governance, Risk, Compliance (GRC), and Cybersecurity
                    </li>
                  </ul>
                </div>
                <div className="product-col">
                  <p className="product-header">Supply Chain Management</p>
                  <ul>
                    <li>Supply Chain Planning</li>
                    <li>Supply Chain Logistics</li>
                    <li>Manufacturing</li>
                    <li>Product Lifecycle Management</li>
                    <li>Enterprise Asset Management</li>
                  </ul>
                </div>
              </div>
              <div className="product-row">
                <div className="product-col">
                  <p className="product-header">Business Technology Platform</p>
                  <ul>
                    <li>Application Development and Automation</li>
                    <li>Extended Planning and Analysis</li>
                    <li>Data and Analytics</li>
                    <li>Integrations</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>
                <div className="product-col">
                  <p className="product-header">Workflow Automation</p>
                  <ul>
                    <li>Business Network</li>
                    <li>Intelligent Enterprise</li>
                    <li>Manufacturing</li>
                    <li>Product Lifecycle Management</li>
                    <li>Enterprise Asset Management</li>
                  </ul>
                </div>
              </div>
            </div>
     </div>
    </>
  );
};

export default ProductSection;
