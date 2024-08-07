export interface Source {
    id: string | null;
    name: string;
  }
  
  export interface Article {
    title: string;
    description: string;
    url: string;
    image?: string;
    source: string;
  }
  