import React from "react";
import {Link} from "react-router-dom";

class TaxReturnFilings extends React.Component {
  render() {
    return (
      <div>
        <div class="content-page">
          {/* Start content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <h4 className="page-title"><span style={{ color: '#350ad0' }}>Tax Return Filings</span> :- Tax Return Filings</h4>
                  </div>
                </div>
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="popular">
                    <ul>
                      <li><Link to="/PersonalorIndividualIncomeTaxFiling">Personal or Individual Income Tax Filing</Link></li>
                      <li><Link to="/BusinessIncometaxFiling">Business Income tax Filing</Link></li>
                      <li><Link to="/CompanyIncometaxFiling">Company Income tax Filing</Link></li>
                      <li><Link to="/TDSFiling">TDS Filing</Link></li>
                      <li><Link to="/GSTReturnFiling">GST Return Filing</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaxReturnFilings;