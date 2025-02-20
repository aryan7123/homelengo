"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import axios from "axios"
import Image from "next/image"
import { Pencil, Trash2, Target } from "lucide-react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import Link from "next/link";
interface Property {
  id: number
  title: string
  price: number
  status: string
  photos: string[]
}

const PropertiesClient = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [btnTextMap, setBtnTextMap] = useState<{ [key: number]: boolean }>({})
  const [searchText, setSearchText] = useState("")
  const [selectStatus, setSelectStatus] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 5

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    setCurrentPage(1)
  }

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchText.toLowerCase()) &&
      ((selectStatus === "" || selectStatus === "All") || property.status === selectStatus),
  )

  const handleSelectStatus = (value: string) => {
    setSelectStatus(value)
    setCurrentPage(1)
  }

  const fetchProperties = async () => {
    try {
      const response = await axios.get("/api/fetch-property")
      setProperties(response.data.property)
    } catch (error) {
      console.error(error)
    }
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
    fetchProperties()
  }, [])

  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty)
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10">
      <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-6">
        <div className="md:w-[30%] w-full flex flex-col gap-2">
          <h4>Post Status: *</h4>
          <Select name="status" value={selectStatus} onValueChange={handleSelectStatus}>
            <SelectTrigger className="w-full rounded-2xl px-5 py-6 bg-white">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-2">
          <h4>Search: *</h4>
          <Input
            name="title"
            onChange={handleSearchText}
            value={searchText}
            className="rounded-2xl bg-white text-sm px-5 py-6 text-[#161e2d]"
            placeholder="Search by Title"
          />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 mt-8">
        <h3 className="text-[#161e2d] text-2xl font-semibold">My Properties</h3>
        <div className="overflow-x-auto">
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
                      src={property.photos[0]}
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
  )
}

export default PropertiesClient