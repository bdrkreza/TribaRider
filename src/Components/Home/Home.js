import { useEffect, useState } from "react";
import Card from "../Card/Card"
import fakeData from "../fakeData/fakeData.json";
import bodyImg from "../../Image/Pngtree.jpg"


const Home = () => {
    const [data, setData] = useState([0]);


    useEffect(() => {
        setData(fakeData);
    }, [])
    return (
        <>
            <div style={{ backgroundImage: `url(${bodyImg})` }}>
                <div className="container">
                    <div className="row">
                        {
                            data.map(data =>
                                <Card data={data}></Card>
                            )
                        }

                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;