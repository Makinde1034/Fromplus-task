

export interface template{
    name: string 
    created: string ,
    category: string[] 
    description: string 
    link: string

}

export interface presentTemplate{
    name :string,
    templates : template[]
}