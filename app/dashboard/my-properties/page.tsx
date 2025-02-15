'use client';

import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from 'axios';
import Image from 'next/image';
import { PencilIcon, DeleteIcon, CrosshairIcon } from 'lucide-react';

const page = () => {
  const [properties, setProperties] = useState([]);
  const [btnTextMap, setBtnTextMap] = useState<{ [key: number]: boolean }>({});

  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/fetch-property');
      setProperties(response.data.property);
    } catch (error) {
      console.log(error);
    }
  }

  const updateStatus = async (propertyId: number, status: string) => {
    try {
      setBtnTextMap((prev) => ({ ...prev, [propertyId]: true }));
      const response = await axios.put('/api/update-status', { propertyId, status });
      if(response) {
        await fetchProperties();
        setTimeout(() => {
          setBtnTextMap((prev) => ({ ...prev, [propertyId]: false }));
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setBtnTextMap((prev) => ({ ...prev, [propertyId]: false }));
    }
  }

  const deleteProperty = async(propertyId: number) => {
    try {
      const response = await axios.delete('/api/delete-property', { data: { id: propertyId } });
      if(response.data.message === "Property Removed Successfully") {
        await fetchProperties();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <div className={`max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10`}>
        <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-6">
          <div className="md:w-[30%] w-full flex flex-col gap-2">
            <h4>Post Status: *</h4>
            <Select name='status'>
              <SelectTrigger className="w-full rounded-2xl px-5 py-6 bg-white">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Publish'>Publish</SelectItem>
                <SelectItem value='Pending'>Pending</SelectItem>
                <SelectItem value='Hidden'>Hidden</SelectItem>
                <SelectItem value='Sold'>Sold</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:w-[70%] w-full flex flex-col gap-2">
            <h4>Search: *</h4>
            <Input name='title' className='rounded-2xl bg-white text-sm px-5 py-6 text-[#161e2d]' placeholder='Search by Title' />
          </div>
        </div>
        <div className='bg-white shadow-md rounded-2xl p-6 mt-8'>
          <h3 className='text-[#161e2d] text-2xl font-semibold'>My Properties</h3>
          <div className="overflow-x-auto">
            <Table className="mt-4 min-w-max w-full">
              <TableHeader className="bg-[#161e2d]">
                <TableRow className="p-6">
                  <TableHead className="text-white">Listing</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((property) => (
                  <TableRow key={property?.id}>
                    <TableCell className="flex items-start gap-5">
                      <Image
                        className="rounded-lg"
                        src={property?.photos[0]}
                        width={168}
                        height={100}
                        alt={property?.title}
                      />
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">{property?.title}</span>
                        <span className="text-base font-medium text-[#1563df]">
                          ${property?.price}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <button
                        type="button"
                        disabled={property?.status === "Approved" || property?.status === "Sold" ? true : false}
                        onClick={() => updateStatus(property?.id, "Approved")}
                        className={`${property?.status === "Approved" ? 'bg-[#25c55b]' : property?.status === "Sold" ? 'bg-[#6e55ff]' : 'bg-[#ee6742]'} text-white rounded-2xl w-[100px] text-sm font-medium py-1`}
                      >
                        {btnTextMap[property?.id] ? "Updating..." : property?.status}
                      </button>
                    </TableCell>
                    <TableCell className="flex flex-col gap-2.5">
                      <button type="button" className="flex items-center gap-1">
                        <PencilIcon size={15} className='text-[#A3ABB0]'/>
                        <span>Edit</span>
                      </button>
                      <button onClick={() => updateStatus(property?.id, "Sold")} type="button" className="flex items-center gap-1">
                        <CrosshairIcon size={15} className='text-[#A3ABB0]'/>
                        <span>Sold</span>
                      </button>
                      <button onClick={() => deleteProperty(property?.id)} type="button" className="flex items-center gap-1">
                        <DeleteIcon size={15} className='text-[#A3ABB0]'/>
                        <span>Delete</span>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default page