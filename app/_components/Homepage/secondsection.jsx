const SecondSection = ( { data } ) => {
  const {  headline, text,  Ourmission,ourmissionpragraph, ourvission,  Ourvissionpragraph  } = data;

  return (
    <div className="SeconSec">
        <img src="/pexels-davidpeterson-344738.jpg" className="SeconSec__image" />
       <div className="SeconSec__content" >
        <div className="SeconSec__all">
            <div className="SeconSec__headlineText">
                <h5>{headline}</h5>
                <p className="SeconSec__coppy">{text}</p>
 </div>
 <div className="SeconSec__missionvission">
     <div>
        <h5>{Ourmission}</h5>
        <p className="SeconSec__coppy">{ourmissionpragraph}</p>
     </div>
      <div>
        <h5>{ourvission}</h5>
        <p className="SeconSec__coppy">{Ourvissionpragraph}</p>
     </div>
 </div>
            </div>
        </div>

       </div>
   
  )

}

export default SecondSection