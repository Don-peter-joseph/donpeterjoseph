import dical from '../images/home.png';
import './Projects.css';
import { NavLink,useParams } from "react-router-dom";
import don from "../images/me.JPG";
import sreehari from "../images/sreehari.JPG";
import amith from "../images/amith.jpg";
import home from "../images/home.png";
import search from "../images/search.png";
import diary from "../images/diary.png";
import jump from "../images/jump.png";
import jumptomonth from "../images/jumptomonth.png";
import photos from "../images/photos.png";
import resetotp from "../images/resetotp.png";
import searchbar from "../images/searchbar.png";
import settings from "../images/settings.png";
import signin from "../images/signin.png";
import signup from "../images/signup.png";
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';


const Gallary=()=>{
    return(
        <>
        <Navbar/>
        <div className='gallary'>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={home} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Home Page</h3>
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>    
                <img src={settings} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Settings Page</h3>
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={resetotp} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Reset Password Page</h3>                
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={searchbar} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Searchbar</h3>                
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={photos} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Gallary</h3>
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={jumptomonth} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Calender</h3>                
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={jump} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Jump to Month Page</h3>                
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={diary} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Diary Page</h3>                
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={signup} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Signup Page</h3>                
            </div>
            <div style={{height:'250vh',textAlign:'center'}}>
                <img src={signin} alt="mail" style={{width:'47vw',margin:10,borderWidth:2,borderColor:'black',borderStyle:'solid'}}/>
                <h3>Signin Page</h3>                
            </div>


        </div>
        </>
    )
}

const Creators=()=>{
    return(
        <>
            <Navbar/>
            <div className='outline' style={{justifyContent:'center',alignItems:'center'}}>
                <a className="box" href='https://www.linkedin.com/in/don-peter-joseph-bb4b411a7/' target='_blank'>
                    <img src={don} alt="mail" style={{width:80,borderRadius:50}}/>
                    <h3>Don Peter Joseph</h3>
                </a>
                <a className="box" href='https://www.linkedin.com/in/sreehari-p-136254242/' target='_blank'>
                    <img src={sreehari} alt="mail" style={{width:80,borderRadius:50}}/>
                    <h3>Amith Bino</h3>
                </a>
                <a className="box" href='https://www.linkedin.com/in/amithbino/' target='_blank'>
                    <img src={amith} alt="mail" style={{width:80,borderRadius:50}}/>
                    <h3>Sreehari P</h3>
                </a>
            </div>
        </>
    )
}

const Tools=()=>{
    let location=useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const tools1=['React Native','Node JS','Express JS','MongoDB','Android Studio','Expo CLI','Expo Go','Postman']
    const tools2=['React Native','Android Studio','Expo CLI','Expo Go','AWS Amplify','AWS DynamoDB',
                    'AWS Rekognition','AWS SageMaker','AWS Lambda','AWS API Gateway','AWS CloudWatch']

    return(
        <>
            <Navbar/>
            <div className='certifications page-animation'>
                <h1 id='subtitle'>Tools Used</h1>
                {name=='healthpad' &&
                tools1.map((value,index)=>{
                    return(
                        <span className='skill highlightbutton'>{value}</span>
                    )
                })}
                {name=='dical' &&
                tools2.map((value,index)=>{
                    return(
                        <span className='skill highlightbutton'>{value}</span>
                    )
                })}
            </div>
        </>
    )
}

const Project=()=>{


    return(
        <>
            <div className='outline page-animation'>
                
                <div className='projectcard'>
                    <div className='about'>
                        <h1 className='heading'>HealthPad Mobile Application</h1>
                        <h4 className='subheading'>Project Duration : july 2022 - May 2023</h4>
                        <div className='buttons'>
                                <span className="btn2"><a href="https://youtu.be/rrT81SloZI4" target="_blank" className="btn">Gallary</a></span>
                                <span className="btn2"><NavLink to='/projects/creators' className="btn">Creators</NavLink></span>
                                <span className="btn2"><NavLink to='/projects/tools?name=healthpad' className="btn">Tools</NavLink></span>
                                <span className="btn2"><a href='https://github.com/Don-peter-joseph/MAIN_PROJECT' target="_blank" className='btn'>Github link</a></span>
                                <span className="btn2"><a href='https://expo.dev/accounts/donpeterjoseph/projects/HEALTHPAD/builds/569fb502-f338-49ef-b746-66a81b542972' target="_blank" className='btn'>Apk link</a></span>
                        </div>
                    </div>
                    <div className='description'>
                        <span>
                            <p>
                            An application that helps a user with lifestyle disease to control the food that he/she
                            consumes.
                              Initially HealthPad collects the required user data. If the food is raw, he/she can scan
                               the item or if it is a packet item ,he/she can scan the backside of the packet that
                                contains the nutrition. The result will show the resulting diabetic level once he/she
                                 consumes the item of specified quantity. The quantity can be changed by the user. 
                                 </p>
                                 <p>
                            If the user wants to eat cooked food, their is a diet plan the shows the list of food that is
                             specifically filtered for the specific user based on her/his current health. The user
                              nutrition intake is tracked throughout in this application. There is statistics section to 
                              see insights on his/her current condition. 
                              </p>              
                            We have also included option to contact doctors, medicine
                            shop and customer care.
                        </span>
                    </div>
                </div>

                <div className='projectcard'>
                    <div className='about'>
                        <h1 className='heading'>Dical Mobile Application</h1>
                        <h4 className='subheading'>Project Duration : july 2021 - December 2021</h4>
                        <div className='buttons'>
                                <span className="btn2"><NavLink to='/projects/gallary' className="btn">Gallary</NavLink></span>
                                <span className="btn2"><NavLink to='/projects/tools?name=dical' className="btn">Tools</NavLink></span>
                                <span className="btn2"><a href='https://github.com/Don-peter-joseph/REACT-NATIVE-APP' target="_blank" className='btn'>Github link</a></span>
                        </div>
                    </div>
                    <div className='description'>
                        <span>
                        A React Native application that merges three applications, 
                        Calender,Diary and Gallary. Also have the features to upload and store
                        images in cloud.It has a Calender layout from which each cell act as 
                        a folder.Thus for each date,we can upload specific images and write
                        diary.It also has security perks because Gallary and Diary are placed 
                        inside the Calender.
                        </span>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Project;
export {Gallary,Creators,Tools};