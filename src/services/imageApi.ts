// API service for image operations
export interface Image {
  id: string;
  url: string;
  alt: string;
  title?: string;
  category?: string;
}

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com/images';

class ImageApiService {
  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Fetch all images
  async fetchImages(): Promise<Image[]> {
    return this.makeRequest<Image[]>('/');
  }

  // Fetch single image by ID
  async fetchImageById(id: string): Promise<Image> {
    return this.makeRequest<Image>(`/${id}`);
  }

  // Add new image
  async addImage(image: Omit<Image, 'id'>): Promise<Image> {
    return this.makeRequest<Image>('/', {
      method: 'POST',
      body: JSON.stringify(image),
    });
  }

  // Update image
  async updateImage(id: string, updates: Partial<Image>): Promise<Image> {
    return this.makeRequest<Image>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Delete image
  async deleteImage(id: string): Promise<void> {
    await this.makeRequest(`/${id}`, {
      method: 'DELETE',
    });
  }

  // Upload image file
  async uploadImage(file: File): Promise<{ url: string; id: string }> {
    const formData = new FormData();
    formData.append('image', file);

    const url = `${API_BASE_URL}/upload`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  }

  // Search images by category
  async searchImagesByCategory(category: string): Promise<Image[]> {
    return this.makeRequest<Image[]>(`/search?category=${encodeURIComponent(category)}`);
  }

  // Search images by title
  async searchImagesByTitle(title: string): Promise<Image[]> {
    return this.makeRequest<Image[]>(`/search?title=${encodeURIComponent(title)}`);
  }
}

export const imageApiService = new ImageApiService();
export default imageApiService; 