function RecallCard(props){

    const {contact} = props //destructing
    return (
        <>
               <figure className="bg-white h-screen rounded-lg shadow-md pt-7 overflow-auto">
                    <img
                        alt={props.recall.desc}
                        className="w-auto h-auto rounded-full mx-auto"
                        src={props.image}
                    />
                    <figcaption className="text-center mt-5 ">
                        <p className="text-gray-900 text-center mt-5">
                            <span className="font-semibold normal-case">Recall Description {props.index}:</span> {props.recall.desc}
                        </p>
                        <p className="text-gray-900 text-center mt-5 normal-case">
                            <span className="font-semibold">Corrective Action:</span> {props.recall.corrective_action}
                        </p>
                        <p className="text-gray-900 text-center mt-5">
                            <span className="font-semibold normal-case">Consequence:</span> {props.recall.consequence}
                        </p>
                    </figcaption>
                </figure>
        </>
    )
}

export default RecallCard