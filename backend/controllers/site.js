const sitesettings = require("../models/site");


exports.update_sitesettings = (req, res) => {

   console.log('Site.js Controller');

    const site_setting = new sitesettings(req.body);
    console.log('Site_settings', site_setting);
    site_setting.save((err, site_setting) => {
        if (err){
            return res.status(400).json({
                message: "NOT able to save site_setting in DB"
            });
        }
        console.log('sitename', site_setting.sitename);
        res.json({
            sitename: site_setting.sitename,
        });
    });
};



exports.get_sitesettings = (req, res) => {

	sitesettings.findOne({}, (err, resData) => {
		if(err){
            return res.status(400).json({
                error: "Site details does not exist"
            });
        } else {
        	console.log('SiteDetails', resData);
        	return res.status(200).json({
				data: {
					sitename: resData.sitename
				}
			});
        }
	});

	
}