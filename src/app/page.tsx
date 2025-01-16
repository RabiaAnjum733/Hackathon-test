import Page1 from "./components/Two cars"
import Page2 from "./components/Pick and Drop"
import Page3 from "./components/Popular view"
import Page4 from "./components/Same Cars"
import Page5 from "./components/Sky Blue Cars"
import Page6 from "./components/Button show"



export default function Home(){
  return(
      <div className="mx-auto ">
             {/* {This is a first page}  */}
      {/* <div className="maindiv"> */}
       <Page1/> 
       <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>  
      </div>)
  
};