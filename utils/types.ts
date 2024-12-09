export type ActionFunction = (
    prevState : any,
    formData: FormData
) => Promise<{
    message: string
}>



export type LankmarkCardProps = {
    id : string,
    name : string,
    image : string,
    category : string,
    description : string,
    province : string,
    lat : number,
    lng : number,
    price : number
}