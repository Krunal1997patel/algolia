import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const Forms = () => {
  return (
    <AlgoliaPlaces
      placeholder='Address'

      options={{
        appId: 'plC9IP7POGR4',
        apiKey: '322b14756dfd2b0cac01b70ca4a336e6',
        language: 'en_US',
        countries: ['us'],
        type: 'address',
        // type: 'city',
        // type: 'country',
        // type: 'postcode'
        // Other options from https://community.algolia.com/places/documentation.html#options
      }}

      placeholder='State'


    />
  );  
}

export default Forms;