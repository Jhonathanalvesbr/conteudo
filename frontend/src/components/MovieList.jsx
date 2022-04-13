import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/conteudo";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Duração</th>
                    <th>Último Duração</th>
                    <th>Temporadas</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
                </thead>

                <tbody>
                {movies.map(conteudo => {
                    let tipo = conteudo.conteudo;
                    if(tipo === 0){
                        tipo = "Filme"
                    }
                    else if(tipo === 1){
                        tipo = "Série"
                    }
                    else if(tipo === 2){
                        tipo = "Anime"
                    }
                    let formatDate = (conteudo.ultimo_visto).split('T', 1)

                    return(
                        <tr key={conteudo.id}>
                            <td>{conteudo.nome}</td>
                            <td>{tipo}</td>
                            <td>{conteudo.duracao}</td>
                            <td>{conteudo.ultimo_duracao}</td>
                            <td>{conteudo.temporadas}</td>
                            <td>{conteudo.ep_total}</td>
                            <td>{conteudo.ep_atual}</td>
                            <td>{formatDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default MovieList;
