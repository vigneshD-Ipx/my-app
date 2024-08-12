import React,{ useEffect, useState } from "react";
import { BASEURL } from "../App";
import axios from "axios";

export default function Home(){
    const [users, setUsers] = useState([]);
    const [error,  setError] = useState(null);
    console.log(users);
    useEffect(() => {
        axios({
            method: 'GET',
            url: BASEURL + '/getQuestions',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            withCredentials: false,
        })
        .then(response => {
            console.log(response);
            setUsers(response.data);
        })
        // axios.get(BASEURL+'/getQuestions')
        //     .then(function (response) {
        //         console.log(response);
        //         setUsers(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

    //   fetch(BASEURL + "/getQuestions", {mode: "no-cors"})
    //     .then((res) => res.json())
    //     .then(data => {
    //             console.log(data);
    //             setUsers(data);
    //     })

        // const fetchData = async () => {
        //     try {
        //         const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        //         const response = await fetch(BASEURL+'/getQuestions', {
        //             method: 'GET',
        //             mode: 'no-cors',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Access-Control-Allow-Origin': "*",
        //                 "X-Requested-With": "XMLHttpRequest",
        //                 'Origin': window.location.origin,
        //                 // Add any other headers you need
        //             },
        //         });

        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }

        //         const result = await response.json();
        //         console.log(response);
        //         setUsers(result);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // };

        // fetchData();
    }, []);
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" className="px-6 py-4">S.no</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Username</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                   {users.map((user: any) => (
                    <tr key={user.id} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.employment_status_name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.category_status}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.access_role}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                            <button
                                type="button"
                                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Edit
                            </button>

                            <button
                                type="button"
                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                   ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    );
}