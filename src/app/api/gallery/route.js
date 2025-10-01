import { NextResponse } from 'next/server';

// Mock data - replace with actual database/CMS integration
const generateMockMedia = (type, page = 1, limit = 12) => {
  const items = [];
  const startId = (page - 1) * limit;
  
  for (let i = 0; i < limit; i++) {
    const id = startId + i;
    items.push({
      id: `${type}-${id}`,
      type,
      title: `${type === 'photo' ? 'Professional Photo' : 'Legal Interview'} ${id + 1}`,
      description: type === 'photo' 
        ? 'Legal consultation and client meeting'
        : 'Media interview and legal commentary',
      thumbnail: `/images/gallery/${type}s/thumb-${id}.jpg`,
      full: type === 'photo' 
        ? `/images/gallery/photos/full-${id}.jpg`
        : `/videos/gallery/video-${id}.mp4`,
      duration: type === 'video' ? '5:32' : null,
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
    });
  }
  
  return items;
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'photo';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;

    // Validate parameters
    if (!['photo', 'video'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid media type' },
        { status: 400 }
      );
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const items = generateMockMedia(type, page, limit);
    const hasMore = page < 3; // Simulate 3 pages max

    return NextResponse.json({
      items,
      hasMore,
      page,
      limit,
      total: 36 // Mock total
    });

  } catch (error) {
    console.error('Gallery API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}