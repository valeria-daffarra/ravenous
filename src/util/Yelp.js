const apiKey = "qOJ32MHNH8U3P8gdEEOev9Q2g5Nou2Olu5onSnQtPXLWncZYG_We3Yzsp9DNgV7B0uKAHiDSY77veVQV3we8Xvn-v9s1-GXnHOrJ4rIWcKqVj1WzH2s1KsPt-XajYnYx";
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
           if (jsonResponse.businesses) {
              return jsonResponse.businesses.map(((business) => {
                  console.log(business)
                  return {
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      address: business.location.address1,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zip_code,
                      category: business.categories[0].title,
                      rating: business.rating,
                      reviewCount: business.review_count
                  }
              }));
           }
        })
    }  
};
//https://cors-anywhere.herokuapp.com/corsdemo enables cross-origin requests
export default Yelp;