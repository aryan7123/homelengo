'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ListChecks, ClockAlert, Star, Sparkles } from 'lucide-react'
import { Pencil, Trash2, Target } from "lucide-react"
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { DatePickerDemo } from '@/components/ui/DatePicker'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
interface Property {
  id: number
  title: string
  price: number
  status: string
  photos: string[]
}

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [properties, setProperties] = useState<Property[]>([]);
  const [btnTextMap, setBtnTextMap] = useState<{ [key: number]: boolean }>({})
  const [searchText, setSearchText] = useState("")
  const [selectStatus, setSelectStatus] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRatings, setTotalRatings] = useState('');
  const propertiesPerPage = 5

  const fetchTotalReviews = async() => {
    try {
      const req = await axios.post('/api/add-total-reviews', { userId: session?.user?.id });
      setTotalRatings(req.data.ratings);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    setCurrentPage(1)
  }

  const handleSelectStatus = (value: string) => {
    setSelectStatus(value)
    setCurrentPage(1)
  }

  const fetchProperties = async () => {
    try {
      const response = await axios.get("/api/fetch-property");
      setProperties(response.data.property);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchText.toLowerCase()) &&
      ((selectStatus === "" || selectStatus === "All") || property.status === selectStatus),
  )

  const filteredStatusProperties = properties && properties.filter((item) => item.status === "Pending");

  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty)
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const updateStatus = async (propertyId: number, status: string) => {
    try {
      setBtnTextMap((prev) => ({ ...prev, [propertyId]: true }))
      const response = await axios.put("/api/update-status", { propertyId, status })
      if (response.data.success) {
        await fetchProperties()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProperty = async (propertyId: number) => {
    try {
      const response = await axios.delete("/api/delete-property", { data: { id: propertyId } })
      if (response.data.message === "Property Removed Successfully") {
        await fetchProperties()
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    fetchProperties();
    fetchTotalReviews();
  }, [])

  if (!session) {
    return null
  }

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10">
        <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-6">
          <div className='w-full flex items-center md:justify-center justify-start gap-3 md:w-1/4 shadow rounded-2xl bg-white p-5'>
            <div className='text-[#1563df] w-20 h-20 flex items-center justify-center rounded-full border border-[#e4e4e4]'>
              <ListChecks size={40} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#5c6368] font-semibold text-base'>Your Listings</h3>
              <span className='text-[#161e2d] font-semibold text-4xl'>{properties?.length}</span>
            </div>
          </div>
          <div className='w-full flex items-center md:justify-center justify-start gap-3 md:w-1/4 shadow rounded-2xl bg-white p-5'>
            <div className='text-[#1563df] w-20 h-20 flex items-center justify-center rounded-full border border-[#e4e4e4]'>
              <ClockAlert size={36} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#5c6368] font-semibold text-base'>Pending</h3>
              <span className='text-[#161e2d] font-semibold text-4xl'>{filteredStatusProperties?.length}</span>
            </div>
          </div>
          <div className='w-full flex items-center md:justify-center justify-start gap-3 md:w-1/4 shadow rounded-2xl bg-white p-5'>
            <div className='text-[#1563df] w-20 h-20 flex items-center justify-center rounded-full border border-[#e4e4e4]'>
              <Star size={36} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#5c6368] font-semibold text-base'>Favoruites</h3>
              <span className='text-[#161e2d] font-semibold text-4xl'>06</span>
            </div>
          </div>
          <div className='w-full flex items-center md:justify-center justify-start gap-3 md:w-1/4 shadow rounded-2xl bg-white p-5'>
            <div className='text-[#1563df] w-20 h-20 flex items-center justify-center rounded-full border border-[#e4e4e4]'>
              <Sparkles size={36} />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#5c6368] font-semibold text-base'>Reviews</h3>
              <span className='text-[#161e2d] font-semibold text-4xl'>{totalRatings}</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 mt-8">
          <h3 className="text-[#161e2d] text-2xl font-semibold">New Listings</h3>
          <div className="w-full py-5 border-b border-[#e4e4e4] flex md:flex-row flex-col md:items-center items-start gap-6">
            <div className="md:w-1/3 w-full flex flex-col gap-2">
              <Select name="status" value={selectStatus} onValueChange={handleSelectStatus}>
                <SelectTrigger className="w-full rounded-2xl px-5 py-6 bg-white">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:w-1/3 w-full flex flex-col gap-2">
              <Input
                name="title"
                onChange={handleSearchText}
                value={searchText}
                className="rounded-2xl bg-white text-sm px-5 py-6 text-[#161e2d]"
                placeholder="Search"
              />
            </div>
            <div className="md:w-1/3 w-full flex flex-col gap-2">
              <DatePickerDemo />
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className='mt-4'>
              <h5 className='font-semibold'><span className='text-[#1563df]'>{properties.length}</span> Results Found</h5>
            </div>
            <Table className="mt-4 min-w-max w-full">
              <TableHeader className="bg-[#161e2d]">
                <TableRow>
                  <TableHead className="text-white">Listing</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProperties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell className="flex items-start gap-5">
                      <Image
                        className="rounded-lg"
                        src={property?.photos[0]}
                        width={168}
                        height={100}
                        alt={property.title}
                      />
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">{property.title}</span>
                        <span className="text-base font-medium text-[#1563df]">${property.price.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <button
                        type="button"
                        disabled={property.status === "Approved" || property.status === "Sold"}
                        onClick={() => updateStatus(property.id, "Approved")}
                        className={`${property.status === "Approved" ? "bg-[#25c55b]" : property.status === "Sold" ? "bg-[#6e55ff]" : "bg-[#ee6742]"} text-white rounded-2xl w-[100px] text-sm font-medium py-1`}
                      >
                        {btnTextMap[property.id] ? "Updating..." : property.status}
                      </button>
                    </TableCell>
                    <TableCell className="flex flex-col gap-2.5">
                      <Link href={`/dashboard/edit-property/${property.id}`} type="button" className="flex items-center gap-1">
                        <Pencil size={15} className="text-[#A3ABB0]" />
                        <span>Edit</span>
                      </Link>
                      <button
                        onClick={() => updateStatus(property.id, "Sold")}
                        type="button"
                        className="flex items-center gap-1"
                      >
                        <Target size={15} className="text-[#A3ABB0]" />
                        <span>Sold</span>
                      </button>
                      <button
                        onClick={() => deleteProperty(property.id)}
                        type="button"
                        className="flex items-center gap-1"
                      >
                        <Trash2 size={15} className="text-[#A3ABB0]" />
                        <span>Delete</span>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationPrevious onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationNext onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </>
  )
}

export default page;