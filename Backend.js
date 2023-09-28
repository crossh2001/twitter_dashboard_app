const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;
const API_KEY="6RPedQqw23iHpNH8DeJ57keUZ";
const ACCESS_TOKEN = "1702178338192953344-vuum2uzINT78zEBrVMGLgDCOkD2bxT";
const ACCESS_TOKEN_SECRET = "COuCDK2nSj7gBuEkXWD2oMZ4HOizxEPptuMdssW1hwIzR";
const bearerToken =
      'AAAAAAAAAAAAAAAAAAAAAH%2FHpwEAAAAA5mii8IJpzaou1i1TMI8fgYRqq%2FE%3D0suv8EmHKdhtsfAfQLtz99RwKkSRVAuRIVdZjP5ea6o3BxBT3U'; 


app.use(cors()); 

app.get("/", (req, res) => {
  //res.send("This is the server side"); 
  res.json;

});

axios.get('https://api.twitter.com/2/tweets', {
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  }
})



  app.get("/tweets", async (req, res) => {
  try {
    const response = await twitterClient.get('/tweets', {
      params: {
        ids: '250831586', 
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching tweets");
  }
});

app.listen(PORT, () => {
  console.log("Now listening on port " + PORT);
});
