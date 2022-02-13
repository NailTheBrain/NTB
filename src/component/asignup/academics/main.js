import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "../../bsignup/bstyle.css";
import Nav from "./nav"
import Home from "./home"
import Books from "./books"
import  "./academic.css"
import { bkData } from "./bkdata";
import { bkData1 } from "./bkdata1";

export default function Maina() {
  return (
    <div className="Main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            <Books
              type={bkData}
              name="Books"
              text=" The beginning is the most precious part of the work. No one can
              afford to stand by and do nothing, so grab limitless opportunities
              from here. Find the books related to subjects of CSE and IT. Check
              them out!!!"
            />
          }
        />
        <Route
          path="/exams"
          element={
            <Books
              type={bkData1}
              name="Exam"
              text=" Building a future generation of innovation means setting up the
              youth for success.
              In this segment, you can download pdfs, and attempt the previous
              year's question papers of exams like GATE to improve your
              preparation. Analyze, plan and then execute, offering the roadmap
              and strategies to achieve your desires"
            />
          }
        />
      </Routes>
    </div>
  );
}
