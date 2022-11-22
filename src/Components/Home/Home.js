import {Page,Img,Desc,Nav,Comp,Title,Arrow} from "./HomeStyle"
import img from "./anime.jpeg"
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa"
const Home = () => {
    return (
    <Page>
     <Comp>
       <Img src={img}></Img>
       <Desc>
       After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.
       </Desc>
       <Title>
        Shingeki No Kyojin 
       </Title>
       <Nav>
       <Arrow><FaArrowLeft size={100}/></Arrow>
       <Arrow><FaArrowRight size={100}/></Arrow>
       </Nav>
      </Comp>
    </Page>);
}
 
export default Home;