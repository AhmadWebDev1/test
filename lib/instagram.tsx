// Instagram API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID
const INSTAGRAM_API_URL = 'https://graph.instagram.com'

// Type definitions
interface InstagramProfile {
  id: string
  username: string
  account_type: string
  media_count: number
}

interface InstagramMediaChild {
  media_url: string
  thumbnail_url?: string
}

interface InstagramMedia {
  id: string
  caption?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url?: string
  thumbnail_url?: string
  permalink: string
  timestamp: string
  like_count?: number
  comments_count?: number
  children?: {
    data: InstagramMediaChild[]
  }
}

interface FormattedPost {
  id: string
  type: string
  url: string
  caption: string
  permalink: string
  timestamp: string
  likes: number
  comments: number
  carousel: InstagramMediaChild[] | null
}

interface FormattedData {
  profile: {
    username: string
    mediaCount: number
    accountType: string
  }
  posts: FormattedPost[]
}

// Cache configuration
let cache: FormattedData | null = null
let cacheTime: number | null = null
const CACHE_DURATION = 1000 * 60 * 60

export async function getInstagramData(): Promise<FormattedData | []> {
  try {
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      console.error('Missing Instagram API credentials')
      return []
    }

    if (cache && cacheTime && Date.now() - cacheTime < CACHE_DURATION) {
      return cache
    }

    const profileResponse = await fetch(
      `${INSTAGRAM_API_URL}/${INSTAGRAM_USER_ID}?fields=id,username,account_type,media_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    )
    
    if (!profileResponse.ok) {
      throw new Error(`Failed to fetch profile data: ${profileResponse.status}`)
    }
    
    const profileData: InstagramProfile = await profileResponse.json()

    const mediaResponse = await fetch(
      `${INSTAGRAM_API_URL}/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,children{media_url,thumbnail_url}&limit=12&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    )
    
    if (!mediaResponse.ok) {
      throw new Error(`Failed to fetch media data: ${mediaResponse.status}`)
    }
    
    const mediaData = await mediaResponse.json()

    const formattedData: FormattedData = {
      profile: {
        username: profileData.username,
        mediaCount: profileData.media_count,
        accountType: profileData.account_type
      },
      posts: mediaData.data.map((post: InstagramMedia): FormattedPost => ({
        id: post.id,
        type: post.media_type,
        url: post.media_url || post.thumbnail_url || '',
        caption: post.caption || '',
        permalink: post.permalink,
        timestamp: post.timestamp,
        likes: post.like_count || 0,
        comments: post.comments_count || 0,
        carousel: post.children ? post.children.data : null
      }))
    }

    cache = formattedData
    cacheTime = Date.now()

    return formattedData
  } catch (error) {
    console.error('Instagram API Error:', error)
    return []
  }
}