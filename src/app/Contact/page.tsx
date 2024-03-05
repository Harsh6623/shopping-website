import ContactForm from '@/components/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Contact US</h1>
        <p>Please Fill In The Form Below</p>
        
        <ContactForm/>
    </div>
  )
}

export default Contact