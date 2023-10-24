"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Users() {
  const router = useRouter();
  return <div onClick={() => router.back()}>Users</div>;
}
