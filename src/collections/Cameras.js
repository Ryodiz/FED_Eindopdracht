/**
 * Created by Roy on 6/9/2017.
 */
import {Collection} from 'backbone';
import Camera from '../models/Camera';

/**
 * Collection for the cameras endpoint through a proxy
 *
 * @constructor
 */
let Cameras = Collection.extend({
    model: Camera,
    url: '',

    /**
     * Parsing of the api return through a proxy.
     * Filters photo collections by sol.
     * Adds used camera's on that sol to the camera list.
     * Returns array with camera objects.
     *
     * @param response
     * @param options
     * @returns {Array}
     */
    parse: function(response, options){

        console.log(response);
        let CamerasUsedOnSol = response.photo_manifest.photos.filter((obj) => obj.sol == this.sol);
        let cameraList = [];

        for(let camera in CamerasUsedOnSol[0].cameras){
            if(CamerasUsedOnSol[0].cameras.hasOwnProperty(camera)){
                cameraList.push({'name' : CamerasUsedOnSol[0].cameras[camera]});
            }
        }

        return cameraList;
    },

    /**
     * Preloads the Url and sol required to fetch the collection.
     *
     * @param rover
     * @param sol
     */
    loadCamerasFromRover(rover, sol){
        this.url = 'https://stud.hosted.hr.nl/0843154/Jaar3/FED/proxy.php?url=' + encodeURIComponent('https://api.nasa.gov/mars-photos/api/v1/manifests/' + rover + '/?api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt');
        this.sol = sol;
    }
});



export default Cameras;
