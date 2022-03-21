import Layout from '@/components/Layout'
import { useState } from 'react';

export default function HomePage() {


  const styles = {
    style: "App-red", style2: "App-after-click", text: "Click me!",
   
    
};

//  Inside the function
const [style, setStyle] = useState("App-red");



//  Inside the click function.
function clickHandler() { 
setStyle("App-after-click");
} 



  return (
  
      <Layout>
 
 <h1 id="heading" onClick={clickHandler} className={style}>{styles.text}</h1>

      <h2>Topic</h2>

      <style jsx>{`
  
  .App-red{
    color: red;
    animation: turnYellow forwards 3s linear;
  }
  @keyframes turnYellow {
    from {
      opacity: 0;
      color: red;
    }
    to {
      opacity: 1;
      color: yellow;
    }
  }
  .App-after-click{
    color: black;
  }
  `}
  
  </style>

      </Layout>


  )
}
