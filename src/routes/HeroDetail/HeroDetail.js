import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from '../../helpers/getData';
import './HeroDetail.css';

const concatCommaSpace = strArr => {
    let concat = [];
    strArr.forEach((str, i) => {
        if(i !== strArr.length-1)
            concat.push(str + ', ');
        else
            concat.push(str);
    });
    return concat;
}

const HeroDetail = () => {
    const { id } = useParams()
    const [{name, biography, appearance, work, image}, setHero] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadHero = async () => {
            try {
                const baseAPI = process.env.REACT_APP_BASE_API_URL;
                const tokenAPI = process.env.REACT_APP_TOKEN_API;
                const res = await getData(`${baseAPI + tokenAPI}/`, id)
                setHero(res.data);
                setIsLoading(false);
            } catch(error) {
                console.error(new Error(error))
            }
        }
        loadHero();
    }, [id]);
    // const dataToShow = [biography.fullname, biography.aliases, work.base, appearance.weight, appearance.height];
    // const labels = ['Fullname', 'Aliases', 'Workplace', 'Weight', 'Height', 'Hair color', 'Eye color']

    return (
        <Fragment>
            {isLoading ? <p>Estoy cargando</p> : 
            (   -+<div className="card hero-card shadow mt-5 w-75 m-auto">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image.url} alt={name} className="hero-image img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-center">{name}</h1>
                            <ul className="information list-group list-group-flush">
                                <li className="list-group-item"><strong>Fullname:</strong> {biography['full-name']} </li>
                                <li className="list-group-item"><strong>Aliases:</strong> {concatCommaSpace(biography.aliases)} </li>
                                <li className="list-group-item"><strong>Workplace:</strong> {work.base} </li>
                                <li className="list-group-item"><strong>Weight:</strong> {appearance.weight[1]} </li>
                                <li className="list-group-item"><strong>Height:</strong> {appearance.height[1]} </li>
                                <li className="list-group-item"><strong>Hair color:</strong> {appearance['hair-color']} </li>
                                <li className="list-group-item"><strong>Eye color:</strong> {appearance['eye-color']} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </Fragment>
    )
}

export { HeroDetail };