import { Input } from '../ui/input'
import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './form'

import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface Custominput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string
}

const Custominput = ({control, name, label, placeholder} : Custominput) => {
  return (
    <FormField
     control={control}
     name={name}
     render={({ field }) => (
        <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input 
                         placeholder={placeholder}
                         {...field} 
                         className='form-input'
                         type={name === 'password' ? 'password' : 'text'}
                    />
                </FormControl>
                <FormMessage className='form-message mt-2' />
            </div>
        </div>
                  )}
    />
  )
}

export default Custominput