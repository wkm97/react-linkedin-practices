export const trimNewline = (str:string) => {
    return str.toString().replace(/^\n+|\n+$/g,"")
}