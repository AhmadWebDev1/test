import { NextResponse } from 'next/server'

// Instagram API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID
const INSTAGRAM_API_URL = 'https://graph.instagram.com'

// Cache configuration
let cache: any = null
let cacheTime: number | null = null
const CACHE_DURATION = 1000 * 60 * 60 // 1 hour

export async function GET() {
  try {
    // Check cache
    if (cache && cacheTime && Date.now() - cacheTime < CACHE_DURATION) {
      return NextResponse.json(cache)
    }

    // Fetch user profile data
    const profileResponse = await fetch(
      `${INSTAGRAM_API_URL}/${INSTAGRAM_USER_ID}?fields=id,username,account_type,media_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    )
    
    if (!profileResponse.ok) {
      throw new Error('Failed to fetch profile data')
    }
    
    const profileData = await profileResponse.json()

    // Fetch media posts
    const mediaResponse = await fetch(
      `${INSTAGRAM_API_URL}/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,children{media_url,thumbnail_url}&limit=12&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    )
    
    if (!mediaResponse.ok) {
      throw new Error('Failed to fetch media data')
    }
    
    const mediaData = await mediaResponse.json()

    // Process and format the data
    const formattedData = {
      profile: {
        username: profileData.username,
        mediaCount: profileData.media_count,
        accountType: profileData.account_type
      },
      posts: mediaData.data.map((post: any) => ({
        id: post.id,
        type: post.media_type,
        url: post.media_url || post.thumbnail_url,
        caption: post.caption || '',
        permalink: post.permalink,
        timestamp: post.timestamp,
        likes: post.like_count || 0,
        comments: post.comments_count || 0,
        carousel: post.children ? post.children.data : null
      }))
    }

    // Update cache
    cache = formattedData
    cacheTime = Date.now()

    return NextResponse.json(formattedData)
  } catch (error) {
    console.error('Instagram API Error:', error)
    
    // Return fallback data if API fails
    return NextResponse.json({
      profile: {
        username: 'ahmed_traveler',
        mediaCount: 245,
        accountType: 'PERSONAL'
      },
      posts: generateFallbackPosts()
    })
  }
}

// Fallback data generator
function generateFallbackPosts() {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `fallback_${i + 1}`,
    type: ['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'][Math.floor(Math.random() * 3)],
    url: `https://picsum.photos/400/400?random=${i + 10}`,
    caption: 'Beautiful travel memories 🌍✈️',
    permalink: 'https://instagram.com/p/example',
    timestamp: new Date(Date.now() - i * 86400000).toISOString(),
    likes: Math.floor(Math.random() * 5000) + 1000,
    comments: Math.floor(Math.random() * 200) + 50,
    carousel: null
  }))
}