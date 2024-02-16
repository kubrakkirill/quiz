import { connect } from 'react-redux';
import { Quiz } from '../types/types';

interface AllQuizesProps{
  allQuizes: Quiz[]
}

const AllQuizes: React.FC<AllQuizesProps> = ({allQuizes}) => {
  
  return (
    <div>
        {allQuizes.length > 0 ? <ul>{allQuizes.map((quiz:Quiz) => (
          <li key={quiz.id}>
            {quiz.title}
          </li>
        ))}</ul> : <p>No active quizzes yet</p>}
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  allQuizes: state.quizReducer.quizes,
});

export default connect(mapStateToProps)(AllQuizes);
