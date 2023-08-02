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