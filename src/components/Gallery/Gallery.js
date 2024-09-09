import './Gallery.css';
import photo from '../../assets/images/test.JPEG'
import photo2 from '../../assets/images/test2.JPEG'
import photo3 from '../../assets/images/test3.JPEG'
import photo4 from '../../assets/images/test4.JPEG'

const Gallery = () => {
    return (
      <div className="Gallery"> 
        <div className="photo-container">
            <div className="photo-card">
                <img className="photo" src={photo} alt="testing"/>
                <div className="photo-card-body" >
                    <h1>Dole Plantation, Hawaii</h1>
                    <p>8/29/24</p>
                </div>
            </div>
            <div className="photo-card">
                <img className="photo" src={photo3} alt="testing"/>
                <div className="photo-card-body" >
                    <h1>Dole Plantation, Hawaii</h1>
                    <p>8/29/24</p>
                </div>
            </div>
            <div className="photo-card">
                <img className="photo" src={photo4} alt="testing"/>
                <div className="photo-card-body" >
                    <h1>Dole Plantation, Hawaii</h1>
                    <p>8/29/24</p>
                </div>
            </div>
            <div className="photo-card">
                <img className="photo" src={photo2} alt="testing"/>
                <div className="photo-card-body" >
                    <h1>State Capitol, Hawaii</h1>
                    <p>8/28/24</p>
                </div>
            </div>
        </div>  
      </div>
    )
  }

export default Gallery;
