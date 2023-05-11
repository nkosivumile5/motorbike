import React, {useState} from 'react'
import './Card.css'

function Card() {
    const [toggle, setToggle] = useState(false)

    const products = [
        {name: '', price: 'R310,700', image: 'https://www.motorhype.co.uk/wp-content/uploads/2021/07/Used-motorbikes-1.jpg'},
        {name: '', price: 'R12650,00', image: 'https://cdn.shopify.com/s/files/1/0003/3151/3875/collections/motorbikes.jpg?v=1586199980'},
        {name: '', price: 'R47950,00', image: 'https://detailingadelaide.com.au/wp-content/uploads/2018/12/Motorbike-cleaning-Adelaide.jpg'},
        {name: '', price: 'R300,000', image: 'https://m.atcdn.co.uk/ect/media/w1024/d42291348f79457182dde8b63f525e1f_50cc.jpg'},
        {name: '', price: 'R273,000', image: 'https://www.motorcycle.com/blog/wp-content/uploads/2021/02/Ultra-Limited_crop.jpg'},
        {name: '', price: 'R52517,37', image: 'https://hdavidson.co.za/wp-content/uploads/2023/03/6716f230-4d22-436a-b686-2c67f60fa638.jpg'},
        {name: '', price: 'R19736,21', image: 'https://www.motorcyclecruiser.com/resizer/YxKDeuSyCgAubxZLnGJsQiak8p4=/arc-photo-octane/arc3-prod/public/NJH5X4FXEVBKXLJSBPANQNWNJA.jpg'},
        {name: '', price: 'R81502,05', image: 'https://electrek.co/wp-content/uploads/sites/3/2022/09/livewire-del-mar-micah-toll-header.jpg?quality=82&strip=all'},
        
    ]

  return (
    <div>
<div className="grid-container">
    {
    products.map(product => {
        return (
            <div cardName="card">
            <img src={product.image} className="card-img-top" alt="..."/>
           <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.price}</p>
    <a href="#" className="btn btn-primary">Cash</a>
  </div></div>
         )
        })
    }
 
</div>
    </div>
  )
}

export default Card;