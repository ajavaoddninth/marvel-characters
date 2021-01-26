/**
 * Marvel character interface
 */
export default interface Character {
    // The unique ID of the character resource
    id: number;

    // The name of the character
    name: string;

    // A short bio or description of the character
    description: string;
}