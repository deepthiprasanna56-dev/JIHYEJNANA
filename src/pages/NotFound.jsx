import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 pt-28 pb-16 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-[#090E1A] border border-[#E6CA85]/20 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#E6CA85]/10 border border-[#E6CA85]/30 flex items-center justify-center text-[#E6CA85] mx-auto mb-4">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-4xl font-extrabold font-heading text-gold-gradient block mb-2">
          404
        </span>
        <h1 className="text-2xl font-bold font-heading text-white">
          Dossier Not Found
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          The academic corridor or resource you sought does not exist or has been relocated to another archive.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/">
            <Button variant="primary" icon={ArrowLeft} iconPosition="left">
              Return to Sanctuary
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="secondary">Browse Catalogue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
