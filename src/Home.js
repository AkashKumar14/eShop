import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
      <div>
          <div className="Home">
              <div className="home__container">
                  <img src="https://miro.medium.com/max/1200/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg" alt="" className="home__image" />

                  <div className="home__row">
                      <Product 
                        id="12321341"
                        title= "Acer Predator Helios 300 Core i7 11th Gen"
                        price={100990}
                        rating={5}
                        image="https://rukminim2.flixcart.com/image/312/312/kuvkcy80/computer/x/s/4/na-gaming-laptop-acer-original-imag7whp2f8fgpaz.jpeg?q=70"
                        ></Product>
                      
                      <Product id="12321342"
                        title= "MSI GF63 Thin Core i5 10th Gen "
                        price={63490}
                        rating={5}
                        image="https://rukminim2.flixcart.com/image/312/312/ktlu9ow0/computer/4/n/m/gf63-thin-10uc-607in-gaming-laptop-msi-original-imag6xfuxzmukmuq.jpeg?q=70"></Product>
                      
                      <Product id="12321343"
                        title= "ASUS Asus Vivobook 15 Core i5 11th Gen"
                        price={50990}
                        rating={5}
                        image="https://rukminim2.flixcart.com/image/312/312/l30hmkw0/computer/w/h/w/vivobook-15-laptop-asus-original-image8ajrucyfea5.jpeg?q=70"></Product>
                      
                  </div>
                  <div className="home__row">
                        <Product id="12321344"
                        title= "ASUS ASUS TUF Gaming Core i5 11th Gen"
                        price={75990}
                        rating={5}
                        image="https://rukminim2.flixcart.com/image/312/312/l3rmzrk0/computer/2/o/q/-original-imagetjfvgfsm24g.jpeg?q=70"></Product>
                        
                        <Product id="12321345"
                        title= "acer Nitro 5 Core i7 12th Gen"
                        price={100990}
                        rating={4}
                        image="https://rukminim2.flixcart.com/image/312/312/l1mh7rk0/computer/u/r/m/an515-58-gaming-laptop-acer-original-imagd5zzqqpngwmz.jpeg?q=70"></Product>
                        
                        <Product id="12321346"
                        title= "MSI Alpha 15 Ryzen 7 Octa Core 5800H "
                        price={106990}
                        rating={3}
                        image="https://rukminim2.flixcart.com/image/312/312/ktszgy80/computer/h/0/f/alpha-15-b5eek-029in-gaming-laptop-msi-original-imag72h7uptk3x9t.jpeg?q=70"></Product>
                  </div>
                  <div className="home__row">
                        <Product id="12321347"
                        title= "ASUS ROG Strix Ryzen 9 Octa Core 5900HX"
                        price={117990}
                        rating={4}
                        image="https://rukminim2.flixcart.com/image/312/312/ku4ezrk0/computer/j/5/j/na-gaming-laptop-asus-original-imag7bhddrbuzrvs.jpeg?q=70"></Product>
                  </div>

              </div>
          </div>
      </div>
    );    
  }
  
  export default Home;