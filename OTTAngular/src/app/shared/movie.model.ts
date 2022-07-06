export interface Movie  {
    id?: string;
    name?:   string;
    type?:   'movie' | 'web-series';
    title?:  string;
    description?:    string;
    language?:   string;
    genere?:    GenereType[];
}

export interface GenereType {
    genere_?: 'Action' | 'Animation' | 'Comedy' | 'Crime' | 'Drama' | 'Experimental' | 'Fantasy' | 'Historical' | 'Horror' | 'Romance' | 'Sience Fiction' | 'Western' | 'Indian' | 'Other'
}