export type OneTypeCard = {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
}

export type TypeCard = {
    card: OneTypeCard;
}

export type Author = {
    id: string,
    name: string,
}