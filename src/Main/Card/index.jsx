import React from 'react'
import { Card, CardBody, CardImg, CardFooter, CardInfo, WrapImg } from './card'
import add from '../../assets/icon/icon-card/add.svg'
import bath1 from '../../assets/icon/icon-card/bath.svg'
import bed1 from '../../assets/icon/icon-card/bed.svg'
import car from '../../assets/icon/icon-card/car.svg'
import love from '../../assets/icon/icon-card/love.svg'
import photo from '../../assets/icon/icon-card/photo.svg'
import play from '../../assets/icon/icon-card/play-button.svg'
import resize from '../../assets/icon/icon-card/resize.svg'
import ruler1 from '../../assets/icon/icon-card/ruler.svg'

const index = (props) => {
  const { title, country, bed, bath, garage, ruler, mo, price }=props.value;
  return (
      <Card>
        <CardImg>
          <button>FEATURED</button>
          <WrapImg><div></div></WrapImg>
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
  )
}

export default index
