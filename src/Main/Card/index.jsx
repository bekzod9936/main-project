import React from 'react'
import { Card, CardBody, CardImg, CardFooter, CardInfo } from './card'
import add from '../../assets/icon/icon-card/add.png'
import bath1 from '../../assets/icon/icon-card/bath.png'
import bed1 from '../../assets/icon/icon-card/bed.png'
import car from '../../assets/icon/icon-card/car.png'
import love from '../../assets/icon/icon-card/love.png'
import photo from '../../assets/icon/icon-card/photo.png'
import play from '../../assets/icon/icon-card/play-button.png'
import profile from '../../assets/icon/icon-card/profile.png'
import resize from '../../assets/icon/icon-card/resize.png'
import ruler1 from '../../assets/icon/icon-card/ruler.png'

const index = (props) => {
  const { title, country, bed, bath, garage, ruler, mo, price }=props.value;
  return (
    <>
      <Card>
        <CardImg>
          <button>FEATURED</button>
          <img src={profile} />
          <button>FOR SALE</button>
        </CardImg>
        <CardBody>
          <h4>{title}</h4>
          <p>{country}</p>
          <div>
            <CardInfo>
              <img src={bed1} />
              <p>{bed} Beds</p>
            </CardInfo>
            <CardInfo>
              <img src={bath1} />
              <p>{bath} Baths</p>
            </CardInfo>
            <CardInfo>
              <img src={car} />
              <p>{garage} Garage</p>
            </CardInfo>
            <CardInfo>
              <img src={ruler1} />
              <p>{ruler} Sq Ft</p>
            </CardInfo>
          </div>
        </CardBody>
        <CardFooter>
          <div>
            <p>{mo}/mo</p>
            <h1>{price}/mo</h1>
          </div>
          <div>
            <img src={resize} />
            <img src={add} />
            <img src={love} />
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default index
