'use client';

import React, { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { CopyIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import axios from 'axios';

interface EditPropertyPageProps {
  sidebarProps?: {
    showSidebar: boolean;
    handleSidebar: () => void;
    session: Session | null;
  }
}

const page = ({ sidebarProps }: EditPropertyPageProps) => {

  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState([]);

  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    fullAddress: '',
    zipCode: '',
    country: '',
    provinceState: '',
    neighbourhood: '',
    location: '',
    price: '',
    unitPrice: '',
    beforePrice: '',
    afterPrice: '',
    propertyType: '',
    propertyStatus: '',
    propertyLabel: '',
    size: '',
    landArea: '',
    propertyId: '',
    rooms: '',
    bedrooms: '',
    bathrooms: '',
    garage: '',
    garageSize: '',
    yearBuilt: '',
    photos: [] as File[],
    amenities: [] as string[]
  });

  const {
    title,
    description,
    fullAddress,
    zipCode,
    country,
    provinceState,
    neighbourhood,
    location,
    price,
    unitPrice,
    beforePrice,
    afterPrice,
    propertyType,
    propertyStatus,
    propertyLabel,
    size,
    landArea,
    propertyId,
    rooms,
    bedrooms,
    bathrooms,
    garage,
    garageSize,
    yearBuilt,
    amenities
  } = propertyData;

  const fetchPropertyById = async () => {
    try {
      const request = await axios.post('/api/single-property', { propertyId: id });
      setPropertyDetails(request.data.property);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);

      setPropertyData((prevData) => ({
        ...prevData,
        photos: selectedFiles,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPropertyData(prev => ({ ...prev, [name]: value }));
  }

  const handleSelectChange = (name: string, value: string) => {
    setPropertyData(prev => ({ ...prev, [name]: value }));
  }

  const handleCheckboxChange = (label: string, checked: boolean) => {
    setPropertyData((prevData) => {
      const updatedAmenities = checked
        ? [...prevData.amenities, label]
        : prevData.amenities.filter((item) => item !== label);
  
      return {
        ...prevData,
        amenities: updatedAmenities,
      };
    });
  };

  const handleEditProperty = async () => {
    try {
      const formData = new FormData();

      Object.entries(propertyData).forEach(([key, value]) => {
        if (key === "photos" && value) {
          (value as File[]).forEach((file) => {
            formData.append("photos", file);
          });
        } else if (key === "amenities" && Array.isArray(value)) {
          value.forEach((amenity) => {
            formData.append("amenities[]", amenity);
          });
        } else if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      });

      if (id) {
        formData.append("id", id.toString());
      } else {
        console.error("Error: ID is missing from URL");
        return;
      }

      const response = await axios.post("/api/edit-property", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error updating property:", error.response?.data || error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  useEffect(() => {
    if (propertyDetails) {
      setPropertyData((prevData) => ({
        ...prevData,
        ...propertyDetails,
      }));
    }
  }, [propertyDetails]);

  useEffect(() => {
    if (id) {
      fetchPropertyById();
    }
  }, [id]);

  return (
    <>
      <section>
        <div className={`max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10`}>
          <form encType="multipart/form-data">
            <div className='bg-white shadow-md rounded-2xl p-8'>
              <h3 className='text-[#161e2d] text-2xl font-semibold'>Upload Media</h3>
              <div className='w-[inherit] flex justify-center items-center py-24 mx-auto mt-5 border-dashed rounded-2xl border-2 border-[#e5e5ea]'>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <div className='relative cursor-pointer'>
                    <button type="button" className='flex items-center justify-center bg-[#1563df] transition-colors hover:bg-[#0e49a6] text-white text-sm gap-3 rounded-full w-48 py-4'>
                      <CopyIcon />
                      <span className='text-base'>Select Photos</span>
                      <input type="file" multiple name="photos" onChange={handleFileChange} className='absolute inset-0 opacity-0 w-full h-full' />
                    </button>
                  </div>
                  <span className='text-sm text-center'>or drag photos here <br />(Up to 10 photos)</span>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-2xl p-8 mt-5'>
              <h3 className='text-[#161e2d] text-2xl font-semibold mb-5'>Information</h3>
              <div className='flex flex-col gap-1.5 mb-7'>
                <label htmlFor="title">Title *</label>
                <Input name='title' onChange={handleInputChange} value={title} className='rounded-2xl text-sm p-5 text-[#161e2d]' placeholder='Title' />
              </div>
              <div className='flex flex-col gap-1.5 mb-7'>
                <label htmlFor="description">Description *</label>
                <Textarea name='description' onChange={handleInputChange} value={description} className='rounded-2xl text-sm p-5 text-[#161e2d]' placeholder='Description' />
              </div>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="fullAddress">Full Address *</label>
                  <Input name='fullAddress' onChange={handleInputChange} value={fullAddress} className='rounded-2xl text-sm p-5 text-[#161e2d]' placeholder='Full Address' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="zipCode">Zip Code *</label>
                  <Input name='zipCode' onChange={handleInputChange} value={zipCode} className='rounded-2xl text-sm p-5 text-[#161e2d]' placeholder='Zip Code' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="country">Country *</label>
                  <Select name='country' onValueChange={(value) => handleSelectChange('country', value)} value={country}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='USA'>USA</SelectItem>
                      <SelectItem value='UK'>United Kingdom</SelectItem>
                      <SelectItem value='RUS'>Russia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/2 flex flex-col gap-1.5">
                  <label htmlFor="provinceState">Province / State *</label>
                  <Select name='provinceState' onValueChange={(value) => handleSelectChange('provinceState', value)} value={provinceState}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="Province / State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Texas'>Texas</SelectItem>
                      <SelectItem value='New York'>New York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-1.5">
                  <label htmlFor="neighbourhood">Neighbourhood *</label>
                  <Select name='neighbourhood' onValueChange={(value) => handleSelectChange('neighbourhood', value)} value={neighbourhood}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="Neighbourhood" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Little Italy'>Little Italy</SelectItem>
                      <SelectItem value='Bedford Park'>Bedford Park</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <label htmlFor="location">Location *</label>
                <Input name='location' value={location} onChange={handleInputChange} className='rounded-2xl text-sm p-5 text-[#161e2d]' placeholder='Location' />
              </div>
              <div className="w-full mt-7">
                <iframe className='w-full rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001779.1747020474!2d-78.40997211023601!3d42.71589505457698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1736419055248!5m2!1sen!2sin" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-2xl p-8 mt-5'>
              <h3 className='text-[#161e2d] text-2xl font-semibold mb-5'>Pricing</h3>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/2 flex flex-col gap-1.5">
                  <label htmlFor="price">Price *</label>
                  <Input name='price' value={price} onChange={handleInputChange} placeholder='12345.67' className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-1.5">
                  <label htmlFor="unitPrice">Unit Price *</label>
                  <Select name='unitPrice' onValueChange={(value) => handleSelectChange('unitPrice', value)} value={unitPrice}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="None" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='1000'>1000</SelectItem>
                      <SelectItem value='2000'>2000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/2 flex flex-col gap-1.5">
                  <label htmlFor="beforePrice">Before Price Label *</label>
                  <Input name='beforePrice' onChange={handleInputChange} value={beforePrice} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-1.5">
                  <label htmlFor="afterPrice">After Price Label *</label>
                  <Input name='afterPrice' onChange={handleInputChange} value={afterPrice} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-2xl p-8 mt-5'>
              <h3 className='text-[#161e2d] text-2xl font-semibold mb-5'>Additional Information</h3>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="propertyType">Property Type *</label>
                  <Select name='propertyType' onValueChange={(value) => handleSelectChange('propertyType', value)} value={propertyType}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Apartment'>Apartment</SelectItem>
                      <SelectItem value='Villa'>Villa</SelectItem>
                      <SelectItem value='Office'>Office</SelectItem>
                      <SelectItem value='Townhouse'>Townhouse</SelectItem>
                      <SelectItem value='Studio'>Studio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="propertyStatus">Property Status *</label>
                  <Select name='propertyStatus' onValueChange={(value) => handleSelectChange('propertyStatus', value)} value={propertyStatus}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='For Rent'>For Rent</SelectItem>
                      <SelectItem value='For Sale'>For Sale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="propertyLabel">Property Label *</label>
                  <Select name='propertyLabel' onValueChange={(value) => handleSelectChange('propertyLabel', value)} value={propertyLabel}>
                    <SelectTrigger className="w-full rounded-2xl p-5">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='New Listing'>New Listing</SelectItem>
                      <SelectItem value='Open House'>Open House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="size">Size (Sqft) *</label>
                  <Input name='size' onChange={handleInputChange} value={size} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="landArea">Land Area (Sqft) *</label>
                  <Input name='landArea' onChange={handleInputChange} value={landArea} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="propertyId">Property ID *</label>
                  <Input name='propertyId' onChange={handleInputChange} value={propertyId} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
              </div>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="rooms">Rooms *</label>
                  <Input name='rooms' onChange={handleInputChange} value={rooms} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="bedrooms">Bedrooms *</label>
                  <Input name='bedrooms' onChange={handleInputChange} value={bedrooms} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="bathrooms">Bathrooms *</label>
                  <Input name='bathrooms' onChange={handleInputChange} value={bathrooms} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
              </div>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-center gap-7 items-start justify-start mb-7'>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="garage">Garages *</label>
                  <Input name='garage' onChange={handleInputChange} value={garage} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="garageSize">Garage Size (Sqft) *</label>
                  <Input name='garageSize' onChange={handleInputChange} value={garageSize} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1.5">
                  <label htmlFor="yearBuilt">Year Built *</label>
                  <Input name='yearBuilt' onChange={handleInputChange} value={yearBuilt} className='rounded-2xl text-sm p-5 text-[#161e2d]' />
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-2xl p-8 mt-5'>
              <h3 className='text-[#161e2d] text-2xl font-semibold mb-5'>Amenities</h3>
              <div className='w-full flex md:flex-row flex-col md:items-center md:justify-between gap-7 items-start justify-start mb-7'>
                <div className='flex flex-col'>
                  <h4 className='text-[#161e2d] text-base font-semibold mb-4'>Home Safety</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="smoke_alarm" className='accent-[#1563df]' checked={amenities.includes("Smoke Alarm")}
                      onCheckedChange={(checked) => handleCheckboxChange("smoke_alarm", checked as boolean)}
                    />
                    <label
                      htmlFor="smoke_alarm"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Smoke Alarm
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="self_check" className='accent-[#1563df]' checked={amenities.includes("self_check")}
                      onCheckedChange={(checked) => handleCheckboxChange("self_check", checked as boolean)}
                    />
                    <label
                      htmlFor="self_check"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Self check-in with lockbox
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="carbon_alarm" className='accent-[#1563df]' checked={amenities.includes("carbon_alarm")}
                      onCheckedChange={(checked) => handleCheckboxChange("carbon_alarm", checked as boolean)}
                    />
                    <label
                      htmlFor="carbon_alarm"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Carbon monoxide alarm
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="cameras" className='accent-[#1563df]' checked={amenities.includes("cameras")}
                      onCheckedChange={(checked) => handleCheckboxChange("cameras", checked as boolean)}
                    />
                    <label
                      htmlFor="cameras"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Security cameras
                    </label>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <h4 className='text-[#161e2d] text-base font-semibold mb-4'>Bedroom</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="hangers" className='accent-[#1563df]' checked={amenities.includes("hangers")}
                      onCheckedChange={(checked) => handleCheckboxChange("hangers", checked as boolean)}
                    />
                    <label
                      htmlFor="hangers"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Hangers
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="pillows" className='accent-[#1563df]' checked={amenities.includes("pillows")}
                      onCheckedChange={(checked) => handleCheckboxChange("pillows", checked as boolean)}
                    />
                    <label
                      htmlFor="pillows"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Extra pillows & blankets
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="tv_cable" className='accent-[#1563df]' checked={amenities.includes("tv_cable")}
                      onCheckedChange={(checked) => handleCheckboxChange("tv_cable", checked as boolean)}
                    />
                    <label
                      htmlFor="tv_cable"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      TV with standard cable
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="beds" className='accent-[#1563df]' checked={amenities.includes("beds")}
                      onCheckedChange={(checked) => handleCheckboxChange("beds", checked as boolean)}
                    />
                    <label
                      htmlFor="beds"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Bed linens
                    </label>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <h4 className='text-[#161e2d] text-base font-semibold mb-4'>Kitchen</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="refrigerator" className='accent-[#1563df]' checked={amenities.includes("refrigerator")}
                      onCheckedChange={(checked) => handleCheckboxChange("refrigerator", checked as boolean)}
                    />
                    <label
                      htmlFor="refrigerator"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Refrigerator
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="dishwasher" className='accent-[#1563df]' checked={amenities.includes("dishwasher")}
                      onCheckedChange={(checked) => handleCheckboxChange("dishwasher", checked as boolean)}
                    />
                    <label
                      htmlFor="dishwasher"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Dishwasher
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="microwave" className='accent-[#1563df]' checked={amenities.includes("microwave")}
                      onCheckedChange={(checked) => handleCheckboxChange("microwave", checked as boolean)}
                    />
                    <label
                      htmlFor="microwave"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Microwave
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="coffee_maker" className='accent-[#1563df]' checked={amenities.includes("coffee_maker")}
                      onCheckedChange={(checked) => handleCheckboxChange("coffee_maker", checked as boolean)}
                    />
                    <label
                      htmlFor="coffee_maker"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Coffee maker
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleEditProperty} type="button" className='bg-[#1563df] text-white font-medium text-base rounded-full w-44 mt-5 py-3.5 transition-colors hover:bg-[#0e49a6]'>Update Property</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default page