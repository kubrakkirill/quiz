import Header from "../components/Header";
import Button from "../components/Button";
import AllQuizes from "../components/AllQuizes";
import TextInput from "../components/forms/TextInput";
import { useState } from "react";
import CreateQuiz from "../components/quiz/CreateQuiz";


const Home = () => {

  const [createQuiz, setCreateQuiz] = useState<boolean>(false)

    
    return <div className='home'>
    <Header></Header>
    {!createQuiz && <AllQuizes/>}
    {!createQuiz && <Button onClick={()=>setCreateQuiz(true)} variant='primary'>Create quiz</Button>}
    {createQuiz && <CreateQuiz onClick={()=>setCreateQuiz(false)} />}
</div>;
  };
  
  export default Home;