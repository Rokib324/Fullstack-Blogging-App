import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const SubsTableItem = ({email, date, mongoId}) => {
    const emailDate = new Date(date);

    const deleteEmail = async (mongoId) => {
        const response = await axios.delete(`/api/email?id=${mongoId}`);
        if(response.data.success){
            toast.success(response.data.message);
            window.location.reload();
        }else{
            toast.error(response.data.message);
        }
    }
  return (
    <tr className='bg-white border-b text-left'>
        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:'no email'}
        </td>
        <td className='px-6 py-4 hidden sm:table-cell'>{emailDate.toDateString()}</td>
        <td className='px-6 py-4'>
            <button onClick={() => deleteEmail(mongoId)} className='px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors'>X</button>
        </td>
    </tr>
  )
}

export default SubsTableItem