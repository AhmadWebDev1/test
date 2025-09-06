import { useState, useEffect } from 'react'

interface InstagramPost {
  id: string
  type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  url: string
  caption: string
  permalink: string
  timestamp: string
  likes: number
  comments: number
  carousel?: any[]
}

interface InstagramData {
  profile: {
    username: string
    mediaCount: number
    accountType: string
  }
  posts: InstagramPost[]
}

export function useInstagram() {
  const [data, setData] = useState<InstagramData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/instagram')
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram data')
        }
        
        const jsonData = await response.json()
        setData(jsonData)
        setError(null)
      } catch (err) {
        console.error('Error fetching Instagram data:', err)
        setError('Failed to load Instagram posts')
        
        // Set fallback data
        setData({
          profile: {
            username: 'ahmed_traveler',
            mediaCount: 245,
            accountType: 'PERSONAL'
          },
          posts: Array.from({ length: 12 }, (_, i) => ({
            id: `fallback_${i + 1}`,
            type: 'IMAGE',
            url: `https://picsum.photos/400/400?random=${i + 10}`,
            caption: 'Travel memories',
            permalink: '#',
            timestamp: new Date().toISOString(),
            likes: Math.floor(Math.random() * 5000) + 1000,
            comments: Math.floor(Math.random() * 200) + 50
          }))
        })
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramData()
  }, [])

  return { data, loading, error }
}