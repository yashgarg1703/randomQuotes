
import React,{useState,useEffect} from "react"
function Quote(){
    const [quote,setQuote]=useState('Slow and steady wins the race');
    const rand=Math.floor(Math.random() * 16);
    
        const fetchData=()=>{
            fetch("https://type.fit/api/quotes")
      .then(response => {
        return response.json()
      })
      .then(data => {
      setQuote(data[rand].text)
      })
        }
        useEffect(()=>{
            fetchData()
        },[])
    const onClick=()=>{
        fetchData()
    }
    const OnSpeech=()=>{
        let utterance= new SpeechSynthesisUtterance(quote);
        // console.log(utterance);
        speechSynthesis.speak(utterance);
    }
    const onCopy=()=>{
        navigator.clipboard.writeText(quote);
        document.getElementById("copy").classList.add("invisible");
        document.getElementById("copy-done").classList.remove("invisible");
        setTimeout(()=>{
            document.getElementById("copy").classList.remove("invisible");
            document.getElementById("copy-done").classList.add("invisible");
        },300);
        
     }
return(
    <div>
    <div className='quoteBody' id="quotes">
        {quote} 
    </div>
    <div className="container bottom">
    <i className=" fas fa-volume-up" onClick={OnSpeech} ></i>
    <i className="fa-solid fa-copy"  onClick={onCopy}  id="copy"></i>
    <i className="fa-solid fa-circle-check invisible" id="copy-done"></i>
    <button className='btn btn-primary block' onClick={onClick}>Next</button>
    </div>
    </div>
)
}
export default Quote