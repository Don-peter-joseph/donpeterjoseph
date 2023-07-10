import dical from '../images/home.png';
import './Projects.css';
import { NavLink } from "react-router-dom";
import don from "../images/me.JPG";
import sreehari from "../images/sreehari.JPG";
import amith from "../images/amith.jpg";
import Navbar from './Navbar';



const Gallary=()=>{
    return(
        <h1>haha</h1>
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
    return(
        <div>
            <h1>hi </h1>
        </div>
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
                                <span className="btn2"><NavLink to='/projects/tools' className="btn">Tools</NavLink></span>
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
                                <span className="btn2"><NavLink to='/projects/creators' className="btn">Creators</NavLink></span>
                                <span className="btn2"><NavLink to='/projects/tools' className="btn">Tools</NavLink></span>
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