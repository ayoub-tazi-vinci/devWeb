import { SyntheticEvent } from "react";

interface Movie {
    id : number;
    title: string;
    director: string;
    duration: number;
    image?: string;
    description?: string;
    budget?: number;
}

interface MovieContext {
    movies: Movie[];
    handleSubmit: (e:SyntheticEvent)=>void;
    handleTitleChange: (e: SyntheticEvent)=>void;
    handleDirectorChange: (e: SyntheticEvent)=>void;
    handleDurationChange: (e: SyntheticEvent)=>void;
    handleBudgetChange: (e: SyntheticEvent)=>void;
    handleImageChange: (e: SyntheticEvent)=>void;
    handleDescriptionChange: (e: SyntheticEvent)=>void;
};



    

export type {Movie , MovieContext};


