"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import GlobalApi from "./_Services/GlobalApi";
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";
import Footer from "./_components/Footer";


export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories);
    })
  }

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then(resp => {
      setBusinessList(resp.businessLists);
    })
  }

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={'Services Populaires'} />
      <Footer /> 
      {/* footer */}
    </div>
  );
}
