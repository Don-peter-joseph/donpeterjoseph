import './Aboutme.css';
import Navbar from './Navbar';
import don from '../images/don3.png'

const Certifications2=()=>{
    const certifications={
        'Silver Badge in C in Hackerrank':null,
        'First position in code debugging':'https://www.google.com'
    }

    return(
        <div className='certifications'>
            <h1 id='subtitle'>Certifications</h1>
            {Object.keys(certifications).map((key,index)=>{
                return(
                    <a className='skill highlightbutton' target='_blank' href={certifications[key]}>
                        {key}
                    </a>
                )
            })}
        </div>
    )
}

const Certifications=()=>{
    return(
        <>
            <Navbar/>
            <Certifications2/>
        </>
    )
}

const Aboutme=()=>{

    const skills={
        'C':5,
        'Python':5,
        'React Native':5,
        'React':3,
        'MySQL':3,
        'MongoDB':3,
        'JavaScript':3,
        'Application Development':3,
    }

    const softskills={
        'Leadership':5,
        'Fast Learner':5,
        'Adaptability':5,
        'Discipline':5,
        'Problem Solving':5
    }

    const highlights={
        'Given online classes for competative programming':null,
        'First position in code debugging':'www.google.com'
    }

    return(
        <div className='aboutoutline'>

            <div className='info'>
                <h1 id='subtitle'>Basic Info</h1>
                <div className='image'>
                    <img src={don} alt='profile' className='aboutimage'/>
                </div>
                <div className='address'>
                    <span>
                    I am looking for a challenging role in one of the leading IT multinational
                     company where I can utilise my programming skills,my problem solving
                      skills and my leadership experience to the utmost effect, also to expand
                       my professional network and in the process add value to the organisation
                        and my career. 

                    </span>
                </div>

            </div>

            <div className='education'>
                <h1 id='subtitle'>Education</h1>
                <div className='edubox'>
                    <h2 style={{flex:1,paddingLeft:20}}>Degree</h2>
                    <span style={{flex:1,lineHeight:1.5}}>BTech <br/>
                    Computer Science and Engineering<br/>
                    <a href='http://www.cep.ac.in/' target='_blank'>College of Engineering Poonjar</a><br/>
                    2019 - 2023 Batch<br/>
                    <a href='https://ktu.edu.in/home.htm;jsessionid=0DA7C018D473A206F17F44E34B6184F7' target='_blank'>
                                APJ Abdul Kalam Technological University</a><br/>
                    CGPA:8.95</span>
                </div>

                <div className='edubox'>
                    <h2 style={{flex:1,paddingLeft:20}}>Higher Secondary Education</h2>
                    <span style={{flex:1,lineHeight:1.5}}>Computer Science<br/>
                    <a href='https://www.google.com/search?q=smv+hss+poonjar&sxsrf=AB5stBjTk1mDrWFP7xNyLwDFW-zuB114Zw%3A1688820510099&ei=HlupZL3IBdCgseMP38ab4AE&gs_ssp=eJzj4tLP1TcwKszJMTE3YLRSMagwTjIwT05MTTawNLZMSUw0tTKoMEw0SzE1Sk01tEgyMzVI9eIvzi1TyCguVijIz8_LSiwCAIEZFCU&oq=sm&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgDMgcIIxCKBRAnMgcIIxCKBRAnMgQIIxAnMg0ILhCKBRDHARCvARBDMgcIABCKBRBDMgcIABCKBRBDMg0ILhCvARDHARCKBRBDMg0ILhCKBRDHARCvARBDMgcIABCKBRBDMgcIABCKBRBDMhsILhCKBRDHARCvARBDEJcFENwEEN4EEOAEGAM6BwgjEOoCECc6DQguEMcBEK8BEOoCECc6DwgAEIoFEOoCELQCEEMYAToVCC4QAxCPARDqAhC0AhCMAxDlAhgCOhUIABADEI8BEOoCELQCEIwDEOUCGAI6CwgAEIAEELEDEIMBSgQIQRgAUL4PWIYSYNQjaAJwAHgAgAGCAYgB_QGSAQMwLjKYAQCgAQGwARTAAQHaAQYIARABGAHaAQYIAhABGAvaAQYIAxABGBQ&sclient=gws-wiz-serp' target='_blank'>
                                SMV HSS Poonjar</a><br/>
                    2017 - 2019<br/>
                    DHSE (Kerala State Board)<br/>
                    Percentage: 93</span>
                </div>

                <div className='edubox'>
                    <h2 style={{flex:1,paddingLeft:20}}>Secondary Education</h2>
                    <span style={{flex:1,lineHeight:1.5}}>
                    <a href='https://holyspiritpublicschoolpayyanithottam.com/' target='_blank'>Holy Spirit Public School Payyanithottam</a><br/>
                    CBSE<br/>
                    Percentage: 100</span>
                </div>

            </div>

            <div className='skills'>
                <h1 id='subtitle'>Skills</h1>

                <div className='techskills'>
                    <span id='subtitle' style={{fontSize:20,fontWeight:700}}>Technical Skills</span>
                    {Object.keys(skills).map((key,index)=>{
                        return(
                            <div className='skill'>
                                <h5 style={{flex:1.5,fontFamily:'sans-serif'}}>{key}</h5>
                                <div className='skillbar'>
                                    <div className='progress' style={{flex:skills[key]}}></div>
                                    <div className='nonprogress' style={{flex:5-skills[key]}}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='softskills'>
                    <span id='subtitle' style={{fontSize:20,fontWeight:700}}>Soft Skills</span>
                    {Object.keys(softskills).map((key,index)=>{
                        return(
                            <div className='skill'>
                                <h5 style={{flex:1.5,fontFamily:'sans-serif'}}>{key}</h5>
                                <div className='skillbar'>
                                    <div className='progress' style={{flex:softskills[key]}}></div>
                                    <div className='nonprogress' style={{flex:5-softskills[key]}}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className='highlights'>
                <h1 id='subtitle'>Highlights</h1>
                {Object.keys(highlights).map((key,index)=>{
                    return(
                        <a className='skill highlightbutton' target='_blank' href={highlights[key]}>
                            {key}
                        </a>
                    )
                })}
            </div>
            
            <Certifications2/>

        </div>
    )
}

export default Aboutme;
export {Certifications};