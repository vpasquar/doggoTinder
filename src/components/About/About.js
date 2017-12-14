import React from 'react';
import './About.css'

// create stateless (functional) component called About
const About = () =>
 <div>
    <main className="wrapper">
      <div className="hero text-center">
          <h1> DoggoMatch </h1>
          <h2> Find a Furry Friend! </h2>
      </div>
      <div className="body-container">
          <h1>Home Page</h1>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit,
           lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui
           fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus
           mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec
           nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula
           in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec
           nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum
           molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In
           elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum
           primis in faucibus.
          </p>
       </div>
     </main>
       <div className="footer">
          <span> DoggoMatch 2017 </span>
       </div>
 </div>


export default About;
