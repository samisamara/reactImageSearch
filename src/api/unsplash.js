import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cSzh9F58wPCihVevBjeW0ma2MiO6-zb35uV-7LUOun0"
  }
});