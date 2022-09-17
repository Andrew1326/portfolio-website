import { StaticImageData } from "next/image";

export interface IImage {
    src: StaticImageData;
    alt: string;
}

export interface ILink {
    href: string;
    text: string;
    show: boolean
}

export interface IProject {
    title: string;
    desc: string,
    technologies: string[];
    githubUrl: string;
    appUrl: string
}

export interface ITechnology {
    name: string;
    src: any;
    duration: number
}