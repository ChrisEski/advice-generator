'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import MobileDivider from './MobileDivider';
import DesktopDivider from './DesktopDivider';
import Dice from './Dice';

const Card = ({ initialAdviceData }) => {
  const [adviceData, setAdviceData] = useState(initialAdviceData);

  const handleGetAdvice = async () => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      const freshAdviceData = res.data;
      setAdviceData(freshAdviceData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="relative max-w-[540px]">
      <section className="bg-light rounded-[10px] px-6 py-8 flex flex-col items-center">
        <h1 className="text-accent font-normal text-[10px] tracking-widest mb-5">
          {`ADVICE #${adviceData.slip.id}`}
        </h1>
        <p className="text-center mb-5 lg:text-lg">{`"${adviceData.slip.advice}"`}</p>
        <MobileDivider />
        <DesktopDivider />
      </section>
      <button
        onClick={handleGetAdvice}
        className="button bg-accent w-16 h-16 rounded-full grid place-content-center absolute left-[50%] translate-x-[-50%] translate-y-[-50%] transition-shadow ease-in-out duration-300 hover:shadow-[0_0_20px_8px_rgba(82,255,168,0.3)]">
        <Dice />
      </button>
      <footer className="text-center mt-10">
        <p>
          Challenge by{' '}
          <Link
            href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
            target="_blank"
            className="footer-link">
            Frontend Mentor
          </Link>
          .
        </p>
        <p>
          Coded by{' '}
          <Link
            href="https://github.com/ChrisEski"
            target="_blank"
            className="footer-link">
            ChrisEski
          </Link>
          .
        </p>
      </footer>
    </main>
  );
};

export default Card;
