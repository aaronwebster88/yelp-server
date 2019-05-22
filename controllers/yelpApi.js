var express = require("express");
var router = express.Router();
var axios = require("axios");

let url = 'https://api.yelp.com/v3/businesses/search?location=';

//get restaurants
router.get('/:city/:state/:pricingInfo', (req, res) => {
    axios({
        method: 'get',
        url: url+`${req.params.city}${req.params.state}&price=${req.params.pricingInfo}`,
        headers: {
            'Authorization': 'Bearer iS2OJeabXcXlC1R-FDDPowyRp_2_nm1NFj_7XJ4B1kkFqp7fDf_QTNwQI1T12jST7iapIu1LWknGlPReYAHBxHu47JeBo16B6RWK7KY2nw9FfCK8A_uoB_F4cyHkXHYx',
            'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        res.send(response.data)
    })
    .catch(err => res.status(500).json(
        { error: err }
    ));
});

module.exports = router;