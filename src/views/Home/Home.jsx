import LikeList from '../../components/LikeList/LikeList'
import { LikeProvider } from '../../context/UserContext'

const Home = () => {
  ;<LikeProvider>
    <LikeList />
  </LikeProvider>
}

export default Home
