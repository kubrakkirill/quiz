export interface IOption {
    title: string
}

export interface QuizQuestion {
    id: string;
    title: string;
    options: Array<IOption>;
}

export interface Quiz{
    id: number;
    creator: string;
    title: string;
    time: number;
    questions: Array<QuizQuestion>;
    completed: boolean;
}