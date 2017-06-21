/**
 * Created by Roy on 6/9/2017.
 */
import _ from 'underscore';
import {Events} from 'backbone';
import Photos from './collections/Photos';
import Cameras from './collections/Cameras'
import Actions from './views/Actions';
import RoverPhotos from './views/RoverPhotos';
import RoverDetails from "./views/RoverDetails";
import RoverCameras from './views/RoverCameras';
import Rovers from "./collections/Rovers";

(function ()
{
    /**
     *   Create global variables
     */
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();

        //Collections
        let photosCollection = new Photos();
        let RoversCollection = new Rovers();
        let CamerasCollection = new Cameras();

        //Views
        new RoverDetails({el: "#rovers", collection: RoversCollection});
        new Actions({el: "#container"});
        new RoverCameras({el: '#rover-cameras', collection: CamerasCollection});
        new RoverPhotos({el: "#rover-photos", collection: photosCollection});

        //History
        Backbone.history.start({pushState: false, replaceState: false, root: 'eindopdracht/'});


    };

    window.addEventListener('load', init);
})();
