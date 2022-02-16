// This function capitalizes the first letter in each sentence.

export const capitalize = (sentence:string) => {

    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    const joinde = words.join(" ");
    
    return joinde
}