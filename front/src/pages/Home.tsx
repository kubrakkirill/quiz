import Header from "../components/Header";
import Button from "../components/Button";
import AllQuizes from "../components/AllQuizes";
import TextInput from "../components/forms/TextInput";
import { useState } from "react";
import CreateQuiz from "../components/CreateQuiz";


const Home = () => {

  const [createQuiz, setCreateQuiz] = useState<boolean>(true)

    
    return <div className='home'>
    <Header><Button variant='action'>Create quiz</Button></Header>
    {!createQuiz && <AllQuizes/>}
    {!createQuiz && <Button onClick={()=>setCreateQuiz(true)} variant='primary'>Create quiz</Button>}
    {createQuiz && <CreateQuiz/>}
</div>;
  };
  
  export default Home;