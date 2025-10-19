"use client"

import SubsTableItem from '@/components/AdminComponents/SubsTableItem'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {

  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    if(response.data.success){
      setEmails(response.data.emails);
    }
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>All Subscriptions</h1>
      <div className='relative max-w-[800px] h-[80vh] overflow-x-auto mt-4 border border-gray-200 rounded-lg shadow-sm'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left'>Email</th>
              <th scope='col' className='hidden sm:table-cell px-6 py-3 text-left'>Date</th>
              <th scope='col' className='px-6 py-3 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item,index) => (
              <SubsTableItem key={index} email={item.email} date={item.date} mongoId={item._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page