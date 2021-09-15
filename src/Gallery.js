import React,{useState} from "react";
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.JPG';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img7.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img8.jpg';
import Img8 from './img/img9.jpg';
import Img9 from './img/img10.jpg';
import Img10 from './img/img11.jpg';
import Img12 from './img/img13.jpg';
import Img13 from './img/img14.jpg';
import Img14 from './img/img15.jpg';
import Img15 from './img/img16.jpg';
import Img16 from './img/img17.jpg';
import Img17 from './img/img18.JPG';
import Img18 from './img/img19.jpg';
import Img19 from './img/img20.jpg';
import Img20 from './img/img21.jpg';
import Img21 from './img/img22.JPG';
import Img22 from './img/img23.JPG';
import Img23 from './img/img24.JPG';
import Img24 from './img/img25.JPG';
import Img25 from './img/img26.JPG';
import Img26 from './img/img27.JPG';
import Img27 from './img/img29.jpg';
import Img29 from './img/img30.JPG';
import Img30 from './img/img31.jpg';
import Img31 from './img/img32.jpg';
import Img32 from './img/img33.jpg';
import Img33 from './img/img34.jpg';
import Img34 from './img/img35.jpg';
import Img35 from './img/img36.jpg';
import Img36 from './img/img37.jpg';
import Img37 from './img/img38.jpg';
import Img38 from './img/img39.jpg';
import Img39 from './img/img40.PNG';
import Img40 from './img/img41.JPG';
import Img41 from './img/img42.jpg';
import Img42 from './img/img43.JPG';

function Gallery(){
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc:Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc:Img6,
        },{
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc:Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 12,
            imgSrc:Img12,
        },{
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc:Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc:Img18,
        },{
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc:Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        },
        {
            id: 23,
            imgSrc: Img23,
        },
        {
            id: 24,
            imgSrc:Img24,
        },{
            id: 25,
            imgSrc: Img25,
        },
        {
            id: 26,
            imgSrc: Img26,
        },
        {
            id: 28,
            imgSrc:Img27,
        },
        {
            id: 29,
            imgSrc: Img29,
        },
        {
            id: 30,
            imgSrc:Img30,
        },{
            id: 31,
            imgSrc: Img31,
        },
        {
            id: 32,
            imgSrc: Img32,
        },
        {
            id: 33,
            imgSrc:Img33,
        },
        {
            id: 34,
            imgSrc: Img34,
        },
        {
            id: 35,
            imgSrc: Img35,
        },
        {
            id: 36,
            imgSrc:Img36,
        },{
            id: 37,
            imgSrc: Img37,
        },
        {
            id: 38,
            imgSrc: Img38,
        },
        {
            id: 39,
            imgSrc:Img39,
        },
        {
            id: 40,
            imgSrc: Img40,
        },
        {
            id: 41,
            imgSrc: Img41,
        },
        {
            id: 42,
            imgSrc:Img42,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
            <div className={model?"model open" : "model"}>
                <img src={tempImgSrc} alt="modelImg"/>
                    <CloseIcon onClick={()=>setModel(false)}/>
            </div>
            <div className= "gallery">
                {data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt="collection"/>
                        </div>
                    )
                })}
            </div>
        </>
    );
}


export default Gallery;