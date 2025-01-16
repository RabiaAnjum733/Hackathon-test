import Extra from "../components/extra"
import EXpage from "../components/EX page"
import Ninecars from "../components/Nine cars"
export default function Home(){
    return(
    <div className="container mx-auto">
        <div className="sidecontentandpikanddrop flex ">
     <Extra/>
     <div className="rightside">
     <EXpage/>
     <Ninecars/>
     </div>
     </div>
    

        </div>
    )
}

