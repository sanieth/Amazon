import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* < className="home__row"> */}
          {/* <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          /> */}
         <div className="home__row">
        
         <Product
            id="12321341"
            title="First Drive Lambo Concept 12v Kids Cars - Dual Motor Electric Power Ride On Car with Remote, MP3, Aux Cord, Led Headlights, and Premium Wheel (White) "
            price={264.94}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Q7mVgCeKL._AC_SX425_.jpg"
            />
         
         <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
        
      
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Happy Sailed Women Long Sleeve Ruffle Layer Backless Swing Mini Dress S-XL"
            price={39.99}
            rating={5}
            image="		https://images-na.ssl-images-amazon.com/images/I/414ZkpKeA3L._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          </div>
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="	https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
               <Product
          id="8903851"
            title="ASUS VivoBook Flip 14 Thin and Light 2-in-1 Laptop, 14” FHD Touch, 11th Gen Intel Core i3-1115G4, 4GB RAM, 128GB SSD, Thunderbolt 4" 
           price={472.99}
         rating={5}
            image="		https://m.media-amazon.com/images/I/71eyqrWrDpS._AC_UY218_.jpg"
           />
          <Product
             id="23445930"
          title="Professional Blowout Hair Dryer Brush, Black Gold Dryer and Volumizer, Hot Air Brush for Women, 75MM Oval Shape"
          price={98.99}       
            rating={5}
            image="https://m.media-amazon.com/images/I/81cgrv6bNFS._SX425_.jpg
          "
          /> 
        </div>
      </div>
   
  );
}

export default Home;










// import React from 'react'
// import './Home.css'
// import Product from './Product'
// function Home() {
//     return (
//         <div className="home">
//             <div className="home__container">
//         <img
//           className="home__image"
//           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//           alt=""
//         /> 
//          <div className="home__row">
//           <Product
//             id="12321341"
//             title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
//             price={1669}
//             rating={5}
//             image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
//           />
//           <Product
//             id="49538094"
//             title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
//             price={159.99}
//             rating={4}
//             image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
//           />
//         </div>
//         <div className="home__row">
//           <Product
//             id="4903850"
//             title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
//             price={499.99}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
//           />

//           <Product
//             id="99903850"
//             title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
//             price={139.99}
//             rating={4}
//             image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
//           />
//           <Product
//             id="3254354345"
//             title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
//             price={598.99}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
//           />
//         </div>
//         <div className="home__row">
//           <Product
//             id="90829332"
//             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
//             price={1094.98}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
//           />
        // </div>
        // <div className="home__row">
        //   <Product
        //     id="903850"
        //     title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
        //     price={69.99}
        //     rating={5}
        //     image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
        //   />
//           <Product
//             id="8903851"
//             title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
//             price={999.99}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
//           />
//           <Product
//             id="23445930"
//             title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
//             price={98.99}
//             rating={5}
//             image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
//           />
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Home
