import React, {Component} from "react";
import location from "../images/location.png"
import "./JournalEntry.css"


class JournalEntry extends Component {
   render() {
      return (
         <section className="journal--entry">
            <img src={this.props.item.imageUrl} className="entry--image" alt="Entry Image"/>
            <section className="entry--body">
               <section className="desc--location">
                  <img src={location} className="location--icon" alt="icon"/>
                  <span className="location--country">{this.props.item.country}</span>
                  <a href={this.props.item.googleMaps} className="location--google">View on Google Maps</a>
               </section>
               <h2 className="entry--title">{this.props.item.location}</h2>
               <p className="entry--date">{this.props.item.startDate} - {this.props.item.endDate}</p>
               <p className="entry--description">{this.props.item.desc}</p>
            </section>
         </section>
      );
   }
}

export default JournalEntry;