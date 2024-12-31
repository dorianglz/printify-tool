import React, { useEffect, useState } from 'react';
import PrintifyAPI from '../utils/printify';
import FileUploader from '../components/Fileuploader';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await PrintifyAPI.getShops();
        console.log("data = ", data)
        setShops(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des boutiques:', error);
      }
    };

    fetchShops();
  }, []);

  return (
    <div>
      <h1 className='text-2xl text-white'>Mes Boutiques</h1>
      <ul>
        {shops.map((shop) => (
          <li className='text-2xl text-white' key={shop.id}>{shop.title}</li>
        ))}
      </ul>
      <FileUploader />
    </div>
  );
};

export default ShopList;