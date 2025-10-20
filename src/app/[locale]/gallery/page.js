'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Camera, Video, Grid, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const [selectedTab, setSelectedTab] = useState('photos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  // Sample gallery items - replace with actual content
  const photos = [
    { id: 1, src: '/images/image1.jpeg', alt: 'Professional moment 1' },
    { id: 2, src: '/images/image2.jpeg', alt: 'Professional moment 2' },
    { id: 3, src: '/images/nav_image.jpeg', alt: 'Professional moment 3' },
    // Add more photos
  ];

  const videos = [
    { id: 1, thumbnail: '/images/image1.jpeg', title: 'Legal consultation video 1', duration: '2:30' },
    { id: 2, thumbnail: '/images/image2.jpeg', title: 'Legal consultation video 2', duration: '3:45' },
    // Add more videos
  ];

  const items = selectedTab === 'photos' ? photos : videos;

  const openLightbox = (index) => {
    setImageIndex(index);
    setSelectedImage(items[index]);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % items.length;
      setSelectedImage(items[newIndex]);
      return newIndex;
    });
  }, [items]);

  const prevImage = useCallback(() => {
    setImageIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + items.length) % items.length;
      setSelectedImage(items[newIndex]);
      return newIndex;
    });
  }, [items]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);


  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-xl p-2 inline-flex">
            <button
              onClick={() => setSelectedTab('photos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                selectedTab === 'photos'
                  ? 'bg-background text-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Camera className="w-4 h-4" />
              {t('photos')}
            </button>
            <button
              onClick={() => setSelectedTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                selectedTab === 'videos'
                  ? 'bg-background text-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Video className="w-4 h-4" />
              {t('videos')}
            </button>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer relative aspect-square rounded-xl overflow-hidden bg-muted shadow-md hover:shadow-xl transition-all"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={selectedTab === 'photos' ? item.src : item.thumbnail}
                alt={selectedTab === 'photos' ? item.alt : item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              
              {selectedTab === 'videos' && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Video className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors">
            <Grid className="w-5 h-5" />
            {t('load_more')}
          </button>
        </div>
        
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image */}
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedTab === 'photos' ? selectedImage.src : selectedImage.thumbnail}
              alt={selectedTab === 'photos' ? selectedImage.alt : selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            {imageIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </div>
  );
}