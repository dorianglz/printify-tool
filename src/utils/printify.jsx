import axios from "axios";

const API_BASE_URL = "http://api.dorian-gonzalez.fr/api/printify"; // Base URL de l'API backend

const PrintifyAPI = {
  // Récupérer les informations de la boutique
  getShops: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/shops`);
      return response.data;
    } catch (error) {
      console.error("Error fetching shops:", error);
      throw error;
    }
  },

  // Récupérer le catalogue de produits (blueprints)
  getCatalog: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/catalog`);
      return response.data;
    } catch (error) {
      console.error("Error fetching catalog:", error);
      throw error;
    }
  },

  // Récupérer tous les produits d'une boutique
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Créer un nouveau produit
  createProduct: async (productData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/products`, productData);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  // Supprimer un produit
  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  // Télécharger une image dans Printify
  uploadImage: async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await axios.post(`${API_BASE_URL}/uploads/images`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  },
};

export default PrintifyAPI;