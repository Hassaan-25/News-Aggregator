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

  export interface Filters {
    searchText: string;
    category: string;
    date: string;
    source: string;
  }