'use strict';

import logger from "../utils/logger.js";
import exercises from "../models/exercises.js";

const about = {
    createView(request, response) {
        logger.info("About page loading!");
        
        const viewData = {
            title: "About the Playlist App",
            employee: exercises.getAppInfo()
        };
    
    response.render('about', viewData);
    },
};

export default about;