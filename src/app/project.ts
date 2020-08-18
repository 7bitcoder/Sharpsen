export interface project {
    id: number,
    name: string,
    description: string,
    imageLink: string,
    githubLink: string,
    requirements: string,
    downloads: { platform: string, link: string }[],
    tools: { decription: string, img: string }[],
}