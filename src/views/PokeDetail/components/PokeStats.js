export default function PokeStats( {stats, color} ) {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
        {stats?.map( ({stat, base_stat}, index) => (
            <div 
                key={index} 
                style={{ border: `2px solid ${color}`}}
                className="flex items-center justify-center p-1 rounded"
            >
                <p className="capitalize">{stat.name}</p>
                <p>{`: ${base_stat}%`}</p>
            </div>
        ))}
        </div>
    );
}