import react from 'react';
import './Footer.css';
import Image from '../images/imginstagram.png'
import ImageFace from '../images/ImageFacebook.png'
import ImageTwitter from '../images/ImamgeTwitter.png'
function Footer(){
    return(
        <footer className='footerArea'>
            <div className='contentArea'>
                <h2 id='SobreOCanil'>Sobre o Canil Seguro</h2>
                <h2 id='Cbkc'>Confederação Brasileira de cinofilia (CBKC)</h2>
            </div>
            
            
            <div className='imgArea'>
              <img id='Instagram' src={Image}/>
              <img id='Facebook' src={ImageFace}/>
              <img id='Twitter' src={ImageTwitter}/>
            </div>
        </footer>
        
        
    )
}
export default Footer
