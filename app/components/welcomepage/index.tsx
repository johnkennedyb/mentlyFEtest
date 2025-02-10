"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomeScreen: React.FC = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/create-program");
  }, [push]);

  return null;
};

export default HomeScreen;
