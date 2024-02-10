
export default function PlantOption({index,plantName, selected}) {

    return (
        <div className={`p-6 text-xl w-40 text-center font-bold ${selected ? "bg-yellow-400" : "bg-amber-500 drop-shadow-lg hover:bg-amber-400"}`}>
            <h3>{plantName}</h3>
        </div>
    )
}