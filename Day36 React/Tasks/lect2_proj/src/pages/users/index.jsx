import { useState } from 'react';
import Card from '../../components/Card';
import {users} from '../../utils/data'

export default function Users(){
    return (
        <>
            <div className='flex flex-wrap'>
                {users.map((item) => {
                return <Card user={item} key={item.id}/>
            })}
            </div>
        </>
    )
}