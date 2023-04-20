import axios from 'axios'

const fetchStuff = async () =>
  await axios
    .get('https://sharestuff.onrender.com/api/stuff')
    .then((response) => response.data)

export default fetchStuff
