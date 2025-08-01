import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import SurveyPage from "./surveypage";

function Survey() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-5xl mx-auto p-4 mt-4">
        <div className="flex justify-center items-center gap-2">
          <img
            src="/logo-BBPJN.png"
            alt="BBPJN JATENG-DIY"
            className="h-10 md:h-14 w-auto"
          />
          <img
            src="/Logo-Kom-A.png"
            alt="Logo Komunikasi"
            className="h-5 md:h-7 w-auto"
          />
        </div>

        <hr className="border-t-2 border-gray-300 mt-4" />

        <main className="my-6">
          <SurveyPage />
        </main>

        <footer className="text-center text-sm text-blue-800">
          Copyright ©️ 2025{" "}
          <a
            href="https://binamarga.pu.go.id/balai-jateng-diy/"
            className="text-blue-900 hover:underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            BBPJN JATENG-DIY
          </a>
        </footer>
      </div>
    </>
  );
}

export default Survey;
