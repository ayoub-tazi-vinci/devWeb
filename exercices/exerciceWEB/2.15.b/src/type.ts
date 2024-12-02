import { SyntheticEvent } from "react";

interface MovieType {
    id : number;
    title: string;
    director: string;
    duration: number;
    image?: string;
    description?: string;
    budget?: number;
}

interface MovieContext {
    movies: MovieType[];
    handleSubmit: (e:SyntheticEvent)=>void;
    handleTitleChange: (e: SyntheticEvent)=>void;
    handleDirectorChange: (e: SyntheticEvent)=>void;
    handleDurationChange: (e: SyntheticEvent)=>void;
    handleBudgetChange: (e: SyntheticEvent)=>void;
    handleImageChange: (e: SyntheticEvent)=>void;
    handleDescriptionChange: (e: SyntheticEvent)=>void;
    addMovie: (movie: MovieType)=>void;
    deleteMovie: (id: number)=>void;
};



    

export type {MovieType , MovieContext};


