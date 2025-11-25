

function highOrder(WrappedComp) {
  return function callBack(){
        return (
            <>
                <h1>Hare krishna</h1>
                <WrappedComp />
            </>
        )
  }
}


export function Compo1(){
    return(
        <>
        
            <h1>Compo111</h1>
        </>
    )
}


export function Compo2(){
    return(
        <>
        
            <h1>Compo2</h1>
        </>
    )
}

const C1 = highOrder(Compo1)
export const C2 = highOrder(Compo2)



export default C1