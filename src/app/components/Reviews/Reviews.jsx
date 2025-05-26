import React, { useRef } from 'react'
import './Reviews.css'
import profile from '../../assets/profile.png'
import stars from '../../assets/stars.png'
import back from '../../assets/back.png'
import next from '../../assets/next.png'

const Reviews = () => {

  const reviews = useRef();
  let tx = 0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  reviews.current.style.transform = `translateX(${tx}%)`
}
const slideBackward= ()=>{
  if(tx < 0){
    tx += 25;
  }
  reviews.current.style.transform = `translateX(${tx}%)`
}

  return (
    <>
    <h1>Arvustused</h1>
    <div className='testimonials'>
      <img src={next} className='next-btn' onClick={slideForward}/>
      <img src={back} className='back-btn' onClick={slideBackward}/>
      <div className='reviews'>
        <ul ref={reviews}>
          <li>
            <div className='review'>
                <div className='user-info'>
                  <img src={profile}/>
                  <div>
                  <h3>Brandon Wardell</h3>
                  <span>Tallinn, Estonia</span>
                  </div>
                </div> 
                  <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, maiores. Aliquid, veritatis itaque temporibus nesciunt quidem sint voluptate mollitia alias maxime rerum incidunt accusamus officia minus architecto! Quo, ab explicabo."</p>
                  <img className="stars" src={stars}/>
            </div>
            </li>
            <li>
            <div className='review'>
              <div className='user-info'>
                <img src={profile}/>
                  <div>
                    <h3>Kenny Aylmer</h3>
                    <span>Tallinn, Estonia</span>
                  </div>
                  </div>
                    <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, maiores. Aliquid, veritatis itaque temporibus nesciunt quidem sint voluptate mollitia alias maxime rerum incidunt accusamus officia minus architecto! Quo, ab explicabo."</p>
                    <img className="stars" src={stars}/>

            </div>
          </li>
          <li>
            <div className='review'>
              <div className='user-info'>
                <img src={profile}/>
                <div>
                    <h3>Toomas Juhan</h3>
                    <span>Tallinn, Estonia</span>
                    </div>
                  </div>
                    <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, maiores. Aliquid, veritatis itaque temporibus nesciunt quidem sint voluptate mollitia alias maxime rerum incidunt accusamus officia minus architecto! Quo, ab explicabo."</p>
                    <img className="stars" src={stars}/>
              </div>
            </li>
            <li>
            <div className='review'>
              <div className='user-info'>
                <img src={profile}/>
                <div>
                    <h3>Jaylyn Sheldon</h3>
                    <span>Tallinn, Estonia</span>
                    </div>
                  </div>
                    <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, maiores. Aliquid, veritatis itaque temporibus nesciunt quidem sint voluptate mollitia alias maxime rerum incidunt accusamus officia minus architecto! Quo, ab explicabo."</p>
                    <img className="stars" src={stars}/>
              </div>
            </li>
          </ul>
        </div>  
    </div>
    </>
  )
}

export default Reviews