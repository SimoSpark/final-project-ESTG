"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import GlobalApi from "./_Services/GlobalApi";
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";

export default function Home() {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();
  },[])
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }
  return (
    <div>
      <Hero />
   <CategoryList categoryList={categoryList} />
    </div>
  );
}
