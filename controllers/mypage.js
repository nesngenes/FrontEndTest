import axios from "axios";

export const getDatas = async(req, res) => {
    try {
      const datas = await axios.get(`https://reqres.in/api/login`);
      console.log(datas.data)
      res.status(200).json(datas.data);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
}


