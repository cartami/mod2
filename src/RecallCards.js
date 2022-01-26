import RecallCard from "./RecallCard";

function RecallCards(props) {
    console.log(props.recalls) //had to go one level deeper
    console.log(props.images) //had to go one level deeper
    return (
        <>
            {props.recalls.map((recall, index) => {
                return <RecallCard image= {props.images}recall={recall} index={index+1} key={index}/>
            })} 
        </>
    )
}

export default RecallCards