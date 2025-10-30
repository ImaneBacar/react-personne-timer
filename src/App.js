

import { useEffect, useState } from 'react';

class Personne {
  constructor({ fullName, bio, imgSrc, profession, show }) {
    this.fullName = fullName;
    this.bio = bio;
    this.imgSrc = imgSrc;
    this.profession = profession;
    this.show = show;
  }

  toString() {
    return `Nom : ${this.fullName}, Bio : ${this.bio}`;
  }
}

function App() {
  const [show, setShow] = useState(false);
  const [timer,setTimer]= useState(0);

  function handleClick(){
      setShow(!show);
  }

  const personne1 = new Personne({
    fullName: "John Doe",
    bio: "Développeur passionné",
    imgSrc: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    profession: "Ingénieur",
    show: show
  });

  useEffect(()=>{
    let intervalId;
    if(show){
      setTimer(0);
      intervalId = setInterval(() => {
        setTimer(timer => timer+1);
      }, 1000);
    }  

    return ()=> {clearInterval(intervalId); };
  },[show]);

  return (
    <div className="App">

      <button onClick={handleClick}>{show ? " Masquer " : "Afficher"}</button>
        { 
          show && ( 
          <div>
          <h2>{personne1.fullName}</h2>
          <p>{personne1.bio}</p>
          <p>{personne1.profession}</p>
          <img src={personne1.imgSrc} alt={personne1.fullName}  style={{width : "300px"}}/>
          <p>Temps en second : {timer}</p>
          </div>
          )}

    </div>
  );
}

export default App;
