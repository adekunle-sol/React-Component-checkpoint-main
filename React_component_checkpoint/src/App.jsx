import React from 'react';
import data from './data';
import Card from 'react-bootstrap/Card';
import Name from './component/Name';
import Price from './component/Price';
import Description from './component/Description';
import Image from './Image';
import Product from './component/product';
import david from './assets/david.jpg'

const App = () => {
  
  return (
    <>
 {data.map((product, index) => {
            return <Card key={index} style={{ width: '18rem', display: 'flex' }}>
           
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.product_dec}</Card.Subtitle>
                    <Card.Text>
                     Bag Sack Laptop Backpack

                    </Card.Text>
                    <Card.Img src={david} alt='Bag' className='Card-img-top'  />
                    <Card.Link href="#">Read More ...</Card.Link>
                </Card.Body>
               
            </Card> 
           
        })}
    
    </>

  )
}

export default App