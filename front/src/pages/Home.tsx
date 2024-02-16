import Header from "../components/Header";
import Button from "../components/Button";
import AllQuizes from "../components/AllQuizes";

const Home = () => {
    
    return <div className='home'>
    <Header><Button variant='action'>Create quiz</Button></Header>
    <AllQuizes/>
    <Button variant='primary'>Create quiz</Button>
</div>;
  };
  
  export default Home;