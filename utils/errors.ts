export const rendererror = (error: unknown):{message:string} => {
    return {
       message : error instanceof Error ? error.message : "An error occured"
    }
 }