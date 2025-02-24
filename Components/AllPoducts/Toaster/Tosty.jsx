export const ToasterComp=()=>{

    const notify = () => toast("Wow so easy!");
    return(
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )
}