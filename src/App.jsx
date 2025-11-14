//mport { useEffect, useState } from "react";
import { Outlet } from 'react-router';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
//import { Button } from "@/components/ui/button";

export const App = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
