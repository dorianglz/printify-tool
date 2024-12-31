import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [listings, setListings] = useState([]);

  // Charger les listings au chargement initial
  useEffect(() => {
    axios.get('https://api.dorian-gonzalez.fr/api/listings') // Remplacer avec ton URL d'API
      .then((response) => setListings(response.data))
      .catch((error) => console.error('Erreur lors de la récupération des listings', error));
  }, []);

  // Fonction pour gérer la sélection de fichiers
  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  // Fonction pour uploader les fichiers
  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await axios.post('https://api.dorian-gonzalez.fr/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setListings(response.data); // Mise à jour des listings
    } catch (error) {
      console.error('Erreur lors de l\'upload', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-4">Uploader des fichiers</h1>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-4 text-white"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Uploader
      </button>

      <h2 className="text-xl text-white font-bold mt-6">Listings temporaires</h2>
      <ul className="mt-4">
        {listings.map((listing) => (
          <li key={listing.id} className="border-b py-2">
            <strong>{listing.title}</strong> - {listing.description}  
            <br />
            Tags : {listing.tags.join(', ')}
            <br />
            <a href={listing.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Voir le fichier
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;