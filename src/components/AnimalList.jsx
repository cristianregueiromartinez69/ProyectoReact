function AnimalList(){
    const animals = [
        {
            id: 1,
            name: "dog",
            img: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp"
        },
        {
            id: 2,
            name: "cat",
            img: "https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=913"
        },
        {
            id: 3,
            name: "bird",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cyanocitta_cristata_blue_jay.jpg/240px-Cyanocitta_cristata_blue_jay.jpg"
        },
    ];

    const HTMLAnimals = animals.map((animal) => {
        return(
            <li key={animal.id}>
                <h3>{animal.name}</h3>
                <img src={animal.img} alt="animal picture" width={200}/>
            </li>
        )
    })

    return(
        <section>
            <h2>Animals:</h2>
            <ul>
                {HTMLAnimals}
            </ul>
        </section>
    );
}

export default AnimalList