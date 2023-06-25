import { useState } from "react";
import CarChild from "./CarChild";
import './List.scss';
import UserChild from "./UserChild";

export default function List() {
    const cars = ["Volvo", "Reno", "Audi"];
    const [users, setUsers] = useState([
        {
            name: "Taner",
            lastName: "Saydam",
            age: 33
        },
        {
            name: "Tahir",
            lastName: "Saydam",
            age: 55
        },
        {
            name: "Toprak",
            lastName: "Saydam",
            age: 3
        }
    ]);

    // let style = {
    //     width: "100%",
    //     border: "1px solid"
    // }

    return (
        <>
            <h1>List Component</h1>
            <ul>
                {cars.map((val, index) =>
                    <CarChild key={index} car={val} />
                )}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Adı</th>
                        <th>Soyadı</th>
                        <th>Yaşı</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val, index) =>
                        <UserChild
                            key={index}
                            user={val}
                            index={index}
                        />
                    )}
                </tbody>
            </table>
        </>
    )
}

