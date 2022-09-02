
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormGroupCustom from './formgroupcustom'
import { Form, Label } from 'reactstrap'


const Examp = () => {
    const { formState: { errors }, handleSubmit, control, setValue, watch, reset } = useForm({})
    const [branch, setBranch] = useState([])
    return (
        <>
            <Form>
                <FormGroupCustom

                    label={"enter-name"}
                    type={"select"}
                    className='mb-1'
                    name={"name"}
                    errors={errors}
                    control={control}

                    rules={{ required: true }}

                />
                <FormGroupCustom

                    label={"enter-name"}
                    type={"radio"}
                    className='mb-1'
                    name={"name"}
                    errors={errors}
                    control={control}

                    rules={{ required: false }}

                />

            </Form>
        </>
    )
}

export default Examp