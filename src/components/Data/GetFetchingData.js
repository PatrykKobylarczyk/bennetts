import React from 'react';
import { useQuery } from 'react-query'

const GetFetchingData = () => {


    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('https://0b69-45-132-108-35.eu.ngrok.io/footasylum')
            .then(res => res.json())
            .then(res => console.log(res)
            )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    console.log(data);

    return (
        <div>
            <h1>{data.id}</h1>
            <p>{data.title}</p>
        </div>
    );
}

export default GetFetchingData;