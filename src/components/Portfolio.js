import React from 'react'
import image1 from "../images/01.jpg";
import image2 from "../images/02.jpg";
import image3 from "../images/03.jpg";
const Portfolio = () => {
    const [state] = React.useState([
        {id: 1, image: image1, name: 'Rahul', expert: 'Flutter'},
        {id: 2, image: image2, name: 'Dubey', expert: 'React'},
        {id: 3, image: image3, name: 'Pandit', expert: 'Vue JS'},
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__section">
                <div className="row">
                <div className="col-4">
                    <div className="portfolio__content">
                        <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                        <h3 className="portfolio__content-h3">OUR TEAM.</h3>
                    </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                                <div className="col-4 pl-15" key={user.id}>
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                            <h5 className="portfolio__card-name">{user.name}</h5>
                            <p className="portfolio__card-expert">{user.expert}</p>
                             </div>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
