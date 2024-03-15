export interface IOption {
    title: string
    variant: boolean
}

export interface QuizQuestion {
    id: string;
    title: string;
    options: Array<IOption>;
    editMode: boolean
}

export interface Quiz{
    id: number;
    creator: string;
    title: string;
    time: number;
    questions: Array<QuizQuestion>;
    completed: boolean;
}