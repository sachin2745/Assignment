'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const AddSchool = () => {

  const productSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name is too short'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    contact: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(1000000000, 'Phone number is too short')
      .required('A phone number is required'),
    email_id: Yup.string().email('Invalid email').required('Email is required'),
  });

  const [selImage, setSelImage] = useState('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setSelImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    });
    if (res.status === 200) {
      console.log("File uploaded");
      toast.success('File Uploaded!');
            
    }
  };

  const postForm = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      state: '',
      contact: '',
      image: '',
      email_id: '',
      postedAt: new Date(),
    },
    onSubmit: async (values) => {
      values.image = selImage.name;
      console.log(values);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/add`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (res.status === 200) {
        toast.success("Uploaded Successfully");
        postForm.resetForm();
      } else {
        toast.error("Something went wrong");
      }
    },
    validationSchema: productSchema,
  });

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex pt-12 pb-10 ">
        <div className="relative flex-1 flex-col bg-white rounded-lg bg-clip-border shadow-xl">
          <div className="relative grid  pb-5  place-items-center overflow-hidden  ">
            <h3 className="block font-Luckiest_Guy text-4xl   leading-snug tracking-wide text-black antialiased">
              Add School
            </h3>
          </div>
          <form className='flex flex-col gap-4 font-DM_Sans font-semibold max-w-4xl mx-auto p-8 md:p-2' onSubmit={postForm.handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-md font-medium leading-6 text-black">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder='Enter school name'
                  value={postForm.values.name}
                  onChange={postForm.handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {postForm.touched.name && postForm.errors.name ? (
                  <div className="text-red-500 text-xs">{postForm.errors.name}</div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-md font-medium leading-6 text-black">
                Address
              </label>
              <div className="mt-1">
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="off"
                  placeholder='Enter  school address'
                  value={postForm.values.address}
                  onChange={postForm.handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {postForm.touched.address && postForm.errors.address ? (
                  <div className="text-red-500 text-xs">{postForm.errors.address}</div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="city" className="block text-md font-medium leading-6 text-black">
                City
              </label>
              <div className="mt-1">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="off"
                  placeholder='Enter  city'
                  value={postForm.values.city}
                  onChange={postForm.handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {postForm.touched.city && postForm.errors.city ? (
                  <div className="text-red-500 text-xs">{postForm.errors.city}</div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="state" className="block text-md font-medium leading-6 text-black">
                State
              </label>
              <div className="mt-1">
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="off"
                  placeholder='Enter  state'
                  value={postForm.values.state}
                  onChange={postForm.handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {postForm.touched.state && postForm.errors.state ? (
                  <div className="text-red-500 text-xs">{postForm.errors.state}</div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="contact" className="block text-md font-medium leading-6 text-black">
                Contact
              </label>
              <div className="mt-1">
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  autoComplete="off"
                  placeholder='Enter  contact'
                  value={postForm.values.contact}
                  onChange={postForm.handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {postForm.touched.contact && postForm.errors.contact ? (
                  <div className="text-red-500 text-xs">{postForm.errors.contact}</div>
                ) : null}
              </div>
            </div>
            <div className="relative h-11 w-full min-w-[200px] mb-7">
              <label
                htmlFor="image"
                className="block text-md font-medium leading-6 text-black"
              >
                Choose School photo
              </label>
              <div className="mt-1">
                <input
                  onChange={uploadImage}
                  id="image"
                  name="image"
                  type="file"
                  className="outline outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email_id" className="block text-md font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email_id"
                  name="email_id"
                  type="email"
                  autoComplete="off"
                  placeholder='Enter  email address'
                  value={postForm.values.email_id}
                  onChange={postForm.handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {postForm.touched.email_id && postForm.errors.email_id ? (
                  <div className="text-red-500 text-xs">{postForm.errors.email_id}</div>
                ) : null}
              </div>
            </div>
            <div className="pt-0 pb-5">
              <button
                data-ripple-light="true"
                type="submit"
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-black to-gray-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-sm hover:shadow-black/50 active:opacity-[0.40] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSchool;
