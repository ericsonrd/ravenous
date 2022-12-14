import React from "react";
import "./BusinessList.css";
import Business from "../business/Business.js";

// ---------- BusinessList Component ---------- //

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList"> 
                {
                    this.props.businesses.map((business) => {
                        return <Business business={business} key={business.id} />;
                    })
                }
          </div>
         );
    }
};

// ---------- Export BusinessList Component ---------- //
export default BusinessList;

// ercsn //