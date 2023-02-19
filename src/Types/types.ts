import { MouseEventHandler } from "react";

export interface Page {
    title: string;
    path: string;
}

export interface LinkType {
    path: string;
    val: string
}

export interface Blog {
    id: string
    title: string;
    description: string;
    img?: string;
    content: string;
    date: Date;
}

export interface Option {
    key: string;
    value: string;
    img?: string;
    onClick: MouseEventHandler<HTMLLIElement>
}

export interface Contact {
    name: string;
    email: string;
    message: string
}