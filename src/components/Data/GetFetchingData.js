import React, {useState} from 'react';

import { useQuery } from 'react-query'
import axios from 'axios'

const GetFetchingData = () => {

    const [datas, setDatas] = useState()

    async function getData(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setDatas(res.data) 
    }

    const { isLoading, error, data } = useQuery(['repoData'],  getData)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.map(item => item)}</h1>
        </div>
    );
}

export default GetFetchingData;