export interface QuizQuestion{
    title: string;
    options: Array<{option: string}>;
}

export interface Quiz{
    id: number;
    creator: string;
    title: string;
    time: number;
    questions: Array<QuizQuestion>;
    completed: boolean;
}