import { useEffect, useState } from "react";
import Card from "../Card/Card"
import fakeData from "../fakeData/fakeData.json"


const Home = () => {
    const [data, setData] = useState([0]);


    useEffect(() => {
        setData(fakeData);
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map(data =>
                            <Card data={data}></Card>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Home;