// Instagram API Integration
export interface InstagramPost {
  id: string
  caption: string
  media_url: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  permalink: string
  timestamp: string
  like_count?: number
  comments_count?: number
  thumbnail_url?: string
}

export interface InstagramApiResponse {
  data: InstagramPost[]
  paging?: {
    cursors: {
      before: string
      after: string
    }
    next?: string
  }
}

// Instagram Basic Display API configuration
const INSTAGRAM_CONFIG = {
  accessToken: process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN,
  userId: process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID,
  apiUrl: 'https://graph.instagram.com'
}

/**
 * Fetch recent Instagram posts
 * @param limit Number of posts to fetch (default: 6)
 * @returns Promise<InstagramPost[]>
 */
export async function fetchInstagramPosts(limit: number = 6): Promise<InstagramPost[]> {
  try {
    if (!INSTAGRAM_CONFIG.accessToken || !INSTAGRAM_CONFIG.userId) {
      console.warn('Instagram API credentials not configured')
      return getFallbackPosts()
    }

    const fields = 'id,caption,media_url,media_type,permalink,timestamp,thumbnail_url'
    const url = `${INSTAGRAM_CONFIG.apiUrl}/${INSTAGRAM_CONFIG.userId}/media?fields=${fields}&limit=${limit}&access_token=${INSTAGRAM_CONFIG.accessToken}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control to prevent too frequent API calls
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramApiResponse = await response.json()
    
    // Transform API response to our interface
    return data.data.map(post => ({
      id: post.id,
      caption: post.caption || '',
      media_url: post.media_url,
      media_type: post.media_type,
      permalink: post.permalink,
      timestamp: post.timestamp,
      thumbnail_url: post.thumbnail_url || post.media_url
    }))

  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return getFallbackPosts()
  }
}

/**
 * Get additional post metrics (likes, comments)
 * Note: Requires Instagram Graph API (business account)
 */
export async function fetchPostMetrics(postId: string) {
  try {
    if (!INSTAGRAM_CONFIG.accessToken) {
      return { like_count: 0, comments_count: 0 }
    }

    const fields = 'like_count,comments_count'
    const url = `${INSTAGRAM_CONFIG.apiUrl}/${postId}?fields=${fields}&access_token=${INSTAGRAM_CONFIG.accessToken}`

    const response = await fetch(url, {
      next: { revalidate: 1800 } // Cache for 30 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch metrics for post ${postId}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching post metrics:', error)
    return { like_count: 0, comments_count: 0 }
  }
}

/**
 * Format timestamp to relative time
 */
export function formatInstagramDate(timestamp: string, locale: string = 'en'): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  const timeFormats = {
    ar: {
      seconds: 'منذ لحظات',
      minute: 'منذ دقيقة',
      minutes: (n: number) => `منذ ${n} دقائق`,
      hour: 'منذ ساعة',
      hours: (n: number) => `منذ ${n} ساعات`,
      day: 'منذ يوم',
      days: (n: number) => `منذ ${n} أيام`,
      week: 'منذ أسبوع',
      weeks: (n: number) => `منذ ${n} أسابيع`,
      month: 'منذ شهر',
      months: (n: number) => `منذ ${n} أشهر`
    },
    en: {
      seconds: 'Just now',
      minute: '1 minute ago',
      minutes: (n: number) => `${n} minutes ago`,
      hour: '1 hour ago',
      hours: (n: number) => `${n} hours ago`,
      day: '1 day ago',
      days: (n: number) => `${n} days ago`,
      week: '1 week ago',
      weeks: (n: number) => `${n} weeks ago`,
      month: '1 month ago',
      months: (n: number) => `${n} months ago`
    },
    de: {
      seconds: 'Gerade eben',
      minute: 'vor 1 Minute',
      minutes: (n: number) => `vor ${n} Minuten`,
      hour: 'vor 1 Stunde',
      hours: (n: number) => `vor ${n} Stunden`,
      day: 'vor 1 Tag',
      days: (n: number) => `vor ${n} Tagen`,
      week: 'vor 1 Woche',
      weeks: (n: number) => `vor ${n} Wochen`,
      month: 'vor 1 Monat',
      months: (n: number) => `vor ${n} Monaten`
    }
  }

  const format = timeFormats[locale as keyof typeof timeFormats] || timeFormats.en

  if (diffInSeconds < 60) return format.seconds
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return minutes === 1 ? format.minute : format.minutes(minutes)
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return hours === 1 ? format.hour : format.hours(hours)
  }
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400)
    return days === 1 ? format.day : format.days(days)
  }
  if (diffInSeconds < 2419200) {
    const weeks = Math.floor(diffInSeconds / 604800)
    return weeks === 1 ? format.week : format.weeks(weeks)
  }
  const months = Math.floor(diffInSeconds / 2419200)
  return months === 1 ? format.month : format.months(months)
}

/**
 * Truncate caption text
 */
export function truncateCaption(caption: string, maxLength: number = 120): string {
  if (caption.length <= maxLength) return caption
  return caption.substring(0, maxLength).trim() + '...'
}

/**
 * Fallback posts when API is not available
 */
function getFallbackPosts(): InstagramPost[] {
  return [
    {
      id: 'fallback-1',
      caption: 'لحظة مذهلة من رحلتي الأخيرة إلى جبال الألب السويسرية! المناظر الطبيعية الخلابة تأسر القلب 🏔️✨',
      media_url: '/images/travel-1.jpg',
      media_type: 'IMAGE',
      permalink: '#',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      thumbnail_url: '/images/travel-1.jpg'
    },
    {
      id: 'fallback-2',
      caption: 'غروب الشمس الساحر في شواطئ بالي! كل لحظة هنا تستحق أن تُحفظ في الذاكرة 🌅🏖️',
      media_url: '/images/travel-2.jpg',
      media_type: 'IMAGE',
      permalink: '#',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
      thumbnail_url: '/images/travel-2.jpg'
    },
    {
      id: 'fallback-3',
      caption: 'استكشاف الأزقة الضيقة في مدينة روما العريقة! كل حجر يحكي قصة من التاريخ 🏛️❤️',
      media_url: '/images/travel-3.jpg',
      media_type: 'IMAGE',
      permalink: '#',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
      thumbnail_url: '/images/travel-3.jpg'
    }
  ]
}
