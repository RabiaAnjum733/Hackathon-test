import Page10 from "@/app/components/Page3p1"
import Page11 from "@/app/components/Page3p2"
import Page12 from "@/app/components/Page3p3"

export default function page() {
  return (
    <div className="container mx-auto flex relative">
      <Page10 /> {/* sider */}
      
     <div className="div absolute left-96"><Page11 />
      </div> {/* Car Design
Sports car with the best design and acceleration */}
      <div className="bottomside absolute left-[350px] top-[600px]"><Page12 /></div>
      
      
    </div>
  )
}
