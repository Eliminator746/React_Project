export default function Body({children}){

    return <>
        <div className="">
            <div className="w-screen h-screen text-center bg-blue-950 m-5">
                {children}
            </div>
        </div>
    </>
}