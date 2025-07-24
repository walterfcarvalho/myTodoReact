
type Tprops = {
    callBack: () => void
}


const AddButton = ({callBack}: Tprops) => {

    return <button
        className={`absolute rounded-full bg-green-500 text-black text-2xl text-gray-1000 p-2 px-4 bottom-3 right-20 border-solid border-2 border-black`}
        onClick={callBack}
    >
        +
    </button>}

export default AddButton;
