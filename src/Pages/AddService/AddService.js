import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
// import AddService from 'src\Pages\AddService\AddService';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://intense-waters-07973.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId > 0) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Please dd a service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;